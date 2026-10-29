import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
export function checkProfile(markdown) {
  const errors = [];
  for (const match of markdown.matchAll(/\]\(([^\s)]+)\)/g)) {
    const target = match[1];
    if (target.startsWith("#")) continue;
    try {
      const url = new URL(target);
      if (!["https:", "http:", "mailto:"].includes(url.protocol))
        errors.push(`Unsupported link scheme: ${url.protocol}`);
      if (url.username || url.password) errors.push("Credentials in a link");
      if (["example.com", "example.org"].includes(url.hostname))
        errors.push("Placeholder link");
    } catch {
      errors.push(`Invalid absolute link: ${target}`);
    }
  }
  return errors;
}
if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  const errors = checkProfile(
    await readFile(new URL("../README.md", import.meta.url), "utf8"),
  );
  for (const error of errors) console.error(error);
  if (errors.length) process.exitCode = 1;
  else
    console.log(
      "Profile link syntax passed (destinations and factual claims were not verified).",
    );
}

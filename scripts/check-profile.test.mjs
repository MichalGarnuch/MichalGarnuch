import { test } from "node:test";
import assert from "node:assert/strict";
import { checkProfile } from "./check-profile.mjs";
test("rejects credential leaks and placeholder addresses", () => {
  assert.equal(checkProfile("[x](https://token@host.test/p)").length, 1);
  assert.equal(checkProfile("[x](https://example.com)").length, 1);
  assert.equal(checkProfile("[x](https://github.com/a/b?q=1)").length, 0);
});

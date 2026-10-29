# MichalGarnuch: profil jako sprawdzany punkt wejścia do projektów

Branch: `wersja-inzynierska-2026`. Stan bazowy: `main` / `b323b45b137b33d67f049d4175db3aa0d1e6dd6f`. Data wykonania: 29.10.2026.

To autorski wariant rozwojowy konkretnego fragmentu projektu. Branch zachowuje pełne drzewo kodu z wersji bazowej i zawiera opisane poniżej zmiany. [Wcześniejszy audyt](https://github.com/MichalGarnuch/MichalGarnuch/tree/audyt-edukacyjny-2026) jest na osobnym branchu. Nie wykonywano merge ani wdrożenia.

## Rola tego repozytorium

To profil GitHub, więc jego „wersja inżynierska” powinna pomagać czytelnikowi znaleźć i ocenić projekty. Nie dodawałem tu sztucznej aplikacji ani nowych deklaracji doświadczenia, których nie da się potwierdzić.

Dodałem `WERSJE_REPOZYTORIOW.md`: indeks wariantów publicznych repozytoriów z linkami do branchy i dokumentacji. Dzięki temu można czytać projekty systematycznie i porównywać konkretne decyzje: matematykę modelu, transakcje, uwierzytelnienie, persystencję i kontrolę wydania.

## Mała, użyteczna automatyzacja

`scripts/check-profile.mjs` sprawdza składnię linków Markdown w README. Dopuszcza oczekiwane schematy, odrzuca poświadczenia w adresach i przykładowe domeny, które często zostają po kopiowaniu szablonu. Funkcja jest eksportowana do testu, a tryb CLI zwraca kod błędu przy problemie.

`node --test scripts/check-profile.test.mjs` sprawdza odrzucanie błędnych adresów; `node scripts/check-profile.mjs` kontroluje rzeczywisty README. Narzędzie nie wykonuje żądań sieciowych, więc nie myli chwilowej awarii serwera z błędną treścią profilu.

## Granica dowodu

Poprawny URL nie dowodzi, że strona istnieje, należy do autora ani że opis umiejętności jest prawdziwy. Test nie potwierdza jakości wszystkich projektów. Indeks kieruje do ich własnych wyników testów i ograniczeń, zamiast przykrywać je pojedynczą plakietką „production ready”.

## Dalszy kierunek

Wybrałbym kilka projektów reprezentatywnych i przygotował dla nich powtarzalne demo, opis konkretnego problemu, krótką decyzję architektoniczną i wykonaną walidację. Profil powinien pokazywać dowody i kompromisy. Kontrolę dostępności linków można dodać jako okresowe CI z retry, oddzielając błędy sieci od błędów składni. Przed publicznym wyróżnieniem projektu trzeba sprawdzić jego README, brak ujawnionych sekretów i warunki licencji; indeks prywatnych repozytoriów wymaga dodatkowej uwagi opisanej poniżej.

## Weryfikacja wykonana w tej sesji

| Sprawdzenie | Wynik i znaczenie |
|---|---|
| node --test scripts/check-profile.test.mjs | PASS: test niepożądanych adresów |
| node scripts/check-profile.mjs | PASS: składnia linków rzeczywistego README |

### Granice weryfikacji

Nie sprawdzano dostępności stron ani faktów biograficznych. To repozytorium jest publiczne; indeks na tym branchu obejmuje wyłącznie publiczne repozytoria.

## Mapa zmian

- [`WERSJE_REPOZYTORIOW.md`](WERSJE_REPOZYTORIOW.md)
- [`scripts/check-profile.mjs`](scripts/check-profile.mjs)
- [`scripts/check-profile.test.mjs`](scripts/check-profile.test.mjs)

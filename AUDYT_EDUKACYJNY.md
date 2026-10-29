# MichalGarnuch — przewodnik i audyt edukacyjny

**Stan przeglądu:** 29 października 2026 r.  
**Gałąź bazowa:** `main`  
**Analizowany commit:** `b323b45b137b33d67f049d4175db3aa0d1e6dd6f`  
**Mapa wszystkich plików śledzonych przez Git:** [1](AUDYT_MAPA_01.md)

> To jest przegląd reprezentatywnych części projektu z inwentaryzacją wszystkich śledzonych plików, a nie pełna, ręczna weryfikacja każdego wiersza ani certyfikat bezpieczeństwa. Mapa jest automatyczna; wymienienie pliku nie oznacza, że został przetestowany lub dokładnie przeczytany. Wyniki odnoszą się do powyższego commita. Inne gałęzie mogą zawierać inne wersje.

## Co robi projekt

Repozytorium profilu GitHub: opis doświadczenia, projektów i technologii w [`README.md`](README.md).

## Jak czytać kod i jak przepływają dane

GitHub wyświetla README repozytorium o nazwie odpowiadającej kontu jako stronę profilu. Nagłówki, łącza i obrazy kierują czytelnika do projektów.

Podczas czytania zacznij od punktu wejścia, przejdź do funkcji odpowiadającej za żądanie lub działanie użytkownika, a potem do operacji na danych i wyniku. Mapa plików podaje ścieżki i automatycznie rozpoznane nazwy wybranych deklaracji.

## Co jest wartościowe w obecnym rozwiązaniu

Profil wiąże doświadczenie zawodowe z portfolio i może służyć jako punkt wejścia dla rekruterów oraz klientów.

## Ustalenia, luki i proponowany rozwój

- **Do przeglądu przez właściciela:** sprawdź, czy opisy wykształcenia, stanowisk i linki są aktualne oraz czy każdą deklarację można potwierdzić. Sam kod README nie pozwala zweryfikować tych informacji.

- **Do rozwoju:** dodać wyraźne linki do 2–3 najlepszych projektów, opis roli w każdym i krótką instrukcję kontaktu; utrzymywać spójność językową.

## Sprawdzenia i ich granice

Repozytorium zawiera jeden plik README. Nie dotyczy uruchamiania testów aplikacji; nie weryfikowano wszystkich zewnętrznych linków.

W kopii roboczej dostępne pliki Pythona sprawdzono dodatkowo parserem składni; sprawdzono też składnię odczytanych plików `package.json` i `composer.json`. Nie zastępuje to uruchomienia programu. Kod źródłowy tej gałęzi jest taki sam jak w commicie bazowym; dodane są wyłącznie dokumenty audytu i mapy.

## Jak zaplanować kolejne prace

Najpierw zajmij się punktami oznaczonymi jako krytyczne lub wysokie, następnie ustal, które uwagi wymagają testu na pełnym środowisku. Dla każdej zmiany przygotuj osobną gałąź, konkretny przypadek odtwarzający problem i test rezultatu. Nie traktuj propozycji jako potwierdzenia, że poprawka została już wdrożona.

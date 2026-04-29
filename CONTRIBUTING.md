# Jak wnieść wkład do projektu

Dziękujemy za zainteresowanie współpracą! Ten poradnik jest projektem społecznościowym i każda pomoc jest cenna.

---

## Zasady ogólne

- Pisz po polsku (lub angielsku jeśli wolisz — obie wersje są akceptowane)
- Bądź zwięzły i konkretny
- Nie wymyślaj — jeśli nie jesteś pewien informacji, zaznacz to jako `[WERYFIKACJA WYMAGANA]`
- Nie dodawaj specyficznych wartości liczbowych jeśli nie masz ich ze sprawdzonego źródła
- Oznaczaj wersję gry, do której odnosi się zawartość

---

## Struktura Pull Requestów

### Tytuł PR
```
[SEKCJA] Krótki opis zmiany
```
Przykłady:
- `[CAMPAIGN] Dodano wskazówki do Act 2 Boss`
- `[CHEAT-SHEET] Aktualizacja tabeli walut`
- `[MECHANICS] Poprawka opisu mechniki Break`

### Opis PR
- Co zostało dodane/zmienione
- Na jakiej wersji gry bazuje zmiana
- Ewentualne źródła (wiki, stream, patch notes)

---

## Jak dodawać nowe treści

### Nowy build
1. Skopiuj [szablon buildu](./builds/TEMPLATE.md)
2. Wypełnij pola według schematu
3. Nie wymyślaj statystyk — opisuj koncepcję, nie konkretne wartości
4. Umieść plik w `builds/[klasa]/[nazwa-buildu].md`

### Nowy boss guide
1. Sprawdź strukturę istniejących plików w `campaign/bosses/`
2. Opisz fazy, mechaniki i wskazówki
3. Nie opisuj konkretnych wartości HP ani DPS jeśli nie są oficjalnie potwierdzone

### Nowa ściągawka
1. Sprawdź czy podobna ściągawka już nie istnieje
2. Użyj tabel Markdown tam gdzie to możliwe
3. Umieść w `cheat-sheets/`

---

## Oznaczenia stanu treści

Używaj tych tagów w plikach:

| Tag | Znaczenie |
|-----|-----------|
| `[EA]` | Early Access — może się zmienić |
| `[AKTUALNE]` | Zweryfikowane w bieżącej wersji |
| `[NIEAKTUALNE]` | Wymaga aktualizacji |
| `[WIP]` | W trakcie pisania |
| `[WERYFIKACJA]` | Wymaga potwierdzenia |

---

## Styl pisania

- Używaj nagłówków hierarchicznie (`#`, `##`, `###`)
- Używaj tabel dla porównań i list wartości
- Używaj bloków kodu dla notacji matematycznych lub skrótów klawiszowych
- Linki wewnętrzne zawsze względne (np. `../mechanics/core-mechanics.md`)

---

## Kontakt

Masz pytania? Otwórz [Issue](../../issues/new) z tagiem `question`.

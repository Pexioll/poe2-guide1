# Efektywny Mapping — Przewodnik

---

## Czym Jest "Mapping"?

Mapping to powtarzalne grindowanie map (Waystones) w celu:
- Zdobycia **doświadczenia** (XP)
- Zdobycia **lootu** (itemy, waluta)
- Postępu w **Atlas Passive Tree**
- Dostępu do **wyższych tierów**

---

## Podstawy Efektywnego Mappingu

### Zasada #1: Pełne Clear vs Skip
- **Full clear** (czyszczenie całej mapy) = więcej XP, więcej lootu, ale wolniej
- **Skip to boss** = szybciej, mniej XP i lootu
- Zalecenie dla większości: czyść 70–80% mapy, zawsze zabij bossa

### Zasada #2: Prędkość > Doskonałość
- Szybsze czyszczenie map (even niższy tier) = więcej waluty na godzinę
- Nie trać czasu na chowanie się w rogach mapy

### Zasada #3: Waystone Management
- Zawsze ulepszaj Waystones zanim je użyjesz
- Minimum: Magic (Transmutation)
- Optimal: Rare z dobrymi modami

---

## Tworzy Lootu (IIQ + IIR)

### Item Quantity (IIQ)
- Bezpośrednio zwiększa ilość lootu który dropuje
- **Najważniejszy** mod z perspektywy farmowania currency

### Item Rarity (IIR)
- Zwiększa szansę na droppowanie rzadszych (lepszych) itemów
- Ważny przy poszukiwaniu Unique items

### Pack Size
- Więcej wrogów w packach = więcej XP + więcej lootu
- Jeden z lepszych modów ogółem

---

## Budowanie Taliorca Mappingu

### Prędkość Ruchu
- Movement Speed na butach: priorytet
- Movement Skill (np. Dash, Flame Dash): obowiązek
- Passive nodes do speed

### Prędkość Czyszczenia
- AoE skills do packowania wrogów razem
- Projectile skills z Pierce przez wiele wrogów
- DoT (Ignite, Poison) na packach

### Flask Management
- Flask'i powinny działać po kilku killach (Surgeon's prefix lub Perpetual)
- Utility flasks: Quartz (Phasing), Jade (Evasion), itp.

---

## Layout Map — Tier Agnostic Tips

### Automap Usage
- Zawsze miej otwartą małą automapę (`Tab`)
- Ucz się layoutów popularnych map (szybsze czyszczenie)

### Dense Packs
- Szukaj dużych packsin (skupisk wrogów)
- AoE w środku tłumu > pojedyncze ataki

---

## Strategia Farming — Różne Podejścia

### Strategia: Currency Farming
**Cel:** Zdobyć jak najwięcej walut  
**Metoda:**
1. Skup się na league mechanics (Breach, Ritual, itp.)
2. Atlas Passive Tree: maksymalizuj league mechanic frequency
3. Szybki clear, nie full clear

### Strategia: XP Farming
**Cel:** Szybkie levelowanie postaci  
**Metoda:**
1. Mapy z dużym Pack Size
2. Full clear każdej mapy
3. Wyższy tier mapy = więcej XP

### Strategia: Unique Hunting
**Cel:** Znalezienie konkretnego Unique itemu  
**Metoda:**
1. Zwiększ IIR przez mody Waystone i Atlas nodes
2. Mapuj content powiązany z szukanym Unique
3. Trade może być szybszy — policz koszt vs czas farmowania

### Strategia: Boss Farming
**Cel:** Farma konkretnych bossów map  
**Metoda:**
1. Atlas Passive Tree: boss encounter frequency
2. Rush do boss room (skip pack content)
3. Efektywny tylko jeśli boss dropuje cenne itemy

---

## Loot Filter — Jak i Dlaczego Używać

### Czym jest Loot Filter?

**Loot Filter** to plik tekstowy który mówi grze:
- Które przedmioty **pokazywać** (i jak je wyróżniać)
- Które przedmioty **ukrywać** (niewidoczne na ziemi)
- Jak **stylizować** nazwy/ramki dropów (kolor, rozmiar, dźwięk)

### Dlaczego Loot Filter jest NIEZBĘDNY w Mappingu

Bez filtra:
- Setki bezwartościowych itemów na podłodze (Scroll of Wisdom, normalne ekwipunki, itp.)
- Nie możesz szybko ocenić co jest warte podniesienia
- Mapping = zatrzymywanie się co chwilę przy śmieciach

Z filtrem:
- Widzisz **tylko to co jest warte twojego czasu**
- Cenne itemy są wyróżnione kolorami i dźwiękiem
- Możesz biec przez mapę i reagować tylko na warte uwagi dropy

> **Zasada:** Każdy gracz w endgame używa Loot Filtra. To nie opcja — to konieczność.

### Jak Zainstalować Loot Filter

#### Opcja 1: FilterBlade (Zalecana)

1. Wejdź na [filterblade.xyz](https://www.filterblade.xyz/)
2. Wybierz grę: **Path of Exile 2**
3. Wybierz preset (Mild / Regular / Strict / Very Strict)
4. Dostosuj (opcjonalnie) i pobierz plik
5. Umieść plik w folderze filtrów PoE2:
   ```
   %userprofile%\Documents\My Games\Path of Exile 2\
   ```
6. W grze: Options → UI → Filter → wybierz pobrany plik

#### Opcja 2: NeverSink's Filter

- Popularny filter, dostępny na [GitHub NeverSink](https://github.com/NeverSinkDev/NeverSink-PoE2litefilter)
- Kilka poziomów restrykcji (Regular, Semi-Strict, Strict, Uber-Strict)
- Regularnie aktualizowany po patchach

### Poziomy Restrykcji — Kiedy Używać

| Poziom | Kiedy | Co Ukrywa |
|--------|-------|-----------|
| **Mild / Regular** | Kampania, wczesny endgame | Tylko absolutne śmieci |
| **Semi-Strict** | T1–T10 mapy | Normalne i niskie magic itemy |
| **Strict** | T10–T15 mapy | Większość magic itemów, słabe rare |
| **Very Strict** | T15+ / Pinnacle | Prawie wszystko oprócz currency i top tier |
| **Uber-Strict** | Speed farming T16 | Tylko waluta i bardzo cenny loot |

> **Zalecenie dla nowych graczy:** Zacznij od **Regular/Semi-Strict** — zobaczysz więcej itemów i nauczysz się co jest wartościowe. Zaostrz filtr gdy wiesz co zbierasz.

### Dostosowywanie Filtra

#### Na FilterBlade możesz:
- **Zmienić progi** (np. zawsze pokazuj items z X+ life)
- **Dodać własne reguły** (np. highlight konkretny Unique)
- **Zmienić kolory** i dźwięki powiadomień
- **Eksportować/importować** profile

#### Ważne reguły które warto dostosować:
- **Currency** — zawsze widoczna, duże litery
- **Rare items** — próg item level (np. tylko iLvl 80+)
- **Unique items** — zawsze widoczne niezależnie od filtra
- **Gemy** — zawsze widoczne
- **Flask** — widoczne w kampanii, można ukryć normalne w endgame

### Kolory w Filtrach — Standardowe Oznaczenia

Większość filtrów używa podobnych kodów kolorów:

| Kolor | Typ Przedmiotu |
|-------|----------------|
| Biały | Normal item |
| Niebieski | Magic item |
| Żółty | Rare item |
| Brązowy / Złoty | Unique item |
| Zielony | Gem |
| Pomarańczowy | Currency (ważna) |
| Czerwony | Very important / Ważny drop |
| Fioletowy | Special / Breach / Divination |

### Dźwięki w Filtrach

Dobre filtry mają dźwiękowe powiadomienia:
- **Cichy dźwięk** → Waluta pospolita (Alt, Trans, itp.)
- **Średni dźwięk** → Waluta wartościowa (Exalt, Regal, itp.)
- **Głośny dźwięk** → Divine / Mirror / bardzo cenny drop
- **Specjalny dźwięk** → Unique item lub coś rzadkiego

> **Wskazówka:** Graj z dźwiękiem podczas farmowania — filter sound alerts to twój "radar" na dropy.

### Aktualizowanie Filtra

**[EA] Filtr wymaga aktualizacji po każdym większym patchu:**
- Nowe itemy mogą nie być pokryte starym filtrem
- Po patchu sprawdź czy filtr ma update
- FilterBlade i NeverSink publikują aktualizacje szybko po patchach

---

## Śmierć w Mapach — Konsekwencje

### Softcore
- Utrata XP (penalty)
- Powrót do miasta

### Hardcore
- Degradacja do Softcore (trwała śmierć)

### Map Progress
- Mapa nie zostaje "stracona" przez śmierć
- Ale możesz stracić skumulowany loot jeśli nie zdążysz wrócić

---

## Common Mistakes w Mappingu

1. **Używanie normal Waystones** — zawsze ulepsz minimum do magic
2. **Ignorowanie league mechanics** — to główne źródło walut
3. **Za dużo czasu na jednej mapie** — efektywność spada po pełnym clear
4. **Grindowanie złego tieru** — za niski tier = mało XP i wartości lootu
5. **Ignorowanie Atlas Passive Tree** — to ogromna różnica w dropach

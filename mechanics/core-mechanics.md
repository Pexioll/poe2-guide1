# Podstawowe Mechaniki PoE2

---

## Zasoby postaci

### Life (Życie)
- Podstawowy zasób obronny większości build
- Zerowe życie = śmierć
- Regeneruje się automatycznie (domyślnie powoli)
- Mody: `+X do Maximum Life`, `X% increased Maximum Life`, Life Regen per second

### Mana
- Zasób potrzebny do używania umiejętności
- Nie regeneruje się automatycznie tak szybko jak w PoE1
- Mody: `+X do Maximum Mana`, Mana Regen, Mana Cost Reduction
- **Wskazówka:** Zarządzaj mną przez Support Gemy (Mana Forethought, itp.)

### Energy Shield (ES)
- Alternatywny zasób obronny zamiast lub obok życia
- Regeneruje się po kilku sekundach bez otrzymywania obrażeń
- Pierw znika ES, potem life
- Priorytet na postavy intelligence-based

### Spirit
- Nowy zasób w PoE2 — wymagany do utrzymywania ciągłych umiejętności (persistent skills)
- Miniony, aury i podobne efekty rezerwują Spirit
- Zwiększaj przez Ascendancy i gemy

---

## Obrona

### Typy obrony

| Typ | Klasy | Opis |
|-----|-------|------|
| Armour | Warrior, Ranger | Redukuje fizyczne obrażenia |
| Evasion | Ranger, Monk | Szansa na uniknięcie trafienia |
| Energy Shield | Sorceress, Witch | Dodatkowy zasób HP |
| Block | Warrior (tarcza) | Szansa na zablokowanie ataku |
| Dodge Roll | Wszyscy | Aktywne unikanie (klawisz Space) |

### Formuła Armour
Redukuje fizyczne obrażenia według formuły nieliniowej:
- Wysoka armour ≠ 100% redukcji — istnieje limit efektywności
- Najefektywniejsza wobec wielu małych ciosów

### Evasion
- Szansa na całkowite uniknięcie trafienia
- **Nie działa na AoE** (area-of-effect ground effects)
- Skuteczna głównie wobec ataków jednorazowych

---

## Atak vs Rzucanie Zaklęć

### Attack (Atak)
- Skaluje się z: Physical Damage, Attack Speed, Accuracy
- Wymaga: trafienia (Accuracy vs Evasion)
- Może krytykować

### Spell (Zaklęcie)
- Skaluje się z: Spell Damage, Cast Speed, Element Damage
- Zawsze trafia (nie wymaga Accuracy)
- Może krytykować

---

## Critical Strike (Krytyczny)

- **Crit Chance** — szansa na krytyczne trafienie (%)
- **Crit Multiplier** — mnożnik obrażeń przy krytyku (domyślnie 150% = 1.5x)
- Buildy crit zainwestowane w oba atrybuty są często silniejsze niż non-crit

### Budowanie Crit
1. Podnieś **Critical Strike Chance** powyżej 50% (żeby było opłacalne)
2. Inwestuj w **Critical Strike Multiplier** dla skalowania
3. Pamiętaj: Crit Chance dotyczy bazowego szansy gema + bonusów

---

## Stagger / Break

Nowa mechanika PoE2:
- Niektóre ataki budują **Impact** na wrogu
- Pełny pasek Stagger = **chwilowe ogłuszenie wroga**
- Podczas obudzenia wrogie HP i obrona są tymczasowo obniżone
- Ataki budują Stagger szybciej niż zaklęcia (zazwyczaj)

---

## Dodge Roll

- Dostępny dla **wszystkich klas** (nie tylko Evasion klas)
- Klawisz: **Spacja** (domyślnie)
- Zapewnia **Immunity frames** (i-frames) na początku animacji
- Cooldown — nie można rollować bez przerwy
- Wspierane przez: Dodge Roll Speed, Stamina

### Kiedy używać Dodge Roll
- Duże telegrafowane ataki bossa
- Kiedy otoczony przez wrogów
- Ucieczka z ground effects (ogień, lód, trucizna na podłodze)

---

## Stash Tabs i Zarządzanie Ekwipunkiem

### Stash — Podstawy

**Stash** to skrzynka w każdym mieście do przechowywania przedmiotów. Jest wspólna dla wszystkich postaci na koncie (w ramach ligi).

| Cecha | Opis |
|-------|------|
| Dostęp | Klikasz skrzynię w mieście |
| Pojemność | Zależy od liczby zakupionych tabów |
| Domyślne taby | Kilka darmowych tabów na start |
| Premium taby | Kupowane za PoE Points (mikrotransakcje) |

### Typy Stash Tabs

| Tab | Opis | Przydatność |
|-----|------|-------------|
| **Normal Tab** | Standardowa siatka itemów | Podstawowy |
| **Currency Tab** | Specjalny tab z podziałką na każdą walutę | **Bardzo zalecany** — organizes currency |
| **Map Tab** | Przechowuje Waystones według tieru i typu | Dobry dla endgame |
| **Fragment Tab** | Przechowuje Breachstones, klucze, fragment | Wygodny |
| **Gem Tab** | Sortuje gemy | Dla kolekcjonerów |
| **Unique Tab** | Przechowuje Unique itemy | Wygodny |
| **Quad Tab** | 4× większy niż Normal | Masa przestrzeni |
| **Divination Tab** | Karty przepowiedni | Endgame collectors |

> **Wskazówka dla nowych:** Na początku nie musisz kupować tabów. Podstawowe taby wystarczą do kampanii. W endgame **Currency Tab** to pierwsza warta rozważenia inwestycja.

### Strategia Organizacji Stasha

Dobra organizacja Stasha oszczędza czas i frustrację:

```
Tab 1: Aktualny gear (itemy na postaci w użyciu)
Tab 2: Currency (waluta)  ← Currency Tab idealny
Tab 3: Gemy (spare gemy, lewe gemy do sprzedaży)
Tab 4: Crafting materials (Essences, Fossils, itp.)
Tab 5: Do sprzedania (itemy które chcesz sprzedać graczom)
Tab 6+: Długoterminowe przechowywanie (Uniques, Waystones)
```

### Zarządzanie Przestrzenią

**Filtrowanie i sortowanie:**
- Kliknij prawym przyciskiem na tab → "Sort" — automatyczne sortowanie
- Używaj Ctrl+Klik aby przenieść item szybko między inventory a stashem
- Shift+Klik na item w stashu → przenosi do inventory

**Co trzymać, co sprzedać:**

| Przedmiot | Decyzja |
|-----------|---------|
| Rare items z dobrymi modami | Zachowaj lub sprzedaj |
| Normale i magie bez wartości | Sprzedaj do vendora |
| Waluta (wszystka) | Zachowaj |
| Gemy nie używane | Sprzedaj do vendora lub graczom |
| Unikalne itemy | Oceń wartość na poe2.trade, sprzedaj jeśli drogie |

### Vendor Tab (Sprzedaż Innym Graczom)

W PoE2 możesz wystawić stash tab jako "Public" do handlu:
1. Kliknij prawym na tab → "Make Public"
2. Ustaw ceny na itemach (kliknij prawym na item)
3. Inni gracze widzą Twój tab w poe2.trade
4. Przychodząc do Ciebie kupują automatycznie przez system

> **Ważne:** Nie wystawiaj WSZYSTKICH tabów jako public — tylko dedykowany "Do sprzedania".

---

## Statusy i Ailments

### Elementarne Ailments

| Ailment | Element | Efekt |
|---------|---------|-------|
| Ignite | Ogień | Obrażenia przez czas (DoT) |
| Freeze | Zimno | Unieruchomienie (pełny freeze) |
| Chill | Zimno | Spowolnienie |
| Shock | Piorun | Zwiększone obrażenia od wszystkich źródeł |
| Poison | Chaos | Obrażenia przez czas |
| Bleed | Fizyczne | Obrażenia przez czas (więcej podczas ruchu) |

### Jak ailments skalują się
- Ignite, Poison, Bleed skalują z bazowymi obrażeniami które je spowodowały
- Shock — szansa i siła zależy od obrażeń błyskawicy
- Freeze — zależy od obrażeń zimna vs HP wroga

---

## Accuracy & Hit Chance

- Ataki (nie zaklęcia) wymagają trafienia
- **Accuracy Rating** kontra **Evasion Rating** wroga = szansa na trafienie
- Domyślnie: 95% szansa trafienia dla normalnych wrogów
- Bossowie mają wyższy Evasion — buildy Accuracy mogą mieć problemy
- Mody: `+X Accuracy Rating`, `X% increased Global Accuracy`

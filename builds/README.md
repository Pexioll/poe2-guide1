# Buildy — Schemat i Zasoby

> **Uwaga:** Ten dział zawiera **schematy i szablony** do dokumentowania buildów, nie konkretne gotowe buildy. Gra jest w Early Access i meta zmienia się przy każdym patchu.

---

## Czym jest "build" w PoE2?

Build to kombinacja:
- **Klasy** i **Ascendancy**
- **Głównej umiejętności** (skill gem)
- **Support Gemów**
- **Passive Tree** (drzewko pasywne)
- **Itemów** (sprzętu)
- **Stylu gry** (playstyle)

---

## Zawartość tej sekcji

| Plik | Opis |
|------|------|
| [Szablon Buildu](./TEMPLATE.md) | Jak dokumentować build |
| [Checklist Buildu](./build-checklist.md) | Jak sprawdzić czy build jest gotowy |
| [Teoria Buildowania](./build-theory.md) | Jak myśleć o budowaniu postaci |

---

## Klasy i ich style

### Warrior
- Główny stat: Strength
- Armour-based obronność
- Melee specialization
- Ascendancies: **Titan** (raw power), **Warbringer** (totems, war cries)

### Ranger
- Główny stat: Dexterity
- Evasion-based obronność
- Łuk lub szybkie ataki
- Ascendancies: **Deadeye** (projectiles, pierce), **Pathfinder** (flasks, nature)

### Monk
- Główny stat: Dexterity + Intelligence
- Hybrydowa obronność
- Szybkie melee lub elemental
- Ascendancies: **Invoker** (elemental), **Acolyte of Chayula** (chaos, ES)

### Sorceress
- Główny stat: Intelligence
- Energy Shield
- Zaklęcia elementarne
- Ascendancies: **Stormweaver** (lightning/storm), **Chronomancer** (czas, cooldowns)

### Mercenary
- Główny stat: Strength + Dexterity
- Hybrydowa obronność
- Kusza, granaty, ammo
- Ascendancies: **Witchhunter** (elemental ammo, anti-magic), **Gemling Legionnaire** (gem power)

### Witch
- Główny stat: Intelligence
- Energy Shield lub Życie
- Miniony, przekleństwa, ciemna magia
- Ascendancies: **Infernalist** (fire, demon), **Blood Mage** (life costs, blood)

---

## Zasoby do buildowania

- **Path of Building (PoB)** — symulator budowania postaci, oblicza DPS, EHP itd.
- **PoE2 Wiki** — dokumentacja gemów, itemów, mechanik
- **Maxroll.gg** — poradniki do buildów (zewnętrzne)
- **poe2db** — baza danych itemów i modów

Pełna lista w [Zasobach](../resources/useful-links.md).

---

## Jak dokumentować własny build

Skorzystaj z [Szablonu](./TEMPLATE.md) i:
1. Opisz **koncepcję** — co chcesz osiągnąć
2. Wymień **główną umiejętność** i support gemy
3. Opisz **strategię passive tree** (nie musisz mapować każdego node'a)
4. Wymień **kluczowe itemy** (nie musisz podawać konkretnych roll'ów)
5. Opisz **playstyle** — jak gra się tym buildem
6. Zaznacz **wersję gry** dla której build był tworzony
---

## Jak Oceniać Buildy Innych (Kopiowanie Cudzych Buildów)

> Kopiowanie buildów z zewnętrznych źródeł jest powszechne w PoE2. Ważne jest jednak wiedzieć **jak ocenić czy build jest godny zaufania** i na co uważać.

### Zanim skopiujesz build — Checklist

#### 1. Sprawdź datę publikacji
- Build z poprzedniego sezonu/patcha może być **nieaktualny**
- Gra w EA zmienia się często — sprawdź czy build jest z bieżącej wersji
- Szukaj daty lub wersji gry w tytule/opisie

#### 2. Zweryfikuj autora
| Kryterium | Dobry znak | Zły znak |
|-----------|-----------|---------|
| Kim jest autor | Znany streamer/content creator, doświadczony gracz | Anonimowy, bez historii |
| Czy podał źródło | Tak — własne testy, VODs | Nie — "ufaj mi bro" |
| Czy odpowiada na pytania | Aktywna dyskusja | Brak odpowiedzi |
| Czy robi aktualizacje | Updatuje po patchach | Ostatni update miesiąc temu |

#### 3. Zrozum koncepcję, nie tylko kopiuj

Dobry build poradnik powinien wyjaśnić:
- **Dlaczego** te gemy, nie inne
- **Jak** passive tree prowadzi do celu buildu
- **Co jest kluczowe** (core) vs co jest opcjonalne (quality of life)

> **Zasada:** Jeśli nie rozumiesz dlaczego coś jest w buildzie, możesz nie poradzić sobie gdy coś pójdzie nie tak.

#### 4. Sprawdź budżet

- Niektóre buildy wymagają **bardzo drogich itemów** do działania
- Szukaj sekcji "Budget Version" lub "Starter Version"
- Sprawdź ceny kluczowych itemów na poe2.trade **przed** zainwestowaniem currency

#### 5. Sprawdź czy build jest "Hardcore viable"

Nawet jeśli grasz Softcore, build hardcore viable zazwyczaj jest **bezpieczniejszy** i ma lepszą obronę. Nie jest to wymaganie, ale dobry wskaźnik defensywności.

### Czerwone Flagi — Na Co Uważać

| Czerwona Flaga | Co to może znaczyć |
|----------------|-------------------|
| "10 mil DPS" bez wyjaśnienia | Przesadzone, prawdopodobnie nieosiągalne |
| Brak sekcji o przeżywalności | Build jest glass cannon — umierasz często |
| "Tylko jeden Item działa" | Bardzo drogi lub niemożliwy do znalezienia |
| Brak alternatyw dla drogich itemów | Build jest pay-to-win lub endgame only |
| Brak wersji leveling | Będziesz miał problemy w kampanii |
| Komentarze pełne skarg | Inni gracze mają problemy |

### Jak Adaptować Build

Rzadko możesz skopiować build 1:1 — często brakuje itemów lub walut.

**Procedura adaptacji:**
1. Zidentyfikuj **core** mechaniki — co jest absolutnie niezbędne
2. Zidentyfikuj **opcjonalne** elementy — co można zastąpić
3. Użyj **Path of Building** aby symulować zamienniki
4. Szukaj **community resources** (Reddit, Discord) — inni gracze mogą mieć adaptacje

### Narzędzia do Weryfikacji Buildu

| Narzędzie | Do czego |
|-----------|---------|
| **Path of Building (PoB)** | Import buildu, symulacja DPS i EHP |
| **poe2.trade** | Sprawdź ceny itemów w buildzie |
| **poe.ninja** | Sprawdź jak popularny jest build, jakie itemy używają top gracze |
| **PoE2 Wiki** | Weryfikuj mechaniki gemów i interakcje |


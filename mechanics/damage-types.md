# Typy Obrażeń

---

## Drzewo Typów Obrażeń

```
Obrażenia
├── Fizyczne (Physical)
│   ├── Bleed (krwawienie) — ailment
│   └── Stagger (staggering) — mechnika
├── Elementarne (Elemental)
│   ├── Ogień (Fire)
│   │   └── Ignite — ailment
│   ├── Zimno (Cold)
│   │   ├── Chill — ailment (spowolnienie)
│   │   └── Freeze — ailment (unieruchomienie)
│   └── Piorun (Lightning)
│       └── Shock — ailment (zwiększone obrażenia od wszystkich źródeł)
└── Chaos
    └── Poison — ailment
```

---

## Fizyczne (Physical)

- Redukowane przez **Armour**
- **Bleed** — obrażenia przez czas; krwawi szybciej gdy ofiara się rusza
- Wiele ataków wręcz jest typem fizycznym
- Konwersja do innych typów jest możliwa (Fire Axe: Physical → Fire)

---

## Ogień (Fire)

- Redukowane przez **Fire Resistance**
- **Ignite** — obrażenia przez czas, skaluje się z obrażeniami ognia
- Popularny typ u Sorceress i Witch (Infernalist)

---

## Zimno (Cold)

- Redukowane przez **Cold Resistance**
- **Chill** — spowalnia wroga (% redukcja prędkości)
- **Freeze** — całkowite unieruchomienie (zależy od Cold damage vs HP wroga)
- Bardzo użyteczne w defensive utility (freezowanie bossów limituje ich ataki)

---

## Piorun (Lightning)

- Redukowane przez **Lightning Resistance**
- **Shock** — zwiększa wszystkie obrażenia jakie cel otrzymuje
- Szczególnie niebezpieczny bo amplifikuje inne typy obrażeń
- Własny Shock może być bardzo potężny (buildy Shock Stacking)

---

## Chaos

- Redukowane przez **Chaos Resistance**
- **Poison** — obrażenia przez czas, skaluje z fizycznym i chaosem
- Chaos damage **ignoruje Energy Shield** (przechodzi przez ES do życia)
- Dlatego ES buildy potrzebują chaos resistance lub CI

---

## Konwersja Obrażeń

Mechanika zamiany jednego typu obrażeń na inny:
- `X% of Physical Damage converted to Fire Damage`
- Zamieniony typ skaluje się z modami nowego typu
- Oryginalny typ traci proporcjonalną część

### Przykład konwersji
```
Umiejętność: 100 Physical Damage
Konwersja: 50% Physical → Fire
Wynik: 50 Physical + 50 Fire
```

- Konwersja jest "przed" modami — mody Fire Damage dotyczą już skonwertowanej części
- Można skonwertować 100% = pełna konwersja

---

## Obrażenia przez Czas (Damage over Time, DoT)

| DoT | Typ | Skaluje z |
|-----|-----|-----------|
| Ignite | Ogień | Fire Damage który spowodował Ignite |
| Bleed | Fizyczne | Physical Damage który spowodował Bleed |
| Poison | Chaos | Physical + Chaos Damage |

### Mody DoT
- `Increased Damage over Time` — ogólny
- `Increased Fire Damage over Time` — specyficzny
- `Increased Duration` — dłuższe działanie DoT

---

## Hit Damage vs Ailment Damage

Buildy można podzielić na:
- **Hit builds** — obrażenia z bezpośrednich trafień
- **Ailment builds** — obrażenia głównie z DoT (Ignite, Poison, Bleed)
- **Hybrid** — oba

### Kluczowe mody dla Ailment builds
- `Chance to Ignite / Poison / Bleed`
- `Ailment Damage`
- `Duration of Ailments`

### Kluczowe mody dla Hit builds
- `Increased Damage`
- `Critical Strike Chance/Multiplier`
- `More Damage` (multiplicative)

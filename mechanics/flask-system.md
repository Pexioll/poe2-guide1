# System Flask — Przewodnik

> **[EA]** System flask w PoE2 różni się znacząco od PoE1. Zamiast systemu nabojów, flasks działają na **cooldownach** i mogą być podtrzymywane przez specjalne efekty.

---

## Jak Działają Flasks w PoE2

### Główne różnice względem PoE1

| Cecha | PoE1 | PoE2 |
|-------|------|------|
| Ładowanie | Naboje (charges) | Cooldown |
| Uzupełnianie | Killowanie wrogów | Czas odnowienia |
| Liczba slotów | 5 | 3–5 (zależy od etapu) |
| Czas trwania | Do wyczerpania nabojów | Określony czas |
| Utility flasks | Opcjonalne | Bardziej zintegrowane z buildem |

### Mechanika Cooldown

- Każdy flask ma **Base Cooldown** (czas odnowienia)
- Cooldown startuje natychmiast po użyciu — nie czekaj aż efekt minie
- Mody na flask mogą **zmniejszać cooldown** lub **zwiększać efekt**
- **[EA]** Niektóre Ascendancy (np. Pathfinder) mogą modyfikować flasks

---

## Typy Flask

### Life Flask

Przywraca HP w określonym czasie lub natychmiastowo.

| Wariant | Efekt | Priorytet |
|---------|-------|-----------|
| Zwykły Life Flask | Regeneracja HP przez kilka sekund | Podstawowy |
| Instant Recovery | Część HP przywrócona natychmiast | Bardzo dobry |
| Seething / Panicked | Natychmiastowe duże przywrócenie gdy HP niskie | Sytuacyjny |

> **Wskazówka:** Zawsze miej aktualny Life Flask (item level powinien być zbliżony do Twojego poziomu).

### Mana Flask

Przywraca Manę. Kluczowy dla buildów mana-intensive.

| Wariant | Efekt |
|---------|-------|
| Zwykły Mana Flask | Regeneracja Many przez kilka sekund |
| Instant | Natychmiastowe przywrócenie |
| Divination | **[EA/WERYFIKACJA]** specjalne efekty |

> **Wskazówka:** Jeśli masz problemy z maną, sprawdź najpierw support gemy (Lifetap, Mana Forethought) — mogą wyeliminować potrzebę Mana Flask.

### Utility Flask

Dają tymczasowe bonusy defensywne lub ofensywne. Nie przywracają HP/Many.

| Flask | Główny Efekt | Kiedy Używać |
|-------|-------------|--------------|
| Jade Flask | +X Evasion Rating | Buildy evasion, zawsze |
| Granite Flask | +X Armour | Buildy armour/tanky |
| Quartz Flask | Phasing (przenikanie przez wrogów) | W tłumie, Dodge builds |
| Basalt Flask | % Fizyczna redukcja obrażeń | Anti-melee |
| Quicksilver Flask | +% Movement Speed | Mapping, ucieczka |
| Amethyst Flask | +% Chaos Resistance | Chaos-heavy encounters |
| Ruby Flask | +% Fire Resistance | Konkretne bossowie |
| Sapphire Flask | +% Cold Resistance | Konkretne bossowie |
| Topaz Flask | +% Lightning Resistance | Konkretne bossowie |
| Silver Flask | Onslaught (Attack/Cast/Move Speed) | Bossowie, DPS |

---

## Prefixy Flask

Prefix modyfikuje **jak flask regeneruje** lub **ile regeneruje**.

### Prefixy Life Flask

| Prefix | Efekt |
|--------|-------|
| Seething | Przywraca dużo HP natychmiastowo, mało przez czas |
| Bubbling | Duże przywrócenie natychmiastowe, reszta przez czas |
| Panicked | Aktywuje się tylko gdy HP < 35%, natychmiastowe HP |
| Perpetual | **[EA]** Zmniejsza cooldown — utrzymuje flask aktywnym dłużej |
| Surgeon's | **[EA]** Flask ładuje się przy krytykowaniu |
| Avenger's | **[EA]** Flask ładuje się gdy otrzymujesz obrażenia |

> **Wskazówka:** Dla większości buildów: **Seething** lub **Bubbling** prefix dla Life Flask to solidny wybór w kampanii i wczesnym endgame.

### Prefixy Utility Flask

| Prefix | Efekt |
|--------|-------|
| Alchemist's | Zwiększony efekt, krótszy czas trwania |
| Experimenter's | Dłuższy czas trwania, mniejszy efekt |
| Chemist's | Zmniejsza cooldown |
| Ample | **[EA]** Zwiększa efekt |

---

## Sufixy Flask

Suffix daje **dodatkowy efekt** podczas gdy flask jest aktywny (lub po jego użyciu).

### Sufixy Defensywne

| Suffix | Efekt | Przydatność |
|--------|-------|-------------|
| of Curing | Usuwa Poison | Bardzo dobry wobec poison wrogów |
| of Staunching | Usuwa Bleeding | Obowiązkowy przy Bleed encounters |
| of Heat | Usuwa Freeze i Chill | Dobry wobec cold bossów |
| of Grounding | Usuwa Shock | Sytuacyjny |
| of Warding | Usuwa Curses | Vs. Malediction wrogów |
| of Iron Skin | +Armour gdy aktywny | Defensywny |
| of the Rabbit | +Evasion gdy aktywny | Evasion builds |

### Sufixy Ofensywne / Użytkowe

| Suffix | Efekt | Przydatność |
|--------|-------|-------------|
| of Adrenaline | +% Movement Speed | Mapping, ogólnie |
| of the Cheetah | Onslaught (Speed bonusy) | Aktywny farming |
| of the Mage | Zwiększone efekty zaklęć | Spell builds |
| of Reflexes | Unikanie ataków przez chwilę | Sytuacyjny |
| of Acceleration | Zwiększony Attack/Cast Speed | Offensive |

---

## Jak Dobrać Flasks do Buildu

### Schemat wyboru (Campaign → Early Endgame)

```
Slot 1: Life Flask (Seething / Bubbling prefix) + Suffix anty-ailment*
Slot 2: Drugi Life lub Mana Flask (zależy od buildu)
Slot 3: Quicksilver Flask (Adrenaline suffix) — ruch
Slot 4: Utility Flask pasujący do buildu (Jade, Granite, itp.)
Slot 5: Utility Flask — resistance lub sitational

*Wybierz suffix zależnie od głównego zagrożenia na danym etapie
```

### Priorytety sufixy anty-ailment

| Etap | Sufix | Powód |
|------|-------|-------|
| Akt 1 | of Staunching | Wrogowie zadający Bleed |
| Akt 2 | of Curing | Poison enemies w Vastiri |
| Akt 3 | of Heat | Cold/freeze enemies w dżungli |
| T1–T10 | Sprawdź mody mapy | Dopasuj do contentu |
| T11+ | Kilka sufiksów anty-ailment | Chaos i Pinnacle |

---

## Aktualizowanie Flask

### Kiedy zmieniać flask

- **Co akt** — sprawdzaj czy item level flask nie jest za niski
- Gdy **flask nie regeneruje wystarczająco** HP/Mana
- Gdy zmieniasz build i inne utility są potrzebne
- Gdy dostosujesz się do konkretnego bossa

### Jak ulepszać flask

```
Normal Flask → [Orb of Transmutation] → Magic Flask
Magic Flask → [Orb of Alteration] → Reroll modów
Magic Flask → [Orb of Augmentation] → Dodaj brakujący mod
```

> **Uwaga:** Zwykłe flasks (`Normal`) możesz kupić od vendora w każdym mieście.

---

## Błędy Początkujących — Flask Mistakes

| Błąd | Co zamiast tego |
|------|----------------|
| Nie aktualizuje flask przez kilka aktów | Sprawdź flask co akt u vendora |
| Używa flask tylko gdy HP = 0% | Używaj proaktywnie — zanim HP spadnie za nisko |
| Brak sufiksu anty-ailment | Zawsze miej przynajmniej Staunching lub Curing |
| Trzyma Mana Flask gdy nie potrzebna | Zastąp utility flask dającym więcej |
| Nie czyta modów mapy przed wejściem | Mody mapy mogą wymagać innych flask sufiksów |

---

## Endgame Flask Setup — Schemat

> **[EA]** Konkretne setupy zależą od meta i buildu. Poniżej ogólny schemat.

### Schemat Defensywny (survivability focus)
```
1. Life Flask (Seething/Bubbling) — podstawa
2. Life Flask lub Mana Flask — backup
3. Jade / Granite / Quartz — defensywny utility
4. Quicksilver — mobilność
5. Anty-ailment utility lub resistance flask
```

### Schemat Ofensywny (speed farm)
```
1. Life Flask (Panicked — automatyczny przy niskim HP)
2. Quicksilver — mapping speed
3. Silver Flask (Onslaught) — DPS i speed
4. Utility Flask — defense gap
5. Anty-ailment flask — konkretny ailment
```

---

## Powiązane Mechaniki

- **Pathfinder Ascendancy** — [EA] specjalizacja we flaskach, dodatkowe efekty
- **Alchemist's Genius** — node pasywny/ascendancy zwiększający flask effect
- **Flask Nodes w Passive Tree** — wiele nodów na drzewku zwiększa flask duration, effect, recovery

---

*Powiązane pliki:* [Resistances](./resistances.md) | [Passive Tree](./passive-tree.md) | [Build Checklist](../builds/build-checklist.md)

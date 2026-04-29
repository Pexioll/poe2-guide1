# Teoria Buildowania — Jak Myśleć o Budowaniu Postaci

---

## Fundamentalna Zasada: Offense + Defense

Każdy dobry build ma dwa filary:
1. **Ofensywność** — wystarczające obrażenia by zabijać wrogów zanim oni zabiją Ciebie
2. **Defensywność** — wystarczające przeżycie by nie umierać od przypadkowych trafień

Brak jakiegokolwiek z tych filarów = frustrujące granie.

---

## Defensive Layers (Warstwy Obrony)

Najlepsze buildy używają **wielu warstw obrony**, nie tylko jednej:

```
Warstwa 1: Unikanie trafień (Evasion, Dodge Roll)
Warstwa 2: Blokowanie (Block, Spell Block)
Warstwa 3: Redukcja obrażeń (Armour, Resistances)
Warstwa 4: Buffer (Life, Energy Shield)
Warstwa 5: Regeneracja (Life Regen, ES Recharge, Leech)
```

Im więcej warstw tym bardziej "bezpieczny" build.

---

## Multiplicative vs Additive Scaling

Kluczowa koncepcja PoE2:

### Additive (sumujące się)
```
"30% increased fire damage" + "20% increased fire damage" = 50% increased
```

### Multiplicative (mnożące się)
```
"30% more fire damage" × "20% more fire damage" = 56% more (nie 50%!)
```

**"More" jest zawsze multiplicative** — jest potężniejsze niż "increased" gdy masz dużo "increased".

### Praktyczna konsekwencja
- Mając 500% increased damage, kolejne 50% increased = nieduże wzmocnienie
- Ale 50% **more** damage = zawsze 50% więcej

---

## Damage Formula (Uproszczona)

```
Final Damage = Base × (1 + Σ%increased + Σ%reduced) × Π(more multipliers)
```

Gdzie:
- `Base` = bazowe obrażenia gema / broni
- `Σ%increased` = suma wszystkich "increased damage" modów
- `Π(more)` = iloczyn wszystkich "more" modów

---

## Picking a Damage Type

Wybierz **jeden** damage type i trzymaj się go:

| Typ | Zalety | Wady |
|-----|--------|------|
| Fizyczne | Dużo skalowania, prosta mechanika | Wrogowie mają dużo armour |
| Ogień | Silne DoT (Ignite), wiele gemów | Fire res u wrogów |
| Zimno | Utility (Freeze), CC | Cold res u wrogów |
| Piorun | Shock amplifikuje, szybki | Lightning res |
| Chaos | Ignoruje ES wrogów, DoT | Drogi do buildowania |

---

## Crit vs Non-Crit

### Crit Build
- Wymaga inwestycji w Crit Chance i Crit Multiplier
- Bardziej volatile damage (spiky)
- Wyższy teoretyczny ceiling
- Dobre z: zaklęciami, atakami z high base crit

### Non-Crit Build
- Stabilny, przewidywalny damage
- Łatwiejszy do zbudowania
- Niższy ceiling ale bardziej consistent
- Dobre z: DoT builds, ability builds bez crit

---

## Concept: Investment Points

Myśl o swoich zasobach (punkty passive, sloty na itemy, currency) jako "investment points":

- Każdy punkt zainwestowany w offense = mniej w defense i vice versa
- Cel: znaleźć balans gdzie możesz comfortably czyścić content

### Analiza efektywności
```
Upgrade A: +20% damage → Zabijesz packsy 20% szybciej
Upgrade B: +50 Life → Przeżyjesz 10% więcej hitów

Jeśli często umierasz → Upgrade B
Jeśli zabijasz za wolno → Upgrade A
```

---

## Meta Concepts

### Leech
- Odnawiasz Life/ES/Mana proporcjonalnie do zadanych obrażeń
- Bardzo efektywna mechanika przeżycia — "life on hit" scaled

### Ailment Proliferation  
- Ailmenty (Ignite, Poison) mogą "propagować" się na inne wrogów
- Szczególnie skuteczne w packach wrogów

### Aura Stacking
- Aury dają bonusy permanentne; większe zainwestowanie w Spirit → więcej aur

### One-Shot vs Sustain Damage
- Czy chcesz zabijać bossów szybko (one-shot/burst) czy stopniowo (sustain)?
- Wpływa na dobór gemów i passive

---

## Red Flags w Buildzie

Symptomy słabego buildu:
- Wydajesz punkty passive na +1% damage małe node'y bez notable'ów
- Masz 5 różnych damage typów na raz
- Twoje support gemy nie pasują do tag'ów głównej umiejętności
- Nie masz żadnej mobility
- Masz 25% oporów wchodząc do aktu 3

# Jak rozwijac ten poradnik samodzielnie

Ten projekt jest teraz ustawiony pod szybkie granie podczas league startu.
Ty uzupelniasz tresc, a szablony pilnuja formatu.

## Najwazniejsze zasady

- Pisz krotko: 1 linia = 1 decyzja.
- Unikaj dlugich opisow mechanik w plikach roboczych.
- Notuj tylko to, co przyspiesza gre: gemy, vendor checks, power spikes, warunki przejscia.
- Gdy nie jestes pewien, wpisz tag [WERYFIKACJA].

## Gdzie co wpisywac

- Plan calego runu: [league-start/00-playflow.md](./league-start/00-playflow.md)
- Rutyna miasta: [league-start/01-town-checks.md](./league-start/01-town-checks.md)
- Etapy kampanii: [league-start/campaign/](./league-start/campaign/)
- Etapy map: [league-start/maps/](./league-start/maps/)
- Biezace trackery: [league-start/trackers/](./league-start/trackers/)
- Czyste szablony: [league-start/templates/](./league-start/templates/)

## Jak uzupelniac format (obowiazkowo)

W plikach campaign i maps trzymaj zawsze te sekcje:

1. Cel etapu
2. Priorytet gemow i linkow
3. Vendor checks
4. Kiedy wracam do miasta
5. Checkpoint wyjscia
6. Notatki po runie

W trackerach trzymaj format tabel i aktualizuj po kazdej wiekszej zmianie (nowy gem, wymiana broni, nowy tier map).

## Prosty cykl aktualizacji po sesji

1. Otworz plik aktu lub mapy, ktory grales.
2. Dopisz 3-5 najwazniejszych obserwacji.
3. Popraw trackery gems/vendor/gear.
4. Usun lub oznacz [NIEAKTUALNE] rzeczy, ktore juz nie dzialaja.

## Tagi statusu

- [AKTUALNE] sprawdzone na biezacej wersji
- [WIP] jeszcze niekompletne
- [WERYFIKACJA] do sprawdzenia w grze
- [NIEAKTUALNE] do poprawy po patchu

## Styl wpisow

- Stosuj krotkie zdania rozkazujace, np. Sprawdz vendor po wejsciu do miasta.
- Jedna linia, jedna akcja.
- Jezeli krok jest krytyczny, dodaj prefiks KRYTYCZNE:.

## Uwaga praktyczna

Jesli chcesz testowac nowy plan bez mieszania w glownych plikach, skopiuj odpowiedni wzor z [league-start/templates/](./league-start/templates/) i pracuj na kopii.

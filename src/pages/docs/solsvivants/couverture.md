---
title: Couverture du sol
description: couverture des sols agricols de l’exploitation.
---

## A propos de l'indicateur

Nous utilisons l’indicateur pour comptabiliser la couverture des sols agricoles de l’exploitation, enjeux d’érosion, qualité de l’eau , qualité du sol, intérêt de la production de biomasse maximisée.

Exprimé en pourcentage de couverture annuel pour l’assolement (la durée totale est comptabilisée entre la récolte de la culture précédente et la récolte de la culture de l’année)

---

## Mode de calcul

Avec:

- _CMoisson_: Couverture Moisson
- _CCouvert_: Couverture Couvert
- _CCulture_: Couverture Culture
- _DRecolte_: Date de récolte de la culture
- _DPréc_: Date de récolte de la culture précédente

{% math expression="Couverture = \\frac {(CM + CCouvert + CCulture)} {(DRecolte - DPréc)}" p="6" /%}

### Couverture Moisson

→ Si "Résidus broyés" = +21 jours
→ Si "Pailles exportés" = + 0 jours
→ Si "Semis Direct sous couvert végétal" = +21 jours

### Couverture Couvert

→ Si ( TCS, Labour ou SD pour implantation du couvert) Alors [ -21 + ( date de destruction du couvert - date de semis du couvert ) ] ET Si valeur < 0 jour alors = 0 jour

→ OU Si [ date de semis du couvert < date de récolte du précédent ] Alors [ - ( date de récolte précédent - date de semis du couvert ) ]

### Couverture Culture

→ Si ( TCS, Labour ou SD pour implantation de la culture ) Alors [ ( date de récolte - date de semis ) -21jours ]

→ ET Si [ date de semis de la culture < date de destruction du couvert] Alors [- (date destruction du couvert - date semis de la culture)]

→ ET Si [date de semis de la culture < date de récolte du précédent] Alors [ - ( date de récolte du précédent - date de semis de la culture ) ]

## Origine des données

Les données du 1° sont renseignées par l'agriculteur ou l'agronome d'après le carnet de culture.

## Usage dans la boussole

- 0 → 65% de couverture de sol
- 100 → 100% de couverture de sol

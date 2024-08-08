---
title: Couverture du sol
description: couverture des sols agricols de l’exploitation.
---

## A propos de l'indicateur

Nous utilisons l’indicateur pour évaluer la couverture des sols agricoles de l’exploitation par les couverts végétaux et les cultures. Eviter d’avoir un sol nu est important pour : 
  -	Protection de la vie biologique, apport de matières organiques et amélioration de la structure du sol ;
  -	Prévention du lessivage des éléments nutritifs ;
  -	Amélioration du stockage du carbone ;
  -	Protection des sols contre l’érosion par le vent et les précipitations ; 
  -	Protection de la biodiversité en fournissant gîte et couvert aux espèces sauvages ;
  -	Enrayer le cycle de vie de certains ravageurs, maladies et adventices.


## Mode de calcul

Avec:

- _Crésidus_: Couverture résidus Culture N-1
- _CCouvert_: Couverture Couvert
- _CCulture_: Couverture Culture
- _DRecolte_: Date de récolte de la culture
- _DPréc_: Date de récolte de la culture précédente

{% math expression="Couverture = \\frac {(CM + CCouvert + CCulture)} {(DRecolte - DPréc)}" p="6" /%}

### Couverture Résidus

→ Si "Résidus broyés" = +21 jours
→ Si "Pailles exportés" = + 0 jours
→ Si "Double culture" = +21 jours

### Couverture Couvert

→ Si ( TCS, Labour ou SD pour implantation du couvert) Alors [ -21 + ( date de destruction du couvert - date de semis du couvert ) ] ET Si valeur < 0 jour alors = 0 jour

→ OU Si [ date de semis du couvert < date de récolte du précédent ] Alors [ - ( date de récolte précédent - date de semis du couvert ) ]

### Couverture Culture

→ Si ( TCS, Labour ou SD pour implantation de la culture ) Alors [ ( date de récolte - date de semis ) -21jours ]

→ ET Si [ date de semis de la culture < date de destruction du couvert] Alors [- (date destruction du couvert - date semis de la culture)]

→ ET Si [date de semis de la culture < date de récolte du précédent] Alors [ - ( date de récolte du précédent - date de semis de la culture ) ]

## Unité et valeurs sur la boussole
C'est indicateur est exprimé en pourcentage de couverture annuelle pour l’assolement entre la récolte de l'année n-1 et la récolte de l'année n.

- 0 → 65% de couverture de sol
- 1 → 100% de couverture de sol
  
## Données nécessaires

La partie date de semis, récolte, destruction des itinéraires techniques de l'exploitation est nécessaire.



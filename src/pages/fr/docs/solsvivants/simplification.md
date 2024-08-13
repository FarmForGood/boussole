---
title: STIR
description: Simplification du travail du sol
---

## A propos de l'indicateur

L'indicateur STIR est un indicateur développé par USDA (2012). Il est calculé à partir de la vitesse, la profondeur et le type de travail du sol ainsi que de la surface de sol perturbée. Le résultat est un score par passage qui varie en 30 et 80. 

Par exemple, un passage de charrue va avoir un score élevé jusqu’à 80 et un semi-direct qui ne nécessite qu’un passage sans enfouissement un score inférieur autour de 30. Au plus l’indicateur est bas, au moins le sol est dit “perturbé”, à l’inverse au plus, il est élevé, au plus le sol est “perturbé”. Il se calcule ensuite à la parcelle en sommant les STIR de chaque passage. Il a l’avantage d’aller plus loin que d’autres indices, car il compare des itinéraires techniques complets et tient compte de plusieurs paramètres.

## Mode de calcul

Chaque intervention listée pour une parcelle donne un score de perturbation du sol. Les différents scores sont additionnés pour la parcelle. Pour chaque machine, des valeurs indicatives ont été fixées pour la vitesse et la profondeur de travail ainsi que la proportion de sol perturbée. 

A l'échelle de l'exploitation, on fait une moyenne des scores des parcelles pondérée par leur SAU.

Avec

- _pert_: indicateur de perturbation du STIR pour une invervention
- _surface_: la surface de la percelle en ha
- _SAU_: la SAU de l'exploitation

{% math expression="perturbation\\,du\\,sol = \\frac {(\\sum_{int}^{} pert) * surface} {SAU}" /%}

* les unités pour calculer le STIR sont les pouces et des inches, il faut donc convertir les km et cm pour arriver à un bon résultat.
  
## Unité et valeurs sur la boussole

unité : score

- Min = 200, ce qui correspond à un travail du sol plus intense
- Max = 30, ce qui correspond à du semis direct

## Données nécessaires de l'agriculteur

Les machines utilisées pour chaque passage sont nécessaires ainsi que la vitesse et la profondeur. Si ces données ne peuvent être renseignées, une valeur de référence pour le type de machine est renseigné.

## Exemple

En supposant deux parcelles, une de blé et une d'orge

### Blé (12 ha)

{% table %}

- Machine
- Vitesse (km/h)
- Type de travail
- Profondeur (cm)
- Surface perturbée (0-1)
- STIR

---

- Chisel à pattes d'oie
-
- 0,8
- 16
- 1
- 41

---

- Décompacteur - fissurateur
- 6
- 0,4
- 35
- 0,4
- 13

---

- Total
-
-
-
-
- 54

{% /table %}

---

### Orge (16 ha)

{% table %}

- Machine
- Vitesse (km/h)
- Type de travail
- Profondeur (cm)
- Surface perturbée (0-1)
- STIR

---

- Herse rotative
- 21
- 0,8
- 12
- 1
- 80

---

- Charrue (15-18 cm)
- 8
- 1
- 16
- 1
- 51

---

- Total
-
-
-
-
- 131

{% /table %}

### Résultat

{% math expression="\\frac { (54 * 12) + (131 * 16) } {28} = 98" /%}


## Référence et méthodologie:

Le fonctionnement du STIR est basé sur les données générées par RUSLE 2 (Revised Universal Soil Loss Equation 2), également créé par la USDA et le NRCS et qui est une revue de RUSLE 1 (prise en compte de certaines améliorations : caractéristiques de sédimentation, effets des résidus,...).

Ces programmes mathématiques ont été mis en place par différents chercheurs et servent à aider à la protection des sols, à l’échelle du champ (Foster, 2013)


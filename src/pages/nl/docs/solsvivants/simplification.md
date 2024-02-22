---
title: Simplification du travail du sol
description: Indique à quel point le sol est perturbé par les différents travaux de sol et les récoltes
---

## Description

L'indicateur STIR est un indicateur développé par USDA (2012). Il est calculé à partir de la vitesse, la profondeur et le type de travail du sol ainsi que de la surface de sol perturbée. Plus l'indicateur est élevé, plus le sol est perturbé.

---

## Unité

% par rapport à un seuil de référence (1800 heures par an selon la norme UTA)

## Comment est-ce calculé ?

Pour chaque machine, des valeurs indicatives ont été fixées pour la vitesse et la profondeur de travail ainsi que la proportion de sol perturbé. Il est toutefois possible de modifier ces valeurs selon l’utilisation faite de la machine, hormis pour les machines à prise de force (Herse rotative et herse bio fraise). Compléter ou modifier uniquement les cases blanches de l'onglet "STIR par culture", ne pas modifier les valeurs de l'onglet "Machines". En cas de modification d'au moins un des trois paramètres (vitesse, profondeur ou surface perturbée), le STIR est calculé automatiquement et renseigné dans la partie « STIR calculé ». Il peut être comparé au « STIR référence ».

Le STIR peut également être calculé manuellement pour toute machine absente ou différente de la liste de référence:

Avec

- _Aggr_: Coefficient d'agressivité
- _profondeur_: profondeur de l'intervention en inches
- _vitesse_: vitesse de la machine en miles par heure

{% math expression="STIR = \\sum_{ops} (aggr * 3.25 * profondeur_{inches} * vitesse_{mph} * 0.5)" /%}

Chaque intervention listée pour une parcelle donne un score de perturbation du sol. Les différents scores sont additionnés pour la parcelle.

A l'échelle de l'exploitation, on fait une moyenne des scores des parcelles pondérée par leur SAU.

Avec

- _pert_: indicateur de perturbation du STIR pour une intervention
- _surface_: la surface de la parcelle en ha
- _SAU_: la SAU de l'exploitation

{% math expression="perturbation\\,du\\,sol = \\frac {(\\sum_{int}^{} pert) * surface} {SAU}" /%}

---

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

## D’où proviennent les données ?

Les données sont renseignées par l'agriculteur d'après son carnet de culture et encodées par l'agronome.

---

## Référence et méthodologie:

Le fonctionnement du STIR est basé sur les données générées par RUSLE 2 (Revised Universal Soil Loss Equation 2), également créé par l'USDA et le NRCS et qui est une revue de RUSLE 1 (prise en compte de certaines améliorations : caractéristiques de sédimentation, effets des résidus...).

Ces programmes mathématiques ont été mis en place par différents chercheurs et servent à aider à la protection des sols, à l’échelle du champ (Foster, 2013)

---

## {% compass quarter="nw" inline="true" /%} Dans la boussole

Nous noterons la note sur le « radar » en pourcentage, elle sera proportionnelle

- au score seuil de 30 correspondant à un sol non labouré et au 100% de la boussole
- au seuil maximum de 200 correspondant au 0% et a un sol fortement perturbé.

Plus un score est faible, plus il correspond à une moindre intensité de travail du sol et inversement.

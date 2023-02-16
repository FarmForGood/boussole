---
title: Fragmentation spatiale
description: Objectif de biodiversité et objectif de rentabilité à correler
---

**Description?**

En terres cultivable de pleins champs, la biodiversité se développe plus facilement en bordure qu’au centre de grandes parcelles. Réduire la taille des parcelles constitue un levier efficace pour améliorer les conditions d’accueil de la biodiversité. Les effets positifs se manifestent en dessous de 6ha. D’un autre coté nous pondérons les résultats avec la taille minimum pour un débit de chantier qui ne soit pas négatif, ce qui correspond à 8ha.

---

## Unité

Pourcentage de la {% def word="SAU" /%} en parcelles de plus de 8ha.

## Comment est-ce calculé ?

Le calcul est exprimé en %

Avec:

- _sau_: Surface Agricole Utile
- _surface_>=_8ha_: Surface des parcelles supérieures ou égale à 8ha
- _fragmentation_ _spatiale_: Fragmentation spatiale

{% math expression="fragmentation\\,spatiale = (surface_{\\geq8ha} / sau)" /%}

---

## Exemple

En supposant les parcelles suivantes:

{% table %}

- Culture
- Superficie

---

- Blé tendre
- 12 ha

---

- Orge
- 8 ha

---

- Froment
- 6 ha

{% /table %}

La fragmentation spatiale est de:

{% math expression="fragmentation\\,spatiale = (12 + 8) / 26 = 20 / 26 = 76\\%" size="xl" /%}

La parcelle d'orge est prise en compte vu que sa surface est supérieure ou égale à 8 ha.

---

## D’où proviennent les données ?

Les données sont renseigné par l'agriculteur et encodée par l'agronome.

---

## {% compass quarter="nw" inline="true" /%} Dans la boussole

Nous noterons la note en % sur le « radar », allant de 80% à 10%.

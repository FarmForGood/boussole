---
title: Cadre de vie
description: Nous utilisons  cet indicateur pour estimé la viabilité du rythme d’un agriculteur
---

## Description

Nous utilisons cet indicateur pour estimé la viabilité du rythme d’un agriculteur.

---

## Unité

% par rapport à un seuil de référence (1800 heures par an selon la norme UTA)

## Comment est-ce calculé ?

Avec:

- hsem: Nombre d'heure prestée par semaine en moyenne
- conge: Nombre de jour de congé pris par an

{% math expression="cadre\\,de\\,vie = \\frac {(hsem * 52) - (conge*8)} {Norme UTA}" /%}

---

### Exemple

Exemple avec 75 heures par semaine et 21 jours de congé par an:

{% math expression="\\frac {(75 * 52) - (21*8)} {1800} = 207\\%" /%}

---

## D’où proviennent les données ?

Les données sont renseigné par l'agriculteur et encodée par l'agronome.

---

## Référence et méthodologie:

"Ainsi, les agriculteurs disent travailler en moyenne 68 heures par semaine. 23% d’entre eux affirment même être à la tâche plus de 80 heures. Outre ces longues semaines prestées, l’enquête révèle aussi que 1 agriculteur sur 3 n’a pris aucun jour de vacances l’année dernière."

"Temps de travail" [Insee Références, édition 2018 - Fiches - Marché du travail.pdf](/references/Insee-marche-travail-2018.pdf)

---

## {% compass quarter="nw" inline="true" /%} Dans la boussole

- 0 = 200% de la norme
- 70% = 150% de la norme

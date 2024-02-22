---
title: Autonomie en Azote
description: Autonomie en Azote.
---

## Description

Nous utilisons cet indicateur pour évaluer l’autonomie de la ferme sur sa fertilisation. Il permet de savoir quel pourcentage de l’azote apporté provient de la ferme ou des alentours. Le but est également d’apporter une dimension territoriale en favorisant la coopération entre les élevages dans une même région afin de créer une synergie entre l'élevage et les cultures.

---

## Unité

Kilos d'Azote par hectare

## Comment est-ce calculé ?

C’est le pourcentage de la quantité d’azote fixé par le système via les légumineuses, recyclé par le couvert végétal et apporté par la fertilisation organique locale (avec un barème décroissant en fonction de la distance d’approvisionnement), par rapport à la quantité d’azote totale apportée à la plante:

Barème décroissant :

- 1 à 20km = local
- De 21 à 120km = diminution progressive de 1% par kilomètre

Le calcul consiste à diviser la quantité d’azote locale (fertilisation apportée par les couverts et les légumineuses et fertilisation organique multipliée par le coefficient du barème) par la quantité d’azote totale (fertilisation apportée par les couverts et les légumineuses, fertilisation organique et fertilisation minérale)

{% math expression="Autonomie\\,en\\,N = \\frac {\\sum Azote\\,Local} {\\sum Azote\\,Total}" p="6" /%}

---

## D’où proviennent les données ?

Les données sont renseignées par l'agriculteur d'après son carnet de culture et encodées par l'agronome.

---

## {% compass quarter="nw" inline="true" /%} Dans la boussole

- Min : 0% pour une ferme qui n’utiliserait qu’une fertilisation exogène lointaine
- Max : 100% autonome complètement grâce aux couverts, aux légumineuses et à ses interactions avec l’élevage pour une fertilisation de proximité.

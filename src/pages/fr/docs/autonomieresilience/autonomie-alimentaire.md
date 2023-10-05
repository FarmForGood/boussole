---
title: Autonomie alimentaire de l'élevage
description: Nous utilisons l’indicateur pour observé l’autonomie alimentaire de la ferme sur l’atelier animal.
---

## Description

Nous utilisons l’indicateur pour observé l’autonomie alimentaire de la ferme sur l’atelier animal.

---

## Unité

Kilos de Matière Séche (MS) par Unité Grand Bovin (UGB)

## Comment est-ce calculé ?

Si la ferme dispose de moins de 0.2 UGC, on retire l'indicateur de la boussole car l'élevage n'est pas significatif.

Avec:

- _MS_: Matière Séche achetée (en tonnes)
- _UGB_: Nombre d'UGB

{% math expression="autonomie\\,alimentaire = (MS / UGB) * 1000" p="6" /%}

**Tonne de MS acheté** = Somme tous les aliments achetés \* leur coefficient de matière sèche

Lorsque c'est un aliment ou fourrage sans valeurs, saisir la valeur de base à 87% de MS.

Les fourrages et concentrés ont des taux de MS très variables, l’agriculteur fourni donc cette donnée car elle lui est propre.

---

## Exemple

### Aliments achetés

{% table %}

- Aliment
- % de MS
- Quantité en Tonnes

---

- Céréale (base blé)
- 87.8%
- 20.8

---

- Fourrage : Foin enrubanné
- 87%
- 15

{% /table %}

### Cheptels

- Atelier 1 (Vaches): 10.8 UGB
- Atelier 2 (Poules pondeuses): 5 UGB

### Résultat

L'autonomie alimentaire est de:

{% math expression="\\frac {(20.8 * 0.878) + (15 * 0.87)} {(10.8 + 5)} * 1000 = 1981 kg" p="6" /%}

(en kg de MS par UGB)

---

## Explications

Cette méthodologie est simple à mettre en place, la donnée est facile d’accès et permet une représentation efficace de la situation de la ferme.

La données permet de prendre du recul quant à la situation actuelle de la gestion de la ferme, et ainsi de mettre en place des objectifs simple et cohérents pour l’éleveur.

Un biais assez fort est la possible sous nutrition des animaux. Cependant dans une majorité des cas l’agriculteur ne laisse pas son bétail en manque d’aliments.

---

## D’où proviennent les données ?

Les données sont renseigné par l'agriculteur et encodée par l'agronome.

---

## Référence et méthodologie:

[MAEC MB13 sur l’importance de l’autonomie fourragère et la volonté de la PAC d’accompagner les éleveurs vers des pratiques plus durable et résilientes](https://agriculture.wallonie.be/maec-autonomie-fourragere)

Dans un contexte de plus en plus instable climatiquement et politiquement, les aliments de bétails sont sujets à de fortes variations de prix et de disponibilités. La volonté de sécuriser l’approvisionnement en aliments est une réalité qui redonne aux éleveurs la main mise sur la quantité et le coût de leurs besoins, objectif important à moyen et long terme.

---

## {% compass quarter="nw" inline="true" /%} Dans la boussole

Valeur Maximum = 300 kg de MS --> complément à la ration donc marginal (Le 100% de la boussole)

Valeur Minimum = 2500 kg de MS --> Tout ou quasi des besoins est acheté ( Le 0% de la boussole)

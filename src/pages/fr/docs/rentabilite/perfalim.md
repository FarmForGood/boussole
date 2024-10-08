---
title: Performance alimentaire
description: Performance alimentaire
---
## A propos de l'indicateur

Cet indicateur va décrire la performance alimentaire de la culture, de l’élevage et de l’exploitation, soit le nombre maximum de personnes nourries par hectare sur l’exploitation annuellement. Cet indicateur vise à rappeler la fonction première de l’agriculture : nourrir les hommes.

## Mode de calcul

Avec:

- **SoldeN**: Solde Nourricier Annuel de l'Exploitation
- **VN**: Valeur nutrionnelle des matières premières agricoles
- **besoinJ**: Besoin moyen quotidien d'un individu

{% math expression="Perfalim = \\frac {(SoldeN * VN)} {besoinJ * 365} " p="6" /%}

Le solde nourricier est la différence entre la quantité d’énergie ou de protéines produite par l’exploitation et la quantité d’énergie ou de protéines consommée par l’exploitation

Les indicateurs nutritionnels sont l’énergie (en calories), les protéines (en grammes) et les protéines animales (en gramme). L’un ou l’autre sera plus adapté en fonction du type d’exploitation. Les besoins de référence sont ceux d’un jeune homme de 70kg, c’est-à-dire 2700kcal, 52,2g de protéines utilisables dont 22,5g de protéines animales utilisables au quotidien. Pour les protéines, on ajoute un coefficient d’efficacité nutritionnelle qui intègre la capacité à être assimilée ainsi que la composition en acide aminés.

Les calories et protéines non consommables par l’homme ne sont pas comptabilisées.

## Unité et valeurs sur la boussole

Unité: Nombre de personnes nourries par hectare et par an

- Min : 0 personnes/ha.an
- Max : 22,37 personnes/ha.an

Cette limite est calculée en divisant la population belge par la SAU belge.

## Données nécessaires de l'agriculteur

Les rendements des culture et animaux sont nécessaire.

## Référence et méthodologie:

[Perfalim (CEREOPA)](http://perfalim.com/fr/)


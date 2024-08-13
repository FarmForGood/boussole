---
title: Résistance au lessivage de l'Azote
description: Quantité d’azote restant par hectare après exportation des cultures et donc potentiellement lessivable
---

## A propose de l'indicateur

L’indicateur calcule la quantité d’azote total résiduel et organique (y compris les engrais verts et résidus) restant par hectare après exportation des cultures et potentiellement lessivable (pas l’azote immobilisé, ni dans la biomasse vivante). Il est exprimé en kg de N/ha.

Par azote total résiduel, il est entendu les deux formes principales d’azote, à savoir, l’azote nitrique (N-NO3) et l’azote ammoniacal (N-NH4), tous deux lessivables. L’azote organique sera également minéralisé dans des périodes non souhaitables.

L’estimation de ce bilan est réalisée juste après la récolte de la culture, avant que le lessivage ne prenne de l’importance de par la disparition du prélèvement racinaire.

Gérer la fertilisation azotée de façon efficace est fondamentale afin d’éviter les phénomènes de lessivage, pouvant être considérés comme des pertes monétaires pour les agriculteurs et provoquant des conséquences importante sur l’environnement telles que l’eutrophisation des eaux de surfaces et de profondeur.

## Mode de calcul

La méthode de calcul consiste en un bilan calculé en soustrayant les sorties d’azote à la somme de ses entrées. Il est réalisé sur toutes les parcelles et on calcule ensuite une moyenne pondérée par la surface pour avoir une valeur unique pour l’ensemble de l’exploitation.

{% math expression="Résistance = \\sum_{parcelles}^{} ((|\\sum_{}^{} Importations - \\sum_{}^{} Exportations|) * SAU) " /%}

## Unité et valeurs sur la boussole 

Unité : Quantité d’azote minéral et organique (y compris les engrais verts et résidus) restant par hectare après exportation des cultures et potentiellement lessivable: exprimé en kg d'Azote par hectare.

- Min = 100, il reste de l'azote potentiellement lessivable après la culture ou -100, il y avait trop peu d'azote disponible pour la culture
- Max = 0, il ne reste pas d'azote après la culture 

Dans le cas où le bilan est positif, c’est-à-dire que de l’azote reste dans le système après exportation de la culture, raisonner sa fertilisation, mettre des CIPAN est des leviers intéressants pour l’agriculteur. Mais, il s’agit  aussi de regarder le rendement de la culture et s’il n’y a pas un évènement exceptionnel qui justifie que la culture n’a pas utilisé l’azote disponible. La disponibilité d’azote organique sur l’exploitation est aussi un facteur important, la présence ou non de celui-ci sur l’exploitation va avoir une influence sur les pratiques de l’agriculteur. Si le bilan est négatif, c’est qu’il n’y a pas eu assez d’azote pour la culture.


## Données nécessaires de l'agriculteur

Les données de cultures, couverts et fertilisations sont nécessaires pour calculer cet indicateur.


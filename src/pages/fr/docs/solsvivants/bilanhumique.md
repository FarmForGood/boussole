---
title: Bilan Humique
description: Mesurer les variations de quantité d’humus dans le sol
---
## A propos de l'indicateur

Nous utilisons cet indicateur pour mesurer les variations de quantité d’humus dans le sol. En effet selon les pratiques culturales certaines permettent une séquestration ou un déstockage des quantités de matière organique dans le sol. La matière organique a un rôle indispensable en termes de fertilité par ses effets chimiques, biologiques et physiques. Elle va avoir des effets positifs sur l’activité biologique, la structure du sol (stabilisation des agrégats et diminution de l’érosion), la rétention et le drainage en eau (absorption de l’eau et amélioration de la porosité) et la réserve en éléments nutritifs (libération des éléments).  Le suivi de l’évolution des stocks est donc fondamental pour la qualité à court et long terme des terres agricoles. 

Nous réalisons ici un Bilan Humique (à ne pas confondre avec un bilan carbone), qui est une soustraction des apports de MO et de ses sorties (en T de MO/Ha).

Les **Entrées** sont alimentées par des résidus aériens, des résidus racinaires, des couverts végétaux ou des apports organiques. On les pondère avec un coéfficient d’humification ou isohumique nommé K1. 

Les **Sorties** sont alimentées par le pourcentage de MO dans le sol à l’instant T, avec un coefficient prenant en compte les types de sol, les données climatiques (pluviométrie et températures).

## Mode de Calcul

Selon le modèle Henin-Dupuis

Le calcul du bilan humique est un solde entre les entrées dans le système et leurs sorties.

Nous découperons donc la soustraction en deux.

Le calcul de déroule entre la date de récolte de la culture N-1, et la date de récolte de la culture de l’année N.

### Modèle de Hénin-Dupuis (modèle sur une année)

{% math expression="Y_{t} = Y_{0} . e^{-K2t} + K_{1}.x.(1-e^{-K2t}) / K_{2}" p="6" /%}


où

- {% math expression="Y_{t}" inline=true /%}: quantité de matière organique humifiée dans le sol au temps _t_, en tonnes
d’humus ;
- {% math expression="Y_{0}" inline=true /%}: quantité de matière organique humifiée dans le sol au temps _t=0_ en tonnes
d’humus;
- _t_: temps, en années ;
- _x_: apport annuel de matière organique, en tonnes de matière sèche
- {% math expression="K_{1}" inline=true /%}: coefficient isohumique, dépend de la nature des apports organiques
- {% math expression="K_{2}" inline=true /%}: coefficient de minéralisation, dépendant des conditions pédoclimatiques

Source: Hénin et al., 1945; Roussel et al., 2001; VERI, 2012, 2018; De Clerck, 2021.

Le coefficient K2 est issu de la formule de Rémy et Marin Laflèche (1974 cité par Roussel et al., 2001), établie pour le Nord de la France: 

{% math expression="K_{2} = \\frac{1 200}{((Argile + 200) . (0,3 . CaCO_{3} + 200))} " p="2" /%}

Rémy et Viaux (1982 cité par Roussel et al., 2001) “ont établi une estimation plus précise de ce coefficient en fonction de la température du sol”. Ce dernier n’est pas toujours utilisé.

## Unité et valeurs sur la boussole

Unité : Tonnes de Matière Organique (MO) par hectare (t MO/ha)

- Min = -2 t MO/ha 
- Max = 2 t MO/ha 

## Données nécessaires de l'agriculteur 

Le taux de carbone dans le sol est une donnée importante pour calculer le bilan humique ainsi que es informations sur les cultures et couverts mis en place.

## Quelques notions de conversion sont importantes à mentionner :

- Pour obtenir l’équivalence en carbone, il faut multiplier le taux de MO par 0,58. Ainsi, 1 T de MO = 0,58 T de carbone.
- Pour obtenir l’équivalence entre le carbone (pur) et le CO2 qui est l’unité utilisée dans ce calcul, il faut multiplier par 3,78. 
- Ainsi, 0,58 T de carbone = 2,19 T de CO2.

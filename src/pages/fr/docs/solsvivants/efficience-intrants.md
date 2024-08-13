---
title: Efficience des intrants
description: Quantité d'énergie produite sous forme de végétaux, animaux, énergie renouvelable pour 1 gigacalorie consommée 
---

## A propos de l'indicateur

L’efficience des intrants est le rapport entre les énergies produites et les énergies consommées sur la ferme. Il se rapproche du principe de « l’efficacité énergétique » décrit par Ferrière et al. 

Les énergies consommées comptabilisées sont : 
-	Les énergies non renouvelables directes : fioul, électricité…
-	Les énergies non renouvelables indirectes : énergies pour produire tous les intrants de la ferme : phyto, fertilisants organiques et minéraux, semences…
-	Les flux intrants d’énergies brutes : l’énergie alimentaire, aliments d’élevage et litière. Les énergies autoconsommées ne sont volontairement pas prises en compte.
  
Les énergies produites prises en compte sont l’énergie brute de tout ce qui a été produit sur la ferme (animaux, culture, interculture et résidus).

## Mode de calcul

On calcule : Gcal produites/Gcal consommées.

Il est nécessaire de faire le solde de tous les flux de matière qui rentrent, et de ce qui sortent. Pour cela, nous utilisons une valeur en énergie brute, afin de pouvoir comparer les données entre elles (il existe 4 types d'énergies : Brute, Digestible, Métabolisable, Nette)

Nous cherchons à sommer tous les flux entrants et à les diviser par tout les flux sortants. Dans un contexte agricole, nous allons divisé une ferme en trois parties, afin de faciliter les calculs. Les différentes parties seront notées comme suit:

- Végétale = A
- Animal = B
- Ferme = C

Chaque partie à des intrants et sortants, indiqué par un poids (tonne ou kg) que nous allons multiplier par leur valeur énergétique brute. 

**Partie A**:

- Culture Surface
- Fertilisation Minérale(quantité ou unité N /ha)
- Fertilisation organique(quantité ou unité N /ha)
- Rendement CP,CI,
- Paille (leurs part exporté restitué, autoconsommé, vendue…)

**Partie B**:

- Espèce Nombre (en UGB/an)
- Vente & achat animaux
- Production lait (en T/an)
- Nature de l’aliment
- Quantité de l’aliment provenance de l’aliment
- Nature de la Litière provenance
- Quantité Effluents vendu quantité

**Partie C**:

- SAU SFP Consommation totale de fuel (en L)
- Consommation fuel ou essence véhicules ferme
- Consommation Fuel par ETA
- Consommation électricité (en kWh)
- Consommation gaz (en m3)
- Production énergétique de la ferme (en kWh)

**Calcul**:

**Production** Partie A:

Somme (Superficie de la culture 1 (en ha) _ rendement total de la CP1 (en tonne/ha) _ coef de la culture CP1 (en MJ/Tonne) +Superficie de la culture intermédiaire 1 (en ha) _ rendement total de la CI1 (en tonne/ha) _ coef de la culture CI1 (en MJ/Tonne) + +(Superficie de la culture “N” (en ha) _ rendement de la culture ”N” (en tonne/ha) _ coef de la culture “N” (en MJ/Tonne)…)

**Consommation** Partie A:

Somme ( Surface Culture A (en ha)*( Quantité Fertilisation Minérale Culture A (en T/ha) *coef énergie de la fertilisation minérale culture A (en MJ/T)+ Quantité Fertilisation Organique Culture A (en T/ha) *coef Fertilisation Organique culture A (en MJ/T)+ Quantité phyto Culture A (en l/ha) *coef phyto culture A (en MJ/T) + Quantité Semence Culture A (en T/ha) \*coef Semence culture A (en MJ/T))

**Production** Partie B

Somme (vente du bétail (en kg/an)*coef du bétail (en MJ)+production de lait (en L/an)*coef du lait (en MJ/L)+production d’œuf (an)*coef d’un œuf (en MJ)+production d’effluents (en T/an)*coef de l’effluent(en MJ)

**Consommation** Partie B

Somme (achat d’aliments du bétail1(en kg)*coef de l’aliment1 (en MJ/kg)+achat d’aliments “n” du bétail (en kg)*coef de l’aliment “n” (en MJ/kg))

**Production** Partie C

Somme (Production d’énergie électrique (en kWh/an)*coef de l’énergie électrique(en MJ/kWh)+Production de biomasse (en m3/an)*coef de la biomasse (en MJ/m3)+Production de gaz (en kWh/an))

**Consommation** Partie C

Energies directes : Somme (Fioul domestique + Gazoil d’ETA) (en L)_coef Fioul (en MJ/L) +Essence(en L) _ coef Essence (en MJ/L)+ Compteurs Electrique (en mWh) + Gaz (en M3)\*Coef gaz (en MJ Autres (unité au choix))

-> On réalise une somme de toutes les Productions, en faisant attention aux unités et leurs compatibilités.


## Unité et valeurs sur la boussole

Unité : Energie Brute en Gcal

- Min : 1, on considère que le plancher est de produire autant que ce qui est utilisé pour la production
- Max : 10, on considère qu'un bon objectif est d'être capable de produire 10 fois plus d'énergie qui a été consommé
  
## Données nécessaires de l'agriculteur

Les données d'itinéaires techniques, rendement et consommations et productions d'énergie de la ferme.

## Références 

Jean-Marc Ferrière et al., « L'analyse énergétique à l'échelle de l'exploitation agricole. Méthodes, apports et limites. », Fourrages n°151,‎ 1997, pp 331-350.
Référentiel pour l’analyse énergétique de l’exploitation agricole et son pouvoir global de réchauffement global, Planète février 2002


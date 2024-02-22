---
title: Efficience des intrants
description: Quantité d'énergie produite (gCal) sous forme de végétaux, animaux, énergie renouvelable pour 1 gigacalorie consommée. Les données sont calculées en GigaCalories (Gcal)
---

## Description

Quantité d'énergie produite (gCal) sous forme de végétaux, animaux, énergie renouvelable pour 1 gigacalorie consommée. Les données sont calculées en GigaCalories (Gcal)

## Unité

Energie brute.

## Comment est-ce calculé ?

On calcule : Gcal produites/Gcal consommées.

Pour un exemple, nous allons prendre des équations simplifiées.

L’objectif des parties "Efficience des intrants" & "Rendement SAU Moyen" ont en commun l’unité de mesure : exprimé en Energie brute. Il est nécessaire de faire le solde de tous les flux de matière qui rentrent, et de ce qui sortent. Pour cela, nous utilisons une valeur en énergie brute, afin de pouvoir comparer les données entre elles (il existe 4 types d'énergies : Brute, Digestible, Métabolisable, Nette)

Nous cherchons à sommer tous les flux entrants et à les diviser par tous les flux sortants. Dans un contexte agricole, nous allons diviser une ferme en trois parties, afin de faciliter les calculs. Les différentes parties seront notées comme suit:

- Végétale = A
- Animal = B
- Ferme = C

Chaque partie à des intrants et sortants, indiqués par un poids (tonne ou kg) que nous allons multiplier par leur valeur énergétique brute. Cf Tableau "Tables des compositions élémentaires" sur le drive 14-Espace travail des stagiaires → André→ Indicateurs→ Tables

**Partie A**:

- Culture Surface
- Fertilisation Minérale (quantité ou unité N /ha)
- Fertilisation organique(quantité ou unité N /ha)
- Rendement CP,CI,
- Paille (leurs parts exportées restituée, consommée, vendue…)

**Partie B**:

- Espèce Nombre (en UGB/an)
- Vente & achat animaux
- Production lait (en T/an)
- Nature de l’aliment
- Quantité de l’aliment provenance de l’aliment
- Nature de la Litière provenance
- Quantité Effluents vendus quantité

**Partie C**:

- SAU SFP Consommation totale de fuel (en L)
- Consommation fuel ou essence véhicules ferme
- Consommation Fuel par ETA
- Consommation électricité (en kWh)
- Consommation gaz (en m3)
- Production énergétique de la ferme (en kWh)

**Calcul**:

**Production** Partie A:

Somme (Superficie de la culture 1 (en ha) _ rendement total de la CP1 (en tonne/ha) _ coef de la culture CP1 (en MJ/tonne) +Superficie de la culture intermédiaire 1 (en ha) _ rendement total de la CI1 (en tonne/ha) _ coef de la culture CI1 (en MJ/tonne) + +(Superficie de la culture “N” (en ha) _ rendement de la culture ”N” (en tonne/ha) _ coef de la culture “N” (en MJ/tonne)…)

**Consommation** Partie A:

Somme ( Surface Culture A (en ha)*( Quantité Fertilisation Minérale Culture A (en T/ha) *coef énergie de la fertilisation minérale culture A (en MJ/T)+ Quantité Fertilisation Organique Culture A (en T/ha) *coef Fertilisation Organique culture A (en MJ/T)+ Quantité phyto Culture A (en l/ha) *coef phyto culture A (en MJ/T) + Quantité Semence Culture A (en T/ha) \*coef Semence culture A (en MJ/T))

**Production** Partie B

Somme (vente du bétail (en kg/an)*coef du bétail (en MJ)+production de lait (en L/an)*coef du lait (en MJ/L)+production d’œuf (an)*coef d’un œuf (en MJ)+production d’effluents (en T/an)*coef de l’effluent(en MJ)

**Consommation** Partie B

Somme (achat d’aliments du bétail1(en kg)*coef de l’aliment1 (en MJ/kg)+achat d’aliments “n” du bétail (en kg)*coef de l’aliment “n” (en MJ/kg))

**Production** Partie C

Somme (Production d’énergie électrique (en kWh/an)*coef de l’énergie électrique(en MJ/kWh)+Production de biomasse (en m3/an)*coef de la biomasse (en MJ/m3)+Production de gaz (en kWh/an))

**Consommation** Partie C

Energies directes : Somme (Fioul domestique + Gazoil d’ETA) (en L)_coef Fioul (en MJ/L) +Essence(en L) _ coef Essence (en MJ/L)+ Compteurs Electriques (en mWh) + Gaz (en M3)\*Coef gaz (en MJ autres (unité au choix))

-> On réalise une somme de toutes les Productions, en faisant attention aux unités et leurs compatibilités

--

## D’où proviennent les données ?

Les données du 1° sont renseignées par l'agriculteur ou l'agronome d'après la comptabilité de gestion, les factures d'achat et de vente, les relevés de compteurs.

- Min : 1 on considère que le plancher est de produire autant que ce qui est utilisé pour la production
- Max : 10 on considère qu'un bon objectif est d'être capable de produire 10 fois plus d'énergie qui a été consommée

---

## {% compass quarter="nw" inline="true" /%} Dans la boussole

Nous noterons la note en % sur le « radar », allant de 1 à 10.

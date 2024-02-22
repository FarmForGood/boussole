---
title: Autonomie voedervoorziening van de veestapel
description: We gebruiken de indicator om de eigen voedervoorziening van de boerderij voor de veestapel op te volgen.
---

## Beschrijving

Deze indicator laat toe om de voorziening in eigen ruwvoer voor de veestapel op te volgen.

---

## Eenheid

Kilo droge stof (DS) per groot vee-eenheid (GVE)

## Hoe wordt dit berekend?

Als het bedrijf minder dan 0,2 GVE/ha heeft, wordt de kompasindicator niet gebruikt omdat de veestapel niet significant is.

Met:

- _DS_: Aangekochte droge stof (in ton)
- _GVE_: Aantal grootvee-eenheden

{% math expression="voederautonomie = (DS / GVE) * 1000" /%}

**Ton DS aangekocht** = Som (MT) van alle aangekochte voeder \* hun drogestofcoëfficiënt

Als het voeder of ruwvoer zonder waarde betreft, vult u de basiswaarde in op 87% van de DS.

Voeder en krachtvoer hebben zeer variabele DS-niveaus, dus deze gegevens moeten aangegeven worden omdat ze specifiek voor het bedrijf zijn.

---

## Voorbeeld

### Aangekocht Voeder

{% table %}

- Voeder
- % van de DS
- Hoeveelheid in ton

---

- Granen (tarwe als basis)
- 87,8%
- 20.8

---

- Voeder: balen hooi
- 87%
- 15

{% /tabel %}

### Vee

- Stal 1 (Koeien): 10,8 GVE
- Stal 2 (Legkippen): 5 GVE

### Resultaat

Voedselautonomie is:

{% math expression="\\frac {(20,8 * 0,878) + (15 * 0,87)} {(10,8 + 5)} * 1000 = 1981 kg" p="6" /%}

(in kg DS per GVE)

---

## Uitleg

Deze methodologie is eenvoudig te implementeren, de gegevens zijn makkelijk beschikbaar en geven een snelle weergave van de situatie op het bedrijf.

Deze parameter laat een meer “macro-view” toe en dus om doelstelling te vereenvoudigen.

---

## Waar komen de gegevens vandaan?

De gegevens worden door de landbouwer aangeleverd volgens deze aankoopfacturen en de voorraadadministratie beschikbaar bij arsia-Cerise (https://cerise.arsia.be/). De gegevens worden vervolgens gecodeerd door de agronoom.

---

## Referentie en methodologie:

[MAEC MB13 over het belang van voederautonomie en de wens van het GLB om fokkers te ondersteunen in de richting van duurzamere en veerkrachtigere praktijken](https://agriculture.wallonie.be/maec-Autonomie-fourragere)

Door een klimatologisch variabele en politiek onstabiele context is veevoer onderhevig aan sterke prijsschommelingen en beschikbaarheid. Als de landbouwer zijn voederproductie kan veilig stellen of zelfs zelfvoorzienend kan maken, krijgt hij de controle terug over de beschikbaarheid en de kost ervan, wat belangrijke is voor de middellange en lange termijn.

---

## {% kompas quarter="nw" inline="true" /%} In het kompas

Maximale waarde = 300 kg DS --> aanvulling op het rantsoen dus marginaal (100% van het kompas)
Minimumwaarde = 2500 kg MS --> Voeder voor alle of bijna alle behoeften wordt ingekocht (0% van het kompas)

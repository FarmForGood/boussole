---
title: Marge brute
description: Marge brute.
---
## A propos de l'indicateur

La marge brute traduit l’efficacité d’une exploitation à générer des produits aux moyens de ses charges opérationnelles affectées. Nous utilisons cet indicateur uniquement pour les cultures. Il est égal au chiffre d’affaires de la culture incluant la vente et les primes PAC soustrait des charges variables, le tout ramené à l’hectare.
Cet indicateur permet une première évaluation de la rentabilité des cultures de l’exploitation. Il ne tient pas compte des charges fixes ni du paiement de l’agriculteur, mais il va permettre d’évaluer sa capacité à se générer un revenu. 


## Mode de calcul

La marge brute s'obtient en soustrayant du Chiffre d'Affaire moyen des cultures les charges proportionnelles (semences, protection des plantes, désherbage, mécanisation, fertilisation, récolte et autres)


Avec:

- _CAM_: Chiffre d'Affaire Moyen des cultures
- _CP_: Charges proportionnelles
- _marge_brute_: Marge Brute

{% math expression="marge brute = CAM - CP"}

Avec:

- _CP_: Charges proportionnelles
- _sem_: coût des semences
- _prot_: coût de la protection des plantes
- _desh_: coût du désherbage
- _meca_: coût de la mécanisation
- _fert_: coût de la fertilisation
- _recolte_: coût de la récolte

{% math expression="CP = sem + prot + desh + meca + fert + recolte" size="base" p="1" /%}

## Unité et valeurs sur la boussole
Unité: €/ha de SAU

Les valeurs seuils choisies correspondent à :
- Valeur Minimale : jusqu’à **125€/ha** de SAU = 0% de la Boussole
- Valeur Médiane : **1139€/ha** de SAU = 70% de la Boussole
- Valeur Maximale : à partir de **1449€/ha** de SAU= 100% de la Boussole
  
- un minima qu’est le droit au paiement de base
- un médian qu’est la marge brute moyenne en Wallonie sur 10 ans.


## Données nécessaire de l'agrilculteur

L'ensemble des coûts et produits de chaque culture sont nécessaires. 

## Références

### Coefficients

- **1449€/ha de SAU**: donnée issue du rapport du CRAW le 2 décembre 2022 - [“Marge Brute, excédent brut et revenus de l’exploitation Wallone”](https://etat-agriculture.wallonie.be/contents/indicatorsheets/A_III_b.html#:~:text=En%202021%2C%20au%20d%C3%A9part%20d,poursuivent%20la%20hausse%20de%202020).
- **125€/ha de SAU**: donnée issue du rapport du CRAW le 2 décembre 2022 [“Paiements directs en faveur des agriculteurs”](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8eec6c17-4e68-4a41-a5c0-edd80a337c9d/Paiements_directs_en_faveur_des_agriculteurs.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230216T145859Z&X-Amz-Expires=86400&X-Amz-Signature=f11a0b8d3e2d1fd632b367189561cd2608f3f9fd48abbec843cd4c59af66a22f&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Paiements_directs_en_faveur_des_agriculteurs.pdf%22&x-id=GetObject).

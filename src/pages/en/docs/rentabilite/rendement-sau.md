---
title: Rendement SAU
description: Rendement SAU.
---

Rendement Moyen par hectare pour toutes les cultures de la ferme (Gcal). Cet indicateur permet de vérifier que la ferme est en productivité minimale des surfaces en culture.

## Comment est-ce calculé ?

On calcule: Somme des énergies produites par toutes les cultures / SAU

{% math expression="Rendement = \\frac {\\sum_{cultures} Energies\\,produites} {SAU}" /%}

Les données d’entrées sont le rendement des cultures \* leur coeficient issue de la table de conversion en TEP

On utilisera le même calcul que pour l’indicateur efficience des intrants concernant les énergies produites.

---

## D’où proviennent les données ?

Les données sont renseignées par l'agriculteur ou l'agronome.

- Min : 5 Gcal/ ha soit un equivalent froment à 1,31T/ha
- Max : 20 Gcal/ha soit un equivalent froment à 5,26T/ha

---

## {% compass quarter="nw" inline="true" /%} Dans la boussole

On note le pourcentage en se basant sur :

- 0% = 8 Gcal
- 100% = 46 Gcal

---

## Références

### Coefficients

- **1449€/ha de SAU**: donnée issue du rapport du CRAW le 2 décembre 2022 - [“Marge Brute, excédent brut et revenus de l’exploitation Wallone”](https://etat-agriculture.wallonie.be/contents/indicatorsheets/A_III_b.html#:~:text=En%202021%2C%20au%20d%C3%A9part%20d,poursuivent%20la%20hausse%20de%202020).
- **125€/ha de SAU**: donnée issue du rapport du CRAW le 2 décembre 2022 [“Paiements directs en faveur des agriculteurs”](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8eec6c17-4e68-4a41-a5c0-edd80a337c9d/Paiements_directs_en_faveur_des_agriculteurs.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230216T145859Z&X-Amz-Expires=86400&X-Amz-Signature=f11a0b8d3e2d1fd632b367189561cd2608f3f9fd48abbec843cd4c59af66a22f&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Paiements_directs_en_faveur_des_agriculteurs.pdf%22&x-id=GetObject).

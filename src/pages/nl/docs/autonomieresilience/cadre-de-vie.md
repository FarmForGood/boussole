---
title: Quality of Life
description: We use this indicator to estimate the viability of a farmer's work pace.
---

## Description

We use this indicator to estimate the viability of a farmer's work pace.

---

## Unit

% relative to a reference threshold (1800 hours per year according to the UTA standard)

## How Is It Calculated?

With:

- hsem: Number of hours worked per week on average
- conge: Number of days off taken per year

{% math expression="quality\\,of\\,life = \\frac {(hsem * 52) - (conge*8)} {UTA Standard}" /%}

---

### Example

Example with 75 hours per week and 21 days off per year:

{% math expression="\\frac {(75 * 52) - (21*8)} {1800} = 207\\%" /%}

---

## Data Source

The data is provided by the farmer and encoded by the agronomist.

---

## Reference and Methodology:

"Thus, farmers claim to work an average of 68 hours per week. 23% of them even say they work more than 80 hours. In addition to these long working weeks, the survey also reveals that 1 in 3 farmers did not take any days off last year."

"Working Time" [Insee References, 2018 edition - Sheets - Labor Market.pdf](/references/Insee-marche-travail-2018.pdf)

---

## {% compass quarter="nw" inline="true" /%} In the Compass

- 0 = 200% of the standard
- 70% = 150% of the standard

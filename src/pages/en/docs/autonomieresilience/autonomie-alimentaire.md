---
title: Livestock food autonomy
description: We use the indicator to observe the farm's food autonomy in the animal workshop
---

## Description

We use the indicator to observe the farm's food autonomy in the animal workshop

---

## Unit

Kilos of Dry Matter (DM) per Large Livestock Unit (LLU)

## How is it calculated?

If the farm has less than 0.2 LLU, the indicator is removed from the compass because the livestock is not significant.

With:

- _DM_: Dry Matter purchased (in tons)
- _AU_: Number of AU (Animal Units)

{% math expression="food\\,self-sufficiency = (DM / AU) * 1000" p="6" /%}

**Ton of DM purchased** = Sum of all purchased feed \* their dry matter coefficient

When it is a feed or forage without values, enter the base value at 87% DM.

Feeds and concentrates have highly variable DM rates, so the farmer provides this data as it is specific to them.

---

## Example

### Purchased Feeds

{% table %}

- Feed
- % of DM
- Quantity in Tons

---

- Grain (wheat-based)
- 87.8%
- 20.8

---

- Forage: Wrapped Hay
- 87%
- 15

{% /table %}

### Herds

- Workshop 1 (Cows): 10.8 AU
- Workshop 2 (Laying Hens): 5 AU

### Result

The food self-sufficiency is:

{% math expression="\\frac {(20.8 * 0.878) + (15 * 0.87)} {(10.8 + 5)} * 1000 = 1981 kg" p="6" /%}

(in kg of DM per AU)

---

## Explanations

This methodology is simple to implement, the data is easily accessible, and it allows for an effective representation of the farm's situation.

The data allows for taking a step back regarding the current farm management situation and thus setting up simple and coherent goals for the farmer.

A significant bias is the potential undernutrition of animals. However, in the majority of cases, farmers do not let their livestock go without food.

---

## Where Do the Data Come From?

The data is provided by the farmer and encoded by the agronomist.

---

## Reference and Methodology:

[MAEC MB13 on the importance of forage self-sufficiency and the desire of the CAP to support farmers toward more sustainable and resilient practices](https://agriculture.wallonie.be/maec-autonomie-fourragere)

In an increasingly unstable climate and political context, livestock feeds are subject to significant price and availability fluctuations. The desire to secure food supply is a reality that gives farmers control over the quantity and cost of their needs, an important objective in the medium and long term.

---

## {% compass quarter="nw" inline="true" /%} In the Compass

Maximum Value = 300 kg of DM --> Supplementary to the ration, hence marginal (100% of the compass)

Minimum Value = 2500 kg of DM --> All or nearly all needs are purchased (0% of the compass)

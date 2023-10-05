const FR_NAVIGATION = [
  {
    title: 'Présentation',
    links: [
      { title: 'A propos', href: '/', status: 'info' },
      { title: 'Participer', href: '/infos/participer', status: 'join' },
    ],
  },
  {
    title: 'Sols Vivants',
    links: [
      {
        title: 'Bilan humique',
        href: '/docs/solsvivants/bilanhumique',
        status: 'done',
      },
      {
        title: 'Couverture du sol',
        href: '/docs/solsvivants/couverture',
        status: 'done',
      },
      {
        title: 'Simplification du travail du sol',
        href: '/docs/solsvivants/simplification',
        status: 'done',
      },
      {
        title: 'Diversité des espèces',
        href: '/docs/solsvivants/diversite',
        status: 'done',
      },
    ],
  },
  {
    title: 'Biodiversité et Eau',
    links: [
      {
        title: "Progression vers l'AB",
        href: '/docs/biodiversite/progressionab',
        status: 'done',
      },
      {
        title: 'Maillage écologique',
        href: '/docs/biodiversite/maillage-ecologique',
        status: 'done',
      },
      {
        title: 'Fragmentation spatiale',
        href: '/docs/biodiversite/fragmentation-spatiale',
        status: 'done',
      },
      {
        title: "Résistance au lessivage de l'azote",
        href: '/docs/biodiversite/lessivage',
        status: 'done',
      },
    ],
  },
  {
    title: 'Autonomie et Résilience',
    links: [
      {
        title: "Autonomie alimentaire de l'élevage",
        href: '/docs/autonomieresilience/autonomie-alimentaire',
        status: 'done',
      },
      {
        title: 'Cadre de vie',
        href: '/docs/autonomieresilience/cadre-de-vie',
        status: 'done',
      },
      {
        title: 'Autonomie en azote',
        href: '/docs/autonomieresilience/autonomie-azote',
        status: 'done',
      },
      {
        title: 'Indépendance énergétique',
        href: '/docs/autonomieresilience/independance-energetique',
        status: 'done',
      },
      {
        title: 'Indice de Fréquence de Traitement (IFT)',
        href: '/docs/wip?5',
      },
    ],
  },
  {
    title: 'Rentabilité et Efficience',
    links: [
      {
        title: 'Efficience des intrants',
        href: '/docs/solsvivants/efficience-intrants',
        status: 'done',
      },
      {
        title: 'Rendement SAU',
        href: '/docs/rentabilite/rendement-sau',
        status: 'done',
      },
      {
        title: 'Marge brute moyenne des cultures',
        href: '/docs/rentabilite/marge-brute',
        status: 'done',
      },
      {
        title: 'Performance Alimentaire',
        href: '/docs/rentabilite/perfalim',
        status: 'done',
      },
    ],
  },
]

const EN_NAVIGATION = [
  {
    title: 'Overview',
    links: [
      { title: 'About Us', href: '/', status: 'info' },
      { title: 'Get Involved', href: '/infos/participer', status: 'join' },
    ],
  },
  {
    title: 'Living Soils',
    links: [
      {
        title: 'Humic Balance',
        href: '/docs/solsvivants/bilanhumique',
        status: 'done',
      },
      {
        title: 'Soil Cover',
        href: '/docs/solsvivants/couverture',
        status: 'done',
      },
      {
        title: 'Simplified Soil Work',
        href: '/docs/solsvivants/simplification',
        status: 'done',
      },
      {
        title: 'Species Diversity',
        href: '/docs/solsvivants/diversite',
        status: 'done',
      },
    ],
  },
  {
    title: 'Biodiversity and Water',
    links: [
      {
        title: 'Transition to Organic Farming',
        href: '/docs/biodiversite/progressionab',
        status: 'done',
      },
      {
        title: 'Ecological Network',
        href: '/docs/biodiversite/maillage-ecologique',
        status: 'done',
      },
      {
        title: 'Spatial Fragmentation',
        href: '/docs/biodiversite/fragmentation-spatiale',
        status: 'done',
      },
      {
        title: 'Nitrogen Leaching Resistance',
        href: '/docs/biodiversite/lessivage',
        status: 'done',
      },
    ],
  },
  {
    title: 'Autonomy and Resilience',
    links: [
      {
        title: "Livestock's Food Autonomy",
        href: '/docs/autonomieresilience/autonomie-alimentaire',
        status: 'done',
      },
      {
        title: 'Quality of Life',
        href: '/docs/autonomieresilience/cadre-de-vie',
        status: 'done',
      },
      {
        title: 'Nitrogen Autonomy',
        href: '/docs/autonomieresilience/autonomie-azote',
        status: 'done',
      },
      {
        title: 'Energy Independence',
        href: '/docs/autonomieresilience/independance-energetique',
        status: 'done',
      },
      {
        title: 'Treatment Frequency Index (TFI)',
        href: '/docs/wip?5',
      },
    ],
  },
  {
    title: 'Profitability and Efficiency',
    links: [
      {
        title: 'Input Efficiency',
        href: '/docs/solsvivants/efficience-intrants',
        status: 'done',
      },
      {
        title: 'Hectare Yield',
        href: '/docs/rentabilite/rendement-sau',
        status: 'done',
      },
      {
        title: 'Average Crop Gross Margin',
        href: '/docs/rentabilite/marge-brute',
        status: 'done',
      },
      {
        title: 'Feed Efficiency',
        href: '/docs/rentabilite/perfalim',
        status: 'done',
      },
    ],
  },
]

export function getNavigation(language = 'fr') {
  if (language === 'fr') {
    return FR_NAVIGATION
  } else if (language === 'en') {
    return EN_NAVIGATION
  }
}

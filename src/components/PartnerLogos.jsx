export default function PartnerLogos() {
  let partners = [
    [
      {
        name: 'Bister',
        logo: '/logos/bister.jpg',
        url: 'https://bister.be/',
      },
      {
        name: 'Puratos',
        logo: '/logos/puratos.svg',
        url: 'https://www.puratos.com/',
      },
      {
        name: 'Dandoy',
        logo: '/logos/dandoy.jpg',
        url: 'https://maisondandoy.com/',
      },
    ],
    [
      {
        name: "Copains d'abord",
        logo: '/logos/copains.svg',
        url: 'https://copains.group/',
      },
      {
        name: 'Farm For Good!',
        logo: '/logos/farmforgood.svg',
        url: 'https://farmforgood.org/',
      },
      {
        name: 'Natagora',
        logo: '/logos/natagora.png',
        url: 'https://www.natagora.be/',
      },
    ],
    [
      {
        name: 'Gembloux Agro-Bio Tech',
        logo: '/logos/gembloux.svg',
        url: 'https://www.gembloux.uliege.be/cms/c_4039827/en/gembloux-agro-bio-tech/',
      },
      {
        name: 'Centre Michamps',
        logo: '/logos/michamps.png',
        url: 'https://centredemichamps.be/',
      },
      {
        name: "Parc naturel des Plaines de l'Escaut",
        logo: '/logos/escaut.png',
        url: 'https://plainesdelescaut.be/wikipnpe/?PagePrincipale/',
      },
    ],
    [
      {
        name: 'Collège des Producteurs',
        logo: '/logos/college_producteurs.jpg',
        url: 'https://collegedesproducteurs.be',
      },
      {
        name: 'BioWallonie',
        logo: '/logos/biowallonie.png',
        url: 'https://www.biowallonie.com',
      },
      {
        name: 'Unab',
        logo: '/logos/unab.png',
        url: 'https://www.unab-bio.be/',
      },
    ],
    [
      {
        name: 'Fibl Suisse',
        logo: '/logos/FiBL.png',
        url: 'https://www.fibl.org/fr/sites/suisse/',
      },
      {
        name: 'Foire de Libramont',
        logo: '/logos/libramont.jpg',
        url: 'https://www.foiredelibramont.com/',
      },
      {
        name: "Graines d'Avenir",
        logo: '/logos/graines_avenir.jpg',
        url: 'https://www.facebook.com/FormationsAgroecologie/',
      },
    ],
  ]

  function renderLogo(partner) {
    return (
      <a
        href={partner.url}
        target="_blank"
        style={{ boxShadow: 'none', textShadow: 'none' }}
        rel="noreferrer"
        className="shadow-none"
      >
        <img src={partner.logo} alt="partner" className="m-4 h-32 w-32" />
      </a>
    )
  }

  function renderLogoRow(logos) {
    return (
      <div className="flex flex-row justify-center" key={logos[0].url}>
        {renderLogo(logos[0])}
        {logos[1] && renderLogo(logos[1])}
        {logos[2] && renderLogo(logos[2])}
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      {partners.map((partner) => renderLogoRow(partner))}
    </div>
  )
}

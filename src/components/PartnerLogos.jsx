export default function PartnerLogos() {
  let partners = [
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
  ]

  function renderLogo(partner) {
    return (
      <a
        href={partner.url}
        style={{ boxShadow: 'none', textShadow: 'none' }}
        className="shadow-none"
      >
        <img src={partner.logo} alt="partner" className="m-4 h-32 w-32" />
      </a>
    )
  }
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-center">
        {renderLogo(partners[0])}
        {renderLogo(partners[1])}
        {renderLogo(partners[2])}
      </div>
      <div className="flex flex-row justify-center">
        {renderLogo(partners[3])}
        {renderLogo(partners[4])}
        {renderLogo(partners[5])}
      </div>
      <div className="flex flex-row justify-center">
        {renderLogo(partners[6])}
        {renderLogo(partners[7])}
        {renderLogo(partners[8])}
      </div>
    </div>
  )
}

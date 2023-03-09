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
      </div>
      <div className="flex flex-row justify-center">
        {renderLogo(partners[2])}
        {renderLogo(partners[3])}
      </div>
    </div>
  )
}

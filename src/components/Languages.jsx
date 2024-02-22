export default function Languages({ language, toggleLanguage }) {
  const lngs = [
    {
      locale: 'fr',
      name: 'Français',
      flag: 'https://flagicons.lipis.dev/flags/4x3/fr.svg',
    },
    {
      locale: 'en',
      name: 'English',
      flag: 'https://flagicons.lipis.dev/flags/4x3/gb.svg',
    },
  ]
  return (
    <>
      {lngs.map((l) => (
        <span key={l.locale}>
          <a
            
            className={
              l.locale == language
                ? 'text-sm no-underline'
                : 'text-sm underline'
            }
            href="#"
            onClick={toggleLanguage}
          >
            <img
              src={l.flag}
              className="align-text-middle mr-1 inline-block w-4"
            />
            {l.name}
          </a>{' '}
        </span>
      ))}
    </>
  )
}

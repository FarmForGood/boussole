export function setLanguage(locale) {
  document.cookie = `LOCALE=${locale}; max-age=31536000; path=/`
}

export function getLanguage() {
  const cookies = document.cookie.split(';')
  const cookie = cookies.find((cookie) => cookie.includes('LOCALE'))
  if (cookie) {
    return cookie.split('=')[1]
  }
  return 'fr'
}

export function getLocalizedLink(href, locale = 'fr') {
  if (href === '/') {
    return href
  }
  if (href.startsWith('/')) {
    return `/${locale}${href}`
  }
  return href
}

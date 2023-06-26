import { Callout } from '@/components/Callout'
import { QuickLink, QuickLinks } from '@/components/QuickLinks'
import { ContactForm } from '@/components/ContactForm'
import { CompassIcon } from '@/components/icons/CompassIcon'
import { Math } from '@/components/Math'
import { DefinedWord } from '@/components/DefinedWord'
import PartnerLogos from '@/components/PartnerLogos'

const tags = {
  callout: {
    attributes: {
      title: { type: String },
      type: {
        type: String,
        default: 'note',
        matches: ['note', 'warning'],
        errorLevel: 'critical',
      },
    },
    render: Callout,
  },
  contact: {
    attributes: {},
    render: ContactForm,
  },
  compass: {
    attributes: {
      quarter: { type: String },
      color: { type: String },
      inline: { type: String },
    },
    render: CompassIcon,
  },
  math: {
    attributes: {
      expression: { type: String },
      size: { type: String },
      p: { type: String },
      inline: { type: Boolean}
    },
    render: Math,
  },
  def: {
    attributes: {
      word: { type: String },
    },
    render: DefinedWord,
  },
  figure: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      alt: { type: String },
      caption: { type: String },
    },
    render: ({ src, alt = '', caption }) => (
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
        <figcaption>{caption}</figcaption>
      </figure>
    ),
  },
  'logos': {
    render: PartnerLogos,
  },
  'quick-links': {
    render: QuickLinks,
  },
  'quick-link': {
    selfClosing: true,
    render: QuickLink,
    attributes: {
      title: { type: String },
      quarter: { type: String },
      description: { type: String },
      icon: { type: String },
      href: { type: String },
    },
  },
}

export default tags

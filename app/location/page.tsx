import type { Metadata } from 'next'
import { LocationsIndexPage } from '@/components/locations-index-page'
import { SITE_NAME, absoluteUrl, DEFAULT_OG_IMAGE_PATH, DEFAULT_OG_IMAGE_ALT_ES } from '@/lib/site-config'

const title = 'Cobertura por departamento — Ingeniería en toda Guatemala'
const description =
  'InnovazionE brinda ingeniería estructural y gestión de riesgos en cada departamento de Guatemala. Explore servicios regionales y evaluación de amenazas sísmicas, inundaciones y taludes.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/location' },
  openGraph: {
    title,
    description,
    url: absoluteUrl('/location'),
    locale: 'es_GT',
    alternateLocale: ['en_US'],
    siteName: SITE_NAME,
    type: 'website',
    images: [{ url: DEFAULT_OG_IMAGE_PATH, width: 1200, height: 630, alt: DEFAULT_OG_IMAGE_ALT_ES }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [DEFAULT_OG_IMAGE_PATH],
  },
}

export default function Page() {
  return <LocationsIndexPage />
}

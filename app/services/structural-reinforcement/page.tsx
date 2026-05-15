import type { Metadata } from 'next'
import { StructuralReinforcementPage } from '@/components/structural-reinforcement-page'
import { SITE_NAME, absoluteUrl } from '@/lib/site-config'

const title = 'Reforzamiento Estructural en Guatemala — Cálculo, Ensayos y Materiales'
const description = 'Servicio de reforzamiento estructural en Guatemala. Cálculo estructural avanzado, ensayos con esclerómetro, refuerzo con acero, concreto y fibra de carbono. Reparación y mejora de capacidad de estructuras.'
const url = absoluteUrl('/services/structural-reinforcement')

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'reforzamiento estructural',
    'cálculo estructural',
    'esclerómetro',
    'ensayos no destructivos',
    'NDT concreto',
    'refuerzo de estructuras',
    'reparación estructural',
    'fibra de carbono',
    'refuerzo con acero',
    'resistencia del concreto',
    'capacidad portante',
    'mejora estructural Guatemala',
    'refuerzo sísmico',
    'inspección estructural',
    'encamisado de columnas',
    'estructuras dañadas',
    'análisis de elementos finitos',
    'SAP2000 ETABS',
    'refuerzo geotécnico',
    'reparación de grietas',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: 'index, follow',
  alternates: {
    canonical: url,
  },
  openGraph: {
    title,
    description,
    url,
    locale: 'es_GT',
    alternateLocale: ['en_US'],
    type: 'website',
    siteName: SITE_NAME,
    images: [
      {
        url: absoluteUrl('/images/finite-element-model.jpg'),
        width: 1200,
        height: 630,
        alt: 'Reforzamiento estructural y cálculo de estructuras en Guatemala',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [absoluteUrl('/images/finite-element-model.jpg')],
    creator: '@ingenieria_estructural_gt',
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    description,
    url,
    image: absoluteUrl('/images/finite-element-model.jpg'),
    sameAs: [
      'https://www.instagram.com/ingenieria_estructural_gt/',
      'https://www.facebook.com/ingenieria.estructural.gt/',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '8va. Calle 1-94 Zona 1',
      addressLocality: 'Salcajá',
      addressRegion: 'Quetzaltenango',
      postalCode: '09200',
      addressCountry: 'GT',
    },
    telephone: '+50235142383',
    email: 'ingsosaj@mail.com',
    priceRange: '$$',
    areaServed: 'GT',
  }

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Reforzamiento Estructural',
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_NAME,
      url: absoluteUrl('/'),
    },
    description,
    areaServed: {
      '@type': 'Country',
      name: 'Guatemala',
    },
    serviceType: [
      'Cálculo estructural',
      'Ensayos no destructivos',
      'Refuerzo de estructuras',
      'Análisis sísmico',
      'Consultoría técnica',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <StructuralReinforcementPage />
    </>
  )
}

import type { Metadata } from 'next'
import { ArchitectureHydrologyPage } from '@/components/architecture-hydrology-page'
import { SITE_NAME, absoluteUrl } from '@/lib/site-config'

const title = 'Arquitectura, Hidrología, Sanitaria y Geotecnia en Guatemala'
const description = 'Servicios especializados de arquitectura, hidrología, ingeniería sanitaria y geotecnia en Guatemala. Estudios de suelo, sistemas de drenaje, agua potable y diseño arquitectónico. Equipo de especialistas certificados.'
const url = absoluteUrl('/services/architecture-hydrology-sanitary-geotechnical')

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'arquitectura en Guatemala',
    'estudios de suelo',
    'geotecnia',
    'ingeniería sanitaria',
    'sistemas de drenaje',
    'agua potable',
    'diseño arquitectónico',
    'ingeniería hidrológica',
    'alcantarillado',
    'tratamiento de aguas',
    'estudio geotécnico Guatemala',
    'drenaje superficial',
    'capacidad portante',
    'diseño de cimentaciones',
    'hidrología Guatemala',
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
        url: absoluteUrl('/images/project-3.jpg'),
        width: 1200,
        height: 630,
        alt: 'Servicios de arquitectura, hidrología, sanitaria y geotecnia en Guatemala',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [absoluteUrl('/images/project-3.jpg')],
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
    image: absoluteUrl('/images/project-3.jpg'),
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
    name: 'Arquitectura, Hidrología, Sanitaria y Geotecnia',
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
      'Diseño arquitectónico',
      'Estudios geotécnicos',
      'Ingeniería sanitaria',
      'Ingeniería hidrológica',
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
      <ArchitectureHydrologyPage />
    </>
  )
}

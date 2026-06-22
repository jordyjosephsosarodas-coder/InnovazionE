import type { Metadata } from 'next'
import { WarehouseDesignPage } from '@/components/warehouse-design-page'
import { SITE_NAME, absoluteUrl, DEFAULT_OG_IMAGE_PATH } from '@/lib/site-config'

const title = 'Diseño de Naves Industriales y Bodegas en Guatemala — Almacenes, Bodegas y Naves Industriales'
const description = 'Diseño de naves industriales, bodegas y almacenes en Guatemala. Soluciones sismorresistentes para bodegas agrícolas, logísticas y comerciales con planos listos para permiso municipal y optimización estructural.'
const url = absoluteUrl('/services/warehouse-design')

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'diseño de naves industriales Guatemala',
    'diseño de bodegas Guatemala',
    'diseño de almacenes Guatemala',
    'naves industriales sismorresistentes',
    'bodega industrial Guatemala',
    'diseño de almacén',
    'planos de bodegas Guatemala',
    'ingeniería de naves industriales',
    'bodegas agroindustriales Guatemala',
    'bodegas logísticas Guatemala',
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
        url: absoluteUrl('/images/project-1.jpg'),
        width: 1200,
        height: 630,
        alt: 'Diseño de nave industrial y bodega en Guatemala',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [absoluteUrl('/images/project-1.jpg')],
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
    image: absoluteUrl('/images/project-1.jpg'),
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
    areaServed: {
      '@type': 'City',
      name: 'Guatemala',
    },
  }

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Diseño de Naves Industriales (Bodegas)',
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
      'Diseño estructural',
      'Ingeniería de almacenes',
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
      <WarehouseDesignPage />
    </>
  )
}

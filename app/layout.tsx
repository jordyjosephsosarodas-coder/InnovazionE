import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from '@/components/providers'
import { JsonLd } from '@/components/json-ld'
import {
  SITE_NAME,
  SITE_URL,
  DEFAULT_OG_IMAGE_PATH,
  DEFAULT_OG_IMAGE_ALT_ES,
} from '@/lib/site-config'
import './globals.css'

const geistSans = Geist({ subsets: ["latin"] })

const defaultTitle = 'Ingeniería Estructural y Gestión de Riesgos | InnovazionE Guatemala'
const defaultDescription =
  'Diseño, rehabilitación, supervisión, ejecución y remodelación de infraestructura en toda Guatemala. Consultoría en resiliencia, confiabilidad, sostenibilidad, optimización e innovación.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE_NAME}`,
  },
  description: defaultDescription,
  keywords: [
    'ingeniería estructural Guatemala',
    'gestión de riesgos infraestructura',
    'ingeniería civil Quetzaltenango',
    'análisis sísmico Guatemala',
    'diseño estructural occidente',
    'ingeniería hidrológica sanitaria geotécnica',
    'InnovazionE Salcajá',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_GT',
    alternateLocale: ['en_US'],
    url: SITE_URL,
    siteName: SITE_NAME,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: DEFAULT_OG_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: DEFAULT_OG_IMAGE_ALT_ES,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: [DEFAULT_OG_IMAGE_PATH],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.className} antialiased`}>
        <JsonLd />
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  )
}

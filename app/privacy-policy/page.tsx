import type { Metadata } from 'next'
import { PrivacyPolicyPage } from '@/components/privacy-policy-page'
import { SITE_NAME, absoluteUrl, DEFAULT_OG_IMAGE_PATH, DEFAULT_OG_IMAGE_ALT_ES } from '@/lib/site-config'

const title = 'Política de Privacidad'
const description =
  'Política de privacidad de InnovazionE: cómo recopilamos, usamos y protegemos la información que nos envía a través del sitio web.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/privacy-policy' },
  robots: { index: true, follow: true },
  openGraph: {
    title: `${title} | ${SITE_NAME}`,
    description,
    url: absoluteUrl('/privacy-policy'),
    locale: 'es_GT',
    siteName: SITE_NAME,
    type: 'website',
    images: [{ url: DEFAULT_OG_IMAGE_PATH, width: 1200, height: 630, alt: DEFAULT_OG_IMAGE_ALT_ES }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | ${SITE_NAME}`,
    description,
    images: [DEFAULT_OG_IMAGE_PATH],
  },
}

export default function Page() {
  return <PrivacyPolicyPage />
}

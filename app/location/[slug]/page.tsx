import type { Metadata } from 'next'
import LocationPage from '@/components/location-page'
import { departments, getDepartment } from '@/lib/departments'
import {
  metaDescription,
  absoluteUrl,
  DEFAULT_OG_IMAGE_PATH,
  DEFAULT_OG_IMAGE_ALT_ES,
} from '@/lib/site-config'

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return departments.map((department) => ({ slug: department.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const department = getDepartment(slug)
  if (!department) {
    return {}
  }

  const title = `${department.name} — Ingeniería estructural y gestión de riesgos`
  const description = metaDescription(department.es.description)
  const path = `/location/${slug}`

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      locale: 'es_GT',
      alternateLocale: ['en_US'],
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
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  return <LocationPage slug={slug} />
}

import type { Metadata } from "next"
import EnhancedLocationPage from "@/components/enhanced-location-page"
import { getDepartmentRichContent } from "@/lib/department-rich-content"
import {
  metaDescription,
  absoluteUrl,
  DEFAULT_OG_IMAGE_PATH,
  DEFAULT_OG_IMAGE_ALT_ES,
} from "@/lib/site-config"

const rich = getDepartmentRichContent("el-progreso")!
const path = "/location/el-progreso"

export const metadata: Metadata = {
  title: rich.metaTitle,
  description: metaDescription(rich.metaDescription, 160),
  alternates: { canonical: path },
  keywords: [
    "ingeniería estructural El Progreso",
    "gestión de riesgos de infraestructura",
    "planos para construcción",
    "ingeniería estructural Guatemala",
    "arquitectura y diseño de bodegas",
    "ingeniería hidrológica sanitaria geotécnica",
    "cálculo diseño estructural avanzado",
    "Guastatoya ingeniería civil",
  ],
  openGraph: {
    title: rich.metaTitle,
    description: metaDescription(rich.metaDescription, 160),
    url: absoluteUrl(path),
    locale: "es_GT",
    alternateLocale: ["en_US"],
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE_PATH, width: 1200, height: 630, alt: DEFAULT_OG_IMAGE_ALT_ES }],
  },
  twitter: {
    card: "summary_large_image",
    title: rich.metaTitle,
    description: metaDescription(rich.metaDescription, 160),
    images: [DEFAULT_OG_IMAGE_PATH],
  },
}

export default function Page() {
  return <EnhancedLocationPage slug="el-progreso" />
}

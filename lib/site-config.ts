/** Canonical production URL — used for metadata, sitemap, JSON-LD, robots */
export const SITE_URL = "https://ingenieriaestructural.gt" as const

export const SITE_NAME = "InnovazionE"

export const SITE_TAGLINE_ES =
  "Ingeniería estructural y gestión de riesgos en Guatemala — diseño, rehabilitación y consultoría."

/** OG / Twitter default — deploy must serve this path on production */
export const DEFAULT_OG_IMAGE_PATH = "/images/finite-element-model.jpg" as const

export const DEFAULT_OG_IMAGE_ALT_ES =
  "Modelado de elementos finitos para análisis de riesgo sísmico y estructural en infraestructura de Guatemala."

export const BUSINESS = {
  streetAddress: "8va. Calle 1-94 Zona 1",
  addressLocality: "Salcajá",
  addressRegion: "Quetzaltenango",
  addressCountry: "GT",
  telephone: "+50235142383",
  email: "ingsosaj@mail.com",
} as const

export function absoluteUrl(path: string): string {
  const base = SITE_URL.replace(/\/$/, "")
  const p = path.startsWith("/") ? path : `/${path}`
  return `${base}${p}`
}

/** Trim plain text for meta descriptions (~155 chars) */
export function metaDescription(text: string, max = 155): string {
  const t = text.replace(/\s+/g, " ").trim()
  if (t.length <= max) return t
  const cut = t.slice(0, max - 1)
  const lastSpace = cut.lastIndexOf(" ")
  return (lastSpace > 80 ? cut.slice(0, lastSpace) : cut).trimEnd() + "…"
}

import {
  SITE_URL,
  SITE_NAME,
  SITE_TAGLINE_ES,
  BUSINESS,
  absoluteUrl,
  DEFAULT_OG_IMAGE_PATH,
} from "@/lib/site-config"

export function JsonLd() {
  const payload = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: absoluteUrl("/icon.svg"),
        image: absoluteUrl(DEFAULT_OG_IMAGE_PATH),
        description: SITE_TAGLINE_ES,
        address: {
          "@type": "PostalAddress",
          streetAddress: BUSINESS.streetAddress,
          addressLocality: BUSINESS.addressLocality,
          addressRegion: BUSINESS.addressRegion,
          addressCountry: BUSINESS.addressCountry,
        },
        telephone: BUSINESS.telephone,
        email: BUSINESS.email,
        areaServed: [
          { "@type": "Country", name: "Guatemala" },
          { "@type": "AdministrativeArea", name: "Quetzaltenango" },
        ],
        knowsAbout: [
          "Ingeniería estructural",
          "Gestión de riesgos de infraestructura",
          "Análisis sísmico",
          "Structural engineering",
          "Infrastructure risk management",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_TAGLINE_ES,
        inLanguage: ["es-GT", "en"],
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  )
}

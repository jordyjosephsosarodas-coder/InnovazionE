export type DepartmentServiceLink = {
  href: string
  title: string
  description: string
}

export type DepartmentRichSection =
  | { type: "prose"; heading?: string; paragraphs: string[] }
  | { type: "highlight"; title: string; body: string }
  | { type: "municipalities"; title: string; items: { name: string; detail: string }[] }
  | { type: "serviceLinks"; title: string; intro?: string; links: DepartmentServiceLink[] }
  | { type: "checklist"; title: string; items: string[] }

export type DepartmentRichContent = {
  slug: string
  metaTitle: string
  metaDescription: string
  badge: string
  headline: string
  subheadline: string
  layout: "agies-first" | "corridor-split" | "lowland-steps"
  sections: DepartmentRichSection[]
  en: {
    metaTitle: string
    metaDescription: string
    badge: string
    headline: string
    subheadline: string
    sections: DepartmentRichSection[]
  }
}

const SERVICE_LINKS = {
  warehouse: {
    href: "/services/warehouse-design",
    titleEs: "Arquitectura y diseño de bodegas",
    titleEn: "Warehouse architecture and design",
    descEs:
      "Naves industriales y almacenes con luces amplias, cimentación adaptada al sitio y memoria de cálculo firmable ante municipalidad.",
    descEn:
      "Industrial warehouses and storage buildings with long spans, site-adapted foundations, and municipality-ready calculation reports.",
  },
  reinforcement: {
    href: "/services/structural-reinforcement",
    titleEs: "Cálculo, reforzamiento y diseño estructural avanzado",
    titleEn: "Advanced calculation, strengthening, and structural design",
    descEs:
      "Diagnóstico con ensayos no destructivos, modelación 3D y soluciones de reforzamiento para edificaciones preexistentes en zonas sísmicas.",
    descEn:
      "NDT diagnostics, 3D modeling, and strengthening solutions for existing buildings in high-seismic zones.",
  },
  hydrology: {
    href: "/services/architecture-hydrology-sanitary-geotechnical",
    titleEs: "Ingeniería hidrológica, sanitaria y geotécnica",
    titleEn: "Hydrology, sanitary, and geotechnical engineering",
    descEs:
      "Estudios de suelo, drenaje pluvial, agua potable y estabilización de taludes integrados al diseño estructural del proyecto.",
    descEn:
      "Soil studies, storm drainage, potable water, and slope stabilization integrated with structural design.",
  },
} as const

export const departmentRichContent: DepartmentRichContent[] = [
  {
    slug: "san-marcos",
    metaTitle:
      "Ingeniería estructural San Marcos | AGIES, bodegas y reforzamiento — InnovazionE",
    metaDescription:
      "Ingeniería estructural en San Marcos, Guatemala: cumplimiento AGIES en San Pedro y Malacatán, planos para construcción, bodegas sismorresistentes y gestión de riesgos de infraestructura en el occidente.",
    badge: "Occidente · Municipios de alta vulnerabilidad sísmica",
    headline: "Ingeniería estructural en San Marcos, Guatemala",
    subheadline:
      "Desde la frontera con México hasta la costa del Pacífico, San Marcos concentra una de las aceleraciones sísmicas más exigentes del país. InnovazionE acompaña proyectos que requieren ingeniería civil en occidente con criterio de gestión de riesgos de infraestructura, no solo cumplimiento mínimo de planos.",
    layout: "agies-first",
    sections: [
      {
        type: "municipalities",
        title: "Normativa AGIES en municipios de alta vulnerabilidad",
        items: [
          {
            name: "San Pedro Sacatepéquez",
            detail:
              "Edificaciones en ladera y suelos variables exigen memorias de cálculo y planos para construcción alineados a AGIES NSE-4. Revisamos categoría de suelo, irregularidad en planta y altura para evitar rechazos en licencia o riesgo de daño grave en sismo moderado.",
          },
          {
            name: "Malacatán y corredor costero",
            detail:
              "Bodegas cafetaleras, plantas de beneficio y comercio en planta baja enfrentan sacudimiento fuerte y humedad marina. Integramos arquitectura y diseño de bodegas con cálculo, reforzamiento y diseño estructural avanzado cuando la estructura existente no cumple la demanda sísmica actual.",
          },
          {
            name: "San Marcos (cabecera) y altiplano",
            detail:
              "Vivienda multifamiliar, instituciones y obra pública por encima de dos niveles requieren firma de ingeniero estructural. Coordinamos ingeniería hidrológica, sanitaria y geotécnica cuando el predio está en zona de deslizamiento o cerca de quebradas.",
          },
        ],
      },
      {
        type: "prose",
        heading: "Por qué la búsqueda local importa en este departamento",
        paragraphs: [
          "Quienes buscan ingeniería estructural Guatemala junto con el nombre del departamento suelen tener un permiso municipal pendiente, una bodega dañada tras un sismo o una ampliación en zona de falla. En San Marcos no basta trasladar detalles de la capital: el mapa de amenaza, la topografía y la normativa municipal cambian entre Malacatán, San Pedro y la cabecera.",
          "Nuestra gestión de riesgos de infraestructura parte del sitio — no de un catálogo genérico. Identificamos peligros, cuantificamos exposición y definimos soluciones que protegen la inversión durante décadas, ya sea obra nueva, reforzamiento o evaluación de edificios existentes.",
        ],
      },
      {
        type: "serviceLinks",
        title: "Servicios que enlazamos con proyectos en San Marcos",
        intro:
          "Cada enlace corresponde a un servicio especializado con entregables propios (memoria, planos, informes de riesgo):",
        links: [
          {
            href: SERVICE_LINKS.warehouse.href,
            title: SERVICE_LINKS.warehouse.titleEs,
            description: SERVICE_LINKS.warehouse.descEs,
          },
          {
            href: SERVICE_LINKS.reinforcement.href,
            title: SERVICE_LINKS.reinforcement.titleEs,
            description: SERVICE_LINKS.reinforcement.descEs,
          },
          {
            href: SERVICE_LINKS.hydrology.href,
            title: SERVICE_LINKS.hydrology.titleEs,
            description: SERVICE_LINKS.hydrology.descEs,
          },
        ],
      },
      {
        type: "highlight",
        title: "Ingeniería civil en occidente con base en Quetzaltenango",
        body: "Operamos desde el occidente guatemalteco con visitas de campo en San Marcos, coordinación con constructores locales y trazabilidad de cálculos para trámites AGIES y CONRED. Si su proyecto combina estructura, talud y drenaje, lo resolvemos en un solo equipo multidisciplinario.",
      },
    ],
    en: {
      metaTitle:
        "Structural engineering San Marcos | AGIES compliance — InnovazionE",
      metaDescription:
        "Structural engineering in San Marcos, Guatemala: AGIES compliance in San Pedro and Malacatán, construction drawings, seismic warehouses, and infrastructure risk management in the western highlands.",
      badge: "Western Guatemala · High seismic vulnerability",
      headline: "Structural engineering in San Marcos, Guatemala",
      subheadline:
        "From the Mexico border to the Pacific coast, San Marcos faces among the highest seismic demands in the country. InnovazionE supports western Guatemala projects with infrastructure risk management — not minimum-code drafting alone.",
      sections: [
        {
          type: "municipalities",
          title: "AGIES requirements in high-vulnerability municipalities",
          items: [
            {
              name: "San Pedro Sacatepéquez",
              detail:
                "Hillside buildings on variable soils need calculation reports and construction drawings aligned with AGIES NSE-4, including soil category, plan irregularity, and height limits.",
            },
            {
              name: "Malacatán and the coastal corridor",
              detail:
                "Coffee warehouses and ground-floor commercial assets face strong shaking and marine humidity. We combine warehouse design with advanced strengthening when existing structures no longer meet current seismic demand.",
            },
            {
              name: "San Marcos city and highlands",
              detail:
                "Multi-story housing, institutions, and public works above two levels require a structural engineer's seal. We add hydrology, sanitary, and geotechnical scope when sites are landslide-prone or near ravines.",
            },
          ],
        },
        {
          type: "prose",
          heading: "Why local search intent matters here",
          paragraphs: [
            "Owners searching for structural engineering in Guatemala plus a department name usually face a pending municipal permit, earthquake damage, or an expansion near an active fault. San Marcos projects cannot reuse capital-city details: hazard maps, terrain, and municipal rules differ between Malacatán, San Pedro, and the departmental capital.",
            "Our infrastructure risk management starts at the site. We identify hazards, quantify exposure, and define solutions that protect capital for decades — for new builds, retrofits, or assessments of existing assets.",
          ],
        },
        {
          type: "serviceLinks",
          title: "Specialized services linked to San Marcos projects",
          intro: "Each item below is a dedicated service line with its own deliverables:",
          links: [
            {
              href: SERVICE_LINKS.warehouse.href,
              title: SERVICE_LINKS.warehouse.titleEn,
              description: SERVICE_LINKS.warehouse.descEn,
            },
            {
              href: SERVICE_LINKS.reinforcement.href,
              title: SERVICE_LINKS.reinforcement.titleEn,
              description: SERVICE_LINKS.reinforcement.descEn,
            },
            {
              href: SERVICE_LINKS.hydrology.href,
              title: SERVICE_LINKS.hydrology.titleEn,
              description: SERVICE_LINKS.hydrology.descEn,
            },
          ],
        },
        {
          type: "highlight",
          title: "Western Guatemala engineering from Quetzaltenango",
          body: "We are based in the western highlands with field visits across San Marcos, coordination with local builders, and traceable calculations for AGIES and CONRED filings. Structure, slope, and drainage can be handled by one multidisciplinary team.",
        },
      ],
    },
  },
  {
    slug: "chimaltenango",
    metaTitle:
      "Ingeniería civil Chimaltenango | Sismo, volcanes y planos AGIES — InnovazionE",
    metaDescription:
      "Ingeniería civil en occidente para Chimaltenango: diseño sismorresistente, planos para construcción, bodegas, gestión de riesgos de infraestructura e ingeniería hidrológica y geotécnica cerca del corredor volcánico.",
    badge: "Corredor volcánico · Fallas y ceniza",
    headline: "Ingeniería civil en Chimaltenango: sismo, taludes y obra licenciable",
    subheadline:
      "Entre el valle de Guatemala y el altiplano occidental, Chimaltenango mezcla crecimiento urbano, industria ligera y comunidades en ladera con amenaza sísmica elevada y caída de ceniza. Ofrecemos ingeniería estructural Guatemala con enfoque territorial — distinto a una ficha genérica de servicios.",
    layout: "corridor-split",
    sections: [
      {
        type: "highlight",
        title: "Alta sismicidad más riesgo de ladera",
        body: "Las fallas regionales y los volcanes Fuego y Pacaya condicionan el diseño: es necesario estimar movimiento del suelo, carga de ceniza y estabilidad de taludes en la misma memoria de cálculo. Un proyecto que solo contempla gravedad y viento queda corto para licencias y para la seguridad real del ocupante.",
      },
      {
        type: "prose",
        heading: "Desarrollo urbano con cumplimiento AGIES",
        paragraphs: [
          "En Tecpán, Chimaltenango capital y municipios a lo largo de la CA-1, las obras comerciales y de más de dos niveles exigen ingeniero estructural para firmar planos para construcción. Aplicamos AGIES NSE-4 y criterios CONRED cuando el predio está en zona de inundación o deslizamiento.",
          "Para industria y logística, la arquitectura y diseño de bodegas debe anticipar luces mayores a cinco metros, cargas de maquinaria y posibles ampliaciones. Entregamos modelos de cálculo, reforzamiento y diseño estructural avanzado si la nave existente fue construida con criterios obsoletos.",
        ],
      },
      {
        type: "checklist",
        title: "Qué resuelve InnovazionE en este departamento",
        items: [
          "Gestión de riesgos de infraestructura antes de comprar terreno o ampliar planta",
          "Planos para construcción y memoria de cálculo aceptables en municipalidad",
          "Ingeniería hidrológica, sanitaria y geotécnica en predios con pendiente o drenaje deficiente",
          "Evaluación y reforzamiento de edificios institucionales y comerciales",
          "Coordinación de obra con constructores del corredor occidente–centro",
        ],
      },
      {
        type: "serviceLinks",
        title: "Rutas de servicio recomendadas en Chimaltenango",
        links: [
          {
            href: SERVICE_LINKS.hydrology.href,
            title: SERVICE_LINKS.hydrology.titleEs,
            description:
              "Ideal para lotes en ladera: estudio de suelos, drenajes y estabilización previos al diseño estructural.",
          },
          {
            href: SERVICE_LINKS.warehouse.href,
            title: SERVICE_LINKS.warehouse.titleEs,
            description:
              "Bodegas y centros de distribución con criterio sísmico para el corredor industrial de Chimaltenango.",
          },
          {
            href: SERVICE_LINKS.reinforcement.href,
            title: SERVICE_LINKS.reinforcement.titleEs,
            description:
              "Reforzamiento de estructuras dañadas por sismo o con déficit de confinamiento en columnas y muros.",
          },
        ],
      },
      {
        type: "prose",
        paragraphs: [
          "Si usted busca ingeniería civil en occidente y menciona Chimaltenango, probablemente necesita un equipo que entienda licencias locales y amenazas múltiples. InnovazionE une ingeniería estructural Guatemala con visitas de campo y seguimiento durante la construcción.",
        ],
      },
    ],
    en: {
      metaTitle:
        "Civil engineering Chimaltenango | Seismic, volcanic, AGIES — InnovazionE",
      metaDescription:
        "Western Guatemala civil engineering for Chimaltenango: seismic design, construction drawings, warehouses, infrastructure risk management, and hydrology/geotechnical studies near the volcanic corridor.",
      badge: "Volcanic corridor · Faults and ash",
      headline: "Civil engineering in Chimaltenango: earthquakes, slopes, and permits",
      subheadline:
        "Between Guatemala City and the western highlands, Chimaltenango mixes urban growth, light industry, and hillside communities with high seismicity and volcanic ash. We provide territory-specific structural engineering — not a generic services brochure.",
      sections: [
        {
          type: "highlight",
          title: "High seismicity plus slope hazard",
          body: "Regional faults and Fuego and Pacaya volcanoes drive design: ground motion, ash loading, and slope stability belong in the same calculation report. Gravity and wind alone are insufficient for permits and real safety.",
        },
        {
          type: "prose",
          heading: "Urban growth with AGIES compliance",
          paragraphs: [
            "In Tecpán, Chimaltenango city, and towns along the CA-1, commercial and three-plus-story work requires a structural engineer's seal on construction drawings. We apply AGIES NSE-4 and CONRED criteria on flood- and landslide-prone sites.",
            "For industry and logistics, warehouse architecture must plan spans over five meters, equipment loads, and future expansions. We deliver advanced calculation and strengthening when existing shells were built to outdated rules.",
          ],
        },
        {
          type: "checklist",
          title: "What InnovazionE delivers in this department",
          items: [
            "Infrastructure risk management before land purchase or plant expansion",
            "Construction drawings and calculation reports for municipal approval",
            "Hydrology, sanitary, and geotechnical engineering on sloped or poorly drained sites",
            "Assessment and strengthening of institutional and commercial buildings",
            "Construction coordination with western–central corridor builders",
          ],
        },
        {
          type: "serviceLinks",
          title: "Recommended service paths in Chimaltenango",
          links: [
            {
              href: SERVICE_LINKS.hydrology.href,
              title: SERVICE_LINKS.hydrology.titleEn,
              description: "Best for hillside lots: soils, drainage, and stabilization before structural design.",
            },
            {
              href: SERVICE_LINKS.warehouse.href,
              title: SERVICE_LINKS.warehouse.titleEn,
              description: "Warehouses and distribution centers with seismic criteria for Chimaltenango industry.",
            },
            {
              href: SERVICE_LINKS.reinforcement.href,
              title: SERVICE_LINKS.reinforcement.titleEn,
              description: "Strengthening after earthquake damage or inadequate column and wall confinement.",
            },
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "If you search for western Guatemala civil engineering and Chimaltenango, you likely need a team that understands local permits and multiple hazards. InnovazionE combines structural engineering with field visits and construction-phase support.",
          ],
        },
      ],
    },
  },
  {
    slug: "el-progreso",
    metaTitle:
      "Ingeniería estructural El Progreso | Puentes, bodegas y riesgo sísmico — InnovazionE",
    metaDescription:
      "Gestión de riesgos de infraestructura y ingeniería estructural en El Progreso: planos para construcción, bodegas en el corredor seco, cálculo avanzado y estudios hidrológicos y geotécnicos en tierras bajas.",
    badge: "Corredor seco · Fallas del Motagua",
    headline: "Gestión de riesgos e ingeniería estructural en El Progreso",
    subheadline:
      "Guastatoya, Sansare y los ejes hacia Zacapa y Baja Verapaz concentran infraestructura lineal, bodegas agroindustriales y vivienda en suelos aluviales blandos. Aquí el sismo afecta puentes, bodegas y losas en planta baja tanto como las inundaciones estacionales.",
    layout: "lowland-steps",
    sections: [
      {
        type: "prose",
        paragraphs: [
          "El Progreso no aparece en búsquedas nacionales genéricas de ingeniería estructural Guatemala, pero sus promotores sí buscan por departamento cuando necesitan licitar una bodega, reforzar un puente menor o presentar planos para construcción ante la municipalidad. Respondemos con ingeniería civil en occidente y oriente del corredor seco, con equipo basado en Quetzaltenango y desplazamientos programados al sitio.",
        ],
      },
      {
        type: "checklist",
        title: "Secuencia típica de un proyecto en tierras bajas",
        items: [
          "Diagnóstico de gestión de riesgos de infraestructura (sismo, inundación, erosión)",
          "Ingeniería hidrológica, sanitaria y geotécnica en suelos aluviales y cruces de río",
          "Cálculo y diseño estructural de cimentaciones profundas o mejoradas",
          "Arquitectura y diseño de bodegas para agroexportación y logística regional",
          "Entrega de planos para construcción y memoria firmable bajo AGIES",
          "Cálculo, reforzamiento y diseño estructural avanzado en obra existente dañada",
        ],
      },
      {
        type: "prose",
        heading: "Sismicidad en infraestructura lineal y edificación",
        paragraphs: [
          "La proximidad a sistemas de falla del Motagua incrementa la demanda sísmica en puentes pequeños, pasos a desnivel y edificaciones comerciales de uno y dos niveles con sistema irregular. No replicamos soluciones de la capital: ajustamos espectros, suelo y detalles de confinamiento al sitio.",
          "Cuando la prioridad es continuidad operativa — plantas de procesamiento, centros de acopio o instituciones — la gestión de riesgos de infraestructura cuantifica pérdida esperada y define refuerzos priorizados por presupuesto.",
        ],
      },
      {
        type: "serviceLinks",
        title: "Servicios especializados para El Progreso",
        links: [
          {
            href: SERVICE_LINKS.warehouse.href,
            title: "Arquitectura y diseño de bodegas agroindustriales",
            description:
              "Estructuras para melón, hortaliza y logística con luces claras, muros de contención livianos y detalle sísmico para suelos blandos.",
          },
          {
            href: SERVICE_LINKS.hydrology.href,
            title: SERVICE_LINKS.hydrology.titleEs,
            description:
              "Drenaje pluvial, obras de canalización y estabilidad de taludes en margen de río para proteger la cimentación.",
          },
          {
            href: SERVICE_LINKS.reinforcement.href,
            title: SERVICE_LINKS.reinforcement.titleEs,
            description:
              "Reforzamiento de losas, vigas y columnas con déficit por licuación o fatiga sísmica histórica.",
          },
        ],
      },
      {
        type: "highlight",
        title: "Planos para construcción sin sorpresas en municipalidad",
        body: "Coordinamos con reguladores locales la categoría de suelo, altura y uso de suelo antes de cerrar el diseño estructural. Eso reduce iteraciones en trámite y evita demoler por observaciones tardías de ingeniería estructural Guatemala mal dimensionada para El Progreso.",
      },
    ],
    en: {
      metaTitle:
        "Structural engineering El Progreso | Bridges, warehouses — InnovazionE",
      metaDescription:
        "Infrastructure risk management and structural engineering in El Progreso: construction drawings, dry-corridor warehouses, advanced analysis, and hydrology/geotechnical studies in lowland soils.",
      badge: "Dry corridor · Motagua faults",
      headline: "Risk management and structural engineering in El Progreso",
      subheadline:
        "Guastatoya, Sansare, and corridors toward Zacapa and Baja Verapaz combine linear assets, agro-industrial warehouses, and housing on soft alluvial soils. Earthquakes affect bridges, warehouses, and ground-floor slabs as much as seasonal flooding.",
      layout: "lowland-steps",
      sections: [
        {
          type: "prose",
          paragraphs: [
            "El Progreso rarely appears in generic national searches for structural engineering in Guatemala, yet local promoters search by department when bidding a warehouse, strengthening a small bridge, or submitting construction drawings. InnovazionE serves the dry corridor from a Quetzaltenango base with scheduled site visits.",
          ],
        },
        {
          type: "checklist",
          title: "Typical lowland project sequence",
          items: [
            "Infrastructure risk management screening (earthquake, flood, erosion)",
            "Hydrology, sanitary, and geotechnical work on alluvial soils and river crossings",
            "Structural design of deep or improved foundations",
            "Warehouse architecture for agro-export and regional logistics",
            "Construction drawings and AGIES-compliant calculation reports",
            "Advanced strengthening for damaged existing structures",
          ],
        },
        {
          type: "prose",
          heading: "Seismic demand on linear and building assets",
          paragraphs: [
            "Proximity to Motagua fault systems raises seismic demand on small bridges, grade separations, and irregular one- to two-story commercial buildings. We do not copy capital-city templates — spectra, soil, and confinement details are site-specific.",
            "When operational continuity matters — processing plants, collection centers, institutions — infrastructure risk management quantifies expected loss and prioritizes upgrades by budget.",
          ],
        },
        {
          type: "serviceLinks",
          title: "Specialized services for El Progreso",
          links: [
            {
              href: SERVICE_LINKS.warehouse.href,
              title: "Agro-industrial warehouse design",
              description:
                "Structures for melon, produce, and logistics with clear spans, light retaining walls, and seismic detailing for soft soils.",
            },
            {
              href: SERVICE_LINKS.hydrology.href,
              title: SERVICE_LINKS.hydrology.titleEn,
              description: "Storm drainage, channel works, and riverbank stability to protect foundations.",
            },
            {
              href: SERVICE_LINKS.reinforcement.href,
              title: SERVICE_LINKS.reinforcement.titleEn,
              description: "Strengthening slabs, beams, and columns with deficits from liquefaction or past earthquakes.",
            },
          ],
        },
        {
          type: "highlight",
          title: "Construction drawings without municipal surprises",
          body: "We align soil category, height, and land use with local regulators before finalizing structural design — reducing permit iterations and late demolitions from designs sized for the wrong department.",
        },
      ],
    },
  },
]

export const ENHANCED_DEPARTMENT_SLUGS = departmentRichContent.map((entry) => entry.slug)

export function isEnhancedDepartment(slug: string): boolean {
  return ENHANCED_DEPARTMENT_SLUGS.includes(slug)
}

export function getDepartmentRichContent(slug: string): DepartmentRichContent | undefined {
  return departmentRichContent.find((entry) => entry.slug === slug)
}

export type Department = {
  slug: string
  name: string
  description: string
}

export const departments: Department[] = [
  {
    slug: "alta-verapaz",
    name: "Alta Verapaz",
    description:
      "Engineering and risk assessment services for the vineyards, infrastructure, and natural resources of Alta Verapaz.",
  },
  {
    slug: "baja-verapaz",
    name: "Baja Verapaz",
    description:
      "Structural reviews and flood-risk evaluation for transport and community assets in Baja Verapaz.",
  },
  {
    slug: "chimaltenango",
    name: "Chimaltenango",
    description:
      "Project support for urban development, seismic resilience, and mountain infrastructure in Chimaltenango.",
  },
  {
    slug: "chiquimula",
    name: "Chiquimula",
    description:
      "Site-specific risk mitigation and construction advisory for eastern Guatemala’s growing industrial hubs.",
  },
  {
    slug: "el-progreso",
    name: "El Progreso",
    description:
      "Comprehensive engineering services for transportation corridors and lowland development in El Progreso.",
  },
  {
    slug: "escuintla",
    name: "Escuintla",
    description:
      "Coastal and port-related structural guidance for commercial and agricultural assets in Escuintla.",
  },
  {
    slug: "guatemala",
    name: "Guatemala",
    description:
      "High-quality engineering consulting for metropolitan and institutional projects across Guatemala Department.",
  },
  {
    slug: "huehuetenango",
    name: "Huehuetenango",
    description:
      "Risk-based engineering and infrastructure support for mountainous and border-region developments.",
  },
  {
    slug: "izabal",
    name: "Izabal",
    description:
      "Coastal, port, and environmental risk advisory services for the Atlantic corridor in Izabal.",
  },
  {
    slug: "jalapa",
    name: "Jalapa",
    description:
      "Regional project management and structural reviews tailored to Southeastern Guatemala’s growing communities.",
  },
  {
    slug: "jutiapa",
    name: "Jutiapa",
    description:
      "Engineering and asset protection services serving agriculture, transport, and municipal infrastructure.",
  },
  {
    slug: "peten",
    name: "Petén",
    description:
      "Remote-area infrastructure assessments and conservation-friendly engineering for Petén’s natural reserves.",
  },
  {
    slug: "quetzaltenango",
    name: "Quetzaltenango",
    description:
      "Urban resilience, slope stability, and structural assessment services for Western Highlands communities.",
  },
  {
    slug: "quiche",
    name: "Quiché",
    description:
      "Risk evaluation and infrastructure advisory for cultural heritage and rural development in Quiché.",
  },
  {
    slug: "retalhuleu",
    name: "Retalhuleu",
    description:
      "Cost-effective structural consulting and site planning for coastal and agricultural areas.",
  },
  {
    slug: "sacatepequez",
    name: "Sacatepéquez",
    description:
      "Historic site engineering and earthquake resilience support for cities like Antigua Guatemala.",
  },
  {
    slug: "san-marcos",
    name: "San Marcos",
    description:
      "Highland and coastal project advisories that prioritize safety, durability, and local conditions.",
  },
  {
    slug: "santa-rosa",
    name: "Santa Rosa",
    description:
      "Infrastructure planning and risk management for growing corridor developments near Guatemala City.",
  },
  {
    slug: "solola",
    name: "Sololá",
    description:
      "Community-focused engineering and structural support for lake-region tourism and rural assets.",
  },
  {
    slug: "suchitepequez",
    name: "Suchitepéquez",
    description:
      "Comprehensive site risk analysis and structural consulting for the Pacific coastal plain.",
  },
  {
    slug: "totonicapan",
    name: "Totonicapán",
    description:
      "Mountain infrastructure resilience, landslide evaluation, and building safety services.",
  },
  {
    slug: "zacapa",
    name: "Zacapa",
    description:
      "Dryland and corridor engineering services for transportation, energy, and water management projects.",
  },
]

export function getDepartment(slug: string) {
  return departments.find((department) => department.slug === slug)
}

export type Department = {
  slug: string
  name: string
  description: string
  riskDescription: string
  additionalRisk: string
  regionalStrength: string
}

export const departments: Department[] = [
  {
    slug: "alta-verapaz",
    name: "Alta Verapaz",
    description:
      "Engineering and risk assessment services for the vineyards, infrastructure, and natural resources of Alta Verapaz.",
    riskDescription:
      "Seismicity is an important risk in Alta Verapaz, where tectonic shaking can interact with steep terrain and soft valley soils. We focus on earthquake-resistant design and slope stability for roads, bridges, and rural infrastructure.",
    additionalRisk:
      "Rain-triggered landslides and river flooding are also major concerns here, so our work combines seismic resilience with hillside and watershed planning.",
    regionalStrength:
      "Alta Verapaz demands integrated seismic and hydrological risk planning for its valleys, coffee roads, and protected forest corridors.",
  },
  {
    slug: "baja-verapaz",
    name: "Baja Verapaz",
    description:
      "Structural reviews and flood-risk evaluation for transport and community assets in Baja Verapaz.",
    riskDescription:
      "Baja Verapaz is crossed by active fault systems that can create strong ground motion. Our engineering strategies prioritize seismic-resistant foundations and vibration-sensitive infrastructure.",
    additionalRisk:
      "Steep river valleys and seasonal rainfall also raise landslide and flood risks, which we address through drainage, slope support, and resilient transport design.",
    regionalStrength:
      "Baja Verapaz requires robust earthquake and slope stability solutions for rural roads, community buildings, and water-management works.",
  },
  {
    slug: "chimaltenango",
    name: "Chimaltenango",
    description:
      "Project support for urban development, seismic resilience, and mountain infrastructure in Chimaltenango.",
    riskDescription:
      "Chimaltenango sits near active volcanic systems and regional fault lines, making earthquake shaking and volcanic ash exposure a primary design concern. We assess ground motion and ash loading for structures across the department.",
    additionalRisk:
      "Steep hills and heavy rainfall combine with seismic hazards to drive landslides and slope failures, so our plans include soil stabilization and drainage for mountain infrastructure.",
    regionalStrength:
      "Chimaltenango benefits from engineering that balances seismic resilience with volcanic and rain-driven slope risk management.",
  },
  {
    slug: "chiquimula",
    name: "Chiquimula",
    description:
      "Site-specific risk mitigation and construction advisory for eastern Guatemala’s growing industrial hubs.",
    riskDescription:
      "Chiquimula is directly affected by the Motagua seismic corridor, where earthquakes can generate damaging shaking. Our teams focus on earthquake-resistant design for warehouses, industrial facilities, and community projects.",
    additionalRisk:
      "The region also experiences seasonal erosion and dry-weather land instability, so we combine seismic design with long-term soil and infrastructure resilience planning.",
    regionalStrength:
      "Chiquimula demands earthquake-aware design for critical assets, together with erosion and slope stability measures.",
  },
  {
    slug: "el-progreso",
    name: "El Progreso",
    description:
      "Comprehensive engineering services for transportation corridors and lowland development in El Progreso.",
    riskDescription:
      "El Progreso is vulnerable to seismic shaking from nearby fault zones, especially for linear infrastructure and river crossings. We design bridges, roadways, and buildings with earthquake resistance in mind.",
    additionalRisk:
      "Soft, alluvial soils and river flood risk are also key issues here, so our work includes geotechnical stabilization and flood-resilient alignment planning.",
    regionalStrength:
      "El Progreso benefits from combining seismic design with flood and soil-strength expertise in lowland development.",
  },
  {
    slug: "escuintla",
    name: "Escuintla",
    description:
      "Coastal and port-related structural guidance for commercial and agricultural assets in Escuintla.",
    riskDescription:
      "Escuintla faces high seismic hazard from the Pacific subduction zone, where strong earthquakes and tsunami potential affect coastal infrastructure. We prioritize foundation resilience and coastal protection for ports and industrial facilities.",
    additionalRisk:
      "Storm surge, coastal erosion, and volcanic ash from nearby volcanoes are additional risks, so we include multi-hazard design for shoreline and agricultural assets.",
    regionalStrength:
      "Escuintla requires coastal and seismic engineering that protects ports, roads, and coastal agriculture from both earthquake and storm hazards.",
  },
  {
    slug: "guatemala",
    name: "Guatemala",
    description:
      "High-quality engineering consulting for metropolitan and institutional projects across Guatemala Department.",
    riskDescription:
      "Guatemala Department contains one of the country’s highest seismic exposures, especially around Guatemala City and its surrounding volcanic slopes. Our work focuses on urban earthquake resilience and safe rebuilding strategies.",
    additionalRisk:
      "Landslides, ashfall, and unstable hill slopes are common, so we integrate seismic retrofit with slope support and drainage planning for municipalities and institutions.",
    regionalStrength:
      "Guatemala demands urban-scale seismic risk management combined with slope and volcanic hazard awareness.",
  },
  {
    slug: "huehuetenango",
    name: "Huehuetenango",
    description:
      "Risk-based engineering and infrastructure support for mountainous and border-region developments.",
    riskDescription:
      "Huehuetenango’s highlands experience seismic shaking from deep plate events, making earthquake-safe design essential for remote roads and community facilities.",
    additionalRisk:
      "Steep terrain also creates landslide and slope instability risk in heavy rains, so our engineering includes hillside drainage and resilient foundation strategies.",
    regionalStrength:
      "Huehuetenango needs resilient infrastructure that addresses both seismic shaking and mountainous slope hazards.",
  },
  {
    slug: "izabal",
    name: "Izabal",
    description:
      "Port, coastal, and logistics engineering solutions tailored for Izabal’s growth corridors.",
    riskDescription:
      "Izabal is exposed to Caribbean seismic and tsunami risk, making earthquake-resilient port and coastal designs essential for the Atlantic corridor.",
    additionalRisk:
      "Tropical storm surge, coastal flooding, and liquefaction in low-lying soils are also important, so we plan for multiple coastal hazards.",
    regionalStrength:
      "Izabal benefits from coastal seismic engineering that also accounts for storms, flooding, and ground stability.",
  },
  {
    slug: "jalapa",
    name: "Jalapa",
    description:
      "Practical structural engineering and community-focused project delivery across Jalapa.",
    riskDescription:
      "Jalapa lies near active highland faults, so seismicity is a key design factor for housing, roads, and municipal infrastructure.",
    additionalRisk:
      "Heavy rains and steep slopes create landslide and erosion hazards, which we address through slope stabilization and resilient drainage design.",
    regionalStrength:
      "Jalapa’s engineering needs combine earthquake-resistant structures with slope and storm resilience for communities.",
  },
  {
    slug: "jutiapa",
    name: "Jutiapa",
    description:
      "Engineering and asset protection services serving agriculture, transport, and municipal infrastructure.",
    riskDescription:
      "Jutiapa sits along eastern fault lines where earthquakes can impact rural infrastructure and agricultural facilities. We apply earthquake-resistant design to roads, storage, and service buildings.",
    additionalRisk:
      "Dry-season erosion, heat, and occasional intense rains also affect site stability, so we combine seismic design with erosion control and resilient drainage.",
    regionalStrength:
      "Jutiapa requires durable engineering that protects assets from both seismic shaking and seasonal environmental stress.",
  },
  {
    slug: "peten",
    name: "Petén",
    description:
      "Remote-area infrastructure assessments and conservation-friendly engineering for Petén’s natural reserves.",
    riskDescription:
      "Petén’s remote infrastructure is still affected by occasional earthquakes, so we build with seismic resilience even in low-density regions.",
    additionalRisk:
      "Annual flooding, poor soils, and conservation constraints also shape our approach to roads, lodges, and utilities in the rainforest.",
    regionalStrength:
      "Petén benefits from resilient engineering that balances seismic safety with flood-adapted, conservation-sensitive design.",
  },
  {
    slug: "quetzaltenango",
    name: "Quetzaltenango",
    description:
      "Urban resilience, slope stability, and structural assessment services for Western Highlands communities.",
    riskDescription:
      "Quetzaltenango is one of the most seismically active departments, with strong shaking from local faults and nearby volcanic systems. We focus on earthquake-safe urban and hillside design.",
    additionalRisk:
      "Landslides and slope failure are also common in the highlands, so our plans include stability analysis and drainage for steep terrain.",
    regionalStrength:
      "Quetzaltenango demands earthquake-aware engineering combined with slope stability and volcanic hazard mitigation.",
  },
  {
    slug: "quiche",
    name: "Quiché",
    description:
      "Risk evaluation and infrastructure advisory for cultural heritage and rural development in Quiché.",
    riskDescription:
      "Quiché experiences seismic risk from the subduction zone and internal faults, and its steep highlands are sensitive to earthquake-triggered landslides.",
    additionalRisk:
      "River flooding and soil erosion are also important, so our designs protect roads, heritage sites, and rural communities from multiple natural hazards.",
    regionalStrength:
      "Quiché benefits from combined seismic and slope-resilience engineering for its cultural and rural assets.",
  },
  {
    slug: "retalhuleu",
    name: "Retalhuleu",
    description:
      "Cost-effective structural consulting and site planning for coastal and agricultural areas.",
    riskDescription:
      "Retalhuleu’s Pacific plain is exposed to seismic shaking, tsunami potential, and coastal flooding. We design ports, storage, and agricultural buildings to resist earthquake and water hazards.",
    additionalRisk:
      "Storm surge and drainage challenges are also key, so we ensure ground improvement and flood-adaptive site planning.",
    regionalStrength:
      "Retalhuleu requires coastal engineering that integrates seismic resilience with storm and flood protection.",
  },
  {
    slug: "sacatepequez",
    name: "Sacatepéquez",
    description:
      "Historic site engineering and earthquake resilience support for cities like Antigua Guatemala.",
    riskDescription:
      "Sacatepéquez is in one of Guatemala’s most critical seismic zones, with frequent strong earthquakes and nearby volcanic hazards. We focus on protecting heritage buildings and new construction from seismic damage.",
    additionalRisk:
      "Steep slopes, ashfall, and landslide risk also influence our recommendations for slope stabilization and resilient foundations.",
    regionalStrength:
      "Sacatepéquez needs heritage-sensitive seismic engineering with slope and volcanic hazard awareness.",
  },
  {
    slug: "san-marcos",
    name: "San Marcos",
    description:
      "Highland and coastal project advisories that prioritize safety, durability, and local conditions.",
    riskDescription:
      "San Marcos combines highland seismic risk with volcanic hazards from nearby peaks, plus coastal storm and landslide exposure. Earthquake safety is a central part of our engineering approach.",
    additionalRisk:
      "Coastal storms, slope instability, and erosion are additional risks that we address through resilient site design and infrastructure planning.",
    regionalStrength:
      "San Marcos benefits from engineering that protects both mountain and coastal communities from seismic and weather-related hazards.",
  },
  {
    slug: "santa-rosa",
    name: "Santa Rosa",
    description:
      "Infrastructure planning and risk management for growing corridor developments near Guatemala City.",
    riskDescription:
      "Santa Rosa is influenced by seismic activity along southern fault systems, so building and transport design emphasize earthquake resilience.",
    additionalRisk:
      "Rapid river flows, occasional landslides, and erosion also shape our infrastructure advice for corridor and community projects.",
    regionalStrength:
      "Santa Rosa needs earthquake-aware corridor planning reinforced by flood and slope resilience.",
  },
  {
    slug: "solola",
    name: "Sololá",
    description:
      "Community-focused engineering and structural support for lake-region tourism and rural assets.",
    riskDescription:
      "Sololá surrounds Lake Atitlán, where seismic shaking and lakeshore landslide risk are major hazards. We plan structures and roads to withstand earthquakes and slope movement.",
    additionalRisk:
      "Heavy rain, erosion, and ashfall also affect lakefront communities, so our designs include stabilization, drainage, and resilient lakeside planning.",
    regionalStrength:
      "Sololá requires engineering that safeguards lakeside tourism and rural assets from seismic and slope hazards.",
  },
  {
    slug: "suchitepequez",
    name: "Suchitepéquez",
    description:
      "Comprehensive site risk analysis and structural consulting for the Pacific coastal plain.",
    riskDescription:
      "Suchitepéquez faces earthquake and tsunami risk along the Pacific coast, plus coastal flooding during tropical storms. We design with both seismic and water hazards in mind.",
    additionalRisk:
      "Liquefaction potential in sandy coastal soils and drainage issues are also assessed to protect agricultural and transport assets.",
    regionalStrength:
      "Suchitepéquez benefits from combined coastal and seismic engineering for its plain and infrastructure network.",
  },
  {
    slug: "totonicapan",
    name: "Totonicapán",
    description:
      "Mountain infrastructure resilience, landslide evaluation, and building safety services.",
    riskDescription:
      "Totonicapán’s steep highlands are exposed to seismic shaking and slope instability, particularly during heavy rain. Our engineering focuses on earthquake-resistant structures and hillside stability.",
    additionalRisk:
      "Landslides and soil erosion are common concerns, so we incorporate drainage and slope support into our resilience plans.",
    regionalStrength:
      "Totonicapán requires durable mountain engineering that protects communities from both seismic and landslide hazards.",
  },
  {
    slug: "zacapa",
    name: "Zacapa",
    description:
      "Dryland and corridor engineering services for transportation, energy, and water management projects.",
    riskDescription:
      "Zacapa is located near the Motagua fault and has significant seismic risk for transport corridors and water infrastructure. Earthquake-resistant design is central to our asset protection strategies.",
    additionalRisk:
      "Heat, drought, and erosion also influence long-term infrastructure reliability, so we combine seismic resilience with durable, climate-adapted engineering.",
    regionalStrength:
      "Zacapa demands engineering that protects lifeline corridors from seismic shaking while addressing dry corridor environmental stress.",
  },
]

export function getDepartment(slug: string) {
  return departments.find((department) => department.slug === slug)
}

export type LocalizedDepartmentCopy = {
  description: string
  riskDescription: string
  additionalRisk: string
  regionalStrength: string
}

export type Department = {
  slug: string
  name: string
  en: LocalizedDepartmentCopy
  es: LocalizedDepartmentCopy
}

export const departments: Department[] = [
  {
    slug: "alta-verapaz",
    name: "Alta Verapaz",
    en: {
      description:
        "Engineering and risk assessment services for the vineyards, infrastructure, and natural resources of Alta Verapaz.",
      riskDescription:
        "Seismicity is an important risk in Alta Verapaz, where tectonic shaking can interact with steep terrain and soft valley soils. We focus on earthquake-resistant design and slope stability for roads, bridges, and rural infrastructure.",
      additionalRisk:
        "Rain-triggered landslides and river flooding are also major concerns here, so our work combines seismic resilience with hillside and watershed planning.",
      regionalStrength:
        "Alta Verapaz demands integrated seismic and hydrological risk planning for its valleys, coffee roads, and protected forest corridors.",
    },
    es: {
      description:
        "Servicios de ingeniería y evaluación de riesgos para viñedos, infraestructura y recursos naturales en Alta Verapaz.",
      riskDescription:
        "La sismicidad es un riesgo importante en Alta Verapaz; el sacudimiento puede interactuar con terreno muy inclinado y suelos blandos en los valles. Nos enfocamos en diseño sismorresistente y estabilidad de taludes para caminos, puentes e infraestructura rural.",
      additionalRisk:
        "Aquí también son importantes los deslizamientos por lluvia y las inundaciones fluviales, por eso combinamos resiliencia sísmica con planificación de laderas y cuencas.",
      regionalStrength:
        "Alta Verapaz requiere planeación integral de riesgos sísmicos e hidrológicos para sus valles, caminos cafetaleros y corredores forestales protegidos.",
    },
  },
  {
    slug: "baja-verapaz",
    name: "Baja Verapaz",
    en: {
      description:
        "Structural reviews and flood-risk evaluation for transport and community assets in Baja Verapaz.",
      riskDescription:
        "Baja Verapaz is crossed by active fault systems that can create strong ground motion. Our engineering strategies prioritize seismic-resistant foundations and vibration-sensitive infrastructure.",
      additionalRisk:
        "Steep river valleys and seasonal rainfall also raise landslide and flood risks, which we address through drainage, slope support, and resilient transport design.",
      regionalStrength:
        "Baja Verapaz requires robust earthquake and slope stability solutions for rural roads, community buildings, and water-management works.",
    },
    es: {
      description:
        "Revisiones estructurales y evaluación de riesgo por inundaciones para infraestructura de transporte y activos comunitarios en Baja Verapaz.",
      riskDescription:
        "En Baja Verapaz hay sistemas de fallas activas que pueden generar movimiento fuerte del terreno; priorizamos cimentaciones sismorresistentes e infraestructura sensible a vibraciones.",
      additionalRisk:
        "Los valles fluviales pronunciados y las lluvias estacionales incrementan deslizamientos e inundaciones, que abordamos con drenajes, soporte en taludes y diseño resilientes de transporte.",
      regionalStrength:
        "Baja Verapaz necesita soluciones sólidas de sismo y estabilidad de taludes para caminos rurales, edificios comunitarios y obras hidráulicas.",
    },
  },
  {
    slug: "chimaltenango",
    name: "Chimaltenango",
    en: {
      description:
        "Project support for urban development, seismic resilience, and mountain infrastructure in Chimaltenango.",
      riskDescription:
        "Chimaltenango sits near active volcanic systems and regional fault lines, making earthquake shaking and volcanic ash exposure a primary design concern. We assess ground motion and ash loading for structures across the department.",
      additionalRisk:
        "Steep hills and heavy rainfall combine with seismic hazards to drive landslides and slope failures, so our plans include soil stabilization and drainage for mountain infrastructure.",
      regionalStrength:
        "Chimaltenango benefits from engineering that balances seismic resilience with volcanic and rain-driven slope risk management.",
    },
    es: {
      description:
        "Apoyo a proyectos de desarrollo urbano, resiliencia sísmica e infraestructura de montaña en Chimaltenango.",
      riskDescription:
        "Chimaltenango está cerca de sistemas volcánicos activos y fallas regionales, por lo que el sismo y la exposición a ceniza volcánica son prioridad en diseño. Evaluamos movimiento del suelo y carga por ceniza en estructuras en todo el departamento.",
      additionalRisk:
        "Las pendientes marcadas y las lluvias intensas suman amenazas sísmicas que disparan deslizamientos; nuestros planes incluyen estabilización de suelos y drenaje para infraestructura de montaña.",
      regionalStrength:
        "El departamento se beneficia de ingeniería que equilibra resiliencia sísmica con gestión de riesgo en taludes por lluvias y ceniza.",
    },
  },
  {
    slug: "chiquimula",
    name: "Chiquimula",
    en: {
      description:
        "Site-specific risk mitigation and construction advisory for eastern Guatemala's growing industrial hubs.",
      riskDescription:
        "Chiquimula is directly affected by the Motagua seismic corridor, where earthquakes can generate damaging shaking. Our teams focus on earthquake-resistant design for warehouses, industrial facilities, and community projects.",
      additionalRisk:
        "The region also experiences seasonal erosion and dry-weather land instability, so we combine seismic design with long-term soil and infrastructure resilience planning.",
      regionalStrength:
        "Chiquimula demands earthquake-aware design for critical assets, together with erosion and slope stability measures.",
    },
    es: {
      description:
        "Mitigación de riesgos por sitio y asesoría en construcción para los centros industriales en crecimiento del oriente.",
      riskDescription:
        "Chiquimula está directamente afectada por el corredor sísmico del Motagua; los temblores pueden generar sacudimiento dañino. Nos enfocamos en diseño sismorresistente para bodegas, industria y obra comunitaria.",
      additionalRisk:
        "También hay erosión estacional e inestabilidad en época seca; combinamos diseño sísmico con planeación duradera de suelos e infraestructura.",
      regionalStrength:
        "Se requiere diseño conciente del sismo para activos críticos y medidas contra erosión y estabilidad de taludes.",
    },
  },
  {
    slug: "el-progreso",
    name: "El Progreso",
    en: {
      description:
        "Comprehensive engineering services for transportation corridors and lowland development in El Progreso.",
      riskDescription:
        "El Progreso is vulnerable to seismic shaking from nearby fault zones, especially for linear infrastructure and river crossings. We design bridges, roadways, and buildings with earthquake resistance in mind.",
      additionalRisk:
        "Soft, alluvial soils and river flood risk are also key issues here, so our work includes geotechnical stabilization and flood-resilient alignment planning.",
      regionalStrength:
        "El Progreso benefits from combining seismic design with flood and soil-strength expertise in lowland development.",
    },
    es: {
      description:
        "Servicios integrales de ingeniería para corredores viales y desarrollo en tierras bajas en El Progreso.",
      riskDescription:
        "El Progreso es vulnerable al sacudimiento por fallas cercanas, sobre todo en infraestructura lineal y cruces de río; diseñamos puentes, vías y edificaciones con resistencia sísmica.",
      additionalRisk:
        "Los suelos sueltos aluviales y las inundaciones fluviales son claves; aplicamos mejoramiento geotécnico y alineamientos resilientes al agua.",
      regionalStrength:
        "El departamento gana cuando se une diseño sísmico con conocimiento en inundaciones y resistencia del suelo en zonas bajas.",
    },
  },
  {
    slug: "escuintla",
    name: "Escuintla",
    en: {
      description:
        "Coastal and port-related structural guidance for commercial and agricultural assets in Escuintla.",
      riskDescription:
        "Escuintla faces high seismic hazard from the Pacific subduction zone, where strong earthquakes and tsunami potential affect coastal infrastructure. We prioritize foundation resilience and coastal protection for ports and industrial facilities.",
      additionalRisk:
        "Storm surge, coastal erosion, and volcanic ash from nearby volcanoes are additional risks, so we include multi-hazard design for shoreline and agricultural assets.",
      regionalStrength:
        "Escuintla requires coastal and seismic engineering that protects ports, roads, and coastal agriculture from both earthquake and storm hazards.",
    },
    es: {
      description:
        "Guía estructural en costa y puertos para activos comerciales y agrícolas en Escuintla.",
      riskDescription:
        "Escuintla enfrenta alto riesgo sísmico por la subducción del Pacífico, con maremotos potenciales; priorizamos cimentaciones resilientes y protección costera para puertos e industria.",
      additionalRisk:
        "La marejada ciclónica, la erosión costera y la ceniza volcánica suman amenazas, por eso integramos diseño multi‑riesgo en costa y agro.",
      regionalStrength:
        "Se necesita ingeniería costera y sísmica que proteja puertos, vías y cultivos contra terremoto y tormentas.",
    },
  },
  {
    slug: "guatemala",
    name: "Guatemala",
    en: {
      description:
        "High-quality engineering consulting for metropolitan and institutional projects across Guatemala Department.",
      riskDescription:
        "Guatemala Department contains one of the country's highest seismic exposures, especially around Guatemala City and its surrounding volcanic slopes. Our work focuses on urban earthquake resilience and safe rebuilding strategies.",
      additionalRisk:
        "Landslides, ashfall, and unstable hill slopes are common, so we integrate seismic retrofit with slope support and drainage planning for municipalities and institutions.",
      regionalStrength:
        "Guatemala demands urban-scale seismic risk management combined with slope and volcanic hazard awareness.",
    },
    es: {
      description:
        "Consultoría de ingeniería de alta calidad para proyectos metropolitanos e institucionales en el departamento Guatemala.",
      riskDescription:
        "Este departamento concentra unas de las mayores exposiciones sísmicas del país, especialmente en la ciudad y los volcanes circundantes. Enfocamos resiliencia urbana ante terremotos y estrategias seguras de reconstrucción.",
      additionalRisk:
        "Deslizamientos, ceniza y laderas inestables son frecuentes; integramos reforzamiento sísmico con soporte en taludes y drenajes para municipalidades e instituciones.",
      regionalStrength:
        "Se necesita gestión del riesgo sísmico a escala urbana junto con conocimiento de laderas y amenazas volcánicas.",
    },
  },
  {
    slug: "huehuetenango",
    name: "Huehuetenango",
    en: {
      description:
        "Risk-based engineering and infrastructure support for mountainous and border-region developments.",
      riskDescription:
        "Huehuetenango's highlands experience seismic shaking from deep plate events, making earthquake-safe design essential for remote roads and community facilities.",
      additionalRisk:
        "Steep terrain also creates landslide and slope instability risk in heavy rains, so our engineering includes hillside drainage and resilient foundation strategies.",
      regionalStrength:
        "Huehuetenango needs resilient infrastructure that addresses both seismic shaking and mountainous slope hazards.",
    },
    es: {
      description:
        "Ingeniería basada en riesgos y soporte para infraestructura en zonas montañosas y fronterizas.",
      riskDescription:
        "En los altiplanos huehueteco el sismo de placas profundas exige diseño antisísmico en caminos lejanos y obras comunales.",
      additionalRisk:
        "El relieve pronunciado y las lluvias fuertes generan deslizamientos; incluimos drenaje en laderas y cimentaciones resilientes.",
      regionalStrength:
        "Se requiere infraestructura duradera que atienda el sacudimiento sísmico y los riesgos de taludes de montaña.",
    },
  },
  {
    slug: "izabal",
    name: "Izabal",
    en: {
      description:
        "Port, coastal, and logistics engineering solutions tailored for Izabal's growth corridors.",
      riskDescription:
        "Izabal is exposed to Caribbean seismic and tsunami risk, making earthquake-resilient port and coastal designs essential for the Atlantic corridor.",
      additionalRisk:
        "Tropical storm surge, coastal flooding, and liquefaction in low-lying soils are also important, so we plan for multiple coastal hazards.",
      regionalStrength:
        "Izabal benefits from coastal seismic engineering that also accounts for storms, flooding, and ground stability.",
    },
    es: {
      description:
        "Soluciones de ingeniería portuaria, costera y logística para los corredores en crecimiento de Izabal.",
      riskDescription:
        "Izabal enfrenta riesgos sísmicos y de tsunami caribeños; los diseños portuarios y costeros resilientes son esenciales en el Atlántico.",
      additionalRisk:
        "Marejada en tormentas, inundación costera y licuación en suelos bajos exigen planeación ante varios peligros costeros.",
      regionalStrength:
        "Aquí converge ingeniería costera sísmica con gestión de tormentas, inundaciones y estabilidad del terreno.",
    },
  },
  {
    slug: "jalapa",
    name: "Jalapa",
    en: {
      description:
        "Practical structural engineering and community-focused project delivery across Jalapa.",
      riskDescription:
        "Jalapa lies near active highland faults, so seismicity is a key design factor for housing, roads, and municipal infrastructure.",
      additionalRisk:
        "Heavy rains and steep slopes create landslide and erosion hazards, which we address through slope stabilization and resilient drainage design.",
      regionalStrength:
        "Jalapa's engineering needs combine earthquake-resistant structures with slope and storm resilience for communities.",
    },
    es: {
      description:
        "Ingeniería estructural práctica y obra orientada a la comunidad en todo Jalapa.",
      riskDescription:
        "Jalapa está cerca de fallas de altiplano; la sismicidad condiciona viviendas, caminos y obra municipal.",
      additionalRisk:
        "Lluvias intensas y pendientes marcadas aumentan erosión y deslizamientos; aplicamos estabilización y drenaje resiliente.",
      regionalStrength:
        "Se conjugan estructuras sismorresistentes con resiliencia de taludes y tormentas para las comunidades.",
    },
  },
  {
    slug: "jutiapa",
    name: "Jutiapa",
    en: {
      description:
        "Engineering and asset protection services serving agriculture, transport, and municipal infrastructure.",
      riskDescription:
        "Jutiapa sits along eastern fault lines where earthquakes can impact rural infrastructure and agricultural facilities. We apply earthquake-resistant design to roads, storage, and service buildings.",
      additionalRisk:
        "Dry-season erosion, heat, and occasional intense rains also affect site stability, so we combine seismic design with erosion control and resilient drainage.",
      regionalStrength:
        "Jutiapa requires durable engineering that protects assets from both seismic shaking and seasonal environmental stress.",
    },
    es: {
      description:
        "Ingeniería y protección de activos para agricultura, transporte e infraestructura municipal.",
      riskDescription:
        "Jutiapa coincide con líneas sísmicas del oriente; los terremotos pueden impactar infraestructura rural y activos agrícolas. Aplicamos diseño sismorresistente a caminos, bodegas y edificios de servicios.",
      additionalRisk:
        "En época seca la erosión, el calor y las tormentas puntuales afectan la estabilidad del sitio; sumamos control de erosión y drenajes resilientes al diseño sísmico.",
      regionalStrength:
        "Se requiere ingeniería durable que proteja frente al sismo y al estrés ambiental estacional.",
    },
  },
  {
    slug: "peten",
    name: "Petén",
    en: {
      description:
        "Remote-area infrastructure assessments and conservation-friendly engineering for Peten's natural reserves.",
      riskDescription:
        "Peten's remote infrastructure is still affected by occasional earthquakes, so we build with seismic resilience even in low-density regions.",
      additionalRisk:
        "Annual flooding, poor soils, and conservation constraints also shape our approach to roads, lodges, and utilities in the rainforest.",
      regionalStrength:
        "Peten benefits from resilient engineering that balances seismic safety with flood-adapted, conservation-sensitive design.",
    },
    es: {
      description:
        "Evaluaciones de infraestructura en zonas remotas e ingeniería compatible con conservación en reservas de Petén.",
      riskDescription:
        "La infraestructura remota aún enfrenta sismos ocasionales; integramos resiliencia sísmica incluso donde la densidad es baja.",
      additionalRisk:
        "Inundaciones anuales, suelos difíciles y restricciones de conservación moldean nuestros criterios en caminos, hospedajes y servicios.",
      regionalStrength:
        "Petén gana cuando se equilibra seguridad sísmica con diseños adaptados al agua y sensibles a la conservación.",
    },
  },
  {
    slug: "quetzaltenango",
    name: "Quetzaltenango",
    en: {
      description:
        "Urban resilience, slope stability, and structural assessment services for Western Highlands communities.",
      riskDescription:
        "Quetzaltenango is one of the most seismically active departments, with strong shaking from local faults and nearby volcanic systems. We focus on earthquake-safe urban and hillside design.",
      additionalRisk:
        "Landslides and slope failure are also common in the highlands, so our plans include stability analysis and drainage for steep terrain.",
      regionalStrength:
        "Quetzaltenango demands earthquake-aware engineering combined with slope stability and volcanic hazard mitigation.",
    },
    es: {
      description:
        "Resiliencia urbana, estabilidad de taludes y evaluación estructural para comunidades del occidente.",
      riskDescription:
        "Es uno de los departamentos sísmicos más dinámicos del país; el sacudimiento proviene de fallas locales y de sistemas volcánicos cercanos. Priorizamos diseño antisísmico urbano y en ladera.",
      additionalRisk:
        "Deslizamientos son frecuentes en el altiplano; incorporamos estudios de estabilidad y drenaje para terreno muy inclinado.",
      regionalStrength:
        "Aquí converge ingeniería consciente del sismo con estabilización de taludes y mitigación de riesgos volcánicos.",
    },
  },
  {
    slug: "quiche",
    name: "Quiché",
    en: {
      description:
        "Risk evaluation and infrastructure advisory for cultural heritage and rural development in Quiché.",
      riskDescription:
        "Quiché experiences seismic risk from the subduction zone and internal faults, and its steep highlands are sensitive to earthquake-triggered landslides.",
      additionalRisk:
        "River flooding and soil erosion are also important, so our designs protect roads, heritage sites, and rural communities from multiple natural hazards.",
      regionalStrength:
        "Quiché benefits from combined seismic and slope-resilience engineering for its cultural and rural assets.",
    },
    es: {
      description:
        "Evaluación de riesgos y asesoría para patrimonio cultural y desarrollo rural en Quiché.",
      riskDescription:
        "La subducción y fallas internas generan riesgo sísmico en altiplanos empinados sensibles a deslizamiento inducido por terremoto.",
      additionalRisk:
        "Las crecidas fluviales y la erosión del suelo también son importantes; nuestros diseños protegen caminos, sitios patrimoniales y comunidades rurales frente a múltiples amenazas naturales.",
      regionalStrength:
        "En Quiché conviene integrar ingeniería sísmica con resiliencia en taludes para el patrimonio cultural y los activos rurales.",
    },
  },
  {
    slug: "retalhuleu",
    name: "Retalhuleu",
    en: {
      description:
        "Cost-effective structural consulting and site planning for coastal and agricultural areas.",
      riskDescription:
        "Retalhuleu's Pacific plain is exposed to seismic shaking, tsunami potential, and coastal flooding. We design ports, storage, and agricultural buildings to resist earthquake and water hazards.",
      additionalRisk:
        "Storm surge and drainage challenges are also key, so we ensure ground improvement and flood-adaptive site planning.",
      regionalStrength:
        "Retalhuleu requires coastal engineering that integrates seismic resilience with storm and flood protection.",
    },
    es: {
      description:
        "Consultoría estructural económica y planeación del sitio en costas y zonas agrícolas.",
      riskDescription:
        "La llanura del Pacífico en Retalhuleu enfrenta sismos, tsunamis e inundaciones costeras; diseñamos puertos, bodegas y activos agrícolas para resistir amenazas sísmicas e hídricas.",
      additionalRisk:
        "La marejada y los retos de drenaje llevan mejoramiento del suelo y proyectos resilientes frente al agua.",
      regionalStrength:
        "Se necesita ingeniería costera que integre resiliencia sísmica con protección ante tormentas e inundaciones.",
    },
  },
  {
    slug: "sacatepequez",
    name: "Sacatepéquez",
    en: {
      description:
        "Historic site engineering and earthquake resilience support for cities like Antigua Guatemala.",
      riskDescription:
        "Sacatepéquez is in one of Guatemala's most critical seismic zones, with frequent strong earthquakes and nearby volcanic hazards. We focus on protecting heritage buildings and new construction from seismic damage.",
      additionalRisk:
        "Steep slopes, ashfall, and landslide risk also influence our recommendations for slope stabilization and resilient foundations.",
      regionalStrength:
        "Sacatepéquez needs heritage-sensitive seismic engineering with slope and volcanic hazard awareness.",
    },
    es: {
      description:
        "Ingeniería en conjuntos históricos y soporte antisísmico para ciudades como Antigua Guatemala.",
      riskDescription:
        "Está entre las zonas sísmicas más críticas del país, con sismos fuertes frecuentes y amenaza volcánica cercana; protegemos conjuntos patrimoniales y obra nueva del daño sísmico.",
      additionalRisk:
        "Las laderas pronunciadas, la caída de ceniza y el riesgo de deslizamientos orientan nuestras recomendaciones de estabilización de taludes y de cimentaciones resilientes.",
      regionalStrength:
        "Se requiere ingeniería sensible al patrimonio con conciencia de taludes y peligros volcánicos.",
    },
  },
  {
    slug: "san-marcos",
    name: "San Marcos",
    en: {
      description:
        "Highland and coastal project advisories that prioritize safety, durability, and local conditions.",
      riskDescription:
        "San Marcos combines highland seismic risk with volcanic hazards from nearby peaks, plus coastal storm and landslide exposure. Earthquake safety is a central part of our engineering approach.",
      additionalRisk:
        "Coastal storms, slope instability, and erosion are additional risks that we address through resilient site design and infrastructure planning.",
      regionalStrength:
        "San Marcos benefits from engineering that protects both mountain and coastal communities from seismic and weather-related hazards.",
    },
    es: {
      description:
        "Asesoría en proyectos de altiplano y costa con énfasis en seguridad, durabilidad y condiciones locales.",
      riskDescription:
        "San Marcos combina riesgo sísmico de altiplano con peligros volcánicos, además de tormentas en la costa y exposición a deslizamientos; la seguridad sísmica es central en nuestro enfoque.",
      additionalRisk:
        "Las tormentas costeras, la inestabilidad de taludes y la erosión se abordan con diseño resiliente del sitio y planeación de infraestructura.",
      regionalStrength:
        "La ingeniería protege igualmente comunidades montañosas y costeras ante sismo y tiempo severo.",
    },
  },
  {
    slug: "santa-rosa",
    name: "Santa Rosa",
    en: {
      description:
        "Infrastructure planning and risk management for growing corridor developments near Guatemala City.",
      riskDescription:
        "Santa Rosa is influenced by seismic activity along southern fault systems, so building and transport design emphasize earthquake resilience.",
      additionalRisk:
        "Rapid river flows, occasional landslides, and erosion also shape our infrastructure advice for corridor and community projects.",
      regionalStrength:
        "Santa Rosa needs earthquake-aware corridor planning reinforced by flood and slope resilience.",
    },
    es: {
      description:
        "Planeación de infraestructura y gestión del riesgo para corredores en crecimiento cerca de la capital.",
      riskDescription:
        "La actividad sísmica en fallas del sur exige énfasis en resiliencia sísmica en edificaciones y transporte.",
      additionalRisk:
        "Los ríos de crecida rápida, los deslizamientos ocasionales y la erosión moldean nuestras recomendaciones en corredores y comunidades.",
      regionalStrength:
        "Se requiere planeación de corredores consciente del sismo, reforzada con resiliencia ante inundaciones y taludes.",
    },
  },
  {
    slug: "solola",
    name: "Sololá",
    en: {
      description:
        "Community-focused engineering and structural support for lake-region tourism and rural assets.",
      riskDescription:
        "Sololá surrounds Lake Atitlán, where seismic shaking and lakeshore landslide risk are major hazards. We plan structures and roads to withstand earthquakes and slope movement.",
      additionalRisk:
        "Heavy rain, erosion, and ashfall also affect lakefront communities, so our designs include stabilization, drainage, and resilient lakeside planning.",
      regionalStrength:
        "Sololá requires engineering that safeguards lakeside tourism and rural assets from seismic and slope hazards.",
    },
    es: {
      description:
        "Ingeniería comunitaria y soporte estructural para turismo lacustre y activos rurales.",
      riskDescription:
        "Los pueblos en torno al lago sufren sacudimiento y deslizamiento en borde lacustre; planificamos obras sobre movimiento sísmico y de taludes.",
      additionalRisk:
        "Las lluvias intensas, la erosión y la ceniza afectan comunidades frente al lago; incluimos estabilización, drenaje y planeación resiliente ribereña.",
      regionalStrength:
        "Sololá requiere ingeniería que proteja el turismo lacustre y los activos rurales frente a riesgos sísmicos y de talud.",
    },
  },
  {
    slug: "suchitepequez",
    name: "Suchitepéquez",
    en: {
      description:
        "Comprehensive site risk analysis and structural consulting for the Pacific coastal plain.",
      riskDescription:
        "Suchitepéquez faces earthquake and tsunami risk along the Pacific coast, plus coastal flooding during tropical storms. We design with both seismic and water hazards in mind.",
      additionalRisk:
        "Liquefaction potential in sandy coastal soils and drainage issues are also assessed to protect agricultural and transport assets.",
      regionalStrength:
        "Suchitepéquez benefits from combined coastal and seismic engineering for its plain and infrastructure network.",
    },
    es: {
      description:
        "Análisis integral del riesgo en sitio y consultoría estructural para la costa pacífica.",
      riskDescription:
        "Suchitepéquez enfrenta riesgo de terremoto y tsunami en el Pacífico, además de inundación costera en tormentas tropicales; diseñamos considerando ambos vectores sísmicos e hídricos.",
      additionalRisk:
        "Evaluamos potencial de licuefacción en suelos arenosos costeros y limitaciones de drenaje para proteger activos agrícolas y de transporte.",
      regionalStrength:
        "Suchitepéquez se beneficia de combinar ingeniería costera y sísmica para su llanura y su red de infraestructura.",
    },
  },
  {
    slug: "totonicapan",
    name: "Totonicapán",
    en: {
      description:
        "Mountain infrastructure resilience, landslide evaluation, and building safety services.",
      riskDescription:
        "Totonicapán's steep highlands are exposed to seismic shaking and slope instability, particularly during heavy rain. Our engineering focuses on earthquake-resistant structures and hillside stability.",
      additionalRisk:
        "Landslides and soil erosion are common concerns, so we incorporate drainage and slope support into our resilience plans.",
      regionalStrength:
        "Totonicapán requires durable mountain engineering that protects communities from both seismic and landslide hazards.",
    },
    es: {
      description:
        "Resiliencia de infraestructura en montaña, evaluación de deslizamientos y seguridad de edificaciones.",
      riskDescription:
        "Los altiplanos empinados combinan sacudimiento sísmico e inestabilidad de taludes, sobre todo con lluvias intensas; nos enfocamos en estructuras sismorresistentes y estabilidad en ladera.",
      additionalRisk:
        "Los deslizamientos y la erosión del suelo son preocupaciones frecuentes; incorporamos drenaje y soporte en taludes en los planes de resiliencia.",
      regionalStrength:
        "Totonicapán necesita ingeniería de montaña durable que proteja comunidades frente a sismos y deslizamientos.",
    },
  },
  {
    slug: "zacapa",
    name: "Zacapa",
    en: {
      description:
        "Dryland and corridor engineering services for transportation, energy, and water management projects.",
      riskDescription:
        "Zacapa is located near the Motagua fault and has significant seismic risk for transport corridors and water infrastructure. Earthquake-resistant design is central to our asset protection strategies.",
      additionalRisk:
        "Heat, drought, and erosion also influence long-term infrastructure reliability, so we combine seismic resilience with durable, climate-adapted engineering.",
      regionalStrength:
        "Zacapa demands engineering that protects lifeline corridors from seismic shaking while addressing dry corridor environmental stress.",
    },
    es: {
      description:
        "Ingeniería en zonas áridas y corredores para transporte, energía y gestión del agua.",
      riskDescription:
        "Zacapa está cerca de la falla del Motagua y presenta riesgo sísmico relevante en corredores de transporte e infraestructura hídrica; el diseño sismorresistente es central para proteger activos.",
      additionalRisk:
        "El calor, la sequía y la erosión también afectan la confiabilidad a largo plazo; combinamos resiliencia sísmica con ingeniería durable adaptada al clima.",
      regionalStrength:
        "Zacapa requiere ingeniería que proteja corredores vitales del sacudimiento sísmico y, al mismo tiempo, atienda el estrés ambiental del corredor seco.",
    },
  },
]

export function getDepartment(slug: string): Department | undefined {
  return departments.find((department) => department.slug === slug)
}

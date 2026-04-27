export type Language = "en" | "es"

export const translations = {
  en: {
    // Header
    nav: {
      services: "Services",
      about: "About",
      approach: "Our Approach",
      projects: "Projects",
      contact: "Contact",
    },

    // Hero Section
    hero: {
      badge: "Trusted by 25+ Projects Nationwide",
      title: "Civil Infrastructure Management",
      description:
        "We have a specialized team in structural, sanitary, geotechnical, and hydrological engineering, as well as risk evaluation and management.",
      cta: "Request a Consultation",
      ctaSecondary: "View Our Work",
    },

    // Services Section
    services: {
      label: "Our Services",
      title: "Comprehensive Risk Evaluation for Every Phase",
      categories: [
        {
          number: "01",
          title: "Due Diligence & Transactional Risk",
          target: "Targeting real estate investors, buyers, and insurers.",
          items: [
            { name: "Pre-Acquisition Structural Risk Assessments", description: "Beyond basic inspections. We quantify the risk of deferred maintenance, latent defects, and estimated cost-to-risk ratios for potential buyers." },
            { name: "Insurance Risk Surveys", description: "Detailed reports for underwriters to assess probable maximum loss (PML) and business interruption risks due to structural failure." },
            { name: "Zone of Influence Studies", description: "Analyzing the impact of adjacent construction (deep excavations, tunneling) on existing assets to mitigate third-party risk." },
          ],
        },
        {
          number: "02",
          title: "Existing Asset Management",
          target: "Targeting building owners, facility managers, and municipalities.",
          items: [
            { name: "Facade & Envelope Risk Evaluation", description: "Ordinance compliance (e.g., Facade Inspection Safety Programs) with a focus on life-safety risk prioritization." },
            { name: "Reserve Study Structural Components", description: "Quantifying the remaining service life of structural elements for HOA's and commercial owners to ensure adequate capital reserves." },
            { name: "Post-Event Damage Assessment", description: "Rapid response and triage following fires, floods, impacts, or seismic events to determine immediate safety risks and repair scopes." },
          ],
        },
        {
          number: "03",
          title: "Advanced Analytical Risk Modeling",
          target: "Targeting developers, architects, and high-value assets.",
          items: [
            { name: "Progressive Collapse Analysis", description: "Evaluating structures to ensure that localized damage does not lead to total system collapse (critical for high-rises, government buildings, and data centers)." },
            { name: "Seismic & Wind Risk Quantification", description: "Probabilistic risk assessments for portfolios or individual assets, mapping out annualized loss of exceedance." },
            { name: "Vibration Risk Evaluation", description: "Assessing risk from nearby rail, mechanical systems, or construction to sensitive equipment (hospitals, labs, data centers) and human comfort." },
          ],
        },
        {
          number: "04",
          title: "Forensic & Litigation Support",
          target: "Targeting legal teams, insurers, and distressed asset owners.",
          items: [
            { name: "Root Cause Failure Analysis", description: "Determining the origin of structural distress, cracking, or collapse to allocate responsibility and prevent recurrence." },
            { name: "Repair vs. Replacement Analysis", description: "Cost-benefit risk analysis comparing the risks, downtime, and lifecycle costs of repairing a distressed structure versus demolishing and rebuilding." },
          ],
        },
      ],
    },

    // Stats Section
    stats: [
      { value: "25+", label: "Projects Completed" },
      { value: "Q277M", label: "Assets Protected" },
      { value: "7+", label: "Years Experience" },
      { value: "5", label: "Civil Engineering Specialties" },
    ],

    // About Section
    about: {
      label: "About InnovazionE",
      title: "Excellence in Civil Engineering and Project Management & Evaluation",
      paragraphs: [
        "We believe that understanding risk is the foundation of successful construction. By identifying potential issues early, we help our clients avoid costly delays, ensure regulatory compliance, and protect their investments for decades to come.",
        "Our approach integrates traditional engineering principles with modern data analysis, providing insights that go beyond standard assessments.",
      ],
      imageAlt: "Structural engineers reviewing building plans",
    },

    // Approach Section
    approach: {
      label: "Our Approach",
      title: "The 4-D Risk Management Framework",
      subtitle: "Standard firms design to code. We manage uncertainty.",
      description:
        "Our methodology goes beyond standard structural engineering. We use a systematic, probability-based framework that identifies, quantifies, and mitigates risk at every stage.",
      steps: [
        {
          title: "Discover: Hazard Identification",
          tagline: "We don't just look at the structure; we look at the context.",
          items: [
            { name: "Site & History", description: "Review of original design criteria, as-built conditions, alteration history, and original material quality." },
            { name: "Hazard Profiling", description: "Identification of specific threats—whether seismic, wind, fatigue, corrosion, or human error—relevant to the asset's geography and use." },
            { name: "Data Collection", description: "Use of advanced NDT (Non-Destructive Testing) to gather empirical data on current structural health without damaging finishes." },
          ],
        },
        {
          title: "Diagnose: Probabilistic Analysis",
          tagline: "Engineering is about certainty; risk management is about probability.",
          items: [
            { name: "Limit States Analysis", description: "Evaluating structures not just for safety (life-safety) but for serviceability (operational risk) and collapse (catastrophic risk)." },
            { name: "Monte Carlo Simulations", description: "Using stochastic modeling to account for variability in material strength, loads, and deterioration rates to predict the probability of failure over time." },
            { name: "Consequence Ranking", description: "Prioritizing risks based on a matrix of Likelihood vs. Severity of Consequence (financial, safety, reputational)." },
          ],
        },
        {
          title: "Develop: Mitigation Strategy",
          tagline: "Moving from analysis to actionable solutions.",
          items: [
            { name: "Resilience-Focused Design", description: "For repairs and new designs, we prioritize robustness, redundancy, and ductility—ensuring the structure can absorb unexpected events." },
            { name: "Lifecycle Cost Analysis", description: "Comparing intervention strategies (repair, retrofit, replace) to determine the lowest risk and highest value over the asset's remaining lifespan." },
            { name: "Phasing & Logistics", description: "Developing construction sequences that minimize structural risk during the repair process (temporary shoring, controlled demolition)." },
          ],
        },
        {
          title: "Deliver: Ongoing Risk Management",
          tagline: "We view risk management as a relationship, not a transaction.",
          items: [
            { name: "Clear Reporting", description: "We translate complex finite element analysis into plain-English risk ratings (e.g., Low Risk, Monitor, Immediate Action) for stakeholders." },
            { name: "Asset Monitoring Programs", description: "Implementation of IoT sensors or scheduled inspection protocols to track crack propagation, settlement, or corrosion over time." },
            { name: "Risk Transfer Support", description: "Assistance to owners and insurers in drafting specifications and warranties to ensure that repaired structures meet the specified risk tolerance." },
          ],
        },
      ],
    },

    // Projects Section
    projects: {
      label: "Featured Projects",
      title: "Protecting Landmark Developments",
      viewAll: "View All Projects",
      items: [
        {
          title: "Harbor Tower Complex",
          category: "Commercial High-Rise",
          description:
            "Risk assessment for a 45-story mixed-use development with complex foundation requirements.",
        },
        {
          title: "Metro Transit Hub",
          category: "Infrastructure",
          description:
            "Structural evaluation and seismic risk analysis for a major urban transit center.",
        },
        {
          title: "Riverside Medical Center",
          category: "Healthcare",
          description:
            "Due diligence review and mitigation planning for hospital expansion project.",
        },
      ],
    },

    // CTA Section
    cta: {
      title: "Let's Discuss Your Project",
      description: "Get in touch to discuss your project and location needs.",
      button: "Contact Us",
    },

    // Footer
    footer: {
      tagline:
        "Expert structural engineering and risk management services protecting your investments.",
      servicesTitle: "Services",
      companyTitle: "Company",
      resourcesTitle: "Resources",
      services: ["Risk Assessment", "Quantitative Analysis", "Due Diligence", "Mitigation Planning"],
      company: ["About", "Projects", "Careers", "Contact"],
      resources: ["Case Studies", "Insights", "Documentation"],
      copyright: "InnovazionE. All rights reserved.",
      address: "8va. Calle 1-94 Zona 1 Salcajá, Quetzaltenango, Guatemala",
      phone: "(502) 35142383",
      email: "ingsosaj@mail.com",
      departmentsTitle: "Departments",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },

  es: {
    // Header
    nav: {
      services: "Servicios",
      about: "Nosotros",
      approach: "Metodología",
      projects: "Proyectos",
      contact: "Contacto",
    },

    // Hero Section
    hero: {
      badge: "Más de 25 proyectos a nivel nacional",
      title: "Gestión de Infraestructura Civil",
      description:
        "Contamos con equipo especializado en ingeniería estructural, sanitaria, geotécnica, hidrológica y evaluación y gestión de riesgos.",
      cta: "Solicitar Consulta",
      ctaSecondary: "Ver Nuestro Trabajo",
    },

    // Services Section
    services: {
      label: "Nuestros Servicios",
      title: "Evaluación Integral de Riesgos para Cada Fase",
      categories: [
        {
          number: "01",
          title: "Diligencia Debida y Riesgo Transaccional",
          target: "Para inversionistas inmobiliarios, compradores y aseguradoras.",
          items: [
            { name: "Evaluaciones de Riesgo Estructural Pre-Adquisición", description: "Más allá de las inspecciones básicas. Cuantificamos el riesgo de mantenimiento diferido, defectos latentes y relaciones costo-riesgo estimadas para compradores potenciales." },
            { name: "Estudios de Riesgo para Seguros", description: "Informes detallados para aseguradores para evaluar la pérdida máxima probable (PML) y riesgos de interrupción de negocios debido a fallas estructurales." },
            { name: "Estudios de Zona de Influencia", description: "Análisis del impacto de construcciones adyacentes (excavaciones profundas, túneles) en activos existentes para mitigar riesgos de terceros." },
          ],
        },
        {
          number: "02",
          title: "Gestión de Activos Existentes",
          target: "Para propietarios de edificios, administradores de instalaciones y municipalidades.",
          items: [
            { name: "Evaluación de Riesgo de Fachadas y Envolventes", description: "Cumplimiento de ordenanzas (ej., Programas de Inspección de Seguridad de Fachadas) con enfoque en priorización de riesgos de seguridad." },
            { name: "Componentes Estructurales para Estudios de Reserva", description: "Cuantificación de la vida útil restante de elementos estructurales para HOAs y propietarios comerciales para asegurar reservas de capital adecuadas." },
            { name: "Evaluación de Daños Post-Evento", description: "Respuesta rápida y triaje después de incendios, inundaciones, impactos o eventos sísmicos para determinar riesgos de seguridad inmediatos y alcances de reparación." },
          ],
        },
        {
          number: "03",
          title: "Modelado Analítico Avanzado de Riesgos",
          target: "Para desarrolladores, arquitectos y activos de alto valor.",
          items: [
            { name: "Análisis de Colapso Progresivo", description: "Evaluación de estructuras para asegurar que el daño localizado no conduzca al colapso total del sistema (crítico para rascacielos, edificios gubernamentales y centros de datos)." },
            { name: "Cuantificación de Riesgo Sísmico y de Viento", description: "Evaluaciones probabilísticas de riesgo para portafolios o activos individuales, mapeando pérdidas anualizadas de excedencia." },
            { name: "Evaluación de Riesgo por Vibraciones", description: "Evaluación de riesgos por sistemas ferroviarios cercanos, sistemas mecánicos o construcción para equipos sensibles (hospitales, laboratorios, centros de datos) y confort humano." },
          ],
        },
        {
          number: "04",
          title: "Soporte Forense y de Litigios",
          target: "Para equipos legales, aseguradoras y propietarios de activos en dificultades.",
          items: [
            { name: "Análisis de Causa Raíz de Fallas", description: "Determinación del origen de distress estructural, agrietamiento o colapso para asignar responsabilidad y prevenir recurrencia." },
            { name: "Análisis de Reparación vs. Reemplazo", description: "Análisis costo-beneficio de riesgo comparando los riesgos, tiempo de inactividad y costos del ciclo de vida de reparar una estructura en dificultades versus demoler y reconstruir." },
          ],
        },
      ],
    },

    // Stats Section
    stats: [
      { value: "25+", label: "Proyectos Completados" },
      { value: "Q277M", label: "Activos Protegidos" },
      { value: "7+", label: "Años de Experiencia" },
      { value: "5", label: "Especialidades en Ingeniería Civil" },
    ],

    // About Section
    about: {
      label: "Sobre InnovazionE",
      title: "Excelencia en Ingeniería Civil y Gestión y Evaluación de Proyectos",
      paragraphs: [
        "Creemos que comprender el riesgo es la base de una construcción exitosa. Al identificar problemas potenciales tempranamente, ayudamos a nuestros clientes a evitar retrasos costosos, garantizar el cumplimiento normativo y proteger sus inversiones durante décadas.",
        "Nuestro enfoque integra principios tradicionales de ingeniería con análisis de datos modernos, proporcionando información que va más allá de las evaluaciones estándar.",
      ],
      imageAlt: "Ingenieros estructurales revisando planos de edificios",
    },

    // Approach Section
    approach: {
      label: "Nuestra Metodología",
      title: "El Marco de Gestión de Riesgos 4-D",
      subtitle: "Las firmas estándar diseñan según código. Nosotros gestionamos la incertidumbre.",
      description:
        "Nuestra metodología va más allá de la ingeniería estructural estándar. Utilizamos un marco sistemático basado en probabilidades que identifica, cuantifica y mitiga el riesgo en cada etapa.",
      steps: [
        {
          title: "Descubrir: Identificación de Peligros",
          tagline: "No solo miramos la estructura; miramos el contexto.",
          items: [
            { name: "Sitio e Historia", description: "Revisión de criterios de diseño originales, condiciones as-built, historial de alteraciones y calidad de materiales originales." },
            { name: "Perfil de Peligros", description: "Identificación de amenazas específicas—ya sean sísmicas, de viento, fatiga, corrosión o error humano—relevantes para la geografía y uso del activo." },
            { name: "Recolección de Datos", description: "Uso de NDT avanzado (Pruebas No Destructivas) para recopilar datos empíricos sobre la salud estructural actual sin dañar acabados." },
          ],
        },
        {
          title: "Diagnosticar: Análisis Probabilístico",
          tagline: "La ingeniería trata de certeza; la gestión de riesgos trata de probabilidad.",
          items: [
            { name: "Análisis de Estados Límite", description: "Evaluación de estructuras no solo por seguridad (seguridad de vida) sino por serviciabilidad (riesgo operacional) y colapso (riesgo catastrófico)." },
            { name: "Simulaciones Monte Carlo", description: "Uso de modelado estocástico para considerar la variabilidad en resistencia de materiales, cargas y tasas de deterioro para predecir la probabilidad de falla en el tiempo." },
            { name: "Clasificación de Consecuencias", description: "Priorización de riesgos basada en una matriz de Probabilidad vs. Severidad de Consecuencia (financiera, seguridad, reputacional)." },
          ],
        },
        {
          title: "Desarrollar: Estrategia de Mitigación",
          tagline: "Pasando del análisis a soluciones accionables.",
          items: [
            { name: "Diseño Enfocado en Resiliencia", description: "Para reparaciones y nuevos diseños, priorizamos robustez, redundancia y ductilidad—asegurando que la estructura pueda absorber eventos inesperados." },
            { name: "Análisis de Costo del Ciclo de Vida", description: "Comparación de estrategias de intervención (reparar, retrofitar, reemplazar) para determinar el menor riesgo y mayor valor durante la vida útil restante del activo." },
            { name: "Fases y Logística", description: "Desarrollo de secuencias de construcción que minimicen el riesgo estructural durante el proceso de reparación (apuntalamiento temporal, demolición controlada)." },
          ],
        },
        {
          title: "Entregar: Gestión Continua de Riesgos",
          tagline: "Vemos la gestión de riesgos como una relación, no una transacción.",
          items: [
            { name: "Reportes Claros", description: "Traducimos análisis complejos de elementos finitos en calificaciones de riesgo en lenguaje sencillo (ej., Bajo Riesgo, Monitorear, Acción Inmediata) para las partes interesadas." },
            { name: "Programas de Monitoreo de Activos", description: "Implementación de sensores IoT o protocolos de inspección programados para rastrear propagación de grietas, asentamiento o corrosión en el tiempo." },
            { name: "Soporte de Transferencia de Riesgo", description: "Asistencia a propietarios y aseguradoras en la redacción de especificaciones y garantías para asegurar que las estructuras reparadas cumplan con la tolerancia de riesgo especificada." },
          ],
        },
      ],
    },

    // Projects Section
    projects: {
      label: "Proyectos Destacados",
      title: "Protegiendo Desarrollos Emblemáticos",
      viewAll: "Ver Todos los Proyectos",
      items: [
        {
          title: "Complejo Torre del Puerto",
          category: "Rascacielos Comercial",
          description:
            "Evaluación de riesgos para un desarrollo de uso mixto de 45 pisos con requisitos complejos de cimentación.",
        },
        {
          title: "Centro de Tránsito Metro",
          category: "Infraestructura",
          description:
            "Evaluación estructural y análisis de riesgo sísmico para un importante centro de tránsito urbano.",
        },
        {
          title: "Centro Médico Riverside",
          category: "Salud",
          description:
            "Revisión de diligencia debida y planificación de mitigación para proyecto de expansión hospitalaria.",
        },
      ],
    },

    // CTA Section
    cta: {
      title: "Hablemos de Su Proyecto",
      description: "Contáctanos para hablar sobre tu proyecto y necesidades de ubicación.",
      button: "Contáctenos",
    },

    // Footer
    footer: {
      tagline:
        "Servicios expertos de ingeniería estructural y gestión de riesgos protegiendo sus inversiones.",
      servicesTitle: "Servicios",
      companyTitle: "Empresa",
      resourcesTitle: "Recursos",
      services: ["Evaluación de Riesgos", "Análisis Cuantitativo", "Diligencia Debida", "Planificación de Mitigación"],
      company: ["Nosotros", "Proyectos", "Carreras", "Contacto"],
      resources: ["Casos de Estudio", "Perspectivas", "Documentación"],
      copyright: "InnovazionE. Todos los derechos reservados.",
      address: "8va. Calle 1-94 Zona 1 Salcajá, Quetzaltenango, Guatemala",
      phone: "(502) 35142383",
      email: "ingsosaj@mail.com",
      departmentsTitle: "Departamentos",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
    },
  },
} as const

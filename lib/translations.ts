export type Language = "es" | "en"

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
      backgroundCaption:
        "Decorative background image: structural engineers collaborating over infrastructure plans for projects in Guatemala.",
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
      { value: "Q277M+", label: "In Assets Protected" },
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
      imageAlt:
        "Finite-element modeling for seismic and structural risk analysis of infrastructure in Guatemala.",
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
      supplementalParagraphs: [] as readonly string[],
    },

    locationsIndex: {
      label: "Departments",
      title: "InnovazionE coverage across Guatemala",
      subtitle:
        "Discover the services InnovazionE provides in every department. Select a region to see local risk management and engineering support.",
      backHome: "Back to home",
      viewDetailsCta: "View department details →",
    },

    locationPage: {
      badge: "Department location",
      allDepartments: "All departments",
      home: "Home",
      whyInnovazionLeading: "Why InnovazionE in ",
      whyInnovazionTrailing: "?",
      regionalStrengthTitle: "Regional strengths",
      keyServicesTitle: "Key services",
      keyServiceBullets: [
        "Site-specific risk assessment",
        "Structural analysis and mitigation planning",
        "Construction support and resilience design",
        "Regulatory compliance and permitting guidance",
      ],
    },

    privacyPolicy: {
      badge: "Privacy Policy",
      title: "Your privacy matters to InnovazionE",
      intro:
        "We are committed to maintaining discretion regarding your project information when required. We protect the confidentiality of engineering details and sensitive data with which we work.",
      sections: [
        {
          title: "Discretion and Confidentiality",
          body:
            "If your project requires discretion, InnovazionE fully respects the confidentiality of the information shared. We understand that some projects demand privacy and are committed to keeping your details under strict confidentiality as necessary.",
        },
      ],
      backHome: "Back to Home",
    },

    termsOfService: {
      badge: "Terms of Service",
      title: "Website Terms and Conditions",
      intro:
        "These terms describe how you may use the InnovazionE website and the content available here. By accessing the site, you agree to these terms for informational purposes only.",
      sections: [
        {
          title: "Use of the Site",
          body:
            "The site is provided for informational and contact purposes. You may not reproduce or redistribute any content without prior written permission from InnovazionE.",
        },
        {
          title: "No Professional Advice",
          body:
            "Content on this website is not a substitute for professional engineering, legal, or financial advice. Please contact InnovazionE directly for project-specific guidance.",
        },
        {
          title: "Limitation of Liability",
          body:
            "InnovazionE is not liable for any indirect or consequential damages arising from the use of the website or reliance on its content. Use the site at your own discretion.",
        },
      ],
      backHome: "Back to Home",
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
      title: "Ingeniería Estructural y Gestión de Riesgos",
      description:
        "Diseño, rehabilitación, supervisión, ejecución y remodelación de infraestructura en toda Guatemala. Consultoría en resiliencia, confiabilidad, sostenibilidad, optimización e innovación.",
      cta: "Solicitar una Consulta",
      ctaSecondary: "Ver Nuestro Trabajo",
      backgroundCaption:
        "Imagen de fondo decorativa: equipo de ingeniería estructural trabajando sobre planos de infraestructura para proyectos en Guatemala.",
    },

    // Services Section
    services: {
      label: "Evaluación y/o Diseño Integral Según la Demanda",
      title:
        "Como ingenieros civiles con distintas especializaciones brindamos productos específicos a su problema. No solo diseñamos, sino que utilizamos habilidades computacionales avanzadas para resolver complejos desafíos de ingeniería, garantizando que sus estructuras sean óptimas y seguras.",
      categories: [
        {
          number: "01",
          title: "Básico: Análisis y Diseño Estructural",
          target: "Cálculo y diseño conforme a normativa.",
          items: [
            {
              name: "Análisis y diseño estructural",
              description:
                "Cálculo de cargas críticas para diseñar elementos en base a una buena estructuración.",
            },
            {
              name: "Planos para construcción",
              description:
                "Diseño conforme a la normativa y entrega de planos para construcción.",
            },
          ],
        },
        {
          number: "02",
          title: "Estándar: Optimización Estructural",
          target:
            "Reducimos costos y huella ambiental sin sacrificar seguridad.",
          items: [
            {
              name: "Optimización de hormigón y acero",
              description:
                "Se reduce significativamente el consumo de hormigón y acero sin sacrificar la resistencia y por ende la seguridad.",
            },
            {
              name: "Ahorro directo del proyecto",
              description:
                "Este paquete se amortiza solo al disminuir los costos totales de construcción y el impacto ambiental.",
            },
          ],
        },
        {
          number: "03",
          title: "Premium: Diseño Basado en Desempeño Estructural",
          target:
            "Decida cuánto dinero y operación proteger en el próximo gran sismo.",
          items: [
            {
              name: "Cuantificación de desempeño y vida útil",
              description:
                "Cuantificación de la vida útil restante de elementos estructurales para propietarios y administradores, para asegurar reservas de capital adecuadas.",
            },
            {
              name: "Planeación financiera del inmueble",
              description:
                "Permite diseñar el futuro financiero de su inmueble: usted deja de construir a ciegas según un reglamento mínimo y pasa a decidir exactamente cuánto capital y cuántos días de operación va a salvar.",
            },
          ],
        },
        {
          number: "04",
          title: "Elite: Gestión de Riesgos",
          target: "Para proyectos complejos o entornos de alto riesgo.",
          items: [
            {
              name: "Evaluación de seguridad exhaustiva",
              description:
                "Se identifican posibles vulnerabilidades estructurales y se mitigan los riesgos de fallo. Incluye informes detallados y protocolos de seguridad para proteger la inversión durante todo su ciclo de vida.",
            },
            {
              name: "Análisis causal de raíz de fallas",
              description:
                "Determinación del origen de esfuerzos estructurales, agrietamiento o colapso para asignar responsabilidad y prevenir recurrencia.",
            },
            {
              name: "Casos específicos de infraestructura en general",
              description:
                "Todos los casos que exijan un tiempo en evaluación y diseño considerable para preservar la seguridad del proyecto.",
            },
          ],
        },
      ],
    },

    // Stats Section
    stats: [
      { value: "25+", label: "Proyectos Completados" },
      { value: "Q277M+", label: "En Activos Protegidos" },
      { value: "7+", label: "Años de Experiencia" },
      { value: "5", label: "Especialidades en Ingeniería Civil" },
    ],

    // About Section
    about: {
      label: "Sobre InnovazionE",
      title: "Excelencia en Ingeniería Civil y Gestión y Evaluación de Proyectos",
      paragraphs: [
        "Considerando que la infraestructura en general hoy en día es un ecosistema donde los activos físicos, los sistemas digitales, la gestión humana y las necesidades sociales están completamente integrados. Es compuesto por sistemas complejos sociotécnicos vitales, interconectados y al borde de su vida útil que sustentan la estabilidad social y económica y además requieren una gestión de riesgos avanzada para garantizar la resiliencia frente a los peligros naturales y antropogénicos.",
        "Nosotros somos quien cuida este ecosistema y ofrece un control y mitigación de los factores que constantemente lo atacan. Desde sistemas financieros y de seguros, sistemas operacionales, de logística y cadena de suministro, sistemas de información, datos y ciberseguridad, hasta sistemas institucionales, públicos y de emergencia.",
        "Entre este ecosistema que evaluamos está una parte fundamental que es la infraestructura física en él. Entonces realizamos la gestión de riesgos, diseño estructural y reforzamiento de bodegas, edificios, puentes, tanques elevados, letreros, antenas, presas y estructuras irregulares en general.",
        "Creemos que comprender el riesgo es la base de una construcción exitosa. Al identificar problemas potenciales tempranamente, ayudamos a nuestros clientes a evitar retrasos costosos, garantizar el cumplimiento normativo y proteger sus inversiones durante décadas.",
      ],
      imageAlt:
        "Modelado de elementos finitos para análisis de riesgo sísmico y estructural en infraestructura de Guatemala.",
    },

    // Approach Section
    approach: {
      label: "Nuestra Metodología",
      title: "Evaluación y Gestión de Riesgos de Infraestructura Civil",
      subtitle: "",
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
      supplementalParagraphs: [
        "Los entregables consisten en planos estructurales y arquitectónicos (ya que contamos con arquitecto experto a renderizar planos), memoria de cálculo, recomendaciones y cualquier estudio específico de gestión de riesgo, ingeniería hidrológica, sanitaria y geotécnica, planificación, perfiles de proyecto, etc. El precio depende de los metros cuadrados del proyecto y los entregables acordados.",
        "Las revisiones deben realizarse durante el desarrollo del proyecto y no al final cuando ya se ha completado la mayor parte del análisis y el trabajo detallado. El incumplimiento conllevará a la necesidad de más tiempo para realizar cambios importantes, lo que provocará un efecto dominó. Los cambios de gran envergadura se consideran una nueva solicitud.",
        "El arquitecto es quien diseña los espacios, la estética y la funcionalidad (distribución de cuartos, iluminación), necesario para plasmar tus ideas, sin embargo, no siempre podrá obtener licencias municipales. Bajo el marco normativo unificado entre el Colegio de Arquitectos de Guatemala (CAG) y el Colegio de Ingenieros de Guatemala (CIG), alineado a las normas AGIES NSE 4 y CONRED NRD-1, la capacidad estructural para firmar planos se define estrictamente por la complejidad del proyecto: el arquitecto y el ingeniero civil poseen la capacidad legal de firmar diseños estructurales únicamente para viviendas o proyectos menores clasificados como \"obras ordinarias prescriptivas\", las cuales no superen los 2 niveles de altura y posean luces (claros entre columnas) menores a 5 metros sin sótanos. Esto a pesar de que un ingeniero a diferencia del arquitecto está capacitado en su pensum de estudios para análisis y diseño estructural limitado. Mientras que el ingeniero estructural (calculista) es el único profesional con la facultad e idoneidad legal exigida obligatoriamente para firmar y presentar memorias de cálculo ante la municipalidad cuando el proyecto sea una obra de uso público o comercial (sin importar el tamaño), o bien cualquier edificación que alcance los 3 niveles o más de altura.",
      ] as readonly string[],
    },

    locationsIndex: {
      label: "Departamentos",
      title: "Cobertura de InnovazionE en Guatemala",
      subtitle:
        "Conozca los servicios que InnovazionE brinda en cada departamento. Elija una región para revisar apoyo local en gestión de riesgos e ingeniería.",
      backHome: "Volver al inicio",
      viewDetailsCta: "Ver detalles del departamento →",
    },

    locationPage: {
      badge: "Departamento",
      allDepartments: "Todos los departamentos",
      home: "Inicio",
      whyInnovazionLeading: "¿Por qué InnovazionE en ",
      whyInnovazionTrailing: "?",
      regionalStrengthTitle: "Fortalezas regionales",
      keyServicesTitle: "Servicios clave",
      keyServiceBullets: [
        "Evaluación de riesgos específica del sitio",
        "Análisis estructural y planeación de mitigación",
        "Apoyo en construcción y diseño resilientes",
        "Cumplimiento normativo y guía en permisos",
      ],
    },

    privacyPolicy: {
      badge: "Política de Privacidad",
      title: "Su privacidad es importante para InnovazionE",
      intro:
        "Nos comprometemos a guardar discreción respecto a la información de su proyecto cuando así lo requiera. Protegemos la confidencialidad de los detalles de ingeniería y datos confidenciales con los que trabajamos.",
      sections: [
        {
          title: "Discreción y Confidencialidad",
          body:
            "Si su proyecto requiere discreción, InnovazionE respeta completamente la confidencialidad de la información compartida. Comprendemos que algunos proyectos demandan privacidad y nos comprometemos a mantener sus detalles bajo estricta confidencialidad según sea necesario.",
        },
      ],
      backHome: "Volver al inicio",
    },

    termsOfService: {
      badge: "Términos del Servicio",
      title: "Términos y condiciones del sitio web",
      intro:
        "Estos términos describen cómo puede utilizar el sitio web de InnovazionE y el contenido publicado aquí. Al acceder al sitio, acepta estos términos con carácter informativo.",
      sections: [
        {
          title: "Uso del sitio",
          body:
            "El sitio se ofrece con fines informativos y de contacto. No puede reproducir ni redistribuir el contenido sin autorización previa por escrito de InnovazionE.",
        },
        {
          title: "Sin asesoría profesional",
          body:
            "El contenido de este sitio no sustituye asesoría profesional en ingeniería, derecho o finanzas. Para orientación específica de proyecto, comuníquese directamente con InnovazionE.",
        },
        {
          title: "Limitación de responsabilidad",
          body:
            "InnovazionE no se hace responsable por daños indirectos o consecuenciales derivados del uso del sitio o de la confianza depositada en su contenido. El uso es bajo su propio criterio.",
        },
      ],
      backHome: "Volver al inicio",
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

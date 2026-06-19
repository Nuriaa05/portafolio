export type Language = "en" | "es"

export const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Education",
      contact: "Contact",
      resume: "Resume",
    },
    hero: {
      badge: "Software Technician & Creative Developer",
      greeting: "Hi, I'm",
      description:
        "I specialize in building web applications that combine professional design, maintainable code, and results-oriented SEO optimization.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
    },
    about: {
      subtitle: "My background and professional profile",
      title: "About Me",
      available: "Available for work",
      paragraphs: [
        "I am a Software Development Technician with a solid foundation in Frontend (React, JavaScript, HTML5, CSS3) and Backend (Node.js with Express). I trained at Instituto Educativo Económico Nacional and I am currently pursuing a Bachelor's Degree in Information Systems at UNNE.",
        "I am passionate about creating functional, well-designed digital experiences. I apply Prompt Engineering and Artificial Intelligence methodologies as assistance tools for coding and UX/UI design. I have high adaptability, strong problem-solving skills, and I enjoy working in teams.",
      ],
      nameLabel: "Name",
      emailLabel: "Email",
      locationLabel: "Location",
      locationValue: "Argentina",
      availabilityLabel: "Availability",
      availabilityValue: "Open to opportunities",
      downloadResume: "Download Resume",
    },
    skills: {
      subtitle: "Technologies I work with",
      title: "My Skills",
    },
    projects: {
      subtitle: "Selected real projects",
      title: "Featured Projects",
      code: "Code",
      liveDemo: "Live Demo",
      items: [
        {
          title: "Professional Medical Landing Page",
          description:
            "Institutional website for a plastic surgeon, including professional background, services filterable by category, results gallery, patient testimonials, location map, and direct WhatsApp contact.",
        },
        {
          title: "Chaco Implantes",
          description:
            "Institutional website for a healthcare company focused on prostheses, implants, and trauma instruments, with a catalog segmented by medical specialty, product gallery, events section, and direct WhatsApp contact. Focused on technical SEO, performance, and a mobile-first experience.",
        },
        {
          title: "Neutron Tecnología SAS",
          description:
            "Online sales platform for technology services and products. Full development: database, server, interface, and production deployment. Includes order processing, automatic notifications, and tests for critical flows.",
        },
      ],
    },
    experience: {
      subtitle: "My academic path",
      title: "Education",
      items: [
        {
          title: "Software Development Technician",
          institution: "Instituto Educativo Económico Nacional (I.E.N)",
          period: "2023 – 2025",
        },
        {
          title: "Bachelor's Degree in Information Systems (in progress)",
          institution: "Universidad Nacional del Nordeste (UNNE)",
          period: "2026 – present",
        },
        {
          title: "Advanced British English",
          institution: "Extensión Universitaria UNNE",
          period: "2014 – 2022",
        },
      ],
    },
    contact: {
      subtitle: "Let's work together",
      title: "Get In Touch",
      infoTitle: "Contact Information",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      currentStatus: "Current Status",
      statusText: "Available for freelance work and full-time opportunities",
      formTitle: "Send Me a Message",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      subjectPlaceholder: "Subject",
      messagePlaceholder: "Your Message",
      send: "Send Message",
      sending: "Sending...",
      toastTitle: "Message sent!",
      toastDescription: "Thanks for reaching out. I'll get back to you soon.",
      toastErrorTitle: "Message not sent",
      toastErrorDescription: "Please try again or contact me directly by email.",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  es: {
    nav: {
      about: "Sobre mi",
      skills: "Habilidades",
      projects: "Proyectos",
      experience: "Formación",
      contact: "Contacto",
      resume: "CV",
    },
    hero: {
      badge: "Técnica en Desarrollo de Software",
      greeting: "Hola, soy",
      description:
        "Especializada en el desarrollo de aplicaciones web que combinan diseño profesional, código mantenible y optimización SEO orientada a resultados.",
      viewProjects: "Ver Proyectos",
      contactMe: "Contáctame",
    },
    about: {
      subtitle: "Mi perfil y formación",
      title: "Sobre Mi",
      available: "Disponible para trabajar",
      paragraphs: [
        "Soy una Técnica en Desarrollo de Software con base sólida en Frontend (React, JavaScript, HTML5, CSS3) y Backend (Node.js con Express). Me formé en el Instituto Educativo Económico Nacional y actualmente curso la Licenciatura en Sistemas de Información en la UNNE.",
        "Me apasiona crear experiencias digitales funcionales y bien diseñadas. Aplico metodologías de Prompt Engineering e Inteligencia Artificial como herramienta de asistencia en codificación y diseño UX/UI. Tengo alta adaptabilidad, fuerte capacidad de resolución de problemas y disfruto trabajar en equipo.",
      ],
      nameLabel: "Nombre",
      emailLabel: "Correo",
      locationLabel: "Ubicación",
      locationValue: "Argentina",
      availabilityLabel: "Disponibilidad",
      availabilityValue: "Abierta a oportunidades",
      downloadResume: "Descargar Currículum",
    },
    skills: {
      subtitle: "Tecnologías con las que trabajo",
      title: "Mis Habilidades",
    },
    projects: {
      subtitle: "Proyectos reales seleccionados",
      title: "Proyectos Destacados",
      code: "Código",
      liveDemo: "Ver Demo",
      items: [
        {
          title: "Landing Médica Profesional",
          description:
            "Desarrollo de sitio institucional para cirujano plástico, con trayectoria profesional, servicios filtrables por categoría, galería de resultados, testimonios de pacientes, mapa de ubicación y contacto directo por WhatsApp.",
        },
        {
          title: "Chaco Implantes",
          description:
            "Desarrollo de sitio institucional para empresa del sector salud (prótesis, implantes e instrumental traumatológico), con catálogo segmentado por especialidad médica, galería de productos, sección de eventos y contacto directo por WhatsApp. Foco en SEO técnico, performance y experiencia mobile-first.",
        },
        {
          title: "Neutron Tecnología SAS",
          description:
            "Plataforma de ventas online para servicios y artículos tecnológicos. Desarrollo completo: base de datos, servidor, interfaz y deploy en producción. Incluye procesamiento de pedidos, notificaciones automáticas y pruebas sobre los flujos críticos.",
        },
      ],
    },
    experience: {
      subtitle: "Mi recorrido académico",
      title: "Formación",
      items: [
        {
          title: "Técnico en Desarrollo de Software",
          institution: "Instituto Educativo Económico Nacional (I.E.N)",
          period: "2023 – 2025",
        },
        {
          title: "Licenciatura en Sistemas de Información (en curso)",
          institution: "Universidad Nacional del Nordeste (UNNE)",
          period: "2026 – actualidad",
        },
        {
          title: "Inglés Británico Avanzado",
          institution: "Extensión Universitaria UNNE",
          period: "2014 – 2022",
        },
      ],
    },
    contact: {
      subtitle: "Trabajemos juntos",
      title: "Ponte en Contacto",
      infoTitle: "Información de Contacto",
      emailLabel: "Correo",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      currentStatus: "Estado Actual",
      statusText: "Disponible para trabajo freelance y oportunidades de tiempo completo",
      formTitle: "Envíame un Mensaje",
      namePlaceholder: "Tu Nombre",
      emailPlaceholder: "Tu Correo",
      subjectPlaceholder: "Asunto",
      messagePlaceholder: "Tu Mensaje",
      send: "Enviar Mensaje",
      sending: "Enviando...",
      toastTitle: "¡Mensaje enviado!",
      toastDescription: "Gracias por contactarme. Te responderé pronto.",
      toastErrorTitle: "No se pudo enviar el mensaje",
      toastErrorDescription: "Intentá nuevamente o escribime directamente por correo.",
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
  },
} as const

export type TranslationShape = (typeof translations)["en"]

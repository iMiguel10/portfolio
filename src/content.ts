export interface Shot {
  src: string
  caption: string
  w: number
  h: number
}

export type Lang = 'es' | 'en'

export interface Content {
  nav: { about: string; projects: string; stack: string; experience: string; contact: string; cta: string }
  hero: {
    status: string
    title: [string, string, string]
    lead: string
    primary: string
    secondary: string
    badge: string
    caption: string
  }
  about: {
    title: string
    paragraphs: string[]
    facts: { label: string; value: string }[]
  }
  projects: {
    title: string
    intro: string
    tracker: {
      name: string
      tagline: string
      status: string
      description: string
      highlights: string[]
      stack: string[]
      repo: string
      demo: string
      demoSoon: string
      credentials: { title: string; user: string; pass: string; note: string }
      gallery: { label: string; close: string; prev: string; next: string }
      shots: Shot[]
    }
    more: { title: string; text: string }
  }
  stack: { title: string; intro: string; groups: { name: string; items: string[] }[]; learning: string }
  experience: {
    title: string
    work: {
      role: string
      company: string
      period: string
      place: string
      summary: string
      points: string[]
    }[]
    educationTitle: string
    education: { title: string; place: string; period: string }[]
    certsTitle: string
    certs: { title: string; issuer: string; date: string }[]
    languagesTitle: string
    languages: string
  }
  contact: { title: string; text: string; email: string; linkedin: string; github: string }
  footer: { built: string; rights: string }
}

export const content: Record<Lang, Content> = {
  es: {
    nav: {
      about: 'Sobre mí',
      projects: 'Proyectos',
      stack: 'Stack',
      experience: 'Trayectoria',
      contact: 'Contacto',
      cta: 'Hablemos',
    },
    hero: {
      status: 'Abierto a nuevas oportunidades',
      title: ['Software que', 'llega a producción', 'y se mantiene.'],
      lead: 'Soy Miguel, ingeniero informático con más de 5 años construyendo aplicaciones para empresas y administraciones públicas. Ahora llevo mi experiencia a proyectos full stack con FastAPI, React, Docker e IA.',
      primary: 'Ver proyecto',
      secondary: 'Contactar',
      badge: 'Full stack · FastAPI · React · Docker · ',
      caption: 'Almería, España',
    },
    about: {
      title: 'Sobre mí',
      paragraphs: [
        'Me gusta trabajar el ciclo completo de un producto: entender el problema, diseñar la solución, desarrollarla, integrar servicios, desplegarla y mantenerla en producción.',
        'Vengo del mundo de Flutter y Odoo, con sistemas de turnos, seguimiento en tiempo real y herramientas para obras. Ahora profundizo en desarrollo web moderno, arquitectura de APIs y escalabilidad, y uso la IA como apoyo en programación, tests, documentación y refactorización.',
        'Fuera del trabajo administro mis propios servidores con Linux y Docker, y construyo proyectos personales para seguir aprendiendo.',
      ],
      facts: [
        { label: 'Experiencia', value: '5+ años' },
        { label: 'Formación', value: 'Máster y Grado en Ingeniería Informática, UGR' },
        { label: 'Ubicación', value: 'Almería, España' },
        { label: 'Idiomas', value: 'Español nativo · Inglés B2' },
      ],
    },
    projects: {
      title: 'Proyectos',
      intro: 'Mi trabajo para empresas y mis servidores personales no son públicos. Aquí está lo que sí puedo enseñar, y habrá más.',
      tracker: {
        name: 'Applications Tracker',
        tagline: 'Todas tus candidaturas, su historia y tu próximo paso, en un solo sitio.',
        status: 'MVP completo, en uso real',
        description:
          'Una aplicación para llevar la búsqueda de empleo: registra cada solicitud, cómo avanza y qué toca hacer después. La diseñé, la construí y la despliego yo, con documentación, tests y CI.',
        highlights: [
          'Máquina de estados con historial que no se puede reescribir y deshacer del último cambio.',
          'Aislamiento entre usuarios en dos capas: filtro en cada consulta y claves foráneas compuestas en la base de datos.',
          'IA que adapta el CV y la carta a cada oferta sin inventar experiencia, con modelo local gratuito o clave propia.',
          'Kanban, calendario con exportación a Google Calendar, avisos por email y métricas que muestran sobre cuántos datos se calculan.',
          'Interfaz en español e inglés, accesible y adaptada a móvil.',
        ],
        stack: ['FastAPI', 'React 19', 'TypeScript', 'PostgreSQL', 'SuperTokens', 'Docker', 'GitHub Actions'],
        repo: 'Ver código',
        demo: 'Probar demo',
        demoSoon: 'Demo próximamente',
        credentials: { title: 'Cuenta de demostración', user: 'Usuario', pass: 'Contraseña', note: 'Los datos son ficticios y se restablecen cada día.' },
        gallery: { label: 'Capturas del proyecto', close: 'Cerrar', prev: 'Anterior', next: 'Siguiente' },
        shots: [
          { src: '/tracker/dashboard.webp', caption: 'Dashboard con estados, envíos por semana y tasa de respuesta', w: 1600, h: 1000 },
          { src: '/tracker/tablero.webp', caption: 'Tablero Kanban con arrastrar y soltar', w: 1600, h: 1000 },
          { src: '/tracker/detalle.webp', caption: 'Detalle de una solicitud: historial, entrevistas y recordatorios', w: 1600, h: 1000 },
          { src: '/tracker/cv-ia.webp', caption: 'CV adaptado con IA, con el encaje frente a la oferta', w: 1600, h: 1000 },
          { src: '/tracker/calendario.webp', caption: 'Calendario de entrevistas y recordatorios', w: 1600, h: 1000 },
          { src: '/tracker/dashboard-oscuro.webp', caption: 'Dashboard en modo oscuro', w: 1600, h: 1000 },
          { src: '/tracker/movil.webp', caption: 'Versión móvil del dashboard', w: 780, h: 1688 },
        ],
      },
      more: {
        title: 'Más proyectos en camino',
        text: 'Estoy preparando nuevos proyectos públicos. Mientras tanto, tienes todo mi código abierto en GitHub.',
      },
    },
    stack: {
      title: 'Stack',
      intro: 'Lo que uso a diario y lo que estoy afianzando.',
      groups: [
        { name: 'Lenguajes', items: ['Python', 'TypeScript', 'JavaScript', 'Dart', 'SQL'] },
        { name: 'Backend', items: ['FastAPI', 'Flask', 'Express', 'REST APIs', 'Odoo'] },
        { name: 'Frontend y móvil', items: ['React', 'Vite', 'Flutter'] },
        { name: 'Datos', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
        { name: 'Infraestructura', items: ['Docker', 'Docker Compose', 'Linux', 'Coolify', 'CI/CD', 'Git y GitHub'] },
        { name: 'Metodología', items: ['Agile', 'Scrum', 'TDD'] },
      ],
      learning: 'Ahora mismo: arquitecturas web y API modernas, escalabilidad e IA integrada en las aplicaciones.',
    },
    experience: {
      title: 'Trayectoria',
      work: [
        {
          role: 'Ingeniero de software',
          company: 'Smart Fenix',
          period: 'mar. 2021 – jul. 2026',
          place: 'Córdoba',
          summary:
            'Desarrollo, despliegue y mantenimiento de software para empresas privadas y administraciones públicas, en todo el ciclo de vida de los proyectos.',
          points: [
            'Apps multiplataforma con Flutter para Android e iOS, integradas con APIs de terceros y mantenidas en producción.',
            'Implantación y personalización de Odoo: módulos a medida y automatización de procesos internos.',
            'Plataformas de seguimiento en tiempo real de eventos multitudinarios y sistema de turnos y colas con tótems, impresoras de tickets y pantallas táctiles.',
            'Herramientas de gestión y seguimiento de obras: recursos, incidencias y documentación.',
            'Entornos con Docker y Docker Compose, servidores Linux y despliegues.',
            'Tutoría de estudiantes en prácticas y formación en Odoo.',
          ],
        },
        {
          role: 'Prácticas de desarrollo de software',
          company: 'Atisoluciones',
          period: 'jun. – jul. 2020',
          place: '',
          summary: 'Migración de una aplicación a una arquitectura basada en contenedores Docker y configuración de entornos de desarrollo y pruebas.',
          points: [],
        },
      ],
      educationTitle: 'Formación',
      education: [
        { title: 'Máster en Ingeniería Informática', place: 'Universidad de Granada', period: '2019 – 2020' },
        { title: 'Grado en Ingeniería Informática (Tecnologías de la Información)', place: 'Universidad de Granada', period: '2015 – 2019' },
      ],
      certsTitle: 'Certificaciones',
      certs: [
        { title: 'Claude Academy: Claude Code in action', issuer: 'Anthropic', date: 'sept. 2026' },
        { title: 'Claude Academy: Claude Code 101', issuer: 'Anthropic', date: 'sept. 2026' },
      ],
      languagesTitle: 'Idiomas',
      languages: 'Español nativo · Inglés B2',
    },
    contact: {
      title: 'Hablemos',
      text: 'Si buscas a alguien que lleve un producto de la idea a producción, escríbeme. Respondo por email o LinkedIn.',
      email: 'Escribir un email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    footer: { built: 'Hecho con React y Vite, desplegado en mi propio servidor.', rights: 'Miguel Jiménez Cazorla' },
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      stack: 'Stack',
      experience: 'Experience',
      contact: 'Contact',
      cta: "Let's talk",
    },
    hero: {
      status: 'Open to new opportunities',
      title: ['Software that', 'reaches production', 'and stays maintainable.'],
      lead: "I'm Miguel, a software engineer with 5+ years building applications for companies and public administrations. I'm now taking that experience into full stack projects with FastAPI, React, Docker and AI.",
      primary: 'See the project',
      secondary: 'Get in touch',
      badge: 'Full stack · FastAPI · React · Docker · ',
      caption: 'Almería, Spain',
    },
    about: {
      title: 'About me',
      paragraphs: [
        'I like working the whole life cycle of a product: understanding the problem, designing the solution, building it, integrating services, deploying it and keeping it running in production.',
        "I come from Flutter and Odoo, with queue management systems, real-time tracking and construction tools. Now I'm going deeper into modern web development, API architecture and scalability, and I use AI as support for coding, tests, documentation and refactoring.",
        'Outside of work I run my own servers with Linux and Docker, and build personal projects to keep learning.',
      ],
      facts: [
        { label: 'Experience', value: '5+ years' },
        { label: 'Education', value: "Master's and Bachelor's in Computer Engineering, UGR" },
        { label: 'Location', value: 'Almería, Spain' },
        { label: 'Languages', value: 'Spanish native · English B2' },
      ],
    },
    projects: {
      title: 'Projects',
      intro: "My client work and personal servers aren't public. Here is what I can show, and more is coming.",
      tracker: {
        name: 'Applications Tracker',
        tagline: 'All your applications, their history and your next step, in one place.',
        status: 'Complete MVP, in real use',
        description:
          'An app to run a job search: it records every application, how it progresses and what to do next. I designed it, built it and deploy it myself, with documentation, tests and CI.',
        highlights: [
          'State machine with an append-only history and undo for the latest change.',
          'User isolation in two layers: a filter on every query and composite foreign keys in the database.',
          'AI that tailors the CV and cover letter to each offer without inventing experience, with a free local model or your own key.',
          'Kanban, calendar with Google Calendar export, email reminders and metrics that show how much data they are based on.',
          'Spanish and English interface, accessible and mobile friendly.',
        ],
        stack: ['FastAPI', 'React 19', 'TypeScript', 'PostgreSQL', 'SuperTokens', 'Docker', 'GitHub Actions'],
        repo: 'View code',
        demo: 'Try the demo',
        demoSoon: 'Demo coming soon',
        credentials: { title: 'Demo account', user: 'User', pass: 'Password', note: 'The data is fictitious and resets every day.' },
        gallery: { label: 'Project screenshots', close: 'Close', prev: 'Previous', next: 'Next' },
        shots: [
          { src: '/tracker/dashboard.webp', caption: 'Dashboard with statuses, weekly submissions and response rate', w: 1600, h: 1000 },
          { src: '/tracker/tablero.webp', caption: 'Kanban board with drag and drop', w: 1600, h: 1000 },
          { src: '/tracker/detalle.webp', caption: 'Application detail: history, interviews and reminders', w: 1600, h: 1000 },
          { src: '/tracker/cv-ia.webp', caption: 'AI-tailored CV, with fit against the job offer', w: 1600, h: 1000 },
          { src: '/tracker/calendario.webp', caption: 'Calendar of interviews and reminders', w: 1600, h: 1000 },
          { src: '/tracker/dashboard-oscuro.webp', caption: 'Dashboard in dark mode', w: 1600, h: 1000 },
          { src: '/tracker/movil.webp', caption: 'Mobile version of the dashboard', w: 780, h: 1688 },
        ],
      },
      more: {
        title: 'More projects on the way',
        text: "I'm preparing new public projects. In the meantime, all my open code is on GitHub.",
      },
    },
    stack: {
      title: 'Stack',
      intro: 'What I use every day and what I am sharpening.',
      groups: [
        { name: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'Dart', 'SQL'] },
        { name: 'Backend', items: ['FastAPI', 'Flask', 'Express', 'REST APIs', 'Odoo'] },
        { name: 'Frontend and mobile', items: ['React', 'Vite', 'Flutter'] },
        { name: 'Data', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
        { name: 'Infrastructure', items: ['Docker', 'Docker Compose', 'Linux', 'Coolify', 'CI/CD', 'Git and GitHub'] },
        { name: 'Methodology', items: ['Agile', 'Scrum', 'TDD'] },
      ],
      learning: 'Right now: modern web and API architectures, scalability and AI built into applications.',
    },
    experience: {
      title: 'Experience',
      work: [
        {
          role: 'Software engineer',
          company: 'Smart Fenix',
          period: 'Mar 2021 – Jul 2026',
          place: 'Córdoba',
          summary:
            'Development, deployment and maintenance of software for private companies and public administrations, across the whole project life cycle.',
          points: [
            'Cross-platform Flutter apps for Android and iOS, integrated with third-party APIs and maintained in production.',
            'Odoo rollout and customisation: custom modules and automation of internal processes.',
            'Real-time tracking platforms for large public events, and a queue management system with self-service kiosks, ticket printers and touch screens.',
            'Tools to manage and follow construction works: resources, incidents and documentation.',
            'Docker and Docker Compose environments, Linux servers and deployments.',
            'Mentoring interns and teaching Odoo.',
          ],
        },
        {
          role: 'Software development intern',
          company: 'Atisoluciones',
          period: 'Jun – Jul 2020',
          place: '',
          summary: 'Migrated an application to a container-based architecture on Docker and set up development and test environments.',
          points: [],
        },
      ],
      educationTitle: 'Education',
      education: [
        { title: "Master's in Computer Engineering", place: 'University of Granada', period: '2019 – 2020' },
        { title: "Bachelor's in Computer Engineering (Information Technology)", place: 'University of Granada', period: '2015 – 2019' },
      ],
      certsTitle: 'Certifications',
      certs: [
        { title: 'Claude Academy: Claude Code in action', issuer: 'Anthropic', date: 'Sep 2026' },
        { title: 'Claude Academy: Claude Code 101', issuer: 'Anthropic', date: 'Sep 2026' },
      ],
      languagesTitle: 'Languages',
      languages: 'Spanish native · English B2',
    },
    contact: {
      title: "Let's talk",
      text: "If you need someone to take a product from idea to production, write to me. I reply by email or LinkedIn.",
      email: 'Send an email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    footer: { built: 'Built with React and Vite, deployed on my own server.', rights: 'Miguel Jiménez Cazorla' },
  },
}

export const links = {
  github: 'https://github.com/iMiguel10',
  repo: 'https://github.com/iMiguel10/applications-tracker',
  linkedin: 'https://www.linkedin.com/in/miguel-jim%C3%A9nez-cazorla-014807195/',
  demo: 'https://applications-tracker.imigueldev.duckdns.org/' as string,
  // Cuenta pública de demostración (datos ficticios, restablecida a diario). La contraseña vacía oculta el bloque.
  demoUser: 'demo@example.com',
  demoPass: '' as string,
}

export const emailParts = ['imiguel10', 'hotmail.es'] as const

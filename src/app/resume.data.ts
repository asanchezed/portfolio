export interface ResumeData {
  personal: {
    name: string;
    role: string;
    summary: string;
    email: string;
    handle: string;
    linkedin: string;
    github: string;
    remote: { text: string; url: string };
    languages: { name: string; level: string; details?: string }[];
  };
  experience: {
    period: string;
    company: string;
    role: string;
    highlights: string[];
  }[];
  education: {
    period: string;
    degree: string;
    institution: string;
    details: string;
  }[];
  skills: string[];
  projects: {
    period: string;
    title: string;
    highlights: string[];
    technologies: string[];
    link?: string;
  }[];
}

export const RESUME_DATA: { [key: string]: ResumeData } = {
  es: {
    personal: {
      name: 'Andoni Sánchez',
      role: 'Senior Full-Stack & DevOps Engineer',
      summary: 'Node.js · NestJS · Angular · React · Kubernetes · Docker · CI/CD · Cloud · IA aplicada',
      email: 'asanchezed@gmail.com',
      handle: 'asanchezed',
      linkedin: 'https://www.linkedin.com/in/asanchezed/',
      github: 'https://github.com/asanchezed',
      remote: { text: '100% Remoto', url: 'https://www.google.com/maps/place/Donostia-San+Sebastian' },
      languages: [
        { name: 'Español', level: 'Nivel: C2' },
        { name: 'Euskera', level: 'Nivel: B2' },
        { name: 'Inglés', level: 'Cursando: C1.1', details: 'Certificado: Cambridge English First (FCE)' }
      ]
    },
    experience: [
      {
        period: '2017-05-02 / Actualmente',
        company: 'Iris Technology',
        role: 'Senior Full-Stack & DevOps Engineer',
        highlights: [
          'Arquitectura y DevOps: Kubernetes, Docker, GCP, despliegue continuo con CI/CD y testing automatizado mediante IA.',
          'Desarrollo agéntico (agentic coding) con Claude Code.',
          'Backend: Node.js (Express, NestJS) y Python (FastAPI), PostgreSQL con TypeORM, Redis.',
          'Tiempo real: Kafka + WebSockets.',
          'Frontend: Angular, React (Tailwind, Vite), visualización de datos con D3.js.',
          'IA: agentes autónomos (LangChain, CrewAI) y pipelines NLP/ML con OpenAI API, Hugging Face Transformers, spaCy y FAISS.',
          'Metodologías: Scrum, Git. Remoto desde 2017.'
        ]
      },
      {
        period: '2016-09-29 / 2017-05-01',
        company: 'Indaba Consultores S.L (LKS)',
        role: 'Programador',
        highlights: [
          'Autoformación en Java Server Faces, Spring 4 MVC, Ionic Framework (v1 y v2) y Liferay (v6.2 y v7).',
          'Spring 4 MVC, Hibernate, JSON y JDBC con despliegue en Tomcat.',
          'Proyectos en Java con Seam Framework + Hibernate y PrimeFaces (JSF) con despliegue en JBoss.',
          'Bases de datos Oracle Enterprise 10g/11g/12c.',
          'Ionic Framework 1 y 2 con AngularJS.',
          'Liferay 6.2 y 7: puesta en marcha y creación de portlets.',
          'Virtualización con Docker.',
          'Instructor de Java, Swing y JDBC.',
          'Desarrollos en Node.js.'
        ]
      },
      {
        period: '2016-01-27 / 2016-07-11',
        company: 'ATELEI Engineering',
        role: 'Realización del proyecto de fin de grado',
        highlights: [
          'Estudio y búsqueda de alternativas para la sustitución de los applets de Java en entornos web.',
          'Desarrollo de una aplicación para el microcontrolador ESP8266 para comunicaciones REST a través de sockets SSL.'
        ]
      },
      {
        period: '2015-06-15 / 2015-09-10',
        company: 'ATELEI Engineering',
        role: 'Ingeniero en prácticas',
        highlights: [
          'Realización del frontend y backend de una aplicación cloud de control de acceso.',
          'Configuración de servidor Apache para subdominios dinámicos y despliegue de la aplicación.'
        ]
      },
      {
        period: '2012-02-27 / 2012-06-06',
        company: 'Sistemas de Oficina del Bidasoa, S.L. CANON',
        role: 'Técnico en prácticas',
        highlights: [
          'Sistemas informáticos, conectividad y máquinas multifunción.'
        ]
      },
      {
        period: '2014-06-15 / 2016-06-20',
        company: 'Restaurante Ilcapo',
        role: 'Repartidor',
        highlights: []
      },
      {
        period: '2014-06-26 / 2014-10-25',
        company: 'Restaurante Monte Igeldo',
        role: 'Camarero extra',
        highlights: []
      },
      {
        period: '2010-06-15 / 2011-09-09',
        company: 'Restaurante Aeropuerto Hondarribia',
        role: 'Camarero extra',
        highlights: []
      }
    ],
    education: [
      {
        period: '2012-09-10 / 2016-07-11',
        degree: 'Grado en Ingeniería Informática',
        institution: 'Universidad del País Vasco',
        details: 'Especialidad Ingeniería del Software.'
      },
      {
        period: '2010-09-10 / 2012-06-04',
        degree: 'Grado superior en sistemas de telecomunicaciones e informáticos',
        institution: 'IEFPS Bidasoa',
        details: 'Antenas, telefonía, redes, lenguajes de programación.'
      },
      {
        period: '2008-09-08 / 2010-05-24',
        degree: 'Bachillerato Científico-Tegnológico',
        institution: 'Pio Baroja BHI',
        details: ''
      }
    ],
    skills: [
      // Backend & DevOps (Current Role - Iris Technology)
      'Node.js',
      'NestJS',
      'AI Agents (LangChain, CrewAI)',
      'Express',
      'Restify',
      'Python',
      'FastAPI',
      'Kubernetes',
      'Docker',
      'Google Cloud Platform',
      'Firebase',
      'PostgreSQL',
      'TypeORM',
      'CI/CD',
      'Git',
      'Claude Code',

      // Frontend (Current)
      'Angular',
      'React',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'SASS',
      'Tailwind CSS',
      'Vite',
      'D3.js',

      // AI / ML / Data
      'OpenAI API',
      'Hugging Face Transformers',
      'spaCy',
      'FAISS',
      'Pandas',
      'NumPy',

      // Additional Backend & Infrastructure
      'REST APIs',
      'Microservices',
      'Redis',
      'Nginx',
      'Kafka',
      'RabbitMQ',

      // Methodologies & Tools
      'Scrum/Agile',
      'Visual Studio Code',

      // Previous Technologies
      'Java',
      'Spring Framework',
      'Hibernate',
      'JSF',
      'Ionic Framework',
      'PHP/CodeIgniter',
      'Oracle SQL',
      'MySQL'
    ],
    projects: [
      {
        period: '2020 / Actualmente',
        title: 'Homelab & Domótica personal',
        highlights: [
          'Infraestructura self-hosted en dos ubicaciones: ~20 stacks Docker Compose orquestados por scripts propios.',
          'Servicios: Home Assistant, Frigate NVR con reconocimiento de objetos para detección de personas, Plex, AdGuard Home, Nginx Proxy Manager y WireGuard/OpenVPN.',
          'Domótica avanzada con Zigbee2MQTT, Matter, ESPHome y MQTT.',
          'Automatizaciones de Home Assistant con ~14k líneas de YAML, templates Jinja2 reutilizables y dashboards Lovelace multi-usuario y multi-ubicación.',
          'Scripts de mantenimiento en Bash, Python (integraciones personales) y Node.js/Express.',
          'Imágenes Docker custom publicadas en Docker Hub.'
        ],
        technologies: [
          'Docker Compose',
          'Home Assistant',
          'MQTT',
          'Zigbee2MQTT',
          'ESPHome',
          'Matter',
          'Frigate',
          'WireGuard',
          'OpenVPN',
          'Nginx Proxy Manager',
          'AdGuard Home',
          'Plex',
          'PostgreSQL',
          'Bash',
          'Python',
          'Node.js / Express',
          'Raspberry Pi / BLE'
        ]
      }
    ]
  },
  en: {
    personal: {
      name: 'Andoni Sánchez',
      role: 'Senior Full-Stack & DevOps Engineer',
      summary: 'Node.js · NestJS · Angular · React · Kubernetes · Docker · CI/CD · Cloud · Applied AI',
      email: 'asanchezed@gmail.com',
      handle: 'asanchezed',
      linkedin: 'https://www.linkedin.com/in/asanchezed/',
      github: 'https://github.com/asanchezed',
      remote: { text: '100% Remote', url: 'https://www.google.com/maps/place/Donostia-San+Sebastian' },
      languages: [
        { name: 'Spanish', level: 'Level: C2' },
        { name: 'Basque', level: 'Level: B2' },
        { name: 'English', level: 'Studying: C1.1', details: 'Certificate: Cambridge English First (FCE)' }
      ]
    },
    experience: [
      {
        period: '2017-05-02 / Present',
        company: 'Iris Technology',
        role: 'Senior Full-Stack & DevOps Engineer',
        highlights: [
          'Architecture & DevOps: Kubernetes, Docker, GCP, continuous deployment with CI/CD and AI-powered automated testing.',
          'Agentic coding with Claude Code.',
          'Backend: Node.js (Express, NestJS) and Python (FastAPI), PostgreSQL with TypeORM, Redis.',
          'Real-time: Kafka + WebSockets.',
          'Frontend: Angular, React (Tailwind, Vite), data visualization with D3.js.',
          'AI: autonomous agents (LangChain, CrewAI) and NLP/ML pipelines using OpenAI API, Hugging Face Transformers, spaCy and FAISS.',
          'Methodologies: Scrum, Git. Remote since 2017.'
        ]
      },
      {
        period: '2016-09-29 / 2017-05-01',
        company: 'Indaba Consultores S.L (LKS)',
        role: 'Programmer',
        highlights: [
          'Self-training in Java Server Faces, Spring 4 MVC, Ionic Framework (v1 and v2) and Liferay (v6.2 and v7).',
          'Spring 4 MVC, Hibernate, JSON and JDBC with deployment on Tomcat.',
          'Java projects with Seam Framework + Hibernate and PrimeFaces (JSF) deployed on JBoss.',
          'Oracle Enterprise 10g/11g/12c databases.',
          'Ionic Framework 1 and 2 with AngularJS.',
          'Liferay 6.2 and 7 setup and portlet creation.',
          'Virtualization with Docker.',
          'Java, Swing and JDBC instructor.',
          'Node.js developments.'
        ]
      },
      {
        period: '2016-01-27 / 2016-07-11',
        company: 'ATELEI Engineering',
        role: 'Bachelor\'s Thesis Project',
        highlights: [
          'Study and search for alternatives to replace Java applets in web environments.',
          'Development of an application for the ESP8266 microcontroller for REST communications via SSL sockets.'
        ]
      },
      {
        period: '2015-06-15 / 2015-09-10',
        company: 'ATELEI Engineering',
        role: 'Intern Engineer',
        highlights: [
          'Frontend and backend development of a cloud access control application.',
          'Apache server configuration for dynamic subdomains and application deployment.'
        ]
      },
      {
        period: '2012-02-27 / 2012-06-06',
        company: 'Sistemas de Oficina del Bidasoa, S.L. CANON',
        role: 'Intern Technician',
        highlights: [
          'Computer systems, connectivity, and multifunction machines.'
        ]
      },
      {
        period: '2014-06-15 / 2016-06-20',
        company: 'Restaurante Ilcapo',
        role: 'Delivery Driver',
        highlights: []
      },
      {
        period: '2014-06-26 / 2014-10-25',
        company: 'Restaurante Monte Igeldo',
        role: 'Extra Waiter',
        highlights: []
      },
      {
        period: '2010-06-15 / 2011-09-09',
        company: 'Restaurante Aeropuerto Hondarribia',
        role: 'Extra Waiter',
        highlights: []
      }
    ],
    education: [
      {
        period: '2012-09-10 / 2016-07-11',
        degree: 'Bachelor\'s Degree in Computer Engineering',
        institution: 'University of the Basque Country',
        details: 'Software Engineering Specialty.'
      },
      {
        period: '2010-09-10 / 2012-06-04',
        degree: 'Higher Technician in Telecommunications and Computer Systems',
        institution: 'IEFPS Bidasoa',
        details: 'Antennas, telephony, networks, programming languages.'
      },
      {
        period: '2008-09-08 / 2010-05-24',
        degree: 'Scientific-Technological Baccalaureate',
        institution: 'Pio Baroja BHI',
        details: ''
      }
    ],
    skills: [
      // Backend & DevOps (Current Role - Iris Technology)
      'Node.js',
      'NestJS',
      'AI Agents (LangChain, CrewAI)',
      'Express',
      'Restify',
      'Python',
      'FastAPI',
      'Kubernetes',
      'Docker',
      'Google Cloud Platform',
      'Firebase',
      'PostgreSQL',
      'TypeORM',
      'CI/CD',
      'Git',
      'Claude Code',

      // Frontend (Current)
      'Angular',
      'React',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'SASS',
      'Tailwind CSS',
      'Vite',
      'D3.js',

      // AI / ML / Data
      'OpenAI API',
      'Hugging Face Transformers',
      'spaCy',
      'FAISS',
      'Pandas',
      'NumPy',

      // Additional Backend & Infrastructure
      'REST APIs',
      'Microservices',
      'Redis',
      'Nginx',
      'Kafka',
      'RabbitMQ',

      // Methodologies & Tools
      'Scrum/Agile',
      'Visual Studio Code',

      // Previous Technologies
      'Java',
      'Spring Framework',
      'Hibernate',
      'JSF',
      'Ionic Framework',
      'PHP/CodeIgniter',
      'Oracle SQL',
      'MySQL'
    ],
    projects: [
      {
        period: '2020 / Present',
        title: 'Personal Homelab & Smart Home',
        highlights: [
          'Self-hosted home infrastructure across two locations: ~20 Docker Compose stacks orchestrated by custom scripts.',
          'Services: Home Assistant, Frigate NVR with object recognition for person detection, Plex, AdGuard Home, Nginx Proxy Manager and WireGuard/OpenVPN.',
          'Advanced smart home with Zigbee2MQTT, Matter, ESPHome and MQTT.',
          'Home Assistant automations totaling ~14k lines of YAML, reusable Jinja2 templates and multi-user / multi-location Lovelace dashboards.',
          'Maintenance scripts in Bash, Python (personal integrations) and Node.js/Express.',
          'Custom Docker images published on Docker Hub.'
        ],
        technologies: [
          'Docker Compose',
          'Home Assistant',
          'MQTT',
          'Zigbee2MQTT',
          'ESPHome',
          'Matter',
          'Frigate',
          'WireGuard',
          'OpenVPN',
          'Nginx Proxy Manager',
          'AdGuard Home',
          'Plex',
          'PostgreSQL',
          'Bash',
          'Python',
          'Node.js / Express',
          'Raspberry Pi / BLE'
        ]
      }
    ]
  }
};

// Sistema de traducciones para el portfolio de Nicolas Coria
export const translations = {
  es: {
    // Header y navegación
    nav: {
      sobreMi: "Sobre Mí",
      experiencia: "Experiencia",
      habilidades: "Habilidades",
      proyectos: "Proyectos",
      contacto: "Contacto"
    },
    // Hero section
    hero: {
      title: "Lic. Nicolas Antonio Coria",
      subtitle: "Especialista en Automatización y Robótica | Licenciado en automatizacion y robotica con experiencia en PLC, HMI, SCADA y sistemas industriales varios.",
      viewProjects: "Ver Proyectos",
      contact: "Contactar",
      downloadCV: "Descargar CV",
      downloadLetter: "Descargar Carta de Presentación"
    },
    // About section
    about: {
      title: "Sobre Mí",
      subtitle: "Mi perfil profesional y trayectoria en automatización industrial",
      profileTitle: "Perfil Profesional",
      profileText1: "Especialista en Automatización y Robótica con más de 4 años de experiencia en el sector industrial. Apasionado por la implementación de soluciones tecnológicas que optimizan procesos y mejoran la eficiencia operativa.",
      profileText2: "Mi enfoque se centra en el desarrollo de sistemas de control integrales, desde la programación de PLCs hasta la implementación de sistemas SCADA/HMI, siempre buscando la excelencia técnica y la innovación continua.",
      education: "Formación Académica",
      degree1: "Licenciatura en Automatización y Robótica",
      degree2: "Técnico Universitario en Mecatrónica",
      degree3: "Técnico en Electrónica",
      certifications: "Certificaciones Múltiples",
      certificationsText: "PLC, SCADA, Redes Industriales",
      statistics: "Estadísticas",
      experience: "Años de Experiencia",
      projects: "Proyectos Completados",
      specializations: "Áreas de Especialización",
      specializationsList: {
        automation: "Automatización",
        scada: "SCADA/HMI",
        plc: "PLC",
        processControl: "Control de Procesos",
        maintenance: "Mantenimiento",
        electricalDesign: "Diseño Eléctrico"
      }
    },
    // Experience section
    experience: {
      title: "Experiencia Laboral",
      subtitle: "Mi trayectoria profesional en el sector industrial",
      jobs: {
        unraf: {
          title: "Universidad Nacional de Rafaela",
          position: "Docente de catedra y Adscripto",
          skills: {
            plcProgramming: "Programación PLC",
            ladder: "Ladder",
            pneumatics: "Neumática",
            logicControl: "Control Lógico"
          },
          period: "2025 - Actualidad"
        },
        sodecar: {
          title: "Sodecar S.A.",
          position: "Oficina técnica",
          skills: {
            siemensPlc: "PLC Siemens",
            fatekPlc: "PLC Fatek",
            scada: "SCADA/HMI",
            autocad: "AutoCAD",
            refrigeration: "Procesos Frigoríficos",
            dryers: "Secaderos"
          },
          period: "2023 - Actualidad"
        },
        mahle: {
          title: "Mahle Group",
          position: "Mantenimiento Eléctrico",
          skills: {
            preventiveMaintenance: "Mantenimiento Preventivo",
            electricalDiagnosis: "Diagnóstico Eléctrico",
            electricalPlans: "Planos Eléctricos",
            instrumentation: "Instrumental"
          },
          period: "2021 - 2023"
        }
      }
    },
    // Skills section
    skills: {
      title: "Habilidades Técnicas",
      subtitle: "Nivel de dominio en automatización y software",
      automationControl: "Automatización y Control",
      softwareProgramming: "Software y Programación",
      softSkills: {
        title: "Habilidades Blandas",
        projectManagement: "Gestión de Proyectos",
        leadership: "Liderazgo",
        teamwork: "Trabajo en Equipo",
        analyticalThinking: "Capacidad de Análisis",
        costEstimation: "Estimación de Costos"
      },
      automationSkills: {
        plcProgramming: "Programación PLC",
        industrialNetworks: "Redes Industriales",
        drives: "Variadores y Drives",
        scada: "SCADA/HMI",
        electricalPlans: "Planos Eléctricos",
        processControl: "Control de Procesos",
        instrumentation: "Instrumentación"
      },
      softwareSkills: {
        tiaPortal: "TIA Portal"
      }
    },
    // Projects section
    projects: {
      title: "Proyectos Destacados",
      subtitle: "Soluciones de automatización industrial implementadas",
      items: {
        ammonia: {
          title: "Automatización Condensadores de Amoniaco",
          description: "Sistema de control distribuido para gestión eficiente de condensadores",
          technologies: {
            siemens: "Siemens S7-1200",
            scada: "SCADA Weintek",
            ethernet: "Ethernet IP",
            pid: "Control PID"
          }
        },
        dryers: {
          title: "Automatización Secaderos Industriales",
          description: "Control automatizado de procesos de secado para productos industriales",
          technologies: {
            plc: "PLC Fatek",
            hmi: "HMI Weintek",
            sensors: "Sensores PT100",
            humidity: "Control de Humedad"
          }
        },
        coldRooms: {
          title: "Automatización Cámaras Frigoríficas",
          description: "Sistema integral de control para cámaras de refrigeración industrial",
          technologies: {
            plc: "PLC Siemens",
            scada: "SCADA/HMI",
            temperature: "Control de Temperatura",
            monitoring: "Monitoreo Remoto"
          }
        },
        waterDoser: {
          title: "Automatización Dosificador de Agua",
          description: "Sistema de dosificación precisa para industria de alimentos",
          technologies: {
            plc: "PLC Fatek",
            sensors: "Sensores de Flujo",
            automation: "Control Automático",
            hmi: "Panel HMI"
          }
        },
        mesSystem: {
          title: "Sistema MES Integrado - Manufacturing Execution System",
          description: "Plataforma centralizada que integra y monitorea todos los equipos de automatización industrial",
          technologies: {
            integration: "Integración PLC",
            monitoring: "Monitoreo en Tiempo Real",
            database: "Base de Datos Centralizada",
            reporting: "Reportes Automáticos"
          }
        }
      }
    },
    // Contact section
    contact: {
      title: "Contacto",
      subtitle: "¿Interesado en colaborar o tienes un proyecto en mente? Hablemos",
      sendMessage: "Envíame un mensaje",
      name: "Nombre",
      email: "Correo Electrónico",
      message: "Mensaje",
      sendButton: "Enviar Mensaje",
      contactInfo: "Información de Contacto",
      location: "Ubicación",
      portfolio: "Portfolio",
      whatsapp: "WhatsApp",
      whatsappLabel: "Contactame directamente por WhatsApp"
    },
    // Footer
    footer: {
      name: "Nicolas Antonio Coria",
      title: "Licenciado en Automatización y Robótica",
      copyright: "© 2026 Nicolas Coria. Todos los derechos reservados."
    }
  },
  en: {
    // Header y navegación
    nav: {
      sobreMi: "About Me",
      experiencia: "Experience",
      habilidades: "Skills",
      proyectos: "Projects",
      contacto: "Contact"
    },
    // Hero section
    hero: {
      title: "Lic. Nicolas Antonio Coria",
      subtitle: "Automation and Robotics Specialist | Bachelor's degree in automation and robotics with experience in PLC, HMI, SCADA and various industrial systems.",
      viewProjects: "View Projects",
      contact: "Contact",
      downloadCV: "Download CV",
      downloadLetter: "Download Cover Letter"
    },
    // About section
    about: {
      title: "About Me",
      subtitle: "My professional profile and trajectory in industrial automation",
      profileTitle: "Professional Profile",
      profileText1: "Automation and Robotics Specialist with over 4 years of experience in the industrial sector. Passionate about implementing technological solutions that optimize processes and improve operational efficiency.",
      profileText2: "My focus is on the development of integral control systems, from PLC programming to the implementation of SCADA/HMI systems, always seeking technical excellence and continuous innovation.",
      education: "Academic Formation",
      degree1: "Bachelor's Degree in Automation and Robotics",
      degree2: "University Technician in Mechatronics",
      degree3: "Electronics Technician",
      certifications: "Multiple Certifications",
      certificationsText: "PLC, SCADA, Industrial Networks",
      statistics: "Statistics",
      experience: "Years of Experience",
      projects: "Completed Projects",
      specializations: "Areas of Specialization",
      specializationsList: {
        automation: "Automation",
        scada: "SCADA/HMI",
        plc: "PLC",
        processControl: "Process Control",
        maintenance: "Maintenance",
        electricalDesign: "Electrical Design"
      }
    },
    // Experience section
    experience: {
      title: "Work Experience",
      subtitle: "My professional trajectory in the industrial sector",
      jobs: {
        unraf: {
          title: "Universidad Nacional de Rafaela",
          position: "Lecturer and Teaching Assistant",
          skills: {
            plcProgramming: "PLC Programming",
            ladder: "Ladder",
            pneumatics: "Pneumatics",
            logicControl: "Logic Control"
          },
          period: "2025 - Present"
        },
        sodecar: {
          title: "Sodecar S.A.",
          position: "Technical Office",
          skills: {
            siemensPlc: "Siemens PLC",
            fatekPlc: "Fatek PLC",
            scada: "SCADA/HMI",
            autocad: "AutoCAD",
            refrigeration: "Refrigeration Processes",
            dryers: "Dryers"
          },
          period: "2023 - Present"
        },
        mahle: {
          title: "Mahle Group",
          position: "Electrical Maintenance",
          skills: {
            preventiveMaintenance: "Preventive Maintenance",
            electricalDiagnosis: "Electrical Diagnosis",
            electricalPlans: "Electrical Plans",
            instrumentation: "Instrumentation"
          },
          period: "2021 - 2023"
        }
      }
    },
    // Skills section
    skills: {
      title: "Technical Skills",
      subtitle: "Proficiency level in automation and software",
      automationControl: "Automation and Control",
      softwareProgramming: "Software and Programming",
      softSkills: {
        title: "Soft Skills",
        projectManagement: "Project Management",
        leadership: "Leadership",
        teamwork: "Teamwork",
        analyticalThinking: "Analytical Thinking",
        costEstimation: "Cost Estimation"
      },
      automationSkills: {
        plcProgramming: "PLC Programming",
        industrialNetworks: "Industrial Networks",
        drives: "Drives and Inverters",
        scada: "SCADA/HMI",
        electricalPlans: "Electrical Plans",
        processControl: "Process Control",
        instrumentation: "Instrumentation"
      },
      softwareSkills: {
        tiaPortal: "TIA Portal"
      }
    },
    // Projects section
    projects: {
      title: "Featured Projects",
      subtitle: "Implemented industrial automation solutions",
      items: {
        ammonia: {
          title: "Ammonia Condensers Automation",
          description: "Distributed control system for efficient condenser management",
          technologies: {
            siemens: "Siemens S7-1200",
            scada: "SCADA Weintek",
            ethernet: "Ethernet IP",
            pid: "PID Control"
          }
        },
        dryers: {
          title: "Industrial Dryers Automation",
          description: "Automated drying process control for industrial products",
          technologies: {
            plc: "PLC Fatek",
            hmi: "HMI Weintek",
            sensors: "PT100 Sensors",
            humidity: "Humidity Control"
          }
        },
        coldRooms: {
          title: "Cold Rooms Automation",
          description: "Comprehensive control system for industrial refrigeration chambers",
          technologies: {
            plc: "Siemens PLC",
            scada: "SCADA/HMI",
            temperature: "Temperature Control",
            monitoring: "Remote Monitoring"
          }
        },
        waterDoser: {
          title: "Water Doser Automation",
          description: "Precise dosing system for food industry",
          technologies: {
            plc: "PLC Fatek",
            sensors: "Flow Sensors",
            automation: "Automatic Control",
            hmi: "HMI Panel"
          }
        },
        mesSystem: {
          title: "Integrated MES System - Manufacturing Execution System",
          description: "Centralized platform that integrates and monitors all industrial automation equipment",
          technologies: {
            integration: "PLC Integration",
            monitoring: "Real-time Monitoring",
            database: "Centralized Database",
            reporting: "Automatic Reports"
          }
        }
      }
    },
    // Contact section
    contact: {
      title: "Contact",
      subtitle: "Interested in collaborating or have a project in mind? Let's talk",
      sendMessage: "Send me a message",
      name: "Name",
      email: "Email",
      message: "Message",
      sendButton: "Send Message",
      contactInfo: "Contact Information",
      location: "Location",
      portfolio: "Portfolio",
      whatsapp: "WhatsApp",
      whatsappLabel: "Contact me directly on WhatsApp"
    },
    // Footer
    footer: {
      name: "Nicolas Antonio Coria",
      title: "Bachelor's Degree in Automation and Robotics",
      copyright: "© 2026 Nicolas Coria. All rights reserved."
    }
  }
};

// Función para obtener traducciones
export function getTranslation(language, key) {
  const keys = key.split('.');
  let value = translations[language];

  for (const k of keys) {
    value = value?.[k];
  }

  return value || key;
}

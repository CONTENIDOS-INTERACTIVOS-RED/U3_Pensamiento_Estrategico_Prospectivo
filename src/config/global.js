export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad:
      'Aplicaciones del pensamiento estratégico y prospectivo en diversas áreas ',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Pensamiento estratégico en la gestión organizacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición y elementos claves del pensamiento estratégico',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Importancia del pensamiento estratégico en la toma de decisiones organizacionales',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Innovación y desarrollo tecnológico desde una perspectiva prospectiva',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Concepto de innovación y su relación con la prospectiva',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tendencias tecnológicas emergentes y su impacto futuro',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Herramientas prospectivas para anticipar avances tecnológicos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Aplicación de la prospectiva en políticas públicas y desarrollo social',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Estrategias sostenibles para el desarrollo a largo plazo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo:
              'Concepto y principios de sostenibilidad en el pensamiento estratégico',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo:
              'Planificación a largo plazo en sectores claves (ambiental, económico y social)',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo:
              'Retos y beneficios de la sostenibilidad en la planificación estratégica',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Abad, F. (Coord.). (2014). Dentro de 15 años: ¿Escenarios improbables?: (1 ed.). LID Editorial España.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/271461',
    },
    {
      referencia:
        'Bas Amorós, E. (2013). Prospectiva e innovación (Vol. 1: visiones): ( ed.). Plaza y Valdés (España).',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/42001',
    },
    {
      referencia:
        'Boada, A. J. & Cardona Montoya, G. Y. M. (2020). La prospectiva: más allá de las proyecciones: (1 ed.). Fondo Editorial CEIPA.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/217714',
    },
    {
      referencia:
        'Chávez Martínez, G. (2003). El pensamiento del estratega: ( ed.). Plaza y Valdés (México).',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/75568',
    },
    {
      referencia:
        'López Fernández, R. (2016). Expertos y prospectiva en la investigación pedagógica: ( ed.). Editorial Universo Sur.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/71774',
    },
    {
      referencia:
        'López Segrera, F. Luis Grosso, J. (Coord.) & José Mojica, F. (Coord.). (2004). América Latina y el Caribe en el siglo XXI: perspectiva y prospectiva de la globalización: ( ed.). Editorial Miguel Ángel Porrúa.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/75157',
    },
    {
      referencia:
        'Perilla Maluche, R. B. Orjuela Garzón, W. A. & Parra Moreno, C. (2020). Análisis de futuro: algunos métodos alternativos a la "caja de herramientas" de la prospectiva francesa: (1 ed.). Sello Editorial Universidad del Tolima.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/228417',
    },
    {
      referencia:
        'Sánchez González, M. (2018). Gestión estratégica, innovación y prospectiva en comunicación: bases, técnicas y casos prácticos: ( ed.). Editorial UOC.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/59107',
    },
    {
      referencia:
        'Saldaña Almazán, J. & Niño Gutiérrez, N. S. (2017). Strategic planning at UAGro: ( ed.). Ediciones y Gráficos Eón.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/120296',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de escenarios',
      significado:
        'herramienta prospectiva que permite la creación de futuros alternativos para anticiparse a posibles cambios y adaptar la estrategia de la organización a diferentes contextos.',
    },
    {
      termino: 'Desarrollo social',
      significado:
        'proceso de mejora de la calidad de vida de una comunidad, enfocándose en aspectos como la educación, la salud y el bienestar social.',
    },
    {
      termino: 'Innovación',
      significado:
        'introducción de ideas, productos o procesos nuevos que generan mejoras y aumentan la competitividad de una organización',
    },
    {
      termino: 'Pensamiento estratégico',
      significado:
        'proceso mental enfocado en la visión a largo plazo de una organización, que permite anticiparse a cambios y desarrollar planes flexibles y adaptativos para alcanzar objetivos',
    },
    {
      termino: 'Planificación estratégica',
      significado:
        'proceso de diseño de objetivos y estrategias a largo plazo para guiar las acciones de una organización hacia un futuro deseado.',
    },
    {
      termino: 'Prospectiva',
      significado:
        'enfoque estratégico que permite analizar múltiples futuros posibles para anticiparse a cambios y tomar decisiones informadas.',
    },
    {
      termino: 'Resiliencia organizacional',
      significado:
        'capacidad de una organización para adaptarse y responder eficazmente a cambios y crisis, asegurando su continuidad y sostenibilidad en el tiempo.',
    },
    {
      termino: 'Responsabilidad social corporativa',
      significado:
        'compromiso de una organización para contribuir al bienestar social y ambiental, mejorando las condiciones de las comunidades en las que opera.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'concepto que busca el uso responsable de los recursos para asegurar su disponibilidad para las futuras generaciones, integrando aspectos económicos, sociales y ambientales',
    },
    {
      termino: 'Tendencias tecnológicas',
      significado:
        'desarrollos o avances en tecnología que pueden transformar sectores completos, generando cambios significativos en la sociedad y el mercado.',
    },
  ],
}

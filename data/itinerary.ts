export type Stop = {
  time: string;
  name: string;
  place: string;
  type: string;
  description: string;
  whatYouSee: string;
  whyGo: string;
  highlights: string[];
  maps: string;
  photos: string;
};

export type DayPlan = {
  id: string;
  label: string;
  title: string;
  zone: string;
  intro: string;
  stops: Stop[];
};

export const itinerary: DayPlan[] = [
      {
    id: "dia-1",
    label: "Día 1",
    title: "Norte verde + Santa Cruz",
    zone: "Norte y capital",
    intro:
      "Bosque, baño, paseo urbano y final relajado para empezar viendo la cara más verde y la más urbana de la isla.",
    stops: [
      {
        time: "08:30 – 11:30",
        name: "Los Tilos — Ruta del Espigón Atravesado + Cascada",
        place: "",
        type: "",
        description:
          "Llegaremos al centro de visitantes de Los Tilos, donde dejaremos el coche. Antes de empezar la ruta, nos acercaremos a ver la cascada, que está a pocos minutos andando. Es una parada rápida pero muy bonita, escondida entre el bosque. Después comenzaremos la ruta del Espigón Atravesado de unos 5 km en total, un sendero que se adentra en la laurisilva.",
        whatYouSee:
          "Aquí lo impresionante no es un punto concreto, sino todo el camino: vegetación cerrada, humedad y la sensación de estar en una selva jurásica que no parece Canarias. La sensación de estar en un sitio totalmente distinto al resto de la isla, con verde intenso, olores y humedad por todas partes.",
        whyGo:
          "Es una de las experiencias más especiales del viaje porque no se parece a nada del resto de la isla. No es solo la cascada, es el recorrido entero. Iremos subiendo tranquilamente con idea de llegar hasta el mirador del Espigón Atravesado si vamos bien de tiempo.",
        highlights: [
          "Si nos entretenemos demasiado al principio, nos quedaremos sin tiempo para la ruta completa",
          "Mejor avanzar primero y disfrutar más a la vuelta",
          "Zapatillas cómodas (no hace falta bota técnica, pero tampoco iría con unos tenis de paseo normales)",
          "Agua",
          "Ropa en capas: ligera, pero con algo de abrigo tipo sudadera o chaqueta fina"
        ],
        maps: "https://www.google.com/maps/search/?api=1&query=Los+Tilos+La+Palma",
        photos: "https://www.google.com/search?tbm=isch&q=Los+Tilos+La+Palma"
      },
      {
        time: "12:00 – 13:15",
        name: "Charco Azul",
        place: "",
        type: "",
        description:
          "Después de la caminata, toca recompensa: baño en piscinas naturales. Aquí el contraste es brutal: roca volcánica negra y agua transparente. Nos vendrá perfecto para relajarnos, aunque probablemente nos quedaremos con ganas de más tiempo.",
        whatYouSee:
          "Piscinas naturales entre roca volcánica negra, agua transparente y un entorno muy bonito para parar y desconectar.",
        whyGo:
          "Es el momento perfecto para relajarnos después de la ruta y hacer una parada muy chula antes de seguir con el día.",
        highlights: [
          "Trampa típica: pensamos 'baño rápido' y se nos va más de una hora",
          "Bañador",
          "Toalla",
          "Cholas",
          "Tenemos cerca las Piscinas de La Fajana por si preferís ir a esas en vez de a estas"
        ],
        maps: "https://www.google.com/maps/search/?api=1&query=Charco+Azul+La+Palma",
        photos: "https://www.google.com/search?tbm=isch&q=Charco+Azul+La+Palma"
      },
      {
        time: "13:15 – 13:35",
        name: "San Andrés (opcional si vamos bien de tiempo)",
        place: "",
        type: "",
        description:
          "Si vamos bien de tiempo, podemos hacer una parada rápida por este pueblito. Casas tradicionales, ambiente tranquilo y una de las plazas más bonitas de la isla, pero sin liarnos demasiado.",
        whatYouSee:
          "Un pueblo pequeño con mucho encanto, arquitectura tradicional y ambiente relajado.",
        whyGo:
          "Es una parada breve y agradable que suma mucho si el día va bien de tiempo, pero no pasa nada si la saltamos.",
        highlights: [
          "Si vamos justos, lo saltamos sin problema"
        ],
        maps: "https://www.google.com/maps/search/?api=1&query=San+Andres+La+Palma",
        photos: "https://www.google.com/search?tbm=isch&q=San+Andres+La+Palma"
      },
      {
        time: "14:30 – 16:00",
        name: "Chipi Chipi",
        place: "",
        type: "",
        description:
          "Aquí vamos a comer en un sitio muy típico de la isla, con comida canaria y ambiente local.",
        whatYouSee:
          "Comida canaria, ambiente local y uno de esos sitios que forman parte de la experiencia del viaje.",
        whyGo:
          "No es solo una parada para comer, también es parte del plan y del ambiente de la isla.",
        highlights: [
          "El servicio puede ser lento"
        ],
        maps: "https://www.google.com/maps/search/?api=1&query=Chipi+Chipi+La+Palma",
        photos: "https://www.google.com/search?tbm=isch&q=Chipi+Chipi+La+Palma"
      },
      {
        time: "16:30 – 20:30",
        name: "Santa Cruz de La Palma",
        place: "",
        type: "",
        description:
          "Por la tarde vamos a pasear por la capital, que tiene muchísimo encanto. Será un paseo tranquilo, sin prisas, dejándonos llevar.",
        whatYouSee:
          "Los famosos balcones de colores, el Castillo de Santa Catalina, el Castillo de la Virgen, el Barco de la Virgen, la Calle Real y la Plaza de España.",
        whyGo:
          "Es una forma muy bonita de ver la parte más urbana y con más encanto de la isla, paseando sin prisa y disfrutando del ambiente.",
        highlights: [
          "Trampa: entre fotos, paseo y parar aquí y allá, el tiempo vuela"
        ],
        maps: "https://www.google.com/maps/search/?api=1&query=Santa+Cruz+de+La+Palma",
        photos: "https://www.google.com/search?tbm=isch&q=Santa+Cruz+de+La+Palma+balcones+castillo+plaza"
      },
      {
        time: "21:00 – 22:30",
        name: "Cena en El Puertito",
        place: "",
        type: "",
        description:
          "Cena en El Puertito para cerrar el día con calma.",
        whatYouSee:
          "Ambiente tranquilo para terminar la jornada sin prisas.",
        whyGo:
          "Es un cierre relajado después de un día muy completo.",
        highlights: [],
        maps: "https://www.google.com/maps/search/?api=1&query=El+Puertito+La+Palma",
        photos: "https://www.google.com/search?tbm=isch&q=El+Puertito+La+Palma"
      },
      {
        time: "23:00",
        name: "Paseo por Los Cancajos",
        place: "",
        type: "",
        description:
          "Terminamos el día relajados, después de haber visto la cara más verde y la más urbana de la isla.",
        whatYouSee:
          "Paseo costero tranquilo por la noche.",
        whyGo:
          "Es un final perfecto para bajar revoluciones y cerrar bien el primer día.",
        highlights: [],
        maps: "https://www.google.com/maps/search/?api=1&query=Los+Cancajos+La+Palma",
        photos: "https://www.google.com/search?tbm=isch&q=Los+Cancajos+La+Palma"
      }
    ]
  },
  {
    id: "dia-2",
    label: "Día 2",
    title: "Volcán, caldera y atardecer",
zone: "Centro y Sur volcánico",
intro:
  "Volcanes por dentro y por fuera, caldera espectacular y atardecer frente al mar para cerrar el día.",
   stops: [
  {
    time: "09:30 – 13:00",
    name: "Cueva de las Palomas",
    place: "",
    type: "",
    description:
      "Este día lo empezaremos metiéndonos literalmente dentro de un volcán. Llegaremos pronto porque las entradas se agotan super rápido: 09:30 compraremos las entradas, 10:00 abre el centro de interpretación, 11:00 visita al primer tubo volcánico y 12:00 al segundo.",
    whatYouSee:
      "Caminaremos por túneles formados por lava, viendo cómo se solidificó por dentro. Estar dentro de un tubo volcánico real y ver las formas de la lava es una experiencia única.",
    whyGo:
      "Es una de las experiencias más diferentes del viaje, porque no solo ves el volcán: te metes dentro.",
    highlights: [
      "Llegar temprano o puedes quedarte sin entradas",
      "Cuesta unos 12€ por persona",
      "Zapatillas cerradas",
      "Algo de abrigo (dentro refresca)"
    ],
    maps: "https://www.google.com/maps/search/?api=1&query=Cueva+de+las+Palomas+La+Palma",
    photos: "https://www.google.com/search?tbm=isch&q=Cueva+de+las+Palomas+La+Palma"
  },

  {
    time: "13:10 – 13:40",
    name: "Plaza de La Glorieta",
    place: "",
    type: "",
    description:
      "Parada rápida en una plaza artística llena de mosaicos de colores con rollo Gaudí. Es curiosa, diferente y perfecta para fotos.",
    whatYouSee:
      "Formas orgánicas, bancos ondulados y colores muy llamativos en medio del paisaje volcánico.",
    whyGo:
      "Es una parada corta pero muy vistosa que rompe completamente con lo anterior.",
    highlights: [
      "Parada rápida",
      "Muy fotogénica",
      "No entretenerse demasiado"
    ],
    maps: "https://www.google.com/maps/search/?api=1&query=Plaza+de+La+Glorieta+La+Palma",
    photos: "https://www.google.com/search?tbm=isch&q=Plaza+de+La+Glorieta+La+Palma"
  },

  {
    time: "14:00 – 15:15",
    name: "Comida (El Paso / Los Llanos)",
    place: "",
    type: "",
    description:
      "Después de la mañana volcánica, paramos a comer tranquilos antes de seguir.",
    whatYouSee:
      "Ambiente relajado y pausa necesaria tras la mañana intensa.",
    whyGo:
      "Para recargar energía antes de la tarde.",
    highlights: [
      "Comer sin prisa",
      "Elegir según apetencia"
    ],
    maps: "",
    photos: ""
  },

  {
    time: "15:30 – 16:15",
    name: "Volcán Tajogaite (erupcicón del 2021)",
    place: "",
    type: "",
    description:
      "Aquí vamos a ver el impacto real de la última erupción volcánica. El paisaje cambia completamente: lava reciente y zonas sepultadas.",
    whatYouSee:
      "Coladas recientes, terreno negro y una geografía totalmente nueva.",
    whyGo:
      "Porque es uno de los momentos más impactantes del viaje.",
    highlights: [
      'Elegir 2-3 "miradores" (más que miradores son lugares a pie de carretera accesibles con el coche)',
      "Muy impresionante",
      "Evitar parar en todos 😄",
      "Hay rutas guiadas que te llevan hasta el cráter o hasta casi el cráter, si queréis hacer alguna de estas habría que mirar cuánto duran y cómo reorganizar el itinerario de los días."
    ],
    maps: "https://www.google.com/maps/search/?api=1&query=Tajogaite+La+Palma",
    photos: "https://www.google.com/search?tbm=isch&q=Tajogaite+La+Palma"
  },

  {
    time: "16:45 – 17:15",
    name: "Mirador de La Cumbrecita",
    place: "",
    type: "",
    description:
      "Subimos a uno de los miradores más espectaculares de la isla para ver el interior de la Caldera de Taburiente.",
    whatYouSee:
      "Paredes gigantes, colores de la roca y un paisaje brutal.",
    whyGo:
      "Es una de las vistas más memorables de todo el viaje.",
    highlights: [
      "Reservar parking obligatorio (online)",
      "Con 30 min es suficiente",
      "Muy fácil acceso"
    ],
    maps: "https://www.google.com/maps/search/?api=1&query=La+Cumbrecita+La+Palma",
    photos: "https://www.google.com/search?tbm=isch&q=La+Cumbrecita+La+Palma"
  },

  {
    time: "18:30 – 20:30",
    name: "Playa de la Zamora",
    place: "",
    type: "",
    description:
      "Terminamos el día en el sur con baño, merienda-cena y atardecer junto al mar.",
    whatYouSee:
      "Costa volcánica, mar abierto y luz dorada al caer el sol.",
    whyGo:
      "Es uno de los mejores momentos del día, muy relajado.",
    highlights: [
      "Ideal para atardecer",
      "Ambiente tranquilo",
      "Probablemente queramos quedarnos más 😄"
    ],
    maps: "https://www.google.com/maps/search/?api=1&query=Playa+de+la+Zamora+La+Palma",
    photos: "https://www.google.com/search?tbm=isch&q=Playa+de+la+Zamora+La+Palma"
  },

  {
    time: "21:15 – 22:15",
    name: "Vuelta a Los Cancajos",
    place: "",
    type: "",
    description:
      "Volvemos para ducharnos y cambiarnos antes de salir otra vez.",
    whatYouSee: "Momento de pausa.",
    whyGo: "Necesario antes de la noche.",
    highlights: [],
    maps: "",
    photos: ""
  },

  {
    time: "22:30 – 00:00",
    name: "La Bodeguita del Medio",
    place: "",
    type: "",
    description:
      "Plan de noche con mojito y ambiente relajado. (Así lo quiere Cris😂)",
    whatYouSee:
      "Ambiente nocturno tranquilo.",
    whyGo:
      "Buen cierre del día.",
    highlights: [
      "Tengo la duda de si cuando lo reabrieron, después del incendio de 2017, se quedó solo como restaurante"
    ],
    maps: "",
    photos: ""
  }
]
  },
  {
    id: "dia-3",
    label: "Día 3",
    title: "El Techo de la Isla y los Volcanes del Sur",
zone: "Cumbre y Sur volcánico",
intro:
  "Altura, volcanes, mar y despedida perfecta recorriendo el sur de la isla de principio a fin.",
   stops: [
  {
    time: "08:30 – 10:30",
    name: "Roque de los Muchachos",
    place: "",
    type: "",
    description:
      "Subimos al punto más alto de la isla. Aquí arriba veremos el famoso mar de nubes y unas vistas espectaculares de la caldera.",
    whatYouSee:
      "Mar de nubes, cresterías y una sensación brutal de altura. En días despejados se ven Tenerife, La Gomera y El Hierro.",
    whyGo:
      "Es una de las experiencias paisajísticas más potentes del viaje.",
    highlights: [
      "Muchas curvas en la subida",
      "Si no pillamos un día despejado, no veremos nada, es cuestión de arriesgarse",
      "No quedarse demasiado tiempo",
      "Llevar algo de abrigo"
    ],
    maps: "https://www.google.com/maps/search/?api=1&query=Roque+de+los+Muchachos+La+Palma",
    photos: "https://www.google.com/search?tbm=isch&q=Roque+de+los+Muchachos+La+Palma"
  },

  {
    time: "11:15 – 11:30",
    name: "Mirador del Time",
    place: "",
    type: "",
    description:
      "Parada rápida para ver el Valle de Aridane desde arriba.",
    whatYouSee:
      "Plataneras, barrancos y una vista abierta del valle.",
    whyGo:
      "Porque en pocos minutos tienes una panorámica espectacular.",
    highlights: [
      "Parada corta",
      "Ideal para fotos",
      "Seguimos rápido"
    ],
    maps: "https://www.google.com/maps/search/?api=1&query=Mirador+del+Time+La+Palma",
    photos: "https://www.google.com/search?tbm=isch&q=Mirador+del+Time+La+Palma"
  },

  {
    time: "13:00 – 14:30",
    name: "Comida en Puerto de Tazacorte",
    place: "",
    type: "",
    description:
      "Después de la mañana de cumbre, paramos a comer sin prisa junto al mar.",
    whatYouSee:
      "Playa, puerto y ambiente relajado.",
    whyGo:
      "Para recargar energía antes del sur.",
    highlights: [
      "Comer sin prisa",
      "Buen ambiente",
      "Es posible que, si vamos bien de tiempo, podamos comer antes para ir más tranquilos por la tarde"
    ],
    maps: "https://www.google.com/maps/search/?api=1&query=Puerto+de+Tazacorte+La+Palma",
    photos: "https://www.google.com/search?tbm=isch&q=Puerto+de+Tazacorte+La+Palma"
  },

  {
    time: "15:30 – 16:15",
    name: "Volcán de San Antonio",
    place: "",
    type: "",
    description:
      "Caminamos por el borde del cráter con vistas al mar.",
    whatYouSee:
      "Cráter volcánico, laderas negras y contraste con el océano.",
    whyGo:
      "Porque es una forma muy visual de entender el volcán.",
    highlights: [
      "Entrada aprox 5€",
      "Centro de interpretación con simulador de terremotos (muy curioso)",
      "Curiosidad: dentro del cráter crecen pinos canarios, algo poco habitual en volcanes más recientes.",
      "Ruta corta",
      "Llevar gorra"
    ],
    maps: "https://www.google.com/maps/search/?api=1&query=Volcan+de+San+Antonio+La+Palma",
    photos: "https://www.google.com/search?tbm=isch&q=Volcan+de+San+Antonio+La+Palma"
  },

  {
    time: "16:30 – 17:15",
    name: "Playa de Echentive",
    place: "",
    type: "",
    description:
      "Baño en charcos volcánicos más salvajes y menos preparados.",
    whatYouSee:
      "Piscinas naturales entre roca volcánica.",
    whyGo:
      "Perfecto para el último chapuzón del viaje.",
    highlights: [
      "Vigilar el tiempo para poder ver lo que nos falta",
      "Muy salvaje",
      "Último baño"
    ],
    maps: "https://www.google.com/maps/search/?api=1&query=Playa+de+Echentive+La+Palma",
    photos: "https://www.google.com/search?tbm=isch&q=Playa+de+Echentive+La+Palma"
  },

  {
    time: "17:20 – 17:40",
    name: "Salinas de Fuencaliente",
    place: "",
    type: "",
    description:
      "Parada rápida en las salinas más fotogénicas de la isla.",
    whatYouSee:
      "Salinas con tonos rosados y geometría espectacular. Depende de hasta donde podamos llegar hay fotos muy chulas donde se ve también el faro de Fuencaliente.",
    whyGo:
      "Muy visual y perfecta para fotos.",
    highlights: [
      "Muy fotogénico",
      "Parada corta"
    ],
    maps: "https://www.google.com/maps/search/?api=1&query=Salinas+de+Fuencaliente+La+Palma",
    photos: "https://www.google.com/search?tbm=isch&q=Salinas+de+Fuencaliente+La+Palma"
  },

  {
    time: "17:45 – 18:00",
    name: "Faro de Fuencaliente",
    place: "",
    type: "",
    description:
      "Última parada del viaje con mar, volcán y faro.",
    whatYouSee:
      "Paisaje volcánico, océano y el faro.",
    whyGo:
      "Cierre perfecto del viaje.",
    highlights: [
      "Parada final",
      "Muy visual"
    ],
    maps: "https://www.google.com/maps/search/?api=1&query=Faro+de+Fuencaliente+La+Palma",
    photos: "https://www.google.com/search?tbm=isch&q=Faro+de+Fuencaliente+La+Palma"
  }
]
  }
];

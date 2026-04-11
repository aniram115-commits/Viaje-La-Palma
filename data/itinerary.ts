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
        name: "Los Tilos — Espigón Atravesado + Cascada",
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
          "Es el momento perfecto para relajarnos después de la ruta y hacer una parada muy disfrutona antes de seguir con el día.",
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
    title: "Recuerdos de Infancia y el Gran Cráter",
    zone: "Capital y Centro",
    intro:
      "Santa Cruz emocional, buena comida y una tarde con una de las grandes vistas de la isla.",
    stops: [
      {
        time: "09:30 – 12:30",
        name: "Ruta de la Nostalgia por Santa Cruz",
        place: "Santa Cruz de La Palma",
        type: "Ciudad",
        description:
          "Recorrido sentimental por rincones históricos y recuerdos de infancia en la capital.",
        whatYouSee:
          "Plaza de España, balcones marítimos, castillos, barco de la Virgen y arquitectura tradicional.",
        whyGo:
          "Porque mezcla memoria personal con la parte más monumental de Santa Cruz.",
        highlights: [
          "Ideal para pasear sin prisa",
          "Muchos detalles bonitos",
          "Muy buena ruta urbana"
        ],
        maps:
          "https://www.google.com/maps/search/?api=1&query=Plaza+de+Espana+Santa+Cruz+de+La+Palma",
        photos:
          "https://www.google.com/search?tbm=isch&q=Santa+Cruz+de+La+Palma+balcones+maritimos+castillos"
      },
      {
        time: "13:30 – 15:30",
        name: "Almuerzo en Chipi-Chipi",
        place: "Santa Cruz de La Palma",
        type: "Comida",
        description:
          "Parada clásica para comer bien y disfrutar de un sitio con mucha personalidad.",
        whatYouSee:
          "Ambiente local, espacios singulares y platos generosos.",
        whyGo:
          "Porque es de esos sitios que acaban siendo parte del recuerdo del viaje.",
        highlights: [
          "Conviene reservar",
          "Comida abundante",
          "Perfecto para sobremesa larga"
        ],
        maps:
          "https://www.google.com/maps/search/?api=1&query=Chipi+Chipi+Santa+Cruz+de+La+Palma",
        photos:
          "https://www.google.com/search?tbm=isch&q=Chipi+Chipi+Santa+Cruz+de+La+Palma"
      },
      {
        time: "16:00 – 17:30",
        name: "La Cumbrecita",
        place: "El Paso",
        type: "Mirador",
        description:
          "Uno de los accesos más cómodos para asomarse al interior de la Caldera de Taburiente.",
        whatYouSee:
          "Paredes gigantes, pinar canario y un anfiteatro natural impresionante.",
        whyGo:
          "Porque es una de las vistas más memorables de toda La Palma.",
        highlights: [
          "Reserva de parking imprescindible",
          "Paseo fácil",
          "Llevad agua"
        ],
        maps:
          "https://www.google.com/maps/search/?api=1&query=Mirador+de+La+Cumbrecita+La+Palma",
        photos: "https://www.google.com/search?tbm=isch&q=La+Cumbrecita+La+Palma"
      },
      {
        time: "18:30 – 20:30",
        name: "Puerto de Tazacorte",
        place: "Tazacorte",
        type: "Atardecer",
        description:
          "Puerto colorido de la costa oeste para disfrutar del atardecer.",
        whatYouSee:
          "Casas de colores, muelle, playa y luz cálida a última hora.",
        whyGo:
          "Porque es una postal perfecta para cerrar la tarde.",
        highlights: [
          "Muy buena hora para fotos",
          "Ambiente relajado",
          "Ideal para paseo antes de cenar"
        ],
        maps:
          "https://www.google.com/maps/search/?api=1&query=Puerto+de+Tazacorte+La+Palma",
        photos:
          "https://www.google.com/search?tbm=isch&q=Puerto+de+Tazacorte+La+Palma"
      },
      {
        time: "21:00",
        name: "Cena en El Puertito",
        place: "Santa Cruz de La Palma",
        type: "Cena",
        description:
          "Final marinero con pescado y ambiente portuario en Santa Cruz.",
        whatYouSee:
          "Muelle, mesas tranquilas y la ciudad iluminada.",
        whyGo:
          "Porque cierra el día con algo sencillo, rico y muy agradable.",
        highlights: [
          "Mejor reservar si vais a hora fuerte",
          "Ideal para pescado",
          "Cena sin prisas"
        ],
        maps:
          "https://www.google.com/maps/search/?api=1&query=El+Puertito+Santa+Cruz+de+La+Palma",
        photos:
          "https://www.google.com/search?tbm=isch&q=El+Puertito+Santa+Cruz+de+La+Palma"
      }
    ]
  },
  {
    id: "dia-3",
    label: "Día 3",
    title: "El Techo de la Isla y los Volcanes del Sur",
    zone: "Cumbres y Fuencaliente",
    intro:
      "Altura, cráteres, salinas y baño de despedida para terminar el viaje por todo lo alto.",
    stops: [
      {
        time: "09:30 – 11:30",
        name: "Roque de los Muchachos",
        place: "Garafía",
        type: "Cumbre",
        description:
          "El punto más alto de la isla y uno de los grandes miradores de La Palma.",
        whatYouSee:
          "Mar de nubes, cresterías, observatorios y una sensación brutal de altura.",
        whyGo:
          "Porque es una de las experiencias paisajísticas más potentes del viaje.",
        highlights: [
          "Llevad algo de abrigo",
          "Carretera con curvas",
          "Parada imprescindible"
        ],
        maps:
          "https://www.google.com/maps/search/?api=1&query=Roque+de+los+Muchachos+La+Palma",
        photos:
          "https://www.google.com/search?tbm=isch&q=Roque+de+los+Muchachos+La+Palma"
      },
      {
        time: "12:00 – 13:00",
        name: "Puntagorda / Mirador de Izcagua",
        place: "Puntagorda",
        type: "Parada",
        description:
          "Parada breve para estirar las piernas y sumar otra perspectiva del noroeste.",
        whatYouSee:
          "Barrancos, vegetación y una pasarela-mirador suspendida.",
        whyGo:
          "Porque encaja genial como pausa escénica entre trayectos largos.",
        highlights: [
          "Flexible según el ritmo",
          "Muy bien para fotos rápidas",
          "Añade variedad al recorrido"
        ],
        maps:
          "https://www.google.com/maps/search/?api=1&query=Mirador+de+Izcagua+Puntagorda+La+Palma",
        photos:
          "https://www.google.com/search?tbm=isch&q=Mirador+de+Izcagua+Puntagorda+La+Palma"
      },
      {
        time: "13:30 – 14:15",
        name: "Miradores de Tajogaite",
        place: "Zona de El Paso / Fuencaliente",
        type: "Volcán",
        description:
          "Parada para contemplar el paisaje reciente modelado por la erupción.",
        whatYouSee:
          "Coladas, tonos negros y rojizos y una geografía nueva e impactante.",
        whyGo:
          "Porque enseña la parte más reciente y cambiante de La Palma.",
        highlights: [
          "Muy impresionante aunque la visita sea corta",
          "Paisaje único",
          "Muy visual"
        ],
        maps:
          "https://www.google.com/maps/search/?api=1&query=Mirador+de+Tajogaite+La+Palma",
        photos:
          "https://www.google.com/search?tbm=isch&q=Miradores+de+Tajogaite+La+Palma"
      },
      {
        time: "14:30 – 16:00",
        name: "Comida en Kiosko La Zamora",
        place: "Fuencaliente",
        type: "Comida",
        description:
          "Almuerzo frente al mar antes de la gran tarde del sur.",
        whatYouSee:
          "Costa abierta, Atlántico y una pausa luminosa frente al agua.",
        whyGo:
          "Porque sienta genial antes del tramo final del itinerario.",
        highlights: [
          "Ideal con vistas",
          "Mejor ir con margen",
          "Muy buena pausa"
        ],
        maps:
          "https://www.google.com/maps/search/?api=1&query=Kiosko+La+Zamora+Fuencaliente+La+Palma",
        photos:
          "https://www.google.com/search?tbm=isch&q=Kiosko+La+Zamora+Fuencaliente+La+Palma"
      },
      {
        time: "16:30 – 18:30",
        name: "Ruta de Volcanes y Sal",
        place: "Fuencaliente",
        type: "Ruta",
        description:
          "Tarde muy completa entre el Volcán de San Antonio, el faro, las salinas y el baño final.",
        whatYouSee:
          "Crater volcánico, laderas negras, faro blanco, salinas geométricas y costa salvaje.",
        whyGo:
          "Porque resume de forma espectacular la personalidad volcánica del sur.",
        highlights: [
          "Protección solar y agua",
          "Puede ajustarse según cansancio",
          "Muy variado y muy bonito"
        ],
        maps:
          "https://www.google.com/maps/search/?api=1&query=Volcan+de+San+Antonio+Faro+y+Salinas+de+Fuencaliente+La+Palma",
        photos:
          "https://www.google.com/search?tbm=isch&q=Volcan+de+San+Antonio+Salinas+de+Fuencaliente+Playa+de+Echentive+La+Palma"
      },
      {
        time: "19:00",
        name: "Despedida en Kiosko Bajamar",
        place: "Este de la isla",
        type: "Despedida",
        description:
          "Últimas tapas y cierre final del viaje en un plan sencillo y emotivo.",
        whatYouSee:
          "Ambiente costero relajado y sensación de último brindis.",
        whyGo:
          "Porque es un final fácil, rico y bonito para comentar todo el viaje.",
        highlights: [
          "Sin complicarse",
          "Buen cierre",
          "Plan tranquilo"
        ],
        maps:
          "https://www.google.com/maps/search/?api=1&query=Kiosko+Bajamar+La+Palma",
        photos: "https://www.google.com/search?tbm=isch&q=Kiosko+Bajamar+La+Palma"
      }
    ]
  }
];

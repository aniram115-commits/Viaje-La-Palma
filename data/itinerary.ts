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
    title: "El Bosque, el Baño y el Arte de Mosaicos",
    zone: "Noreste y Noroeste",
    intro:
      "Laurisilva, piscinas naturales, miradores y una tarde entre mosaicos y volcanes.",
    stops: [
      {
        time: "09:00 – 11:30",
        name: "Los Tilos: Cascada y ruta del Espigón Atravesado",
        place: "San Andrés y Sauces",
        type: "Naturaleza",
        description:
          "Bosque húmedo y frondoso de laurisilva, con sendero verde, ambiente fresco y sensación de selva atlántica.",
        whatYouSee:
          "Musgos, helechos gigantes, paredes húmedas, barrancos y una vegetación espectacular.",
        whyGo:
          "Porque es una de las estampas más especiales de La Palma y una forma preciosa de empezar el viaje.",
        highlights: [
          "Ideal para ir temprano",
          "Muy fotogénico",
          "Llevad calzado que no resbale"
        ],
        maps: "https://www.google.com/maps/search/?api=1&query=Los+Tilos+La+Palma",
        photos: "https://www.google.com/search?tbm=isch&q=Los+Tilos+La+Palma"
      },
      {
        time: "12:00 – 13:30",
        name: "Charco Azul o La Fajana",
        place: "San Andrés y Sauces / Barlovento",
        type: "Baño",
        description:
          "Piscinas naturales perfectas para refrescarse y disfrutar del contraste entre roca volcánica y mar.",
        whatYouSee:
          "Agua azul intensa, plataformas junto al Atlántico y roca negra muy característica.",
        whyGo:
          "Porque después del bosque apetece muchísimo un baño en un sitio tan bonito.",
        highlights: [
          "Comprobad el estado del mar",
          "Charco Azul es más cómodo",
          "La Fajana tiene un punto más salvaje"
        ],
        maps: "https://www.google.com/maps/search/?api=1&query=Charco+Azul+La+Palma",
        photos:
          "https://www.google.com/search?tbm=isch&q=Charco+Azul+La+Palma+o+La+Fajana+Barlovento"
      },
      {
        time: "13:30 – 15:00",
        name: "Almuerzo en San Andrés",
        place: "San Andrés",
        type: "Comida",
        description:
          "Parada tranquila en uno de los pueblos con más encanto del norte.",
        whatYouSee:
          "Casas tradicionales, calles con calma y mucho sabor local.",
        whyGo:
          "Porque es el momento perfecto para comer sin prisa y disfrutar del ambiente.",
        highlights: [
          "Perfecto para sobremesa",
          "Mejor reservar en fin de semana",
          "Buen punto para bajar el ritmo"
        ],
        maps: "https://www.google.com/maps/search/?api=1&query=San+Andres+La+Palma",
        photos: "https://www.google.com/search?tbm=isch&q=San+Andres+La+Palma"
      },
      {
        time: "16:00 – 17:00",
        name: "Mirador del Time",
        place: "Tijarafe",
        type: "Mirador",
        description:
          "Balcón natural sobre el Valle de Aridane y la costa oeste.",
        whatYouSee:
          "Plataneras, barrancos, horizonte abierto y una vista enorme del valle.",
        whyGo:
          "Porque en pocos minutos te da una de las panorámicas más potentes de la isla.",
        highlights: [
          "Parada corta muy agradecida",
          "Muy buena luz por la tarde",
          "Ideal para fotos"
        ],
        maps: "https://www.google.com/maps/search/?api=1&query=Mirador+del+Time+La+Palma",
        photos: "https://www.google.com/search?tbm=isch&q=Mirador+del+Time+La+Palma"
      },
      {
        time: "17:30 – 18:15",
        name: "Plaza de La Glorieta",
        place: "Las Manchas",
        type: "Arte",
        description:
          "Plaza llena de azulejos y mosaicos creada por Luis Morera, con un aire muy alegre y muy especial.",
        whatYouSee:
          "Bancos ondulados, formas orgánicas, color y un ambiente artístico en medio del paisaje volcánico.",
        whyGo:
          "Porque cambia por completo el tono del día y es un sitio muy bonito para peques y mayores.",
        highlights: [
          "Muy buena para fotos",
          "Colorida y original",
          "Parada corta y muy resultona"
        ],
        maps:
          "https://www.google.com/maps/search/?api=1&query=Plaza+de+La+Glorieta+Las+Manchas+La+Palma",
        photos:
          "https://www.google.com/search?tbm=isch&q=Plaza+de+La+Glorieta+Las+Manchas+La+Palma"
      },
      {
        time: "18:15 – 19:00",
        name: "Tubo Volcánico (Cueva de las Palomas)",
        place: "Las Manchas",
        type: "Volcán",
        description:
          "Un tubo volcánico que ayuda a entender cómo circuló la lava bajo la superficie.",
        whatYouSee:
          "Cavidades volcánicas, texturas geológicas y paisaje de coladas alrededor.",
        whyGo:
          "Porque conecta muy bien con la historia volcánica de La Palma de forma visual.",
        highlights: [
          "Mejor con reserva si queréis entrar",
          "Aun sin entrar, el entorno merece la pena",
          "Muy didáctico"
        ],
        maps:
          "https://www.google.com/maps/search/?api=1&query=Cueva+de+las+Palomas+La+Palma",
        photos: "https://www.google.com/search?tbm=isch&q=Cueva+de+las+Palomas+La+Palma"
      },
      {
        time: "19:30 – Final",
        name: "Los Cancajos",
        place: "Breña Baja",
        type: "Paseo",
        description:
          "Paseo nocturno relajado por la costa para cerrar el día con calma.",
        whatYouSee:
          "Mar, paseo marítimo y ambiente tranquilo al anochecer.",
        whyGo:
          "Porque remata el día con una parte más personal y nostálgica del viaje.",
        highlights: [
          "Muy cómodo para pasear",
          "Sin presión de horarios",
          "Buen final de jornada"
        ],
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

/* Nuestro Capítulo · Fernando para Lilibeth */
window.TDN = (() => {
  const pareja = {
    nombreA: "Fernando",
    nombreB: "Lilibeth",
    ciudad: "Chiapa de Corzo",
    anioInicio: 2019,
    viajes: [],
    fechaCelebracion: "El 10 de cada mes",
    mensajeFinal: "Lilibeth, gracias por atreverte a salir conmigo. Todavía puedo acordarme de aquella caminata y de lo que sentí cuando nos besamos frente a la plaza. Ahora entiendo por qué me daba tantos nervios hablarte: desde el principio me importaba lo que pudiera pasar entre nosotros. Me encanta lo que hemos construido desde ese día. Quiero seguir haciendo tiempo para ti, volver a esa plaza y tener muchas cosas nuevas que contarnos en el camino. Te amo, mi maestra más hermosa del mundo."
  };

  const foto = (nombre) => `assets/fotos/${nombre}.webp`;
  const fotos = {
    hero: foto("portada"),
    perfilB: foto("lilibeth"),
    perfilPareja: foto("acuarela"),
    t0: foto("acuarela"),
    t1: foto("sol"),
    t2: foto("lilibeth"),
    t3: foto("noche"),
    t4: foto("fernando"),
    t5: foto("sonrisa"),
    t6: foto("hamaca"),
    t7: foto("mirada"),
    final: foto("acuarela"),
    postCreditos: foto("portada")
  };

  const canciones = [
    ["te-esperaba", "Te Esperaba · Carlos Rivera"],
    ["caminar-de-tu-mano", "Caminar de Tu Mano · Río Roma ft. Fonseca"],
    ["mi-marciana", "Mi Marciana · Alejandro Sanz"],
    ["nuestro-amor-sera-leyenda", "Nuestro Amor Será Leyenda · Alejandro Sanz"],
    ["sabes", "Sabes · Reik"]
  ];
  const pista = (i) => ({ musica: `assets/audio/${canciones[i][0]}.mp3`, cancion: canciones[i][1] });
  const media = {
    intro: "../comun/medios/audio/intro.mp3",
    temporadas: canciones.map((_, i) => pista(i).musica),
    canciones: canciones.map(([, titulo]) => titulo),
    videoFinal: "assets/video/para-lilibeth.mp4"
  };

  const escena = (nombre, ...texto) => ({ img: foto(nombre), texto });
  const clip = (nombre, ...texto) => ({
    img: `assets/video/${nombre}.mp4`,
    poster: `assets/video/${nombre}.webp`,
    texto
  });
  const episodio = (titulo, descripcion, duracion, escenas, recompensa) =>
    ({ titulo, descripcion, duracion, escenas, recompensa });
  const pelicula = (num, imagen, titulo, sinopsis, descripcion, duracion, escenas, recompensa) => ({
    num, tipo: "pelicula", titulo, sinopsis, imagen, anio: 2026, clasificacion: "TP",
    top10: num < 2, ...pista(num),
    creditos: [["De", pareja.nombreA], ["Para", pareja.nombreB]],
    episodios: [episodio(titulo, descripcion, duracion, escenas, recompensa)]
  });

  const temporadas = [
    pelicula(0, fotos.t0, "Desde la primera mirada",
      "En 2019 se gustaron desde el primer día. A Fernando todavía le daba nervios acercarse.",
      "Mucho antes de aquella primera cita, ya había algo entre nosotros.", 60, [
        escena("portada", "Lilibeth, todo empezó en 2019.", "Me gustaste desde la primera vez que te vi."),
        escena("mirada", "Quería acercarme a hablarte.", "Cuando te tenía enfrente, me ganaban los nervios."),
        escena("sonrisa", "Después por fin nos hablamos.", "Qué gusto me da recordar esa primera vez."),
        escena("fernando", "En ese entonces seguimos cada quien con su vida.", "Yo todavía me preguntaba qué pasaría si un día salíamos."),
        clip("cafe", "Hace unos meses hicimos un plan.", "Esta vez quedamos de vernos como algo más que amigos."),
        escena("acuarela", "Me alegra que nos hayamos dado la oportunidad.", "Volvería a decirte que sí, Lilibeth.")
      ], "Un café juntos, invitado por Fernando"),
    pelicula(1, foto("plaza"), "El beso frente a la plaza",
      "Una comida, una caminata por Chiapa de Corzo y el primer beso que Fernando todavía recuerda.",
      "Así recuerdo el día en que nos atrevimos a salir en plan de romance.", 72, [
        clip("cafe", "Ese día salimos a comer.", "Yo llevaba años preguntándome cómo sería una cita contigo."),
        escena("sol", "Después nos fuimos a caminar a Chiapa de Corzo.", "Quería que la tarde durara un poquito más."),
        escena("plaza", "Llegamos frente a la plaza.", "Ahí fue donde nos dimos nuestro primer beso."),
        escena("acuarela", "Todavía me da una sonrisa acordarme.", "De todo ese día, ese es el instante que más guardo."),
        escena("fernando", "Lo que vino después fue enamorarnos.", "Poco a poco hicimos un lugar para el otro en nuestra vida."),
        escena("portada", "Cuando volvamos a Chiapa de Corzo,", "quiero que pasemos otra vez por esa plaza.")
      ], "Una caminata por Chiapa de Corzo"),
    pelicula(2, fotos.t2, "Mi maestra más hermosa",
      "Fernando le dedica una película a Lilibeth y al orgullo que siente por verla dedicarse a enseñar.",
      "Todo lo que quiero decirte cuando te llamo mi maestra más hermosa del mundo.", 72, [
        escena("lilibeth", "Siempre te digo lo mismo:", "eres la maestra más hermosa del mundo."),
        clip("aula", "Me da mucho orgullo que hayas elegido enseñar.", "Explicar algo hasta que otra persona lo entienda requiere paciencia."),
        escena("noche", "Quiero que sepas cuánto te admiro.", "Y que me gusta escucharte hablar de lo que te importa."),
        escena("hamaca", "También adoro estos momentos tranquilos.", "Una foto tuya así me alegra el día."),
        escena("sonrisa", "Si llegas cansada, quiero que encuentres tiempo para descansar.", "Y si quieres desahogarte, aquí estoy para escucharte."),
        escena("sol", "Qué bonito poder presumir que estoy enamorado de ti.", "Te amo, mi maestra.")
      ], "Una tarde de descanso que tú eliges"),
    pelicula(3, fotos.t3, "El día diez",
      "Su aniversario cae el 10 de cada mes. El resto de los días también hay algo que celebrar.",
      "Por lo bien que se siente compartir contigo hasta un día cualquiera.", 72, [
        escena("acuarela", "El diez de cada mes cumplimos otro mes juntos.", "Me gusta que tengamos una fecha nuestra."),
        escena("lilibeth", "También me gustan los días que ni miramos el calendario.", "Cualquier buen rato contigo me parece digno de celebrarse."),
        clip("caminar", "Quiero que sigamos haciéndonos tiempo.", "Me basta una vuelta contigo para que cambie mi día."),
        escena("mirada", "Me enamoré de ti, Lilibeth.", "Y me importa todo lo que hemos construido en estos meses."),
        escena("noche", "Gracias por abrirme un lugar en tu vida.", "Me siento afortunado de poder compartirla contigo."),
        escena("portada", "Feliz día diez, amor.", "Mañana también quiero que tengamos algo que celebrar.")
      ], "Un plan sorpresa para nuestro próximo diez"),
    {
      num: 4, tipo: "serie", titulo: "Lo que viene contigo", anio: 2026, clasificacion: "TP",
      imagen: fotos.t1, ...pista(4),
      sinopsis: "Tres episodios para decirte lo que siento, agradecerte estos meses y pensar en los planes que nos quedan por hacer.",
      creditos: [["Historia original", "Fernando y Lilibeth"]],
      episodios: [
        episodio("Lo que siento", "Fernando por fin le dice en voz alta lo que empezó a sentir en 2019.", 62, [
          escena("fernando", "Lo curioso de acordarme de 2019", "es que todavía recuerdo lo que me costaba hablarte."),
          escena("sonrisa", "Ahora puedo decirte con toda confianza", "que me da gusto que seas tú quien está a mi lado."),
          escena("sol", "Me emociona saber que voy a verte.", "Hay días en que empiezo a sonreír desde antes de salir."),
          escena("acuarela", "Hemos formado un vínculo que me importa muchísimo.", "Quiero seguir cuidándolo contigo."),
          escena("lilibeth", "Te amo, Lilibeth.", "Me gusta poder decírtelo sin quedarme pensando si me atrevo.")
        ], "Una nota de Fernando, escrita a mano"),
        episodio("Todo lo que te agradezco", "Una pausa para acordarnos de lo que hizo posible esta historia.", 62, [
          escena("noche", "Gracias por haber dicho que sí a esa salida.", "Qué buena idea fue vernos y darnos el tiempo de caminar."),
          escena("plaza", "Me alegra que hayamos tenido aquella tarde.", "Se me quedó grabada hasta la plaza frente a la que nos besamos."),
          clip("cafe", "Gracias por los ratos que me regalas.", "Me gusta cuando podemos contarnos el día con calma."),
          escena("hamaca", "Gracias por dejarme conocerte tal como eres.", "Cada vez descubro más cosas que admiro de ti."),
          escena("acuarela", "Me encanta todo lo que está creciendo entre nosotros.", "Gracias por dejarme vivirlo contigo.")
        ], "Una comida juntos, como en la primera cita"),
        episodio("Muchos días por delante", "Fernando piensa en lo que le gustaría seguir construyendo con Lilibeth.", 62, [
          clip("caminar", "Quiero salir a caminar contigo muchas veces más.", "Podemos empezar por volver a Chiapa de Corzo."),
          escena("noche", "Quiero conocer los lugares que tú elegirías.", "Y escuchar tus planes antes de hacer los nuestros."),
          escena("aula", "Quiero seguir celebrando las cosas que logras.", "También quiero estar cerca cuando necesites un descanso."),
          escena("mirada", "Ojalá nos sigamos buscando aun en las semanas ocupadas.", "Siempre podemos apartar un rato para los dos."),
          escena("portada", "¿Qué te gustaría hacer conmigo, Lilibeth?", "Te dejo una carta en El Final. Ahora quiero leerte a ti.")
        ], "El siguiente plan lo elige Lilibeth")
      ]
    }
  ];

  const extras = [
    { titulo: "El primer beso", img: foto("plaza"), texto: "La plaza de Chiapa de Corzo. Aquí se quedó uno de mis recuerdos favoritos contigo." },
    { titulo: "El día diez", img: fotos.t0, texto: "Nuestro aniversario es el día 10 de cada mes." },
    { titulo: "Banda sonora", img: fotos.t3, texto: media.canciones.join(" · ") }
  ];

  const final = {
    titulo: "El Final: Tu Turno",
    imagen: fotos.final,
    sinopsis: "Lilibeth, te dejé una carta y un último montaje. También quiero saber qué te gustaría vivir en el próximo capítulo.",
    preguntas: [
      "¿Qué recuerdas de la primera vez que nos vimos?",
      "¿Qué sentiste después de nuestro beso frente a la plaza?",
      "¿Qué es lo que más disfrutas de un día cualquiera conmigo?",
      "¿Qué plan te gustaría que hiciéramos juntos?",
      "¿Qué quisieras decirme hoy?"
    ],
    carta: (respuestas) => `Lilibeth:

${pareja.mensajeFinal}

De los planes que podríamos hacer, el que elegiste fue «${respuestas[3]}». Me encantará hablarlo contigo y buscar un día para los dos.

Con amor,
Fernando`
  };

  return {
    pareja, fotos, media, temporadas, extras, final,
    acceso: { demo: false, cualquierClave: false, password: "10", pistaPassword: "El día del mes que celebramos lo nuestro", estreno: "" },
    notificacion: { whatsapp: "529515804624", email: "", endpoint: "" },
    sitio: {
      url: new URL("./", location.href).href,
      coincidencia: 100,
      clasificacion: "TP",
      clasificacionTexto: "Para Lilibeth, de Fernando",
      heroTag: "ESTRENO DE ANIVERSARIO",
      heroTop: "De Fernando para Lilibeth",
      sinopsis: "Se gustaron desde 2019. Años después, una comida y un beso frente a la plaza de Chiapa de Corzo cambiaron su historia.",
      estrenoTexto: "Cuatro películas y una serie para Lilibeth",
      generos: ["Romance", "Basada en hechos reales"],
      filaRecomendada: "Nuestra historia"
    },
    creditos: [
      ["Una dedicatoria de", "Fernando"],
      ["Para", "Lilibeth"],
      ["Lugar del primer beso", "Chiapa de Corzo, Chiapas"],
      ["Aniversario", "El 10 de cada mes"],
      ["Banda sonora", media.canciones.join(" · ")],
      ["Foto de La Pila", "AlejandroLinaresGarcia / Wikimedia Commons · CC BY-SA 3.0"],
      ["Clips de ambiente", "Gökhan Işıklı, Uriel Mont y Katerina Holmes / Pexels"]
    ],
    postCreditos: {
      imagen: fotos.postCreditos,
      etiqueta: "ESCENA POST-CRÉDITOS",
      texto: "Lilibeth, ¿regresamos a la plaza?",
      anuncio: "El próximo paseo",
      subtitulo: "Tú me dices cuándo.",
      sorpresa: "Te amo. —Fernando"
    },
    arcades: ["memory"]
  };
})();

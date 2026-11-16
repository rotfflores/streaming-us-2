(() => {
  const A = "Alejandro";
  const B = "Yessica";
  const title = "Una y mil veces";
  const anniversary = "4 de octubre de 2026";
  const photo = (n) => `assets/fotos/foto-${String(n).padStart(2, "0")}.webp`;
  const cover = (name) => `assets/fotos/${name}.webp`;
  const ambient = (name) => `assets/ambiente/${name}.webp`;
  const tracks = {
    bendicion: ["Dios bendiga nuestro amor", "Marco Antonio Solís", "dios-bendiga"],
    contigo: ["Contigo", "El Canto del Loco con Natalia Lafourcade", "contigo"],
    hermosa: ["You're Beautiful", "James Blunt", "youre-beautiful"],
    franco: ["Tú de qué vas", "Franco De Vita", "tu-de-que-vas"],
    bolton: ["When a Man Loves a Woman", "Michael Bolton", "when-a-man-loves-a-woman"]
  };
  const soundtrack = (track) => {
    const [title, artist, file] = tracks[track];
    return { cancion: `${title} · ${artist}`, musica: `assets/audio/${file}.mp3` };
  };
  const still = (img, ...texto) => ({ img: typeof img === "number" ? photo(img) : img, texto });
  const clip = (name, texto, folder = "ambiente") => ({
    video: `assets/${folder}/${name}.mp4`,
    poster: `assets/${folder}/${name}.webp`,
    texto: [texto]
  });
  const episode = (titulo, descripcion, track, escenas) => ({
    titulo, descripcion, duracion: 64, ...soundtrack(track), escenas
  });
  const film = (num, poster, titulo, sinopsis, track, escenas) => ({
    num, tipo: "pelicula", titulo, imagen: cover(poster), anio: 2026, clasificacion: "TP", sinopsis,
    ...soundtrack(track), creditos: [["Una historia de", `${A} y ${B}`]],
    episodios: [episode(titulo, sinopsis, track, escenas)]
  });

  const temporadas = [
    film(0, "camino", "En el mismo camino", "Alejandro le cuenta a Yessica por qué agradece que Dios los haya hecho coincidir.", "bendicion", [
      still(1, "Yessi, cuando veo esta foto, pienso en la suerte que tuve de coincidir contigo."),
      still(ambient("camino"), "Yo creo que Dios nos puso en el mismo camino y nos presentó para que llegáramos muy lejos."),
      still(2, "Me gusta pensar en todo lo que había por descubrir de ti cuando apenas nos estábamos conociendo."),
      still(7, "Ahora miro estas fotos y me dan ganas de preguntarte qué recuerdas tú de esos primeros días."),
      still(17, "El 4 de octubre de 2026 es la fecha que quería guardar en esta historia."),
      still(8, "Gracias por tomar mi mano y por seguir caminando conmigo.")
    ]),
    film(1, "mirarte", "Cuando Dios te hizo", "Una declaración de amor con esa broma que Alejandro quería que Yessi guardara.", "hermosa", [
      still(7, "Yessi, cuando Dios te hizo y te puso la belleza, se le fueron las cucharadas de más."),
      still(4, "Me gusta que hasta en esta versión dibujada de nosotros reconozco esa sonrisa tuya."),
      still(ambient("flores"), "Podría decirte todos los días lo bonita que eres. Todavía me darían ganas de decírtelo otra vez."),
      still(5, "Me encanta salir contigo, sacar una foto y volver a encontrarla un día cualquiera."),
      still(13, "Ojalá que también sepas cuánto disfruto estar cerca de ti cuando no hay cámara."),
      still(8, "Te amo, Yessi. Y sí, me voy a seguir tomando fotos contigo.")
    ]),
    film(2, "contigo", "Lo que me gusta de estar contigo", "Las fotos de los días que pasan deprisa y que Alejandro quiere recordar.", "contigo", [
      still(6, "Una ida al gimnasio, una comida, una foto que nos dio por tomar. Me encanta que tengamos recuerdos así."),
      still(3, "A veces vuelvo a la galería por una foto y termino viendo muchas más."),
      still(18, "Gracias por compartir conmigo esos ratos de sentarnos juntos, platicar y comer algo."),
      clip("recuerdo", "Este video me gusta porque puedo volver a vernos en movimiento.", "video"),
      still(9, "Ojalá sigamos sacando fotos de lo que hagamos juntos, hasta en los planes que salen al último minuto."),
      still(1, "Me hace feliz compartir contigo un día cualquiera, Yessi.")
    ]),
    film(3, "elegirte", "Te volvería a elegir", "Alejandro le agradece a Yessica lo compartido y le cuenta cómo quiere cuidar su relación.", "franco", [
      still(16, "Gracias por las veces en que nos hemos reunido a celebrar. Qué gusto me da volver a vernos juntos."),
      still(12, "Estas fotos me hacen agradecer el tiempo que nos damos para estar cerca de la gente que queremos."),
      clip("olas", "Quiero que, aunque tengamos días llenos, siempre encontremos un rato para preguntarnos cómo estamos."),
      still(15, "Quiero escuchar tus planes, contarte los míos y buscar la manera de apoyarnos en lo que nos importa."),
      still(14, "También quiero que nos queden tardes libres para salir a caminar y ver qué encontramos."),
      still(2, "Si volviera al día en que Dios cruzó nuestros caminos, te elegiría una y mil veces más.")
    ]),
    {
      num: 4, tipo: "serie", titulo: "Todo lo que viene", imagen: cover("serie"),
      anio: 2026, clasificacion: "TP", ...soundtrack("bolton"),
      sinopsis: "Tres episodios para dar gracias, hablar de los días comunes y soñar juntos con lo que viene.",
      creditos: [["De", A], ["Para", B]],
      episodios: [
        episode("Gracias por estos días", "Una vuelta por esos momentos que Alejandro volvería a guardar.", "bolton", [
          still(10, "Hay fotos que me dan ganas de sentarme contigo y preguntarte qué recuerdas de ese día."),
          still(11, "Me gusta mirar las dos que sacamos seguidas. En cada una descubro una expresión distinta."),
          still(16, "Gracias por dejarme compartir estos momentos y por hacerme un lugar a tu lado."),
          still(ambient("flores"), "Quiero acordarme de agradecerte todo esto también en persona, mientras lo estamos viviendo."),
          still(3, "De todas las fotos que podría guardar a solas, estas son las que más ganas me dan de ver contigo."),
          still(18, "Y si se nos hace tarde platicando, pedimos algo de comer y seguimos.")
        ]),
        episode("Hacer tiempo para nosotros", "Planes sencillos para seguir disfrutando del día a día en pareja.", "contigo", [
          still(6, "Me gusta que podamos hacer planes tan distintos y que en todos encuentre algo que disfruto contigo."),
          still(13, "Quiero que nos sigamos invitando a salir, aunque a veces el plan sea tan sencillo como dar una vuelta."),
          clip("olas", "Cuando haya mucho por hacer, quiero acordarme de apartar una tarde para nosotros."),
          still(9, "Si hay algo que te dé ilusión intentar, quiero que me cuentes qué es y qué te gustaría que hiciéramos juntos."),
          still(5, "También vale repetir esa salida de la que regresamos con ganas de guardar todas las fotos."),
          still(7, "Mientras sea contigo, siempre me va a dar gusto hacer el plan.")
        ]),
        episode("Llegar muy lejos", "Alejandro imagina lo que quisiera construir con Yessica, con fe y tiempo para los dos.", "bendicion", [
          still(ambient("horizonte"), "Creo que Dios nos presentó para llegar muy lejos. Quiero descubrir contigo qué significa eso para los dos."),
          still(14, "Me gustaría que un día nos sorprenda lo mucho que hemos logrado al animarnos en nuestros planes."),
          clip("ocaso", "Le pido a Dios que nos dé tiempo para acompañarnos y paciencia para entendernos cuando algo nos cueste."),
          still(12, "Quiero que podamos celebrar tus logros y los míos, también los que se van haciendo de a poquito."),
          still(17, "Cuando volvamos a celebrar el 4 de octubre, me gustaría ver estas fotos juntos y escoger otras nuevas."),
          still(1, "Te amo, Yessi. Qué alegría que nos queda tanto por vivir.")
        ])
      ]
    }
  ];

  const fotos = {
    hero: cover("hero"), perfilB: cover("perfil-yessica"), perfilPareja: cover("perfil-pareja"),
    t0: photo(1), t1: photo(5), t2: photo(6), t3: photo(9), t4: photo(13), t5: photo(16),
    final: cover("carta"), postCreditos: photo(2)
  };

  const letter = `Yessi,

Creo que Dios nos puso en el mismo camino y nos presentó para que llegáramos muy lejos. Cuando me pongo a ver nuestras fotos, agradezco que nos haya tocado coincidir. Me da gusto verte sonreír, acordarme de lo que estábamos haciendo y pensar en todos los momentos que todavía nos faltan.

Siempre te volvería a elegir una y mil veces más. Gracias por compartir conmigo las comidas, las salidas, las celebraciones y los ratos en que nos da por tomar una foto. Quiero seguir haciéndome tiempo para ti, escuchar lo que te ilusiona y acompañarte en lo que quieras lograr.

Y tenía que dejarte esto por escrito: cuando Dios te hizo y te puso la belleza, se le fueron las cucharadas de más. Te amo, Yessi.

Feliz aniversario.

Alejandro`;

  window.TDN = {
    pareja: { nombreA: A, nombreB: B, aniversario: "2026-10-04", viajes: [], mensajeFinal: letter },
    fotos, temporadas,
    media: { intro: "assets/audio/intro.mp3", musica: "", videoFinal: "assets/video/escena-final.mp4" },
    acceso: { demo: false, password: "041026", pistaPassword: "La fecha de nuestro aniversario en seis números.", estreno: "" },
    notificacion: { whatsapp: "526691179455" },
    sitio: {
      coincidencia: 100, clasificacion: "TP", clasificacionTexto: "Romance",
      heroTag: "NUESTRO CAPÍTULO", heroTop: `De Alejandro para Yessica · ${anniversary}`, titulo: title,
      sinopsis: "Alejandro agradece que Dios los haya puesto en el mismo camino y le cuenta a Yessi por qué la volvería a elegir una y mil veces.",
      generos: ["Romance", "Recuerdos", "Fe"], filaRecomendada: temporadas[0].titulo
    },
    extras: [
      { titulo: "4 de octubre", img: photo(17), texto: `Nuestro aniversario · ${anniversary}` },
      { titulo: "La banda sonora", img: ambient("flores"), texto: Object.values(tracks).map(([song, artist]) => `${song} · ${artist}`).join(" / ") }
    ],
    final: {
      titulo: "Una carta para Yessi", imagen: fotos.final,
      sinopsis: "Lo que Alejandro agradece de lo vivido y todo lo que quiere seguir compartiendo contigo.",
      preguntas: ["¿Qué te gustaría que viviéramos juntos en nuestro próximo capítulo?"], carta: () => letter
    },
    creditos: [["Una dedicatoria de", A], ["Para", B], ["Nuestro aniversario", anniversary], ["Imágenes de ambiente", "Pexels"]],
    postCreditos: {
      imagen: fotos.postCreditos, etiqueta: "ESCENA POST-CRÉDITOS",
      texto: "Si pudiera volver a ese día, le daría las gracias a Dios por haberte puesto en mi camino.",
      anuncio: "Te amo, Yessi", subtitulo: "Con amor, Alejandro",
      sorpresa: "La próxima foto la escoges tú. Yo ya sé con quién quiero salir en ella."
    }
  };
})();

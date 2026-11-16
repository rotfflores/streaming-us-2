(() => {
  const tracks = window.CLIENT_MEDIA.canciones;
  const photos = (n) => `assets/fotos/foto-${String(n).padStart(2, "0")}.webp`;
  const covers = (n) => `assets/fotos/portada-${String(n).padStart(2, "0")}.webp`;
  const still = (n, texto) => ({ img: photos(n), texto: [texto] });
  const clip = (n, texto) => {
    const { ruta, poster } = window.CLIENT_MEDIA.videos[n - 1];
    return { img: ruta, poster, texto: [texto] };
  };
  const stock = (name, texto) => ({
    img: `assets/ambiente/${name}.jpg`,
    texto: [texto]
  });
  const waves = (name, texto) => ({
    img: `assets/ambiente/${name}.mp4`, poster: `assets/ambiente/${name}.jpg`, texto: [texto]
  });
  const soundtrack = (n) => ({ musica: tracks[n].src, cancion: tracks[n].titulo });
  const episode = (titulo, descripcion, track, escenas, interaccion = null) => ({
    titulo, descripcion, duracion: 48, ...soundtrack(track), escenas, interaccion
  });
  const cast = [["En memoria de", "Papá"], ["Archivo", "Álbum familiar"]];
  const film = (num, titulo, portada, track, descripcion, escenas, juego) => ({
    num, titulo, tipo: "pelicula", imagen: covers(portada), sinopsis: descripcion,
    clasificacion: "TP", ...soundtrack(track), creditos: cast,
    episodios: [episode(titulo, descripcion, track, escenas, juego)]
  });
  const series = (num, titulo, portada, sinopsis, episodios) => ({
    num, titulo, tipo: "serie", imagen: covers(portada), sinopsis, clasificacion: "TP",
    musica: episodios[0].musica, cancion: episodios[0].cancion, episodios, creditos: cast
  });
  const games = {
    portada: {
      tipo: "quiz", titulo: "La foto de portada",
      pregunta: "¿Qué está haciendo papá en la foto que abre el homenaje?",
      opciones: ["Corriendo", "Posando frente al mar", "Sentado a la mesa"], correcta: 0, ok: "Así empieza el homenaje, con papá en movimiento."
    },
    piezas: {
      tipo: "puzzle", titulo: "Una foto en piezas", imagen: photos(60), ok: "El retrato quedó completo."
    },
    memoria: {
      tipo: "memory", titulo: "Memorama del álbum",
      pares: [photos(0), photos(2), photos(8), photos(26), photos(51), photos(60)], ok: "Volviste a reunir las fotos."
    },
    lugar: {
      tipo: "quiz", titulo: "Un lugar en el álbum",
      pregunta: "¿Qué se alcanza a ver detrás de nosotros en la foto junto al barandal?",
      opciones: ["Agua y cerros", "Una cancha", "Edificios altos"], correcta: 0, ok: "El agua y los cerros quedaron de fondo."
    },
    palabras: {
      tipo: "sopa", titulo: "Palabras para guardar",
      palabras: ["FAMILIA", "GRACIAS", "LEGADO", "ABRAZO", "CAMINO", "RECUERDO"], ok: "Todas estas palabras tienen un lugar en el homenaje."
    },
    detalle: {
      tipo: "completar", titulo: "Una escena del álbum", frase: "En la foto de la celebración hay un ___ sobre la mesa.",
      opciones: ["pastel", "sombrero", "libro"], correcta: 0, ok: "El pastel quedó en la foto."
    },
    dedicatoria: {
      tipo: "rascar", titulo: "Una dedicatoria escondida", imagen: photos(0), revelar: "Gracias por tu vida, papá.", ok: "Para papá, con cariño."
    }
  };
  const temporadas = [
    film(0, "Siempre, papá", 0, 0, "Una carrera abre el álbum. Las fotos que siguen son una forma de decirte gracias.", [
      still(0, "Quise que la primera imagen fuera esta, con tus pies en plena carrera."),
      still(2, "Después encontré esta de tus brazos sosteniendo a alguien tan pequeño."),
      still(8, "En otra estás junto a la mesa, rodeado de familia."),
      still(60, "Quisiera poder mirar estas fotos contigo y escuchar lo que recuerdas de cada una."),
      still(0, "Gracias por tu vida, papá. Hoy hacemos un lugar para recordarte.")
    ], games.portada),
    film(1, "La mesa de todos", 8, 2, "Hay días que vuelven enteros al mirar quiénes estaban sentados a la mesa.", [
      still(44, "En esta foto, la mesa alcanza para reunirnos a todos."),
      still(7, "A veces lo que más extraño es la posibilidad de volver a sentarme a tu lado."),
      clip(5, "Este video guarda unos segundos de la gente querida alrededor de la mesa."),
      still(64, "Me gustaría seguir apartando tiempo para comer juntos y preguntar cómo estamos."),
      still(8, "Hoy, al volver a estas fotos, me dan ganas de llamar a quienes también te extrañan.")
    ]),
    film(2, "Un retrato para guardar", 2, 0, "Un acercamiento a las fotos que dan ganas de tener a la mano.", [
      still(2, "Me quedo mirando cómo sostienes con cuidado a ese pequeño."),
      still(5, "En esta, con la luz de la ventana, basta tu mirada para que me detenga."),
      still(14, "También guardo las fotos en las que posas cerca de alguien que te quiere."),
      still(60, "Quiero imprimir una de estas y dejarla en un lugar donde pueda verla seguido.")
    ], games.piezas),
    film(3, "Días de mar", 61, 0, "Vuelven las orillas, las fotos bajo la sombra y las ganas de quedarse un poco más.", [
      still(61, "En esta foto están el agua, los cerros y ustedes dos, muy cerca."),
      still(24, "Aquí quedaron la sombra del techo de palma y la mesa roja."),
      waves("olas", "Mientras pasan las olas, me doy un momento para mirar esas fotos con calma."),
      still(73, "Me gusta volver a encontrarte donde se ve el mar al fondo y aún hay tiempo para una foto."),
      still(51, "Si alguna vez volvemos a caminar frente al agua, voy a pensar en ti.")
    ], games.lugar),
    film(4, "Las vueltas del camino", 26, 2, "Paseos, letreros y lugares que todavía dan conversación.", [
      still(26, "Hay fotos donde hasta el letrero del lugar quedó como parte del retrato."),
      still(34, "En otras, la gente se acomoda en fila para que todos salgan."),
      still(87, "Una calle, una caminata y alguien que se detuvo a guardar el momento."),
      stock("camino", "Me gustaría seguir haciendo espacio para salir, mirar alrededor y compartir el camino."),
      still(18, "Cuando vea otras fotos de esos paseos, voy a preguntar qué se acuerda cada quien.")
    ]),
    film(5, "Cuando nos juntamos", 46, 2, "Los pasteles y las flores ayudan a reconocer los días de celebración.", [
      still(11, "Hay una foto tuya inclinándote sobre el pastel. La sonrisa de quienes te miran también quedó ahí."),
      still(46, "En esta otra, la luz cae justo sobre la mesa y las caras alrededor."),
      still(13, "Vuelvo a los retratos de fiesta y me fijo en cómo nos acomodamos para caber."),
      still(68, "Cada quien recordará algo distinto de esas reuniones. Me gustaría escucharlo.")
    ], games.detalle),
    film(6, "En buena compañía", 15, 2, "Fotos donde basta mirar quiénes están cerca para querer saber más.", [
      still(15, "Esta foto con músicos me hace pensar en todo lo que una imagen deja fuera del cuadro."),
      still(34, "A quienes salieron en los retratos, algún día les voy a pedir que cuenten ese día a su manera."),
      still(76, "Quiero guardar sus historias con el mismo cuidado con que guardamos estas fotos."),
      still(47, "Me da gusto que tengamos un álbum al que podemos volver juntos.")
    ]),
    film(7, "El valor de volver", 51, 0, "Un rato para mirar despacio el paisaje y los rostros de antes.", [
      still(4, "Hay días que empiezan a volver por un detalle, como el agua al lado del camino."),
      still(19, "También cuentan las fotos de cuerpo entero, con lugar para mirar lo que había alrededor."),
      stock("colinas", "Cuando el día se llena de cosas, tomarme un rato para recordarte me ayuda a respirar."),
      still(51, "Quisiera encontrar el momento para volver a estos sitios con la familia.")
    ]),
    film(8, "La silla que recordamos", 7, 1, "Una dedicatoria para las fechas en las que la ausencia se siente más cerca.", [
      still(12, "Al mirar una mesa de fiesta, a veces el pensamiento se va directo a quien hace falta."),
      still(7, "Hay días en que quisiera contarte hasta lo más pequeño, solo por escucharte responder."),
      still(64, "Si en una reunión alguien habla de ti, me gustaría que tengamos tiempo de escuchar."),
      still(8, "Papá, podemos hacerte un lugar en la conversación y seguir acompañándonos.")
    ]),
    film(9, "Cosas que quedan", 24, 0, "Un paseo por el álbum y por el afecto que merece quedarse cerca.", [
      still(24, "Lo que vuelve primero a veces es algo mínimo: el color de la mesa, la sombra, la postura de alguien."),
      still(35, "También se queda la cercanía de un retrato tomado con la cámara a un brazo de distancia."),
      clip(3, "Y en este video quedó otro modo de tener una imagen tuya cerca."),
      still(60, "Ojalá podamos repartir copias de las fotos que más quiere cada persona.")
    ], games.memoria),
    film(10, "Todo lo que agradezco", 44, 2, "Palabras de gratitud para poner junto a las imágenes.", [
      still(44, "Gracias por el tiempo que alcanzamos a compartir alrededor de una mesa."),
      still(2, "Gracias por los gestos de cariño que todavía se alcanzan a ver."),
      still(11, "Gracias por estar en tantas fotos a las que hoy podemos regresar."),
      still(60, "Quiero decir gracias más seguido a quienes tengo cerca, también por las cosas pequeñas.")
    ], games.palabras),
    film(11, "Para cuando te extrañe", 83, 1, "Una despedida que puede volver a abrirse cuando haga falta.", [
      still(83, "A veces basta con abrir el álbum y quedarme un rato en una sola foto."),
      clip(4, "También guardamos este pequeño retrato en movimiento hecho para recordarte."),
      waves("orilla", "Voy a dejar unos segundos para pensar en ti y volver a respirar."),
      still(0, "Te extraño, papá. Me alegra haber podido reunir estas imágenes de tu vida.")
    ], games.dedicatoria),
    series(12, "El álbum de casa", 64, "Dos capítulos para volver a las mesas y las celebraciones.", [
      episode("Sentarnos juntos", "Ratos en familia vistos desde las fotos de sobremesa.", 0, [
        still(7, "Un plato servido y dos personas cerca. Por ahí empieza este capítulo."),
        still(16, "En esta mesa, la foto juntó a las personas que estaban de un lado y del otro."),
        still(64, "Vale la pena conservar también las fotos de las comidas de cualquier día."),
        still(44, "Quiero volver a preguntar quién tomó cada foto antes de que se nos olvide.")
      ]),
      episode("Que salgamos todos", "Familia, música y fotos de fiesta.", 2, [
        clip(1, "En el video, bajo las luces del salón, todavía se alcanzan a ver los arreglos de la fiesta."),
        clip(2, "Desde otro ángulo quedan detalles y movimientos que una foto sola no alcanza a guardar."),
        still(40, "A veces la mejor parte es esperar a que todos se junten para la foto."),
        still(79, "Quiero copiar estas imágenes para que más de uno en casa conserve el álbum.")
      ])
    ]),
    series(13, "Lo que llevamos contigo", 60, "Dos maneras de hablar de legado desde lo que podemos cuidar hoy.", [
      episode("Lo que merece quedarse", "Una pausa entre retratos y agradecimientos.", 0, [
        still(10, "Quiero guardar tus retratos con el mismo cariño con que los vuelvo a mirar."),
        still(76, "Voy a pedirles a los demás que elijan una foto y digan por qué la guardarían."),
        still(60, "Tal vez de ahí salga un álbum que podamos abrir juntos más veces."),
        still(0, "Esta de la carrera ya tiene su lugar al principio.")
      ]),
      episode("Lo que quiero cuidar", "Deseos para el camino que sigue.", 2, [
        stock("camino", "Me gustaría apartar tiempo para hablar con mi familia, aunque el día parezca lleno."),
        still(61, "También quiero hacer lugar para salir y caminar con quienes quiero."),
        still(47, "Quiero que tengamos nuevas fotos juntos y tiempo para mirar las anteriores."),
        still(2, "Cuidar a los nuestros es una de las formas en que quiero recordarte.")
      ])
    ]),
    series(14, "Cartas a papá", 73, "Dos cartas para las cosas que quedan por decir.", [
      episode("Cuando vuelva la fiesta", "Una carta para los días de reunión y de ausencia.", 1, [
        still(46, "Papá, cuando haya otra fiesta quizá me acuerde de tu cara en esta foto."),
        still(13, "Quisiera que podamos reír al contar algo tuyo y quedarnos cerca si a alguien le da tristeza."),
        still(8, "Me gustaría que alguien saque una foto de esa mesa y que la guardemos junto a estas."),
        still(11, "Gracias por los días en los que pudimos celebrar contigo.")
      ]),
      episode("Te llevo conmigo", "Las palabras que cierran el catálogo y abren la carta final.", 1, [
        still(35, "A veces una foto me devuelve las ganas de hablarte."),
        stock("colinas", "Hay mucho todavía por vivir. Me gustaría hacerlo con el cariño que siento al mirar estas imágenes."),
        still(73, "Cuando vuelvan las ganas de escucharte o de verte, voy a abrir este álbum."),
        still(0, "Gracias por haber sido mi papá. Te llevo conmigo.")
      ])
    ])
  ];

  window.TDN = {
    pareja: { nombreA: "Familia", nombreB: "Papá", ciudad: "", viajes: [] },
    fotos: {
      hero: photos(0), perfilB: photos(0), perfilPareja: photos(60),
      final: covers(0), puzzle: photos(60), postCreditos: photos(0)
    },
    media: {
      intro: "assets/audio/intro.mp3", temporadas: tracks.map((track) => track.src),
      canciones: tracks.map((track) => track.titulo), videoFinal: "assets/video/montaje-final.mp4"
    },
    acceso: {
      password: "58cc6181518fbfb49da9c50db08ce31aa92feebaecc6c46a3a8084e87b50f037", demo: false, pistaPassword: "Escribe la contraseña que te compartieron.", estreno: ""
    },
    notificacion: { whatsapp: "523314270193", email: "", endpoint: "" },
    sitio: {
      url: "https://streaming-us-2.rotfstudio.com/homenaje-papa/", titulo: "Siempre, papá",
      heroTitulo: "Por siempre en nuestro corazón",
      heroTop: "Un homenaje familiar", heroTag: "EN MEMORIA DE PAPÁ",
      clasificacion: "TP", clasificacionTexto: "Homenaje familiar",
      sinopsis: "Una foto en plena carrera abre este álbum. Detrás vienen las mesas de familia, los viajes y las palabras que todavía queremos decirte. Para ti, papá.",
      generos: ["Familia", "Recuerdos", "Legado"], filaRecomendada: "El álbum de casa"
    },
    temporadas,
    extras: [
      { titulo: "El álbum familiar", img: covers(60), texto: "Fotos y videos para volver a mirar." },
      { titulo: "Banda sonora", img: covers(15), texto: "Las canciones elegidas para acompañar el homenaje." }
    ],
    final: {
      titulo: "Gracias por tu vida, papá", imagen: covers(0),
      sinopsis: "Una carta y un último recorrido por el álbum.",
      preguntas: [
        "¿Qué foto de papá te gustaría tener a la mano?",
        "¿Qué te gustaría agradecerle hoy?",
        "¿Qué recuerdo te gustaría contar y dejar escrito?",
        "¿Qué te gustaría seguir cuidando en su memoria?",
        "Si pudieras decirle algo en este momento, ¿qué le dirías?"
      ],
      carta: () => `Papá:

Volví a mirar la foto donde vas corriendo. Quise ponerla al principio porque me gusta encontrarte así, a mitad de un paso. Después seguí con las fotos de las mesas, las de los paseos y las de la familia acomodándose para salir junta. Me quedé un buen rato en cada una.

Hay días en que quisiera hablarte de cualquier cosa. Me gustaría decirte lo que pasó en casa o preguntarte algo que solo a ti se me ocurriría preguntar. Hoy puedo volver a estas imágenes y escuchar a quienes también tienen algo tuyo que contar.

Gracias por el tiempo que compartimos. Quiero cuidar estas fotos, hacer copias para los demás y seguir buscando ratos para sentarnos juntos. Me gustaría que, cuando alguien diga tu nombre, nos demos tiempo para recordar.

Te extraño, papá. Gracias por tu vida.`
    },
    creditos: [...cast, ["Banda sonora", tracks.map((track) => track.titulo).join(" · ")], ["", "Siempre, papá."]],
    postCreditos: {
      imagen: photos(0), etiqueta: "DESPUÉS DE LOS CRÉDITOS", texto: "Una última mirada a la foto que abrió el homenaje.",
      anuncio: "Siempre, papá", subtitulo: "Aquí podemos volver a encontrarte.", sorpresa: "Gracias por tu vida."
    }
  };
})();


(() => {
  const A = "Jonathan";
  const B = "Araceli";
  const anniversary = "16 de enero";
  const projectTitle = "Entre tú y yo";
  const photo = (n) => `assets/fotos/foto-${String(n).padStart(2, "0")}.webp`;
  const cover = (n) => `assets/fotos/portada-${String(n).padStart(2, "0")}.webp`;
  const tracks = window.CLIENT_MEDIA.canciones;
  const soundtrack = (n) => ({ musica: tracks[n - 1].src, cancion: tracks[n - 1].titulo });
  const still = (n, ...texto) => ({ img: photo(n), texto });
  const clip = (n, ...texto) => {
    const { ruta, poster } = window.CLIENT_MEDIA.videos[n - 1];
    return { img: ruta, poster, texto };
  };

  const games = {
    fecha: {
      tipo: "codigo", titulo: "La fecha de portada", modo: "fecha",
      pregunta: "¿Cuándo celebramos nuestro aniversario?", placeholder: "DDMM",
      respuestas: ["1601"], pista: "El 16 de enero.", ok: "El 16 de enero es nuestro."
    },
    dedicatoria: {
      tipo: "quiz", titulo: "Una historia para ti",
      pregunta: "¿Quién le dedica esta historia a Araceli?",
      opciones: ["Jonathan Marroquín", "El narrador", "La banda sonora"], correcta: 0,
      ok: "De Jonathan, con cariño."
    },
    flores: {
      tipo: "puzzle", titulo: "Un ramo en piezas", imagen: photo(41),
      ok: "Un ramo entero para ti."
    },
    album: {
      tipo: "memory", titulo: "Fotos de dos en dos",
      pares: [photo(2), photo(6), photo(25), photo(41), photo(52), photo(76)],
      ok: "Qué gusto volver a verlas juntas."
    },
    mesa: {
      tipo: "quiz", titulo: "De fiesta",
      pregunta: "¿Qué adornaba la mesa que sale en la película «Hay algo que celebrar»?",
      opciones: ["Globos", "Faroles de papel", "Una hilera de velas"], correcta: 0,
      ok: "Los globos marcaban el lugar de la fiesta."
    },
    paisaje: {
      tipo: "adivinanza", titulo: "El paisaje de la foto",
      texto: "Se alzan detrás de nosotros en la foto donde el cielo se ve de un azul clarito. ¿Qué son?",
      respuestas: ["montañas", "las montañas", "cerros", "los cerros"],
      pista: "Se ven desde el mirador.", ok: "Las montañas quedaron de fondo."
    },
    palabras: {
      tipo: "sopa", titulo: "Palabras para guardar",
      palabras: ["ARACELI", "JONATHAN", "ENERO", "CARIÑO", "FAMILIA", "FOTOS"],
      ok: "Todas tienen un lugar en esta historia."
    }
  };
  const episode = (titulo, descripcion, track, escenas, interaccion = null) => ({
    titulo, descripcion, duracion: 58, ...soundtrack(track), escenas, interaccion
  });
  const film = (num, titulo, imagen, track, sinopsis, escenas, interaccion) => ({
    num, tipo: "pelicula", titulo, imagen: cover(imagen), top10: num < 4, clasificacion: "TP",
    sinopsis, ...soundtrack(track), creditos: [["De", "Jonathan Marroquín"], ["Para", "Araceli Naveda"]],
    episodios: [episode(titulo, sinopsis, track, escenas, interaccion)]
  });
  const series = (num, titulo, imagen, sinopsis, episodios) => ({
    num, tipo: "serie", titulo, imagen: cover(imagen), clasificacion: "TP", sinopsis,
    musica: episodios[0].musica, cancion: episodios[0].cancion, episodios
  });

  const temporadas = [
    film(0, "16 de enero", 36, 1, "Jonathan reúne sus recuerdos favoritos para celebrar el aniversario con Araceli.", [
      still(36, "Araceli, feliz aniversario. Hoy quiero que nos demos un ratito para mirar lo nuestro."),
      still(2, "Hay fotos que me hacen sonreír antes de acordarme de todo lo que pasó ese día."),
      clip(1, "Entre tantas cosas que guardé, quería empezar por algo que nos tuviera a los dos."),
      still(37, "Gracias por cada momento que hoy puedo volver a mirar contigo."),
      still(39, "Este 16 de enero hice algo para ti. Ojalá te den ganas de verlo conmigo.")
    ], games.fecha),
    film(1, "Qué gusto mirarte", 41, 2, "Una dedicatoria para Araceli entre retratos y flores.", [
      still(29, "Me gusta encontrarte en fotos en las que miras directo a la cámara."),
      still(33, "También están esas donde se te escapa la sonrisa. Me quedo un rato viéndolas."),
      still(41, "Esta, con las flores, me daban ganas de ponértela en una película entera."),
      still(73, "Ojalá tuviera la costumbre de decirte más seguido lo bonita que te veo."),
      still(77, "Hoy te lo digo por escrito, Araceli. Qué gusto me da mirarte.")
    ], games.flores),
    film(2, "La que todavía me hace reír", 39, 3, "Las fotos que salieron sin ensayo y quedaron entre las favoritas.", [
      still(6, "En esta nos pegamos tanto para salir que apenas cabíamos."),
      still(7, "Hay dos fotos casi iguales y todavía me cuesta decidir cuál me gusta más."),
      still(39, "Al final guardaría las dos. En esta estás sonriendo y eso me gana."),
      still(34, "Hasta en blanco y negro me dan ganas de acercar la foto y ver tu cara otra vez."),
      still(35, "La próxima vez que estemos así de cerca, te voy a pedir una más.")
    ], games.album),
    film(3, "A la mesa contigo", 2, 4, "Una comida, una selfie y el gusto de compartir un rato sin prisa.", [
      still(2, "Entre todas las fotos me encontré con esta, al otro lado de la mesa."),
      still(27, "También me gustan las de casa, donde caben el desayuno y una foto de sorpresa."),
      still(28, "Al verlas juntas me acuerdo de lo mucho que valen esos ratos chicos."),
      still(33, "Quiero seguir preguntándote qué se te antoja y sentarme a comer contigo."),
      still(36, "Gracias por compartir conmigo hasta esos días que parecen de lo más normal.")
    ]),
    film(4, "Manitas", 37, 5, "Los gestos más pequeños de un álbum que Jonathan quiere volver a mirar en familia.", [
      still(57, "Cuando veo esta manita sobre la nuestra me quedo un rato mirando la foto."),
      still(60, "Es impresionante lo chiquita que se ve, dormida así, con los dedos junto a la cara."),
      still(20, "Me gusta volver a verte con ella en brazos, tan cerca de ti."),
      still(4, "Gracias por todos estos momentos en familia. Qué suerte poder guardarlos."),
      still(14, "Ojalá un día podamos abrir este álbum juntos y preguntarnos qué más recordamos.")
    ]),
    film(5, "Días de casa", 13, 6, "Los abrazos y las caras de sueño que también merecen su lugar en el álbum.", [
      still(13, "Quería guardar una película para las fotos en las que estamos a gusto en casa."),
      still(17, "En esta hay tanto sueño que hasta me dan ganas de hablar bajito."),
      still(46, "Aquí me pregunto qué estaba mirando con tanta atención la pequeña."),
      still(51, "Y aquí tiene una expresión que me hace sonreír cada vez que la veo."),
      still(3, "Ojalá sigamos encontrando tiempo para quedarnos cerquita y disfrutar un rato así.")
    ]),
    film(6, "Hay algo que celebrar", 76, 7, "La mesa de colores, los globos y las ganas de celebrar juntos una vez más.", [
      still(16, "Volví a encontrar la foto de la mesa con los globos y todos esos colores."),
      still(55, "Luego vi esta y me dieron ganas de guardar también las fotos donde salimos de cuerpo entero."),
      still(76, "Me da gusto tener una en la que salimos juntos junto a la mesa."),
      still(71, "Hay detalles como este sombrerito que agradezco haber guardado en una foto."),
      still(42, "Para la próxima celebración quiero acordarme de disfrutar el rato y de tomar otra foto contigo.")
    ], games.mesa),
    film(7, "Con vista a las montañas", 25, 8, "Una foto al aire libre que despierta las ganas de salir otra vez.", [
      still(25, "Mira ese cielo. Me gusta que todavía podamos volver a este paisaje abriendo una foto."),
      still(25, "Lo primero que vi fueron las montañas. Luego me fijé en lo cerquita que están las dos."),
      still(10, "Hay paseos que quedan guardados por el lugar y otros por una foto que dio risa."),
      still(42, "Me gustaría que eligiéramos juntos otro sitio para dar una vuelta, aunque nos quede cerca."),
      still(36, "Yo voy con ganas de guardar otra foto y de preguntarte a dónde quieres ir después.")
    ], games.paisaje),
    film(8, "Una flor para Araceli", 73, 9, "Las palabras que Jonathan quiere dejarle a Araceli junto a sus retratos.", [
      still(41, "Si hoy te llevara un ramo como el de esta foto, te lo daría con una nota."),
      still(65, "Diría que me encanta la manera en que sales tan tú en estas fotos."),
      clip(3, "Y que hay miradas tuyas en las que me dan ganas de quedarme un ratito más."),
      still(73, "También diría gracias por darme tantas razones para volver a mirar el álbum."),
      still(29, "La firmaría como se firma una nota que sí quieres que guarden. Con todo mi cariño, Jonathan.")
    ]),
    film(9, "El tiempo en fotos", 52, 10, "De los brazos a los primeros pasos del álbum, Jonathan se detiene en los detalles.", [
      still(22, "De tan chiquita, casi desaparece entre la cobija y el gorrito."),
      still(48, "En esta ya abre bien los ojos para ver qué está pasando."),
      still(52, "Luego aparece esta foto, de pie, mirando hacia arriba. Qué bonito tenerlas juntas."),
      still(47, "A veces abro una foto y me termino quedando un buen rato pasando a la siguiente."),
      still(76, "Quiero seguir tomando fotos de lo que vaya cambiando y volver a verlas contigo.")
    ]),
    film(10, "Lo que guardo en el teléfono", 72, 11, "Fotos y pedacitos de video que vale la pena volver a abrir.", [
      still(9, "Entre las cosas que guardo en el teléfono hay fotos nuestras que ya había olvidado."),
      clip(2, "A veces encuentro un video y me acuerdo de por qué quise tenerlo a la mano."),
      still(72, "Cuando salimos abrigados en esta, me dan ganas de preguntarte qué recuerdas tú."),
      clip(4, "También están esos pedacitos que me gusta revisar aunque duren poquito."),
      still(6, "Algún día quiero sentarme contigo a elegir las fotos que imprimiríamos.")
    ], games.palabras),
    film(11, "Lo que quiero seguir viviendo", 40, 12, "Una mirada al futuro con espacio para los planes de los dos.", [
      still(40, "Araceli, me gustaría que apartáramos tiempo para salir juntos y preguntar cómo va todo."),
      still(2, "Quiero saber qué planes te ilusionan ahora y qué puedo hacer para apoyarte."),
      still(13, "Quiero que tengamos tardes en familia en las que se nos olvide ver la hora."),
      still(25, "Y algún día, otra foto al aire libre que nos haga querer volver a ese lugar."),
      still(36, "Me da ilusión volver a celebrar el 16 de enero contigo y tener muchas cosas nuevas que contarnos.")
    ]),
    series(12, "Te lo quería decir", 35, "Dos capítulos para decir lo que a veces se queda en un mensaje a medias.", [
      episode("Gracias por estar", "Jonathan vuelve a las fotos que le dan ganas de decir gracias en voz alta.", 13, [
        still(35, "Araceli, abrí el álbum pensando en qué quería agradecerte primero."),
        still(37, "Me quedé con esta foto porque dice mucho con los dos ahí, cerquita."),
        still(15, "Gracias por los ratos en familia y por dejarme guardar tanto de ellos."),
        still(2, "Gracias también por esas horas de sentarnos juntos y platicar de cualquier cosa."),
        still(36, "Quiero decirte todo esto más seguido. Por hoy, te lo dejo aquí para cuando quieras volver.")
      ], games.dedicatoria),
      episode("Una palabra tuya", "Un espacio para lo que Araceli recuerda y lo que quiera contar.", 14, [
        still(34, "Yo escogí estas fotos pensando en las que tenía ganas de volver a mirar."),
        still(39, "Ahora quiero saber cuál escogerías tú y en qué te fijarías primero."),
        still(41, "Quizá recuerdes algo de ese día que nunca me hayas contado."),
        still(33, "Me gustaría escucharlo. Hasta lo que se ve chiquito desde fuera me interesa si viene de ti."),
        still(6, "Cuando acabemos de ver esto, quiero preguntarte qué foto pondrías tú en la portada.")
      ])
    ]),
    series(13, "Nuestro álbum", 14, "Los recuerdos en familia que se entienden mejor cuando los volvemos a ver juntos.", [
      episode("Cuando todo se veía chiquito", "Las cobijas, las primeras fotos y la ternura de volver a mirarlas.", 5, [
        still(58, "Mira lo chiquita que se ve entre la cobija y ese osito."),
        still(59, "En esta foto una mano alcanza para sostener la suya."),
        still(61, "Hasta el gorrito parece grande. Es de esos detalles que se me olvidarían si no hubiera una foto."),
        still(20, "Gracias por guardar recuerdos en los que puedo volver a verte con ella."),
        still(14, "Ojalá sigamos reuniendo fotos para abrirlas algún día, todos juntos.")
      ]),
      episode("El gusto de estar juntos", "Los ratos en casa y la alegría de ver crecer el álbum.", 6, [
        still(1, "Esta sonrisa me alegró la tarde apenas abrí la foto."),
        still(45, "Después vi esta y me quedé mirando cómo va cambiando con el tiempo."),
        still(49, "Qué bonito tener también estos ratos de estar cerca en casa."),
        still(76, "Quiero que tengamos más días de reunirnos y sacar una foto antes de que cada quien se vaya."),
        still(13, "De todo lo que cabe en este álbum, los ratos en familia son de los que más agradezco.")
      ])
    ]),
    series(14, "Lo que viene", 7, "Dos deseos para el futuro, con tiempo para la familia y para seguir eligiendo planes juntos.", [
      episode("Otro plan para los dos", "Ideas sencillas para una tarde que todavía queda por vivir.", 15, [
        still(7, "Para el siguiente día libre se me ocurre empezar con una pregunta. ¿Qué tienes ganas de hacer?"),
        still(25, "Puede ser una vuelta con una vista como esta o salir a caminar por algún lugar nuevo."),
        still(2, "También me basta con una comida y tiempo de sobra para escuchar cómo te ha ido."),
        still(72, "Quiero que sigamos haciendo planes que nos den gusto a los dos."),
        still(36, "Y cuando termine el día, ojalá nos acordemos de tomar una foto más.")
      ]),
      episode("Nos vemos en el próximo enero", "Jonathan deja abierta la última página del regalo para lo que aún queda por vivir.", 12, [
        still(37, "Cuando vuelva a llegar el 16 de enero, quiero saber qué foto del año te gustaría guardar."),
        clip(5, "Yo voy a seguir juntando recuerdos como quien guarda algo que quiere volver a encontrar."),
        still(76, "Quiero que haya fotos en familia, y también una donde salgamos tú y yo."),
        still(39, "Gracias por mirar todo esto conmigo. Si te quedaste pensando en algo, cuéntamelo."),
        still(6, "Feliz aniversario, Araceli. Me da alegría celebrar contigo. Te quiero.")
      ])
    ])
  ];

  window.TDN = {
    pareja: { nombreA: A, nombreB: B, aniversario: anniversary, fechaCodigo: "1601", ciudad: "Enero", viajes: [] },
    fotos: {
      hero: "assets/fotos/hero.webp", perfilB: photo(41), perfilPareja: photo(39),
      t0: photo(6), t1: photo(25), t2: photo(39), t3: photo(41),
      t4: photo(13), t5: photo(52), t6: photo(76), t7: photo(37),
      final: cover(39), puzzle: photo(41), puzzle2: photo(25), postCreditos: photo(36)
    },
    media: {
      intro: "assets/audio/intro.mp3", temporadas: tracks.map((track) => track.src),
      canciones: tracks.map((track) => track.titulo), videoFinal: "assets/video/montaje-final.mp4"
    },
    acceso: {
      password: "272228055649002aa68a0787a821ee7e0eff838b2053b6d08531f26b39e09473", demo: false,
      pistaPassword: "El día y el mes de nuestro aniversario, en cuatro números.", estreno: ""
    },
    notificacion: { whatsapp: "525564529048", email: "", endpoint: "" },
    sitio: {
      url: "https://streaming-us-2.rotfstudio.com/jonathan-araceli/splash.html", titulo: projectTitle, heroTop: "De Jonathan, para Araceli", heroTag: "16 DE ENERO · NUESTRO ANIVERSARIO",
      coincidencia: 100, clasificacion: "TP", clasificacionTexto: "Una dedicatoria de aniversario",
      sinopsis: "Para ti, Araceli. Volví a mirar nuestras fotos y quise juntar aquí las que me hacen sonreír, los ratos en familia y todo lo que todavía me ilusiona vivir contigo.",
      generos: ["Romance", "Familia", "Recuerdos"], filaRecomendada: "Para ver juntos"
    },
    temporadas,
    extras: [
      { titulo: "Nuestra fecha", img: photo(39), texto: anniversary },
      { titulo: "Una foto con flores", img: photo(41), texto: "De esas que me gusta volver a mirar." },
      { titulo: "Tardes en familia", img: photo(76), texto: "Ojalá nos queden muchos días como este." }
    ],
    final: {
      titulo: "Lo que te quería decir", imagen: cover(39),
      sinopsis: "Una carta de Jonathan y un montaje para volver al álbum una vez más.",
      preguntas: [
        "¿Qué foto del álbum pondrías tú en la portada?",
        "¿Qué recuerdo de los dos te dio más gusto volver a ver?",
        "¿Qué plan te gustaría hacer conmigo este año?",
        "¿Qué momento en familia te gustaría guardar en una foto?",
        "¿Qué te gustaría que celebráramos el próximo 16 de enero?"
      ],
      carta: () => `Araceli:

Mientras juntaba estas fotos me pasaba lo mismo una y otra vez. Abría una, me quedaba mirándola y terminaba buscando la que seguía. Me dio gusto encontrar las de la mesa, las de la pequeña en brazos y las nuestras, todas pegadas para salir en la misma foto.

Gracias por compartir conmigo tanto de tu tiempo y por todos esos ratos en familia que hoy podemos volver a mirar. Me da ilusión seguir haciendo planes contigo. Quiero escucharte cuando me cuentes lo que sueñas, acompañarte en lo que te importa y seguir apartando tardes para nosotros.

Feliz aniversario, Araceli. El próximo 16 de enero me gustaría abrir este álbum contigo y ver qué fotos nuevas le podemos sumar. Te quiero.

Jonathan Marroquín`
    },
    creditos: [
      ["De", "Jonathan Marroquín"], ["Para", "Araceli Naveda"], ["Aniversario", anniversary],
      ["Banda sonora", tracks.map((track) => track.titulo).join(" · ")], ["", "Feliz aniversario, Araceli."]
    ],
    postCreditos: {
      imagen: photo(36), etiqueta: "DESPUÉS DE LOS CRÉDITOS", texto: "Gracias por ver esto conmigo, Araceli.",
      anuncio: "Nos queda otra foto", subtitulo: "La de la próxima vez que estemos juntos.", sorpresa: "Te quiero. — Jonathan"
    }
  };
})();


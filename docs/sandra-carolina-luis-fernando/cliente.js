/* Miel y oro · Sandra Carolina para Luis Fernando */
(() => {
  const c = window.TDN;
  const fecha = "31 de enero";
  const deseo = "Que nunca nos falten miel y oro, y que nunca dejemos de creer, porque juntos podemos crear lo más bonito de la vida. ❤️✨";
  const foto = n => `assets/fotos/foto-${String(n).padStart(2, "0")}.webp`;
  const portada = n => `assets/fotos/portada-${String(n).padStart(2, "0")}.webp`;
  const escena = (n, ...texto) => ({ img: foto(n), texto });
  const ambiente = (slug, ...texto) => ({ img: `assets/fotos/${slug}.webp`, texto });
  const clip = (slug, ...texto) => ({
    img: `assets/video/${slug}.mp4`, poster: `assets/fotos/${slug}-clip.webp`, texto
  });

  c.pareja = {
    nombreA: "Sandra Carolina", nombreB: "Luis Fernando",
    nombreCompletoA: "Sandra Carolina", nombreCompletoB: "Luis Fernando",
    aniversario: fecha
  };
  c.fotos = {
    hero: "assets/fotos/hero.webp", perfilB: foto(10), perfilPareja: foto(2),
    final: portada(20), postCreditos: foto(11)
  };
  c.media = { intro: "assets/audio/intro.mp3", videoFinal: "assets/video/carta-miel-y-oro.mp4" };
  c.acceso = {
    demo: false, password: "4c126bb257a91ca00f19c52fecdb911452dd3af156b4fb9b54cdbee15da3c031",
    pistaPassword: "El día y el mes de nuestro aniversario, en cuatro dígitos.", estreno: ""
  };
  c.notificacion = { whatsapp: "529619292737" };
  c.sitio = {
    url: "https://streaming-us-2.rotfstudio.com/sandra-carolina-luis-fernando/",
    coincidencia: 100, clasificacion: "TP", clasificacionTexto: "Romance y aniversario",
    heroTag: "31 DE ENERO", heroTop: "De Sandra Carolina para Luis Fernando",
    sinopsis: "Una temporada para guardar lo que nos hace sonreír, dar gracias por lo que compartimos y seguir creyendo en lo que podemos crear juntos.",
    generos: ["Romance", "Aniversario", "Recuerdos"]
  };

  const tracks = {
    lenin: ["todo-lo-fue", "Todo Lo Fue — Lenin Ramírez"],
    maria: ["tan-cerca-de-ti", "Tan Cerca De Ti — María León"],
    omar: ["las-locuras-mias", "Las Locuras Mías — Omar Chaparro"],
    remix: ["enamorados", "1+1=2 Enamorados (Walker Style Remix) — Alan Walker Style"]
  };

  const episodio = (titulo, descripcion, [score, cancion], poster, escenas, interaccion = null) => {
    const duracion = 4 + escenas.length * 8;
    return {
      titulo, descripcion, duracion, imagen: portada(poster), cancion, escenas, interaccion,
      musica: `assets/audio/${score}-${duracion}.mp3`
    };
  };
  const pelicula = (num, ...details) => {
    const ep = episodio(...details);
    return {
      num, tipo: "pelicula", titulo: ep.titulo, clasificacion: "TP", imagen: ep.imagen,
      cancion: ep.cancion, sinopsis: ep.descripcion, episodios: [ep],
      creditos: [["Para", "Luis Fernando"], ["De", "Sandra Carolina"]]
    };
  };
  const serie = (num, titulo, sinopsis, poster, episodios) => ({
    num, tipo: "serie", titulo, sinopsis, clasificacion: "TP", imagen: portada(poster), episodios,
    cancion: [...new Set(episodios.map(ep => ep.cancion))].join(" · "),
    creditos: [["Protagonistas", "Sandra Carolina y Luis Fernando"]]
  });

  c.temporadas = [
    pelicula(0, "Miel y oro", "La frase de Sandra se convierte en un deseo para todo lo que quieren vivir juntos.", tracks.maria, 11, [
      escena(11, "Luis Fernando, te hice este regalo", "para que vuelvas a abrirlo cuando quieras."),
      clip("miel", "Que nunca nos falte la miel", "de hablarnos bonito, hasta en los días de prisa."),
      clip("olas", "Y que cuidemos el oro", "de tener un rato para estar juntos."),
      escena(2, "Me gusta pensar en todo lo bueno", "que todavía podemos crear entre los dos."),
      escena(20, "Que nunca dejemos de creer.", "Feliz aniversario. Con cariño, Sandra Carolina.")
    ], {
      tipo: "quiz", titulo: "Completa la dedicatoria",
      pregunta: "¿Qué dos cosas desea Sandra que nunca les falten?",
      opciones: ["Miel y oro", "Sol y estrellas", "Flores y café"], correcta: 0,
      ok: "¡Miel y oro! Que siempre encontremos algo bonito que cuidar."
    }),
    pelicula(1, "Nuestro 31 de enero", "Una pausa para abrir el álbum y celebrar la fecha que comparten.", tracks.lenin, 20, [
      escena(20, "Cada 31 de enero me dan ganas", "de sentarme contigo a mirar nuestras fotos."),
      escena(13, "De esta mesa guardo el gusto", "de hacernos un espacio para celebrar."),
      escena(5, "Que sigamos encontrando motivos", "para sorprendernos con un detalle."),
      escena(7, "Algún día tendremos tantas fotos", "que habrá que hacer otra temporada."),
      escena(11, "Por los recuerdos que ya tenemos", "y por todos los que todavía nos faltan.")
    ], {
      tipo: "codigo", titulo: "La fecha de los dos", pregunta: "¿Qué día celebran su aniversario?",
      modo: "fecha", placeholder: "DD/MM", respuestas: ["3101"],
      pista: "Escribe el día y el mes en cuatro dígitos.", ok: "¡31 de enero! Nuestra fecha."
    }),
    pelicula(2, "A donde nos lleve el día", "Un paseo entre miradores, agua y planes que dan ganas de repetir.", tracks.remix, 14, [
      ambiente("camino", "Para la próxima salida quiero ir sin prisa.", "Podemos decidir el plan sobre la marcha."),
      escena(8, "Me gusta esa parte del paseo", "en la que nos detenemos a mirar."),
      escena(14, "Y esa costumbre de acercarnos", "para que los dos quepamos en la foto."),
      escena(18, "Quiero más ratos así contigo.", "Con agua cerca y el tiempo de nuestro lado."),
      escena(17, "En el siguiente paseo, tú eliges", "dónde hacemos la primera parada.")
    ]),
    pelicula(3, "Tan cerca", "La cercanía de compartir lo que ilusiona y lo que cuesta decir.", tracks.maria, 2, [
      escena(2, "Me gusta sentirte cerca, Luis.", "También cuando cada quien anda en lo suyo."),
      escena(3, "Quiero guardar tiempo para preguntarte", "qué parte del día te hizo sonreír."),
      escena(9, "Y para escucharte con calma", "cuando tengas algo difícil que contarme."),
      clip("olas", "A veces se nos junta todo.", "Podemos sentarnos y empezar por una cosa."),
      escena(20, "Gracias por dejarme acompañarte.", "Quiero que siempre puedas contar conmigo.")
    ]),
    pelicula(4, "Las locuras que guardo", "Fotos intervenidas, caras felices y el gusto de hacer tonterías juntos.", tracks.omar, 10, [
      escena(10, "Si nuestra historia fuera una caricatura,", "esta sonrisa saldría en todos los episodios."),
      escena(15, "Me encanta que en el álbum", "también quepan versiones dibujadas de nosotros."),
      escena(16, "Esta parece la portada de una escapada.", "Que nos den ganas de hacer otra."),
      escena(7, "Quiero seguir haciéndote reír,", "aunque sea justo cuando vamos a tomar la foto."),
      escena(2, "¿Cuál de todas mandarías a enmarcar?", "Yo tardaría un buen rato en escoger.")
    ]),
    pelicula(5, "La suerte de mirarte", "Sandra detiene el álbum en las fotos que más ganas le dan de abrazarlo.", tracks.lenin, 7, [
      escena(1, "En este dibujo siempre me quedo mirando", "lo cerquita que estamos."),
      escena(6, "Me dan ganas de guardar ese abrazo", "para cuando el día pida un poquito de calma."),
      escena(11, "También me gusta volver a esta foto", "y ver cómo te acercaste para salir conmigo."),
      ambiente("miel", "Hay gestos pequeños que se quedan.", "Quiero acordarme de tenerlos contigo."),
      escena(19, "Si hoy pudiera repetir una escena,", "empezaría por darte otro abrazo.")
    ]),
    pelicula(6, "Gracias por estar", "Un agradecimiento por la compañía y por los ratitos que hacen suyo cualquier lugar.", tracks.omar, 13, [
      escena(13, "Gracias por compartir mesa conmigo.", "Me gusta quedarnos platicando después."),
      escena(5, "Gracias por los detalles que caben", "en una tarde cualquiera."),
      escena(20, "Cuando algo te salga bien,", "quiero estar cerca para celebrarlo contigo."),
      escena(4, "Y cuando tengas un día pesado,", "quiero preguntarte qué puedo hacer por ti."),
      escena(14, "Me alegra que estemos haciendo equipo.", "Quiero seguir aprendiendo a cuidarnos.")
    ]),
    pelicula(7, "Todo lo que podemos crear", "Un capítulo sobre hacer lugar para sus sueños y empezar por un plan pequeño.", tracks.remix, 17, [
      ambiente("camino", "Me ilusiona pensar en lo que viene.", "Podemos empezar por contarnos qué soñamos."),
      escena(17, "Quiero preguntarte qué meta te emociona", "y acompañarte en el primer paso."),
      escena(21, "También quiero compartirte mis planes", "para que hagamos espacio para los dos."),
      clip("olas", "Cuando cambiemos de rumbo,", "tomémonos tiempo para decidirlo juntos."),
      escena(12, "Sigamos creyendo, Luis Fernando.", "Juntos podemos crear lo más bonito de la vida.")
    ]),
    serie(8, "Postales de nosotros", "Tres episodios para mirar de nuevo sus paseos, sus brindis y sus fotos más juguetonas.", 18, [
      episodio("El álbum de los dos", "Un juego para volver a encontrar las imágenes del álbum.", tracks.remix, 15, [
        escena(15, "Luis, hoy quiero que mires estas fotos", "como si fueras a escoger la portada de nuestra próxima aventura."),
        escena(16, "Entre un atardecer y una buena cara,", "sé que me costaría quedarme con una sola."),
        escena(18, "Vamos a jugar con algunas de mis favoritas.", "¿Encuentras todos los pares?")
      ], {
        tipo: "memory", titulo: "Pares del álbum",
        pares: [foto(2), foto(5), foto(11), foto(16), foto(18), foto(20)],
        ok: "¡Álbum completo! Qué bonitas ganas de sacar más fotos juntos."
      }),
      episodio("Un brindis chiquito", "Un gracias por los planes que empiezan al sentarse juntos.", tracks.omar, 13, [
        escena(13, "Brindo por esa parte de la cena", "en la que se nos olvida revisar la hora."),
        ambiente("miel", "Quiero que sigamos encontrando tiempo", "para contarnos hasta lo más pequeño."),
        escena(5, "La próxima vez llevo algo dulce.", "¿Tú escoges qué ponemos para escuchar?")
      ]),
      episodio("Dos en el encuadre", "Miradores y agua vistos desde el álbum de Sandra.", tracks.lenin, 14, [
        escena(14, "Algunas fotos me devuelven las ganas", "de salir contigo con la cámara lista."),
        escena(8, "Otras me dan ganas de quedarme quieta", "un ratito más donde estamos."),
        escena(11, "Y estas, en las que cabemos los dos,", "siempre me hacen volver a mirar.")
      ])
    ]),
    serie(9, "Que nunca dejemos de creer", "Tres episodios sobre acompañarse, hacer planes y volver a celebrar el 31 de enero.", 4, [
      episodio("La parte dulce", "Sandra imagina cómo cuidar la ternura en los días de prisa.", tracks.maria, 2, [
        clip("miel", "Quiero que nos sigamos diciendo cosas bonitas", "también cuando nos quede poco tiempo."),
        escena(2, "Un mensaje a media tarde", "a veces alcanza para cambiarme el día."),
        escena(19, "Que nunca nos falte esa miel.", "Y que siempre nos demos chance de acercarnos.")
      ]),
      episodio("Un plan a la vez", "El próximo paseo empieza con una pregunta sencilla.", tracks.remix, 17, [
        ambiente("camino", "Si tuviéramos una tarde libre,", "¿a dónde me llevarías primero?"),
        escena(17, "Yo escogería un lugar para mirar lejos", "y te preguntaría qué quieres lograr este año."),
        escena(18, "Después podríamos volver por algo rico.", "Quiero hacer tiempo para planes así.")
      ]),
      episodio("Lo más bonito de la vida", "El deseo que Sandra quiere volver a compartir cada aniversario.", tracks.maria, 20, [
        clip("olas", "Que nunca nos falten miel y oro,", "y que nunca dejemos de creer,"),
        escena(11, "porque juntos podemos crear", "lo más bonito de la vida."),
        escena(20, "Feliz aniversario, Luis Fernando.", "Te quiero. Sandra Carolina.")
      ])
    ])
  ];

  c.extras = [
    { titulo: "Nuestra foto", img: foto(11), texto: "Me encanta que en una sola foto quepan los dos y todo ese paisaje." },
    { titulo: "Los girasoles", img: foto(5), texto: "Que guardemos ratitos para sorprendernos con detalles." },
    { titulo: "Brindemos", img: foto(13), texto: "Por las sobremesas que todavía nos esperan." },
    { titulo: "31 de enero", img: foto(20), texto: "Feliz aniversario, Luis Fernando. Con cariño, Sandra Carolina." }
  ];
  c.final = {
    titulo: "Una carta para Luis Fernando", imagen: portada(20),
    sinopsis: "Cinco preguntas, una carta de Sandra Carolina y un último montaje para celebrar su aniversario.",
    preguntas: [
      "¿Qué foto de nuestro álbum te gustaría que tuviéramos enmarcada?",
      "¿Qué detalle de los nuestros te alegra en un día cualquiera?",
      "Si apartáramos una tarde para los dos, ¿qué plan escogerías?",
      "¿Qué meta te gustaría que celebráramos juntos cuando la cumplas?",
      "¿Qué deseo escribirías tú para nuestro próximo 31 de enero?"
    ],
    carta: () => [
      "Luis Fernando,",
      "Cada 31 de enero quiero hacerme un ratito para celebrar contigo. Hoy lo hice juntando nuestras fotos. Me detuve en la del mirador, en la de la cena y en las que parecen dibujos. Me gusta que cada una me dé ganas de preguntarte qué recuerdas tú de ese día.",
      "Gracias por las risas y por los ratos que hacemos para estar juntos. Quiero seguir escuchándote cuando me cuentes qué te ilusiona, ayudarte cuando algo se te haga pesado y celebrar contigo las cosas que te salgan bien. También quiero que nos queden tardes para improvisar un paseo y volver con una foto más.",
      "Cuando pienses en lo que viene, cuéntame qué te gustaría hacer. Quiero que hagamos espacio para tus sueños, los míos y los que se nos ocurran juntos. Empecemos por un plan chiquito, de esos que sí podemos poner en el calendario.",
      deseo,
      "Feliz aniversario. Te quiero.\nSandra Carolina"
    ].join("\n\n")
  };
  c.creditos = [
    ["Para", "Luis Fernando"], ["De", "Sandra Carolina"], ["Aniversario", fecha],
    ["Banda sonora", Object.values(tracks).map(([, title]) => title).join(" · ")],
    ["Fotos de ambientación", "Adonyi Gábor y Willian Justen de Vasconcellos (Pexels)"],
    ["Videos de ambientación", "Aurelijus U. y huynhdong huynh (Pexels)"],
    ["", "Continuará ♡"]
  ];
  c.postCreditos = {
    imagen: foto(11), etiqueta: "ESCENA POST-CRÉDITOS",
    texto: "Luis, la próxima foto del álbum todavía está por tomarse.",
    anuncio: "Continuará", subtitulo: "¿Dónde hacemos la siguiente parada?",
    sorpresa: "Tú eliges el lugar. Yo llevo la cámara. — Sandra Carolina"
  };
})();


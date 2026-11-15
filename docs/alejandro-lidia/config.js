(() => {
  const A = "Alejandro Cetina Vivas";
  const B = "Lidia Tejero Loria";
  const title = "Todo me recuerda a ti";
  const photo = (n) => `assets/fotos/foto-${String(n).padStart(2, "0")}.webp`;
  const cover = (name) => `assets/fotos/${name}.webp`;
  const ambient = (name) => `assets/ambiente/${name}.webp`;
  const tracks = [
    ["Yo quería · Cristian Castro", "yo-queria"],
    ["Si la ves · Franco De Vita y Sin Bandera", "si-la-ves"],
    ["Dígale · David Bisbal", "digale"],
    ["Dejaría todo · Chayanne", "dejaria-todo"],
    ["Volverte a amar · Alejandra Guzmán", "volverte-a-amar"],
    ["Se Murió De Amor", "se-murio-de-amor"]
  ].map(([cancion, key]) => ({ cancion, musica: `assets/audio/${key}.mp3` }));

  const still = (img, ...texto) => ({ img: typeof img === "number" ? photo(img) : img, texto });
  const clip = (name, texto, folder = "ambiente") => ({
    video: `assets/${folder}/${name}.mp4`, poster: `assets/${folder}/${name}.webp`, texto: [texto]
  });
  const episode = (titulo, descripcion, track, escenas) => ({
    titulo, descripcion, duracion: 72, ...tracks[track], escenas
  });
  const film = (num, poster, titulo, sinopsis, track, escenas) => ({
    num, tipo: "pelicula", titulo, imagen: cover(poster), anio: 2026, clasificacion: "TP", sinopsis,
    ...tracks[track], top10: num === 0, creditos: [["Una historia de", `${A} y ${B}`]],
    episodios: [episode(titulo, sinopsis, track, escenas)]
  });

  const temporadas = [
    film(0, "cine", "Una película de terror", "Una plática por Facebook y una función de Actividad paranormal. Así empezó todo.", 0, [
      clip("mensaje", "Lidia, todavía me da ternura pensar que todo empezó con una plática en Facebook."),
      still(ambient("cine"), "¿Quién iba a decir que salir a ver Actividad paranormal iba a ser el principio de una historia tan bonita?"),
      still(9, "Me gusta volver a esos primeros momentos, cuando todavía nos quedaba tanto por conocernos."),
      still(20, "Entre todo lo que pudo pasar aquella noche, qué suerte que coincidimos tú y yo."),
      still(8, "Si pudiera repetir algo de ese día, sería la emoción de estar empezando a conocerte.")
    ]),
    film(1, "nokia", "Hasta que amaneciera", "Un Nokia de tapita, un viaje a Cancún y las ganas de seguir escribiéndose toda la noche.", 1, [
      still(3, "¿Te acuerdas de tu Nokia de tapita? Nos escribíamos de noche como si al día siguiente no hubiera que levantarse."),
      clip("mensaje", "Me hacía feliz ver un mensaje tuyo y saber que del otro lado tú también seguías despierta."),
      clip("playa", "En Cancún, cuando me tocaba dormir en la sala, nos la pasábamos mensajeándonos toda la noche."),
      still(16, "Se acababa un tema y encontrábamos otro. Siempre quedaba algo más que quería contarte."),
      still(6, "Todavía extraño la confianza con la que podíamos contarnos cualquier cosa.")
    ]),
    film(2, "lluvia", "Aunque cayera el cielo", "Alejandro recuerda los días de tormenta en que lo único que quería era verla.", 2, [
      clip("lluvia", "¿Te acuerdas de que hasta con lluvia y tormenta iba a verte? Me moría de ganas de estar contigo."),
      still(26, "Hoy puede empezar a llover cualquier tarde y, de pronto, ya estoy pensando en ti."),
      still(4, "También me pasa con una canción o cuando me encuentro una de estas fotos y me quedo mirándola."),
      still(22, "Extraño cosas muy sencillas de ti, como verte sonreír en medio de cualquier plática."),
      still(14, "Lidia, casi todo encuentra la manera de recordarme a ti.")
    ]),
    film(3, "familia", "Renata y Renato", "Un agradecimiento por la familia que formaron y por todo lo vivido al verlos crecer.", 3, [
      still(10, "Cuando vuelvo a mirar estas fotos, lo primero que siento es gratitud."),
      still(7, "Renata y Renato son dos personas maravillosas. Qué fortuna haberlos tenido contigo."),
      still(13, "Ver las fotos de sus cumpleaños me hace pensar en lo rápido que han crecido y en lo mucho que disfruté esos días."),
      clip("recuerdo", "Gracias por tantos momentos que hoy puedo volver a mirar y sentir un poquito más cerca.", "video"),
      still(17, "Quiero que nuestros hijos puedan contar conmigo y que entre tú y yo podamos hablar de lo que necesitan con calma y respeto."),
      still(18, "Gracias, Lidia, por lo que hemos hecho como familia y por todo lo que tú les has dado.")
    ]),
    {
      num: 4, tipo: "serie", titulo: "Si un día quieres hablar", imagen: cover("serie"),
      anio: 2026, clasificacion: "TP", ...tracks[4],
      sinopsis: "Tres episodios sobre lo que Alejandro admira de Lidia, lo que quiere aprender y la conversación que le gustaría tener con ella.",
      creditos: [["De", A], ["Para", B]],
      episodios: [
        episode("Mirarte otra vez", "Los detalles de Lidia que todavía le hacen sonreír.", 5, [
          still(29, "Hay fotos en las que me basta verte para que se me dibuje una sonrisa."),
          still(24, "En las más sencillas reconozco gestos tuyos que se me quedaron grabados."),
          still(23, "Me acuerdo de tu manera de reírte y de cómo una tarde cualquiera contigo se me podía pasar volando."),
          still(2, "Cuando guardé estas fotos, seguramente pensaba en ese momento. Hoy también me recuerdan la suerte de haberte conocido."),
          still(27, "Gracias por haberme dejado compartir tantos momentos de tu vida.")
        ]),
        episode("Lo que quiero cuidar", "Estar presente como papá y aprender a escuchar mejor.", 0, [
          still(11, "Con el tiempo me he preguntado en qué cosas pude escucharte más y estar más presente."),
          still(19, "Quiero darme el tiempo de escuchar lo que tú viviste y entenderlo con tus propias palabras."),
          still(12, "Quiero compartir con hechos las responsabilidades del día a día con nuestros hijos."),
          still(21, "Me importa que podamos ponernos de acuerdo con respeto, también cuando pensemos distinto."),
          still(28, "Me da orgullo ver cuánto han crecido Renata y Renato. Quiero seguir estando ahí para ellos.")
        ]),
        episode("Una conversación contigo", "Una invitación a hablar con calma, cuando Lidia quiera.", 4, [
          clip("atardecer", "Hay algo que quería decirte con calma desde hace tiempo: sigo amándote."),
          still(15, "He pensado en lo bonito que sería sentarnos a platicar y saber cómo estás hoy."),
          still(25, "Me gustaría escuchar lo que te gustaría que yo entendiera, aunque sea difícil de hablar."),
          still(5, "Gracias por lo que compartimos y por lo importante que ha sido para mí ser papá contigo."),
          still(1, "Si algún día quieres hablar, me dará gusto escucharte. Tómate el tiempo que necesites, Lidia.")
        ])
      ]
    }
  ];

  const fotos = {
    hero: cover("hero"), perfilB: cover("perfil-lidia"), perfilPareja: cover("perfil-pareja"),
    t0: cover("cine"), t1: cover("nokia"), t2: cover("lluvia"), t3: cover("familia"),
    t4: cover("serie"), t5: photo(14), final: cover("carta"), postCreditos: photo(1)
  };
  const letter = `Lidia:

Hace poco pensé en tu Nokia de tapita. Me acordé de aquellas noches en que nos escribíamos hasta que amanecía, y de la vez en Cancún en que yo dormía en la sala y la conversación seguía y seguía. ¿Quién hubiera pensado, cuando apenas platicábamos por Facebook y fuimos a ver Actividad paranormal, que íbamos a compartir tanto?

Hay días en que oigo caer la lluvia y me acuerdo de cómo salía a verte aunque hubiera tormenta. Todavía encuentro cosas que me llevan a ti. Ver estas fotos me recordó cuánto extraño platicar contigo y verte sonreír.

Gracias por todo lo que vivimos y por la familia que hicimos. Ver crecer a Renata y Renato es una alegría enorme. Quiero seguir estando presente para ellos y hacer mi parte, también en los días comunes y en las conversaciones difíciles.

También he pensado en las veces que pude escucharte mejor. Me importa saber cómo viviste tú nuestra historia y cómo estás ahora. Quiero aprender a darte espacio, a escuchar sin interrumpir y a cumplir lo que diga con hechos.

Sigo amándote, Lidia. Si algún día te nace hablar conmigo, me gustaría sentarnos con calma, escucharte y ver juntos qué tendría sentido para los dos. Voy a respetar lo que tú quieras y el tiempo que necesites.

Gracias por leerme.

Con cariño,
Alejandro`;

  window.TDN = {
    pareja: { nombreA: A, nombreB: B, aniversario: "", viajes: [], mensajeFinal: letter },
    fotos, temporadas,
    media: { intro: "assets/audio/intro.mp3", musica: "", videoFinal: "assets/video/escena-final.mp4" },
    acceso: { demo: false, password: "0202", pistaPassword: "La clave de cuatro números que te compartió Alejandro.", estreno: "" },
    notificacion: { whatsapp: "529851259327" },
    sitio: {
      url: "https://streaming-us-2.rotfstudio.com/alejandro-lidia/splash.html",
      coincidencia: 100, clasificacion: "TP", clasificacionTexto: "Romance",
      heroTag: "ESTRENO · NUESTRO CAPÍTULO", heroTop: "De Alejandro para Lidia", titulo: title,
      sinopsis: "Una plática por Facebook, una noche de cine y mensajes hasta el amanecer. Alejandro vuelve a esos recuerdos y le escribe a Lidia lo que todavía lleva en el corazón.",
      generos: ["Romance", "Memorias", "Familia"], filaRecomendada: temporadas[0].titulo
    },
    extras: [
      { titulo: "Así me acuerdo de ti", img: photo(29), texto: "Lidia, me gusta volver a estas fotos y encontrar en ellas tu sonrisa, tus gestos y la emoción de los días que compartimos." },
      { titulo: "La banda sonora", img: ambient("cine"), texto: tracks.map((track) => track.cancion).join(" · ") }
    ],
    final: {
      titulo: "Una carta para Lidia", imagen: fotos.final,
      sinopsis: "Alejandro reúne lo que recuerda, lo que agradece y lo que quisiera decirte hoy.",
      preguntas: ["¿Hay algo que te gustaría que escuchara de ti?"], carta: () => letter
    },
    creditos: [["Una dedicatoria de", A], ["Para", B], ["Con todo mi cariño", "Renata y Renato"], ["Primera escena", "Una plática en Facebook"]],
    postCreditos: {
      imagen: fotos.postCreditos, etiqueta: "ESCENA POST-CRÉDITOS",
      texto: "De todas las historias que pude vivir, agradezco muchísimo haber coincidido contigo.",
      anuncio: "Gracias, Lidia", subtitulo: "Con cariño, Alejandro",
      sorpresa: "Me sigue dando gusto pensar que, antes de todo esto, en algún momento nos llegó aquel primer mensaje."
    }
  };
})();

/* =====================================================================
   TEMPORADAS DE NOSOTROS — Victoria para Mary
   Paquete Nuestro Capítulo ($79) + 1 película extra (2026-11-22): 5 películas, 1 serie (3 episodios), 1 juego (memorama).
   Envía: Victoria Reyes. Recibe: Mary Olivas. Su historia empezó en septiembre de 2025; novias desde el
   13 de abril de 2026, propuesta de matrimonio el 3 de junio de 2026. Apodo: "mi chaparrita hermosa preciosa".
   Contraseña: 130426 (su aniversario). Canciones recortadas poco antes del clímax.
   Fotos: 23 del cliente (assets/fotos, versión vertical en assets/fotos/v).
   Videos: 8 del cliente recortados en 13 clips verticales sin audio (assets/video/v).
   Relleno: clips de ../comun/medios en versión vertical y 7 animaciones hechas para este pedido
   (partida, fecha, anillo, cine, chaparrita, seismeses, continuara).
   ===================================================================== */
window.TDN = (function () {

  /* 1. DATOS */
  const P = {
    nombreA: "Victoria",
    nombreB: "Mary",
    apodos: ["mi chaparrita hermosa preciosa", "mi chaparrita"],
    fechaInicio: "2026-04-13",        // El día que empezó su historia de amor
    aniosManual: 1,
    ciudad: "",
    primeraCita: "",
    cancion: "Mi Sorpresa Fuiste Tú",
    artista: "Calibre 50",
    viajes: [],
    dificiles: [],
    anecdota: "",
    culpableAnecdota: 0,
    gustosB: ["Las rutas en moto", "El cine", "Bailar", "Free Fire"],
    suenos: ["Casarnos", "Muchas rutas más en moto", "Estar juntas en las buenas y en las peores"],
    mensajeFinal: "Le doy gracias a Dios porque me trajo a la mujer que tanto estuve esperando en mi vida. Siempre voy a cuidar de ti, siempre te voy a valorar y siempre te voy a mirar con amor como la primera vez que te vi. Te amo con toda mi alma."
  };
  const inicio = new Date(P.fechaInicio + "T00:00:00");
  P.anioInicio = inicio.getFullYear();
  P.anios = P.aniosManual || 1;
  P.fechaCodigo = "13042026";
  P.apodo = P.apodos[0];

  /* 2. FOTOS */
  const fo = (n) => "assets/fotos/" + n + ".webp";
  const F = {
    hero: fo("parque-beso"),
    perfilB: fo("perfil-mary"),
    perfilPareja: fo("perfil-pareja"),
    // t0..t5 también son las cartas del memorama de fotos
    t0: fo("selfie-juntas"), t1: fo("girasoles"), t2: fo("propuesta-letrero"),
    t3: fo("corazon-moto"), t4: fo("beso-mejilla"), t5: fo("lentes-beso"),
    t6: fo("feria"), t7: fo("propuesta-flores"),
    final: fo("propuesta-velas"),
    puzzle: fo("selfie-juntas"),
    puzzle2: "",
    postCreditos: fo("parque-beso")
  };

  /* 3. AUDIO / VIDEO (cada canción empieza poco antes de su clímax) */
  const M = {
    intro: "assets/audio/intro.mp3",
    temporadas: [
      "assets/audio/mi-sorpresa-fuiste-tu.mp3",
      "assets/audio/desde-que-te-tengo.mp3",
      "assets/audio/de-uno-y-de-todos-los-modos.mp3",
      "assets/audio/luz-de-dia.mp3",
      "assets/audio/mmxxs.mp3",
      "assets/audio/de-aqui-a-la-luna.mp3"
    ],
    canciones: [
      "Mi Sorpresa Fuiste Tú · Calibre 50",
      "Desde Que Te Tengo · Carín León",
      "De Uno y de Todos los Modos · Palomo",
      "Luz de Día · Enanitos Verdes",
      "MMXXs · Virlán García",
      "De Aquí a la Luna"
    ],
    musica: "",
    videoFinal: "assets/video/v/continuara.mp4",
    audioRemitente: ""
  };

  /* 4. ACCESO Y NOTIFICACIÓN */
  const acceso = {
    demo: false,
    cualquierClave: false,
    password: "130426",
    pistaPassword: "El día que empezó nuestra historia de amor (DDMMAA)",
    estreno: ""
  };

  const notificacion = { whatsapp: "526691998984", email: "", endpoint: "" };

  const sitio = {
    url: new URL("./", location.href).href,
    coincidencia: 100,
    clasificacion: "TP",
    clasificacionTexto: "Amor, aventuras en moto y mucho romance",
    heroTag: "MI ESPOSA, MI PARA SIEMPRE",
    heroTop: "N.º 1 en el corazón de Victoria",
    sinopsis: `Mensajes con corazoncitos, partidas de Free, rutas en moto y un "sí" para siempre. ` +
              `5 películas y 1 serie originales de ${P.nombreA} para su esposa, su chaparrita hermosa preciosa.`,
    estrenoTexto: `5 películas y 1 serie originales de ${P.nombreA}, solo para ti`,
    generos: ["Romance", "Aventura", "Basada en hechos reales"],
    filaRecomendada: "Para mi chaparrita hermosa preciosa"
  };

  /* 5. PELÍCULAS Y SERIES */
  // V(n): clip vertical (centrado sobre fondo difuminado) en assets/video/v/
  const V = (n, a, b) => ({ img: "assets/video/v/" + n + ".mp4?v=" + (n === "seismeses" ? 2 : 1), poster: "assets/video/v/" + n + ".webp?v=" + (n === "seismeses" ? 2 : 1), texto: [a, b] });
  // S(foto): foto del cliente en versión vertical completa (assets/fotos/v/)
  const S = (n, a, b) => ({ img: "assets/fotos/v/" + n + ".webp?v=1", texto: [a, b] });
  const son = (i) => ({ musica: M.temporadas[i], cancion: M.canciones[i] });
  const cred = (...extra) => [["Protagonizada por", `${P.nombreB} y ${P.nombreA}`], ...extra, ["Dirección", "Dios, que nos juntó"]];

  const temporadas = [
    /* =================== PELÍCULAS =================== */
    {
      num: 0, tipo: "pelicula", titulo: "Mi Sorpresa Fuiste Tú", anio: 2026, clasificacion: "TP",
      imagen: F.t0, ...son(0), top10: true,
      sinopsis: "Nuestra historia de amor, contada por Victoria para su esposa.",
      creditos: cred(["Historia original", P.nombreA], ["Banda sonora", M.canciones[0]]),
      episodios: [{
        titulo: "Mi Sorpresa Fuiste Tú", duracion: 116,
        descripcion: "Nuestra historia, desde el principio.",
        escenas: [
          V("septiembre", "Nuestra historia comenzó", "en el mes de septiembre de 2025…"),
          S("bn-domingo", "…y comenzábamos con nuestros mensajes", "con corazoncitos. 💕"),
          V("primer-mensaje", "Y ya hacíamos videollamadas", "todo el día."),
          V("partida", "Y de ahí comenzó a jugar Free", "para acercarse más a mí. 🎮"),
          V("fecha", "El 13 de abril de 2026", "comenzó nuestra historia de amor."),
          S("beso-mejilla", "Y fue creciendo el amor que nos dábamos,", "tanto que decidimos dar el segundo paso:"),
          V("propuesta-rodilla", "un 3 de junio de 2026", "le pedí que se casara conmigo. 💍"),
          V("motos-salida", "Y así comenzaron nuestras aventuras:", "paseos en moto, fuimos al cine…"),
          V("ruta-moto", "Nos vamos de ruta en moto escuchando música,", "bailando… algo muy bonito. 🏍️"),
          V("seismeses", "Y hasta ahorita llevamos", "ya 7 meses juntas. ❤")
        ],
        recompensa: "Cupón: una ruta en moto a donde tú quieras 🏍️"
      }]
    },
    {
      num: 1, tipo: "pelicula", titulo: "Mi Chaparrita Hermosa Preciosa", anio: 2026, clasificacion: "TP",
      imagen: F.t1, ...son(1), top10: true,
      sinopsis: "Una carta de Victoria para la mujer que tanto estuvo esperando.",
      creditos: cred(["Carta", P.nombreA], ["Banda sonora", M.canciones[1]]),
      episodios: [{
        titulo: "Mi Chaparrita Hermosa Preciosa", duracion: 116,
        descripcion: "Lo que siento por ti, con mis palabras.",
        escenas: [
          V("chaparrita", "Le doy gracias a Dios porque me trajo a la mujer", "que tanto estuve esperando en mi vida."),
          S("girasoles", "Y quiero recordarte que te amo", "con toda mi alma,"),
          S("selfie-juntas", "mi chaparrita hermosa preciosa,", "que daría todo por ti"),
          S("manos-anillo", "y que siempre voy a estar contigo", "en las buenas y en las peores."),
          S("lentes-beso", "Siempre voy a cuidar de ti,", "siempre te voy a valorar"),
          S("bn-flores", "y siempre te voy a mirar con amor", "como la primera vez que te vi."),
          S("parque-beso", "Eres lo mejor", "que ha llegado a mi vida."),
          S("festejo-globos", "Gracias por cada sonrisa", "y por cada día a mi lado."),
          S("love-is", "Desde que te tengo,", "mi vida suena más bonito. 😍"),
          V("selfie-rosas", "Te amo con toda mi alma. 💕", "— Victoria")
        ],
        recompensa: "Cupón: una cita sorpresa planeada por mí 🌹"
      }]
    },
    {
      num: 2, tipo: "pelicula", titulo: "¿Te Quieres Casar Conmigo?", anio: 2026, clasificacion: "TP",
      imagen: F.t2, ...son(2), top10: true,
      sinopsis: "3 de junio de 2026: globos, velas, flores y la pregunta más importante.",
      creditos: cred(["Producción", "Globos, velas y mucho amor"], ["Banda sonora", M.canciones[2]]),
      episodios: [{
        titulo: "¿Te Quieres Casar Conmigo?", duracion: 116,
        descripcion: "El día que dimos el segundo paso.",
        escenas: [
          V("anillo", "3 de junio de 2026.", "El día que decidimos dar el segundo paso."),
          S("propuesta-cuarto", "Globos, velas y pétalos…", "todo listo para ti. 🎈"),
          V("propuesta-llegada", "Y llegaste tú…", "con el corazón a mil."),
          S("propuesta-letrero", "\"¿Te quieres casar conmigo?\"", "Una pregunta, todo mi corazón."),
          V("propuesta-rodilla", "De rodillas te pedí", "que fueras mi esposa. 💍"),
          S("propuesta-velas", "Ese momento", "lo voy a guardar para siempre."),
          V("propuesta-flores", "Flores para la mujer", "que tanto estuve esperando. 🌹"),
          V("propuesta-abrazo", "Y en ese abrazo", "empezó nuestro para siempre."),
          S("propuesta-flores", "Te amo de uno", "y de todos los modos."),
          S("manos-anillo", "Prometo estar contigo", "en las buenas y en las peores. ❤")
        ],
        recompensa: "Cupón: una cena para brindar por nuestro compromiso 🥂"
      }]
    },
    {
      num: 3, tipo: "pelicula", titulo: "Luz de Día", anio: 2026, clasificacion: "TP",
      imagen: F.t3, ...son(3), top10: true,
      sinopsis: "Rutas en moto, música, cine y baile. Una película de aventuras sobre dos ruedas.",
      creditos: cred(["Locaciones", "Cada ruta que hemos recorrido"], ["Banda sonora", M.canciones[3]]),
      episodios: [{
        titulo: "Luz de Día", duracion: 116,
        descripcion: "Nuestras aventuras juntas.",
        escenas: [
          V("motos-campo", "Nuestras aventuras", "van sobre dos ruedas. 🏍️"),
          S("corazon-moto", "Un corazón con las manos", "y todo el camino por delante."),
          V("ruta-moto-2", "Nos vamos de ruta", "escuchando música…"),
          V("n09", "…y cada kilómetro contigo", "se vuelve un recuerdo bonito."),
          V("mar", "El mar,", "el viento y tú."),
          V("playa-abrazo", "Abrazarte frente al mar", "es mi lugar favorito. 🌊"),
          V("lodo", "Aunque el camino se ponga difícil,", "lo cruzamos juntas. 😂"),
          V("cine", "Fuimos al cine:", "función para dos. 🍿"),
          S("feria", "Luces, risas y paseos:", "contigo todo es fiesta. 🎡"),
          V("selfie-risas", "Bailando, cantando, riendo…", "contigo soy luz de noche y luz de día. ☀️")
        ],
        recompensa: "Cupón: una noche de cine, tú escoges la película 🍿"
      }]
    },

    /* =================== SERIE =================== */
    {
      num: 4, tipo: "serie", titulo: "Siete Meses Juntas", anio: 2026, clasificacion: "TP",
      imagen: F.t4, ...son(4), top10: true,
      sinopsis: "Gracias, lo que viene y nuestro para siempre. Una serie corta sobre nosotras.",
      creditos: cred(["Guion", "Escrito con todo mi amor"], ["Banda sonora", M.canciones[4]]),
      episodios: [
        {
          titulo: "Gracias", duracion: 72,
          descripcion: "Todo lo que quiero agradecerte.",
          escenas: [
            S("flores-detalle", "Gracias por cada detalle,", "por pequeño que sea."),
            V("esc04", "Gracias por los mensajes y videollamadas", "que empezaron todo."),
            S("pastel", "Gracias por las risas", "que me regalas cada día. 🎂"),
            S("bn-beso", "Gracias por tus besos,", "tu paciencia y tu cariño."),
            S("propuesta-espejo", "Gracias por decirme que sí", "y por elegirme cada día. 💍"),
            S("girasoles", "Y gracias a Dios", "por ponerte en mi camino. 🙏")
          ],
          recompensa: "Cupón: un día de consentirte, tú mandas 👑"
        },
        {
          titulo: "Lo Que Viene", duracion: 72,
          descripcion: "Nuestros sueños, uno por uno.",
          escenas: [
            V("esc11", "Más rutas en moto", "y más atardeceres juntas. 🌅"),
            V("vinilo", "Más canciones", "para bailar tú y yo. 🎶"),
            S("partida-free", "Más partidas de Free juntas,", "como las que nos acercaron. 🎮"),
            S("manos-reloj", "Caminar de la mano", "hasta el día de nuestra boda. 💍"),
            V("n72", "Despertar cada día", "sabiendo que te tengo."),
            S("selfie-juntas", "Y cumplir juntas", "cada sueño que tengamos.")
          ],
          recompensa: "Cupón: escribir juntas nuestra lista de sueños ✍️"
        },
        {
          titulo: "Para Siempre", duracion: 72,
          descripcion: "7 meses juntas, y lo que nos falta.",
          escenas: [
            V("atardecer", "Siete meses parecen poco…", "pero ya eres toda mi vida."),
            V("esc16", "Siempre voy a cuidar de ti", "y siempre te voy a valorar."),
            S("beso-mejilla", "En las buenas y en las peores,", "aquí voy a estar."),
            V("seismeses", "7 meses juntas", "y lo que nos falta…"),
            V("continuara", "Esta historia continúa.", "Ahora te toca a ti: ve a El Final. ❤")
          ],
          recompensa: "Ya puedes ver: EL FINAL 🔴"
        }
      ]
    },

    /* =================== PELÍCULA EXTRA (dedicatoria) =================== */
    {
      num: 5, tipo: "pelicula", titulo: "De Aquí a la Luna", anio: 2026, clasificacion: "TP",
      imagen: fo("kodak-juntas"), ...son(5), top10: true,
      sinopsis: "Una dedicatoria de Victoria para su esposa: un amor que no cabe ni de aquí a la luna.",
      creditos: cred(["Dedicatoria", P.nombreA], ["Banda sonora", M.canciones[5]]),
      episodios: [{
        titulo: "De Aquí a la Luna", duracion: 100,
        descripcion: "Mi dedicatoria para ti.",
        escenas: [
          V("luna", "Cuando me preguntas cuánto te amo…", "no hay una respuesta para explicarlo."),
          S("kodak-juntas", "Mi chaparrita hermosa preciosa,", "lo que siento por ti no cabe en palabras."),
          S("corazon-beso", "Me mandas un corazón", "y se me olvida todo lo demás. 💕"),
          S("mar-abrazadas", "Frente al mar, abrazadas,", "sé que contigo lo tengo todo. 🌊"),
          S("sonrisa", "Tu sonrisa", "es mi lugar favorito."),
          S("festejo-globos", "Celebrarte", "es de lo más bonito que me ha pasado. 🌹"),
          V("playa-abrazo", "De aquí a la luna", "es tan corta la distancia…"),
          S("bn-beso", "…que no puede compararse", "con lo que siento por ti."),
          S("manos-anillo", "Te elegí para toda la vida", "y te volvería a elegir mil veces. 💍"),
          V("luna", "Te amo de aquí a la luna…", "y mucho más allá. 🌙 — Victoria")
        ],
        recompensa: "Cupón: una noche viendo la luna juntas 🌙"
      }]
    }
  ];

  /* 6. DETRÁS DE CÁMARAS */
  const extras = [
    { titulo: "Casting", img: fo("girasoles"), texto: "El papel de chaparrita hermosa preciosa siempre fue tuyo." },
    { titulo: "Locaciones", img: fo("corazon-moto"), texto: "Rutas en moto, el cine, el mar, la feria y todos los caminos que nos faltan." },
    { titulo: "Banda sonora", img: fo("selfie-juntas"), texto: M.canciones.join(" · ") },
    { titulo: "Escenas eliminadas", img: fo("partida-free"), texto: "Horas de videollamadas y partidas de Free que no cupieron aquí, pero que empezaron todo." }
  ];

  /* 7. TEMPORADA FINAL */
  const final = {
    titulo: "El Final: Tu Turno",
    sinopsis: `Después de 5 películas y 1 serie, la historia sigue. En este final, tú escribes el siguiente capítulo.`,
    imagen: F.final,
    preguntas: [
      "¿Cuál es tu película o serie favorita de este regalo y por qué?",
      "¿Cuál es tu recuerdo favorito de nosotras?",
      "¿Qué fue lo que más sentiste el 3 de junio?",
      "¿A dónde nos vamos en nuestra próxima ruta en moto?",
      `Escríbele a ${P.nombreA} algo que nunca le hayas dicho.`
    ],
    carta: (r) =>
`Para mi chaparrita hermosa preciosa:

Llegaste al final del catálogo, pero no de nuestra historia.

Dices que tu título favorito es "${r[0]}". El mío es cualquiera en el que sales tú.

Tu recuerdo favorito de nosotras: ${r[1]}. Prometo que vamos a hacer muchos más.

Del 3 de junio te quedaste con esto: ${r[2]}. Yo me quedé con tu sí.

Y la próxima ruta: ${r[3]}. Ve preparando el casco.

${P.mensajeFinal}

Con todo mi amor,
${P.nombreA}`
  };

  /* 8. CRÉDITOS Y POST-CRÉDITOS */
  const creditos = [
    ["Una producción original de", P.nombreA],
    ["Protagonizada por", "Mary, mi esposa, mi chaparrita hermosa preciosa"],
    ["Coprotagonista", P.nombreA],
    ["Dirección", "Dios, que nos juntó"],
    ["Guion", "Nuestros mensajes con corazoncitos"],
    ["Banda sonora", M.canciones.join(" · ")],
    ["Escenas de acción", "Nuestras partidas de Free y las rutas en moto"],
    ["Coreografía", "Lo que bailamos juntas"],
    ["Dobles de riesgo", "Ninguno. Todo fue real."],
    ["Agradecimientos especiales", "A Dios, por traerte a mi vida"],
    ["", "Ningún corazón fue dañado durante la filmación de estas películas y series."],
    ["", `© ${new Date().getFullYear()} ${P.nombreA}. Todos los derechos reservados (para nosotras).`]
  ];

  const postCreditos = {
    imagen: F.postCreditos,
    etiqueta: "ESCENA POST-CRÉDITOS",
    texto: "Esta historia acaba de ser renovada… para toda la vida.",
    anuncio: "Nueva temporada",
    subtitulo: "Próximamente: nuestra boda y todas las rutas que nos faltan. 💍",
    sorpresa: "Te amo con toda mi alma, mi chaparrita hermosa preciosa 💕"
  };

  // Paquete de $79: solo el memorama de fotos en Juegos
  const arcades = ["memory"];

  return { pareja: P, fotos: F, media: M, acceso, notificacion, sitio, temporadas, extras, final, creditos, postCreditos, arcades };
})();

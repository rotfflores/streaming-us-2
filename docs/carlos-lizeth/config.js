/* =====================================================================
   TEMPORADAS DE NOSOTROS — Carlos para Lizeth
   Paquete Nuestro Capítulo ($79): 4 películas, 1 serie (3 episodios), 1 juego (memorama).
   Envía: Carlos. Recibe: Lizeth. Aniversario: no aplica.
   Historia: la letra de la canción que Carlos mandó hacer ("Lizeth, Mi Amor a Primera Vista"),
   completa y tal cual en la película 1. El resto sale de esa misma historia (la esquina de su casa,
   llegó con su niña, el carro y la plática, el beso que no se atrevió a dar, hoy es su esposa),
   sin inventar fechas ni lugares.
   Contraseña: lizeth. Canciones del cliente recortadas poco antes del clímax.
   12 fotos y 1 video del cliente (assets/fotos/v = foto completa sobre fondo difuminado) +
   13 animaciones hechas para este pedido + algunos clips de stock verticales.
   ===================================================================== */
window.TDN = (function () {

  /* 1. DATOS */
  const P = {
    nombreA: "Carlos",
    nombreB: "Lizeth",
    apodos: ["mi amor"],
    fechaInicio: "",
    aniosManual: 1,
    ciudad: "",
    primeraCita: "En la esquina de tu casa",
    cancion: "De Ti Enamorado",
    artista: "Banda Sinaloense MS",
    viajes: [],
    dificiles: [],
    anecdota: "",
    culpableAnecdota: 0,
    gustosB: ["Tu sonrisa", "Tu manera de hablar", "Tu carita"],
    suenos: ["Una vida entera juntos", "Seguir construyendo nuestro hogar", "Amarte toda la vida"],
    mensajeFinal: "Si volviera a vivir aquella tarde, en la misma esquina te volvería a esperar. Te amo, Lizeth. ❤"
  };
  P.anioInicio = 2026;
  P.anios = P.aniosManual || 1;
  P.fechaCodigo = "";
  P.apodo = P.apodos[0];

  /* 2. FOTOS */
  const fo = (n) => "assets/fotos/" + n + ".webp?v=1";
  const F = {
    hero: "assets/fotos/hero.webp?v=2",
    perfilB: fo("perfil-lizeth"),
    perfilPareja: fo("perfil-pareja"),
    // t0..t5 también son las cartas del memorama de fotos
    t0: fo("p02"), t1: fo("p06"), t2: fo("p05"),
    t3: fo("p07"), t4: fo("p10"), t5: fo("p03"),
    t6: fo("p04"), t7: fo("p11"),
    final: fo("p08"),
    puzzle: fo("p06"),
    puzzle2: "",
    postCreditos: "assets/video/v/teamo.webp?v=1"
  };

  /* 3. AUDIO / VIDEO (cada canción empieza poco antes de su clímax) */
  const M = {
    intro: "assets/audio/intro.mp3",
    temporadas: [
      "assets/audio/de-ti-enamorado.mp3",
      "assets/audio/amor-del-bueno.mp3",
      "assets/audio/mil-gracias.mp3",
      "assets/audio/sobre-mis-pies.mp3",
      "assets/audio/si-tu-te-fueras.mp3"
    ],
    canciones: [
      "De Ti Enamorado · Banda Sinaloense MS de Sergio Lizárraga",
      "Amor del Bueno · Reyli Barba",
      "Mil Gracias Por Existir · Marca MP ft. Grupo Firme",
      "Sobre Mis Pies · La Arrolladora Banda El Limón",
      "Si Tú Te Fueras de Mí · Marca MP"
    ],
    musica: "",
    videoFinal: "assets/video/v/continuara.mp4?v=1",
    audioRemitente: ""
  };

  /* 4. ACCESO Y NOTIFICACIÓN */
  const acceso = {
    demo: false,
    cualquierClave: false,
    password: "lizeth",
    pistaPassword: "Tu nombre",
    estreno: ""
  };

  const notificacion = { whatsapp: "526572991473", email: "", endpoint: "" };

  const sitio = {
    url: new URL("./", location.href).href,
    coincidencia: 100,
    clasificacion: "TP",
    clasificacionTexto: "Amor a primera vista",
    heroTag: "MI AMOR A PRIMERA VISTA",
    heroTop: "N.º 1 en el corazón de Carlos",
    sinopsis: `Todo empezó una tarde, en la esquina de tu casa. Hoy eres mi esposa. ` +
              `4 películas y 1 serie originales de ${P.nombreA} para ${P.nombreB}.`,
    estrenoTexto: `4 películas y 1 serie originales de ${P.nombreA}, solo para ti`,
    generos: ["Romance", "Amor a primera vista", "Basada en una historia real"],
    filaRecomendada: "Para Lizeth, mi esposa"
  };

  /* 5. PELÍCULAS Y SERIES */
  // V(n): animación o clip vertical en assets/video/v/ · Fv(n): foto completa en assets/fotos/v/
  const V = (n, ...t) => ({ img: "assets/video/v/" + n + ".mp4?v=1", poster: "assets/video/v/" + n + ".webp?v=1", texto: t });
  const Fv = (n, ...t) => ({ img: "assets/fotos/v/" + n + ".webp?v=1", texto: t });
  const son = (i) => ({ musica: M.temporadas[i], cancion: M.canciones[i] });
  const cred = (...extra) => [["Protagonizada por", `${P.nombreB} y ${P.nombreA}`], ...extra, ["Dirección", "El amor que te tengo"]];

  const temporadas = [
    /* =================== PELÍCULAS =================== */
    {
      num: 0, tipo: "pelicula", titulo: "Lizeth, Mi Amor a Primera Vista", anio: 2026, clasificacion: "TP",
      imagen: F.t1, ...son(0), top10: true,
      sinopsis: "La canción que Carlos escribió para ti, contada como una película. Basada en una historia real: la nuestra.",
      creditos: cred(["Letra original", P.nombreA], ["Banda sonora", M.canciones[0]]),
      episodios: [{
        titulo: "Lizeth, Mi Amor a Primera Vista", duracion: 156,
        descripcion: "Desde aquella primera mirada.",
        escenas: [
          V("titulo", "Recuerdo aquella tarde tan bonita,", "cuando por primera vez te pude mirar,", "te esperaba en la esquina de tu casa,", "sin imaginar lo que iba a comenzar."),
          Fv("p04", "Llegaste acompañada de tu niña,", "te subiste a mi carro y comenzamos a platicar,", "fue una primera cita inolvidable,", "de esas que nunca se pueden olvidar."),
          V("beso", "Yo quería robarte un beso,", "pero los nervios no me dejaron intentar,", "me quedé mirando tu carita,", "y escuchando tu manera de hablar."),
          Fv("p01", "Había algo especial en tu sonrisa,", "en cada palabra que salía de tu voz,", "sin darme cuenta fui enamorándome,", "y supe que eras alguien para mí, mi amor."),
          Fv("p06", "Lizeth, desde aquella primera mirada,", "algo muy bonito nació en mi corazón,", "hoy eres mi esposa, mi compañera,", "la mujer que conquistó todo mi amor."),
          V("familia", "Lizeth, qué bonito fue encontrarte,", "qué regalo tan hermoso me dio Dios,", "aquella cita que empezó con una plática,", "se convirtió en nuestra historia de amor."),
          Fv("p12", "Quién diría que aquella primera cita,", "sería el comienzo de una vida juntos,", "que aquella mujer que esperaba en su esquina,", "se convertiría en mi amor más profundo."),
          Fv("p09", "Y aunque aquel beso no me atreví a darte,", "nunca he dejado de quererte demostrar,", "que desde el día en que te conocí, Lizeth,", "mi corazón te eligió para amar."),
          V("esperar", "Lizeth, mi esposa y mi alegría,", "mi compañera y mi felicidad,", "si volviera a vivir aquella tarde,", "en la misma esquina te volvería a esperar."),
          Fv("p05", "Porque aquel encuentro fue el comienzo,", "de esta historia que no quiero terminar,", "te amo, Lizeth, más de lo que imaginas,", "y toda mi vida te voy a amar. ❤")
        ],
        recompensa: "Cupón: una tarde para ti, tú decides el plan y yo paso por ti a tu esquina 🚗"
      }]
    },
    {
      num: 1, tipo: "pelicula", titulo: "Aquella Primera Cita", anio: 2026, clasificacion: "TP",
      imagen: F.t6, ...son(1), top10: true,
      sinopsis: "Una esquina, un carro y una plática que lo cambió todo.",
      creditos: cred(["Locación", "La esquina de tu casa"], ["Banda sonora", M.canciones[1]]),
      episodios: [{
        titulo: "Aquella Primera Cita", duracion: 116,
        descripcion: "La tarde en que todo empezó.",
        escenas: [
          V("esquina", "Todo empezó una tarde,", "en la esquina de tu casa."),
          V("n09", "Yo te esperaba con nervios,", "sin saber que esa tarde me cambiaría la vida."),
          V("nina", "Llegaste acompañada de tu niña,", "con lo más valioso que tienes."),
          V("carro", "Te subiste a mi carro", "y comenzamos a platicar."),
          Fv("p04", "Y yo solo quería", "seguir escuchando tu manera de hablar."),
          V("foto-viaje", "Te miraba de reojo,", "sin creer que estabas ahí, conmigo."),
          V("beso", "Quería robarte un beso…", "pero los nervios me ganaron."),
          Fv("p10", "Fue una primera cita inolvidable,", "de esas que nunca se olvidan."),
          Fv("p11", "Y sin darme cuenta, Lizeth,", "ya me estaba enamorando de ti. ❤")
        ],
        recompensa: "Cupón: una salida en el carro, solo tú y yo, platicando sin prisa 🚗"
      }]
    },
    {
      num: 2, tipo: "pelicula", titulo: "Mil Gracias Por Existir", anio: 2026, clasificacion: "TP",
      imagen: F.t0, ...son(2), top10: true,
      sinopsis: "Una película para darte las gracias por todo lo que eres y todo lo que me das.",
      creditos: cred(["Guion", "Un corazón agradecido"], ["Banda sonora", M.canciones[2]]),
      episodios: [{
        titulo: "Mil Gracias Por Existir", duracion: 116,
        descripcion: "Todo lo que quiero agradecerte.",
        escenas: [
          V("gracias", "Hay cosas que no te digo", "tan seguido como debería…"),
          V("dios", "Le doy gracias a Dios", "por ponerte en mi camino."),
          Fv("p02", "Gracias por subirte a mi carro aquella tarde", "y por quedarte en mi vida."),
          Fv("p03", "Gracias por tu sonrisa,", "que desde el primer día tuvo algo especial."),
          V("esc16", "Gracias por tomar mi mano", "en los días buenos y en los difíciles."),
          Fv("p08", "Gracias por tu cariño", "y por tu manera de cuidarme."),
          V("n54", "Gracias por caminar a mi lado", "como mi esposa y mi compañera."),
          Fv("p07", "Gracias por confiarme tu corazón", "y lo más valioso de tu vida."),
          Fv("p05", "Mil gracias por existir, Lizeth.", "Eres mi regalo más hermoso. 🙏")
        ],
        recompensa: "Cupón: un día entero de consentirte, tú mandas 👑"
      }]
    },
    {
      num: 3, tipo: "pelicula", titulo: "Mi Esposa, Mi Compañera", anio: 2026, clasificacion: "TP",
      imagen: F.t2, ...son(3), top10: true,
      sinopsis: "De aquella primera cita a llamarte mi esposa. Y todo lo que todavía nos falta vivir.",
      creditos: cred(["Producción", "Nuestros sueños"], ["Banda sonora", M.canciones[3]]),
      episodios: [{
        titulo: "Mi Esposa, Mi Compañera", duracion: 116,
        descripcion: "Nuestra vida juntos y lo que viene.",
        escenas: [
          V("esposa", "De aquella primera cita", "a llamarte mi esposa."),
          Fv("p06", "Hoy eres mi esposa, mi compañera,", "mi alegría y mi felicidad."),
          V("cotidiano", "Contigo los días normales", "se vuelven bonitos."),
          Fv("p01", "Quiero seguir construyendo", "un hogar lleno de amor contigo."),
          V("final-prueba", "Quiero cuidar de nuestra familia", "y verla feliz, a tu lado."),
          Fv("p10", "Quiero que sigamos platicando", "como aquella primera tarde."),
          V("playa", "Quiero envejecer contigo,", "tomados de la mano."),
          V("siempre", "Esta historia no la quiero terminar:", "toda mi vida te voy a amar."),
          Fv("p09", "Te amo, Lizeth,", "más de lo que imaginas. ❤")
        ],
        recompensa: "Cupón: una cena para los dos, yo invito 🍽️"
      }]
    },

    /* =================== SERIE =================== */
    {
      num: 4, tipo: "serie", titulo: "Nuestra Historia de Amor", anio: 2026, clasificacion: "TP",
      imagen: F.t3, ...son(4), top10: true,
      sinopsis: "Una mirada, una plática y una vida juntos. Una serie corta sobre nosotros.",
      creditos: cred(["Guion", "Escrito con todo mi amor"], ["Banda sonora", M.canciones[4]]),
      episodios: [
        {
          titulo: "Amor a Primera Vista", duracion: 72,
          descripcion: "Bastó una tarde.",
          escenas: [
            V("titulo", "Hay amores que llegan despacio…", "el nuestro llegó a primera vista."),
            V("tarde", "Bastó una tarde", "para que todo comenzara."),
            Fv("p04", "Una plática en el carro", "que nunca quise que terminara."),
            Fv("p03", "Había algo especial en tu sonrisa", "y en cada palabra de tu voz."),
            Fv("p11", "Y supe que eras", "alguien para mí, mi amor. ❤")
          ],
          recompensa: "Cupón: una noche de película, tú escoges cuál 🍿"
        },
        {
          titulo: "Mi Esposa y Mi Alegría", duracion: 72,
          descripcion: "El comienzo de una vida juntos.",
          escenas: [
            V("esposa", "Quién diría que aquella primera cita", "sería el comienzo de una vida juntos."),
            Fv("p08", "Estar contigo", "es mi lugar favorito."),
            V("esc08", "Contigo aprendí", "que el amor se demuestra todos los días."),
            Fv("p02", "Eres mi compañera,", "mi alegría y mi paz."),
            V("atardecer", "Gracias por hacer de mi vida", "un lugar más bonito.")
          ],
          recompensa: "Cupón: un abrazo largo, sin prisa y sin soltarte 🤗"
        },
        {
          titulo: "En la Misma Esquina", duracion: 80,
          descripcion: "Si volviera a vivir aquella tarde…",
          escenas: [
            V("esperar", "Si volviera a vivir aquella tarde,", "en la misma esquina te volvería a esperar."),
            Fv("p05", "Porque aquel encuentro fue el comienzo", "de esta historia que no quiero terminar."),
            Fv("p09", "Y aquel beso que no me atreví a darte…", "hoy te lo doy todos los días."),
            Fv("p07", "Mi corazón te eligió para amar,", "y te volvería a elegir siempre."),
            V("continuara", "Esta historia continúa…", ""),
            V("teamo", "Te amo, Lizeth. ✨", "Ahora te toca a ti: ve a El Final. ❤")
          ],
          recompensa: "Ya puedes ver: EL FINAL 🔴"
        }
      ]
    }
  ];

  /* 6. DETRÁS DE CÁMARAS */
  const extras = [
    { titulo: "Casting", img: fo("p07"), texto: "El papel principal siempre fue tuyo, Lizeth. Desde la primera mirada." },
    { titulo: "Locaciones", img: "assets/video/v/esquina.webp?v=1", texto: "La esquina de tu casa y mi carro: ahí empezó todo." },
    { titulo: "Banda sonora", img: fo("p06"), texto: M.canciones.join(" · ") },
    { titulo: "Escenas eliminadas", img: "assets/video/v/beso.webp?v=1", texto: "El beso que los nervios no me dejaron darte en la primera cita." }
  ];

  /* 7. TEMPORADA FINAL */
  const final = {
    titulo: "El Final: Tu Turno",
    sinopsis: `Después de 4 películas y 1 serie, la historia sigue. En este final, tú escribes el siguiente capítulo.`,
    imagen: F.final,
    preguntas: [
      "¿Cuál es tu película o serie favorita de este regalo y por qué?",
      "¿Qué recuerdas de nuestra primera cita?",
      "¿Cuál ha sido tu momento favorito a mi lado?",
      "¿Qué sueño te gustaría que cumpliéramos juntos?",
      `Escríbele a ${P.nombreA} algo que nunca le hayas dicho.`
    ],
    carta: (r) =>
`Para Lizeth, mi esposa:

Llegaste al final del catálogo, pero no de nuestra historia.

Dices que tu título favorito es "${r[0]}". El mío es cualquiera en el que sales tú.

De nuestra primera cita recuerdas: ${r[1]}. Yo recuerdo que te esperaba en la esquina de tu casa sin imaginar todo lo que iba a comenzar.

Tu momento favorito a mi lado: ${r[2]}. Prometo que vamos a vivir muchos más.

Y el sueño que quieres cumplir: ${r[3]}. Cuenta conmigo, lo vamos a lograr juntos.

${P.mensajeFinal}

Con todo mi amor,
${P.nombreA}`
  };

  /* 8. CRÉDITOS Y POST-CRÉDITOS */
  const creditos = [
    ["Una producción original de", P.nombreA],
    ["Protagonizada por", "Lizeth, mi esposa"],
    ["Coprotagonista", P.nombreA],
    ["Dirección", "El amor que te tengo"],
    ["Guion", "Lizeth, Mi Amor a Primera Vista"],
    ["Banda sonora", M.canciones.join(" · ")],
    ["Locación principal", "La esquina de tu casa"],
    ["Efectos especiales", "Tu sonrisa"],
    ["Dobles de riesgo", "Ninguno. Todo lo que siento es real."],
    ["Agradecimientos especiales", "A Dios, por el regalo tan hermoso de encontrarte"],
    ["", "Ningún corazón fue dañado durante la filmación de estas películas y series."],
    ["", `© ${new Date().getFullYear()} ${P.nombreA}. Todos los derechos reservados (para nosotros).`]
  ];

  const postCreditos = {
    imagen: F.postCreditos,
    etiqueta: "ESCENA POST-CRÉDITOS",
    texto: "Esta historia acaba de ser renovada… por toda la vida.",
    anuncio: "Nueva temporada",
    subtitulo: "Próximamente: más tardes juntos, más pláticas y muchos besos más. ✨",
    sorpresa: "Te amo, Lizeth ❤"
  };

  // Paquete de $79: solo el memorama de fotos en Juegos
  const arcades = ["memory"];

  return { pareja: P, fotos: F, media: M, acceso, notificacion, sitio, temporadas, extras, final, creditos, postCreditos, arcades };
})();

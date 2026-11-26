/* =====================================================================
   TEMPORADAS DE NOSOTROS — Aldo para Karina
   Paquete Nuestro Capítulo ($79): 4 películas, 1 serie (3 episodios), 1 juego (memorama).
   Envía: Aldo. Recibe: Karina. Aniversario: no aplica. Historia: no dada.
   Contenido escrito a partir de sentimientos, agradecimientos y metas (sin inventar fechas ni lugares).
   Contraseña: karina. Canciones recortadas poco antes del clímax (120 s; So Easy 94 s para la serie).
   Fotos: 29 del cliente (assets/fotos/p01..p29) + 1 video (navidad, sin audio). Ya no se usa stock;
   quedan 12 animaciones hechas para este pedido (titulo, persona, gracias, sentir, futuro, siempre,
   promesa, teamo, continuara, ka, gustas, lugar).
   ===================================================================== */
window.TDN = (function () {

  /* 1. DATOS */
  const P = {
    nombreA: "Aldo",
    nombreB: "Karina",
    apodos: ["mi amor"],
    fechaInicio: "",
    aniosManual: 1,
    ciudad: "",
    primeraCita: "",
    cancion: "Perfect",
    artista: "Ed Sheeran",
    viajes: [],
    dificiles: [],
    anecdota: "",
    culpableAnecdota: 0,
    gustosB: ["Tu sonrisa", "Tus abrazos", "La forma en que me miras"],
    suenos: ["Muchos años más juntos", "Conocer el mundo de tu mano", "Construir un hogar contigo"],
    mensajeFinal: "Te amo 24 horas al día, 7 días a la semana, 365 días al año. Y todos los que vengan. ❤"
  };
  P.anioInicio = 2026;
  P.anios = P.aniosManual || 1;
  P.fechaCodigo = "";
  P.apodo = P.apodos[0];

  /* 2. FOTOS (29 fotos del cliente p01..p29, llegaron el 26 nov; versión vertical en assets/fotos/v) */
  const fo = (n) => "assets/fotos/" + n + ".webp?v=1";
  const F = {
    hero: fo("p07"),
    perfilB: fo("perfil-persona"),
    perfilPareja: fo("perfil-ka"),
    // t0..t5 también son las cartas del memorama de fotos
    t0: fo("p12"), t1: fo("p04"), t2: fo("p07"),
    t3: fo("p29"), t4: fo("p23"), t5: fo("p19"),
    t6: fo("p09"), t7: fo("p13"),
    final: fo("p11"),
    puzzle: fo("p03"),
    puzzle2: "",
    postCreditos: fo("p13")
  };

  /* 3. AUDIO / VIDEO (cada canción empieza poco antes de su clímax) */
  const M = {
    intro: "assets/audio/intro.mp3",
    temporadas: [
      "assets/audio/perfect.mp3",
      "assets/audio/adore-you.mp3",
      "assets/audio/24-7-365.mp3",
      "assets/audio/lover.mp3",
      "assets/audio/so-easy.mp3"
    ],
    canciones: [
      "Perfect · Ed Sheeran",
      "Adore You · Harry Styles",
      "24/7, 365 · elijah woods",
      "Lover · Taylor Swift",
      "So Easy (To Fall In Love) · Olivia Dean"
    ],
    musica: "",
    videoFinal: "assets/video/v/continuara.mp4?v=1",
    audioRemitente: ""
  };

  /* 4. ACCESO Y NOTIFICACIÓN */
  const acceso = {
    demo: false,
    cualquierClave: false,
    password: "karina",
    pistaPassword: "Tu nombre",
    estreno: ""
  };

  const notificacion = { whatsapp: "528441854505", email: "", endpoint: "" };

  const sitio = {
    url: new URL("./", location.href).href,
    coincidencia: 100,
    clasificacion: "TP",
    clasificacionTexto: "Amor todos los días del año",
    heroTag: "MI PERSONA FAVORITA",
    heroTop: "N.º 1 en el corazón de Aldo",
    sinopsis: `Todo lo que siento por ti, todo lo que te agradezco y todo lo que quiero vivir contigo. ` +
              `4 películas y 1 serie originales de ${P.nombreA} para ${P.nombreB}.`,
    estrenoTexto: `4 películas y 1 serie originales de ${P.nombreA}, solo para ti`,
    generos: ["Romance", "Drama romántico", "Escrita con el corazón"],
    filaRecomendada: "Para Karina, con todo mi amor"
  };

  /* 5. PELÍCULAS Y SERIES */
  // V(n): clip vertical (centrado sobre fondo difuminado) en assets/video/v/
  const V = (n, a, b) => ({ img: "assets/video/v/" + n + ".mp4?v=1", poster: "assets/video/v/" + n + ".webp?v=1", texto: [a, b] });
  // S(foto): foto del cliente en versión vertical completa (assets/fotos/v/)
  const S = (n, a, b) => ({ img: "assets/fotos/v/" + n + ".webp?v=" + (n === "p01" ? "2" : "1"), texto: [a, b] });
  const son = (i) => ({ musica: M.temporadas[i], cancion: M.canciones[i] });
  const cred = (...extra) => [["Protagonizada por", `${P.nombreB} y ${P.nombreA}`], ...extra, ["Dirección", "El amor que te tengo"]];

  const temporadas = [
    /* =================== PELÍCULAS =================== */
    {
      num: 0, tipo: "pelicula", titulo: "Mi Persona Favorita", anio: 2026, clasificacion: "TP",
      imagen: F.t1, ...son(0), top10: true,
      sinopsis: "Lo que Aldo siente por ti, contado como una película.",
      creditos: cred(["Historia original", P.nombreA], ["Banda sonora", M.canciones[0]]),
      episodios: [{
        titulo: "Mi Persona Favorita", duracion: 116,
        descripcion: "Una historia de amor con una sola protagonista: tú.",
        escenas: [
          V("titulo", "Esta es nuestra historia,", "y tú eres la protagonista."),
          S("p12", "Hay personas que llegan a tu vida", "y lo cambian todo."),
          V("persona", "Tú eres la mía, Karina:", "mi persona favorita."),
          S("p07", "Contigo aprendí que el amor", "se siente en las cosas más simples."),
          S("p04", "En una mirada,", "en una sonrisa, en un abrazo."),
          S("p13", "Cuando estoy contigo", "el mundo se queda quieto."),
          V("lugar", "Tú eres mi lugar favorito,", "el lugar donde quiero quedarme."),
          S("p03", "Y si me dieran a escoger otra vez,", "te escogería a ti. Siempre."),
          V("teamo", "Te amo, Karina.", "Hoy, mañana y todos los días. ❤")
        ],
        recompensa: "Cupón: un abrazo largo, sin prisa y sin soltarte 🤗"
      }]
    },
    {
      num: 1, tipo: "pelicula", titulo: "Gracias Por Existir", anio: 2026, clasificacion: "TP",
      imagen: F.t3, ...son(1), top10: true,
      sinopsis: "Una película para darte las gracias por todo lo que eres y todo lo que me das.",
      creditos: cred(["Guion", "Un corazón agradecido"], ["Banda sonora", M.canciones[1]]),
      episodios: [{
        titulo: "Gracias Por Existir", duracion: 110,
        descripcion: "Todo lo que quiero agradecerte.",
        escenas: [
          V("gracias", "Hay cosas que no te digo", "tan seguido como debería…"),
          S("p05", "Gracias por llegar a mi vida", "y quedarte en ella."),
          S("p11", "Gracias por tu cariño,", "por cada detalle que tienes conmigo."),
          S("p29", "Gracias por hacerme reír", "incluso en los días grises."),
          S("p19", "Gracias por tomar mi mano", "cuando más lo necesito."),
          S("p27", "Gracias por tu paciencia", "y por quererme tal como soy."),
          S("p14", "Gracias por los días normales,", "que contigo nunca son normales."),
          S("p17", "Gracias por ser mi paz,", "mi calma y mi casa."),
          V("ka", "Gracias por existir, Karina.", "Gracias por elegirme. 🙏")
        ],
        recompensa: "Cupón: un día entero de consentirte, tú decides el plan 👑"
      }]
    },
    {
      num: 2, tipo: "pelicula", titulo: "24/7, 365", anio: 2026, clasificacion: "TP",
      imagen: F.t0, ...son(2), top10: true,
      sinopsis: "No hay una hora del día en la que no te ame. Ni un día del año.",
      creditos: cred(["Tiempo de rodaje", "24 horas, 7 días, 365 días"], ["Banda sonora", M.canciones[2]]),
      episodios: [{
        titulo: "24/7, 365", duracion: 116,
        descripcion: "Te amo a todas horas, todos los días.",
        escenas: [
          V("siempre", "24 horas al día,", "7 días a la semana, 365 días al año."),
          S("p10", "Te pienso cuando despierto", "y cuando me voy a dormir."),
          S("p02", "Te pienso en cada canción bonita", "que escucho."),
          V("gustas", "Me gustas tanto", "que hasta me da risa."),
          S("p20", "Quiero compartir contigo", "los días buenos…"),
          S("p24", "…y abrazarte fuerte", "en los días difíciles."),
          V("navidad", "Quiero compartir contigo", "cada Navidad y cada fiesta. 🎄"),
          S("p22", "Porque contigo, Karina,", "cada hora vale la pena."),
          V("sentir", "No hay una hora del día", "en la que no te ame. ❤")
        ],
        recompensa: "Cupón: una cita sorpresa organizada por mí 💌"
      }]
    },
    {
      num: 3, tipo: "pelicula", titulo: "Nuestro Futuro", anio: 2026, clasificacion: "TP",
      imagen: F.t6, ...son(3), top10: true,
      sinopsis: "Las metas, los sueños y todos los capítulos que todavía nos faltan por escribir.",
      creditos: cred(["Producción", "Nuestros sueños"], ["Banda sonora", M.canciones[3]]),
      episodios: [{
        titulo: "Nuestro Futuro", duracion: 116,
        descripcion: "Todo lo que quiero vivir contigo.",
        escenas: [
          V("futuro", "Cuando pienso en mi futuro,", "te veo a ti."),
          S("p09", "Quiero conocer el mundo", "de tu mano. ✈️"),
          S("p23", "Quiero ir contigo", "a mil conciertos más. 🎶"),
          S("p18", "Quiero que lleguemos juntos", "a donde nos propongamos."),
          S("p21", "Quiero más aventuras contigo,", "a donde sea que nos lleve el camino."),
          S("p26", "Quiero un hogar contigo,", "lleno de risas y de amor."),
          S("p08", "Quiero recibir contigo", "cada Año Nuevo. 🎉"),
          S("p25", "Quiero celebrar contigo", "cada logro, cada sueño cumplido."),
          V("lugar", "Y quiero que mi futuro", "siga teniendo tu nombre: Karina. ❤")
        ],
        recompensa: "Cupón: planeamos juntos nuestro próximo viaje 🗺️"
      }]
    },

    /* =================== SERIE =================== */
    {
      num: 4, tipo: "serie", titulo: "Tan Fácil Enamorarme de Ti", anio: 2026, clasificacion: "TP",
      imagen: F.t5, ...son(4), top10: true,
      sinopsis: "Lo que amo de ti, lo que me haces sentir y lo que te prometo. Una serie corta sobre nosotros.",
      creditos: cred(["Guion", "Escrito con todo mi amor"], ["Banda sonora", M.canciones[4]]),
      episodios: [
        {
          titulo: "Lo Que Amo de Ti", duracion: 72,
          descripcion: "Una lista que nunca se termina.",
          escenas: [
            V("persona", "Lo que amo de ti", "no cabe en una sola lista…"),
            S("p01", "Tu sonrisa,", "que me alegra el día."),
            S("p15", "Tu forma de ser,", "auténtica y única."),
            S("p28", "La forma en que me miras", "cuando nadie más se da cuenta."),
            S("p16", "Y cómo iluminas", "cualquier lugar al que llegas. ✨")
          ],
          recompensa: "Cupón: una tarde de antojos, yo invito 🍦"
        },
        {
          titulo: "Lo Que Me Haces Sentir", duracion: 72,
          descripcion: "Lo que me pasa cuando estoy contigo.",
          escenas: [
            V("sentir", "Contigo siento", "que todo está bien."),
            S("p06", "Me haces sentir feliz", "con las cosas más pequeñas."),
            V("navidad", "Me haces reír", "como nadie. 😄"),
            S("p07", "Me das paz", "como un amanecer tranquilo."),
            S("p12", "Fue tan fácil", "enamorarme de ti. ❤")
          ],
          recompensa: "Cupón: una noche de película, tú escoges cuál 🍿"
        },
        {
          titulo: "Te Prometo", duracion: 80,
          descripcion: "Mis promesas, una por una.",
          escenas: [
            V("promesa", "Te prometo", "cuidarte y respetarte siempre."),
            S("p13", "Te prometo tomar tu mano", "en los días buenos y en los difíciles."),
            S("p04", "Te prometo seguir enamorándote", "cada día un poquito más."),
            V("siempre", "Te prometo amarte", "24/7, los 365 días del año."),
            V("continuara", "Esta historia continúa…", ""),
            V("teamo", "Te amo, Karina. ✨", "Ahora te toca a ti: ve a El Final. ❤")
          ],
          recompensa: "Ya puedes ver: EL FINAL 🔴"
        }
      ]
    }
  ];

  /* 6. DETRÁS DE CÁMARAS */
  const extras = [
    { titulo: "Casting", img: fo("p12"), texto: "El papel principal siempre fue tuyo, Karina." },
    { titulo: "Locaciones", img: fo("p09"), texto: "Todos los lugares que nos faltan por conocer juntos." },
    { titulo: "Banda sonora", img: fo("p23"), texto: M.canciones.join(" · ") },
    { titulo: "Escenas eliminadas", img: fo("p20"), texto: "Todas las risas y los momentos que todavía no vivimos, pero que vamos a vivir." }
  ];

  /* 7. TEMPORADA FINAL */
  const final = {
    titulo: "El Final: Tu Turno",
    sinopsis: `Después de 4 películas y 1 serie, la historia sigue. En este final, tú escribes el siguiente capítulo.`,
    imagen: F.final,
    preguntas: [
      "¿Cuál es tu película o serie favorita de este regalo y por qué?",
      "¿Qué es lo que más te gusta de nosotros?",
      "¿Cuál ha sido tu momento favorito a mi lado?",
      "¿Qué sueño te gustaría que cumpliéramos juntos?",
      `Escríbele a ${P.nombreA} algo que nunca le hayas dicho.`
    ],
    carta: (r) =>
`Para Karina:

Llegaste al final del catálogo, pero no de nuestra historia.

Dices que tu título favorito es "${r[0]}". El mío es cualquiera en el que sales tú.

Lo que más te gusta de nosotros: ${r[1]}. A mí también, y quiero cuidarlo siempre.

Tu momento favorito a mi lado: ${r[2]}. Prometo que vamos a vivir muchos más.

Y el sueño que quieres cumplir: ${r[3]}. Cuenta conmigo, lo vamos a lograr juntos.

${P.mensajeFinal}

Con todo mi amor,
${P.nombreA}`
  };

  /* 8. CRÉDITOS Y POST-CRÉDITOS */
  const creditos = [
    ["Una producción original de", P.nombreA],
    ["Protagonizada por", "Karina, mi persona favorita"],
    ["Coprotagonista", P.nombreA],
    ["Dirección", "El amor que te tengo"],
    ["Guion", "Todo lo que siento por ti"],
    ["Banda sonora", M.canciones.join(" · ")],
    ["Efectos especiales", "Tu sonrisa"],
    ["Horario de rodaje", "24 horas al día, 7 días a la semana, 365 días al año"],
    ["Dobles de riesgo", "Ninguno. Todo lo que siento es real."],
    ["Agradecimientos especiales", "A ti, por existir"],
    ["", "Ningún corazón fue dañado durante la filmación de estas películas y series."],
    ["", `© ${new Date().getFullYear()} ${P.nombreA}. Todos los derechos reservados (para nosotros).`]
  ];

  const postCreditos = {
    imagen: F.postCreditos,
    etiqueta: "ESCENA POST-CRÉDITOS",
    texto: "Esta historia acaba de ser renovada… por muchos años más.",
    anuncio: "Nueva temporada",
    subtitulo: "Próximamente: más sueños cumplidos, más viajes y más días juntos. ✨",
    sorpresa: "Te amo, Karina ❤"
  };

  // Paquete de $79: solo el memorama de fotos en Juegos
  const arcades = ["memory"];

  return { pareja: P, fotos: F, media: M, acceso, notificacion, sitio, temporadas, extras, final, creditos, postCreditos, arcades };
})();

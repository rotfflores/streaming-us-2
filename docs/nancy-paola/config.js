/* =====================================================================
   TEMPORADAS DE NOSOTROS — Nancy Paola
   Paquete Nuestro Capítulo ($79): 4 películas, 1 serie (3 episodios), 1 juego (memorama).
   Envía: Nancy Paola. Recibe: sin nombre ("Mi persona favorita"). Sin aniversario ni historia.
   Tono amistoso, tema: "una historia que nunca tiene fin". Contraseña: nancy.
   Canciones recortadas poco antes del clímax (Saturno lleva dos cortes: película y serie).
   Relleno: clips de ../comun/medios en versión vertical (assets/video/v) y tres animaciones
   hechas para este pedido (infinito, orbitas, continuara).
   ===================================================================== */
window.TDN = (function () {

  /* 1. DATOS */
  const P = {
    nombreA: "Nancy Paola",
    nombreB: "Mi persona favorita",
    apodos: ["mi persona favorita"],
    fechaInicio: "2026-11-21",        // Solo para el año del pie de página (no dieron aniversario)
    aniosManual: 1,
    ciudad: "",
    primeraCita: "",
    cancion: "Mi Persona Favorita",
    artista: "Río Roma",
    viajes: [],
    dificiles: [],
    anecdota: "",
    culpableAnecdota: 0,
    gustosB: [],
    suenos: ["Cumplir juntos cada meta que nos propongamos", "Seguir riéndonos de todo", "Escribir muchos capítulos más de esta historia"],
    mensajeFinal: "Gracias por estar, por quedarte y por hacer de mi vida un lugar más bonito. Lo nuestro es una historia que nunca tiene fin, y yo quiero seguir escribiéndola contigo."
  };
  const inicio = new Date(P.fechaInicio + "T00:00:00");
  P.anioInicio = inicio.getFullYear();
  P.anios = P.aniosManual || 1;
  P.fechaCodigo = "";
  P.apodo = P.apodos[0];

  /* 2. FOTOS */
  const fo = (n) => "assets/fotos/" + n + ".webp";
  const F = {
    hero: fo("infinito"),
    perfilB: fo("perfil-infinito"),
    perfilPareja: fo("selfie-montana"),
    // t0..t5 también son las cartas del memorama de fotos
    t0: fo("cafe-amigas"), t1: fo("sofa-celulares"), t2: fo("ventana-sol"),
    t3: fo("senderistas"), t4: fo("grupo-balcon"), t5: fo("pizza"),
    t6: fo("bicis"), t7: fo("atardecer-perro"),
    final: fo("continuara"),
    puzzle: fo("amigas-ventana"),
    puzzle2: "",
    postCreditos: fo("amanecer")
  };

  /* 3. AUDIO / VIDEO (cada canción empieza poco antes de su clímax) */
  const M = {
    intro: "assets/audio/intro.mp3",
    temporadas: [
      "assets/audio/mi-persona-favorita.mp3",
      "assets/audio/tenemos-un-secreto.mp3",
      "assets/audio/flor-palida.mp3",
      "assets/audio/saturno.mp3",
      "assets/audio/saturno-serie.mp3"
    ],
    canciones: [
      "Mi Persona Favorita · Río Roma",
      "Tenemos un Secreto · OV7",
      "Flor Pálida · Marc Anthony",
      "Saturno · Pablo Alborán",
      "Saturno · Pablo Alborán"
    ],
    musica: "",
    videoFinal: "assets/video/v/continuara.mp4",
    audioRemitente: ""
  };

  /* 4. ACCESO Y NOTIFICACIÓN */
  const acceso = {
    demo: false,
    cualquierClave: false,
    password: "nancy",
    pistaPassword: "El nombre de quien te lo regala, en minúsculas",
    estreno: ""
  };

  const notificacion = { whatsapp: "525537376330", email: "", endpoint: "" };

  const sitio = {
    url: new URL("./", location.href).href,
    coincidencia: 100,
    clasificacion: "TP",
    clasificacionTexto: "Amistad, risas y complicidad",
    heroTag: "UNA HISTORIA QUE NUNCA TIENE FIN",
    heroTop: "N.º 1 en el corazón de Nancy Paola",
    sinopsis: `Hay historias que no terminan, solo cambian de capítulo. ` +
              `4 películas y 1 serie originales de ${P.nombreA} para su persona favorita.`,
    estrenoTexto: `4 películas y 1 serie originales de ${P.nombreA}, solo para ti`,
    generos: ["Amistad", "Comedia", "Basada en hechos reales"],
    filaRecomendada: "Para mi persona favorita"
  };

  /* 5. PELÍCULAS Y SERIES */
  // V(n): clip vertical (centrado sobre fondo difuminado) en assets/video/v/
  const V = (n, a, b) => ({ img: "assets/video/v/" + n + ".mp4?v=1", poster: "assets/video/v/" + n + ".webp?v=1", texto: [a, b] });
  const CLIPS = {
    0: "guadalajara", 4: "esc01", 11: "esc04", 13: "primer-mensaje", 14: "esc05", 15: "preparativos",
    17: "esc07", 18: "primera-cita", 20: "n20", 21: "cafe", 24: "esc16", 25: "vinilo", 30: "n30",
    31: "pizza", 32: "n32", 34: "risas-juntos", 35: "vuelo", 38: "foto-viaje", 39: "n39", 40: "esc19b",
    42: "n42", 43: "esc13", 44: "viaje-juntos", 45: "llamada-lluvia", 46: "dias-dificiles", 49: "esc15",
    50: "mudanza", 53: "esc20", 57: "n57", 58: "esc19", 59: "esc17", 61: "n61", 62: "n62", 63: "n63",
    64: "n64", 66: "tokio", 69: "final-prueba", 70: "n70", 72: "n72", 74: "esc11"
  };
  const E = (n, a, b) => V(CLIPS[n], a, b);
  const son = (i) => ({ musica: M.temporadas[i], cancion: M.canciones[i] });
  const cred = (...extra) => [["Protagonizada por", `Tú (${P.apodo}) y ${P.nombreA}`], ...extra, ["Dirección", "La vida, que nos juntó"]];

  const temporadas = [
    /* =================== PELÍCULAS =================== */
    {
      num: 0, tipo: "pelicula", titulo: "Mi Persona Favorita", anio: 2026, clasificacion: "TP",
      imagen: F.t0, ...son(0), top10: true,
      sinopsis: "Una carta de Nancy Paola para la persona que hace todo más bonito.",
      creditos: cred(["Carta", P.nombreA], ["Banda sonora", M.canciones[0]]),
      episodios: [{
        titulo: "Mi Persona Favorita", duracion: 108,
        descripcion: "Lo que no siempre te digo, pero siempre siento.",
        escenas: [
          V("infinito", "Hay personas que llegan a tu vida…", "y se quedan para siempre."),
          E(15, "Tú eres una de ellas:", "mi persona favorita."),
          E(18, "Contigo cualquier plan sencillo", "se vuelve el mejor del día."),
          E(34, "Me haces reír", "hasta que me duele la panza. 😂"),
          E(31, "Compartimos todo:", "la pizza, los secretos y los sueños. 🍕"),
          E(20, "A tu lado el camino", "siempre es más ligero."),
          E(59, "Gracias por estar en las buenas,", "en las malas y en las peores ocurrencias."),
          E(61, "Gracias por ser tú,", "sin filtros y sin cambiar nada."),
          E(40, "Y aunque no siempre lo ando diciendo…", "es buen momento para decirte que te quiero."),
          E(69, "Esta historia no se termina aquí:", "apenas va por el primer capítulo. ∞")
        ],
        recompensa: "Cupón: un café (o los que hagan falta) para platicar de todo ☕"
      }]
    },
    {
      num: 1, tipo: "pelicula", titulo: "Tenemos un Secreto", anio: 2026, clasificacion: "TP",
      imagen: F.t1, ...son(1), top10: true,
      sinopsis: "Chistes que nadie más entiende, miradas que lo dicen todo y mensajes a deshoras. Una comedia de complicidad.",
      creditos: cred(["Guion", "Nuestros chistes internos"], ["Banda sonora", M.canciones[1]]),
      episodios: [{
        titulo: "Tenemos un Secreto", duracion: 120,
        descripcion: "Lo que solo tú y yo entendemos.",
        escenas: [
          E(13, "Entre tú y yo hay un secreto:", "nadie entiende nuestros chistes. 🤫"),
          E(11, "Mensajes a cualquier hora", "que me sacan una sonrisa."),
          E(57, "Audios de diez minutos", "que valen cada segundo."),
          E(58, "Basta una mirada", "para saber lo que piensa la otra persona."),
          E(17, "Las mejores pláticas", "siempre empiezan con «¿te cuento algo?»."),
          E(30, "Contigo puedo ser yo,", "sin tener que explicar nada."),
          E(62, "Fotos que solo nosotros entendemos", "y que nunca verán la luz. 📸"),
          E(63, "Comidas, antojos", "y planes que salen sobre la marcha."),
          E(25, "Y una banda sonora", "que ya es solo nuestra. 🎶"),
          E(34, "Somos un poco tontos, a veces locos…", "pero así nos queremos. 💛")
        ],
        recompensa: "Cupón: una tarde de antojos, tú eliges y yo invito 🍟"
      }]
    },
    {
      num: 2, tipo: "pelicula", titulo: "Aquí Estoy", anio: 2026, clasificacion: "TP",
      imagen: F.t2, ...son(2), top10: true,
      sinopsis: "Para los días grises, los inviernos largos y las veces que todo pesa: una película sobre estar.",
      creditos: cred(["Banda sonora", M.canciones[2]]),
      episodios: [{
        titulo: "Aquí Estoy", duracion: 114,
        descripcion: "En los días buenos y en los difíciles.",
        escenas: [
          E(45, "Hay días grises", "en los que todo pesa un poco más."),
          E(49, "Días de lluvia", "en los que no dan ganas de nada."),
          E(46, "Y en esos días", "quiero que sepas algo…"),
          E(24, "…aquí estoy.", "Para escucharte, sin juzgarte."),
          E(4, "Como una flor que vuelve a tomar color,", "siempre sale el sol otra vez. 🌷"),
          E(53, "Gracias por tenerme paciencia", "cuando la que se marchitaba era yo."),
          E(70, "Nos cuidamos,", "nos levantamos y seguimos."),
          E(74, "Porque los amigos de verdad", "no se van cuando oscurece."),
          E(72, "Prometo cuidar esto que tenemos,", "para que nunca se vaya. 💛")
        ],
        recompensa: "Cupón: un abrazo largo para el día que lo necesites 🤗"
      }]
    },
    {
      num: 3, tipo: "pelicula", titulo: "Más Allá de Saturno", anio: 2026, clasificacion: "TP",
      imagen: F.t3, ...son(3), top10: true,
      sinopsis: "Metas, viajes pendientes y sueños gigantes. Una aventura sobre todo lo que todavía nos falta vivir.",
      creditos: cred(["Destino", "Hasta donde lleguemos"], ["Banda sonora", M.canciones[3]]),
      episodios: [{
        titulo: "Más Allá de Saturno", duracion: 114,
        descripcion: "Todo lo que nos falta por vivir.",
        escenas: [
          V("orbitas", "Dos caminos que se encontraron…", "y decidieron avanzar juntos."),
          E(43, "Tenemos un mapa lleno", "de lugares por conocer. 🗺️"),
          E(64, "Metas grandes,", "de esas que dan un poquito de miedo."),
          E(44, "Pero con alguien a tu lado", "cualquier camino se recorre."),
          E(35, "Vamos a llegar lejos,", "lo sé."),
          E(38, "Quiero estar en cada foto", "de tus logros. 📷"),
          E(39, "Y en cada viaje", "que nos debemos."),
          E(66, "Mientras más lejos,", "mejor la historia que contaremos."),
          E(0, "Más allá de Saturno,", "más allá de lo que imaginamos."),
          V("infinito", "Porque lo nuestro", "no tiene fin. ∞")
        ],
        recompensa: "Cupón: planear juntos nuestro próximo viaje (y sí hacerlo) ✈️"
      }]
    },

    /* =================== SERIE =================== */
    {
      num: 4, tipo: "serie", titulo: "Una Historia Sin Fin", anio: 2026, clasificacion: "TP",
      imagen: F.t4, ...son(4), top10: true,
      sinopsis: "Gracias, lo que viene y lo que nunca se acaba. Una serie corta sobre nosotros.",
      creditos: cred(["Guion", "Escrito con cariño (y sin final)"], ["Banda sonora", M.canciones[4]]),
      episodios: [
        {
          titulo: "Gracias", duracion: 66,
          descripcion: "Todo lo que quiero agradecerte.",
          escenas: [
            E(21, "Gracias por cada café", "que se volvió terapia. ☕"),
            E(42, "Gracias por los consejos,", "aunque a veces no los siga. 😅"),
            E(18, "Gracias por celebrar mis logros", "como si fueran tuyos."),
            E(32, "Gracias por aguantar mis dramas", "y mis cambios de humor."),
            E(15, "Y gracias por elegirme", "para seguir en tu historia.")
          ],
          recompensa: "Cupón: un día de consentirte, tú mandas 👑"
        },
        {
          titulo: "Lo Que Viene", duracion: 66,
          descripcion: "Nuestras metas, una por una.",
          escenas: [
            E(14, "Tenemos muchas fechas", "por marcar en el calendario. 📅"),
            E(50, "Nuevos comienzos,", "nuevas casas, nuevos retos."),
            E(43, "Planes que hoy son sueños", "y mañana serán recuerdos."),
            E(61, "Metas que vamos a cumplir", "una por una."),
            E(64, "Y lo mejor:", "las vamos a vivir juntos.")
          ],
          recompensa: "Cupón: una lista de metas escrita juntos, y un brindis por cada una 🥂"
        },
        {
          titulo: "Continuará…", duracion: 66,
          descripcion: "Una historia que nunca tiene fin.",
          escenas: [
            V("orbitas", "Hay historias que se terminan…", "y otras que solo cambian de capítulo."),
            E(69, "La nuestra", "es de las segundas."),
            E(72, "Pase lo que pase,", "pase el tiempo que pase…"),
            V("infinito", "esto que tenemos", "nunca se va a acabar. ∞"),
            V("continuara", "Esta historia continúa.", "Ahora te toca a ti: ve a El Final. 💛")
          ],
          recompensa: "Ya puedes ver: EL FINAL 🔴"
        }
      ]
    }
  ];

  /* 6. DETRÁS DE CÁMARAS */
  const extras = [
    { titulo: "Casting", img: fo("perfil-infinito"), texto: "El papel de persona favorita siempre fue tuyo." },
    { titulo: "Locaciones", img: fo("cafe"), texto: "Cafés, calles, pláticas eternas y todos los lugares que todavía nos faltan." },
    { titulo: "Banda sonora", img: fo("mensaje"), texto: M.canciones.slice(0, 4).join(" · ") },
    { titulo: "Escenas eliminadas", img: fo("risas"), texto: "Las mejores escenas no se grabaron: se vivieron. Y así se quedan, entre tú y yo." }
  ];

  /* 7. TEMPORADA FINAL */
  const final = {
    titulo: "El Final: Tu Turno",
    sinopsis: `Después de 4 películas y 1 serie, la historia sigue. En este final, tú escribes el siguiente capítulo.`,
    imagen: F.final,
    preguntas: [
      "¿Cuál es tu película o serie favorita de este regalo y por qué?",
      "¿Cuál es tu recuerdo favorito de nosotros?",
      "¿Qué meta te gustaría que cumpliéramos juntos?",
      "¿A dónde nos vamos de viaje primero?",
      `Escríbele a ${P.nombreA} algo que nunca le hayas dicho.`
    ],
    carta: (r) =>
`Para mi persona favorita:

Llegaste al final del catálogo, pero no de la historia.

Dices que tu título favorito es "${r[0]}". El mío es cualquiera en el que sales tú.

Tu recuerdo favorito de nosotros: ${r[1]}. Prometo que vamos a hacer muchos más.

La meta que quieres que cumplamos: ${r[2]}. Trato hecho.

Y el primer viaje: ${r[3]}. Ve haciendo maleta.

${P.mensajeFinal}

Con todo mi cariño,
${P.nombreA}`
  };

  /* 8. CRÉDITOS Y POST-CRÉDITOS */
  const creditos = [
    ["Una producción original de", P.nombreA],
    ["Protagonizada por", "Mi persona favorita"],
    ["Coprotagonista", P.nombreA],
    ["Dirección", "La vida, que nos juntó"],
    ["Guion", "Nuestras pláticas eternas"],
    ["Banda sonora", M.canciones.slice(0, 4).join(" · ")],
    ["Efectos especiales", "Tus ocurrencias"],
    ["Dobles de riesgo", "Ninguno. Todo fue real."],
    ["Agradecimientos especiales", "A ti, por quedarte"],
    ["", "Ninguna amistad fue dañada durante la filmación de estas películas y series."],
    ["", `© ${new Date().getFullYear()} ${P.nombreA}. Todos los derechos reservados (para nosotros).`]
  ];

  const postCreditos = {
    imagen: F.postCreditos,
    etiqueta: "ESCENA POST-CRÉDITOS",
    texto: "Esta historia acaba de ser renovada… por tiempo indefinido.",
    anuncio: "Nueva temporada",
    subtitulo: "Próximamente: todos los capítulos que nos faltan. ∞",
    sorpresa: "Gracias por ser mi persona favorita 💛"
  };

  // Paquete de $79: solo el memorama de fotos en Juegos
  const arcades = ["memory"];

  return { pareja: P, fotos: F, media: M, acceso, notificacion, sitio, temporadas, extras, final, creditos, postCreditos, arcades };
})();

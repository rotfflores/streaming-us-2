/* =====================================================================
   TEMPORADAS DE NOSOTROS — Alexandra para Leonardo
   Paquete Nuestro Capítulo ($79): 4 películas, 1 serie (3 episodios), 1 juego (memorama).
   Envía: Alexandra. Recibe: Leonardo. Aniversario: 1 de enero. Apodos: "chinitos" y "chefsito".
   Historia: empezó como una amistad que se volvió amor; él es su primer amor verdadero.
   Contraseña: 0101. Canciones recortadas poco antes del clímax.
   Fotos: 26 del cliente (assets/fotos, versión vertical en assets/fotos/v).
   Videos: 2 del cliente (risas-filtro, juntos-auto) en assets/video/v, sin audio.
   Relleno: clips de ../comun/medios en versión vertical y 8 animaciones hechas para este pedido
   (primeramor, llamada, amigos, chinitos, chefsito, sol, fecha, continuara).
   ===================================================================== */
window.TDN = (function () {

  /* 1. DATOS */
  const P = {
    nombreA: "Alexandra",
    nombreB: "Leonardo",
    apodos: ["mi chinitos", "mi chefsito"],
    fechaInicio: "2025-01-01",        // Aniversario: 1 de enero
    aniosManual: 1,
    ciudad: "",
    primeraCita: "",
    cancion: "Siempre Tú",
    artista: "Enjambre",
    viajes: [],
    dificiles: [],
    anecdota: "",
    culpableAnecdota: 0,
    gustosB: ["Cocinar (mi chefsito)", "Nuestras llamadas", "Las aventuras juntos"],
    suenos: ["Seguir juntos muchos 1 de enero más", "Más aventuras de la mano", "Together forever"],
    mensajeFinal: "Eres la persona que puedo llamar mi primer amor verdadero, la primera persona de la cual me enamoré realmente, y la cual me ha enseñado lo que es amar incondicionalmente. Te amo."
  };
  P.anioInicio = 2025;
  P.anios = P.aniosManual || 1;
  P.fechaCodigo = "0101";
  P.apodo = P.apodos[0];

  /* 2. FOTOS */
  const fo = (n) => "assets/fotos/" + n + ".webp";
  const F = {
    hero: fo("recostados"),
    perfilB: fo("perfil-leo"),
    perfilPareja: fo("perfil-pareja"),
    // t0..t5 también son las cartas del memorama de fotos
    t0: fo("recostados"), t1: fo("besos"), t2: fo("together-forever"),
    t3: fo("cascada"), t4: fo("miradas"), t5: fo("dibujo-beso"),
    t6: fo("kitty"), t7: fo("caminando"),
    final: fo("dibujo-paseo"),
    puzzle: fo("beso-mejilla"),
    puzzle2: "",
    postCreditos: fo("cerquita")
  };

  /* 3. AUDIO / VIDEO (cada canción empieza poco antes de su clímax) */
  const M = {
    intro: "assets/audio/intro.mp3",
    temporadas: [
      "assets/audio/siempre-tu.mp3",
      "assets/audio/te-quiero-asi.mp3",
      "assets/audio/mas-alla-del-sol.mp3",
      "assets/audio/tercer-tipo.mp3",
      "assets/audio/hermoso-carino.mp3"
    ],
    canciones: [
      "Siempre Tú · Enjambre",
      "Te Quiero Así · Pedro Infante",
      "Más Allá del Sol · Joan Sebastian",
      "Tercer Tipo · Enjambre",
      "Hermoso Cariño · Vicente Fernández"
    ],
    musica: "",
    videoFinal: "assets/video/v/continuara.mp4?v=1",
    audioRemitente: ""
  };

  /* 4. ACCESO Y NOTIFICACIÓN */
  const acceso = {
    demo: false,
    cualquierClave: false,
    password: "0101",
    pistaPassword: "Nuestro aniversario (DDMM)",
    estreno: ""
  };

  const notificacion = { whatsapp: "525577280787", email: "", endpoint: "" };

  const sitio = {
    url: new URL("./", location.href).href,
    coincidencia: 100,
    clasificacion: "TP",
    clasificacionTexto: "Amistad, amor verdadero y muchas risas",
    heroTag: "MI PRIMER AMOR VERDADERO",
    heroTop: "N.º 1 en el corazón de Alexandra",
    sinopsis: `Empezó como una amistad, pues buena, y se volvió el amor de su vida. ` +
              `4 películas y 1 serie originales de ${P.nombreA} para su chinitos, su chefsito.`,
    estrenoTexto: `4 películas y 1 serie originales de ${P.nombreA}, solo para ti`,
    generos: ["Romance", "Comedia", "Basada en hechos reales"],
    filaRecomendada: "Para mi chinitos, mi chefsito"
  };

  /* 5. PELÍCULAS Y SERIES */
  // V(n): clip vertical (centrado sobre fondo difuminado) en assets/video/v/
  const V = (n, a, b) => ({ img: "assets/video/v/" + n + ".mp4?v=1", poster: "assets/video/v/" + n + ".webp?v=1", texto: [a, b] });
  // S(foto): foto del cliente en versión vertical completa (assets/fotos/v/)
  const S = (n, a, b) => ({ img: "assets/fotos/v/" + n + ".webp?v=1", texto: [a, b] });
  const son = (i) => ({ musica: M.temporadas[i], cancion: M.canciones[i] });
  const cred = (...extra) => [["Protagonizada por", `${P.nombreB} y ${P.nombreA}`], ...extra, ["Dirección", "Una amistad que se volvió amor"]];

  const temporadas = [
    /* =================== PELÍCULAS =================== */
    {
      num: 0, tipo: "pelicula", titulo: "Mi Primer Amor Verdadero", anio: 2026, clasificacion: "TP",
      imagen: F.t0, ...son(0), top10: true,
      sinopsis: "Cómo me enamoré de ti, contado por Alexandra con sus propias palabras.",
      creditos: cred(["Historia original", P.nombreA], ["Banda sonora", M.canciones[0]]),
      episodios: [{
        titulo: "Mi Primer Amor Verdadero", duracion: 128,
        descripcion: "¿Cómo me enamoré de ti?",
        escenas: [
          V("primeramor", "¿Cómo me enamoré de ti? De la manera más hermosa:", "todo empezó por una amistad, pues buena,"),
          S("caminando", "que con el tiempo se fue haciendo cada vez más cercana,", "más y más, poco a poco."),
          V("esc04", "Yo empecé a buscar pretextos", "para poder estarte hablando,"),
          V("llamada", "o agarré la maña de solo marcarte, jaja,", "ya ni preguntaba. 📞"),
          S("parches", "Te tenía una confianza enorme,", "y me encantó esa amistad,"),
          V("amigos", "aunque yo sabía que había algo más…", "y tenía razón: sí fue mutuo."),
          S("miradas", "Nos entendíamos a la perfección;", "en amistad me complementabas, me entendías,"),
          S("beso-mejilla", "y te tenía la confianza. Y a partir de ahí", "supe que eras el amor de mi vida."),
          S("recostados", "Sin duda alguna, la persona que puedo llamar", "\"mi primer amor verdadero\","),
          S("together-forever", "la primera persona de la cual me enamoré realmente,", "y la cual me ha enseñado lo que es amar incondicionalmente. ❤")
        ],
        recompensa: "Cupón: una llamada sin pretexto, cuando tú quieras 📞"
      }]
    },
    {
      num: 1, tipo: "pelicula", titulo: "Mi Chinitos, Mi Chefsito", anio: 2026, clasificacion: "TP",
      imagen: F.t1, ...son(1), top10: true,
      sinopsis: "Dos apodos, mil razones. Una comedia romántica sobre los detalles que solo son nuestros.",
      creditos: cred(["Apodos originales", "Chinitos y Chefsito"], ["Banda sonora", M.canciones[1]]),
      episodios: [{
        titulo: "Mi Chinitos, Mi Chefsito", duracion: 116,
        descripcion: "Te quiero así, así, así.",
        escenas: [
          V("chinitos", "Para mi chinitos,", "el apodo que solo tú tienes. 💕"),
          S("besos", "Te quiero así, así, así:", "tal como eres."),
          V("chefsito", "Y para mi chefsito,", "el ingrediente secreto de mis días. 👨‍🍳"),
          S("comida", "Contigo hasta la comida", "sabe más rica. 🍕"),
          S("jengibre", "Hasta una casita de jengibre", "se vuelve un recuerdo bonito."),
          S("lengua", "Contigo puedo ser yo:", "con caras chistosas y todo. 😜"),
          V("risas-filtro", "Nuestras tonterías", "son mis momentos favoritos."),
          S("gatito", "Me encanta tu ternura,", "con todo y bigotes. 🐱"),
          S("mascarillas", "Días de mascarillas y risas,", "días de ser nosotros."),
          S("cerquita", "Te quiero así, mi chinitos,", "con todo mi corazón. ❤")
        ],
        recompensa: "Cupón: mi chefsito cocina y yo lo consiento 👨‍🍳"
      }]
    },
    {
      num: 2, tipo: "pelicula", titulo: "Más Allá del Sol", anio: 2026, clasificacion: "TP",
      imagen: F.t5, ...son(2), top10: true,
      sinopsis: "Todo lo que siento y todo lo que te agradezco, más allá del sol.",
      creditos: cred(["Carta", P.nombreA], ["Banda sonora", M.canciones[2]]),
      episodios: [{
        titulo: "Más Allá del Sol", duracion: 116,
        descripcion: "Lo que siento por ti, con mis palabras.",
        escenas: [
          V("sol", "Más allá del sol", "y más allá de todo, te amo."),
          S("dibujo-beso", "Eres la primera persona", "de la que me enamoré de verdad."),
          S("selfie-ella", "Gracias por enseñarme", "lo que es amar incondicionalmente."),
          V("juntos-auto", "Gracias por entenderme", "y complementarme como nadie."),
          S("kitty", "Gracias por la confianza enorme,", "por las risas y por cada llamada."),
          V("esc16", "Contigo aprendí que el amor", "también es la mejor amistad."),
          S("unas", "Cada detalle tuyo", "me enamora más."),
          S("peluche", "Eres mi mejor amigo", "y el amor de mi vida."),
          S("dibujo-paseo", "Que no te quede duda:", "contigo quiero seguir caminando."),
          V("atardecer", "Te amo más allá del sol,", "mi chefsito. ☀️")
        ],
        recompensa: "Cupón: un atardecer juntos, tú escoges el lugar 🌅"
      }]
    },
    {
      num: 3, tipo: "pelicula", titulo: "Un Encuentro del Tercer Tipo", anio: 2026, clasificacion: "TP",
      imagen: F.t3, ...son(3), top10: true,
      sinopsis: "Cascadas, catrinas, sustos y Navidad. Una película de aventuras de otro universo.",
      creditos: cred(["Locaciones", "Cada lugar al que hemos ido juntos"], ["Banda sonora", M.canciones[3]]),
      episodios: [{
        titulo: "Un Encuentro del Tercer Tipo", duracion: 116,
        descripcion: "Nuestras aventuras juntos.",
        escenas: [
          V("fecha", "1 de enero:", "el primer día del año es nuestro día."),
          S("cascada", "Aventuras entre cascadas", "y caminos nuevos. 🌿"),
          S("de-la-mano", "Paso a paso,", "siempre de la mano."),
          S("catrina", "Noches de luces", "y catrinas gigantes. 🧡"),
          S("halloween", "Hasta los sustos", "son mejores contigo. 👻"),
          S("esfera", "La Navidad contigo", "brilla más. 🎄"),
          S("te-extrane", "Y cuando no estamos juntos,", "te extraño un montón."),
          S("figuritas", "Los detalles más pequeños", "también son nuestros."),
          V("esc19b", "Un nuevo principio", "en cada aventura."),
          V("n54", "Un encuentro del tercer tipo:", "tú y yo, de otro universo. ✨")
        ],
        recompensa: "Cupón: una aventura nueva, a donde tú digas 🌿"
      }]
    },

    /* =================== SERIE =================== */
    {
      num: 4, tipo: "serie", titulo: "Hermoso Cariño", anio: 2026, clasificacion: "TP",
      imagen: F.t4, ...son(4), top10: true,
      sinopsis: "De amigos a todo, gracias y lo que viene. Una serie corta sobre nosotros.",
      creditos: cred(["Guion", "Escrito con todo mi amor"], ["Banda sonora", M.canciones[4]]),
      episodios: [
        {
          titulo: "De Amigos a Todo", duracion: 72,
          descripcion: "Una amistad, pues buena.",
          escenas: [
            V("n57", "Todo empezó con una amistad,", "pues buena. 😄"),
            V("llamada-lluvia", "Llamadas sin pretexto", "y horas de plática."),
            V("n10", "Y sin darnos cuenta…", "ya no podíamos dejar de hablar."),
            S("caminando", "Lo que empezó como amistad", "se volvió mi camino favorito."),
            V("amigos", "De amigos…", "al amor de mi vida. ❤")
          ],
          recompensa: "Cupón: una tarde de plática, como al principio ☕"
        },
        {
          titulo: "Gracias", duracion: 72,
          descripcion: "Todo lo que quiero agradecerte.",
          escenas: [
            S("recostados", "Gracias por tu paciencia", "y por tu cariño."),
            S("miradas", "Gracias por entenderme", "con solo mirarme."),
            V("esc08", "Gracias por caminar conmigo", "en cada paso."),
            S("besos", "Gracias por dejarme", "llenarte de besos. 💋"),
            S("parches", "Gracias por los días de spa", "y por todas las risas."),
            S("beso-mejilla", "Y gracias por ser", "mi primer amor verdadero. 🙏")
          ],
          recompensa: "Cupón: un día de consentirte, tú mandas 👑"
        },
        {
          titulo: "Lo Que Viene", duracion: 72,
          descripcion: "Nuestras metas, una por una.",
          escenas: [
            V("esc11", "Lo que viene:", "más atardeceres juntos. 🌅"),
            V("vinilo", "Más canciones", "que sean nuestras. 🎶"),
            V("n73", "Más lugares por conocer,", "siempre de la mano."),
            S("together-forever", "Together forever:", "juntos para siempre."),
            V("fecha", "Muchos 1 de enero más", "a tu lado. 🎆"),
            V("continuara", "Esta historia continúa.", "Ahora te toca a ti: ve a El Final. ❤")
          ],
          recompensa: "Ya puedes ver: EL FINAL 🔴"
        }
      ]
    }
  ];

  /* 6. DETRÁS DE CÁMARAS */
  const extras = [
    { titulo: "Casting", img: fo("cerquita"), texto: "El papel de chinitos y chefsito siempre fue tuyo." },
    { titulo: "Locaciones", img: fo("cascada"), texto: "Cascadas, calles de la mano, noches de catrinas y todos los lugares que nos faltan." },
    { titulo: "Banda sonora", img: fo("kitty"), texto: M.canciones.join(" · ") },
    { titulo: "Escenas eliminadas", img: fo("lengua"), texto: "Horas de llamadas (sin preguntar, jaja) y muchas caras chistosas que no cupieron aquí." }
  ];

  /* 7. TEMPORADA FINAL */
  const final = {
    titulo: "El Final: Tu Turno",
    sinopsis: `Después de 4 películas y 1 serie, la historia sigue. En este final, tú escribes el siguiente capítulo.`,
    imagen: F.final,
    preguntas: [
      "¿Cuál es tu película o serie favorita de este regalo y por qué?",
      "¿Cuál es tu recuerdo favorito de nosotros?",
      "¿En qué momento supiste que ya no éramos solo amigos?",
      "¿A dónde quieres que vayamos en nuestra próxima aventura?",
      `Escríbele a ${P.nombreA} algo que nunca le hayas dicho.`
    ],
    carta: (r) =>
`Para mi chinitos, mi chefsito:

Llegaste al final del catálogo, pero no de nuestra historia.

Dices que tu título favorito es "${r[0]}". El mío es cualquiera en el que sales tú.

Tu recuerdo favorito de nosotros: ${r[1]}. Prometo que vamos a hacer muchos más.

Supiste que ya no éramos solo amigos cuando: ${r[2]}. Yo ya lo sabía, jaja.

Y la próxima aventura: ${r[3]}. Ya quiero que llegue.

${P.mensajeFinal}

Con todo mi amor,
${P.nombreA}`
  };

  /* 8. CRÉDITOS Y POST-CRÉDITOS */
  const creditos = [
    ["Una producción original de", P.nombreA],
    ["Protagonizada por", "Leonardo, mi chinitos, mi chefsito"],
    ["Coprotagonista", P.nombreA],
    ["Dirección", "Una amistad, pues buena"],
    ["Guion", "Todas nuestras llamadas (sin preguntar, jaja)"],
    ["Banda sonora", M.canciones.join(" · ")],
    ["Chef ejecutivo", "Mi chefsito"],
    ["Efectos especiales", "Nuestras caras chistosas"],
    ["Dobles de riesgo", "Ninguno. Todo fue real."],
    ["Agradecimientos especiales", "A ti, por enseñarme a amar incondicionalmente"],
    ["", "Ningún corazón fue dañado durante la filmación de estas películas y series."],
    ["", `© ${new Date().getFullYear()} ${P.nombreA}. Todos los derechos reservados (para nosotros).`]
  ];

  const postCreditos = {
    imagen: F.postCreditos,
    etiqueta: "ESCENA POST-CRÉDITOS",
    texto: "Esta historia acaba de ser renovada… together forever.",
    anuncio: "Nueva temporada",
    subtitulo: "Próximamente: otro 1 de enero juntos y todas las aventuras que nos faltan. 🎆",
    sorpresa: "Te amo, mi chinitos, mi chefsito ❤"
  };

  // Paquete de $79: solo el memorama de fotos en Juegos
  const arcades = ["memory"];

  return { pareja: P, fotos: F, media: M, acceso, notificacion, sitio, temporadas, extras, final, creditos, postCreditos, arcades };
})();

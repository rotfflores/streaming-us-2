/* =====================================================================
   TEMPORADAS DE NOSOTROS — Ian para Paola
   Paquete Nuestro Capítulo ($79): 4 películas, 1 serie (3 episodios), 1 juego (memorama).
   Envía: Ian. Recibe: Paola. Aniversario: no aplica (4 años de conocerse, 1 mes juntos).
   Historia (texto de Ian, va completo en la película 0 "Un Cielo Estrellado").
   Contraseña: maroon. Canciones recortadas poco antes del clímax.
   Fotos: 7 del cliente (assets/fotos, versión vertical en assets/fotos/v).
   Videos: 6 del cliente en assets/video/v, sin audio (abrazo, regalo, pastel, cumple, sudaderas, atardecer).
   Relleno: 10 animaciones hechas para este pedido (cielo, cometa, cuatro, mes, alas, suelo,
   regalo, contigo, cumple, continuara) + 6 clips de ambiente de ../comun (esc11, esc16, n54, n73,
   atardecer, vinilo), poco stock a propósito.
   ===================================================================== */
window.TDN = (function () {

  /* 1. DATOS */
  const P = {
    nombreA: "Ian",
    nombreB: "Paola",
    apodos: ["mi amor"],
    fechaInicio: "",
    aniosManual: 4,
    ciudad: "",
    primeraCita: "",
    cancion: "Lo Que en Ti Veo",
    artista: "Kany García y Nahuel Pennisi",
    viajes: [],
    dificiles: [],
    anecdota: "",
    culpableAnecdota: 0,
    gustosB: ["Cocinar juntos", "Jugar Minecraft", "Los días con sudadera y abrazos"],
    suenos: ["Muchos meses y años más juntos", "Más cumpleaños a tu lado", "Ir a donde nos lleve el mundo, juntos"],
    mensajeFinal: "No importa a dónde nos lleve el mundo, mientras sea contigo, sé que estaré exactamente donde debo estar. ✨"
  };
  P.anioInicio = 2026;
  P.anios = P.aniosManual || 1;
  P.fechaCodigo = "";
  P.apodo = P.apodos[0];

  /* 2. FOTOS */
  const fo = (n) => "assets/fotos/" + n + ".webp";
  const vp = (n) => "assets/video/v/" + n + ".webp?v=1";
  const F = {
    hero: fo("sudaderas"),
    perfilB: fo("perfil-paola"),
    perfilPareja: fo("perfil-pareja"),
    // t0..t5 también son las cartas del memorama de fotos
    t0: fo("ramo"), t1: fo("abrazo"), t2: fo("sudaderas"),
    t3: fo("cocinando"), t4: fo("espejo"), t5: fo("acuario"),
    t6: fo("minecraft"), t7: vp("pastel-video"),
    final: fo("ramo"),
    puzzle: fo("sudaderas"),
    puzzle2: "",
    postCreditos: fo("abrazo")
  };

  /* 3. AUDIO / VIDEO (cada canción empieza poco antes de su clímax) */
  const M = {
    intro: "assets/audio/intro.mp3",
    temporadas: [
      "assets/audio/lo-que-en-ti-veo.mp3",
      "assets/audio/honeybee.mp3",
      "assets/audio/halleys-comet.mp3",
      "assets/audio/wildflower.mp3",
      "assets/audio/getting-older.mp3"
    ],
    canciones: [
      "Lo Que en Ti Veo · Kany García y Nahuel Pennisi",
      "honeybee · Olivia Rodrigo",
      "Halley's Comet · Billie Eilish",
      "WILDFLOWER · Billie Eilish",
      "Getting Older · Billie Eilish"
    ],
    musica: "",
    videoFinal: "assets/video/v/continuara.mp4?v=1",
    audioRemitente: ""
  };

  /* 4. ACCESO Y NOTIFICACIÓN */
  const acceso = {
    demo: false,
    cualquierClave: false,
    password: "maroon",
    pistaPassword: "Tú apodo favorito mío",
    estreno: ""
  };

  const notificacion = { whatsapp: "526623591156", email: "", endpoint: "" };

  const sitio = {
    url: new URL("./", location.href).href,
    coincidencia: 100,
    clasificacion: "TP",
    clasificacionTexto: "Amor infinito, lleno de luz",
    heroTag: "UN CIELO ESTRELLADO",
    heroTop: "N.º 1 en el corazón de Ian",
    sinopsis: `4 años de conocernos, 1 mes juntos y un amor infinito como un cielo estrellado. ` +
              `4 películas y 1 serie originales de ${P.nombreA} para ${P.nombreB}.`,
    estrenoTexto: `4 películas y 1 serie originales de ${P.nombreA}, solo para ti`,
    generos: ["Romance", "Comedia romántica", "Basada en hechos reales"],
    filaRecomendada: "Para Paola, con todo mi amor"
  };

  /* 5. PELÍCULAS Y SERIES */
  // V(n): clip vertical (centrado sobre fondo difuminado) en assets/video/v/
  const V = (n, a, b) => ({ img: "assets/video/v/" + n + ".mp4?v=1", poster: "assets/video/v/" + n + ".webp?v=1", texto: [a, b] });
  // S(foto): foto del cliente en versión vertical completa (assets/fotos/v/)
  const S = (n, a, b) => ({ img: "assets/fotos/v/" + n + ".webp?v=1", texto: [a, b] });
  const son = (i) => ({ musica: M.temporadas[i], cancion: M.canciones[i] });
  const cred = (...extra) => [["Protagonizada por", `${P.nombreB} y ${P.nombreA}`], ...extra, ["Dirección", "El destino, que nos juntó hace 4 años"]];

  const temporadas = [
    /* =================== PELÍCULAS =================== */
    {
      num: 0, tipo: "pelicula", titulo: "Un Cielo Estrellado", anio: 2026, clasificacion: "TP",
      imagen: F.t0, ...son(0), top10: true,
      sinopsis: "Lo que Ian siente por ti, con sus propias palabras.",
      creditos: cred(["Historia original", P.nombreA], ["Banda sonora", M.canciones[0]]),
      episodios: [{
        titulo: "Un Cielo Estrellado", duracion: 116,
        descripcion: "Infinito, lleno de luz y siempre sorprendente.",
        escenas: [
          V("cuatro", "Desde hace 4 años nos conocemos", "y ya 1 mes juntos."),
          S("sudaderas", "Todo este tiempo ha sido maravilloso", "a tu lado."),
          V("cielo", "Nuestro amor es como un cielo estrellado,", "infinito, lleno de luz y siempre sorprendente."),
          S("ramo", "Cada día a tu lado es un regalo,", "una nueva oportunidad de vivir lo más bonito."),
          V("alas", "Tu amor me da alas", "y, al mismo tiempo,"),
          V("abrazo-video", "es el suelo firme", "donde puedo descansar."),
          S("espejo", "No importa a dónde", "nos lleve el mundo,"),
          V("contigo", "mientras sea contigo,", "sé que estaré exactamente donde debo estar."),
          S("abrazo", "Te quiero, Paola.", "Gracias por este mes tan bonito. ✨")
        ],
        recompensa: "Cupón: un abrazo largo, de esos que son suelo firme 🤗"
      }]
    },
    {
      num: 1, tipo: "pelicula", titulo: "Feliz Cumpleaños, Paola", anio: 2026, clasificacion: "TP",
      imagen: vp("pastel-video"), ...son(1), top10: true,
      sinopsis: "Globos, regalos y un pastel de Bob Esponja solo para ti.",
      creditos: cred(["Repostería", "Un pastel de fondo de bikini"], ["Banda sonora", M.canciones[1]]),
      episodios: [{
        titulo: "Feliz Cumpleaños, Paola", duracion: 116,
        descripcion: "Tu día, tu pastel y tu sonrisa.",
        escenas: [
          V("cumple", "Hay días que brillan más", "que todos los demás."),
          V("pastel-video", "Un pastel de Bob Esponja", "que decía tu nombre. 🎂"),
          V("cumple-video", "Y tú, la festejada,", "rodeada de regalos. 🎁"),
          V("regalo-video", "Abrir regalos contigo", "es otra forma de ser feliz."),
          V("regalo", "Pero el mejor regalo", "es tenerte a mi lado."),
          S("ramo", "Flores y chocolates", "para la más dulce. 🍫"),
          V("atardecer-pareja", "Tú y yo", "con el cielo pintado de naranja."),
          S("abrazo", "Que todos tus deseos", "se hagan realidad."),
          S("sudaderas", "Y que me dejes estar", "en muchos cumpleaños más. 🎈")
        ],
        recompensa: "Cupón: un día entero de consentirte, tú decides el plan 👑"
      }]
    },
    {
      num: 2, tipo: "pelicula", titulo: "Cuatro Años y Un Mes", anio: 2026, clasificacion: "TP",
      imagen: F.t2, ...son(2), top10: true,
      sinopsis: "Cuatro años conociéndonos. Un mes juntos. Una historia que apenas empieza.",
      creditos: cred(["Tiempo de rodaje", "4 años y 1 mes"], ["Banda sonora", M.canciones[2]]),
      episodios: [{
        titulo: "Cuatro Años y Un Mes", duracion: 116,
        descripcion: "De conocernos a elegirnos.",
        escenas: [
          V("cometa", "Hace 4 años nos conocimos,", "como un cometa que llega sin avisar. ☄️"),
          V("n54", "Cuatro años de pláticas, risas", "y de conocernos poco a poco."),
          S("sudaderas", "Aprendí tus gestos,", "tus bromas y tus caras."),
          V("sudaderas-video", "Contigo hasta lo más simple", "se vuelve divertido. 😄"),
          S("minecraft", "Hasta en Minecraft", "construimos juntos. ⛏️"),
          S("espejo", "Y un día, después de tanto tiempo…", ""),
          V("mes", "por fin: tú y yo.", "Un mes juntos. ❤"),
          V("esc16", "Cuatro años para conocerte", "y toda la vida para quererte."),
          S("abrazo", "Valió la pena", "cada día de espera.")
        ],
        recompensa: "Cupón: una noche de juegos, tú escoges cuál 🎮"
      }]
    },
    {
      num: 3, tipo: "pelicula", titulo: "Alas y Suelo Firme", anio: 2026, clasificacion: "TP",
      imagen: F.t1, ...son(3), top10: true,
      sinopsis: "Tu amor me da alas y, al mismo tiempo, es el lugar donde puedo descansar.",
      creditos: cred(["Efectos especiales", "Tus abrazos"], ["Banda sonora", M.canciones[3]]),
      episodios: [{
        titulo: "Alas y Suelo Firme", duracion: 116,
        descripcion: "Lo que me das sin darte cuenta.",
        escenas: [
          V("alas", "Contigo siento", "que puedo volar."),
          S("acuario", "Que me atrevo a todo,", "hasta a posar con tiburones. 🦈"),
          S("cocinando", "Y también me das calma:", "cocinar juntos, sin prisa. 🍳"),
          V("suelo", "Eres el suelo firme", "donde puedo descansar."),
          V("abrazo-video", "Tus abrazos", "son mi lugar favorito."),
          S("ramo", "A tu lado todo", "se siente en su lugar."),
          V("atardecer", "No importa a dónde", "nos lleve el mundo…"),
          V("contigo", "mientras sea contigo,", "estoy donde debo estar."),
          S("espejo", "Gracias por ser", "mis alas y mi hogar. ❤")
        ],
        recompensa: "Cupón: cocinamos juntos lo que tú quieras 🍝"
      }]
    },

    /* =================== SERIE =================== */
    {
      num: 4, tipo: "serie", titulo: "Un Mes Contigo", anio: 2026, clasificacion: "TP",
      imagen: F.t3, ...son(4), top10: true,
      sinopsis: "Las pequeñas cosas, las gracias y todo lo que viene. Una serie corta sobre nosotros.",
      creditos: cred(["Guion", "Escrito con todo mi amor"], ["Banda sonora", M.canciones[4]]),
      episodios: [
        {
          titulo: "Las Pequeñas Cosas", duracion: 72,
          descripcion: "Lo cotidiano, contigo, es lo más bonito.",
          escenas: [
            S("cocinando", "Cocinar juntos", "y probar todo antes de servir."),
            S("minecraft", "Jugar juntos", "aunque sea en otro mundo."),
            V("sudaderas-video", "Hacer tonterías", "con sudadera puesta."),
            S("acuario", "Salir a pasear", "y tomarnos fotos ridículas. 📸"),
            V("vinilo", "Las pequeñas cosas contigo", "son las que más guardo.")
          ],
          recompensa: "Cupón: una tarde de antojos, yo invito 🍕"
        },
        {
          titulo: "Gracias", duracion: 72,
          descripcion: "Todo lo que quiero agradecerte.",
          escenas: [
            V("regalo", "Gracias por cada día", "a tu lado."),
            S("ramo", "Gracias por tu cariño", "y por tu paciencia."),
            V("abrazo-video", "Gracias por tus abrazos,", "que me dan paz."),
            S("sudaderas", "Gracias por hacerme reír", "como nadie."),
            V("esc11", "Gracias por 4 años de amistad", "y por este primer mes."),
            S("abrazo", "Y gracias por elegirme,", "Paola. 🙏")
          ],
          recompensa: "Cupón: una cita sorpresa organizada por mí 💌"
        },
        {
          titulo: "Lo Que Viene", duracion: 80,
          descripcion: "Nuestras metas, una por una.",
          escenas: [
            V("cielo", "Lo que viene:", "un cielo lleno de estrellas por descubrir. ✨"),
            V("n73", "Más lugares por conocer,", "siempre de la mano."),
            V("cumple-video", "Más cumpleaños", "celebrándote. 🎂"),
            V("mes", "Más meses…", "y muchos años juntos."),
            V("continuara", "Esta historia continúa…", ""),
            S("espejo", "Te quiero, Paola. ✨", "Ahora te toca a ti: ve a El Final. ❤")
          ],
          recompensa: "Ya puedes ver: EL FINAL 🔴"
        }
      ]
    }
  ];

  /* 6. DETRÁS DE CÁMARAS */
  const extras = [
    { titulo: "Casting", img: fo("sudaderas"), texto: "El papel principal siempre fue tuyo, Paola." },
    { titulo: "Locaciones", img: fo("cocinando"), texto: "La cocina, el acuario, Minecraft y todos los lugares que nos faltan por conocer." },
    { titulo: "Banda sonora", img: fo("ramo"), texto: M.canciones.join(" · ") },
    { titulo: "Escenas eliminadas", img: fo("acuario"), texto: "Fotos chistosas, risas y muchos momentos que no cupieron aquí." }
  ];

  /* 7. TEMPORADA FINAL */
  const final = {
    titulo: "El Final: Tu Turno",
    sinopsis: `Después de 4 películas y 1 serie, la historia sigue. En este final, tú escribes el siguiente capítulo.`,
    imagen: F.final,
    preguntas: [
      "¿Cuál es tu película o serie favorita de este regalo y por qué?",
      "¿Qué recuerdas de cuando nos conocimos hace 4 años?",
      "¿Cuál ha sido tu momento favorito de este primer mes juntos?",
      "¿A dónde quieres que nos lleve el mundo?",
      `Escríbele a ${P.nombreA} algo que nunca le hayas dicho.`
    ],
    carta: (r) =>
`Para Paola:

Llegaste al final del catálogo, pero no de nuestra historia.

Dices que tu título favorito es "${r[0]}". El mío es cualquiera en el que sales tú.

De cuando nos conocimos recuerdas: ${r[1]}. Qué bonito que todo empezara así.

Tu momento favorito de este mes: ${r[2]}. Prometo que vamos a vivir muchos más.

Y a dónde quieres ir: ${r[3]}. Ya quiero que lleguemos juntos.

${P.mensajeFinal}

Con todo mi amor,
${P.nombreA}`
  };

  /* 8. CRÉDITOS Y POST-CRÉDITOS */
  const creditos = [
    ["Una producción original de", P.nombreA],
    ["Protagonizada por", "Paola, mi cielo estrellado"],
    ["Coprotagonista", P.nombreA],
    ["Dirección", "El destino"],
    ["Guion", "4 años de conocernos y 1 mes juntos"],
    ["Banda sonora", M.canciones.join(" · ")],
    ["Efectos especiales", "Estrellas, cometas y muchos abrazos"],
    ["Catering", "Lo que cocinamos juntos"],
    ["Dobles de riesgo", "Ninguno. Todo fue real."],
    ["Agradecimientos especiales", "A ti, por cada día a mi lado"],
    ["", "Ningún corazón fue dañado durante la filmación de estas películas y series."],
    ["", `© ${new Date().getFullYear()} ${P.nombreA}. Todos los derechos reservados (para nosotros).`]
  ];

  const postCreditos = {
    imagen: F.postCreditos,
    etiqueta: "ESCENA POST-CRÉDITOS",
    texto: "Esta historia acaba de ser renovada… por muchos meses y años más.",
    anuncio: "Nueva temporada",
    subtitulo: "Próximamente: más cumpleaños, más aventuras y un cielo lleno de estrellas juntos. ✨",
    sorpresa: "Te quiero, Paola ❤"
  };

  // Paquete de $79: solo el memorama de fotos en Juegos
  const arcades = ["memory"];

  return { pareja: P, fotos: F, media: M, acceso, notificacion, sitio, temporadas, extras, final, creditos, postCreditos, arcades };
})();

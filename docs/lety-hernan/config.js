/* =====================================================================
   TEMPORADAS DE NOSOTROS — Lety para Hernan
   Paquete Nuestro Capítulo ($79): 4 películas, 1 serie (3 episodios), 1 juego (memorama).
   Envía: Lety Subias. Recibe: Hernan. Aniversario: no aplica.
   Historia (texto de Lety, va completo en la película 0 "Infinitamente").
   Contraseña: hernan. Canciones recortadas poco antes del clímax.
   Fotos: 23 del cliente (assets/fotos, versión vertical en assets/fotos/v).
   Videos: 2 del cliente (globos-video, volcan-video) en assets/video/v, sin audio.
   Relleno: sin stock (la clienta pidió solo sus fotos); 6 animaciones hechas para este pedido
   (infinito, gracias, camino, momentos, corazon, continuara).
   ===================================================================== */
window.TDN = (function () {

  /* 1. DATOS */
  const P = {
    nombreA: "Lety",
    nombreB: "Hernan",
    apodos: ["mi amor"],
    fechaInicio: "",
    aniosManual: 1,
    ciudad: "",
    primeraCita: "",
    cancion: "Hasta Donde Te Quiero",
    artista: "La Rondalla de Saltillo",
    viajes: [],
    dificiles: [],
    anecdota: "",
    culpableAnecdota: 0,
    gustosB: ["Volar en globo", "Las cabañas en el bosque", "Los momentos juntos"],
    suenos: ["Más amaneceres juntos", "Más lugares por conocer", "Muchos momentos inolvidables más"],
    mensajeFinal: "Te quiero infinitamente, agradezco a Dios y a la vida por ponerte en mi camino y por permitirnos vivir momentos inolvidables que quedarán grabados por siempre en mi corazón. 💕"
  };
  P.anioInicio = 2026;
  P.anios = P.aniosManual || 1;
  P.fechaCodigo = "";
  P.apodo = P.apodos[0];

  /* 2. FOTOS */
  const fo = (n) => "assets/fotos/" + n + ".webp";
  const F = {
    hero: fo("canasta-suelo"),
    perfilB: fo("perfil-hernan"),
    perfilPareja: fo("perfil-pareja"),
    // t0..t5 también son las cartas del memorama de fotos
    t0: fo("selfie-cama"), t1: fo("globo-amarillo"), t2: fo("cabana-volcan"),
    t3: fo("amor-luces"), t4: fo("alas"), t5: fo("domo"),
    t6: fo("mirador"), t7: fo("brindis"),
    final: fo("te-amo"),
    puzzle: fo("canasta-suelo"),
    puzzle2: "",
    postCreditos: fo("amanecer-globos")
  };

  /* 3. AUDIO / VIDEO (cada canción empieza poco antes de su clímax) */
  const M = {
    intro: "assets/audio/intro.mp3",
    temporadas: [
      "assets/audio/hasta-donde-te-quiero.mp3",
      "assets/audio/cada-vez-que-vuelvas.mp3",
      "assets/audio/hasta-la-raiz.mp3",
      "assets/audio/nunca-me-dejes.mp3",
      "assets/audio/zona-rica.mp3"
    ],
    canciones: [
      "Hasta Donde Te Quiero · La Rondalla de Saltillo",
      "Cada Vez Que Vuelvas · Siddhartha",
      "Hasta la Raíz · Natalia Lafourcade",
      "Nunca Me Dejes · Reyno",
      "Spanish Girl · Zona Rica",
      "Tulipanes · Enjambre"
    ],
    musica: "",
    videoFinal: "assets/video/v/continuara.mp4?v=1",
    audioRemitente: ""
  };

  /* 4. ACCESO Y NOTIFICACIÓN */
  const acceso = {
    demo: false,
    cualquierClave: false,
    password: "hernan",
    pistaPassword: "Tu nombre, en minúsculas",
    estreno: ""
  };

  const notificacion = { whatsapp: "525645193378", email: "", endpoint: "" };

  const sitio = {
    url: new URL("./", location.href).href,
    coincidencia: 100,
    clasificacion: "TP",
    clasificacionTexto: "Amor infinito y momentos inolvidables",
    heroTag: "TE QUIERO INFINITAMENTE",
    heroTop: "N.º 1 en el corazón de Lety",
    sinopsis: `Globos al amanecer, cabañas frente al volcán y noches llenas de pétalos. ` +
              `4 películas y 1 serie originales de ${P.nombreA} para ${P.nombreB}.`,
    estrenoTexto: `4 películas y 1 serie originales de ${P.nombreA}, solo para ti`,
    generos: ["Romance", "Aventura", "Basada en hechos reales"],
    filaRecomendada: "Para Hernan, con todo mi amor"
  };

  /* 5. PELÍCULAS Y SERIES */
  // V(n): clip vertical (centrado sobre fondo difuminado) en assets/video/v/
  const V = (n, a, b) => ({ img: "assets/video/v/" + n + ".mp4?v=1", poster: "assets/video/v/" + n + ".webp?v=1", texto: [a, b] });
  // S(foto): foto del cliente en versión vertical completa (assets/fotos/v/)
  const S = (n, a, b) => ({ img: "assets/fotos/v/" + n + ".webp?v=1", texto: [a, b] });
  const son = (i) => ({ musica: M.temporadas[i], cancion: M.canciones[i] });
  const cred = (...extra) => [["Protagonizada por", `${P.nombreB} y ${P.nombreA}`], ...extra, ["Dirección", "Dios y la vida, que nos pusieron en el mismo camino"]];

  const temporadas = [
    /* =================== PELÍCULAS =================== */
    {
      num: 0, tipo: "pelicula", titulo: "Infinitamente", anio: 2026, clasificacion: "TP",
      imagen: F.t0, ...son(0), top10: true,
      sinopsis: "Lo que Lety siente por ti, con sus propias palabras.",
      creditos: cred(["Historia original", P.nombreA], ["Banda sonora", M.canciones[0]]),
      episodios: [{
        titulo: "Infinitamente", duracion: 100,
        descripcion: "¿Hasta dónde te quiero?",
        escenas: [
          V("infinito", "Hernan:", "te quiero infinitamente."),
          S("selfie-cama", "Te quiero infinitamente,", "hasta donde tus ojos no ven."),
          V("gracias", "Agradezco a Dios", "y a la vida"),
          V("camino", "por ponerte", "en mi camino"),
          S("canasta-suelo", "y por permitirnos vivir", "momentos inolvidables"),
          S("amanecer-globos", "que quedarán grabados", "por siempre"),
          V("corazon", "en mi corazón. 💕", ""),
          S("mirador", "Para mi amor", "no hay distancias ni fronteras."),
          S("selfie-bosque", "Te quiero así, tal como eres,", "cerquita de ti, siempre."),
          S("alas", "Hasta donde tus ojos no ven", "y más allá del tiempo. ❤")
        ],
        recompensa: "Cupón: un abrazo infinito, cuando tú quieras 🤗"
      }]
    },
    {
      num: 1, tipo: "pelicula", titulo: "Volar Contigo", anio: 2026, clasificacion: "TP",
      imagen: F.t1, ...son(1), top10: true,
      sinopsis: "Una madrugada, un globo y el sol saliendo detrás de las pirámides. Una aventura en las alturas.",
      creditos: cred(["Locación", "El cielo, al amanecer"], ["Banda sonora", M.canciones[1]]),
      episodios: [{
        titulo: "Volar Contigo", duracion: 116,
        descripcion: "Nuestro vuelo en globo.",
        escenas: [
          V("globos-video", "Una madrugada distinta:", "el cielo lleno de globos. 🎈"),
          S("canasta-suelo", "Antes de despegar,", "los nervios y la emoción."),
          S("canasta", "Y de pronto…", "¡ya estábamos volando!"),
          S("selfie-globo", "Tú y yo entre las nubes,", "viendo salir el sol."),
          S("amanecer-globos", "Las pirámides a nuestros pies", "y el sol de frente. ☀️"),
          S("brindis", "Un brindis", "por nosotros. 🥂"),
          S("globo-amarillo", "Con los brazos abiertos", "a todo lo que viene."),
          S("alas", "Contigo", "hasta me salen alas. 😄"),
          S("amanecer-sol", "Cada vez que estoy contigo", "siento que vuelo."),
          S("selfie-globo", "Y siempre te llevaré", "como una promesa. ❤")
        ],
        recompensa: "Cupón: elegir nuestra próxima aventura 🎈"
      }]
    },
    {
      num: 2, tipo: "pelicula", titulo: "Hasta la Raíz", anio: 2026, clasificacion: "TP",
      imagen: F.t2, ...son(2), top10: true,
      sinopsis: "Una casita en el árbol, un domo entre montañas y el volcán de testigo.",
      creditos: cred(["Locaciones", "El bosque, la cabaña y el volcán"], ["Banda sonora", M.canciones[2]]),
      episodios: [{
        titulo: "Hasta la Raíz", duracion: 116,
        descripcion: "Nuestra escapada al bosque.",
        escenas: [
          V("volcan-video", "Frente al volcán,", "entre pinos y cielo azul."),
          S("volcan", "Hasta el volcán", "quiso saludarnos. 🌋"),
          S("cabana-arbol", "Una casita en el árbol", "solo para los dos."),
          S("cabana-volcan", "Juntos,", "con la mejor vista del mundo."),
          S("terraza-volcan", "Aire de bosque", "y tu mano en la mía."),
          S("domo", "Nuestro refugio", "entre montañas."),
          S("fogata", "Malvaviscos en la fogata", "y el calorcito de estar juntos. 🔥"),
          S("te-amo-el", "En nuestra casita del árbol,", "un TE AMO entre rosas. 🌹"),
          S("fogata-2", "Te llevo dentro,", "hasta la raíz."),
          S("abrazo-volcan", "Y por más que pase el tiempo,", "vas a estar aquí. ❤")
        ],
        recompensa: "Cupón: otra escapada al bosque, tú escoges la cabaña 🌲"
      }]
    },
    {
      num: 3, tipo: "pelicula", titulo: "Nunca Me Dejes", anio: 2026, clasificacion: "TP",
      imagen: F.t3, ...son(3), top10: true,
      sinopsis: "Luces, rosas, copas de corazón y un TE AMO escrito con flores.",
      creditos: cred(["Decoración", "Pétalos, luces y mucho amor"], ["Banda sonora", M.canciones[3]]),
      episodios: [{
        titulo: "Nunca Me Dejes", duracion: 116,
        descripcion: "Nuestras noches más románticas.",
        escenas: [
          S("amor-luces", "AMOR,", "escrito en luces. ✨"),
          S("amor-postre", "Una cena", "llena de detalles."),
          S("copas-corazon", "Copas de corazón", "para brindar por nosotros. 🍷"),
          S("te-amo", "Un TE AMO entre rosas", "y un corazón de pétalos."),
          S("cama-corazon", "Pétalos por todas partes…", "y tú, mi persona favorita."),
          S("selfie-cama", "Ojalá y nunca me dejes,", "porque contigo lo tengo todo."),
          S("cena", "Cada cena a tu lado", "es una cita inolvidable."),
          S("rosas", "Cada flor me recuerda", "lo mucho que te quiero. 🌹"),
          S("sobre", "Guardo cada carta tuya:", "“por siempre serás mi corazón de melón”. 💛"),
          S("estrellas", "Y cada estrellita que me diste", "me sigue diciendo: te quiero mucho. ⭐")
        ],
        recompensa: "Cupón: una cena romántica, yo pongo los pétalos 🌹"
      }]
    },

    /* =================== SERIE =================== */
    {
      num: 4, tipo: "serie", titulo: "Momentos Inolvidables", anio: 2026, clasificacion: "TP",
      imagen: F.t4, ...son(4), top10: true,
      sinopsis: "Aventuras, gracias y lo que viene. Una serie corta sobre nosotros.",
      creditos: cred(["Guion", "Escrito con todo mi amor"], ["Banda sonora", M.canciones[4]]),
      episodios: [
        {
          titulo: "Aventureros", duracion: 72,
          descripcion: "Locuras, alturas y risas.",
          escenas: [
            V("momentos", "Momentos inolvidables,", "episodio 1."),
            S("mirador", "Viendo la ciudad", "desde lo más alto. 🏙️"),
            S("globo-amarillo", "Haciendo locuras", "sin pena. 😄"),
            S("alas", "Tú, mi ángel,", "y yo, siempre abrazada a ti."),
            S("cumple", "Y celebrar tus cumpleaños", "a tu lado. 🎂")
          ],
          recompensa: "Cupón: una sesión de fotos juntos 📸"
        },
        {
          titulo: "Gracias", duracion: 72,
          descripcion: "Todo lo que quiero agradecerte.",
          escenas: [
            V("gracias", "Gracias a Dios y a la vida…", "por ti."),
            S("rosas", "Gracias por cada detalle", "y por cada flor. 🌹"),
            S("lirios-rosas", "Gracias por consentirme", "como nadie."),
            S("lirios-blancos", "Gracias por tu paciencia", "y tu cariño."),
            S("cabana-volcan", "Gracias por los viajes", "y las aventuras."),
            S("carta", "Gracias por tus cartas", "y por decirme “mi china bonita”. 💌"),
            S("selfie-cama", "Y gracias por ser tú,", "Hernan. 🙏")
          ],
          recompensa: "Cupón: un día de consentirte, tú mandas 👑"
        },
        {
          titulo: "Lo Que Viene", duracion: 90,
          musica: "assets/audio/tulipanes.mp3", cancion: "Tulipanes · Enjambre",
          descripcion: "Nuestras metas, una por una.",
          escenas: [
            S("sueno", "Si puedes soñarlo,", "puedes lograrlo. 👑"),
            S("amanecer-sol", "Lo que viene:", "más amaneceres juntos. 🌅"),
            S("domo", "Más lugares por conocer", "y más escapadas juntos."),
            S("brindis", "Más brindis", "por nosotros. 🥂"),
            V("continuara", "Esta historia continúa…", ""),
            S("tulipan", "Te quiero infinitamente, Hernan. 🌷", "Ahora te toca a ti: ve a El Final. ❤")
          ],
          recompensa: "Ya puedes ver: EL FINAL 🔴"
        }
      ]
    }
  ];

  /* 6. DETRÁS DE CÁMARAS */
  const extras = [
    { titulo: "Casting", img: fo("selfie-cama"), texto: "El papel principal siempre fue tuyo, Hernan." },
    { titulo: "Locaciones", img: fo("cabana-arbol"), texto: "El cielo lleno de globos, la casita en el árbol, el domo entre montañas y todos los lugares que nos faltan." },
    { titulo: "Banda sonora", img: fo("amor-luces"), texto: M.canciones.join(" · ") },
    { titulo: "Escenas eliminadas", img: fo("fogata"), texto: "Malvaviscos quemados, risas y muchos momentos que no cupieron aquí." }
  ];

  /* 7. TEMPORADA FINAL */
  const final = {
    titulo: "El Final: Tu Turno",
    sinopsis: `Después de 4 películas y 1 serie, la historia sigue. En este final, tú escribes el siguiente capítulo.`,
    imagen: F.final,
    preguntas: [
      "¿Cuál es tu película o serie favorita de este regalo y por qué?",
      "¿Cuál es tu momento inolvidable favorito de nosotros?",
      "¿Qué sentiste cuando volamos en globo?",
      "¿A dónde quieres que vayamos en nuestra próxima aventura?",
      `Escríbele a ${P.nombreA} algo que nunca le hayas dicho.`
    ],
    carta: (r) =>
`Para Hernan:

Llegaste al final del catálogo, pero no de nuestra historia.

Dices que tu título favorito es "${r[0]}". El mío es cualquiera en el que sales tú.

Tu momento inolvidable favorito: ${r[1]}. Prometo que vamos a vivir muchos más.

Cuando volamos en globo sentiste: ${r[2]}. Yo sentí que contigo puedo llegar a donde sea.

Y la próxima aventura: ${r[3]}. Ya quiero que llegue.

${P.mensajeFinal}

Con todo mi amor,
${P.nombreA}`
  };

  /* 8. CRÉDITOS Y POST-CRÉDITOS */
  const creditos = [
    ["Una producción original de", P.nombreA],
    ["Protagonizada por", "Hernan, el amor de mi vida"],
    ["Coprotagonista", P.nombreA],
    ["Dirección", "Dios y la vida"],
    ["Guion", "Te quiero infinitamente"],
    ["Banda sonora", M.canciones.join(" · ")],
    ["Piloto de globo", "El cielo de la madrugada"],
    ["Decoración", "Pétalos, luces y rosas"],
    ["Dobles de riesgo", "Ninguno. Todo fue real."],
    ["Agradecimientos especiales", "A Dios y a la vida, por ponerte en mi camino"],
    ["", "Ningún corazón fue dañado durante la filmación de estas películas y series."],
    ["", `© ${new Date().getFullYear()} ${P.nombreA}. Todos los derechos reservados (para nosotros).`]
  ];

  const postCreditos = {
    imagen: F.postCreditos,
    etiqueta: "ESCENA POST-CRÉDITOS",
    texto: "Esta historia acaba de ser renovada… infinitamente.",
    anuncio: "Nueva temporada",
    subtitulo: "Próximamente: más amaneceres, más aventuras y más momentos inolvidables juntos. 🎈",
    sorpresa: "Te quiero infinitamente, Hernan ❤"
  };

  // Paquete de $79: solo el memorama de fotos en Juegos
  const arcades = ["memory"];

  return { pareja: P, fotos: F, media: M, acceso, notificacion, sitio, temporadas, extras, final, creditos, postCreditos, arcades };
})();

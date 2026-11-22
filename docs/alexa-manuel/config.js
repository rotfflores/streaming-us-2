/* =====================================================================
   TEMPORADAS DE NOSOTROS — Alexa para Manuel
   Paquete Nuestro Capítulo ($79): 4 películas, 1 serie (3 episodios), 1 juego (memorama).
   Envía: Alexa. Recibe: Manuel. Sin aniversario. Contraseña: manuel.
   Tono: pedir perdón y recordar lo que fueron (están separados).
   Canciones recortadas poco antes del clímax (Por Amarte Así y Dueño de Ti llevan dos cortes).
   Fotos: 13 de la clienta (assets/fotos, versión vertical en assets/fotos/v).
   Relleno: clips de ../comun/medios en versión vertical (assets/video/v) y la animación "corazon".
   ===================================================================== */
window.TDN = (function () {

  /* 1. DATOS */
  const P = {
    nombreA: "Alexa",
    nombreB: "Manuel",
    perfilNombre: "Alexa",            // Nombre del perfil al entrar (lo pidió la clienta)
    apodos: ["mi brillo"],
    fechaInicio: "2026-11-21",        // Solo para el año del pie de página (no dieron aniversario)
    aniosManual: 1,
    ciudad: "",
    primeraCita: "",
    cancion: "Por Amarte Así",
    artista: "Natanael Cano",
    viajes: [],
    dificiles: [],
    anecdota: "",
    culpableAnecdota: 0,
    gustosB: [],
    suenos: ["Volver a conocernos sin miedo a perder", "Abrazarte otra vez", "Escribir juntos un capítulo nuevo"],
    mensajeFinal: "Me equivoqué y te pido perdón. Te amo, te extraño y nada es igual si tú no estás conmigo. Si me das la oportunidad, quiero volver a conocerte, sin miedo a perder."
  };
  const inicio = new Date(P.fechaInicio + "T00:00:00");
  P.anioInicio = inicio.getFullYear();
  P.anios = P.aniosManual || 1;
  P.fechaCodigo = "";
  P.apodo = P.apodos[0];

  /* 2. FOTOS */
  const fo = (n) => "assets/fotos/" + n + ".webp";
  const cu = (n) => "assets/fotos/" + n + "-cuadro.webp";
  const F = {
    hero: fo("noche-blanco"),
    perfilB: cu("selfie-trompita"),
    perfilPareja: cu("beso-rojo"),
    // t0..t5 también son las cartas del memorama de fotos
    t0: cu("beso-rojo"), t1: cu("noche-blanco"), t2: cu("peluche-beso"),
    t3: cu("escaleras"), t4: cu("bengalas"), t5: cu("cumple-beso"),
    t6: cu("espejo"), t7: cu("peluche-navidad"),
    final: fo("abrazo-girasol"),
    puzzle: fo("peluche-navidad"),
    puzzle2: "",
    postCreditos: fo("en-tu-hombro")
  };

  /* 3. AUDIO / VIDEO (cada canción empieza poco antes de su clímax) */
  const M = {
    intro: "assets/audio/intro.mp3",
    temporadas: [
      "assets/audio/por-amarte-asi.mp3",
      "assets/audio/dueno-de-ti.mp3",
      "assets/audio/dejame-ser.mp3",
      "assets/audio/por-amarte-asi-2.mp3",
      "assets/audio/dueno-de-ti-2.mp3"
    ],
    canciones: [
      "Por Amarte Así · Natanael Cano",
      "Dueño de Ti · Sergio Vega",
      "Déjame Ser · Marca MP",
      "Por Amarte Así · Natanael Cano",
      "Dueño de Ti · Sergio Vega"
    ],
    musica: "",
    videoFinal: "assets/video/v/corazon.mp4?v=1",
    audioRemitente: ""
  };

  /* 4. ACCESO Y NOTIFICACIÓN */
  const acceso = {
    demo: false,
    cualquierClave: false,
    password: "",                     // Sin contraseña (lo pidió Obed 2026-11-21)
    pistaPassword: "Tu nombre, en minúsculas",
    estreno: ""
  };

  const notificacion = { whatsapp: "528443580356", email: "", endpoint: "" };

  const sitio = {
    url: new URL("./", location.href).href,
    coincidencia: 100,
    clasificacion: "TP",
    clasificacionTexto: "Amor, perdón y recuerdos",
    heroTag: "LO QUE FUIMOS",
    heroTop: "N.º 1 en el corazón de Alexa",
    sinopsis: `Hay historias que merecen otra oportunidad. ` +
              `4 películas y 1 serie originales de ${P.nombreA} para ${P.nombreB}.`,
    estrenoTexto: `4 películas y 1 serie originales de ${P.nombreA}, solo para ti`,
    generos: ["Romance", "Drama", "Basada en hechos reales"],
    filaRecomendada: "Para Manuel, con todo mi ser"
  };

  /* 5. PELÍCULAS Y SERIES */
  // V(n): clip vertical (centrado sobre fondo difuminado) en assets/video/v/
  // Fo(n): foto de la clienta completa sobre fondo difuminado (assets/fotos/v/)
  const V = (n, a, b) => ({ img: "assets/video/v/" + n + ".mp4?v=1", poster: "assets/video/v/" + n + ".webp?v=1", texto: [a, b] });
  const Fo = (n, a, b) => ({ img: "assets/fotos/v/" + n + ".webp?v=1", texto: [a, b] });
  const son = (i) => ({ musica: M.temporadas[i], cancion: M.canciones[i] });
  const cred = (...extra) => [["Protagonizada por", `${P.nombreB} y ${P.nombreA}`], ...extra, ["Dirección", "El corazón de Alexa"]];

  const temporadas = [
    /* =================== PELÍCULAS =================== */
    {
      num: 0, tipo: "pelicula", titulo: "Lo Mejor Que Me Pasó", anio: 2026, clasificacion: "TP",
      imagen: fo("beso-rojo"), ...son(0), top10: true,
      sinopsis: "Una carta de Alexa, con sus propias palabras, para Manuel.",
      creditos: cred(["Carta", P.nombreA], ["Banda sonora", M.canciones[0]]),
      episodios: [{
        titulo: "Lo Mejor Que Me Pasó", duracion: 122,
        descripcion: "Lo que Alexa quiere decirte, palabra por palabra.",
        escenas: [
          Fo("beso-rojo", "Tú has sido lo mejor", "que me pudo pasar."),
          Fo("noche-blanco", "Contigo viví muchas cosas lindas", "por primera vez."),
          Fo("escaleras", "Y si tuviera la oportunidad", "de volverte a conocer…"),
          Fo("peluche-beso", "…lo haría de nuevo", "sin miedo a perder."),
          Fo("en-tu-hombro", "Te amo y te extraño", "con todo mi ser."),
          V("esc00", "Me haces tanta falta.", "Ningún lugar es igual si tú no estás a mi lado."),
          V("llamada-lluvia", "Ya me cansé de llorar", "y de buscar tu amor."),
          Fo("abrazo-girasol", "Me equivoqué, y perdóname,", "pero yo te amo a ti."),
          Fo("bengalas", "Por favor, vuelve a mis brazos,", "porque tú eres mi brillo…"),
          V("corazon", "…y nada es igual", "si tú no estás conmigo. ❣️")
        ],
        recompensa: "Cupón: una plática sincera, sin prisas y de corazón 🤍"
      }]
    },
    {
      num: 1, tipo: "pelicula", titulo: "Por Primera Vez", anio: 2026, clasificacion: "TP",
      imagen: fo("cumple-beso"), ...son(1), top10: true,
      sinopsis: "Contigo muchas cosas lindas pasaron por primera vez. Una película sobre todo lo que vivimos.",
      creditos: cred(["Guion", "Nuestros recuerdos"], ["Banda sonora", M.canciones[1]]),
      episodios: [{
        titulo: "Por Primera Vez", duracion: 110,
        descripcion: "Todo lo bonito que viví contigo.",
        escenas: [
          V("esc16", "Contigo viví tantas cosas", "por primera vez."),
          Fo("cumple-beso", "Contigo supe lo que es", "que alguien te haga sentir única."),
          Fo("peluche-navidad", "Contigo cualquier fecha", "se volvía especial. 🎄"),
          Fo("espejo", "Me gustaba vernos juntos,", "así, tú y yo."),
          Fo("selfie-trompita", "Me hacías reír", "como nadie. 😂"),
          V("baile", "Contigo hasta lo más sencillo", "se sentía como una fiesta."),
          Fo("dia-familia", "Compartimos días,", "risas y momentos que no olvido."),
          Fo("carro", "A tu lado cualquier camino", "era el correcto."),
          V("n54", "Contigo aprendí", "lo que es querer de verdad."),
          Fo("peluche-beso", "Y todo eso, Manuel,", "lo guardo en mi corazón. 💗")
        ],
        recompensa: "Cupón: una cita como las de antes, tú eliges el lugar 🌹"
      }]
    },
    {
      num: 2, tipo: "pelicula", titulo: "Volverte a Conocer", anio: 2026, clasificacion: "TP",
      imagen: fo("escaleras"), ...son(2), top10: true,
      sinopsis: "Si tuviera la oportunidad de volver a empezar, lo haría de nuevo, sin miedo a perder.",
      creditos: cred(["Banda sonora", M.canciones[2]]),
      episodios: [{
        titulo: "Volverte a Conocer", duracion: 118,
        descripcion: "Lo haría de nuevo, sin miedo a perder.",
        escenas: [
          V("encuentro", "Si pudiera volver a empezar…", "te elegiría otra vez."),
          V("primera-cita", "Volvería a ponerme nerviosa", "en nuestra primera cita."),
          Fo("noche-blanco", "Volvería a tomarme", "cada foto contigo. 📸"),
          V("esc08", "Caminaría a tu lado", "sin soltarte la mano."),
          Fo("escaleras", "Subiría cada escalón", "contigo, sin prisa."),
          V("esc03", "Te escucharía más,", "te cuidaría mejor."),
          V("playa", "Y esta vez", "no tendría miedo a perder."),
          Fo("espejo", "Porque ya sé lo que vale", "tenerte a mi lado."),
          V("n73", "Déjame demostrarte", "que puedo hacerlo mejor."),
          V("reencuentro", "Déjame volver a conocerte,", "Manuel. 🤍")
        ],
        recompensa: "Cupón: un café para volver a conocernos ☕"
      }]
    },
    {
      num: 3, tipo: "pelicula", titulo: "Ningún Lugar Es Igual", anio: 2026, clasificacion: "TP",
      imagen: fo("en-tu-hombro"), ...son(3), top10: true,
      sinopsis: "Desde que no estás, nada se siente igual. Una película sobre extrañarte.",
      creditos: cred(["Banda sonora", M.canciones[3]]),
      episodios: [{
        titulo: "Ningún Lugar Es Igual", duracion: 74,
        descripcion: "Lo que se siente extrañarte.",
        escenas: [
          V("esc01", "Desde que no estás,", "los días se sienten largos."),
          V("n16", "Te pienso", "más de lo que imaginas."),
          V("esc15", "Ningún lugar es igual", "si tú no estás a mi lado."),
          Fo("en-tu-hombro", "Extraño recargarme en ti", "y sentirme en paz."),
          V("n57", "Extraño tus mensajes,", "tu voz, tu risa."),
          V("atardecer", "Me haces tanta falta,", "con todo mi ser."),
          V("corazon", "Mi corazón", "sigue siendo tuyo. ❣️")
        ],
        recompensa: "Cupón: un abrazo largo, de esos que lo arreglan todo 🤗"
      }]
    },

    /* =================== SERIE =================== */
    {
      num: 4, tipo: "serie", titulo: "Perdóname", anio: 2026, clasificacion: "TP",
      imagen: fo("abrazo-girasol"), ...son(4), top10: true,
      sinopsis: "Me equivoqué, recuerdo lo que fuimos y te pido que vuelvas. Una serie corta, de Alexa para Manuel.",
      creditos: cred(["Guion", "Escrito con el corazón en la mano"], ["Banda sonora", M.canciones[4]]),
      episodios: [
        {
          titulo: "Me Equivoqué", duracion: 66,
          descripcion: "Lo que me toca reconocer.",
          escenas: [
            V("esc19", "Hay cosas que quisiera", "poder regresar y hacer diferente."),
            V("dias-dificiles", "Me equivoqué,", "y lo sé."),
            V("n10", "Y no hay noche", "en que no lo piense."),
            V("esc11", "Hoy solo quiero pedirte,", "de corazón…"),
            Fo("abrazo-girasol", "…perdóname.", "Yo te amo a ti.")
          ],
          recompensa: "Cupón: escucharte todo lo que necesites decirme, sin interrumpir 🤍"
        },
        {
          titulo: "Lo Que Fuimos", duracion: 66,
          descripcion: "Un recuerdo de nosotros.",
          escenas: [
            Fo("peluche-navidad", "Fuimos risas,", "abrazos y detalles."),
            Fo("cumple-beso", "Fuimos fiesta", "y besos robados."),
            Fo("bengalas", "Fuimos luz,", "como esas chispas. ✨"),
            Fo("carro", "Fuimos camino", "y compañía."),
            Fo("beso-rojo", "Y lo que fuimos", "sigue vivo en mí.")
          ],
          recompensa: "Cupón: ver juntos nuestras fotos y recordar cada momento 📷"
        },
        {
          titulo: "Vuelve a Mis Brazos", duracion: 66,
          descripcion: "Porque tú eres mi brillo.",
          escenas: [
            V("final-prueba", "Por favor,", "vuelve a mis brazos."),
            Fo("noche-blanco", "Porque tú eres mi brillo,", "Manuel."),
            V("n70", "Y nada es igual", "si tú no estás conmigo."),
            Fo("peluche-beso", "Te amo", "con todo mi ser."),
            V("corazon", "Te espero aquí.", "Ahora ve a El Final. ❣️")
          ],
          recompensa: "Ya puedes ver: EL FINAL 🔴"
        }
      ]
    }
  ];

  /* 6. DETRÁS DE CÁMARAS */
  const extras = [
    { titulo: "Casting", img: fo("selfie-trompita"), texto: "El protagonista de esta historia siempre fuiste tú." },
    { titulo: "Locaciones", img: fo("escaleras"), texto: "Cada lugar donde estuvimos juntos. Ninguno es igual sin ti." },
    { titulo: "Banda sonora", img: fo("espejo"), texto: M.canciones.slice(0, 3).join(" · ") },
    { titulo: "Escenas eliminadas", img: fo("dia-familia"), texto: "Las mejores escenas no se grabaron: se vivieron. Y las guardo en mi corazón." }
  ];

  /* 7. TEMPORADA FINAL */
  const final = {
    titulo: "El Final: Tu Respuesta",
    sinopsis: `Después de 4 películas y 1 serie, el siguiente capítulo depende de ti.`,
    imagen: F.final,
    preguntas: [
      "¿Cuál es tu película o serie favorita de este regalo y por qué?",
      "¿Cuál es tu recuerdo favorito de nosotros?",
      "¿Qué extrañas de nosotros?",
      "¿Qué te gustaría que hiciéramos diferente?",
      `¿Le darías a ${P.nombreA} la oportunidad de volver a conocerte? Escríbele lo que sientes.`
    ],
    carta: (r) =>
`Para Manuel:

Llegaste al final del catálogo, pero no de lo que siento por ti.

Dices que tu título favorito es "${r[0]}". El mío es cualquiera en el que sales tú.

Tu recuerdo favorito de nosotros: ${r[1]}. Yo también lo guardo en el corazón.

Lo que extrañas de nosotros: ${r[2]}. Yo lo extraño igual.

Lo que te gustaría que hiciéramos diferente: ${r[3]}. Te escucho, y quiero hacerlo mejor.

${P.mensajeFinal}

Con todo mi ser,
${P.nombreA} ❣️`
  };

  /* 8. CRÉDITOS Y POST-CRÉDITOS */
  const creditos = [
    ["Una producción original de", P.nombreA],
    ["Protagonizada por", P.nombreB],
    ["Coprotagonista", P.nombreA],
    ["Dirección", "El corazón de Alexa"],
    ["Guion", "Todo lo que no te dije a tiempo"],
    ["Banda sonora", M.canciones.slice(0, 3).join(" · ")],
    ["Efectos especiales", "Tu sonrisa"],
    ["Dobles de riesgo", "Ninguno. Todo fue real."],
    ["Agradecimientos especiales", "A ti, por todo lo que fuimos"],
    ["", "Ningún sentimiento fue fingido durante la filmación de estas películas y series."],
    ["", `© ${new Date().getFullYear()} ${P.nombreA}. Todos los derechos reservados (para nosotros).`]
  ];

  const postCreditos = {
    imagen: F.postCreditos,
    etiqueta: "ESCENA POST-CRÉDITOS",
    texto: "Esta historia todavía no termina…",
    anuncio: "¿Nueva temporada?",
    subtitulo: "Eso depende de ti. Yo sigo aquí. ❣️",
    sorpresa: "Tú eres mi brillo, Manuel 💗"
  };

  // Paquete de $79: solo el memorama de fotos en Juegos
  const arcades = ["memory"];

  return { pareja: P, fotos: F, media: M, acceso, notificacion, sitio, temporadas, extras, final, creditos, postCreditos, arcades };
})();

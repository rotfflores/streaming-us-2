/* =====================================================================
   TEMPORADAS DE NOSOTROS — Diego para Minerva
   Paquete Nuestro Capítulo ($79): 4 películas, 1 serie (3 episodios), 1 juego (memorama).
   Envía: Diego Ronzon. Recibe: Minerva Cruz. Se conocieron el 15 de septiembre de 2024.
   Contraseña: 150924. Tono: están separados; gratitud y cariño, la puerta abierta sin presionar.
   Canciones recortadas poco antes del clímax.
   Fotos: 14 del cliente (assets/fotos, versión vertical en assets/fotos/v).
   Videos: 16 del cliente (assets/video/v/dm01..dm16, sin audio).
   Relleno: clips de stock verticales (assets/video/v) y las animaciones "fecha" y "puerta".
   ===================================================================== */
window.TDN = (function () {

  /* 1. DATOS */
  const P = {
    nombreA: "Diego",
    nombreB: "Minerva",
    apodos: ["Mine"],
    fechaInicio: "2024-09-15",        // El día que se conocieron
    aniosManual: 2,
    ciudad: "",
    primeraCita: "",
    cancion: "Regalo de Dios",
    artista: "Julión Álvarez y su Norteño Banda",
    viajes: [],
    dificiles: [],
    anecdota: "",
    culpableAnecdota: 0,
    gustosB: [],
    suenos: ["Que siempre seas muy feliz", "Que sepas que cuentas conmigo", "Que algún día la vida nos vuelva a juntar"],
    mensajeFinal: "Te quiero mucho y voy a agradecer por siempre la ternura, la complicidad y la cercanía que compartimos. Siempre estaré para ti, sin cerrar la puerta a que algún día podamos regresar."
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
    hero: fo("rio-selfie"),
    perfilB: cu("estadio-gradas"),
    perfilPareja: cu("cine-selfie"),
    // t0..t5 también son las cartas del memorama de fotos
    t0: cu("cruz-azul-selfie"), t1: cu("navidad-luces"), t2: cu("kayak"),
    t3: cu("stitch"), t4: cu("jardin-selfie"), t5: cu("graduacion"),
    t6: cu("mirador"), t7: cu("arbol-navidad"),
    final: fo("fiesta-selfie"),
    puzzle: fo("stitch"),
    puzzle2: "",
    postCreditos: fo("mirador")
  };

  /* 3. AUDIO / VIDEO (cada canción empieza poco antes de su clímax) */
  const M = {
    intro: "assets/audio/intro.mp3",
    temporadas: [
      "assets/audio/regalo-de-dios.mp3",
      "assets/audio/aqui-hay-para-llevar.mp3",
      "assets/audio/lo-tienes-todo.mp3",
      "assets/audio/tu.mp3",
      "assets/audio/ven-a-mi.mp3"
    ],
    canciones: [
      "Regalo de Dios · Julión Álvarez y su Norteño Banda",
      "Aquí Hay Para Llevar · La Arrolladora Banda El Limón",
      "Lo Tienes Todo · Julión Álvarez y su Norteño Banda",
      "Tú · Los Elegantes de Jerez",
      "Ven a Mí"
    ],
    musica: "",
    videoFinal: "assets/video/v/puerta.mp4?v=1",
    audioRemitente: ""
  };

  /* 4. ACCESO Y NOTIFICACIÓN */
  const acceso = {
    demo: false,
    cualquierClave: false,
    password: "150924",
    pistaPassword: "El día que nos conocimos (DDMMAA)",
    estreno: ""
  };

  const notificacion = { whatsapp: "525647544514", email: "", endpoint: "" };

  const sitio = {
    url: new URL("./", location.href).href,
    coincidencia: 100,
    clasificacion: "TP",
    clasificacionTexto: "Cariño, gratitud y recuerdos",
    heroTag: "LO QUE VIVIMOS",
    heroTop: "N.º 1 en el corazón de Diego",
    sinopsis: `Nos conocimos el 15 de septiembre de 2024. ` +
              `4 películas y 1 serie originales de ${P.nombreA} para ${P.nombreB}.`,
    estrenoTexto: `4 películas y 1 serie originales de ${P.nombreA}, solo para ti`,
    generos: ["Romance", "Gratitud", "Basada en hechos reales"],
    filaRecomendada: "Para Mine, con todo mi cariño"
  };

  /* 5. PELÍCULAS Y SERIES */
  // V(n): clip vertical (centrado) en assets/video/v/
  // Fo(n): foto del cliente completa sobre fondo difuminado (assets/fotos/v/)
  const V = (n, a, b) => ({ img: "assets/video/v/" + n + ".mp4?v=1", poster: "assets/video/v/" + n + ".webp?v=1", texto: [a, b] });
  const Fo = (n, a, b) => ({ img: "assets/fotos/v/" + n + ".webp?v=1", texto: [a, b] });
  const son = (i) => ({ musica: M.temporadas[i], cancion: M.canciones[i] });
  const cred = (...extra) => [["Protagonizada por", `${P.nombreB} y ${P.nombreA}`], ...extra, ["Dirección", "El corazón de Diego"]];

  const temporadas = [
    /* =================== PELÍCULAS =================== */
    {
      num: 0, tipo: "pelicula", titulo: "Gracias Por Tanto", anio: 2026, clasificacion: "TP",
      imagen: fo("cruz-azul-selfie"), ...son(0), top10: true,
      sinopsis: "Una carta de Diego, con sus propias palabras, para Minerva.",
      creditos: cred(["Carta", P.nombreA], ["Banda sonora", M.canciones[0]]),
      episodios: [{
        titulo: "Gracias Por Tanto", duracion: 140,
        descripcion: "Lo que Diego quiere decirte, palabra por palabra.",
        escenas: [
          V("fecha", "Nos conocimos", "el 15 de septiembre de 2024."),
          Fo("cruz-azul-selfie", "Durante dos años vivimos instantes", "que me hicieron profundamente feliz."),
          Fo("rio-selfie", "Quiero que siempre sepas", "que te quiero mucho…"),
          V("dm13", "…y que voy a agradecer por siempre", "la ternura, la complicidad y la cercanía que compartimos,"),
          Fo("jardin-selfie", "porque estar a tu lado", "me dio una alegría muy real"),
          V("dm02", "y me enseñó lo bonito", "que es sentirse acompañado."),
          Fo("mirador", "Todo lo que vivimos", "dejó una huella sincera en mi corazón,"),
          Fo("cine-selfie", "y el cariño", "sigue ahí."),
          V("puerta", "Siempre estaré para ti,", "sin cerrar la puerta…"),
          Fo("fiesta-selfie", "…a que algún día", "podamos regresar. 🤍")
        ],
        recompensa: "Cupón: una plática sincera, cuando tú quieras ☕"
      }]
    },
    {
      num: 1, tipo: "pelicula", titulo: "Así Como Lo Pedí", anio: 2026, clasificacion: "TP",
      imagen: fo("navidad-luces"), ...son(1), top10: true,
      sinopsis: "Luces de diciembre, Halloween, aventuras y estadio. Una película sobre los momentos que vivimos juntos.",
      creditos: cred(["Guion", "Nuestros recuerdos"], ["Banda sonora", M.canciones[1]]),
      episodios: [{
        titulo: "Así Como Lo Pedí", duracion: 124,
        descripcion: "Los momentos que vivimos, uno por uno.",
        escenas: [
          V("dm04", "Diego y Mine:", "el mejor equipo. 💙"),
          Fo("navidad-luces", "Las luces de diciembre", "brillaban más a tu lado. ✨"),
          Fo("halloween", "Hasta una noche de Halloween", "se volvía una aventura contigo. 🎃"),
          Fo("kayak", "Chaleco salvavidas puesto", "y tú a mi lado: no hacía falta más. 🛶"),
          V("dm01", "Te quiero mucho,", "Mine."),
          Fo("stitch", "Stitch fue testigo", "de lo bonito que era estar juntos. 💗"),
          Fo("arbol-navidad", "Contigo cualquier fecha", "se volvía especial. 🎄"),
          Fo("estadio-afuera", "Tu sonrisa con la playera puesta", "vale más que cualquier gol. ⚽"),
          V("dm08", "Momentos que no caben", "en una sola película."),
          V("baile", "Así como lo pedí,", "así se me concedió.")
        ],
        recompensa: "Cupón: un día de risas como los de antes, cuando tú quieras 🎡"
      }]
    },
    {
      num: 2, tipo: "pelicula", titulo: "Lo Que Me Diste", anio: 2026, clasificacion: "TP",
      imagen: fo("jardin-selfie"), ...son(2), top10: true,
      sinopsis: "La ternura, la complicidad y la cercanía. Una película sobre todo lo que me regalaste.",
      creditos: cred(["Banda sonora", M.canciones[2]]),
      episodios: [{
        titulo: "Lo Que Me Diste", duracion: 126,
        descripcion: "Gracias por todo lo que me regalaste.",
        escenas: [
          V("dm09", "Gracias por ser parte", "de mi vida."),
          Fo("jardin-selfie", "Me diste ternura", "en los días sencillos."),
          V("esc16", "Me diste complicidad:", "entendernos sin decir nada."),
          Fo("cine-selfie", "Me diste cercanía,", "de esa que se siente en el pecho."),
          V("dm10", "Contigo todo", "tenía sentido."),
          Fo("rio-selfie", "Me enseñaste lo bonito", "que es sentirse acompañado."),
          V("dm03", "Cada foto guarda un momento,", "y en todas estás tú."),
          V("primera-cita", "Gracias por cada plática,", "cada risa y cada abrazo."),
          V("dm12", "Por eso, Mine,", "mi corazón te da las gracias."),
          V("dm14", "Lo que me diste", "lo llevo conmigo siempre. 🤍")
        ],
        recompensa: "Cupón: un abrazo largo, de esos que lo dicen todo 🤗"
      }]
    },
    {
      num: 3, tipo: "pelicula", titulo: "Tú", anio: 2026, clasificacion: "TP",
      imagen: fo("graduacion"), ...son(3), top10: true,
      sinopsis: "Tu sonrisa, tus logros y tu forma de ser. Una película sobre la mujer increíble que eres.",
      creditos: cred(["Banda sonora", M.canciones[3]]),
      episodios: [{
        titulo: "Tú", duracion: 128,
        descripcion: "Para la mujer increíble que eres.",
        escenas: [
          V("dm05", "Tú,", "con esa sonrisa que ilumina todo."),
          V("dm06", "Tú,", "que mereces que la vida te consienta."),
          Fo("graduacion", "Tú y tus logros:", "qué orgulloso estoy de ti. 🎓"),
          V("dm11", "Verte cumplir tus metas", "es de lo más bonito que he vivido."),
          Fo("estadio-gradas", "Tú, con tu alegría", "contagiosa. 💙"),
          V("dm07", "Te deseo que cada día", "sea tan bonito como tú."),
          V("n16", "Te conocí de la nada", "y me cambiaste la forma de ver la vida."),
          V("dm15", "Que todos tus cumpleaños", "estén llenos de amor. 🎂"),
          Fo("mirador", "Que llegues tan alto", "como siempre has soñado."),
          V("dm16", "Tú, Minerva,", "eres única. ❄️")
        ],
        recompensa: "Cupón: celebrar juntos tu próximo logro, cuando tú quieras 🎉"
      }]
    },

    /* =================== SERIE =================== */
    {
      num: 4, tipo: "serie", titulo: "Siempre Estaré Para Ti", anio: 2026, clasificacion: "TP",
      imagen: fo("fiesta-selfie"), ...son(4), top10: true,
      sinopsis: "Gratitud, cariño y una puerta que no se cierra. Una serie corta, de Diego para Minerva.",
      creditos: cred(["Guion", "Escrito con el corazón"], ["Banda sonora", M.canciones[4]]),
      episodios: [
        {
          titulo: "Gracias", duracion: 72,
          descripcion: "Por cada instante.",
          escenas: [
            V("esc16", "Si alguna vez dudas", "de lo que significaste para mí…"),
            V("dm13", "…que esto te lo recuerde:", "gracias por existir."),
            Fo("rio-selfie", "Gracias por dos años", "de alegría real."),
            V("n73", "Gracias por caminar", "a mi lado."),
            Fo("cruz-azul-selfie", "Gracias, Mine,", "de todo corazón.")
          ],
          recompensa: "Cupón: un café para ponernos al día ☕"
        },
        {
          titulo: "El Cariño Sigue Ahí", duracion: 72,
          descripcion: "Lo que no cambia.",
          escenas: [
            V("dm12", "Las cosas cambian,", "pero hay cosas que se quedan."),
            Fo("arbol-navidad", "El cariño que te tengo", "sigue aquí."),
            V("esc11", "Todo lo que vivimos", "dejó una huella sincera."),
            Fo("kayak", "Y cada recuerdo", "me saca una sonrisa."),
            V("corazon", "Te quiero mucho,", "Minerva. 💗")
          ],
          recompensa: "Cupón: ver juntos nuestras fotos y recordar cada momento 📷"
        },
        {
          titulo: "La Puerta Abierta", duracion: 72,
          descripcion: "Sin prisa y sin presión.",
          escenas: [
            V("puerta", "Siempre estaré para ti,", "pase lo que pase."),
            V("atardecer", "Sin prisa", "y sin presión."),
            Fo("fiesta-selfie", "Sin cerrar la puerta", "a que algún día podamos regresar."),
            V("final-prueba", "Lo que tenga que ser,", "será."),
            V("corazon", "Aquí estoy.", "Ahora ve a El Final. 🤍")
          ],
          recompensa: "Ya puedes ver: EL FINAL 🔴"
        }
      ]
    }
  ];

  /* 6. DETRÁS DE CÁMARAS */
  const extras = [
    { titulo: "Casting", img: fo("estadio-gradas"), texto: "La protagonista de esta historia siempre fuiste tú." },
    { titulo: "Locaciones", img: fo("navidad-luces"), texto: "Luces, estadios, ríos y miradores. Cada lugar fue mejor contigo." },
    { titulo: "Banda sonora", img: fo("stitch"), texto: M.canciones.slice(0, 3).join(" · ") },
    { titulo: "Escenas eliminadas", img: fo("halloween"), texto: "Las mejores escenas no se grabaron: se vivieron. Y las guardo en mi corazón." }
  ];

  /* 7. TEMPORADA FINAL */
  const final = {
    titulo: "El Final: Tus Palabras",
    sinopsis: `Después de 4 películas y 1 serie, este espacio es para ti.`,
    imagen: F.final,
    preguntas: [
      "¿Cuál es tu película o serie favorita de este regalo y por qué?",
      "¿Cuál es tu recuerdo favorito de estos dos años?",
      "¿Qué es lo que más disfrutaste de nosotros?",
      "¿Qué le deseas a tu vida en lo que viene?",
      `¿Hay algo que quieras decirle a ${P.nombreA}? Escríbelo con calma.`
    ],
    carta: (r) =>
`Para Minerva:

Llegaste al final del catálogo, pero no del cariño que te tengo.

Dices que tu título favorito es "${r[0]}". El mío es cualquiera en el que sales tú.

Tu recuerdo favorito de estos dos años: ${r[1]}. Yo también lo guardo en el corazón.

Lo que más disfrutaste de nosotros: ${r[2]}. Gracias por regalarme eso.

Lo que le deseas a tu vida: ${r[3]}. Ojalá se cumpla todo, porque te lo mereces.

${P.mensajeFinal}

Con cariño, siempre,
${P.nombreA} 🤍`
  };

  /* 8. CRÉDITOS Y POST-CRÉDITOS */
  const creditos = [
    ["Una producción original de", P.nombreA],
    ["Protagonizada por", P.nombreB],
    ["Coprotagonista", P.nombreA],
    ["Estreno de la historia", "15 de septiembre de 2024"],
    ["Dirección", "El corazón de Diego"],
    ["Guion", "Dos años de instantes felices"],
    ["Banda sonora", M.canciones.slice(0, 4).join(" · ")],
    ["Efectos especiales", "Tu sonrisa"],
    ["Dobles de riesgo", "Ninguno. Todo fue real."],
    ["Agradecimientos especiales", "A ti, por la ternura, la complicidad y la cercanía"],
    ["", "Ningún sentimiento fue fingido durante la filmación de estas películas y series."],
    ["", `© ${new Date().getFullYear()} ${P.nombreA}. Todos los derechos reservados (para nosotros).`]
  ];

  const postCreditos = {
    imagen: F.postCreditos,
    etiqueta: "ESCENA POST-CRÉDITOS",
    texto: "Esta historia dejó una huella que no se borra…",
    anuncio: "¿Nueva temporada?",
    subtitulo: "Algún día, si la vida quiere. Sin prisa. 🤍",
    sorpresa: "Siempre estaré para ti, Mine 💙"
  };

  // Paquete de $79: solo el memorama de fotos en Juegos
  const arcades = ["memory"];

  return { pareja: P, fotos: F, media: M, acceso, notificacion, sitio, temporadas, extras, final, creditos, postCreditos, arcades };
})();

/* =====================================================================
   TEMPORADAS DE NOSOTROS — Miriam y Eduardo
   Paquete Nuestro Capítulo ($79): 4 películas, 1 serie (3 episodios), 1 juego (memorama).
   Regalo de cumpleaños de Eduardo (10 de noviembre). Contraseña: 1011.
   Material de relleno: clips de muestra de ../comun/medios (ver plantilla/CREDITOS-*.txt).
   ===================================================================== */
window.TDN = (function () {

  /* 1. DATOS DE LA PAREJA */
  const P = {
    nombreA: "Miriam",                // Quien regala
    nombreB: "Eduardo",               // Quien recibe (cumpleañero)
    apodos: ["Flako", "Flaco"],
    fechaInicio: "2025-11-10",        // No se muestra en ningún texto (el cliente no dio fecha de inicio)
    aniosManual: 1,
    ciudad: "Nuestra calle",
    primeraCita: "",
    cancion: "El Amor Soñado",
    artista: "Grupo Firme",
    viajes: [],
    dificiles: [],
    anecdota: "",
    culpableAnecdota: 0,
    gustosB: [],
    suenos: ["Seguir viviendo el amor bonito que siempre soñamos", "Muchos cumpleaños más juntos", "Que todos nuestros futuros sean juntos"],
    mensajeFinal: "Nos hicimos novios después de muchos años de conocernos, y aunque antes no nos hablábamos mucho (y somos vecinos, jaja), ha sido el amor bonito que siempre hemos soñado. Gracias por tu paciencia, por tus mensajes bonitos, por el tiempo que me dedicas y por todo lo que haces para verme feliz. ¡Feliz cumpleaños, mi Flako! Te amo."
  };
  const inicio = new Date(P.fechaInicio + "T00:00:00");
  P.anioInicio = inicio.getFullYear();
  P.anios = P.aniosManual || 1;
  P.fechaCodigo = "";
  P.apodo = P.apodos[0];

  /* 2. FOTOS */
  const fo = (n) => "assets/fotos/" + n + ".webp";
  const F = {
    hero: fo("fuente-juntos"),
    perfilB: fo("perfil-eduardo"),
    perfilPareja: fo("perfil-pareja"),
    // t0..t5 también son las cartas del memorama de fotos
    t0: fo("fuente-selfie"), t1: fo("beso-flores"), t2: fo("lentes-beso"),
    t3: fo("fiesta-globos"), t4: fo("juntos-casa"), t5: fo("abrazo-salto"),
    t6: fo("mesa-juntos"), t7: fo("beso-noche"),
    final: fo("beso-abrazo"),
    puzzle: fo("juntos-cerca"),
    puzzle2: "",
    postCreditos: fo("selfie-tarde")
  };

  /* 3. AUDIO / VIDEO (cada canción empieza poco antes de su clímax) */
  const M = {
    intro: "../comun/medios/audio/intro.mp3",
    temporadas: [
      "assets/audio/desde-que-te-tengo.mp3",
      "assets/audio/el-amor-sonado.mp3",
      "assets/audio/pideme-la-luna.mp3",
      "assets/audio/eres-mi-necesidad.mp3",
      "assets/audio/compartir.mp3"
    ],
    canciones: [
      "Desde Que Te Tengo · Carín León",
      "El Amor Soñado · Grupo Firme",
      "Pídeme La Luna · Los Del Roble",
      "Eres Mi Necesidad · Arath Arceo",
      "Compartir · Carla Morrison"
    ],
    musica: "",
    videoFinal: "assets/video/final-volver-a-creer.mp4",
    audioRemitente: ""
  };

  /* 4. ACCESO Y NOTIFICACIÓN */
  const acceso = {
    demo: false,
    cualquierClave: false,
    password: "1011",
    pistaPassword: "Tu día especial: día y mes (DDMM)",
    estreno: ""
  };

  const notificacion = {
    whatsapp: "525632938921",
    email: "",
    endpoint: ""
  };

  const sitio = {
    url: new URL("./", location.href).href,
    coincidencia: 100,
    clasificacion: "+13",
    clasificacionTexto: "Romance, besos y un cumpleaños",
    heroTag: "ESTRENO DE CUMPLEAÑOS",
    heroTop: "N.º 1 en el corazón de Miriam",
    sinopsis: `${P.nombreB} y ${P.nombreA}: muchos años siendo vecinos, poco hablando y, de pronto, el amor bonito que siempre soñaron. ` +
              `4 películas y 1 serie originales hechas para celebrar tu cumpleaños, ${P.apodo}.`,
    estrenoTexto: `4 películas y 1 serie originales para ${P.nombreB}`,
    generos: ["Romántica", "De vecinos a novios", "Basada en hechos reales"],
    filaRecomendada: "De Vecinos a Novios"
  };

  /* 5. PELÍCULAS Y SERIES */
  // Escena con foto o clip del cliente
  const S = (src, a, b) => {
    const video = /\.mp4$/.test(src);
    const base = (video ? "assets/video/" : "assets/fotos/") + src;
    return video ? { img: base, poster: base.replace(/\.mp4$/, ".webp"), texto: [a, b] } : { img: base, texto: [a, b] };
  };
  // Escena con un clip de ambiente de la biblioteca común
  const CLIPS = {
    1: ["escenas/esc00.mp4", "s01.webp"], 4: ["escenas/esc01.mp4", "s04.webp"], 0: ["guadalajara.mp4", "s00.webp"],
    7: ["encuentro.mp4", "s07.webp"], 14: ["escenas/esc05.mp4", "s14.webp"], 19: ["escenas/esc08.mp4", "s19.webp"],
    20: ["escenas/n20.mp4", "s20.webp"], 22: ["cotidiano.mp4", "s22.webp"], 24: ["escenas/esc16.mp4", "s24.webp"],
    54: ["escenas/n54.mp4", "s54.webp"], 65: ["atardecer.mp4", "s65.webp"], 69: ["final-prueba.mp4", "s69.webp"],
    73: ["escenas/n73.mp4", "s73.webp"], 36: ["playa.mp4", "s36.webp"], 8: ["escenas/esc03.mp4", "s08.webp"]
  };
  const E = (n, a, b) => ({ img: "../comun/medios/video/" + CLIPS[n][0], poster: "../comun/medios/fotos/escenas/" + CLIPS[n][1], texto: [a, b] });
  const son = (i) => ({ musica: M.temporadas[i], cancion: M.canciones[i] });
  const cred = (...extra) => [["Protagonizada por", `${P.nombreB} y ${P.nombreA}`], ...extra, ["Dirección", "El destino (y la cercanía)"]];

  const temporadas = [
    /* =================== PELÍCULAS =================== */
    {
      num: 0, tipo: "pelicula", titulo: "De Vecinos a Novios", anio: 2026, clasificacion: "TP",
      imagen: F.t0, ...son(0), top10: true,
      sinopsis: "Muchos años de conocerse, pocas palabras y una sola calle de distancia. La historia real de dos vecinos que terminaron viviendo el amor que siempre soñaron.",
      creditos: cred(["Historia original", P.nombreA], ["Locación", "La misma cuadra"], ["Banda sonora", M.canciones[0]]),
      episodios: [{
        titulo: "De Vecinos a Novios", duracion: 86,
        descripcion: "Nos hicimos novios después de muchos años de conocernos… y somos vecinos, jaja.",
        escenas: [
          E(1, "Nos hicimos novios después de muchos años de conocernos,", "más no nos hablábamos mucho…"),
          E(4, "…y somos vecinos, jaja.", "La vida nos tenía a unos pasos de distancia."),
          E(19, "Dos historias en la misma calle,", "sin saber que eran la misma historia."),
          S("fuente-selfie.webp", "Y un día, lo de siempre", "se volvió lo más especial."),
          S("mensaje-amor-bonito.mp4", "No sabía qué era vivir un amor bonito…", "hasta que conocí tu paciencia y tu manera de amarme."),
          S("camioneta.webp", "Tantos años tan cerca,", "y no sé por qué antes no te tuve."),
          S("beso-abrazo.webp", "Pero ha sido el amor bonito", "que siempre hemos soñado."),
          S("fuente-juntos.webp", "De vecinos a novios.", "La mejor noticia de toda la cuadra. ❤️")
        ],
        recompensa: "Cupón: una caminata juntos por nuestra calle, de la mano 🏡"
      }]
    },
    {
      num: 1, tipo: "pelicula", titulo: "El Amor Soñado", anio: 2026, clasificacion: "TP",
      imagen: F.t1, ...son(1), top10: true,
      sinopsis: "Dicen que los cuentos de hadas no existen. Esta película demuestra lo contrario: un amor bonito, tranquilo y real, justo como lo soñamos.",
      creditos: cred(["Banda sonora", M.canciones[1]], ["Efectos especiales", "Tus abrazos"]),
      episodios: [{
        titulo: "El Amor Soñado", duracion: 80,
        descripcion: "Necesito que sepas que te amo, que te quiero, que te adoro.",
        escenas: [
          S("cuento-de-hadas.mp4", "Dicen que los cuentos de hadas no existen,", "pero el nuestro se siente como uno."),
          S("selfie-sonrisa.webp", "Contigo aprendí que el amor bonito sí existe,", "y que se siente así de tranquilo."),
          S("mesa-juntos.webp", "Tu risa es mi canción favorita,", "la que quiero escuchar toda la vida."),
          S("abrazo-salto.webp", "Cuando me abrazas, el mundo se pone en pausa,", "y no quiero que vuelva a avanzar."),
          S("el-es-aquel.mp4", "Él es aquel con quien tanto soñé.", "Y hoy lo tengo a mi lado."),
          S("beso-noche.webp", "Necesito que sepas que te amo,", "que te quiero, que te adoro."),
          E(69, "Eres el amor que siempre soñamos,", "y lo estamos viviendo.")
        ],
        recompensa: "Cupón: una cita sorpresa planeada por mí 💌"
      }]
    },
    {
      num: 2, tipo: "pelicula", titulo: "Carta para Mi Flako", anio: 2026, clasificacion: "TP",
      imagen: F.t2, ...son(2), top10: true,
      sinopsis: "Muchas noches mirando las estrellas, deseando un corazón como el tuyo. Esta película es una carta escrita por Miriam, palabra por palabra.",
      creditos: cred(["Guion", `${P.nombreA}, con el corazón`], ["Banda sonora", M.canciones[2]]),
      episodios: [{
        titulo: "Carta para Mi Flako", duracion: 84,
        descripcion: "Sólo quiero que sepas que eres la persona que me cansé de pedirle al universo.",
        escenas: [
          S("lentes-beso.webp", "Sólo quiero que sepas que eres la persona", "que me cansé de pedirle al universo,"),
          E(0, "que muchas noches miré a las estrellas", "deseando un corazón como el tuyo,"),
          E(4, "que me gustaba decir que ya no creía en el amor,", "pero en el fondo sólo quería a alguien"),
          S("juntos-cerca.webp", "que supiera que en verdad espero mucho", "y que ya no estoy para juegos."),
          S("juntos-casa.webp", "Y luego un día apareciste,", "con la sonrisa perfecta y en el momento perfecto,"),
          S("ojitos.mp4", "con esos ojitos de quiero verlos toda mi vida,", "con esa risa de quiero escucharte hasta hacerme viejito,"),
          S("beso-mejilla.webp", "y no sé si esto nos va a durar unos meses o un para siempre,", "pero si a mí me preguntan,"),
          S("beso-flores.webp", "no estaría nada mal que todos mis futuros fueran contigo.", "TE AMO, FLAKO ❤️")
        ],
        recompensa: "Cupón: una noche viendo las estrellas juntos 🌙"
      }]
    },
    {
      num: 3, tipo: "pelicula", titulo: "Feliz Cumpleaños, Flako", anio: 2026, clasificacion: "TP",
      imagen: F.t3, ...son(3), top10: true,
      sinopsis: "10 de noviembre. El día en que nació la persona favorita de Miriam. Una película para celebrarte y para darte las gracias.",
      creditos: cred(["Motivo de la celebración", "Tu cumpleaños"], ["Banda sonora", M.canciones[3]]),
      episodios: [{
        titulo: "Feliz Cumpleaños, Flako", duracion: 86,
        descripcion: "Hoy celebramos tu vida y todo lo bonito que traes a la mía.",
        escenas: [
          E(14, "10 de noviembre.", "El día en que nació mi persona favorita."),
          S("fiesta-globos.webp", "Hoy celebramos tu vida", "y todo lo bonito que traes a la mía."),
          S("cocina.mp4", "Gracias por dejarte sorprender", "y por seguirme el juego siempre. 🙈"),
          S("navidad.webp", "Gracias por tu paciencia y tus mensajes bonitos,", "por el tiempo que me dedicas."),
          S("abrazo-sorpresa.mp4", "Gracias por tu manera de amarme", "y por todo lo que haces para verme feliz."),
          S("selfie-noche.webp", "Eres mi necesidad,", "y es un privilegio poderte besar."),
          S("selfie-tarde.webp", "Que este nuevo año de vida te devuelva", "todo el amor que tú regalas."),
          S("abrazo.webp", "¡Feliz cumpleaños, mi Flako!", "Hoy y siempre, a tu lado. 🎂")
        ],
        recompensa: "Cupón: tu comida favorita, hecha o invitada por mí 🎂"
      }]
    },

    /* =================== SERIE =================== */
    {
      num: 4, tipo: "serie", titulo: "Todos Mis Futuros Contigo", anio: 2026, clasificacion: "TP",
      imagen: F.t4, ...son(4), top10: true,
      sinopsis: "Lo que somos, lo que agradecemos y lo que viene. Una serie corta sobre compartir la vida con quien siempre estuvo cerca.",
      creditos: cred(["Guion", "Aún en proceso (y con final feliz)"], ["Banda sonora", M.canciones[4]]),
      episodios: [
        {
          titulo: "Compartir la Vida", duracion: 66,
          descripcion: "Los ratos simples que se volvieron nuestros favoritos.",
          escenas: [
            S("manos-unas.webp", "Los ratos más simples contigo", "se vuelven mis recuerdos favoritos."),
            S("manos-tatuaje.webp", "Tu mano y la mía,", "como si siempre hubieran estado juntas."),
            E(22, "Quiero compartir contigo los días tranquilos,", "las risas y las pláticas sin prisa."),
            E(24, "Quiero caminar y correr a tu lado,", "y aprender a entender el mundo contigo."),
            S("volver-a-creer.mp4", "Gracias por hacerme volver a creer en el amor.", "Contigo todo tiene sentido.")
          ],
          recompensa: "Cupón: un día entero para nosotros, sin pendientes ☕"
        },
        {
          titulo: "Gracias", duracion: 66,
          descripcion: "Todo lo que quiero agradecerte.",
          escenas: [
            S("selfie-sonrisa.webp", "Gracias por llegar en el momento perfecto,", "con la sonrisa perfecta."),
            S("juntos-casa.webp", "Gracias por cuidarme,", "por tu paciencia y tu cariño de todos los días."),
            E(7, "Gracias por cada detalle,", "por los grandes y por los pequeñitos."),
            S("beso-abrazo.webp", "Gracias por hacer de lo nuestro", "el amor bonito que siempre soñamos."),
            S("fuente-selfie.webp", "Y gracias por elegirme,", "a mí, tu vecina favorita. 😄")
          ],
          recompensa: "Cupón: un abrazo largo cada vez que lo pidas 🤗"
        },
        {
          titulo: "Lo que Viene", duracion: 66,
          descripcion: "No estaría nada mal que todos mis futuros fueran contigo.",
          escenas: [
            E(73, "Quiero seguir viviendo este amor bonito", "un día a la vez."),
            E(54, "Quiero muchos cumpleaños más a tu lado,", "y celebrarte siempre como hoy."),
            S("beso-flores.webp", "Quiero que construyamos juntos", "todo lo que soñamos."),
            E(65, "Y si a mí me preguntan,", "todos mis futuros son contigo."),
            S("lentes-beso.webp", "Esta historia apenas comienza, Flako.", "Ahora te toca a ti: ve a El Final. ❤️")
          ],
          recompensa: "Ya puedes ver: EL FINAL 🔴"
        }
      ]
    }
  ];

  /* 6. DETRÁS DE CÁMARAS */
  const extras = [
    { titulo: "Casting", img: fo("perfil-pareja"), texto: "Muchos años en la misma calle. El papel principal siempre fue tuyo, Flako." },
    { titulo: "Locaciones", img: fo("fuente-juntos"), texto: "Nuestra calle, nuestras casas y cada lugar al que vamos juntos." },
    { titulo: "Banda sonora", img: fo("mesa-juntos"), texto: M.canciones.join(" · ") },
    { titulo: "El cumpleañero", img: fo("fiesta-globos"), texto: "10 de noviembre: el estreno más importante del año." },
    { titulo: "Escenas eliminadas", img: fo("selfie-noche"), texto: "Hay escenas que solo existen para nosotros. Y así se quedan." }
  ];

  /* 7. TEMPORADA FINAL */
  const final = {
    titulo: "El Final: Tu Turno",
    sinopsis: `Después de 4 películas y 1 serie, el cumpleañero toma la palabra. En este final, ${P.nombreB} escribe el guion.`,
    imagen: F.final,
    preguntas: [
      "¿Cuál es tu película o serie favorita de nuestra historia y por qué?",
      "¿Qué es lo que más te gusta de nosotros?",
      "¿Cómo quieres celebrar tu cumpleaños conmigo?",
      "¿Qué sueño quieres que cumplamos juntos este nuevo año?",
      `Escríbele a ${P.nombreA} algo que nunca le hayas dicho.`
    ],
    carta: (r) =>
`${P.apodo}:

Llegaste al final del catálogo, pero no de la historia.

Dices que tu título favorito es "${r[0]}". El mío es cualquiera en el que sales tú.

Lo que más te gusta de nosotros: ${r[1]}. Lo que más me gusta a mí es que existe un "nosotros".

Para tu cumpleaños quieres: ${r[2]}. Trato hecho.

Y el sueño de este nuevo año ya tiene trama: ${r[3]}. Hagámoslo realidad.

${P.mensajeFinal}

Con todo mi amor,
${P.nombreA}`
  };

  /* 8. CRÉDITOS Y POST-CRÉDITOS */
  const creditos = [
    ["Una producción original de", P.nombreA],
    ["Protagonizada por", P.nombreB],
    ["Coprotagonista", P.nombreA],
    ["Dirección", "El destino (y la cercanía)"],
    ["Guion", "Una historia de vecinos"],
    ["Banda sonora", M.canciones.join(" · ")],
    ["Locación principal", "Nuestra calle"],
    ["Efectos especiales", "Tus ojitos y tu risa"],
    ["Dobles de riesgo", "Ninguno. Todo fue real."],
    ["Motivo del estreno", "El cumpleaños de Eduardo · 10 de noviembre"],
    ["Agradecimientos especiales", "Al universo, por escuchar"],
    ["", "Ningún corazón fue dañado durante la filmación de estas películas y series."],
    ["", `© ${new Date().getFullYear()} ${P.nombreA} & ${P.nombreB}. Todos los derechos reservados (para nosotros).`]
  ];

  const postCreditos = {
    imagen: F.postCreditos,
    etiqueta: "ESCENA POST-CRÉDITOS",
    texto: `${P.nombreB}… nuestra historia acaba de ser renovada.`,
    anuncio: "Nueva temporada",
    subtitulo: "Próximamente. Y para siempre.",
    sorpresa: "¡Feliz cumpleaños, Flako! 🎂"
  };

  // Paquete de $79: solo el memorama de fotos en Juegos
  const arcades = ["memory"];

  return { pareja: P, fotos: F, media: M, acceso, notificacion, sitio, temporadas, extras, final, creditos, postCreditos, arcades };
})();

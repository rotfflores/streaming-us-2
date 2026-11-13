/* =====================================================================
   TEMPORADAS DE NOSOTROS — Luis y Hero
   Paquete Nuestro Capítulo ($79): 4 películas, 1 serie (3 episodios), 1 juego (memorama).
   Regalo de cumpleaños: Hero cumple 59 años el 17 de noviembre. Contraseña: 1711.
   Película 0 lleva la carta de Luis tal cual. Canciones recortadas poco antes del clímax
   (la de la carta empieza en el primer coro para cubrir toda la carta sin cortes).
   Relleno: clips de ../comun/medios, fotos de Pexels reutilizadas de chatito-chatita
   (pastel-vela 33273856, brindis-velas 6334737, brindis-mesa 5638748, manos 8871433,
   manos-luces 6255174) y la animación "59" hecha para este pedido (assets/video/cumple-59.mp4).
   ===================================================================== */
window.TDN = (function () {

  /* 1. DATOS DE LA PAREJA */
  const P = {
    nombreA: "Luis",
    nombreB: "Hero",
    apodos: ["mi reina hermosa"],
    fechaInicio: "2026-11-17",        // Solo para el año del pie de página (no dieron aniversario)
    aniosManual: 59,
    ciudad: "",
    primeraCita: "",
    cancion: "La Cosa Más Bella",
    artista: "Eros Ramazzotti",
    viajes: [],
    dificiles: [],
    anecdota: "",
    culpableAnecdota: 0,
    gustosB: [],
    suenos: ["Mucha salud, alegría y paz en tu corazón", "Seguir caminando juntos muchos, muchos años más", "Celebrar contigo muchos cumpleaños más"],
    mensajeFinal: "Le pido a Dios que te bendiga con mucha salud, con mucha alegría, con paz en tu corazón y que nos permita seguir caminando juntos muchos, muchos años más. Te amo con todo mi corazón, hoy y siempre. ¡Feliz cumpleaños 59, mi reina hermosa!"
  };
  const inicio = new Date(P.fechaInicio + "T00:00:00");
  P.anioInicio = inicio.getFullYear();
  P.anios = P.aniosManual || 1;
  P.fechaCodigo = "";
  P.apodo = P.apodos[0];

  /* 2. FOTOS */
  const fo = (n) => "assets/fotos/" + n + ".webp";
  const F = {
    hero: fo("pareja-fiesta"),
    perfilB: fo("perfil-hero"),
    perfilPareja: fo("perfil-pareja"),
    // t0..t5 también son las cartas del memorama de fotos
    t0: fo("pareja-fiesta"), t1: fo("hero-pastel"), t2: fo("hero-gala"),
    t3: fo("pareja-eiffel"), t4: fo("pareja-basilica"), t5: fo("familia-cruzazul"),
    t6: fo("hero-cancha"), t7: fo("pareja-bengalas"),
    final: fo("pareja-casa"),
    puzzle: fo("love-jardin"),
    puzzle2: "",
    postCreditos: fo("escaleras")
  };

  /* 3. AUDIO / VIDEO (cada canción empieza poco antes de su clímax) */
  const M = {
    intro: "../comun/medios/audio/intro.mp3",
    temporadas: [
      "assets/audio/la-cosa-mas-bella-carta.mp3",
      "assets/audio/las-mananitas.mp3",
      "assets/audio/eternal-flame.mp3",
      "assets/audio/careless-whisper.mp3",
      "assets/audio/against-all-odds.mp3"
    ],
    canciones: [
      "La Cosa Más Bella · Eros Ramazzotti",
      "Las Mañanitas · Topo Gigio",
      "Eternal Flame · The Bangles",
      "Careless Whisper · George Michael",
      "Against All Odds · Phil Collins"
    ],
    musica: "",
    videoFinal: "assets/video/cumple-59.mp4",
    audioRemitente: ""
  };

  /* 4. ACCESO Y NOTIFICACIÓN */
  const acceso = {
    demo: false,
    cualquierClave: false,
    password: "1711",
    pistaPassword: "El día de tu cumpleaños: día y mes (DDMM)",
    estreno: ""
  };

  const notificacion = { whatsapp: "525528925400", email: "", endpoint: "" };

  const sitio = {
    url: new URL("./", location.href).href,
    coincidencia: 100,
    clasificacion: "+13",
    clasificacionTexto: "Romance, familia y fe",
    heroTag: "ESTRENO DE CUMPLEAÑOS",
    heroTop: "N.º 1 en el corazón de Luis",
    sinopsis: `59 años de una mujer maravillosa, de una historia hermosa y de una vida que ha dado tanto amor. ` +
              `4 películas y 1 serie originales para celebrarte, ${P.nombreB}.`,
    estrenoTexto: `4 películas y 1 serie originales por tus 59 años, ${P.nombreB}`,
    generos: ["Romántica", "Cumpleaños", "Basada en hechos reales"],
    filaRecomendada: "Para la cumpleañera"
  };

  /* 5. PELÍCULAS Y SERIES */
  const S = (src, a, b) => {
    const video = /\.mp4$/.test(src);
    const base = (video ? "assets/video/" : "assets/fotos/v/") + src; // fotos de escena en versión vertical completa
    return video ? { img: base, poster: base.replace(/\.mp4$/, ".webp"), texto: [a, b] } : { img: base, texto: [a, b] };
  };
  // Escena con varias líneas de subtítulo (para la carta)
  const L = (src, lineas) => ({ ...S(src, "", ""), texto: lineas });
  const CLIPS = [
    /*00*/ ["guadalajara.mp4", "s00.webp"], /*01*/ ["escenas/esc00.mp4", "s01.webp"],
    /*02*/ ["antes-ana.mp4", "s02.webp"], /*03*/ ["escenas/esc02.mp4", "s03.webp"],
    /*04*/ ["escenas/esc01.mp4", "s04.webp"], /*05*/ ["escenas/n05.mp4", "s05.webp"],
    /*06*/ ["escenas/n06b.mp4", "s06b.webp"], /*07*/ ["encuentro.mp4", "s07.webp"],
    /*08*/ ["escenas/esc03.mp4", "s08.webp"], /*09*/ ["escenas/n09.mp4", "s09.webp"],
    /*10*/ ["escenas/n10.mp4", "s10.webp"], /*11*/ ["escenas/esc04.mp4", "s11.webp"],
    /*12*/ ["escenas/n12.mp4", "s12.webp"], /*13*/ ["primer-mensaje.mp4", "s13.webp"],
    /*14*/ ["escenas/esc05.mp4", "s14.webp"], /*15*/ ["preparativos.mp4", "s15.webp"],
    /*16*/ ["escenas/n16.mp4", "s16.webp"], /*17*/ ["escenas/esc07.mp4", "s17.webp"],
    /*18*/ ["primera-cita.mp4", "s18.webp"], /*19*/ ["escenas/esc08.mp4", "s19.webp"],
    /*20*/ ["escenas/n20.mp4", "s20.webp"], /*21*/ ["cafe.mp4", "s21.webp"],
    /*22*/ ["cotidiano.mp4", "s22.webp"], /*23*/ ["escenas/n23.mp4", "s23.webp"],
    /*24*/ ["escenas/esc16.mp4", "s24.webp"], /*25*/ ["vinilo.mp4", "s25.webp"],
    /*26*/ ["escenas/esc09.mp4", "s26.webp"], /*27*/ ["baile-nuestra-cancion.mp4", "s27.webp"],
    /*28*/ ["escenas/n28.mp4", "s28.webp"], /*29*/ ["escenas/n29.mp4", "s29.webp"],
    /*30*/ ["escenas/n30.mp4", "s30.webp"], /*31*/ ["pizza.mp4", "s31.webp"],
    /*32*/ ["escenas/n32.mp4", "s32.webp"], /*33*/ ["escenas/esc10.mp4", "s33.webp"],
    /*34*/ ["risas-juntos.mp4", "s34.webp"], /*35*/ ["vuelo.mp4", "s35.webp"],
    /*36*/ ["playa.mp4", "s36.webp"], /*37*/ ["escenas/esc12.mp4", "s37.webp"],
    /*38*/ ["foto-viaje.mp4", "s38.webp"], /*39*/ ["escenas/n39.mp4", "s39.webp"],
    /*40*/ ["escenas/esc19b.mp4", "s40.webp"], /*41*/ ["escenas/n41.mp4", "s41.webp"],
    /*42*/ ["escenas/n42.mp4", "s42.webp"], /*43*/ ["escenas/esc13.mp4", "s43.webp"],
    /*44*/ ["viaje-juntos.mp4", "s44.webp"], /*45*/ ["llamada-lluvia.mp4", "s45.webp"],
    /*46*/ ["dias-dificiles.mp4", "s46.webp"], /*47*/ ["escenas/esc14.mp4", "s47.webp"],
    /*48*/ ["reencuentro.mp4", "s48.webp"], /*49*/ ["escenas/esc15.mp4", "s49.webp"],
    /*50*/ ["mudanza.mp4", "s50.webp"], /*51*/ ["escenas/n51.mp4", "s51.webp"],
    /*52*/ ["escenas/n52.mp4", "s52.webp"], /*53*/ ["escenas/esc20.mp4", "s53.webp"],
    /*54*/ ["escenas/n54.mp4", "s54.webp"], /*55*/ ["escenas/n55.mp4", "s55.webp"],
    /*56*/ ["escenas/n56.mp4", "s56.webp"], /*57*/ ["escenas/n57.mp4", "s57.webp"],
    /*58*/ ["escenas/esc19.mp4", "s58.webp"], /*59*/ ["escenas/esc17.mp4", "s59.webp"],
    /*60*/ ["escenas/n60.mp4", "s60.webp"], /*61*/ ["escenas/n61.mp4", "s61.webp"],
    /*62*/ ["escenas/n62.mp4", "s62.webp"], /*63*/ ["escenas/n63.mp4", "s63.webp"],
    /*64*/ ["escenas/n64.mp4", "s64.webp"], /*65*/ ["atardecer.mp4", "s65.webp"],
    /*66*/ ["tokio.mp4", "s66.webp"], /*67*/ ["escenas/esc21.mp4", "s67.webp"],
    /*68*/ ["escenas/n68.mp4", "s68.webp"], /*69*/ ["final-prueba.mp4", "s69.webp"],
    /*70*/ ["escenas/n70.mp4", "s70.webp"], /*71*/ ["escenas/n71.mp4", "s71.webp"],
    /*72*/ ["escenas/n72.mp4", "s72.webp"], /*73*/ ["escenas/n73.mp4", "s73.webp"],
    /*74*/ ["escenas/esc11.mp4", "s74.webp"]
  ];
  const E = (n, a, b) => ({ img: "../comun/medios/video/" + CLIPS[n][0], poster: "../comun/medios/fotos/escenas/" + CLIPS[n][1], texto: [a, b] });
  const son = (i) => ({ musica: M.temporadas[i], cancion: M.canciones[i] });
  const cred = (...extra) => [["Protagonizada por", `${P.nombreB} y ${P.nombreA}`], ...extra, ["Dirección", "Dios, que nos juntó"]];

  const temporadas = [
    /* =================== PELÍCULAS =================== */
    {
      num: 0, tipo: "pelicula", titulo: "Mi Amada Hero", anio: 2026, clasificacion: "TP",
      imagen: F.t0, ...son(0), top10: true,
      sinopsis: "La carta que Luis escribió para el cumpleaños 59 de su esposa, palabra por palabra.",
      creditos: cred(["Carta original", P.nombreA], ["Banda sonora", M.canciones[0]]),
      episodios: [{
        titulo: "Mi Amada Hero", duracion: 168,
        descripcion: "¡Feliz cumpleaños 59, mi amor!",
        escenas: [
          L("love-jardin.webp", ["Mi amada Hero,", "¡Feliz cumpleaños 59, mi amor!"]),
          L("hero-pastel.webp", ["Hoy es un día hermoso porque celebramos tu vida,", "y yo celebro el regalo más grande que Dios me dio:", "tenerte a ti como mi esposa."]),
          L("pareja-casa.webp", ["Gracias por estos años de amor, por tu paciencia,", "por tu sonrisa que ilumina todo, por tu corazón tan noble"]),
          L("hero-cancha.webp", ["y por ser esa mujer luchadora, fuerte y llena de amor", "que nos sostiene a todos."]),
          L("pareja-fiesta.webp", ["59 años de una mujer maravillosa, de una historia hermosa,", "de una vida que ha dado tanto amor."]),
          L("hero-ultima.webp", ["Cada arruga tuya es una historia nuestra,", "cada risa tuya es mi felicidad."]),
          L("pareja-basilica.webp", ["Le pido a Dios que te bendiga con mucha salud, con mucha alegría,", "con paz en tu corazón y que nos permita", "seguir caminando juntos muchos, muchos años más."]),
          L("pareja-eiffel.webp", ["Te mereces todo lo bueno de este mundo y más.", "Eres el amor de mi vida, mi compañera, mi mejor amiga, mi todo."]),
          L("escaleras.webp", ["Me siento el hombre más afortunado del mundo por tenerte.", "Te amo con todo mi corazón, hoy y siempre."]),
          L("pareja-bengalas.webp", ["¡Feliz cumpleaños 59, mi reina hermosa!", "Te mando un abrazo juerte juerte.", "Tu esposo que te ama. ❤️"])
        ],
        recompensa: "Cupón: un abrazo juerte juerte, cuando tú quieras 🤗"
      }]
    },
    {
      num: 1, tipo: "pelicula", titulo: "Feliz Cumpleaños 59", anio: 2026, clasificacion: "TP",
      imagen: F.t1, ...son(1), top10: true,
      sinopsis: "Velas, pastel, brindis y Las Mañanitas. Hoy todos celebramos a la reina de la casa.",
      creditos: cred(["La cumpleañera", P.nombreB], ["Banda sonora", M.canciones[1]]),
      episodios: [{
        titulo: "Feliz Cumpleaños 59", duracion: 145,
        descripcion: "Hoy celebramos tu vida, mi amor.",
        escenas: [
          S("cumple-59.mp4", "Hoy el mundo está de fiesta…", "porque un 17 de noviembre llegaste tú."),
          S("hero-pastel.webp", "¡Que vivan tus 59 años, Hero!", "Que se cumplan todos tus deseos."),
          S("pastel-vela.webp", "Una vela, un pastel", "y un solo deseo: que seas muy feliz."),
          S("hero-copa.webp", "Brindo por ti,", "por tu vida y por todo lo que das."),
          S("brindis-velas.webp", "Por tu salud,", "tu alegría y la paz de tu corazón."),
          S("hero-ultima.webp", "Y que la fiesta dure…", "aunque digan «la última y nos vamos». 😂"),
          S("familia-cruzazul.webp", "Toda la familia te celebra hoy,", "porque tú nos sostienes a todos."),
          S("brindis-mesa.webp", "Hoy todos levantamos la copa", "por la reina de la casa. 👑"),
          S("pareja-bengalas.webp", "Que tus 59 brillen", "como estas luces. ✨"),
          S("hero-comedor.webp", "¡Feliz cumpleaños, mi reina hermosa!", "Tu esposo que te ama. 🎂")
        ],
        recompensa: "Cupón: tu pastel favorito y una cena para celebrarte 🎂"
      }]
    },
    {
      num: 2, tipo: "pelicula", titulo: "Mi Reina Hermosa", anio: 2026, clasificacion: "TP",
      imagen: F.t2, ...son(2), top10: true,
      sinopsis: "Luchadora, fuerte, de corazón noble y con una sonrisa que ilumina todo. Una película sobre ella.",
      creditos: cred(["Banda sonora", M.canciones[2]]),
      episodios: [{
        titulo: "Mi Reina Hermosa", duracion: 100,
        descripcion: "Una mujer luchadora, fuerte y llena de amor.",
        escenas: [
          S("hero-gala.webp", "Mi reina hermosa,", "elegante en cualquier lugar."),
          S("hero-sudadera.webp", "Luchadora y fuerte,", "siempre de pie por los suyos."),
          S("hero-cafe.webp", "Y esa sonrisa tuya", "que ilumina todo."),
          S("hero-cancha.webp", "Valiente como nadie:", "lista para el partido de la vida. ⚽"),
          S("hero-playa.webp", "Sencilla y hermosa,", "en la playa o en la ciudad."),
          S("hero-auto.webp", "Cada día a tu lado", "es un regalo de Dios."),
          S("hero-cafe2.webp", "Hasta un café contigo", "se vuelve especial. ☕"),
          S("hero-iglesia.webp", "Con un corazón tan noble", "que siempre se da a los demás."),
          S("hero-piedad.webp", "Mujer de fe,", "mujer de paz."),
          S("hero-sillon.webp", "Eres mi llama eterna,", "mi reina hermosa. ❤️")
        ],
        recompensa: "Cupón: un día completo de consentirte, tú mandas 👑"
      }]
    },
    {
      num: 3, tipo: "pelicula", titulo: "Noches de Gala", anio: 2026, clasificacion: "TP",
      imagen: F.t3, ...son(3), top10: true,
      sinopsis: "Fiestas, brindis y bailes. Las noches más bonitas son las que pasamos juntos.",
      creditos: cred(["Banda sonora", M.canciones[3]], ["Vestuario", "Siempre de gala, ella"]),
      episodios: [{
        titulo: "Noches de Gala", duracion: 115,
        descripcion: "Mi compañera de fiesta y de vida.",
        escenas: [
          S("pareja-eiffel.webp", "Tú y yo,", "listos para la fiesta."),
          E(8, "Las noches más bonitas", "son las que paso contigo."),
          S("pareja-fiesta.webp", "Elegantes, felices", "y siempre juntos."),
          S("hero-gala.webp", "Cuando llegas a un lugar,", "todo se ilumina."),
          S("hero-copa.webp", "Un brindis por nosotros", "y por los años que vienen."),
          E(60, "Bailemos otra vez", "como si fuera la primera."),
          S("hero-auto.webp", "De regreso a casa,", "la noche sigue siendo nuestra."),
          S("pareja-bengalas.webp", "Que nunca se apaguen", "nuestras luces."),
          E(69, "Mi compañera de fiesta", "y de vida. ✨")
        ],
        recompensa: "Cupón: una noche de baile, solo tú y yo 💃"
      }]
    },

    /* =================== SERIE =================== */
    {
      num: 4, tipo: "serie", titulo: "Muchos Años Más", anio: 2026, clasificacion: "TP",
      imagen: F.t4, ...son(4), top10: true,
      sinopsis: "Lo que te agradezco, la familia que sostienes y lo que le pido a Dios para ti. Una serie corta sobre nosotros.",
      creditos: cred(["Guion", "Escrito con amor (y con final feliz)"], ["Banda sonora", M.canciones[4]]),
      episodios: [
        {
          titulo: "Gracias", duracion: 66,
          descripcion: "Todo lo que quiero agradecerte.",
          escenas: [
            S("manos.webp", "Gracias por tu paciencia,", "en los días buenos y en los difíciles."),
            S("pareja-casa.webp", "Gracias por nuestro hogar", "y por cada detalle."),
            S("hero-comedor.webp", "Gracias por sostenernos a todos", "con tu fuerza y tu amor."),
            S("pareja-cajas.webp", "Gracias por echarle ganas conmigo,", "siempre."),
            S("escaleras.webp", "Y gracias por hacerme reír", "hasta en las escaleras. 😂")
          ],
          recompensa: "Cupón: desayuno en la cama, preparado por mí ☕"
        },
        {
          titulo: "Nuestra Familia", duracion: 66,
          descripcion: "En las buenas y en las malas, juntos.",
          escenas: [
            S("estadio.webp", "En las buenas y en las malas,", "juntos en la tribuna. 💙"),
            S("hero-cancha.webp", "La afición más bonita", "es la que comparto contigo."),
            S("metro-familia.webp", "Rumbo al estadio,", "con toda la familia."),
            S("familia-cruzazul.webp", "Nuestra familia", "es nuestro mejor equipo."),
            S("brindis-mesa.webp", "Y tú eres el corazón", "que nos une a todos.")
          ],
          recompensa: "Cupón: un partido juntos, la botana corre por mi cuenta ⚽"
        },
        {
          titulo: "Que Dios Te Bendiga", duracion: 66,
          descripcion: "Muchos, muchos años más.",
          escenas: [
            S("pareja-basilica.webp", "Le pido a Dios que te bendiga", "con mucha salud."),
            S("hero-iglesia.webp", "Que nunca te falte la alegría", "ni la paz en tu corazón."),
            E(37, "Y que nos permita seguir caminando juntos", "muchos, muchos años más."),
            S("manos-luces.webp", "Quiero celebrar contigo", "muchos cumpleaños más."),
            S("pareja-bengalas.webp", "Esta historia sigue, Hero.", "Ahora te toca a ti: ve a El Final. ❤️")
          ],
          recompensa: "Ya puedes ver: EL FINAL 🔴"
        }
      ]
    }
  ];

  /* 6. DETRÁS DE CÁMARAS */
  const extras = [
    { titulo: "Casting", img: fo("perfil-pareja"), texto: "El papel de reina siempre fue tuyo, Hero." },
    { titulo: "Locaciones", img: fo("pareja-basilica"), texto: "Fiestas, estadios, cafés, playas e iglesias: todos los lugares a donde fuimos juntos." },
    { titulo: "Banda sonora", img: fo("hero-gala"), texto: M.canciones.join(" · ") },
    { titulo: "Elenco de lujo", img: fo("familia-cruzazul"), texto: "Toda la familia, que hoy te celebra contigo." },
    { titulo: "Escenas eliminadas", img: fo("escaleras"), texto: "Hay escenas que solo existen para nosotros. Y así se quedan." }
  ];

  /* 7. TEMPORADA FINAL */
  const final = {
    titulo: "El Final: Tu Turno",
    sinopsis: `Después de 4 películas y 1 serie, la cumpleañera toma la palabra. En este final, tú escribes el guion.`,
    imagen: F.final,
    preguntas: [
      "¿Cuál es tu película o serie favorita de este regalo y por qué?",
      "¿Cuál ha sido tu cumpleaños más bonito a mi lado?",
      "¿Cómo te gustaría celebrar tus 59 años?",
      "¿Qué deseo pediste al soplar las velas? (si se puede contar 😉)",
      `Escríbele a ${P.nombreA} algo que nunca le hayas dicho.`
    ],
    carta: (r) =>
`Mi amada Hero:

Llegaste al final del catálogo, pero no de la historia.

Dices que tu título favorito es "${r[0]}". El mío es cualquiera en el que sales tú.

Tu cumpleaños más bonito a mi lado: ${r[1]}. Prometo que vendrán muchos más.

Para tus 59 quieres: ${r[2]}. Trato hecho.

${P.mensajeFinal}

Te mando un abrazo juerte juerte.
Tu esposo que te ama,
Luis`
  };

  /* 8. CRÉDITOS Y POST-CRÉDITOS */
  const creditos = [
    ["Una producción original de", P.nombreA],
    ["Protagonizada por", "Hero, la cumpleañera"],
    ["Coprotagonista", P.nombreA],
    ["Con la participación especial de", "Toda la familia"],
    ["Dirección", "Dios, que nos juntó"],
    ["Banda sonora", M.canciones.join(" · ")],
    ["Efectos especiales", "Tu sonrisa, que ilumina todo"],
    ["Dobles de riesgo", "Ninguno. Todo fue real."],
    ["Motivo del estreno", "Los 59 años de una mujer maravillosa"],
    ["Agradecimientos especiales", "A Dios, por el regalo más grande: tenerte"],
    ["", "Ningún corazón fue dañado durante la filmación de estas películas y series."],
    ["", `© ${new Date().getFullYear()} ${P.nombreA} & ${P.nombreB}. Todos los derechos reservados (para nosotros).`]
  ];

  const postCreditos = {
    imagen: F.postCreditos,
    etiqueta: "ESCENA POST-CRÉDITOS",
    texto: `${P.nombreB}… tu historia acaba de ser renovada por muchos, muchos años más.`,
    anuncio: "Nueva temporada",
    subtitulo: "Próximamente: tus 60. Y para siempre.",
    sorpresa: "¡Feliz cumpleaños 59, mi reina hermosa! ❤️"
  };

  // Paquete de $79: solo el memorama de fotos en Juegos
  const arcades = ["memory"];

  return { pareja: P, fotos: F, media: M, acceso, notificacion, sitio, temporadas, extras, final, creditos, postCreditos, arcades };
})();

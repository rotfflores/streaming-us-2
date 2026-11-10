/* =====================================================================
   TEMPORADAS DE NOSOTROS — Bernabe y Noemi
   Paquete Nuestro Capítulo ($79): 4 películas, 1 serie (3 episodios), 1 juego (memorama).
   Aniversario: 12 de noviembre. Contraseña: 1211.
   Película 0 = la canción principal completa (principal.ogg), con su letra como subtítulos.
   Clips de mar: olas/ocaso/horizonte/costa (Pexels y Mixkit, ver LEEME.md) y ../comun/medios.
   ===================================================================== */
window.TDN = (function () {

  /* 1. DATOS DE LA PAREJA */
  const P = {
    nombreA: "Bernabe",               // Quien regala
    nombreB: "Noemi",                 // Quien recibe
    apodos: ["Noemí"],
    apodoDeElla: "Bernardo",          // Así le dice ella a él de cariño
    hijas: ["Jimena", "Elisa"],
    fechaInicio: "2026-11-12",        // Solo se usa para el año del pie de página (el cliente no dio el año)
    aniosManual: 1,
    ciudad: "San Cristóbal",
    primeraCita: "",
    cancion: "Nuestra Historia",
    artista: "Canción especial",
    viajes: [],
    dificiles: [],
    anecdota: "",
    culpableAnecdota: 0,
    gustosB: ["El mar"],
    suenos: ["Seguir celebrando cada 12 de noviembre juntos", "Ver crecer a Jimena y Elisa", "Volver al mar muchas veces más"],
    mensajeFinal: "Te conocí en la iglesia de San Cristóbal y desde entonces mi vida cambió. Nunca me dices «amor», pero sé que me amas mucho; me lo dices a tu manera, cada vez que me llamas Bernardo. Tienes un carácter fuerte, pero un corazón todavía más grande. Gracias por Jimena y Elisa, por nuestra familia y por cada día a tu lado. ¡Feliz aniversario, Noemí! Te amo."
  };
  const inicio = new Date(P.fechaInicio + "T00:00:00");
  P.anioInicio = inicio.getFullYear();
  P.anios = P.aniosManual || 1;
  P.fechaCodigo = "";
  P.apodo = P.apodos[0];

  /* 2. FOTOS */
  const fo = (n) => "assets/fotos/" + n + ".webp";
  const F = {
    hero: fo("feria"),
    perfilB: fo("perfil-noemi"),
    perfilPareja: fo("perfil-pareja"),
    // t0..t5 también son las cartas del memorama de fotos
    t0: fo("te-amo-mucho"), t1: fo("lentes-parque"), t2: fo("noemi-muelle"),
    t3: fo("familia-paseo"), t4: fo("selfie-arbol"), t5: fo("selfie-mar"),
    t6: fo("pastel-juntos"), t7: fo("abrazo-casa"),
    final: fo("selfie-noche"),
    puzzle: fo("feria"),
    puzzle2: "",
    postCreditos: fo("cumple-pastel")
  };

  /* 3. AUDIO / VIDEO (cada canción empieza poco antes de su clímax; la principal va completa) */
  const M = {
    intro: "../comun/medios/audio/intro.mp3",
    temporadas: [
      "assets/audio/nuestra-historia.mp3",
      "assets/audio/siempre-te-voy-a-querer.mp3",
      "assets/audio/suena.mp3",
      "assets/audio/te-amo-para-siempre.mp3",
      "assets/audio/me-gustas.mp3"
    ],
    canciones: [
      "Nuestra Historia · Canción especial",
      "Siempre Te Voy a Querer · Calibre 50",
      "Sueña · Intocable",
      "Te Amo Para Siempre",
      "Me Gustas · Joan Sebastian"
    ],
    musica: "",
    videoFinal: "assets/video/final-muelle.mp4",
    audioRemitente: ""
  };

  /* 4. ACCESO Y NOTIFICACIÓN */
  const acceso = {
    demo: false,
    cualquierClave: false,
    password: "1211",
    pistaPassword: "Nuestro aniversario: día y mes (DDMM)",
    estreno: ""
  };

  const notificacion = {
    whatsapp: "529911003101",
    email: "",
    endpoint: ""
  };

  const sitio = {
    url: new URL("./", location.href).href,
    coincidencia: 100,
    clasificacion: "+13",
    clasificacionTexto: "Romance, familia y mucho mar",
    heroTag: "ESTRENO DE ANIVERSARIO",
    heroTop: "N.º 1 en el corazón de Bernabe",
    sinopsis: `Empezó en la iglesia de San Cristóbal y hoy es una familia con Jimena y Elisa. ` +
              `4 películas y 1 serie originales para celebrar nuestro aniversario, ${P.apodo}.`,
    estrenoTexto: `4 películas y 1 serie originales para ${P.nombreB}`,
    generos: ["Romántica", "Familiar", "Basada en hechos reales"],
    filaRecomendada: "Desde San Cristóbal"
  };

  /* 5. PELÍCULAS Y SERIES */
  // Escena con foto o clip del cliente
  const S = (src, a, b) => {
    const video = /\.mp4$/.test(src);
    const base = (video ? "assets/video/" : "assets/fotos/") + src;
    return video ? { img: base, poster: base.replace(/\.mp4$/, ".webp"), texto: [a, b] } : { img: base, texto: [a, b] };
  };
  // Escena con letra: varias líneas repartidas a lo largo de la escena
  const L = (src, lineas) => ({ ...S(src, "", ""), texto: lineas });
  // Escena con un clip de ambiente de la biblioteca común
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
  const cred = (...extra) => [["Protagonizada por", `${P.nombreB} y ${P.nombreA}`], ...extra, ["Dirección", "El destino, desde San Cristóbal"]];

  const temporadas = [
    /* =================== PELÍCULAS =================== */
    {
      num: 0, tipo: "pelicula", titulo: "Desde San Cristóbal", anio: 2026, clasificacion: "TP",
      imagen: F.t0, ...son(0), top10: true,
      sinopsis: "La canción de nuestra historia, de principio a fin: San Cristóbal, Bernardo, Jimena y Elisa, y todo lo que construimos juntos.",
      creditos: cred(["Historia original", P.nombreA], ["Locación", "La iglesia de San Cristóbal"], ["Banda sonora", M.canciones[0]]),
      episodios: [{
        titulo: "Desde San Cristóbal", duracion: 303,
        descripcion: "En San Cristóbal comenzó nuestra historia… Nuestra canción completa, con su letra.",
        escenas: [
          L("te-amo-mucho.webp", ["♪", "Una canción para ti, Noemí", "Hecha con todo el amor de Bernabe", "♪", "En San Cristóbal comenzó nuestra historia", "Sin saber lo que el tiempo nos iba a regalar", "Desde aquel momento guardo en la memoria"]),
          L("selfie-arbol.webp", ["La razón más bonita para celebrar", "Hoy miro nuestro camino y vuelvo a sentir", "Hoy miro nuestro camino y vuelvo a sentir", "Que a tu lado mi amor quiero seguir", "Noemí, mi vida, hoy celebro contigo", "Este amor que construimos los dos", "Con tu risa, tus enojos y tus abrazos", "Has llenado de alegría mi corazón"]),
          L("abrazo-casa.webp", ["Y aunque a veces me digas Bernardo", "Y aunque a veces me digas Bernardo", "Sé que el amor siempre habla por los dos", "Porque juntos formamos nuestra familia", "Nuestro hogar, nuestro más grande amor", "Cuando estás enojada me dices Bernardo", "Cuando estás enojada me dices Bernardo", "Y tu forma de decirlo me hace sonreír", "Aunque suene fuerte por un rato"]),
          L("pastel-juntos.webp", ["Sé que al final siempre vuelves hacia mí", "En cada momento bonito, complicado", "Tu cariño es mi refugio y mi verdad", "Y al mirar todo lo que hemos formado", "Siento orgullo de nuestra felicidad", "Hoy por nuestra historia vuelvo a brindar"]),
          L("feria.webp", ["Por lo que somos y lo que vendrá", "Noemí, mi vida, hoy celebro contigo", "Este amor que construimos los dos", "Con tu risa, tus enojos y tus abrazos", "Has llenado de alegría mi corazón", "Y aunque a veces me digas Bernardo", "Sé que el amor siempre habla por los dos"]),
          L("familia-paseo.webp", ["Porque juntos formamos nuestra familia", "Nuestro hogar, nuestro más grande amor", "Jimena y Elisa son nuestra alegría", "Jimena y Elisa son nuestra alegría", "Dos razones que nos unen mucho más", "Son la huella de todos nuestros días", "Son la huella de todos nuestros días", "El regalo más hermoso de amar", "Y en sus ojos miro nuestra historia", "Todo aquello que logramos compartir"]),
          L("hijas-abrazo.webp", ["Todo aquello que logramos compartir", "Cada paso se convierte en memoria", "Cada día me dan ganas de seguir", "Cada día me dan ganas de seguir", "Noemí, mi vida, hoy celebro contigo", "Este amor que construimos los dos", "Con tu risa, tus enojos y tus abrazos", "Has llenado de alegría mi corazón", "Y aunque a veces me digas Bernardo"]),
          L("selfie-mar.webp", ["Y aunque a veces me digas Bernardo", "Sé que el amor siempre habla por los dos", "Porque juntos formamos nuestra familia", "Nuestro hogar, nuestro más grande amor", "Hoy celebramos nuestra historia", "La que empezó en San Cristóbal para los dos", "La que empezó en San Cristóbal para los dos", "Y mientras tenga vida en mi memoria"]),
          L("selfie-noche.webp", ["Voy a agradecerle al destino tu amor", "Por Jimena, por Elisa y por tus brazos", "Por cada día que compartes junto a mí", "Mi esposa, mi familia y mi regalo", "Qué bonito es tenerte y seguir aquí", "Con amor, tu esposo Bernabé ❤️", "Con amor, tu esposo Bernabé ❤️"])
        ],
        recompensa: "Cupón: un baile con nuestra canción, cuando tú quieras 💃"
      }]
    },
    {
      num: 1, tipo: "pelicula", titulo: "Aunque Nunca Me Digas Amor", anio: 2026, clasificacion: "TP",
      imagen: F.t1, ...son(1), top10: true,
      sinopsis: "Ella nunca le dice «amor». Le dice Bernardo. Y en ese nombre cabe todo lo que siente. Una película sobre un carácter fuerte y un corazón enorme.",
      creditos: cred(["Banda sonora", M.canciones[1]], ["Apodo oficial", "Bernardo"]),
      episodios: [{
        titulo: "Aunque Nunca Me Digas Amor", duracion: 82,
        descripcion: "Nunca me dices amor, pero me amas mucho.",
        escenas: [
          S("lentes-parque.webp", "Nunca me dices «amor»…", "pero me lo demuestras todos los días."),
          S("parque-lentes.mp4", "De cariño me dices Bernardo,", "y en tu voz suena más bonito que cualquier apodo."),
          S("abrazo-casa.webp", "Tienes un carácter fuerte,", "pero un corazón todavía más grande."),
          S("paseo-plaza.mp4", "Tal vez no todo es perfecto,", "pero lo nuestro siempre se arregla con amor."),
          S("pastel-juntos.webp", "Tu forma de amar no necesita palabras:", "se nota en cómo cuidas a los tuyos."),
          S("sonrisa-casa.mp4", "Me amas mucho, Noemí,", "y lo sé aunque no me lo digas."),
          S("te-amo-mucho.webp", "Así que yo lo digo por los dos:", "te amo mucho."),
          S("selfie-noche.webp", "Siempre te voy a querer,", "con tu carácter, tus enojos y tus abrazos. ❤️")
        ],
        recompensa: "Cupón: un día en que tú decides todo (y yo no me quejo) 😄"
      }]
    },
    {
      num: 2, tipo: "pelicula", titulo: "Noemí y el Mar", anio: 2026, clasificacion: "TP",
      imagen: F.t2, ...son(2), top10: true,
      sinopsis: "A ella le gusta el mar. A él le gusta verla frente al mar. Olas, viento, atardeceres y una promesa: volver muchas veces más.",
      creditos: cred(["Banda sonora", M.canciones[2]], ["Locación favorita", "El mar"]),
      episodios: [{
        titulo: "Noemí y el Mar", duracion: 86,
        descripcion: "A ti te gusta el mar, y a mí me gusta verte frente a él.",
        escenas: [
          S("mar-olas.mp4", "A ti te gusta el mar…", "y a mí me gusta verte frente a él."),
          S("noemi-muelle.webp", "El viento, las olas y tu mirada tranquila:", "así se ve la paz."),
          S("mar-ocaso.mp4", "Cada atardecer junto al mar", "me recuerda lo bonito que es tenerte."),
          S("muelle-hija.mp4", "Y verlas disfrutar el mar contigo", "es de lo más bonito que tengo."),
          S("mar-horizonte.mp4", "Como el mar, tu amor es fuerte,", "profundo… y siempre vuelve a mí."),
          S("selfie-mar.webp", "Cierra los ojos y escucha las olas:", "así suena lo que siento por ti."),
          S("muelle-horizonte.mp4", "Sueña conmigo, Noemí:", "todavía nos faltan muchos mares por ver."),
          S("mar-costa.mp4", "Y donde estés tú,", "ahí va a estar siempre mi lugar favorito. 🌊")
        ],
        recompensa: "Cupón: un día de mar juntos, tú eliges la playa 🌊"
      }]
    },
    {
      num: 3, tipo: "pelicula", titulo: "Jimena y Elisa", anio: 2026, clasificacion: "TP",
      imagen: F.t3, ...son(3), top10: true,
      sinopsis: "Dos hijas, una familia y un hogar lleno de amor. Una película para darte las gracias por todo lo que eres para ellas y para mí.",
      creditos: cred(["Coprotagonistas", "Jimena y Elisa"], ["Banda sonora", M.canciones[3]]),
      episodios: [{
        titulo: "Jimena y Elisa", duracion: 86,
        descripcion: "Tenemos dos hijas, Jimena y Elisa: el regalo más hermoso de amar.",
        escenas: [
          S("familia-paseo.webp", "Tenemos dos hijas:", "Jimena y Elisa."),
          S("hijas-abrazo.webp", "Son el regalo más hermoso", "que nos dio la vida juntos."),
          S("paseo-familia.mp4", "Gracias por ser la mamá que eres,", "por tu entrega y tu cariño de todos los días."),
          S("hijas-dibujo.webp", "Ellas aprenden de ti", "a amar con todo el corazón."),
          S("juegos-parque.mp4", "Gracias por cada paseo,", "por cada risa y cada abrazo."),
          S("pastel-familia.mp4", "Gracias por hacer de nuestra casa", "un hogar."),
          S("sonrisa-hija.mp4", "Verte con ellas", "me recuerda por qué te elegí."),
          S("cumple-pastel.webp", "Tú, yo, Jimena y Elisa:", "mi familia, mi todo. ❤️")
        ],
        recompensa: "Cupón: una salida en familia, tú eliges a dónde 👨‍👩‍👧‍👧"
      }]
    },

    /* =================== SERIE =================== */
    {
      num: 4, tipo: "serie", titulo: "Todo Me Gusta de Ti", anio: 2026, clasificacion: "TP",
      imagen: F.t4, ...son(4), top10: true,
      sinopsis: "Lo que eres, lo que te agradezco y lo que viene. Una serie corta para celebrar nuestro aniversario.",
      creditos: cred(["Guion", "Aún en proceso (y con final feliz)"], ["Banda sonora", M.canciones[4]]),
      episodios: [
        {
          titulo: "Lo Que Eres", duracion: 66,
          descripcion: "Me gusta todo, todo me gusta de ti.",
          escenas: [
            S("feria.webp", "Me gusta tu fuerza,", "y cómo sacas adelante todo lo que te propones."),
            S("muelle-selfie.mp4", "Me gusta tu carácter,", "aunque a veces me toque a mí. 😅"),
            S("selfie-arbol.webp", "Me gusta cómo me dices Bernardo,", "como si fuera un secreto entre los dos."),
            E(24, "Me gusta tu manera de amar:", "sin tantas palabras, pero con todo."),
            S("lentes-parque.webp", "Me gusta todo,", "todo me gusta de ti.")
          ],
          recompensa: "Cupón: tu comida favorita, invitada por mí 🍽️"
        },
        {
          titulo: "Gracias", duracion: 66,
          descripcion: "Todo lo que quiero agradecerte.",
          escenas: [
            S("te-amo-mucho.webp", "Gracias por amarme tanto,", "aunque me lo digas a tu manera."),
            S("familia-paseo.webp", "Gracias por Jimena y Elisa,", "y por la familia que formamos."),
            E(65, "Gracias por quedarte en los días complicados", "y por hacerlos más ligeros."),
            S("pastel-juntos.webp", "Gracias por cada detalle,", "por los grandes y por los pequeñitos."),
            S("abrazo-casa.webp", "Y gracias por elegirme,", "desde aquella iglesia de San Cristóbal.")
          ],
          recompensa: "Cupón: un abrazo largo cada vez que lo pidas 🤗"
        },
        {
          titulo: "Lo Que Viene", duracion: 66,
          descripcion: "Por lo que somos y lo que vendrá.",
          escenas: [
            E(73, "Quiero celebrar contigo", "cada 12 de noviembre, por siempre."),
            S("hijas-abrazo.webp", "Quiero ver crecer a Jimena y Elisa", "tomado de tu mano."),
            E(36, "Quiero llevarte al mar muchas veces más", "y verte feliz frente a las olas."),
            E(54, "Quiero envejecer a tu lado,", "con tus enojos, tu risa y tus abrazos."),
            S("selfie-noche.webp", "Esta historia apenas comienza, Noemí.", "Ahora te toca a ti: ve a El Final. ❤️")
          ],
          recompensa: "Ya puedes ver: EL FINAL 🔴"
        }
      ]
    }
  ];

  /* 6. DETRÁS DE CÁMARAS */
  const extras = [
    { titulo: "Casting", img: fo("perfil-pareja"), texto: "Desde San Cristóbal, el papel principal siempre fue tuyo, Noemí." },
    { titulo: "Locaciones", img: fo("noemi-muelle"), texto: "La iglesia de San Cristóbal, nuestra casa y, por supuesto, el mar." },
    { titulo: "Banda sonora", img: fo("feria"), texto: M.canciones.join(" · ") },
    { titulo: "Elenco de lujo", img: fo("familia-paseo"), texto: "Jimena y Elisa, las coprotagonistas más bonitas de esta historia." },
    { titulo: "Escenas eliminadas", img: fo("selfie-arbol"), texto: "Hay escenas que solo existen para nosotros. Y así se quedan." }
  ];

  /* 7. TEMPORADA FINAL */
  const final = {
    titulo: "El Final: Tu Turno",
    sinopsis: `Después de 4 películas y 1 serie, ${P.nombreB} toma la palabra. En este final, tú escribes el guion.`,
    imagen: F.final,
    preguntas: [
      "¿Cuál es tu película o serie favorita de nuestra historia y por qué?",
      "¿Qué es lo que más te gusta de nuestra familia?",
      "¿Cómo quieres celebrar nuestro aniversario?",
      "¿A qué mar te gustaría que fuéramos juntos?",
      `Escríbele a ${P.nombreA} algo que nunca le hayas dicho.`
    ],
    carta: (r) =>
`Noemí:

Llegaste al final del catálogo, pero no de la historia.

Dices que tu título favorito es "${r[0]}". El mío es cualquiera en el que sales tú.

Lo que más te gusta de nuestra familia: ${r[1]}. Lo que más me gusta a mí es que la formamos juntos.

Para nuestro aniversario quieres: ${r[2]}. Trato hecho.

Y el próximo mar ya tiene destino: ${r[3]}. Vamos a ir.

${P.mensajeFinal}

Con todo mi amor,
tu Bernardo`
  };

  /* 8. CRÉDITOS Y POST-CRÉDITOS */
  const creditos = [
    ["Una producción original de", P.nombreA],
    ["Protagonizada por", P.nombreB],
    ["Coprotagonista", `${P.nombreA} (alias Bernardo)`],
    ["Con la participación especial de", "Jimena y Elisa"],
    ["Dirección", "El destino, desde San Cristóbal"],
    ["Banda sonora", M.canciones.join(" · ")],
    ["Locación principal", "La iglesia de San Cristóbal"],
    ["Locación favorita", "El mar"],
    ["Efectos especiales", "Tu carácter fuerte y tu corazón enorme"],
    ["Dobles de riesgo", "Ninguno. Todo fue real."],
    ["Motivo del estreno", "Nuestro aniversario · 12 de noviembre"],
    ["Agradecimientos especiales", "A la iglesia de San Cristóbal, donde empezó todo"],
    ["", "Ningún corazón fue dañado durante la filmación de estas películas y series."],
    ["", `© ${new Date().getFullYear()} ${P.nombreA} & ${P.nombreB}. Todos los derechos reservados (para nosotros).`]
  ];

  const postCreditos = {
    imagen: F.postCreditos,
    etiqueta: "ESCENA POST-CRÉDITOS",
    texto: `${P.nombreB}… nuestra historia acaba de ser renovada.`,
    anuncio: "Nueva temporada",
    subtitulo: "Próximamente. Y para siempre.",
    sorpresa: "¡Feliz aniversario, Noemí! 🌊❤️"
  };

  // Paquete de $79: solo el memorama de fotos en Juegos
  const arcades = ["memory"];

  return { pareja: P, fotos: F, media: M, acceso, notificacion, sitio, temporadas, extras, final, creditos, postCreditos, arcades };
})();

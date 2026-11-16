/* =====================================================================
   TEMPORADAS DE NOSOTROS — Sandra Carolina y Luis Fernando · "Miel y Oro"
   Paquete Nuestra Temporada ($149): 8 películas, 2 series (3 episodios c/u) y 3 juegos
   (Trivia, Código secreto con la fecha, Ordena la dedicatoria). Sin juegos arcade.
   Aniversario: 31 de enero. Contraseña: 3101.
   La película 0 lleva el mensaje de Sandra tal cual. Canciones recortadas justo antes del
   clímax (cortes de 78 a 171 s). Relleno: clips de ../comun/medios, miel.mp4 / olas.mp4 /
   camino.webp / miel.webp (Pexels: Aurelijus U., huynhdong huynh, Willian Justen de
   Vasconcellos, Adonyi Gábor) y la animación "Miel y Oro" hecha para este pedido.
   ===================================================================== */
window.TDN = (function () {

  /* 1. DATOS DE LA PAREJA */
  const P = {
    nombreA: "Sandra Carolina",
    nombreB: "Luis Fernando",
    apodos: ["mi amor"],
    fechaInicio: "2026-01-31",
    aniosManual: 1,
    ciudad: "",
    primeraCita: "",
    cancion: "Tan Cerca De Ti",
    artista: "María León",
    viajes: [],
    dificiles: [],
    anecdota: "",
    culpableAnecdota: 0,
    gustosB: [],
    suenos: ["Que nunca nos falten miel y oro", "Que nunca dejemos de creer", "Crear juntos lo más bonito de la vida"],
    mensajeFinal: "Que nunca nos falten miel y oro, y que nunca dejemos de creer, porque juntos podemos crear lo más bonito de la vida. ❤️✨"
  };
  P.anioInicio = 2026;
  P.anios = 1;
  P.fechaCodigo = "3101";
  P.apodo = P.apodos[0];

  /* 2. FOTOS */
  const fo = (n) => "assets/fotos/" + n + ".webp";
  const po = (n) => "assets/fotos/h-" + n + ".webp";   // portada horizontal con la foto completa
  const F = {
    hero: fo("hero"),
    perfilB: fo("perfil-luis"),
    perfilPareja: fo("perfil-pareja"),
    t0: fo("mirador-abrazo"), t1: fo("caricatura"), t2: fo("aventuras"),
    t3: fo("playa-atardecer"), t4: fo("cena"), t5: fo("creer-es-crear"),
    t6: fo("playa-caricatura"), t7: fo("rio"),
    final: po("playa-atardecer"),
    puzzle: fo("caricatura"),
    puzzle2: "",
    postCreditos: fo("boceto-gorras")
  };

  /* 3. AUDIO / VIDEO (cada corte empieza una frase antes del clímax) */
  const A = (n) => "assets/audio/" + n + ".mp3";
  const T = {
    tan:     { musica: A("tan-cerca-de-ti"),      cancion: "Tan Cerca De Ti · María León" },
    tan2:    { musica: A("tan-cerca-de-ti-2"),    cancion: "Tan Cerca De Ti · María León" },
    ena:     { musica: A("enamorados"),           cancion: "1+1=2 Enamorados (Walker Style Remix)" },
    ena2:    { musica: A("enamorados-2"),         cancion: "1+1=2 Enamorados (Walker Style Remix)" },
    loc:     { musica: A("las-locuras-mias"),     cancion: "Las Locuras Mías · Omar Chaparro" },
    loc2:    { musica: A("las-locuras-mias-2"),   cancion: "Las Locuras Mías · Omar Chaparro" },
    todo:    { musica: A("todo-lo-fue"),          cancion: "Todo Lo Fue · Lenin Ramírez" },
    todo2:   { musica: A("todo-lo-fue-2"),        cancion: "Todo Lo Fue · Lenin Ramírez" }
  };
  const M = {
    intro: "../comun/medios/audio/intro.mp3",
    temporadas: [T.tan.musica, T.ena.musica, T.loc.musica, T.todo.musica],
    canciones: [T.tan.cancion, T.ena.cancion, T.loc.cancion, T.todo.cancion],
    musica: "",
    videoFinal: "assets/video/final-miel-y-oro.mp4",
    audioRemitente: ""
  };

  /* 4. ACCESO Y NOTIFICACIÓN */
  const acceso = {
    demo: false,
    cualquierClave: false,
    password: "3101",
    pistaPassword: "Nuestro aniversario: día y mes (DDMM)",
    estreno: ""
  };

  const notificacion = { whatsapp: "529619292737", email: "", endpoint: "" };

  const sitio = {
    url: new URL("./", location.href).href,
    coincidencia: 100,
    clasificacion: "TP",
    clasificacionTexto: "Romance, aventuras y mucha miel",
    heroTag: "ESTRENO DE ANIVERSARIO · 31 DE ENERO",
    heroTop: "N.º 1 en el corazón de Sandra",
    sinopsis: `Que nunca nos falten miel y oro, y que nunca dejemos de creer. ` +
              `8 películas y 2 series originales hechas por Sandra Carolina solo para ti, Luis Fernando.`,
    estrenoTexto: `8 películas y 2 series originales para ti, ${P.nombreB}`,
    generos: ["Romántica", "Aventura", "Basada en hechos reales"],
    filaRecomendada: "Miel y Oro"
  };

  /* 5. PELÍCULAS Y SERIES */
  // S: foto del pedido en versión vertical completa · V: video del pedido · E: clip de ../comun/medios
  const S = (n, a, b) => ({ img: "assets/fotos/v/" + n + ".webp", texto: [a, b] });
  const V = (n, a, b) => ({ img: "assets/video/" + n + ".mp4", poster: "assets/video/" + n + ".webp", texto: [a, b] });
  const L = (n, lineas) => ({ ...(/\.mp4$/.test(n) ? V(n.replace(".mp4", ""), "", "") : S(n, "", "")), texto: lineas });
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
  const cred = (...extra) => [["Protagonizada por", `${P.nombreB} y ${P.nombreA}`], ...extra, ["Dirección", "Sandra Carolina, con todo su amor"]];
  const dur = (escenas) => 6 + 11 * escenas.length;
  const peli = (num, titulo, track, imagen, sinopsis, descripcion, escenas, extra = {}) => ({
    num, tipo: "pelicula", titulo, anio: 2026, clasificacion: "TP", imagen, ...track, top10: num < 4,
    sinopsis, creditos: cred(["Banda sonora", track.cancion]),
    episodios: [{ titulo, descripcion, duracion: dur(escenas), escenas, ...extra }]
  });
  const ep = (titulo, track, descripcion, escenas, recompensa) => ({ titulo, descripcion, duracion: dur(escenas), escenas, ...track, recompensa });

  const temporadas = [
    /* =================== PELÍCULAS =================== */
    peli(0, "Miel y Oro", T.tan, po("mirador-abrazo"),
      "El deseo que Sandra Carolina escribió para Luis Fernando, palabra por palabra. Una película sobre lo dulce, lo valioso y lo que todavía falta por crear.",
      "Que nunca nos falten miel y oro.", [
        V("miel-y-oro", "Luis Fernando,", "esta historia empieza con un deseo."),
        L("mirador-abrazo", ["«Que nunca nos falten", "miel y oro…»"]),
        V("miel", "Miel: lo dulce de nosotros,", "las palabras bonitas, los abrazos, la ternura."),
        S("cena", "Oro: lo que vale de verdad,", "tu tiempo, tu risa, tu compañía."),
        L("creer-es-crear", ["«…y que nunca dejemos de creer…»"]),
        S("aventuras", "Creer en ti, creer en mí", "y creer en todo lo que somos juntos."),
        L("playa-atardecer", ["«…porque juntos podemos crear…»"]),
        E(65, "Porque tú y yo, de la mano,", "podemos construir lo que soñamos."),
        L("caricatura", ["«…lo más bonito de la vida.» ❤️✨"]),
        S("mirador-selfie", "Feliz aniversario, mi amor.", "Con todo mi corazón, Sandra Carolina.")
      ], {
        interaccion: {
          tipo: "quiz", titulo: "Trivia: el deseo de Sandra",
          pregunta: "¿Qué dos cosas desea Sandra que nunca les falten?",
          opciones: ["Miel y oro", "Sol y luna", "Pan y café"], correcta: 0,
          ok: "¡Miel y oro! Lo dulce y lo valioso, siempre juntos."
        },
        recompensa: "Cupón: un día dulce como la miel, tú eliges el plan 🍯"
      }),

    peli(1, "Nuestro 31 de Enero", T.ena, po("caricatura"),
      "Una fecha que se volvió nuestra. Una película para celebrar el día que más brilla en el calendario de Sandra y Luis.",
      "La fecha que se volvió nuestra.", [
        E(14, "Hay fechas que pasan…", "y hay fechas que se quedan para siempre."),
        S("caricatura", "El 31 de enero es nuestra:", "el día que celebramos ser tú y yo."),
        S("mirador-abrazo", "Desde entonces", "mis días tienen otro color."),
        E(7, "Me enamoro de ti", "en los detalles más pequeños."),
        S("girasoles", "Como estos girasoles:", "siempre buscando la luz, siempre buscándote."),
        S("mesa-brindis", "Brindo por cada 31 de enero", "que nos falta por celebrar."),
        E(27, "Por bailar contigo", "aunque no haya música."),
        S("playa-caricatura", "Por las risas, los abrazos", "y por ser mi persona favorita."),
        E(69, "Somos dos, dos enamorados,", "mirando hacia el mismo lado."),
        S("cena", "Feliz aniversario, Luis Fernando.", "Hoy y siempre, te elijo a ti. ❤️")
      ], {
        interaccion: {
          tipo: "codigo", modo: "fecha", titulo: "Código secreto: nuestra fecha",
          pregunta: "Introduce el código secreto: el día y el mes de nuestro aniversario",
          placeholder: "DDMM", respuestas: ["3101", "31012026"],
          pista: "Es un día de enero… el último del mes.",
          ok: "Código aceptado: 31 de enero, nuestra fecha. ❤️"
        },
        recompensa: "Cupón: una cena de aniversario, yo invito 🥂"
      }),

    peli(2, "Aventuras + Tú = Plan Perfecto", T.loc, po("aventuras"),
      "Miradores, caminos, ríos y cuevas. Cualquier lugar se vuelve aventura cuando Luis Fernando va al lado.",
      "Cualquier lugar contigo es aventura.", [
        S("aventuras", "Aventuras + tú", "= plan perfecto. Así de simple."),
        E(44, "No importa a dónde vayamos,", "si vamos juntos, ya ganamos."),
        S("cueva", "Entramos a lugares que nos dejan sin palabras…", "y salimos más unidos."),
        S("mirador-luis", "Te veo con los brazos abiertos frente al mundo", "y pienso: qué suerte la mía."),
        E(61, "Una foto más,", "que todavía no nos cansamos de presumirnos."),
        S("mirador-selfie", "Desde lo alto todo se ve distinto…", "pero lo más bonito siempre eres tú."),
        S("rio", "Agua fría, risas", "y ganas de no irnos nunca."),
        E(64, "Y lo que nos falta:", "más caminos, más montañas, más nosotros."),
        S("cruz-camino", "Cada paso a tu lado", "es un paso hacia lo que soñamos."),
        S("hero", "¿Qué tal si nos enamoramos de nuestras locuras?", "Yo ya lo hice. 😍")
      ], {
        recompensa: "Cupón: una nueva aventura, tú eliges el destino 🗺️"
      }),

    peli(3, "Creer es Crear", T.todo, po("creer-es-crear"),
      "«To believe is to create». Una película sobre la fe que nos tenemos y sobre todo lo que podemos construir si nunca dejamos de creer.",
      "Que nunca dejemos de creer.", [
        S("creer-es-crear", "«To believe is to create»:", "creer es crear."),
        E(24, "Yo creo en ti,", "aun cuando tú dudas."),
        S("boceto-gorras", "Creo en nosotros,", "en nuestra forma de cuidarnos y de reírnos."),
        V("olas", "Creo que lo que siembras con amor", "siempre vuelve como las olas."),
        S("cruz", "Creo en Dios, que nos cuida", "y nos da la fuerza para seguir."),
        S("creer-es-crear-2", "Y creo en lo que todavía no vemos,", "pero ya estamos construyendo."),
        E(54, "Porque si tú y yo creemos,", "podemos crear lo más bonito de la vida."),
        S("reflejo", "Hasta los recuerdos borrosos", "se ven claros cuando los miro contigo."),
        E(73, "Nunca dejemos de creer,", "mi amor."),
        S("mirador-abrazo", "Yo sigo creyendo en ti.", "Siempre.")
      ], {
        recompensa: "Cupón: una tarde para soñar en voz alta y hacer planes juntos ✨"
      }),

    peli(4, "Desde lo Alto", T.tan, po("cruz"),
      "Miradores, cielos abiertos y una cruz en lo alto. Lo que se siente mirar el mundo de la mano de Luis Fernando.",
      "Tomada de tu mano toco el cielo.", [
        S("cruz-camino", "Hay caminos que se suben despacio…", "y valen cada paso."),
        S("cruz", "Allá arriba, más cerca del cielo,", "doy gracias por ti."),
        E(35, "Desde lo alto el mundo se ve pequeño…", "y lo nuestro, enorme."),
        S("mirador-abrazo", "Tu abrazo por la espalda", "es mi lugar seguro."),
        S("mirador-luis", "Me encanta verte así:", "libre, feliz, con los brazos abiertos."),
        E(40, "Contigo hasta una pausa en el camino", "se vuelve un recuerdo."),
        S("mirador-selfie", "Juntos frente al paisaje,", "juntos frente a la vida."),
        V("miel-y-oro", "Ojalá subamos muchas montañas más", "y nunca nos falte la miel ni el oro."),
        E(72, "Que cada amanecer", "nos encuentre de la mano."),
        S("hero", "Contigo me siento invencible,", "Luis Fernando. Aquí me quedo, cerquita de ti.")
      ], {
        recompensa: "Cupón: subir juntos a un mirador y ver el atardecer 🌄"
      }),

    peli(5, "Agua, Sol y Tú", T.ena, po("playa-atardecer"),
      "Playa, río, sol y arena. Una película de verano eterno con los dos protagonistas más enamorados.",
      "Agua, sol y tú: mi plan perfecto.", [
        V("olas", "Agua, sol", "y tú."),
        S("playa-caricatura", "En la playa", "todo se siente más ligero."),
        E(36, "Caminar contigo por la orilla", "es de mis cosas favoritas."),
        S("rio", "En el río, agua fresca", "y tu sonrisa a lo lejos."),
        S("agua-letras", "Algunas cosas se escriben en el agua…", "pero lo nuestro se queda escrito en el corazón."),
        E(39, "El mar es grande,", "pero lo que siento por ti lo es más."),
        S("playa-atardecer", "Un atardecer, tú y yo:", "no necesito nada más."),
        E(74, "Que nunca se nos acaben", "los atardeceres juntos."),
        E(36, "Que la vida nos lleve a muchas playas más,", "siempre de la mano."),
        S("caricatura", "Te amo, Luis Fernando,", "con sol, con lluvia y con marea. 🌊")
      ], {
        recompensa: "Cupón: un día de agua y sol, juntos y sin prisas ☀️"
      }),

    peli(6, "Gracias", T.loc, po("cena"),
      "Todo lo que Sandra Carolina le agradece a Luis Fernando: lo grande, lo pequeño y lo de todos los días.",
      "Todo lo que quiero agradecerte.", [
        S("cena", "Gracias por las cenas,", "por las pláticas y por quedarte."),
        E(8, "Gracias por hacerme sentir especial", "en una noche cualquiera."),
        S("girasoles", "Gracias por los detalles,", "por las flores y por pensar en mí."),
        S("mesa-brindis", "Gracias por cada brindis,", "por cada celebración a tu lado."),
        E(22, "Gracias por hacerme reír", "hasta que me duele la panza. 😂"),
        S("boceto-gorras", "Gracias por cuidarme", "y por dejarme cuidarte."),
        E(24, "Gracias por tomarme de la mano", "en los días buenos y en los difíciles."),
        S("aventuras", "Gracias por ser mi compañero de aventuras", "y mi plan perfecto."),
        E(59, "Gracias por ser hogar,", "donde sea que estemos."),
        S("mirador-abrazo", "Gracias por existir, Luis Fernando.", "Gracias por elegirme. ❤️")
      ], {
        recompensa: "Cupón: un abrazo largo, sin reloj y sin prisa 🤗"
      }),

    peli(7, "Lo Más Bonito de la Vida", T.todo, po("playa-caricatura"),
      "Las metas, los sueños y los planes que Sandra Carolina quiere crear al lado de Luis Fernando.",
      "Juntos podemos crear lo más bonito de la vida.", [
        E(73, "Esto es lo que sueño", "para nosotros."),
        S("camino", "Seguir recorriendo caminos nuevos,", "siempre juntos."),
        E(43, "Planear nuevos viajes", "y cumplirlos uno por uno."),
        S("mirador-selfie", "Seguir conociendo lugares", "que nos dejen sin aliento."),
        E(59, "Construir un hogar lleno de paz,", "de risas y de miel."),
        S("cena", "Celebrar cada logro tuyo", "como si fuera mío."),
        E(69, "Envejecer contigo", "mirando atardeceres."),
        S("miel", "Que nunca nos falten miel y oro,", "ni ganas de seguir creando."),
        E(65, "Porque juntos podemos crear", "lo más bonito de la vida."),
        S("hero", "Y lo más bonito de mi vida", "eres tú, Luis Fernando. ❤️✨")
      ], {
        interaccion: {
          tipo: "ordenar", titulo: "Ordena la dedicatoria",
          eventos: [
            "Que nunca nos falten miel y oro,",
            "y que nunca dejemos de creer,",
            "porque juntos podemos crear",
            "lo más bonito de la vida. ❤️✨"
          ],
          ok: "¡Dedicatoria completa! Así la escribió Sandra para ti."
        },
        recompensa: "Cupón: escribir juntos nuestra lista de sueños 📝"
      }),

    /* =================== SERIES =================== */
    {
      num: 8, tipo: "serie", titulo: "Miel", anio: 2026, clasificacion: "TP",
      imagen: po("girasoles"), ...T.tan2, top10: false,
      sinopsis: "Lo dulce de nosotros: las palabras bonitas, los detalles y la ternura de todos los días. Una serie en tres episodios.",
      creditos: cred(["Guion", "Escrito con miel"], ["Banda sonora", "Tan Cerca De Ti · Las Locuras Mías · Enamorados"]),
      episodios: [
        ep("Hablarnos Bonito", T.tan2, "Que nunca nos falte la miel de hablarnos con cariño.", [
          V("miel", "La miel de nosotros", "empieza en cómo nos hablamos."),
          E(13, "Un «buenos días, mi amor»", "puede cambiarme el día entero."),
          S("caricatura", "Tus bromas, tus apodos,", "tu forma de hacerme reír."),
          E(12, "Hasta un mensaje cortito tuyo", "me endulza la tarde."),
          S("boceto-gorras", "Que siempre nos hablemos bonito,", "aun cuando estemos cansados."),
          S("mirador-abrazo", "Y que nunca falte", "un «te amo» antes de dormir.")
        ], "Cupón: una carta escrita a mano, solo para ti 💌"),
        ep("Los Detalles", T.loc2, "Flores, cenas y sorpresas: lo pequeño que se vuelve enorme.", [
          S("girasoles", "Los girasoles", "que me alegran el día."),
          S("mesa-brindis", "Una mesa preparada con amor,", "vino, flores y nosotros."),
          E(18, "Las sorpresas que no esperaba", "y que guardo en el corazón."),
          S("cena", "Una cena tranquila,", "tú enfrente y yo sonriendo."),
          E(21, "Un café juntos", "también es un detalle."),
          S("playa-caricatura", "Los detalles no son pequeños", "cuando vienen de ti.")
        ], "Cupón: una sorpresa sorpresa, cuando menos lo esperes 🎁"),
        ep("Dulce Compañía", T.ena2, "Lo dulce de tenernos cerca.", [
          E(52, "Lo más dulce de mis días", "es despertar sabiendo que te tengo."),
          S("hero", "Tu cachete en mi hombro,", "mi lugar favorito."),
          E(22, "Las risas tontas", "que solo entendemos tú y yo."),
          S("rio", "Los días de sol,", "de agua y de calma."),
          E(54, "Caminar a tu lado", "a cualquier hora."),
          S("caricatura", "Que nunca nos falte la miel,", "Luis Fernando. 🍯")
        ], "Cupón: un día de consentirte, tú mandas 👑")
      ]
    },
    {
      num: 9, tipo: "serie", titulo: "Oro", anio: 2026, clasificacion: "TP",
      imagen: po("mirador-selfie"), ...T.todo2, top10: false,
      sinopsis: "Lo valioso de nosotros: el tiempo juntos, lo que construimos y la fe para seguir creyendo. Una serie en tres episodios.",
      creditos: cred(["Guion", "Escrito con oro"], ["Banda sonora", "Todo Lo Fue · Tan Cerca De Ti · Enamorados"]),
      episodios: [
        ep("Nuestro Tiempo", T.todo2, "El oro más valioso: el tiempo que pasamos juntos.", [
          V("miel-y-oro", "El oro de verdad", "no se guarda en una caja."),
          E(69, "Es el tiempo contigo,", "sin prisas y sin relojes."),
          S("mirador-selfie", "Cada salida,", "cada foto, cada abrazo."),
          E(40, "Cada pausa en el camino", "para mirarnos y sonreír."),
          S("cueva", "Cada lugar nuevo", "que descubrimos juntos."),
          S("mirador-abrazo", "Mi tiempo favorito", "es el que paso contigo.")
        ], "Cupón: un día completo solo para nosotros dos ⏳"),
        ep("Lo Que Construimos", T.tan2, "Paso a paso, juntos.", [
          S("camino", "Lo nuestro se construye", "paso a paso."),
          E(24, "Con paciencia,", "con respeto y con las manos juntas."),
          S("boceto-gorras", "Con risas en los días buenos", "y con abrazos en los difíciles."),
          E(59, "Con un hogar", "que se siente en paz."),
          S("aventuras", "Con planes, con aventuras", "y con muchas ganas."),
          S("cruz-camino", "Y con la fe de que lo mejor", "todavía está por venir.")
        ], "Cupón: armar juntos el plan de nuestro próximo año 📅"),
        ep("Seguir Creyendo", T.ena2, "El final de esta serie y el principio de lo que sigue.", [
          S("creer-es-crear", "Creer es crear.", "Y yo creo en nosotros."),
          S("cruz", "Le pido a Dios que nos cuide", "y que nunca nos falte nada."),
          E(65, "Que nunca dejemos de creer,", "aunque el camino se ponga difícil."),
          S("playa-atardecer", "Porque juntos podemos crear", "lo más bonito de la vida."),
          E(36, "Y esta historia", "apenas empieza."),
          S("hero", "Te amo, Luis Fernando.", "Ahora te toca a ti: ve a El Final. ❤️")
        ], "Ya puedes ver: EL FINAL 🔴")
      ]
    }
  ];

  /* 6. DETRÁS DE CÁMARAS */
  const extras = [
    { titulo: "Casting", img: fo("perfil-pareja"), texto: "El papel protagónico siempre fue tuyo, Luis Fernando." },
    { titulo: "Locaciones", img: fo("mirador-selfie"), texto: "Miradores, playas, ríos, cuevas, caminos y cenas: todos los lugares a donde fuimos juntos." },
    { titulo: "Banda sonora", img: fo("girasoles"), texto: M.canciones.join(" · ") },
    { titulo: "Versión animada", img: fo("caricatura"), texto: "Hasta en caricatura se nota lo felices que somos." },
    { titulo: "Escenas eliminadas", img: fo("boceto-gorras"), texto: "Hay escenas que solo existen para nosotros. Y así se quedan." }
  ];

  /* 7. TEMPORADA FINAL */
  const final = {
    titulo: "El Final: Tu Turno",
    sinopsis: "Después de 8 películas y 2 series, el protagonista toma la palabra. En este final, tú escribes el guion.",
    imagen: F.final,
    preguntas: [
      "¿Cuál es tu película o serie favorita de este regalo y por qué?",
      "¿Qué es para ti la «miel» de nuestra relación?",
      "¿Y qué es el «oro», lo más valioso que tenemos?",
      "¿Qué aventura te gustaría que viviéramos juntos este año?",
      `Escríbele a ${P.nombreA} algo que nunca le hayas dicho.`
    ],
    carta: (r) =>
`Luis Fernando:

Llegaste al final del catálogo, pero no de la historia.

Dices que tu título favorito es "${r[0]}". El mío es cualquiera en el que sales tú.

La miel de lo nuestro, para ti: ${r[1]}.
Y el oro: ${r[2]}.

La próxima aventura: ${r[3]}. Trato hecho.

${P.mensajeFinal}

Feliz aniversario, mi amor.
Con todo mi corazón,
Sandra Carolina`
  };

  /* 8. CRÉDITOS Y POST-CRÉDITOS */
  const creditos = [
    ["Una producción original de", P.nombreA],
    ["Protagonizada por", "Luis Fernando"],
    ["Coprotagonista", P.nombreA],
    ["Dirección", "Sandra Carolina, con todo su amor"],
    ["Banda sonora", M.canciones.join(" · ")],
    ["Locaciones", "Miradores, playas, ríos, cuevas y caminos"],
    ["Efectos especiales", "Miel, oro y mucha fe"],
    ["Dobles de riesgo", "Ninguno. Todo fue real."],
    ["Motivo del estreno", "Nuestro aniversario: 31 de enero"],
    ["Escenas ilustrativas", "Pexels · Aurelijus U., huynhdong huynh, Willian Justen de Vasconcellos, Adonyi Gábor"],
    ["Agradecimientos especiales", "A Dios, por ponernos en el mismo camino"],
    ["", "Ningún corazón fue dañado durante la filmación de estas películas y series."],
    ["", `© ${new Date().getFullYear()} ${P.nombreA} & ${P.nombreB}. Todos los derechos reservados (para nosotros).`]
  ];

  const postCreditos = {
    imagen: F.postCreditos,
    etiqueta: "ESCENA POST-CRÉDITOS",
    texto: `${P.nombreB}… nuestra historia acaba de ser renovada por muchas temporadas más.`,
    anuncio: "Nueva temporada",
    subtitulo: "Próximamente: el siguiente 31 de enero. Y para siempre.",
    sorpresa: "Que nunca nos falten miel y oro. ❤️✨"
  };

  // Paquete de $149: los 3 juegos van como retos (Trivia, Código secreto, Ordena); sin arcade
  const arcades = [];

  return { pareja: P, fotos: F, media: M, acceso, notificacion, sitio, temporadas, extras, final, creditos, postCreditos, arcades };
})();

/* =====================================================================
   TEMPORADAS DE NOSOTROS — Pedro para Ruby
   Paquete Temporadas de Nosotros ($199): 12 películas, 3 series (3 episodios c/u), 7 juegos
   (2 trivias, adivinanza, completa la frase, código secreto, ordena la historia y memorama).
   Envía: Pedro. Recibe: Ruby. Sin aniversario ni historia escrita: el guion sale de sus fotos.
   Dato real de las fotos: flores "Para mi princesa", Tejupilco, 14 de septiembre.
   Contraseña: ruby (la dio Obed).
   Canciones del proyecto original, recortadas desde poco antes del clímax (cortes de 78 a 128 s).
   Fotos: 34 del cliente (assets/fotos, versión vertical en assets/fotos/v).
   Videos: 3 del cliente recortados en assets/video/v/rb01..rb11 (sin audio).
   Relleno: clips de stock verticales (assets/video/v) y animaciones fecha, princesa, diez, familia.
   ===================================================================== */
window.TDN = (function () {

  /* 1. DATOS */
  const P = {
    nombreA: "Pedro",
    nombreB: "Ruby",
    apodos: ["Mi princesa", "Mi amor", "Ruby"],
    fechaInicio: "",
    aniosManual: 0,
    ciudad: "Tejupilco",
    primeraCita: "",
    cancion: "Can't Help Falling In Love",
    artista: "Elvis Presley",
    viajes: [],
    dificiles: [],
    anecdota: "",
    culpableAnecdota: 0,
    gustosB: [],
    suenos: ["Seguir construyendo nuestra familia", "Cumplir juntos cada meta", "Envejecer a tu lado"],
    mensajeFinal: "Gracias por llegar a mi vida y llenarla de color. Gracias por tu cariño, por tu paciencia, por tus detalles y por cada abrazo que me recuerda que contigo estoy en casa. Eres mi princesa hoy y lo vas a ser siempre. Quiero seguir cumpliendo sueños a tu lado, cuidarte, hacerte reír y construir juntos todo lo que imaginamos. Te amo, Ruby."
  };
  P.anioInicio = 2026;
  P.anios = 1;
  P.fechaCodigo = "";
  P.apodo = P.apodos[0];

  /* 2. FOTOS */
  const fo = (n) => "assets/fotos/" + n + ".webp";
  const cu = (n) => "assets/fotos/" + n + "-cuadro.webp";
  const F = {
    hero: fo("abrazo-blanco"),
    perfilB: cu("ruby-rojo"),
    perfilPareja: cu("sillon-abrazo"),
    // t0..t5 también son las cartas del memorama de fotos
    t0: cu("blanco-ramo"), t1: cu("sillon-risas"), t2: cu("collar-pedro"),
    t3: cu("ruby-rojo"), t4: cu("familia-brazos"), t5: cu("pastel-miradas"),
    t6: cu("flores-princesa"), t7: cu("sillon-juntos"),
    final: fo("blanco-ramo-2"),
    puzzle: fo("abrazo-blanco"),
    puzzle2: fo("sillon-abrazo"),
    postCreditos: fo("sillon-risas")
  };

  /* 3. AUDIO / VIDEO (cada canción empieza poco antes de su clímax) */
  const A = (n) => "assets/audio/" + n + ".mp3";
  const M = {
    intro: "assets/audio/intro.mp3",
    temporadas: [
      A("cant-help-a"), A("just-the-way-a"), A("your-song-a"), A("baila-a"),
      A("al-aire-a"), A("you-and-i-a"), A("you-a"), A("lover-a"),
      A("you-b"), A("cant-help-b"), A("baila-b"), A("just-the-way-b"),
      A("your-song-b"), A("al-aire-b"), A("lover-b")
    ],
    canciones: [
      "Can't Help Falling In Love · Elvis Presley",
      "Just The Way You Are · Bruno Mars",
      "Your Song · Rita Ora",
      "Baila Mi Corazón · Belanova",
      "Al Aire · Morat",
      "You & I · One Direction",
      "you! · LANY",
      "Lover · Taylor Swift",
      "you! · LANY",
      "Can't Help Falling In Love · Elvis Presley",
      "Baila Mi Corazón · Belanova",
      "Just The Way You Are · Bruno Mars",
      "Your Song · Rita Ora",
      "Al Aire · Morat",
      "Lover · Taylor Swift"
    ],
    musica: "",
    videoFinal: "assets/video/v/princesa.mp4?v=1",
    audioRemitente: ""
  };

  /* 4. ACCESO Y NOTIFICACIÓN */
  const acceso = {
    demo: false,
    cualquierClave: false,
    password: "ruby",
    pistaPassword: "Tu nombre, en minúsculas",
    estreno: ""
  };

  const notificacion = { whatsapp: "527224201664", email: "", endpoint: "" };

  const sitio = {
    url: new URL("./", location.href).href,
    coincidencia: 100,
    clasificacion: "TP",
    clasificacionTexto: "Amor, familia y gratitud",
    heroTag: "PARA MI PRINCESA",
    heroTop: "N.º 1 en el corazón de Pedro",
    sinopsis: `Ruby, cada foto de este catálogo es una razón más para amarte. ` +
              `12 películas y 3 series originales de ${P.nombreA} para ${P.nombreB}.`,
    estrenoTexto: `12 películas y 3 series originales de ${P.nombreA}, solo para ti`,
    generos: ["Romance", "Familia", "Basada en hechos reales"],
    filaRecomendada: "Para mi princesa, con todo mi amor"
  };

  /* 5. PELÍCULAS Y SERIES */
  // V(n): clip vertical (centrado) en assets/video/v/
  // Fo(n): foto del cliente completa sobre fondo difuminado (assets/fotos/v/)
  const V = (n, a, b) => ({ img: "assets/video/v/" + n + ".mp4?v=1", poster: "assets/video/v/" + n + ".webp?v=1", texto: [a, b] });
  const Fo = (n, a, b) => ({ img: "assets/fotos/v/" + n + ".webp?v=1", texto: [a, b] });
  const son = (i) => ({ musica: M.temporadas[i], cancion: M.canciones[i] });
  const cred = (i, ...extra) => [["Protagonizada por", `${P.nombreB} y ${P.nombreA}`], ...extra, ["Banda sonora", M.canciones[i]], ["Dirección", "El corazón de Pedro"]];
  const peli = (num, titulo, imagen, sinopsis, duracion, descripcion, escenas, recompensa, extra = {}) => ({
    num, tipo: "pelicula", titulo, anio: 2026, clasificacion: "TP", imagen, ...son(num), top10: num < 10,
    sinopsis, creditos: cred(num, ...(extra.creditos || [])),
    episodios: [{ titulo, duracion, descripcion, escenas, recompensa, ...(extra.interaccion ? { interaccion: extra.interaccion } : {}) }]
  });

  const temporadas = [
    /* =================== PELÍCULAS =================== */
    peli(0, "Para Mi Princesa", fo("pastel-carino"),
      "Una carta de Pedro para Ruby. Lo que siente, lo que agradece y lo que sueña a su lado.", 126,
      "Todo lo que quiero decirte, en una sola película.",
      [
        V("princesa", "Ruby, mi princesa:", "este regalo es para ti."),
        Fo("abrazo-blanco", "Quise juntar nuestras fotos", "para decirte lo que a veces no me sale en palabras."),
        Fo("sillon-abrazo", "Desde que estás en mi vida,", "todo se siente más bonito."),
        V("rb07", "Contigo aprendí", "que el amor también es calma."),
        Fo("blanco-ramo", "Gracias por tu cariño,", "por tu paciencia y por tu forma de cuidarme."),
        Fo("familia-brazos", "Gracias por cada momento", "que vivimos en familia."),
        V("fecha", "Hay fechas que se quedan para siempre,", "y lugares que ya son nuestros."),
        Fo("sillon-risas", "Me encanta verte reír.", "Es mi sonido favorito."),
        Fo("pastel-carino", "Quiero seguir a tu lado,", "cumpliendo cada sueño que tenemos."),
        V("corazon", "Te amo, Ruby.", "Hoy, mañana y siempre. 🤍")
      ],
      "Cupón: una cena solo para los dos, tú eliges el lugar 🍽️"),

    peli(1, "Así Como Eres", fo("ruby-rojo"),
      "Tu sonrisa, tu mirada y tu forma de ser. Una película sobre lo perfecta que eres para mí.", 100,
      "No cambiaría nada de ti.",
      [
        V("rb01", "Así como eres,", "así te amo."),
        Fo("ruby-rojo", "Hermosa de rojo,", "hermosa de blanco, hermosa siempre. ❤️"),
        Fo("selfie-nina", "Tu ternura", "se nota hasta en una foto."),
        V("n16", "Tu mirada", "me desarma."),
        Fo("blanco-ramo-3", "Tu sonrisa", "ilumina cualquier lugar."),
        Fo("sillon-mirada", "Tu forma de abrazar", "me hace sentir en casa."),
        V("encuentro", "Cuando te veo,", "el mundo se detiene."),
        Fo("pastel-sonrisa", "Eres única,", "y eres mía."),
        V("princesa", "Así como eres:", "mi princesa. 👑")
      ],
      "Cupón: una tarde de consentirte en todo lo que quieras 💆‍♀️",
      { interaccion: {
          tipo: "completar", frase: "Para Pedro, tú eres su ___",
          opciones: ["princesa", "vecina", "jefa de cocina"], correcta: 0,
          ok: "Exacto: su princesa. Hoy y siempre. 👑"
      } }),

    peli(2, "Tejupilco, 14 de Septiembre", fo("flores-princesa"),
      "Un ramo de flores rojas con un listón que lo decía todo: Para mi princesa.", 100,
      "El día de las flores rojas.",
      [
        V("fecha", "Tejupilco.", "14 de septiembre."),
        Fo("flores-princesa", "Flores rojas", "con un listón que lo decía todo. 🌹"),
        V("encuentro", "Para mi princesa:", "porque eso eres para mí."),
        Fo("ramo-rosa", "Me encanta llenarte de flores", "y verte sonreír."),
        V("esc16", "Tu mano en las flores,", "mi corazón en tus manos."),
        Fo("blanco-ramo-4", "Cada flor", "es un te amo que no cabe en palabras."),
        V("rb02", "Y siempre voy a buscar", "una razón para regalarte flores."),
        Fo("pastel-ramo", "Porque mereces", "todas las flores del mundo."),
        V("atardecer", "Gracias por dejarme", "consentirte. 🌹")
      ],
      "Cupón: un ramo de flores sorpresa 💐",
      { interaccion: {
          tipo: "quiz", pregunta: "¿En qué lugar quedaron guardadas las flores «Para mi princesa»?",
          opciones: ["Tejupilco", "Toluca", "Acapulco"], correcta: 0,
          ok: "¡Sí! Tejupilco, 14 de septiembre. 🌹"
      } }),

    peli(3, "Vestidos de Blanco", fo("blanco-ramo-2"),
      "Ropa blanca, flores rosas y un pastel en la mesa. Una película sobre un día para celebrar juntos.", 110,
      "Un día de fiesta a tu lado.",
      [
        Fo("blanco-ramo", "Vestidos de blanco,", "los dos."),
        V("rb04", "Contigo cualquier celebración", "es más bonita."),
        Fo("abrazo-blanco-2", "Abrazarte así", "es mi lugar favorito."),
        Fo("pastel-miradas", "Esa forma en que nos miramos", "lo dice todo."),
        V("rb05", "Flores, pastel", "y tú a mi lado."),
        Fo("blanco-ramo-5", "Te veías hermosa,", "como siempre."),
        Fo("pastel-cerca", "Cerquita de ti,", "donde quiero estar."),
        V("rb08", "Ojalá todos los días", "fueran una fiesta contigo."),
        Fo("blanco-ramo-2", "Tú y yo:", "el mejor equipo."),
        V("rb09", "Y que vengan muchas celebraciones", "más. 🎉")
      ],
      "Cupón: una salida a bailar, tú y yo 💃"),

    peli(4, "Mi Lugar Favorito", fo("sillon-juntos"),
      "No hace falta ir lejos. Mi lugar favorito es a tu lado, aunque sea en el sillón de la casa.", 94,
      "En casa contigo.",
      [
        Fo("sillon-abrazo", "Mi lugar favorito", "no está en un mapa."),
        V("esc19", "Está aquí,", "a tu lado."),
        Fo("sillon-juntos", "Un sillón,", "tú y yo. No necesito más."),
        V("cotidiano", "Me encantan los días sencillos", "contigo."),
        Fo("sillon-risas", "Tus risas", "llenan la casa."),
        V("n23", "Tus abrazos", "me recargan el alma."),
        Fo("sillon-mirada", "Contigo hasta el silencio", "es bonito."),
        V("cafe", "Un café, una plática,", "y tú."),
        V("esc11", "Mi casa", "eres tú. 🏡")
      ],
      "Cupón: una tarde de películas y abrazos en el sillón 🍿"),

    peli(5, "Mi Nombre Cerca de Tu Corazón", fo("collar-pedro"),
      "Un collar con un medio corazón y mi nombre. Una película sobre lo que nos une.", 100,
      "Lo que llevas cerca de tu corazón.",
      [
        Fo("collar-pedro", "Medio corazón", "con mi nombre."),
        Fo("collar", "Y lo llevas", "cerquita de tu corazón."),
        V("esc16", "Porque somos dos mitades", "que se encontraron."),
        Fo("pastel-ternura", "Gracias por llevarme contigo", "a todas partes."),
        V("n54", "Yo también te llevo", "conmigo, siempre."),
        Fo("abrazo-blanco", "Tú tienes mi nombre,", "y yo tengo tu corazón."),
        V("corazon", "Dos mitades,", "un solo amor."),
        Fo("sillon-abrazo", "Juntos", "estamos completos. 💛")
      ],
      "Cupón: un detalle sorpresa elegido solo para ti 🎁",
      { interaccion: {
          tipo: "quiz", pregunta: "¿Qué nombre lleva el medio corazón de tu collar?",
          opciones: ["Pedro", "Amor", "Ruby"], correcta: 0,
          ok: "¡Exacto! Pedro, cerquita de tu corazón. 💛"
      } }),

    peli(6, "Nuestra Familia", fo("familia-tres"),
      "Una sonrisa pequeña, vestidos rosas y abrazos que no se sueltan. Una película sobre lo más bonito que tenemos.", 118,
      "Lo más bonito que tengo.",
      [
        V("familia", "Lo más bonito que tengo", "es esta familia."),
        Fo("familia-brazos", "Cargarla en brazos", "y tenerte a mi lado. 💕"),
        Fo("familia-tres", "Así se ve", "la felicidad."),
        Fo("selfie-nina", "Tu amor de mamá", "es de lo más bonito que he visto."),
        Fo("familia-tres-2", "Los tres juntos,", "como debe ser."),
        V("n71", "Días de juego,", "días de risas."),
        Fo("familia-brazos-2", "Gracias por dejarme", "ser parte de su mundo."),
        V("final-prueba", "Quiero ver crecer", "todo lo que estamos construyendo."),
        Fo("familia-tres-3", "Familia:", "nuestro mejor proyecto."),
        Fo("familia-brazos-3", "Las amo", "con todo mi corazón. 🤍")
      ],
      "Cupón: un día de paseo en familia, ustedes eligen el plan 🎡"),

    peli(7, "Un 10 de 10", fo("gato-diez"),
      "Hay calificaciones que no se discuten. Una película divertida sobre por qué eres un 10.", 104,
      "Calificación perfecta.",
      [
        V("diez", "Eres un 10 de 10,", "y no acepto discusiones."),
        Fo("gato-diez", "Como la fecha de hoy:", "un 10/10. 🐱🌹"),
        Fo("ruby-rojo", "10 en belleza.", "❤️"),
        Fo("sillon-risas", "10 en hacerme reír.", "😂"),
        V("risas-juntos", "10 en ocurrencias", "y travesuras."),
        Fo("familia-tres", "10 en amor de familia.", "💕"),
        Fo("abrazo-blanco-2", "10 en abrazos.", "🤗"),
        V("baile", "10 en alegrarme", "los días."),
        Fo("pastel-sonrisa", "Promedio final:", "perfecta. 💯")
      ],
      "Cupón: un antojo que tú elijas, sin preguntar 🍰",
      { interaccion: {
          tipo: "adivinanza",
          texto: "Es la calificación que te pongo en belleza, en risas, en abrazos y en todo lo demás. ¿Cuál es?",
          respuestas: ["10", "diez", "10/10", "10 de 10", "un 10", "diez de diez"],
          pista: "Es un número de dos cifras. El más alto.",
          ok: "¡Exacto! Un 10 de 10. 💯"
      } }),

    peli(8, "Feliz Día, Mi Cielo", fo("ramo-rosa"),
      "Tú también sabes consentir. Una película para agradecerte cada detalle.", 76,
      "Gracias por tus detalles.",
      [
        V("rb10", "«Feliz Día del Novio, mi cielo»:", "nunca voy a olvidar ese detalle."),
        V("rb11", "Tú también sabes", "llenarme de flores. 💙"),
        Fo("pastel-cerca", "Gracias por pensar en mí", "y por cuidarme así."),
        V("esc03", "Tus detalles", "me enamoran todos los días."),
        Fo("sillon-juntos", "Me haces sentir", "el hombre más afortunado."),
        V("corazon", "Gracias, mi cielo.", "💙")
      ],
      "Cupón: yo te consiento a ti, todo un día 💙"),

    peli(9, "Lo Que Sueño Contigo", fo("pastel-juntos"),
      "Metas, planes y un futuro juntos. Una película sobre todo lo que viene.", 88,
      "Nuestros sueños.",
      [
        V("n73", "Sueño con un futuro", "a tu lado."),
        Fo("pastel-carino", "Sueño con seguir abrazándote", "así, todos los días."),
        V("viaje-juntos", "Sueño con conocer lugares nuevos", "de tu mano."),
        Fo("familia-brazos-3", "Sueño con ver crecer", "a nuestra familia."),
        V("esc05", "Sueño con llenar el calendario", "de fechas para celebrar."),
        Fo("blanco-ramo-4", "Y sueño con que siempre", "sonrías como hoy."),
        V("atardecer", "Todo lo que sueño", "tiene tu nombre. ✨")
      ],
      "Cupón: planear juntos nuestra próxima aventura 🗺️",
      { interaccion: {
          tipo: "codigo", modo: "fecha",
          pregunta: "Código secreto: el día y el mes de las flores «Para mi princesa»",
          placeholder: "DDMM",
          respuestas: ["1409"],
          pista: "Fue en Tejupilco, en septiembre. Día 14.",
          ok: "Código aceptado: 14 de septiembre. 🌹"
      } }),

    peli(10, "Ruby", fo("ruby-rojo"),
      "Su nombre es una piedra preciosa. Una película sobre la mujer increíble que es.", 80,
      "Una joya de mujer.",
      [
        Fo("ruby-rojo", "Ruby:", "tu nombre es una piedra preciosa."),
        V("rb01", "Y tú eres", "mi joya más valiosa. 💎"),
        Fo("selfie-nina", "Fuerte, tierna", "y valiente."),
        V("n61", "Admiro todo lo que haces", "y todo lo que eres."),
        Fo("blanco-ramo-5", "Estoy orgulloso", "de ti."),
        V("princesa", "Ruby,", "mi princesa. 👑")
      ],
      "Cupón: un día de spa en casa, todo para ti 🛁"),

    peli(11, "Toda Una Vida", fo("abrazo-blanco"),
      "Lo que empezó con flores, se queda para siempre. Una película sobre la promesa de seguir juntos.", 78,
      "Para siempre.",
      [
        V("n54", "Quiero caminar contigo", "toda la vida."),
        Fo("abrazo-blanco", "Abrazarte en los días buenos", "y en los difíciles."),
        V("rb07", "Cuidarte,", "respetarte y hacerte feliz."),
        Fo("familia-tres-2", "Construir juntos", "nuestro hogar."),
        V("final-prueba", "Y llegar a viejitos", "tomados de la mano."),
        Fo("sillon-abrazo", "Toda una vida", "contigo. 💍")
      ],
      "Cupón: una promesa escrita a mano, para guardarla siempre 💌",
      { interaccion: {
          tipo: "ordenar", titulo: "Ordena nuestra historia",
          eventos: [
            "Te conocí",
            "Me enamoré de ti",
            "Te regalé flores «Para mi princesa»",
            "Hoy te regalo esta historia",
            "Lo que viene: toda una vida juntos"
          ],
          ok: "Línea del tiempo perfecta. 💕"
      } }),

    /* =================== SERIES =================== */
    {
      num: 12, tipo: "serie", titulo: "Los Detalles", anio: 2026, clasificacion: "TP",
      imagen: fo("pastel-ramo"), ...son(12), top10: true,
      sinopsis: "Flores, un collar y un pastel. Una serie sobre los pequeños detalles que hacen grande nuestro amor.",
      creditos: cred(12, ["Guion", "Los pequeños detalles"]),
      episodios: [
        {
          titulo: "Las Flores", duracion: 72, descripcion: "Un ramo para mi princesa.",
          escenas: [
            Fo("flores-princesa", "Flores rojas", "para mi princesa. 🌹"),
            V("rb02", "Flores rosas", "para celebrar."),
            Fo("ramo-rosa", "Y todas las que faltan", "por regalarte."),
            V("encuentro", "Porque cada flor", "lleva un te amo."),
            Fo("blanco-ramo-3", "Siempre habrá flores", "para ti. 💐")
          ],
          recompensa: "Cupón: una flor cada semana durante un mes 🌷"
        },
        {
          titulo: "El Collar", duracion: 72, descripcion: "Medio corazón.",
          escenas: [
            Fo("collar-pedro", "Mi nombre", "en un medio corazón."),
            V("esc16", "Dos mitades", "que se encontraron."),
            Fo("collar", "Cerquita de tu corazón,", "donde quiero estar."),
            V("n23", "Y cerquita del mío", "estás tú."),
            Fo("pastel-ternura", "Juntos", "somos un corazón completo. 💛")
          ],
          recompensa: "Cupón: un abrazo largo, de esos que lo dicen todo 🤗"
        },
        {
          titulo: "El Pastel", duracion: 72, descripcion: "Un día dulce.",
          escenas: [
            V("rb06", "Un pastel en la mesa,", "flores en tus brazos."),
            Fo("pastel-mesa", "Y yo,", "mirándote a ti."),
            Fo("pastel-perfil", "Los días dulces", "son mejores contigo."),
            V("rb09", "Ojalá vengan", "muchos días así."),
            Fo("pastel-mesa-2", "Contigo la vida", "sabe más dulce. 🎂")
          ],
          recompensa: "Cupón: tu postre favorito, cuando tú quieras 🍰"
        }
      ]
    },
    {
      num: 13, tipo: "serie", titulo: "Razones Para Amarte", anio: 2026, clasificacion: "TP",
      imagen: fo("sillon-risas"), ...son(13), top10: true,
      sinopsis: "Tu risa, tu ternura y tu fuerza. Una serie con algunas de las mil razones por las que te amo.",
      creditos: cred(13, ["Guion", "Mil razones"]),
      episodios: [
        {
          titulo: "Tu Risa", duracion: 72, descripcion: "Razón número uno.",
          escenas: [
            Fo("sillon-risas", "Razón número uno:", "tu risa."),
            V("risas-juntos", "Me encanta", "hacerte reír."),
            Fo("sillon-mirada", "Y me encanta más", "cuando te ríes conmigo."),
            V("baile", "Tu alegría", "es contagiosa."),
            Fo("pastel-sonrisa", "Nunca dejes", "de sonreír. 😊")
          ],
          recompensa: "Cupón: una noche de chistes malos y risas 😂"
        },
        {
          titulo: "Tu Ternura", duracion: 72, descripcion: "Razón número dos.",
          escenas: [
            Fo("selfie-nina", "Razón número dos:", "tu ternura."),
            V("esc19", "La forma en que", "cuidas a los que amas."),
            Fo("familia-tres", "Tu corazón", "es enorme."),
            V("n42", "Y tu cariño", "me calienta el alma."),
            Fo("sillon-abrazo", "Gracias por ser", "tan tierna conmigo. 🥰")
          ],
          recompensa: "Cupón: un desayuno en la cama ☕"
        },
        {
          titulo: "Tu Fuerza", duracion: 72, descripcion: "Razón número tres.",
          escenas: [
            Fo("ruby-rojo", "Razón número tres:", "tu fuerza."),
            V("n61", "Eres valiente", "y luchona."),
            Fo("blanco-ramo-5", "Admiro cómo sales adelante", "con todo."),
            V("esc11", "Contigo a mi lado", "puedo con todo."),
            Fo("abrazo-blanco-2", "Te amo", "por todo lo que eres. 💪❤️")
          ],
          recompensa: "Cupón: un masaje de pies sin quejas 💆‍♀️"
        }
      ]
    },
    {
      num: 14, tipo: "serie", titulo: "Lo Que Viene", anio: 2026, clasificacion: "TP",
      imagen: fo("blanco-ramo-2"), ...son(14), top10: true,
      sinopsis: "Metas, familia y un para siempre. Una serie sobre todo lo que vamos a vivir juntos.",
      creditos: cred(14, ["Guion", "Nuestro futuro"]),
      episodios: [
        {
          titulo: "Nuestras Metas", duracion: 72, descripcion: "Lo que vamos a lograr.",
          escenas: [
            V("n73", "Tenemos muchas metas", "por cumplir."),
            Fo("pastel-juntos", "Y las vamos a lograr", "juntos."),
            V("viaje-juntos", "Paso a paso,", "de la mano."),
            Fo("abrazo-blanco", "Contigo", "todo es posible."),
            V("esc05", "Lo mejor", "está por venir. ✨")
          ],
          recompensa: "Cupón: una noche para escribir juntos nuestras metas 📝"
        },
        {
          titulo: "Nuestro Hogar", duracion: 72, descripcion: "Lo que estamos construyendo.",
          escenas: [
            V("familia", "Nuestra familia", "es lo más bonito."),
            Fo("familia-brazos-2", "Quiero cuidarla", "todos los días."),
            V("cotidiano", "Llenar la casa", "de risas y de amor."),
            Fo("familia-tres-3", "Y que nunca nos falte", "un abrazo."),
            Fo("sillon-juntos", "Nuestro hogar", "somos nosotros. 🏡")
          ],
          recompensa: "Cupón: un domingo en familia, sin pendientes 🧺"
        },
        {
          titulo: "Para Siempre", duracion: 72, descripcion: "El final de la temporada, no de la historia.",
          escenas: [
            V("n54", "Lo que viene", "lo quiero vivir contigo."),
            Fo("blanco-ramo-2", "Hoy, mañana", "y siempre."),
            V("final-prueba", "Tú y yo,", "toda la vida."),
            V("princesa", "Mi princesa,", "te amo."),
            V("corazon", "Ahora ve a", "El Final. 🤍")
          ],
          recompensa: "Ya puedes ver: EL FINAL 🔴"
        }
      ]
    }
  ];

  /* 6. DETRÁS DE CÁMARAS */
  const extras = [
    { titulo: "Casting", img: fo("ruby-rojo"), texto: "La protagonista de esta historia siempre fuiste tú, mi princesa." },
    { titulo: "Locaciones", img: fo("flores-princesa"), texto: "Tejupilco, una fiesta de blanco y el sillón de la casa. Cada lugar es mejor contigo." },
    { titulo: "Banda sonora", img: fo("sillon-risas"), texto: "Elvis Presley · Bruno Mars · Rita Ora · Belanova · Morat · One Direction · LANY · Taylor Swift" },
    { titulo: "Escenas eliminadas", img: fo("pastel-miradas"), texto: "Las mejores escenas no se grabaron: se vivieron. Y las guardo en mi corazón." }
  ];

  /* 7. TEMPORADA FINAL */
  const final = {
    titulo: "El Final: Tus Palabras",
    sinopsis: `Después de 12 películas y 3 series, este espacio es para ti.`,
    imagen: F.final,
    preguntas: [
      "¿Cuál es tu película o serie favorita de este regalo y por qué?",
      "¿Cuál es tu recuerdo favorito conmigo?",
      "¿Qué es lo que más te gusta de nosotros?",
      "¿Qué sueño te gustaría que cumpliéramos juntos?",
      `¿Hay algo que quieras decirle a ${P.nombreA}? Escríbelo con calma.`
    ],
    carta: (r) =>
`Para mi princesa, Ruby:

Llegaste al final del catálogo, pero no al final de nuestra historia.

Dices que tu título favorito es "${r[0]}". El mío es cualquiera en el que sales tú.

Tu recuerdo favorito: ${r[1]}. Yo también lo guardo en el corazón.

Lo que más te gusta de nosotros: ${r[2]}. Gracias por regalarme eso.

El sueño que quieres que cumplamos: ${r[3]}. Te prometo que vamos a ir por él, juntos.

${P.mensajeFinal}

Tuyo, siempre,
${P.nombreA} 🤍`
  };

  /* 8. CRÉDITOS Y POST-CRÉDITOS */
  const creditos = [
    ["Una producción original de", P.nombreA],
    ["Protagonizada por", P.nombreB],
    ["Coprotagonista", P.nombreA],
    ["Locación especial", "Tejupilco, 14 de septiembre"],
    ["Dirección", "El corazón de Pedro"],
    ["Guion", "Nuestros momentos juntos"],
    ["Banda sonora", "Elvis Presley · Bruno Mars · Rita Ora · Belanova · Morat · One Direction · LANY · Taylor Swift"],
    ["Efectos especiales", "Tu sonrisa"],
    ["Vestuario", "De blanco, los dos"],
    ["Dobles de riesgo", "Ninguno. Todo fue real."],
    ["Agradecimientos especiales", "A ti, por tu amor, tus detalles y nuestra familia"],
    ["", "Ningún sentimiento fue fingido durante la filmación de estas películas y series."],
    ["", `© ${new Date().getFullYear()} ${P.nombreA}. Todos los derechos reservados (para nosotros).`]
  ];

  const postCreditos = {
    imagen: F.postCreditos,
    etiqueta: "ESCENA POST-CRÉDITOS",
    texto: "Esta historia apenas va empezando…",
    anuncio: "Nueva temporada confirmada",
    subtitulo: "Muy pronto, en nuestra vida juntos. 🤍",
    sorpresa: "Te amo, mi princesa 👑"
  };

  // Paquete de $199: 6 retos de las películas + memorama de fotos = 7 juegos
  const arcades = ["memory"];

  return { pareja: P, fotos: F, media: M, acceso, notificacion, sitio, temporadas, extras, final, creditos, postCreditos, arcades };
})();

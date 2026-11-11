/* =====================================================================
   TEMPORADAS DE NOSOTROS — Alberto y Vanesa
   Paquete Nuestro Capítulo ($79): 4 películas, 1 serie (3 episodios), 1 juego (memorama).
   Sin fecha de aniversario. Contraseña: 1211 (cumpleaños de su hija, 12 de noviembre).
   Película 0 lleva el mensaje del cliente tal cual. Canciones recortadas antes del clímax.
   Relleno: clips de ../comun/medios (ver plantilla/CREDITOS-VIDEO.txt).
   ===================================================================== */
window.TDN = (function () {

  /* 1. DATOS DE LA PAREJA */
  const P = {
    nombreA: "Alberto",
    nombreB: "Vanesa",
    apodos: ["Vanesa"],
    fechaInicio: "2026-11-12",        // Solo para el año del pie de página (no dieron aniversario)
    aniosManual: 1,
    ciudad: "",
    primeraCita: "",
    cancion: "20 Años",
    artista: "Paco Silva",
    viajes: [],
    dificiles: [],
    anecdota: "",
    culpableAnecdota: 0,
    gustosB: [],
    suenos: ["Seguir juntos pase lo que pase", "Ver a nuestra hija cumplir sus sueños", "Muchos viajes y noches de luces más"],
    mensajeFinal: "Hemos pasado por muchas dificultades, pero al final estamos juntos. Gracias por no rendirte, por nuestra hija y por cada día a mi lado. Mañana ella cumple 14 años y no puedo estar más orgulloso de la familia que formamos contigo. Te amo, Vanesa."
  };
  const inicio = new Date(P.fechaInicio + "T00:00:00");
  P.anioInicio = inicio.getFullYear();
  P.anios = P.aniosManual || 1;
  P.fechaCodigo = "";
  P.apodo = P.apodos[0];

  /* 2. FOTOS */
  const fo = (n) => "assets/fotos/" + n + ".webp";
  const F = {
    hero: fo("rueda-noche"),
    perfilB: fo("perfil-vanesa"),
    perfilPareja: fo("perfil-pareja"),
    // t0..t5 también son las cartas del memorama de fotos
    t0: fo("foto-2009"), t1: fo("familia-jardin"), t2: fo("lentes-oscuros"),
    t3: fo("fuente-palacio"), t4: fo("fiesta-luces"), t5: fo("chicago"),
    t6: fo("familia-fuente"), t7: fo("selfie-luces"),
    final: fo("familia-camioneta"),
    puzzle: fo("rueda-noche"),
    puzzle2: "",
    postCreditos: fo("familia-animada")
  };

  /* 3. AUDIO / VIDEO (cada canción empieza poco antes de su clímax) */
  const M = {
    intro: "../comun/medios/audio/intro.mp3",
    temporadas: [
      "assets/audio/veinte-anos.mp3",
      "assets/audio/la-rosa.mp3",
      "assets/audio/eres-toda-una-mujer.mp3",
      "assets/audio/yo-no-se-manana.mp3",
      "assets/audio/lovefool.mp3"
    ],
    canciones: [
      "20 Años · Paco Silva",
      "La Rosa",
      "Eres Toda una Mujer · Los Hunters",
      "Yo No Sé Mañana · Luis Enrique",
      "Lovefool · The Cardigans"
    ],
    musica: "",
    videoFinal: "assets/video/luces-calle.mp4",
    audioRemitente: ""
  };

  /* 4. ACCESO Y NOTIFICACIÓN */
  const acceso = {
    demo: false,
    cualquierClave: false,
    password: "1211",
    pistaPassword: "El cumpleaños de nuestra hija: día y mes (DDMM)",
    estreno: ""
  };

  const notificacion = { whatsapp: "", email: "", endpoint: "" };

  const sitio = {
    url: new URL("./", location.href).href,
    coincidencia: 100,
    clasificacion: "+13",
    clasificacionTexto: "Romance, familia y segundas oportunidades",
    heroTag: "ESTRENO ESPECIAL",
    heroTop: "N.º 1 en el corazón de Alberto",
    sinopsis: `Pasaron por muchas dificultades, pero al final siguen juntos, con una hija que los llena de orgullo. ` +
              `4 películas y 1 serie originales para ti, ${P.nombreB}.`,
    estrenoTexto: `4 películas y 1 serie originales para ${P.nombreB}`,
    generos: ["Romántica", "Familiar", "Basada en hechos reales"],
    filaRecomendada: "A pesar de todo"
  };

  /* 5. PELÍCULAS Y SERIES */
  const S = (src, a, b) => {
    const video = /\.mp4$/.test(src);
    const base = (video ? "assets/video/" : "assets/fotos/v/") + src; // fotos de escena en versión vertical completa
    return video ? { img: base, poster: base.replace(/\.mp4$/, ".webp"), texto: [a, b] } : { img: base, texto: [a, b] };
  };
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
  const cred = (...extra) => [["Protagonizada por", `${P.nombreB} y ${P.nombreA}`], ...extra, ["Dirección", "La vida, que nunca nos soltó"]];

  const temporadas = [
    /* =================== PELÍCULAS =================== */
    {
      num: 0, tipo: "pelicula", titulo: "A Pesar de Todo", anio: 2026, clasificacion: "TP",
      imagen: F.t0, ...son(0), top10: true,
      sinopsis: "Muchas dificultades, un amor que no se rindió y una hija que los llena de orgullo. Nuestra historia, contada por Alberto.",
      creditos: cred(["Historia original", P.nombreA], ["Banda sonora", M.canciones[0]]),
      episodios: [{
        titulo: "A Pesar de Todo", duracion: 95,
        descripcion: "Hemos pasado por muchas dificultades, pero al final estamos juntos.",
        escenas: [
          S("foto-2009.webp", "Esta historia viene de lejos…", "y todavía la seguimos escribiendo."),
          E(46, "Pues hemos pasado", "por muchas dificultades,"),
          S("lentes-oscuros.webp", "pero al final", "estamos juntos."),
          S("familia-camioneta.webp", "Tenemos una linda hija", "que de hecho mañana 12 cumple 14 años."),
          S("papa-hija-tienda.mp4", "Estamos orgullosos de ella.", ""),
          E(65, "Nada de lo que vivimos fue en vano:", "cada tropiezo nos hizo más fuertes."),
          S("rueda-noche.webp", "Y aquí seguimos, Vanesa,", "mirando juntos hacia adelante."),
          S("fiesta-luces.webp", "Gracias por no soltarme la mano", "cuando todo se puso difícil."),
          S("selfie-luces.webp", "A pesar de todo,", "te sigo eligiendo a ti. ❤️")
        ],
        recompensa: "Cupón: una cena solo para nosotros dos 🍽️"
      }]
    },
    {
      num: 1, tipo: "pelicula", titulo: "Catorce Años de Orgullo", anio: 2026, clasificacion: "TP",
      imagen: F.t1, ...son(1), top10: true,
      sinopsis: "El 12 de noviembre nuestra hija cumple 14 años. Una película para ella, para ti y para la familia que formamos.",
      creditos: cred(["Coprotagonista", "Nuestra hija"], ["Banda sonora", M.canciones[1]]),
      episodios: [{
        titulo: "Catorce Años de Orgullo", duracion: 90,
        descripcion: "Mañana cumple 14 años y estamos orgullosos de ella.",
        escenas: [
          S("familia-jardin.webp", "Hace 14 años la vida nos dio", "el regalo más bonito."),
          S("alberca-hija.mp4", "La vimos crecer entre risas,", "juegos y chapuzones."),
          S("mama-hija-risas.mp4", "Tú le enseñaste a reír así,", "con todo el corazón."),
          S("papa-hija-tienda.mp4", "Y hoy ya es toda una señorita.", ""),
          S("familia-fuente.webp", "Este 12 de noviembre", "cumple 14 años."),
          S("familia-camioneta.webp", "Estamos orgullosos de ella", "y de lo que hemos formado juntos."),
          E(18, "Gracias por ser la mamá que eres:", "su ejemplo y su lugar seguro."),
          S("familia-animada.webp", "Ella, tú y yo:", "nuestra familia, nuestro mejor logro. 🎂")
        ],
        recompensa: "Cupón: un pastel para celebrarla los tres juntos 🎂"
      }]
    },
    {
      num: 2, tipo: "pelicula", titulo: "Toda una Mujer", anio: 2026, clasificacion: "TP",
      imagen: F.t2, ...son(2), top10: true,
      sinopsis: "Fuerte, dulce y valiente. Una película sobre la mujer que hace feliz a Alberto.",
      creditos: cred(["Banda sonora", M.canciones[2]]),
      episodios: [{
        titulo: "Toda una Mujer", duracion: 85,
        descripcion: "Eres toda una mujer, y me has hecho tan feliz.",
        escenas: [
          S("lentes-oscuros.webp", "Eres toda una mujer,", "y me has hecho tan feliz."),
          S("fiesta-luces.webp", "Fuerte cuando hace falta,", "dulce cuando más lo necesito."),
          S("chicago.webp", "Contigo cualquier calle", "se vuelve una aventura."),
          S("rueda-noche.webp", "Desde lo más alto", "lo sigo diciendo: te elijo a ti."),
          S("sombrero.webp", "Contigo hasta los días normales", "se vuelven fiesta."),
          S("fuente-palacio.webp", "Todo ha cambiado dentro de mí", "desde que estás conmigo."),
          S("selfie-luces.webp", "Y cuando alguien me pregunte, le diré:", "eres toda una mujer. ❤️")
        ],
        recompensa: "Cupón: un día completo dedicado solo a ti 💐"
      }]
    },
    {
      num: 3, tipo: "pelicula", titulo: "Noches de Luces", anio: 2026, clasificacion: "TP",
      imagen: F.t3, ...son(3), top10: true,
      sinopsis: "Luces, paseos, albercas de noche y alguna que otra locura. Porque los momentos hay que vivirlos.",
      creditos: cred(["Banda sonora", M.canciones[3]], ["Locaciones", "Donde nos llevó el camino"]),
      episodios: [{
        titulo: "Noches de Luces", duracion: 90,
        descripcion: "No sé lo que traiga mañana, pero quiero vivirlo contigo.",
        escenas: [
          S("luces-calle.mp4", "Esta noche estamos vivos…", "y los momentos hay que vivirlos."),
          S("selfie-luces.webp", "Luces, música y tú a mi lado:", "no necesito más."),
          S("rio-luces.mp4", "Cada paseo contigo", "es un recuerdo que guardo."),
          S("alberca-noche.mp4", "Risas bajo el agua,", "en familia."),
          S("gorila.mp4", "Y sí… también las locuras", "que solo hacemos juntos. 😂"),
          S("rueda-noche.webp", "No sé lo que traiga mañana,", "pero quiero vivirlo contigo."),
          S("alberca-noche-2.mp4", "Que nunca nos falten", "noches como estas."),
          E(69, "Lo mejor de cada viaje", "es vivirlo contigo. ✨")
        ],
        recompensa: "Cupón: una salida nocturna, tú eliges a dónde ✨"
      }]
    },

    /* =================== SERIE =================== */
    {
      num: 4, tipo: "serie", titulo: "Quiéreme Siempre", anio: 2026, clasificacion: "TP",
      imagen: F.t4, ...son(4), top10: true,
      sinopsis: "Lo que vivimos, lo que te agradezco y lo que viene. Una serie corta sobre nosotros.",
      creditos: cred(["Guion", "Aún en proceso (y con final feliz)"], ["Banda sonora", M.canciones[4]]),
      episodios: [
        {
          titulo: "Lo Que Vivimos", duracion: 66,
          descripcion: "Hubo días difíciles, pero aquí seguimos.",
          escenas: [
            E(51, "Hubo días pesados,", "de esos que parecen no terminar."),
            E(24, "Pero siempre encontramos la manera", "de volver a tomarnos de la mano."),
            S("foto-2009.webp", "Lo que empezó hace tiempo", "sigue de pie."),
            S("chicago.webp", "Seguimos aquí,", "más unidos que nunca."),
            S("fiesta-luces.webp", "Y eso, Vanesa,", "no lo cambio por nada.")
          ],
          recompensa: "Cupón: un abrazo largo cada vez que lo pidas 🤗"
        },
        {
          titulo: "Gracias", duracion: 66,
          descripcion: "Todo lo que quiero agradecerte.",
          escenas: [
            S("familia-jardin.webp", "Gracias por nuestra hija,", "por cuidarla y amarla tanto."),
            S("lentes-oscuros.webp", "Gracias por tu paciencia", "en los días difíciles."),
            E(65, "Gracias por quedarte", "cuando hubiera sido más fácil rendirse."),
            S("familia-camioneta.webp", "Gracias por cada viaje,", "cada risa y cada abrazo."),
            S("fuente-palacio.webp", "Gracias por ser mi compañera", "de vida.")
          ],
          recompensa: "Cupón: desayuno en la cama, preparado por mí ☕"
        },
        {
          titulo: "Lo Que Viene", duracion: 66,
          descripcion: "Pase lo que pase, juntos.",
          escenas: [
            E(54, "Quiero seguir construyendo", "una vida a tu lado."),
            S("papa-hija-tienda.mp4", "Quiero verla cumplir sus sueños", "y celebrar cada logro juntos."),
            E(36, "Quiero más viajes", "y más noches de luces contigo."),
            E(73, "Quiero envejecer contigo,", "pase lo que pase."),
            S("selfie-luces.webp", "Esta historia sigue, Vanesa.", "Ahora te toca a ti: ve a El Final. ❤️")
          ],
          recompensa: "Ya puedes ver: EL FINAL 🔴"
        }
      ]
    }
  ];

  /* 6. DETRÁS DE CÁMARAS */
  const extras = [
    { titulo: "Casting", img: fo("perfil-pareja"), texto: "El papel principal siempre fue tuyo, Vanesa." },
    { titulo: "Locaciones", img: fo("rueda-noche"), texto: "Calles llenas de luces, albercas de noche y todos los lugares a donde fuimos juntos." },
    { titulo: "Banda sonora", img: fo("fiesta-luces"), texto: M.canciones.join(" · ") },
    { titulo: "Elenco de lujo", img: fo("familia-jardin"), texto: "Nuestra hija, la coprotagonista que nos llena de orgullo." },
    { titulo: "Escenas eliminadas", img: fo("chicago"), texto: "Hay escenas que solo existen para nosotros. Y así se quedan." }
  ];

  /* 7. TEMPORADA FINAL */
  const final = {
    titulo: "El Final: Tu Turno",
    sinopsis: `Después de 4 películas y 1 serie, ${P.nombreB} toma la palabra. En este final, tú escribes el guion.`,
    imagen: F.final,
    preguntas: [
      "¿Cuál es tu película o serie favorita de nuestra historia y por qué?",
      "¿Qué es lo que más te gusta de nuestra familia?",
      "¿Cómo quieres que celebremos los 14 años de nuestra hija?",
      "¿A dónde te gustaría que fuéramos en nuestro próximo viaje?",
      `Escríbele a ${P.nombreA} algo que nunca le hayas dicho.`
    ],
    carta: (r) =>
`Vanesa:

Llegaste al final del catálogo, pero no de la historia.

Dices que tu título favorito es "${r[0]}". El mío es cualquiera en el que sales tú.

Lo que más te gusta de nuestra familia: ${r[1]}. Lo que más me gusta a mí es que la formamos juntos.

Para los 14 años de nuestra hija quieres: ${r[2]}. Trato hecho.

Y el próximo viaje ya tiene destino: ${r[3]}. Vamos a ir.

${P.mensajeFinal}

Con todo mi amor,
Alberto`
  };

  /* 8. CRÉDITOS Y POST-CRÉDITOS */
  const creditos = [
    ["Una producción original de", P.nombreA],
    ["Protagonizada por", P.nombreB],
    ["Coprotagonista", P.nombreA],
    ["Con la participación especial de", "Nuestra hija, que cumple 14 años"],
    ["Dirección", "La vida, que nunca nos soltó"],
    ["Banda sonora", M.canciones.join(" · ")],
    ["Efectos especiales", "Las luces de cada noche juntos"],
    ["Dobles de riesgo", "Ninguno. Todo fue real."],
    ["Motivo del estreno", "Porque a pesar de todo, seguimos juntos"],
    ["Agradecimientos especiales", "A cada dificultad, por hacernos más fuertes"],
    ["", "Ningún corazón fue dañado durante la filmación de estas películas y series."],
    ["", `© ${new Date().getFullYear()} ${P.nombreA} & ${P.nombreB}. Todos los derechos reservados (para nosotros).`]
  ];

  const postCreditos = {
    imagen: F.postCreditos,
    etiqueta: "ESCENA POST-CRÉDITOS",
    texto: `${P.nombreB}… nuestra historia acaba de ser renovada.`,
    anuncio: "Nueva temporada",
    subtitulo: "Próximamente. Y para siempre.",
    sorpresa: "¡Te amo, Vanesa! ❤️"
  };

  // Paquete de $79: solo el memorama de fotos en Juegos
  const arcades = ["memory"];

  return { pareja: P, fotos: F, media: M, acceso, notificacion, sitio, temporadas, extras, final, creditos, postCreditos, arcades };
})();

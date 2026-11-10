/* =====================================================================
   TEMPORADAS DE NOSOTROS — ARCHIVO DE CONFIGURACIÓN
   ---------------------------------------------------------------------
   ÚNICO archivo que hay que editar por cliente.
   - Todo lo que aparece entre corchetes [ASÍ] es un dato [PENDIENTE].
   - Las fotos de cada pedido van en assets/fotos/ dentro de su carpeta (WebP recomendado, 1600px de ancho
     para portadas y 800px para miniaturas). Si una ruta queda vacía ""
     se muestra una portada generada automáticamente.
   - Los textos usan ${P.nombreB}, ${P.ciudad}, etc. para rellenarse solos.
   ===================================================================== */
window.TDN = (function () {

  /* -------------------------------------------------------------
     1. DATOS DE LA PAREJA  [PENDIENTE: reemplazar todo]
     ------------------------------------------------------------- */
  const P = {
    // Datos ficticios de muestra. Editar antes de preparar un pedido real.
    nombreA: "Diego",                 // Quien regala
    nombreB: "Sofía",                 // Quien recibe (protagonista)
    apodos: ["Bonita", "Sofi"],     // El primero se usa en textos; todos valen como respuesta
    fechaInicio: "2021-03-20",        // AAAA-MM-DD (también es la respuesta del código secreto)
    aniosManual: 0,                   // Si quieres forzar los años juntos, pon un número (> 0)
    ciudad: "Guadalajara",            // Ciudad donde se conocieron
    primeraCita: "Café Palermo",
    cancion: "Motivo de estreno",
    artista: "Instrumental de muestra",
    viajes: ["Puerto Vallarta", "Guanajuato", "Cancún"],   // En orden cronológico
    dificiles: ["Los meses a distancia en la pandemia", "La mudanza a una ciudad nueva"],
    anecdota: "Nos quedamos encerrados fuera del depa, en pijama, a las 2 de la mañana",
    culpableAnecdota: 0,              // 0 = A, 1 = B, 2 = "Los dos" (respuesta correcta del quiz de la T6)
    gustosB: ["Café de olla", "Atardeceres", "Series de misterio", "Tacos al pastor"],
    suenos: ["Conocer Japón", "Adoptar un perrito", "Tener nuestra casa"],
    mensajeFinal: "Gracias por elegirme todos los días, incluso los difíciles. Contigo aprendí que el amor no es una película perfecta: es una serie larga, con capítulos chistosos, otros que duelen y muchos que quiero repetir. Esta temporada apenas empieza y no me imagino a nadie más como protagonista. Te amo, Bonita."
  };

  // --- Valores calculados (no tocar) ---
  const inicio = new Date(P.fechaInicio + "T00:00:00");
  P.anioInicio = inicio.getFullYear();
  P.anios = P.aniosManual || Math.max(1, Math.floor((Date.now() - inicio) / 31557600000));
  P.fechaCodigo = String(inicio.getDate()).padStart(2, "0") +
                  String(inicio.getMonth() + 1).padStart(2, "0") + P.anioInicio; // DDMMAAAA
  P.apodo = P.apodos[0];

  /* -------------------------------------------------------------
     2. FOTOS  [PENDIENTE: rutas tipo "../comun/medios/fotos/hero.webp"]
     ------------------------------------------------------------- */
  const F = {
    hero: "../comun/medios/fotos/hero.webp",                   // La foto más significativa (portada principal)
    perfilB: "../comun/medios/fotos/avatar-b.svg",             // Avatar del perfil de B (cuadrado, estilo Netflix)
    perfilPareja: "../comun/medios/fotos/avatar-pareja.svg",   // Avatar "Tú y yo" (cuadrado, estilo Netflix)
    t0: "../comun/medios/fotos/t0.webp", t1: "../comun/medios/fotos/t1.webp", t2: "../comun/medios/fotos/t2.webp",
    t3: "../comun/medios/fotos/t3-concierto.webp", t4: "../comun/medios/fotos/t4.webp", t5: "../comun/medios/fotos/t5.webp",
    t6: "../comun/medios/fotos/t6.webp", t7: "../comun/medios/fotos/t7.webp", final: "../comun/medios/fotos/final.webp",
    puzzle: "../comun/medios/fotos/puzzle.webp",               // Foto para el rompecabezas (cuadrada, mín. 900x900)
    puzzle2: "",
    postCreditos: "../comun/medios/fotos/post-creditos.webp"
  };

  /* -------------------------------------------------------------
     3. AUDIO / VIDEO  [PENDIENTE]
     ------------------------------------------------------------- */
  const M = {
    intro: "../comun/medios/audio/intro.mp3", // Sonido del logo; sustituye este archivo para otro cliente
    // Una pista por título o grupo de títulos. Las rutas pueden apuntar a assets/audio/ del pedido.
    temporadas: ["../comun/medios/audio/muestra.mp3"],
    canciones: ["Motivo de estreno · Instrumental de muestra"],
    musica: "",         // Música de respaldo si una temporada no tiene archivo
    videoFinal: "../comun/medios/video/final-prueba.mp4", // Video oculto de la Temporada Final: MP4 local o enlace de YouTube
    audioRemitente: ""  // Nota de voz de A (se reproduce en la Temporada Final). Vacío = no se muestra
  };

  /* -------------------------------------------------------------
     4. ACCESO, ESTRENO Y NOTIFICACIÓN
     ------------------------------------------------------------- */
  const acceso = {
    demo: false,                        // true permite respuestas libres durante una demostración.
    cualquierClave: true,              // Cualquier carácter abre la pantalla de entrada.
    password: "",                       // Con cualquierClave en false, fija una clave o déjala vacía para saltar la entrada.
    pistaPassword: "Escribe cualquier carácter para entrar",
    estreno: ""                         // "2026-02-14T20:00:00" (hora local). "" = disponible ya
  };

  const notificacion = {
    whatsapp: "",   // [PENDIENTE] Número con código de país, solo dígitos: "5215512345678"
    email: "",      // [PENDIENTE] Respaldo si no hay WhatsApp
    endpoint: ""    // Opcional: URL que recibe un POST JSON (ej. "https://formsubmit.co/ajax/tu@correo.com")
  };

  const sitio = {
    url: new URL("./", location.href).href,                       // URL del pedido en el dominio donde se abrió. Puedes fijar una URL absoluta.
    coincidencia: 98,              // "98% para ti"
    clasificacion: "+13",          // Etiqueta de edad
    clasificacionTexto: "Romance, besos, cursilería",
    heroTag: "ESTRENO",             // o "NUEVA TEMPORADA"
    heroTop: "N.º 1 en tu corazón hoy",
    sinopsis: `${P.nombreB} y ${P.nombreA} protagonizan la historia que empezó en ${P.ciudad}. ` +
              `${P.anios} ${P.anios === 1 ? "año" : "años"}, risas, viajes y alguna tormenta. ` +
              `12 películas y 3 series originales hechas solo para ti, ${P.apodo}.`,
    generos: ["Romántica", "Comedia", "Basada en hechos reales"],
    filaRecomendada: "Nuestro primer año" // Título usado en "Porque viste '…'"
  };

  /* -------------------------------------------------------------
     5. PELÍCULAS Y SERIES
     ---------------------------------------------------------------
     Todo está desbloqueado: se puede ver cualquier título en cualquier orden.
     Cada título:
       tipo: "pelicula" (1 episodio) o "serie" (2–3 episodios cortos)
       titulo, anio, imagen (portada), sinopsis, cancion + musica (audio de fondo)
       creditos: [[rol, nombre], ...] → se muestran al terminar el título
       episodios: [{ titulo, descripcion, duracion, escenas, interaccion, recompensa }]
     Cada escena: E(n, frase1, frase2) usa el clip n de la lista CLIPS (video + imagen de carga).
     interaccion: { tipo, ... } → juego independiente en juegos.html
     Tipos: quiz · memory · puzzle · sopa · rascar · codigo · ordenar · adivinanza · completar
     ------------------------------------------------------------- */
  // Clips de video de las escenas: [video en ../comun/medios/video/, imagen de carga en ../comun/medios/fotos/escenas/]
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
  // Audio y canción de cada título (se reparten los archivos indicados en M.temporadas)
  const son = (i) => ({ musica: M.temporadas[i % M.temporadas.length], cancion: M.canciones[i % M.canciones.length] });
  const cred = (...extra) => [["Protagonizada por", `${P.nombreB} y ${P.nombreA}`], ...extra, ["Dirección", "El destino"]];

  const temporadas = [
    /* =================== PELÍCULAS =================== */
    {
      num: 0, tipo: "pelicula", titulo: "Antes de Nosotros", anio: P.anioInicio - 1, clasificacion: "TP",
      imagen: F.t0, ...son(0), top10: false,
      sinopsis: `Dos vidas paralelas en ${P.ciudad}. ${P.nombreA} en su mundo, ${P.nombreB} en el suyo. Nadie sabe todavía que el guion ya estaba escrito.`,
      creditos: cred(["Locación", P.ciudad], ["Guion", "La casualidad"]),
      episodios: [{
        titulo: "Antes de Nosotros", duracion: 62,
        descripcion: `Antes de ser "nosotros", había dos personas que no sabían que se estaban buscando.`,
        escenas: [
          E(0, `Sentía que mi vida en ${P.ciudad} ya estaba completa.`, `Qué equivocado estaba.`),
          E(1, `Tranquilo, con mis rutinas.`, `Pero a veces, sin saber por qué, me sentía solo.`),
          E(2, `Tú también tenías tus planes.`, `Y una corazonada de que algo bueno estaba por llegar.`),
          E(3, `Dos personas con la misma inquietud:`, `esa sensación de que algo estaba por pasar.`)
        ],
        interaccion: {
          tipo: "completar", frase: "Todo estaba a punto de empezar en ___",
          opciones: [P.ciudad, "Marte", "Una telenovela"], correcta: 0,
          ok: `Exacto. ${P.ciudad}, donde empezó todo.`
        },
        recompensa: "Cupón: un paseo por el lugar donde empezó todo 🎬"
      }]
    },
    {
      num: 1, tipo: "pelicula", titulo: "El Día que Te Vi", anio: P.anioInicio, clasificacion: "TP",
      imagen: F.t1, ...son(1), top10: true,
      sinopsis: `Un día cualquiera en ${P.ciudad} deja de serlo. Una mirada, un «hola» que suena distinto y una noche en la que nadie puede dejar de pensar.`,
      creditos: cred(["Primera escena", P.ciudad], ["Efectos especiales", "Esa mirada"]),
      episodios: [{
        titulo: "El Día que Te Vi", duracion: 62,
        descripcion: `${P.ciudad}. Un día cualquiera que dejó de serlo.`,
        escenas: [
          E(4, `Ese día me sentía igual que siempre.`, `Ni idea de que todo estaba a punto de cambiar.`),
          E(5, `Te vi y sentí un vuelco en el estómago.`, `Como si el mundo se hubiera puesto en pausa.`),
          E(6, `Me temblaban las piernas.`, `Todo seguía su ritmo, menos yo.`),
          E(7, `Nervios. Muchos nervios.`, `Y una alegría que no sabía explicar.`)
        ],
        interaccion: {
          tipo: "adivinanza",
          texto: "Llegó sin avisar, se quedó sin pedir permiso y desde entonces no se ha ido. ¿Qué es?",
          respuestas: ["amor", "el amor", "tu", "tú", "nosotros", P.nombreB, ...P.apodos],
          pista: "Cuatro letras. Empieza con A.",
          ok: "Exacto: el amor (y tú)."
        },
        recompensa: "Cupón: un abrazo de 30 segundos sin soltar 🤗"
      }]
    },
    {
      num: 2, tipo: "pelicula", titulo: "Enviar", anio: P.anioInicio, clasificacion: "TP",
      imagen: "../comun/medios/fotos/escenas/s13.webp", ...son(2), top10: false,
      sinopsis: `Escribir. Borrar. Volver a escribir. La historia del primer mensaje y de la fecha que se volvió aniversario.`,
      creditos: cred(["Guion", "Mensajes de madrugada"], ["Fecha de estreno", P.fechaCodigo.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3")]),
      episodios: [{
        titulo: "Enviar", duracion: 62,
        descripcion: "Una fecha que se volvió contraseña, aniversario y excusa para celebrar.",
        escenas: [
          E(10, `Tenía miedo de escribirte.`, `¿Y si no me contestabas?`),
          E(11, `Ansiedad pura: escribir, borrar, volver a escribir.`, `Al final, un poco de valor. Enviar.`),
          E(12, `Cada minuto sin respuesta se sentía eterno.`, `Revisaba el teléfono cada dos segundos.`),
          E(13, `Cuando contestaste, sentí que podía volar.`, `Sonreí como tonto toda la noche.`)
        ],
        interaccion: {
          tipo: "codigo", modo: "fecha",
          pregunta: "Introduce el código secreto: la fecha en que empezó todo",
          placeholder: "DDMMAAAA",
          respuestas: [P.fechaCodigo],
          pista: `Es el día en que empezó nuestra historia (${P.anioInicio}).`,
          ok: "Código aceptado. Esa fecha es nuestra."
        },
        recompensa: "Cupón: una noche de mensajes como al principio 💬"
      }]
    },
    {
      num: 3, tipo: "pelicula", titulo: `Mesa para Dos en ${P.primeraCita}`, anio: P.anioInicio, clasificacion: "TP",
      imagen: F.t2, ...son(3), top10: true,
      sinopsis: `Nervios, ropa elegida tres veces y una mesa en ${P.primeraCita}. La primera cita que se convirtió en la primera de muchas.`,
      creditos: cred(["Locación", P.primeraCita], ["Vestuario", "Tres cambios de ropa"]),
      episodios: [{
        titulo: `Mesa para Dos en ${P.primeraCita}`, duracion: 62,
        descripcion: "Los nervios, la ropa elegida tres veces y una conversación que no queríamos terminar.",
        escenas: [
          E(15, `Nervios de primera cita.`, `Ninguna camisa se sentía suficiente.`),
          E(16, `Ilusión y miedo al mismo tiempo.`, `Quería que todo saliera perfecto.`),
          E(17, `Al verte llegar, olvidé todo lo que había ensayado.`, `Y de pronto sentí calma.`),
          E(18, `Esa noche me sentí en casa contigo.`, `No quería que se acabara.`)
        ],
        interaccion: {
          tipo: "quiz", pregunta: "¿Dónde fue nuestra primera cita?",
          opciones: [P.primeraCita, "Un cine en Plaza Galerías", "La taquería de la esquina"], correcta: 0,
          ok: `¡Sí! ${P.primeraCita}. Lugar sagrado desde entonces.`
        },
        recompensa: "Cupón: repetimos la primera cita, mismo lugar 🍽️"
      }]
    },
    {
      num: 4, tipo: "pelicula", titulo: P.cancion, anio: P.anioInicio, clasificacion: "TP",
      imagen: F.t3, musica: M.temporadas[3], cancion: M.canciones[3], top10: true,
      sinopsis: `Hay canciones que se escuchan y otras que se viven. "${P.cancion}" dejó de ser una canción para convertirse en un lugar al que volver.`,
      creditos: cred(["Banda sonora", `"${P.cancion}" — ${P.artista}`], ["Coreografía", "Improvisada"]),
      episodios: [{
        titulo: P.cancion, duracion: 62,
        descripcion: `"${P.cancion}" empezó a sonar y ya nunca fue solo una canción.`,
        escenas: [
          E(25, `Sonó la canción y sentí mariposas.`, `No sabía si invitarte a bailar.`),
          E(26, `Ese momento se sintió eterno.`, `Como si la canción fuera solo para nosotros.`),
          E(27, `Bailando contigo me sentí invencible.`, `Y un poco torpe, para qué negarlo.`),
          E(28, `Hoy, cada vez que suena, siento lo mismo.`, `Esa felicidad no se gasta.`)
        ],
        interaccion: {
          tipo: "completar", frase: "Nuestra canción es ___",
          respuestas: [P.cancion],
          pista: `La canta ${P.artista}.`,
          ok: `"${P.cancion}". Dale play cuando quieras.`
        },
        recompensa: "Cupón: bailamos nuestra canción en la sala 💃"
      }]
    },
    {
      num: 5, tipo: "pelicula", titulo: `Destino: ${P.viajes[0]}`, anio: P.anioInicio + 1, clasificacion: "TP",
      imagen: "../comun/medios/fotos/e7-1.webp", ...son(4), top10: true,
      sinopsis: `Maletas hechas a última hora, el primer viaje juntos y un mar que nos esperaba en ${P.viajes[0]}.`,
      creditos: cred(["Locación", P.viajes[0]], ["Fotografía", "Fotos movidas, como siempre"]),
      episodios: [{
        titulo: `Destino: ${P.viajes[0]}`, duracion: 62,
        descripcion: `Nuestro primer viaje juntos: de ${P.ciudad} a ${P.viajes[0]}.`,
        escenas: [
          E(35, `Emoción de primer viaje juntos.`, `Y nervios: ¿y si nos peleábamos en el camino?`),
          E(36, `Frente al mar sentí una paz enorme.`, `Contigo todo se veía más bonito.`),
          E(38, `Quería guardar cada segundo.`, `Me daba miedo olvidar algo.`),
          E(40, `Libres. Así nos sentíamos.`, `Riéndonos de todo, hasta de las fotos movidas.`)
        ],
        interaccion: {
          tipo: "puzzle", titulo: "Arma la foto del viaje",
          imagen: F.puzzle,
          ok: "¡Recuerdo restaurado!"
        },
        recompensa: "Cupón: escapada de fin de semana, destino sorpresa ✈️"
      }]
    },
    {
      num: 6, tipo: "pelicula", titulo: `Callejones de ${P.viajes[1]}`, anio: P.anioInicio + 1, clasificacion: "TP",
      imagen: "../comun/medios/fotos/e7-2.webp", ...son(5), top10: false,
      sinopsis: `Calles de colores, mapas que no entendíamos y un café a media tarde. En ${P.viajes[1]} aprendimos que perdernos juntos también es llegar.`,
      creditos: cred(["Locación", P.viajes[1]], ["Navegación", "Un mapa al revés"]),
      episodios: [{
        titulo: `Callejones de ${P.viajes[1]}`, duracion: 62,
        descripcion: `Un viaje a ${P.viajes[1]} sin prisa y sin GPS.`,
        escenas: [
          E(37, `Curiosidad: todo era nuevo.`, `Y tú lo hacías aún más emocionante.`),
          E(43, `Nos sentíamos aventureros.`, `Perdidos, pero felices.`),
          E(42, `Una tarde tranquila en la que no faltaba nada.`, `Me sentí afortunado.`),
          E(44, `Confianza: no importaba el camino.`, `Sabía que llegaríamos juntos.`)
        ],
        interaccion: {
          tipo: "ordenar", titulo: "Ordena nuestra historia",
          eventos: [
            `Nos conocimos en ${P.ciudad}`,
            `Primera cita en ${P.primeraCita}`,
            `Viaje a ${P.viajes[0]}`,
            `Viaje a ${P.viajes[1]}`,
            `Este aniversario`
          ],
          ok: "Línea del tiempo perfecta."
        },
        recompensa: "Cupón: un día de turistas en nuestra propia ciudad 🗺️"
      }]
    },
    {
      num: 7, tipo: "pelicula", titulo: `${P.viajes[2]}: Mar Turquesa`, anio: P.anioInicio + 2, clasificacion: "TP",
      imagen: "../comun/medios/fotos/x-locaciones.webp", ...son(6), top10: true,
      sinopsis: `Agua turquesa, atardeceres naranjas y la sensación de estar exactamente donde queríamos estar. ${P.viajes[2]}, juntos.`,
      creditos: cred(["Locación", P.viajes[2]], ["Iluminación", "El atardecer"]),
      episodios: [{
        titulo: `${P.viajes[2]}: Mar Turquesa`, duracion: 62,
        descripcion: `El viaje a ${P.viajes[2]} que todavía extrañamos.`,
        escenas: [
          E(39, `Asombro total.`, `El mar era tan azul que parecía mentira.`),
          E(65, `Cada atardecer contigo se sentía como un regalo.`, `Y no quería que oscureciera.`),
          E(69, `Plenitud. No hay otra palabra.`, `Estaba exactamente donde quería estar.`),
          E(74, `Gratitud por todo lo vivido.`, `Contigo, siempre me siento en casa.`)
        ],
        interaccion: {
          tipo: "memory", titulo: "Encuentra las 6 parejas",
          pares: ["💌", "🎬", "🍿", "✈️", "🎵", "🌙"],
          ok: "¡Todas las parejas! Como nosotros: hechos para encajar."
        },
        recompensa: "Cupón: un atardecer juntos, tú eliges el lugar 🌅"
      }]
    },
    {
      num: 8, tipo: "pelicula", titulo: "A Distancia", anio: P.anioInicio + 1, clasificacion: "+13",
      imagen: F.t5, ...son(7), top10: false,
      sinopsis: `${P.dificiles[0]}. Pantallas, llamadas largas y días grises. La película que demostró que lo nuestro aguanta cualquier distancia.`,
      creditos: cred(["Asesoría en tormentas", P.dificiles[0]], ["Comunicaciones", "Videollamadas infinitas"]),
      episodios: [{
        titulo: "A Distancia", duracion: 62,
        descripcion: "Hubo días grises. Esta película es sobre cómo los atravesamos.",
        escenas: [
          E(45, `Te extrañaba todo el tiempo.`, `Los días se sentían grises y larguísimos.`),
          E(46, `Hubo frustración y cansancio.`, `Y miedo de que la distancia nos ganara.`),
          E(47, `Escuchar tu voz me devolvía la calma.`, `Aunque fuera a través de una pantalla.`),
          E(49, `Esperanza.`, `Sabía que la tormenta iba a pasar.`)
        ],
        interaccion: {
          tipo: "rascar", titulo: "Rasca para revelar",
          revelar: `Incluso en "${P.dificiles[0]}", te elegí. Y te volvería a elegir.`,
          imagen: "../comun/medios/fotos/e13-1.webp",
          ok: "Siempre."
        },
        recompensa: "Cupón: un día sin preocupaciones, yo me encargo de todo ☔"
      }]
    },
    {
      num: 9, tipo: "pelicula", titulo: "Encerrados en Pijama", anio: P.anioInicio + 2, clasificacion: "TP",
      imagen: "../comun/medios/fotos/escenas/s55.webp", ...son(0), top10: true,
      sinopsis: `${P.anecdota}. La comedia que contamos en cada reunión (y nadie nos cree).`,
      creditos: cred(["Departamento de comedia", P.anecdota], ["Vestuario", "Pijamas"]),
      episodios: [{
        titulo: "Encerrados en Pijama", duracion: 62,
        descripcion: "La anécdota que contamos en cada reunión.",
        escenas: [
          E(55, `Cansados, con sueño y con ganas de llegar a casa.`, `Nada podía salir mal… creíamos.`),
          E(56, `Pánico total: ¡las llaves adentro!`, `Y nosotros afuera, en pijama.`),
          E(57, `Frustración, frío y un poco de vergüenza.`, `Cada idea era peor que la anterior.`),
          E(58, `Y de pronto, un ataque de risa.`, `Esa noche me sentí más tuyo que nunca.`)
        ],
        interaccion: {
          tipo: "quiz", pregunta: `"${P.anecdota}". ¿Quién tuvo la culpa?`,
          opciones: [P.nombreA, P.nombreB, "Los dos (obviamente)"], correcta: P.culpableAnecdota,
          ok: "Respuesta correcta. Caso cerrado."
        },
        recompensa: "Cupón: noche de comedia y tu comida favorita 🍕"
      }]
    },
    {
      num: 10, tipo: "pelicula", titulo: "Nueva Ciudad, Mismo Nosotros", anio: P.anioInicio + 3, clasificacion: "TP",
      imagen: "../comun/medios/fotos/escenas/s50.webp", ...son(1), top10: false,
      sinopsis: `${P.dificiles[1]}: cajas por todas partes, cansancio y dudas. Y al final, un hogar nuevo con las mismas dos personas.`,
      creditos: cred(["Mudanza", "Los dos (y muchas cajas)"], ["Escenografía", "Nuestro nuevo hogar"]),
      episodios: [{
        titulo: "Nueva Ciudad, Mismo Nosotros", duracion: 62,
        descripcion: "Lo que queda después de una mudanza: más confianza y un apodo que nadie más usa.",
        escenas: [
          E(50, `Agobio: cajas por todas partes.`, `Y la incertidumbre de empezar de cero.`),
          E(51, `Hubo cansancio y dudas.`, `A ratos sentí que no podíamos con todo.`),
          E(52, `Ese abrazo me hizo sentir seguro otra vez.`, `Recordé por qué valía la pena.`),
          E(54, `Orgullo. Lo logramos.`, `Más fuertes y más cerca que antes.`)
        ],
        interaccion: {
          tipo: "codigo", modo: "texto",
          pregunta: "Código secreto: ¿cómo te digo cuando nadie nos escucha?",
          placeholder: "Escribe el apodo",
          respuestas: P.apodos,
          pista: `Empieza con "${String(P.apodo).replace(/[^\p{L}]/gu, "").charAt(0)}".`,
          ok: `${P.apodo}. Solo yo te digo así.`
        },
        recompensa: "Cupón: estrenamos la casa con una cena hecha por mí 🏠"
      }]
    },
    {
      num: 11, tipo: "pelicula", titulo: "Lo que Te Hace Sonreír", anio: P.anioInicio + 3, clasificacion: "TP",
      imagen: "../comun/medios/fotos/e1-2.webp", ...son(2), top10: false,
      sinopsis: `${P.gustosB.join(", ")}. Una película dedicada a todo lo que le gusta a ${P.nombreB}.`,
      creditos: cred(["Catering", P.gustosB.join(" · ")], ["Sonrisas", P.nombreB]),
      episodios: [{
        titulo: "Lo que Te Hace Sonreír", duracion: 62,
        descripcion: `Un homenaje a las cosas favoritas de ${P.nombreB}.`,
        escenas: [
          E(30, `Ternura: así me siento cuando te veo con tu café.`, `Ese primer sorbo es mi parte favorita del día.`),
          E(31, `Felicidad sencilla.`, `Comer juntos y robarnos el último bocado.`),
          E(32, `Me siento afortunado de conocerte tan bien.`, `Y de seguir descubriéndote.`),
          E(33, `Tu sonrisa me desarma.`, `Es mi lugar feliz.`)
        ],
        interaccion: {
          tipo: "sopa", titulo: "Encuentra las palabras escondidas",
          palabras: ["CAFE", "TACOS", "PLAYA", "PERRITO", "SERIES", "BESOS", "JAPON"],
          ok: "¡Todas encontradas! Te conoces tan bien como yo."
        },
        recompensa: "Cupón: un día entero de tus cosas favoritas ☕"
      }]
    },

    /* =================== SERIES =================== */
    {
      num: 12, tipo: "serie", titulo: "Nosotros, Todos los Días", anio: P.anioInicio + 1, clasificacion: "TP",
      imagen: F.t6, ...son(3), top10: true,
      sinopsis: `Cafés compartidos, costumbres que nadie planeó y fechas marcadas en el calendario. Una serie corta sobre lo extraordinario de lo cotidiano.`,
      creditos: cred(["Locación", "Nuestra casa"], ["Producción", "Cada mañana juntos"]),
      episodios: [
        {
          titulo: "Café para Dos", duracion: 60,
          descripcion: "Los encuentros sin plan que se volvieron costumbre.",
          escenas: [
            E(20, `Emoción de volver a verte.`, `Cada plan improvisado se sentía como una aventura.`),
            E(21, `Comodidad.`, `Un café contigo bastaba para que el día fuera bueno.`),
            E(22, `Paz: podíamos estar callados sin sentirnos lejos.`, `Y reírnos de cualquier cosa.`),
            E(23, `Seguridad.`, `Empecé a sentir que contigo estaba en casa.`),
            E(24, `Un día simplemente lo supe:`, `ya no quería imaginar la vida sin ti.`)
          ],
          interaccion: {
            tipo: "quiz", pregunta: "¿Qué no puede faltar en nuestras mañanas?",
            opciones: [P.gustosB[0], "Un despertador a todo volumen", "Prisa"], correcta: 0,
            ok: `Exacto: ${P.gustosB[0].toLowerCase()} y tú.`
          },
          recompensa: "Cupón: desayuno en la cama ☕"
        },
        {
          titulo: "Nuestro Día Favorito", duracion: 60,
          descripcion: "Aniversarios, abrazos y tardes en calma.",
          escenas: [
            E(14, `Cada aniversario siento la misma emoción.`, `Como si fuera la primera vez.`),
            E(8, `Todavía me pongo nervioso cuando me miras así.`, `Y me encanta.`),
            E(19, `Tranquilidad: caminar contigo sin rumbo.`, `Tomados de la mano, como siempre.`),
            E(48, `Un abrazo tuyo y todo se acomoda.`, `Ahí me siento a salvo.`),
            E(53, `Calma total.`, `Solo nosotros y el ruido del agua.`)
          ],
          recompensa: "Cupón: celebramos nuestro aniversario como tú quieras 🎉"
        }
      ]
    },
    {
      num: 13, tipo: "serie", titulo: "Tomas Falsas", anio: P.anioInicio + 2, clasificacion: "TP",
      imagen: "../comun/medios/fotos/escenas/s62.webp", ...son(4), top10: false,
      sinopsis: `Fotos movidas, caras raras y planes que salieron mal. Ninguna historia está completa sin bloopers.`,
      creditos: cred(["Departamento de comedia", "Los dos"], ["Dobles de riesgo", "Ninguno. Todo fue real."]),
      episodios: [
        {
          titulo: "Fotos Movidas", duracion: 55,
          descripcion: "Las fotos que nunca subiremos (pero tampoco borraremos).",
          escenas: [
            E(60, `Cuando el plan sale mal, me da risa nerviosa.`, `Contigo hasta los desastres son divertidos.`),
            E(61, `Vergüenza: ojos cerrados, foto movida.`, `Y aun así, la guardamos.`),
            E(62, `Nos sentíamos niños otra vez.`, `Las caras raras son nuestro idioma.`),
            E(63, `Ese ataque de risa en plena comida…`, `todavía me duele el estómago de recordarlo.`)
          ],
          interaccion: {
            tipo: "completar", frase: "Nadie me hace reír como ___",
            respuestas: [P.nombreB, ...P.apodos, "tu", "tú", "ti"],
            pista: "Está viendo esto ahora mismo.",
            ok: "Nadie. Jamás."
          },
          recompensa: "Cupón: sesión de fotos ridículas, sin borrar ninguna 📸"
        },
        {
          titulo: "Sobremesa", duracion: 55,
          descripcion: "Las historias que contamos una y otra vez.",
          escenas: [
            E(59, `Orgullo de contar nuestras historias.`, `Aunque cada vez las exageramos un poco más.`),
            E(64, `Alegría pura.`, `Quiero seguir grabando bloopers contigo.`),
            E(34, `Me siento ligero cuando nos reímos así.`, `Sin motivo y sin vergüenza.`),
            E(29, `Y cuando suena música, nos sentimos imparables.`, `Nadie nos detiene.`)
          ],
          recompensa: "Cupón: noche de juegos de mesa, el que pierde lava los trastes 🎲"
        }
      ]
    },
    {
      num: 14, tipo: "serie", titulo: "Lo que Viene", anio: new Date().getFullYear(), clasificacion: "TP",
      imagen: F.t7, ...son(5), top10: true,
      sinopsis: `${P.suenos.join(", ")}. La serie que aún estamos escribiendo. Spoiler: tiene final feliz.`,
      creditos: cred(["Guion", "Aún en proceso"], ["Próximas locaciones", P.suenos.join(" · ")]),
      episodios: [
        {
          titulo: "La Lista", duracion: 60,
          descripcion: "Los sueños que tenemos anotados.",
          escenas: [
            E(41, `Ilusión.`, `Allá afuera hay un mundo esperándonos.`),
            E(66, `Emoción de solo imaginarlo: ${P.suenos[0]}.`, `Ya casi puedo sentirlo.`),
            E(67, `Ternura de solo pensarlo: ${P.suenos[1]}.`, `Ya hasta discutimos el nombre.`),
            E(68, `Ganas de que llegue el día: ${P.suenos[2]}.`, `Nuestro propio lugar.`),
            E(70, `Curiosidad por todo lo que falta.`, `Y la certeza de vivirlo contigo.`)
          ],
          interaccion: {
            tipo: "rascar", titulo: "Rasca para ver el próximo capítulo",
            revelar: `Próximo destino: ${P.suenos[0]}. Contigo.`,
            imagen: "../comun/medios/fotos/rasca-2.webp", ok: "Anotado en el guion."
          },
          recompensa: `Cupón: damos el primer paso hacia "${P.suenos[0]}" 🗺️`
        },
        {
          titulo: "Continuará…", duracion: 55,
          descripcion: "El episodio que te lleva al final.",
          escenas: [
            E(71, `Emoción por las sorpresas que vienen.`, `Las que aún no imaginamos.`),
            E(72, `Esperanza.`, `Algún día abriremos la puerta de nuestra casa.`),
            E(73, `Hoy me siento agradecido.`, `Por lo extraordinario de lo cotidiano.`),
            E(9, `Y una certeza:`, `esta historia continuará. Ahora te toca a ti.`)
          ],
          interaccion: {
            tipo: "quiz", pregunta: `¿Lista para el final, ${P.apodo}?`,
            opciones: ["Sí", "Obvio", "Nací para esto"], correcta: "todas",
            ok: "Sabía que dirías eso."
          },
          recompensa: "Ya puedes ver: EL FINAL 🔴"
        }
      ]
    }
  ];

  /* -------------------------------------------------------------
     6. DETRÁS DE CÁMARAS (fila de extras en el inicio)
     ------------------------------------------------------------- */
  const extras = [
    { titulo: "Casting", img: "../comun/medios/fotos/x-casting.webp", texto: `${P.nombreA} hizo audiciones durante años. El papel era tuyo desde el primer día.` },
    { titulo: "Locaciones", img: "../comun/medios/fotos/x-locaciones.webp", texto: `${P.ciudad}, ${P.primeraCita}, ${P.viajes.join(", ")}. Cada lugar, un set.` },
    { titulo: "Banda sonora", img: "../comun/medios/fotos/x-banda.webp", texto: `"${P.cancion}" de ${P.artista}. Escúchala mientras ves la serie.` },
    { titulo: "Lo que le gusta a la protagonista", img: "../comun/medios/fotos/x-gustos.webp", texto: P.gustosB.join(" · ") },
    { titulo: "Escenas eliminadas", img: "../comun/medios/fotos/x-eliminadas.webp", texto: "Hay escenas que solo existen para nosotros. Y así se quedan." }
  ];

  /* -------------------------------------------------------------
     7. TEMPORADA FINAL
     ------------------------------------------------------------- */
  const final = {
    titulo: "El Final: Tu Turno",
    sinopsis: `Después de ${P.anios} ${P.anios === 1 ? "año" : "años"}, 12 películas y 3 series, ` +
              `la protagonista toma la palabra. En este final, ${P.nombreB} escribe el guion.`,
    imagen: F.final,
    preguntas: [
      "¿Cuál es tu película o serie favorita de nuestra historia y por qué?",
      "¿Qué es lo que más te gusta de nosotros?",
      "Si pudieras repetir un solo día juntos, ¿cuál sería?",
      "¿Qué sueño quieres que cumplamos en la próxima temporada?",
      `Escríbele a ${P.nombreA} algo que nunca le hayas dicho.`
    ],
    // Plantilla de la carta. r = respuestas [0..4]
    carta: (r) =>
`${P.apodo}:

Llegaste al final del catálogo, pero no de la historia.

Dices que tu título favorito es "${r[0]}". El mío es cualquiera en el que sales tú.

Lo que más te gusta de nosotros: ${r[1]}. Lo que más me gusta a mí es que existe un "nosotros".

Si pudiéramos repetir un día, elegiste: ${r[2]}. Prometo que habrá muchos días así.

Y la próxima temporada ya tiene trama: ${r[3]}. Hagámoslo realidad.

${P.mensajeFinal}

Con todo mi amor,
${P.nombreA}`
  };

  /* -------------------------------------------------------------
     8. CRÉDITOS Y POST-CRÉDITOS
     ------------------------------------------------------------- */
  const creditos = [
    ["Una producción original de", P.nombreA],
    ["Protagonizada por", P.nombreB],
    ["Coprotagonista", P.nombreA],
    ["Dirección", "El destino"],
    ["Guion", "Los dos, improvisando"],
    ["Banda sonora", `"${P.cancion}" — ${P.artista}`],
    ["Locación principal", P.ciudad],
    ["Primera escena rodada en", P.primeraCita],
    ["Locaciones adicionales", P.viajes.join(" · ")],
    ["Efectos especiales", "Tus besos"],
    ["Catering", P.gustosB.join(" · ")],
    ["Dobles de riesgo", "Ninguno. Todo fue real."],
    ["Asesoría en tormentas", P.dificiles.join(" · ")],
    ["Departamento de comedia", P.anecdota],
    ["Producción ejecutiva", `${P.anios} ${P.anios === 1 ? "año" : "años"} juntos`],
    ["Agradecimientos especiales", "A cada casualidad que nos juntó"],
    ["", "Ningún corazón fue dañado durante la filmación de estas películas y series."],
    ["", `© ${P.anioInicio}–${new Date().getFullYear()} ${P.nombreA} & ${P.nombreB}. Todos los derechos reservados (para nosotros).`]
  ];

  const postCreditos = {
    imagen: F.postCreditos,
    etiqueta: "ESCENA POST-CRÉDITOS",
    texto: `${P.nombreB}… nuestra historia acaba de ser renovada.`,
    anuncio: `Temporada ${P.anios + 1}`,
    subtitulo: "Próximamente. Y para siempre.",
    sorpresa: "Mira debajo de tu almohada 💝"
  };

  return { pareja: P, fotos: F, media: M, acceso, notificacion, sitio, temporadas, extras, final, creditos, postCreditos };
})();

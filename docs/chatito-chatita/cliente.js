(() => {
  const c = window.TDN;
  const remitente = "Chatito";
  const destinataria = "chatita";
  const aniversario = "11 de septiembre";
  const titulo = "Diez años contigo";
  const foto = id => `assets/escenas/${id}.webp`;
  const canciones = [
    ["Ángel · Elefante", "angel"],
    ["Contigo · Elefante", "contigo"],
    ["Nunca Cambies · Octava Dimensión", "nunca-cambies"],
    ["Sabes · Reik", "sabes"],
    ["Píntame de Azul · Elefante y Soledad", "pintame-de-azul"],
    ["Ahí Estabas Tú · Carín León", "ahi-estabas-tu"]
  ].map(([nombre, archivo]) => ({ nombre, src: `assets/audio/${archivo}-climax.mp3` }));
  const clips = new Set([4464985, 28870907, 9242185, 9127876, 8676986, 8296747, 5107017, 2813368]);
  const escena = ([id, ...texto]) => ({
    img: foto(id),
    ...(clips.has(id) ? { video: `assets/escenas/${id}.mp4` } : {}),
    texto
  });

  Object.assign(c.pareja, {
    nombreA: remitente, nombreB: destinataria, apodos: [remitente, destinataria], apodo: destinataria,
    aniversario, fechaCodigo: "1109", anios: 10, viajes: [],
    anecdota: "Volví por la tarde a cobrar un pedido de refrescos. Ese día nos dimos nuestro primer beso.",
    suenos: ["Acompañarnos en nuestros proyectos", "Hacernos tiempo para platicar", "Vivir muchos años más juntos"],
    mensajeFinal: "Gracias por estos diez años, chatita. Eres el amor de mi vida. — Tu Chatito"
  });
  Object.assign(c.fotos, {
    hero: "assets/hero.webp", perfilB: "", perfilPareja: foto(4009408),
    final: foto(6687773), puzzle: foto(8871433)
  });
  Object.assign(c.media, {
    intro: "assets/audio/intro.mp3",
    temporadas: canciones.map(pista => pista.src),
    canciones: canciones.map(pista => pista.nombre),
    musica: "", videoFinal: "", audioRemitente: ""
  });
  Object.assign(c.acceso, { demo: false, password: "1109", pistaPassword: "Nuestro aniversario en cuatro números (DDMM).", estreno: "" });
  Object.assign(c.notificacion, { whatsapp: "525511443943", email: "", endpoint: "" });
  Object.assign(c.sitio, {
    url: "https://streaming-us-2.rotfstudio.com/chatito-chatita/", titulo, clasificacion: "TP", clasificacionTexto: "Romance y aniversario",
    heroTag: "PARA CHATITA", heroTop: "De Chatito · 11 de septiembre",
    sinopsis: "Yo surtía tu depósito de refrescos. Entre pedidos y risas nos fuimos acercando hasta que una tarde volví a cobrar y me regalaste un beso. Así empezaron nuestros diez años.",
    filaRecomendada: titulo, generos: ["Romance", "Nuestra historia", "Aniversario"]
  });

  const episodio = (titulo, descripcion, portada, pista, escenas) => ({
    titulo, descripcion, duracion: 62, imagen: foto(portada),
    musica: canciones[pista].src, cancion: canciones[pista].nombre,
    escenas: escenas.map(escena), interaccion: null, recompensa: ""
  });
  const catalogo = (num, tipo, titulo, sinopsis, episodios) => ({
    num, tipo, titulo, sinopsis, episodios, clasificacion: "TP", anio: 2026,
    imagen: episodios[0].imagen, musica: episodios[0].musica, cancion: episodios[0].cancion,
    top10: num === 0, creditos: [["De", remitente], ["Para", destinataria], ["Aniversario", aniversario]]
  });
  const pelicula = (num, titulo, sinopsis, portada, pista, escenas) =>
    catalogo(num, "pelicula", titulo, sinopsis, [episodio(titulo, sinopsis, portada, pista, escenas)]);
  const serie = (num, titulo, sinopsis, episodios) => catalogo(num, "serie", titulo, sinopsis, episodios);

  c.temporadas = [
    pelicula(0, "La ruta que me llevó a ti", "Un pedido de refrescos nos puso frente a frente. Las ganas de seguir platicando hicieron el resto.", 9830149, 0, [
      [9830149, "Chatita, tú habías puesto tu depósito de refrescos.", "Yo trabajaba en una refresquera y me tocó surtirte el negocio."],
      [30875963, "Para mí era una entrega más en la ruta.", "Hasta que te conocí."],
      [1699774, "Entre cajas y pedidos nos fuimos agarrando confianza.", "Había algo en la facilidad con que platicábamos."],
      [4464985, "Me gustaba volver y encontrar un rato para echar la plática.", "A veces nos daba tanta risa que se me olvidaba cómo había empezado la conversación."],
      [5910782, "Hicimos clic desde entonces.", "Durante un buen tiempo todo quedó en esas pláticas y esas risas."]
    ]),
    pelicula(1, "Vuelvo por la tarde", "Las ventas bajaron. Un día, al dejar pendiente el cobro, me animé a preguntarte si me darías un beso.", 15316916, 3, [
      [9395002, "Pasó el tiempo y las ventas del depósito bajaron.", "A veces no te alcanzaba para pagar todo el pedido en el momento."],
      [6076475, "Un día te dije que podía volver por la tarde a cobrar.", "Ese día también me atreví a pedirte un beso."],
      [8444235, "Me dijiste que sí.", "Todavía me acuerdo de la ilusión con la que esperé esa tarde."],
      [15316916, "Regresé a cobrar, tal como te había dicho.", "Y tú me diste aquel beso."],
      [12624258, "Después de tantas pláticas, por fin nos habíamos atrevido.", "Así empezó lo nuestro."]
    ]),
    pelicula(2, "El camino de regreso", "El depósito cerró y cambiamos de trabajo. Seguimos en contacto hasta que la vida volvió a juntarnos.", 28575900, 4, [
      [10478019, "Con el tiempo te tocó cerrar el depósito.", "Te fuiste a trabajar a otro lado y dejaron de existir esas visitas de la ruta."],
      [37435122, "Me acuerdo de lo distinto que se sentía pensar en ese lugar.", "Había sido el punto de encuentro de tantas pláticas nuestras."],
      [28767375, "Yo cambié de distribuidora y también me tocó tomar otro camino."],
      [9898393, "Seguimos en contacto.", "Me gustaba saber de ti aunque el trabajo ya no nos pusiera frente a frente."],
      [28575900, "El destino volvió a juntarnos.", "Cuánto agradezco que todavía tuviéramos ganas de saber el uno del otro."]
    ]),
    pelicula(3, "Lo que siento por ti", "De las primeras risas a la certeza de estar con el amor de mi vida.", 7156283, 1, [
      [7156283, "Me enamoré de ti mientras te iba conociendo.", "Al principio me bastaba con tener un rato más para platicar contigo."],
      [7663841, "Todavía me gusta la complicidad que empezó con aquellas risas.", "La siento cada vez que se nos va el tiempo hablando."],
      [28870907, "Pienso en todo lo que hemos vivido desde aquel beso.", "Hay recuerdos que se me vienen a la cabeza y me dejan sonriendo un buen rato."],
      [6255174, "Me da gusto poder decirte lo que significas para mí.", "Te quiero cerca en los días grandes y en los días de siempre."],
      [4651227, "Chatita, eres el amor de mi vida.", "Me alegra que seas tú la persona con quien llevo diez años."]
    ]),
    pelicula(4, "Lo que me hace sonreír", "Cinco escenas para volver a las risas y a los momentos sencillos que todavía llevo conmigo.", 5225097, 2, [
      [5225097, "Si cierro los ojos, todavía puedo acordarme de cómo nos reíamos al principio."],
      [11443453, "También guardo lo sencillo de estar contigo.", "Una plática puede ser suficiente para que un día se me quede grabado."],
      [9242185, "Qué bonito ha sido tener con quién compartir todo lo que nos tocó vivir."],
      [15426986, "Me gusta pensar en las veces que nos hemos reído de algo que solo a nosotros nos daba gracia."],
      [6334737, "Hoy quiero brindar por esas risas.", "Y por todos los ratos que todavía nos van a hacer sonreír."]
    ]),
    pelicula(5, "Feliz cumpleaños, chatita", "Chatito brinda por el cumpleaños de chatita y recuerda lo feliz que le hizo volver a encontrarse con ella.", 5638748, 5, [
      [6599084, "¡Feliz cumpleaños, mi chatita!", "Hoy me dieron ganas de contarte otra vez cuánto me alegra haberte conocido."],
      [4157306, "Me acuerdo de las risas entre pedidos y del beso de aquella tarde.", "Quién iba a decir que de ahí saldrían diez años juntos."],
      [5638748, "Hoy brindo por ti y por la alegría de habernos vuelto a encontrar.", "Gracias por seguir cerca cuando cambiaron nuestros caminos."],
      [6687773, "Deseo que este año te traiga tiempo para lo que te hace feliz.", "Y que me toque estar cerquita para celebrar contigo lo que venga."],
      [8871433, "Qué bonito poder festejar un año más de tu vida, chatita.", "Te amo. Feliz cumpleaños. — Tu Chatito"]
    ]),
    pelicula(6, "Nuestro 11 de septiembre", "Celebramos diez años y la alegría de tener una fecha que sentimos nuestra.", 35632803, 4, [
      [33273856, "Cada 11 de septiembre pienso en lo lejos que llegó aquel primer beso."],
      [4009408, "Me gusta pensar que, de toda la gente a la que podía surtirle refrescos, me tocó conocerte a ti."],
      [35632803, "Lo de aquella tarde fue hace diez años.", "Hoy todavía me hace ilusión celebrar que estamos juntos."],
      [25748599, "Guardo lo que vivimos al principio y lo que fuimos descubriendo después.", "Hay momentos contigo que jamás se me van a borrar."],
      [14839220, "Feliz aniversario, chatita.", "Te amo. Gracias por estos diez años."]
    ]),
    pelicula(7, "Todo lo que nos queda", "Quiero seguir escuchándote, acompañar tus planes y hacer tiempo para nosotros.", 4507950, 1, [
      [5710614, "Quiero hacerte más preguntas sobre lo que sueñas.", "Me gustaría saber qué te ilusiona para poder acompañarte."],
      [11616423, "Quiero que nos hagamos tiempo para estar juntos.", "Aunque sea un rato para contarnos cómo nos fue en el día."],
      [4507950, "Me ilusiona pensar en un plan que todavía no se nos ocurre.", "Podemos decidirlo con calma y empezar cuando a los dos nos dé gusto."],
      [9127876, "Quiero seguir cerca cuando toque cambiar de rumbo.", "Ya sé lo bonito que es volver a encontrarme contigo."],
      [9143810, "Lo que más quiero de los años que vienen es poder compartirlos contigo."]
    ]),
    serie(8, "Historias del depósito", "Dos episodios sobre el negocio de chatita y las visitas de Chatito hasta el día en que se dieron su primer beso.", [
      episodio("La entrega", "Cómo nos conocimos entre cajas y refrescos.", 952593, 2, [
        [952593, "Todo comenzó con el negocio que habías puesto, chatita.", "Un depósito de refrescos fue suficiente para que nos cruzáramos."],
        [18895421, "Me da gusto acordarme de cuando te conocí atendiendo tu negocio."],
        [6169670, "A mí me tocaba hacerte llegar el pedido.", "Así me aprendí el camino de ida y vuelta."],
        [8676986, "Con cada visita teníamos más de qué hablar.", "Era fácil pasar del pedido a una plática y acabar riéndonos."],
        [12898933, "Me quedaba pensando en lo bien que nos entendíamos.", "Y así siguieron las cosas durante un tiempo."]
      ]),
      episodio("El trato de aquella tarde", "La vez que regresé al depósito con el corazón acelerado.", 36704205, 3, [
        [9395012, "En esos días las ventas habían bajado.", "Hubo pedidos que te costaba cubrir al momento."],
        [2227122, "Una de esas veces te dije que volvía más tarde a cobrar.", "Y por fin te pregunté si me regalabas un beso."],
        [36704205, "Me sorprendió y me dio gusto oírte decir que sí.", "Esa tarde tuve un motivo más para volver al depósito."],
        [8296747, "Qué nervios me daba pensar en lo que habíamos platicado.", "Llegué, y llegó también el beso."],
        [6533178, "Me alegra haberme animado a preguntarte y que tú quisieras darme ese beso.", "A partir de ahí empezamos nuestra relación."]
      ])
    ]),
    serie(9, "Seguir haciendo vida contigo", "Dos episodios sobre lo que quiero cuidar y todo lo que todavía podemos construir juntos.", [
      episodio("Hacernos tiempo", "Deseos para los días de trabajo, las tardes tranquilas y las conversaciones pendientes.", 28935723, 0, [
        [28935723, "Quiero que sigamos encontrando ratitos para platicar como al principio.", "Me gusta cuando podemos hablar con calma y sin mirar la hora."],
        [27893005, "Quiero preguntarte cómo te sientes y darme tiempo de escucharte."],
        [5107017, "Quiero seguir haciendo planes sencillos contigo.", "Hasta salir a caminar un rato me ilusiona si es a tu lado."],
        [8127502, "Deseo que tengas a alguien cerca cuando el día se te haga pesado.", "Yo quiero poder ser ese alguien para ti."],
        [25070732, "Me gustaría llegar al próximo aniversario con nuevas cosas bonitas que agradecerte."]
      ]),
      episodio("Lo que soñemos juntos", "Planes por platicar, sueños por acompañar y otro aniversario por vivir.", 11532794, 1, [
        [29614952, "Un día de estos quiero que nos sentemos a platicar de lo que nos ilusiona."],
        [4045422, "Quiero apoyarte en lo que te propongas y que celebremos cada avance, por pequeño que sea."],
        [11532794, "Ojalá encontremos proyectos que nos den ganas de hacer juntos.", "Podemos empezar por lo que a los dos nos haga felices."],
        [2813368, "Me emociona imaginar todos los lugares a los que podemos ir y todos los ratos que todavía no conocemos."],
        [24906842, "Después de diez años, sigo queriendo compartir contigo lo que venga.", "Con todo mi amor, tu Chatito."]
      ])
    ])
  ];

  c.temporadas[0].episodios[0].interaccion = {
    tipo: "quiz", titulo: "La primera entrega", pregunta: "¿Qué negocio tenía chatita cuando nos conocimos?",
    opciones: ["Una panadería", "Un depósito de refrescos", "Una papelería"], correcta: 1,
    ok: "Ahí empezamos a platicar entre pedidos."
  };
  c.temporadas[6].episodios[0].interaccion = {
    tipo: "codigo", titulo: "Nuestra fecha", modo: "fecha", pregunta: "¿En qué día y mes celebramos nuestro aniversario?",
    placeholder: "DDMM", respuestas: ["1109"], pista: "Es en septiembre.", ok: "¡Feliz 11 de septiembre, chatita!"
  };
  c.temporadas[8].episodios[1].interaccion = {
    tipo: "ordenar", titulo: "De los pedidos al primer beso",
    eventos: ["Chatita puso el depósito", "Chatito empezó a surtir su negocio", "Chatito propuso volver por la tarde", "Chatita le dio su primer beso"],
    ok: "Una tarde que nos cambió la historia."
  };

  const carta = `Mi chatita:

Me acuerdo de cuando empecé a surtir tu depósito. Me gustaba llegar con el pedido y quedarme platicando contigo. Nos reíamos tanto que, cuando me iba, ya tenía ganas de que tocara volver. Pasó un tiempo antes de que me animara a decirte algo.

El día que te dije que volvía por la tarde a cobrar, por fin me atreví a preguntarte si me regalabas un beso. Dijiste que sí. Volví esa tarde y me lo diste. Todavía me da gusto contarte algo que los dos sabemos de memoria, porque ahí empezó todo lo que vino después.

Cuando cerraste el depósito y te fuiste a otro trabajo, yo también cambié de distribuidora. Dejamos de tener el pedido como pretexto para vernos y seguimos en contacto. Qué suerte que la vida volviera a juntarnos y que pudiéramos pasar estos diez años llenos de cosas bonitas.

Gracias por las risas y por los momentos que se me quedaron guardados. Quiero seguir haciéndonos tiempo, escucharte y estar a tu lado cuando te toque perseguir algo que te ilusione. Quiero que dentro de otros diez años todavía nos dé risa contar cómo nos dimos nuestro primer beso.

Feliz 11 de septiembre, mi chatita. Eres el amor de mi vida.

Te amo,
Tu Chatito`;

  c.extras = [
    { titulo: "Del depósito al primer beso", img: foto(1699774), texto: "Todo empezó con una entrega y las ganas de seguir platicando. Volví una tarde a cobrar, y así empezó lo nuestro." },
    { titulo: "Diez años de estar juntos", img: foto(25748599), texto: "11 de septiembre. Gracias por todos los momentos que llevo conmigo, chatita." },
    { titulo: "De tu Chatito", img: foto(6687773), texto: carta }
  ];
  Object.assign(c.final, {
    titulo: "Para el amor de mi vida", imagen: c.fotos.final,
    sinopsis: "Una carta de Chatito para chatita en su décimo aniversario.",
    preguntas: [
      "¿Qué recuerdas de nuestras primeras pláticas en el depósito?",
      "¿Qué pensaste cuando te pedí aquel beso?",
      "¿Qué momento de estos diez años te gustaría volver a vivir?",
      "¿Qué te gustaría que hiciéramos juntos en los próximos años?",
      "¿Qué quisieras decirme en nuestro aniversario?"
    ],
    carta: () => carta
  });
  c.creditos = [["Una historia para", destinataria], ["Con amor de", remitente], ["Aniversario", aniversario], ["Imágenes y videos ilustrativos", "Pexels"]];
  c.postCreditos = null;
})();

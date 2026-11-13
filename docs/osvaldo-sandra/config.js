(() => {
  'use strict';
  const foto = n => `assets/fotos/foto-${String(n).padStart(2, '0')}.webp`;
  const tracks = window.SANDRA_TRACKS;
  const byId = Object.fromEntries(tracks.map(track => [track.id, track]));
  const quiz = (pregunta, opciones, correcta, ok) => ({ tipo: 'quiz', pregunta, opciones, correcta, ok });
  const episodio = (titulo, descripcion, escenas, interaccion = null) => ({
    titulo, descripcion, duracion: 54, interaccion,
    escenas: escenas.map(([n, texto]) => ({ img: foto(n), texto: [texto] }))
  });

  const peliculas = [
    ['Feliz cumpleaños, Sandra', 89, 'las-mananitas', 'Osvaldo abre la función con una serenata para Sandra, la protagonista de este 14 de noviembre.', [
      [127, 'Sandra, hoy la primera canción es para ti.'],
      [119, 'Me encanta verte sonreír cuando tienes cerca a la gente que quieres.'],
      [89, 'Hoy quiero que te consientan a ti, que puedas descansar y que te rías mucho.'],
      [114, 'Me da gusto celebrar tu vida y mirar contigo todo lo que hemos compartido.'],
      [22, 'Pide un deseo que sea solo tuyo. Me encantaría verte cumplirlo.'],
      [23, '¡Feliz cumpleaños, Sandra! Te quiero. Con amor, Osvaldo.']
    ], quiz('¿En qué mes celebramos a Sandra?', ['Septiembre', 'Noviembre', 'Diciembre'], 1, '¡Noviembre! Que empiece la fiesta.')],
    ['Seis meses en un cuadro', 4, 'hablame-de-ti', 'Una foto enmarcada conserva la cuenta de sus primeros seis meses juntos.', [
      [4, 'Mira ese cuadro. Hasta contamos los minutos de esos seis meses.'],
      [3, 'Ahora me dan ganas de preguntarte cuál de todos esos días recuerdas mejor.'],
      [5, 'Yo me quedaría un buen rato viendo estas fotos contigo.'],
      [21, 'Me gusta cómo nos acercamos para caber los dos en la misma imagen.'],
      [60, 'Si hoy hiciéramos otro cuadro, habría que escoger entre muchísimos recuerdos.'],
      [27, 'Y todavía quiero que nos falte espacio para todos los que vienen.']
    ], { tipo: 'completar', frase: 'El cuadro celebra ___ meses juntos.', opciones: ['Tres', 'Seis', 'Nueve'], correcta: 1, ok: '¡Seis meses! Hasta quedaron anotados los minutos.' }],
    ['Entre luces y vueltas', 64, 'hermosa-experiencia', 'Selfies de feria, juegos y las caras que salen cuando nadie está posando.', [
      [128, 'De la feria me quedo con la cara que traemos en esta foto.'],
      [57, 'Luego hay selfies donde ni alcanzamos a acomodarnos. Ésas me gustan mucho.'],
      [61, 'Aquí se ve todo de otro color con las luces encima.'],
      [64, 'Me dan ganas de regresar a la feria solo para volver a verte reír así.'],
      [65, 'Si nos volvemos a subir, esta vez tú escoges a qué juego.'],
      [66, 'Yo me encargo de que nos tomemos otra foto.']
    ], { tipo: 'memory', pares: [128, 57, 61, 64, 65, 66].map(foto), ok: 'Encontraste todas las fotos de la feria.' }],
    ['Un abrazo bajo el sol', 38, 'desde-hoy', 'Las fotos del traje azul y el vestido claro, con la gente que los acompañó.', [
      [129, 'De estas fotos me acuerdo por tu vestido claro y mi traje azul.'],
      [130, 'Qué gusto poder regresar a ese día con solo abrir el álbum.'],
      [2, 'Me alegra que haya quedado una foto con quienes estuvieron ahí con nosotros.'],
      [47, 'También me gusta ésta, con tu mano en mi hombro.'],
      [38, 'Si tuviera que guardar una sola mirada de ese día, guardaría ésta.'],
      [6, 'Gracias por todos los abrazos que vinieron después de esta foto.']
    ], { tipo: 'puzzle', imagen: foto(6), ok: 'Volviste a juntar una foto de los dos.' }],
    ['La dulce espera', 10, 'te-esperaba', 'De la camiseta que decía «Baby loading» a los primeros abrazos.', [
      [30, 'La camiseta decía «Baby loading». Todavía me da ternura verla.'],
      [44, 'Ahí estábamos los dos, esperando conocer una carita que luego saldría en tantas fotos.'],
      [14, 'Y en medio de la emoción también tuvimos tiempo de hacer caras.'],
      [10, 'Veo los regalos detrás de nosotros y me acuerdo de cuánta ilusión cabía en esa mesa.'],
      [12, 'Gracias por dejarme vivir tan cerca una espera tan importante.'],
      [45, 'Qué bonito fue cuando por fin pudimos salir así en una foto.']
    ], { tipo: 'ordenar', eventos: ['La espera', 'La fiesta con regalos', 'El bebé en brazos'], ok: '¡Así se cuenta esta película!' }],
    ['Donde cabemos todos', 109, 'bendita-tu-luz', 'Reuniones, abrazos y fotos de grupo en las que siempre cabe alguien más.', [
      [131, 'Siempre me da gusto volver a ver a todos juntos en estas fotos.'],
      [41, 'En las de grupo me pongo a buscar las caras una por una.'],
      [19, 'Gracias por hacerme un lugar cerca de la gente que quieres.'],
      [16, 'También agradezco las veces que encontramos un rato para reunirnos.'],
      [43, 'Qué bueno que alguien se acordó de pedir esta foto antes de que nos fuéramos.'],
      [109, 'Ojalá nos queden muchas mesas por compartir y muchas fotos como ésta.']
    ]],
    ['Sal en el pelo', 86, 'de-pies-a-cabeza', 'Una escapada de sol, arena, alberca y risas en familia.', [
      [80, 'Se me antoja volver a caminar contigo junto al mar.'],
      [81, 'A ellas les bastó la arena para inventarse todo un juego.'],
      [90, 'Me gusta acordarme de cómo se nos iba el tiempo en el agua.'],
      [86, 'Y luego intentábamos que todos salieran en la misma selfie.'],
      [84, 'De ese paseo también me quedo con un rato tranquilo frente a las olas.'],
      [89, 'Quiero que volvamos a escaparnos así, aunque sea un fin de semana.']
    ]],
    ['Hasta la última canción', 25, 'bienvenido-al-amor', 'Luces de escenario, noches de feria y salidas que dan ganas de repetir.', [
      [25, 'Me gusta tener una foto contigo en medio de todo el ruido.'],
      [49, 'Aquí apenas cupimos los dos en la selfie, pero qué gusto tenerla.'],
      [29, 'También están esas salidas donde terminamos posando frente a cualquier cosa que nos llame la atención.'],
      [76, 'Cuando veo esta foto, me dan ganas de invitarte a otra noche de música.'],
      [71, 'Me encanta que también nos guardemos las fotos en las que salimos haciendo el ridículo.'],
      [34, 'La próxima vez que salgamos, quiero pedirte otra foto y darte otro beso.']
    ]],
    ['Nuestra porra', 108, 'creo-en-ti', 'Medallas, gradas y la alegría de estar presentes para aplaudir lo que cuesta.', [
      [91, 'Mira esa cara de orgullo con la medalla en la mano.'],
      [94, 'Qué gusto que también podamos guardar fotos de días de carrera.'],
      [108, 'Verlos en la cancha me recuerda lo bonito que es que alguien vaya a echarte porras.'],
      [110, 'Gracias por estar en esos días, Sandra. Me alegra ver tu sonrisa en la foto.'],
      [46, 'Y para las metas que tú te pongas, quiero estar ahí para aplaudirte también.'],
      [103, 'Quiero que en esta familia sigamos haciendo tiempo para celebrar el esfuerzo de cada quien.']
    ]],
    ['Lo que me gusta de ti', 28, 'mi-mayor-anhelo', 'Un retrato de Sandra en gestos que Osvaldo quiere agradecerle.', [
      [28, 'Sandra, me da ternura la forma en que abrazas en esta foto.'],
      [37, 'Admiro ese cariño tuyo que se ve hasta en una foto tomada de prisa.'],
      [40, 'También me gusta la paciencia con la que te quedas cerquita para dar confianza.'],
      [56, 'Gracias por todos esos ratos de cuidado que a veces se nos olvida fotografiar.'],
      [55, 'Esta foto junto al agua me gusta por lo tranquila que se ve tu manera de acompañar.'],
      [127, 'Hoy quiero que recibas un poquito de todo el cariño que tú das.']
    ]],
    ['Lo que cabe en un día', 52, 'magia-de-conectar', 'Desayunos, juegos y los ratos familiares que se vuelven recuerdos.', [
      [52, 'Esta foto de la mesa me recuerda lo mucho que disfruto sentarme a comer con ustedes.'],
      [98, 'En casa hay días en que un teclado de juguete se vuelve el concierto de la tarde.'],
      [102, 'Y hay otros en que lo importante es dejar que aprendan a comer solitas, a su ritmo.'],
      [95, 'Me encanta encontrar fotos en las que se están haciendo compañía.'],
      [93, 'Quiero que sigamos guardando estas risas, aunque nadie haya planeado nada especial.'],
      [111, 'Gracias por compartir conmigo estos días que terminan siendo mis favoritos.']
    ], { tipo: 'sopa', palabras: ['SANDRA', 'OSVALDO', 'RISAS', 'FAMILIA', 'ABRAZOS', 'FOTOS'], ok: 'Encontraste seis palabras de nuestro álbum.' }],
    ['Que vengan más capítulos', 53, 'que-lo-nuestro', 'Osvaldo imagina los planes y los días que le gustaría compartir con Sandra.', [
      [26, 'Quiero seguir planeando salidas contigo y también dejar lugar para las improvisadas.'],
      [79, 'Me ilusiona pensar adónde iremos la próxima vez que tengamos ganas de salir.'],
      [53, 'Quiero más paseos de esos que empiezan por sacar la carriola y salir un ratito.'],
      [67, 'También me gustaría que encontráramos tiempo para hacer algo que tú hayas querido probar.'],
      [36, 'Quiero escucharte decir qué te emociona de este año y ver cómo puedo acompañarte.'],
      [50, 'Y el próximo 14 de noviembre, quiero tener más fotos que enseñarte.']
    ], { tipo: 'codigo', modo: 'fecha', pregunta: '¿Qué día es el cumpleaños de Sandra?', placeholder: 'DDMM', respuestas: ['1411', '14/11', '14 de noviembre'], pista: 'Es el día de esta serenata.', ok: '14 de noviembre. Tu día, Sandra.' }]
  ];

  const series = [
    ['Nuestro álbum familiar', 114, 'solo-tu', 'Dos episodios para volver a los abrazos de antes y a los juegos de ahora.', [
      episodio('Los primeros abrazos', 'Brazos, moños y sonrisas que llenaron el álbum.', [
        [11, 'Qué chiquita se veía en brazos de los dos.'],
        [51, 'Ya desde ahí nos regalaba las mejores expresiones para las fotos.'],
        [48, 'En la alberca todo cabía en una ranita inflable.'],
        [35, 'Y en la feria, la mejor vista era verte sostenerla.'],
        [101, 'Me da ternura ver lo mucho que le llamaban la atención las luces.'],
        [100, 'Qué suerte que tenemos estas fotos para acordarnos de esas caras.']
      ]),
      episodio('Hacerse compañía', 'Juegos, disfraces y manos que se buscan.', [
        [99, 'Me gusta mirar la forma en que se abrazan.'],
        [97, 'También me gusta cuando una espera a que la otra alcance su paso.'],
        [104, 'Hasta para los disfraces hubo tiempo de sacar la cámara.'],
        [107, 'Quiero seguir celebrando todo lo que se animen a hacer.'],
        [96, 'Y seguir dando espacio a esos juegos que inventan entre las dos.'],
        [114, 'Sandra, gracias por todos los momentos que hoy podemos recordar en familia.']
      ])
    ]],
    ['Aquí, contigo', 8, 'bendita-tu-luz', 'Una serie sobre la complicidad de los dos y los gestos que Osvaldo quiere cuidar.', [
      episodio('Cerca de ti', 'Besos robados para el álbum y abrazos que dan ganas de repetir.', [
        [8, 'Veo este abrazo y me dan ganas de acercarme a ti igualito.'],
        [17, 'A veces te quiero decir tantas cosas y lo primero que me sale es darte un beso.'],
        [9, 'Me gusta que en nuestras fotos se note lo cerquita que nos ponemos.'],
        [32, 'Hay fotos que me hacen olvidar que estaba viendo el celular.'],
        [31, 'En otras me gana la risa de ver dónde terminamos posando.'],
        [15, 'Gracias por dejarme ser así de cariñoso contigo, Sandra.']
      ]),
      episodio('Tiempo para escucharte', 'Lo que Osvaldo desea para Sandra cuando se apaguen las velas.', [
        [68, 'Quiero que este año tengas más ratitos para ti.'],
        [75, 'Que te animes a hacer eso que te da curiosidad, aunque todavía lo estés pensando.'],
        [22, 'Si hay un lugar que quieres conocer, me gustaría que me cuentes por qué.'],
        [63, 'También me encantaría que nos regaláramos una salida al cine de vez en cuando.'],
        [58, 'Quiero que puedas contar conmigo cuando necesites platicar o descansar un rato.'],
        [127, 'Feliz cumpleaños, Sandra. Me alegra acompañarte en lo que venga.']
      ])
    ]],
    ['Razones para brindar', 123, 'hermosa-experiencia', 'Dos episodios para agradecer las celebraciones compartidas y desear muchas más.', [
      episodio('Entre flores y abrazos', 'Un recorrido por las fotos de una celebración en familia.', [
        [112, 'Me encanta cómo te mira en esta foto junto al altar.'],
        [121, 'Qué bueno que alcanzaron a guardar esta sonrisa.'],
        [115, 'Me gusta vernos así, todos juntos y arreglados para celebrar.'],
        [117, 'Cada vez que veo esta foto descubro otro detalle en el fondo.'],
        [118, 'Y en la fiesta siempre llega ese momento en que todos volteamos hacia el pastel.'],
        [123, 'Gracias por los días en los que hemos podido juntarnos así.']
      ]),
      episodio('Un deseo para el próximo año', 'Osvaldo cierra con planes sencillos y un brindis para Sandra.', [
        [87, 'Quiero que volvamos a dejar todo por un rato para sentarnos en la arena.'],
        [92, 'Y que en casa nunca nos falten ratos para reír a carcajadas.'],
        [106, 'Quiero que salgamos a pasear aunque el plan sea quedarnos cerca.'],
        [113, 'Que encontremos motivos para reunirnos más seguido con la gente que queremos.'],
        [18, 'Hoy levanto la copa por ti y por lo que más ganas tengas de vivir este año.'],
        [89, 'Feliz cumpleaños, Sandra. Gracias por todo lo que seguimos compartiendo.']
      ])
    ]]
  ];

  const titulo = (num, nombre, portada, track, sinopsis, episodios, tipo) => ({
    num, titulo: nombre, tipo, imagen: foto(portada), sinopsis, clasificacion: 'TP', top10: num < 10,
    musica: byId[track].src, cancion: byId[track].titulo, episodios,
    creditos: [['Para', 'Sandra'], ['Con amor de', 'Osvaldo']]
  });
  const temporadas = [
    ...peliculas.map(([nombre, portada, track, sinopsis, escenas, juego], num) =>
      titulo(num, nombre, portada, track, sinopsis, [episodio(nombre, sinopsis, escenas, juego)], 'pelicula')),
    ...series.map(([nombre, portada, track, sinopsis, episodios], num) =>
      titulo(peliculas.length + num, nombre, portada, track, sinopsis, episodios, 'serie'))
  ];

  window.TDN = {
    pareja: { nombreA: 'Osvaldo', nombreB: 'Sandra', apodo: 'Sandra', ciudad: '', viajes: [], anioInicio: '', fechaCodigo: '1411' },
    fotos: {
      hero: 'assets/fotos/hero.webp', perfilB: 'assets/fotos/perfil-sandra.webp',
      perfilPareja: 'assets/fotos/perfil-pareja.webp', final: foto(114), puzzle: foto(6), postCreditos: foto(50)
    },
    media: {
      intro: 'assets/audio/intro.mp3', temporadas: tracks.map(t => t.src),
      canciones: tracks.map(t => t.titulo), videoFinal: 'assets/video/cumple-sandra.mp4', audioRemitente: ''
    },
    acceso: {
      demo: false, password: '90dbca35cc682d5b4c2e53bd171e6cfba19168539c6f0799df31613fd5638a0f', estreno: '',
      pistaPassword: 'Tu cumpleaños en cuatro números. Primero el día, luego el mes.'
    },
    notificacion: { whatsapp: '524492591438', email: '', endpoint: '' },
    sitio: {
      url: 'https://streaming-us-2.rotfstudio.com/osvaldo-sandra/index.html?compartir=1', titulo: 'Feliz cumpleaños, Sandra', coincidencia: 100, clasificacion: 'TP',
      clasificacionTexto: 'Cumpleaños y recuerdos en familia', heroTag: '14 DE NOVIEMBRE',
      heroTop: 'De Osvaldo para Sandra',
      sinopsis: 'Este 14 de noviembre quiero celebrarte con una serenata, las fotos que guardamos y unas cuantas cosas que tenía ganas de decirte. Feliz cumpleaños, Sandra. Con amor, Osvaldo.',
      generos: ['Cumpleaños', 'Romance', 'Familia'], filaRecomendada: 'Feliz cumpleaños, Sandra'
    },
    temporadas,
    extras: [
      { titulo: 'La cuenta de los seis meses', img: foto(4), texto: 'Una foto del cuadro fechado el 1 de enero de 2017. Ahí quedaron anotados seis meses, 26 semanas, 181 días y hasta los minutos.' },
      { titulo: 'La familia en una foto', img: foto(114), texto: 'Hay días que guardo por lo bonito que fue tener a todos tan cerca.' },
      { titulo: 'A la orilla del agua', img: foto(55), texto: 'De todo el álbum, ésta es de las fotos que más ganas me dan de quedarme mirando.' }
    ],
    final: {
      titulo: 'Una carta para Sandra', imagen: foto(114),
      sinopsis: 'Osvaldo dejó una carta de cumpleaños y un último montaje para Sandra.',
      preguntas: [
        '¿Qué foto de las que vimos te devolvió un recuerdo bonito?',
        '¿Qué canción de esta función te gustaría volver a escuchar conmigo?',
        '¿Qué plan en familia te gustaría que repitiéramos?',
        '¿Qué deseo quieres hacer realidad en este año que empiezas?',
        '¿Qué te gustaría que recordáramos de este cumpleaños?'
      ],
      carta: () => `Sandra:

Hoy, 14 de noviembre, quise empezar tu regalo con Las Mañanitas. Después me puse a mirar nuestras fotos y me encontré con aquel cuadro de los seis meses. Me hizo sonreír que hubiéramos contado hasta los minutos. Si lo hiciéramos otra vez, yo pondría la foto del abrazo con el traje azul, alguna de esas selfies de la feria y una de todos juntos en la playa.

Gracias por el cariño con el que acompañas a los tuyos. Lo veo en esa foto donde estás en la orilla del agua, agachada y tendiendo la mano. También lo veo en las fotos de la cancha y en las de casa. Me gusta poder guardar esos ratos contigo y quiero seguir haciendo tiempo para vivirlos.

Para este año te deseo salud, ratos de descanso y ganas de hacer algo que te emocione. Si quieres probar algo nuevo, cuéntamelo. Me encantará ayudarte como pueda y verte celebrarlo cuando salga bien. Yo quiero que volvamos a salir a escuchar música, que nos tomemos más fotos y que nos demos tiempo de platicar con calma.

Feliz cumpleaños, Sandra. Hoy me da mucha alegría poder festejarte. Ven, que me falta darte un abrazo.

Con amor,
Osvaldo`
    },
    creditos: [
      ['De', 'Osvaldo'], ['Para', 'Sandra'], ['Cumpleaños', '14 de noviembre'],
      ['Álbum', 'Recuerdos de pareja y familia'], ['Música de apertura', 'Las Mañanitas · Alejandro Fernández'],
      ['', 'Feliz cumpleaños, Sandra.']
    ],
    postCreditos: {
      imagen: foto(50), etiqueta: 'ESCENA POST-CRÉDITOS',
      texto: 'Cuando cierres esta pantalla, todavía queda un abrazo pendiente.',
      anuncio: 'Feliz cumpleaños, Sandra', subtitulo: 'Con amor, Osvaldo',
      sorpresa: 'Cuando tengas ganas, enséñame tu foto favorita del regalo. Yo ya tengo la mía.'
    }
  };
})();


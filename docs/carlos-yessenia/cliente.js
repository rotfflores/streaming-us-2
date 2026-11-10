/* Nuestro capítulo · De Carlos para Yessenia */
(() => {
  const c = window.TDN;
  const A = 'Carlos';
  const B = 'Yessenia';
  const aniversario = '9 de junio';
  const foto = n => `assets/fotos/foto-${String(n).padStart(2, '0')}.webp`;
  const portada = n => `assets/fotos/portada-${String(n).padStart(2, '0')}.webp`;
  const ambiente = nombre => `assets/ambiente/${nombre}.webp`;
  const clip = nombre => ({ img: `assets/ambiente/${nombre}.mp4`, poster: ambiente(nombre) });
  const escena = (medio, ...texto) => typeof medio === 'string'
    ? { img: medio, poster: medio, texto }
    : { ...medio, texto };
  const mar = clip('olas');
  const ocaso = clip('atardecer');
  const carretera = ambiente('carretera');
  const cielo = ambiente('cielo');

  const pista = (titulo, slug) => ({ titulo, src: `assets/audio/${slug}-climax.mp3` });
  const amarte = pista('Por Amarte Así · Cristian Castro', 'por-amarte-asi');
  const recordar = pista('Nunca Te Olvidaré · Enrique Iglesias', 'nunca-te-olvidare');
  const fuiste = pista('Fuiste Tú · Ricardo Arjona ft. Gaby Moreno', 'fuiste-tu');
  const religion = pista('Eres mi religión · Maná', 'eres-mi-religion');
  const labios = pista('Labios Compartidos · Maná', 'labios-compartidos');
  const pistas = [amarte, recordar, fuiste, religion, labios];

  const historia = `Aunque estemos lejos, tú sigues siendo lo primero que pienso al despertar y lo último que pienso antes de dormir.
La distancia no me ha alejado de ti, me ha enseñado cuánto te amo de verdad. Porque no te tengo cerquita para abrazarte, pero te tengo aquí, en mi corazón, todos los días.
Te extraño, sí, pero no me duele como antes, me da fuerzas. Porque sé que cada día que pasa es un día menos para volver a vernos, para abrazarte fuerte y no soltarte.
Eres mi novia, mi compañera, mi paz. Y aunque haya kilómetros entre nosotros, mi amor no conoce distancia.
Te amo, y te voy a seguir amando hasta que la distancia ya no exista entre nosotros`;

  Object.assign(c.pareja, {
    nombreA: A, nombreB: B, apodos: [A, B], apodo: B, aniversario,
    fechaInicio: '', fechaCodigo: '', anios: 0,
    ciudad: '', primeraCita: '', viajes: [], dificiles: [], anecdota: '', gustosB: [],
    cancion: 'Por Amarte Así', artista: 'Cristian Castro',
    suenos: ['Volver a abrazarnos', 'Acompañar nuestras metas', 'Compartir más días sin despedidas'],
    mensajeFinal: 'Cada día que pasa es un día menos para volver a abrazarte. Te amo, Yessenia. — Carlos'
  });
  Object.assign(c.fotos, {
    hero: 'assets/fotos/hero.webp', perfilB: foto(17), perfilPareja: foto(20),
    t0: foto(14), t1: foto(4), t2: foto(12), t3: foto(20), t4: foto(24), t5: foto(30),
    final: portada(24), puzzle: foto(20), postCreditos: foto(30)
  });
  Object.assign(c.media, {
    intro: 'assets/audio/intro.mp3', temporadas: pistas.map(p => p.src), canciones: pistas.map(p => p.titulo),
    musica: '', videoFinal: 'assets/video/para-yessenia.mp4', audioRemitente: ''
  });
  Object.assign(c.acceso, {
    demo: false, password: 'ddecf8ec2cf569a9d6417db2117971fa326e88f6e2b731136ab1b69ee45d4d98',
    pistaPassword: 'Piensa en nuestro aniversario. Día y mes, en cuatro dígitos.', estreno: ''
  });
  Object.assign(c.notificacion, { whatsapp: '529611962126', email: '', endpoint: '' });
  Object.assign(c.sitio, {
    url: 'https://streaming-us-2.rotfstudio.com/carlos-yessenia/',
    titulo: "Un día menos", coincidencia: 100, clasificacion: 'TP', clasificacionTexto: 'Romance, recuerdos y reencuentro',
    heroTag: 'SOLO PARA YESSENIA', heroTop: 'De Carlos para ti · 9 de junio',
    sinopsis: 'Aunque estemos lejos, sigues siendo mi primer pensamiento del día. Hoy te regalo nuestros recuerdos y las ganas de volver a abrazarte. — Carlos',
    generos: ['Romance', 'Nuestra historia', 'Amor a distancia'], filaRecomendada: 'Un día menos'
  });

  const creditos = musica => [['Para', B], ['De', A], ['Aniversario', aniversario], ['Banda sonora', musica]];
  const episodio = (titulo, descripcion, duracion, track, escenas) => ({
    titulo, descripcion, duracion, musica: track.src, cancion: track.titulo, escenas,
    interaccion: null, recompensa: ''
  });
  const pelicula = (num, titulo, cubierta, track, sinopsis, escenas) => ({
    num, tipo: 'pelicula', titulo, anio: 2026, clasificacion: 'TP', imagen: portada(cubierta),
    musica: track.src, cancion: track.titulo, top10: num === 0, sinopsis, creditos: creditos(track.titulo),
    episodios: [episodio(titulo, sinopsis, 86, track, escenas)]
  });

  c.temporadas.push(
    pelicula(0, 'Un día menos', 24, amarte,
      'Carlos le cuenta a Yessenia cómo se siente amarla desde lejos y qué imagina cada vez que piensa en volver a verla.', [
        escena(foto(24), 'Yessenia, siempre pienso en ti al despertar.', 'Y vuelvo a pensarte antes de dormir.'),
        escena(cielo, 'A veces miro por la ventana', 'y quisiera que estuvieras viendo el cielo conmigo.'),
        escena(foto(1), 'Me haces falta en los momentos más sencillos.', 'En un café, en una tarde que quisiera compartirte.'),
        escena(foto(16), 'La distancia me ha enseñado cuánto te amo.', 'Aunque no pueda abrazarte hoy, te llevo conmigo todos los días.'),
        escena(ocaso, 'Te extraño, sí. Antes me dolía más.', 'Hoy las ganas de verte también me dan fuerzas.'),
        escena(foto(19), 'Cada día que pasa es un día menos.', 'Un día menos para verte llegar y abrazarte fuerte.'),
        escena(foto(10), 'Quiero volver a tenerte cerquita', 'y quedarme un rato ahí, sin prisa por soltarte.'),
        escena(foto(13), 'Eres mi novia, mi compañera, mi paz.', 'Te amo. Feliz 9 de junio. — Carlos')
      ]),
    pelicula(1, 'La orilla que guardo', 4, recordar,
      'Las fotos del mar guardan el sol, las risas y la cercanía que Carlos quiere volver a sentir con Yessenia.', [
        escena(mar, 'Cuando te extraño, a veces vuelvo a estas fotos.', 'Casi alcanzo a oír las olas de aquel día.'),
        escena(foto(8), 'Me acuerdo de tu flor y de tus pasos en la arena.', 'Qué bonito fue poder caminar contigo.'),
        escena(foto(5), 'Ese sol, tus lentes, la arena mojada.', 'Hay días que regresan enteros con una sola imagen.'),
        escena(foto(6), 'También me acuerdo de tu sonrisa en el agua.', 'Me gusta que una foto pueda devolverme ese instante.'),
        escena(foto(7), 'En esta salimos los dos, con el mar detrás.', 'Es de esas fotos que me hacen sentirte un poco más cerca.'),
        escena(foto(4), 'Gracias por compartir conmigo un día así.', 'Me alegra que tengamos recuerdos a los que volver.'),
        escena(foto(3), 'Y este beso me deja pensando', 'en el primero que te voy a dar cuando nos veamos.')
      ]),
    pelicula(2, 'Todos los caminos contigo', 12, fuiste,
      'De los cascos a la plaza de Chapultenango, Carlos vuelve a mirar las fotos que le recuerdan por qué disfruta tanto el camino junto a Yessenia.', [
        escena(carretera, 'Veo una carretera y pienso en nosotros.', 'Me dan ganas de sacar los cascos y salir contigo.'),
        escena(foto(12), 'Aquí casi no se nos ve la cara.', 'Pero en los ojos se nota lo contentos que estábamos.'),
        escena(foto(21), 'También guardo esta de tu saludo con el guante puesto.', 'Esas fotos inesperadas son de mis favoritas.'),
        escena(foto(28), 'En la plaza, con los cascos en la mano,', 'me dan ganas de volver a hacer una parada así contigo.'),
        escena(foto(26), 'Y aquí estamos en Chapultenango, abrazados.', 'Qué gusto tener una foto de los dos en ese lugar.'),
        escena(foto(29), 'El agua atrás, tú al frente, yo sonriendo.', 'Así me gusta recordar lo sencillo de estar juntos.'),
        escena(foto(27), 'Nos queda mucho camino por delante.', 'Me ilusiona pensar que todavía nos faltan fotos por tomar.')
      ]),
    pelicula(3, 'La paz que encuentro en ti', 20, religion,
      'Una dedicatoria a la mujer que Carlos llama su compañera y a las pequeñas cosas que espera volver a compartir con ella.', [
        escena(foto(20), 'Gracias por ser mi compañera, Yessenia.', 'Me hace bien saber que puedo quererte así, de cerca o de lejos.'),
        escena(foto(17), 'Me gusta tu forma de mirar.', 'Y todavía me sorprendo sonriendo cuando veo esta foto.'),
        escena(foto(18), 'Gracias por el cariño que me has dado', 'y por todo lo que hemos aprendido a cuidar juntos.'),
        escena(foto(22), 'Extraño hasta sentarnos a comer.', 'Quiero volver a tenerte enfrente, con todo el tiempo del mundo.'),
        escena(foto(23), 'Extraño encontrarte al volver la cabeza.', 'Es una de esas cosas pequeñas que ahora valoro más.'),
        escena(foto(25), 'Quiero que tengamos muchos días así,', 'de tacos, charla y ganas de quedarnos un rato más.'),
        escena(foto(15), 'Y también tardes para sentarnos a mirar cómo baja el sol.', 'Gracias por ser mi paz. Te amo.')
      ]),
    {
      num: 4, tipo: 'serie', titulo: 'Cuando volvamos a vernos', anio: 2026, clasificacion: 'TP',
      imagen: portada(14), musica: labios.src, cancion: [labios, religion, amarte].map(p => p.titulo).join(' / '),
      sinopsis: 'Tres episodios para imaginar el próximo abrazo, apoyarse en sus metas y celebrar el día en que puedan despertar cerca.',
      creditos: creditos('Maná y Cristian Castro'),
      episodios: [
        episodio('El abrazo que te debo', 'Las ganas de volver a ver a Yessenia, contadas en el tiempo que dura un abrazo.', 56, labios, [
          escena(foto(2), 'He imaginado muchas veces el camino para ir a verte.', 'Lo mejor siempre es la parte en que por fin llego contigo.'),
          escena(ocaso, 'Seguro voy a querer decirte muchas cosas.', 'Puede que primero solo me salga abrazarte.'),
          escena(foto(11), 'Y cuando te tenga cerca,', 'quiero que sepas cuánto me ha hecho falta este momento.'),
          escena(foto(24), 'Un día menos para verte, amor.', 'Cuando llegue el día, voy a abrazarte fuerte.')
        ]),
        episodio('Tus planes y los míos', 'Carlos quiere acompañar los sueños de Yessenia y hacer tiempo para construir planes juntos.', 56, religion, [
          escena(foto(9), 'Quiero escucharte hablar de tus planes.', 'Saber qué te ilusiona y qué puedo hacer para acompañarte.'),
          escena(foto(30), 'También quiero contarte lo que sueño para mí.', 'Y que podamos hacernos espacio para lo que cada uno quiere.'),
          escena(carretera, 'Me gustaría que fuéramos dando pasos para estar más cerca,', 'a nuestro ritmo y hablando de lo que necesitamos.'),
          escena(foto(24), 'Mientras llega el reencuentro,', 'quiero que sigamos cuidándonos desde donde estemos.')
        ]),
        episodio('El próximo 9 de junio', 'Una promesa de cariño para su aniversario y para los días corrientes que sueñan compartir.', 56, amarte, [
          escena(foto(14), 'Cada 9 de junio quiero acordarme de esto:', 'qué suerte tengo de llamarte mi novia.'),
          escena(foto(9), 'Sueño con que un día pueda despertarme', 'y decirte buenos días sin tener que escribirlo.'),
          escena(foto(30), 'Hasta entonces te llevo conmigo,', 'en los días fáciles y en los que se hacen largos.'),
          escena(foto(24), 'Te amo, Yessenia.', 'Y voy a seguir amándote hasta que la distancia ya no exista entre nosotros.')
        ])
      ]
    }
  );

  c.extras = [
    { titulo: 'El mensaje de Carlos', img: foto(13), texto: historia },
    { titulo: '9 de junio', img: foto(20), texto: 'Nuestro aniversario. Quería que tuvieras algo que pudieras abrir cualquier día y sentirme un ratito cerca.' },
    { titulo: 'A un abrazo de distancia', img: foto(11), texto: 'Cuando pienso en volver a verte, lo primero que imagino es quedarme abrazado a ti sin contar los minutos.' },
    { titulo: 'Una foto más', img: foto(30), texto: 'Me quedan ganas de seguir guardando momentos contigo, hasta de esos días en los que no hacemos nada especial.' }
  ];

  Object.assign(c.final, {
    titulo: 'Hasta volver a abrazarte', imagen: portada(24),
    sinopsis: 'Cinco preguntas sobre nosotros y una carta de Carlos para leer cuando quieras sentirlo cerquita.',
    preguntas: [
      '¿Qué recuerdo nuestro te hace sentir que estoy cerquita?',
      '¿Qué es lo primero que te gustaría hacer cuando volvamos a vernos?',
      '¿Qué detalle te gustaría que cuidáramos mientras estamos lejos?',
      '¿Qué sueño tuyo te gustaría que acompañara?',
      '¿Cómo te imaginas un día juntos cuando ya no nos separe la distancia?'
    ],
    carta: () => [
      'Yessenia, amor:',
      'Hoy quise regalarte un lugar al que puedas volver cuando me extrañes. Yo vuelvo a nuestras fotos. A la del mar, a las de los cascos, a esa donde te tengo tan cerca que quisiera quedarme a vivir en el instante.',
      'Te pienso al abrir los ojos y otra vez cuando estoy por dormir. Hay ratos en los que solo quisiera tenerte cerquita. Y hay otros en los que pensar en el abrazo que nos espera me alcanza para seguir con el día.',
      'Gracias por ser mi novia, mi compañera y mi paz. Quiero seguir escuchándote, hacer tiempo para ti y estar pendiente de lo que te ilusiona. Me emociona imaginar que un día podremos compartir un café cualquiera, sin contar cuántos días faltan para vernos.',
      'Feliz 9 de junio, mi amor. Hoy falta un día menos. Cuando te vuelva a ver, voy a abrazarte fuerte.',
      'Te amo.\nCarlos'
    ].join('\n\n')
  });
  c.creditos = [
    ['Para', B], ['De', A], ['Nuestro aniversario', aniversario],
    ['Banda sonora', pistas.map(p => p.titulo).join(' · ')],
    ['Escenas de ambiente', 'Pexels'], ['', 'Nos vemos pronto ♡']
  ];
  c.postCreditos = {
    imagen: foto(30), etiqueta: 'ESCENA POST-CRÉDITOS', texto: 'Yessenia, te guardo un abrazo.',
    anuncio: 'Un día menos', subtitulo: 'Cada día más cerca de volver a vernos.',
    sorpresa: 'Te amo. — Carlos ♡'
  };
})();

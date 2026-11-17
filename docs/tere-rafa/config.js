window.TDN = (() => {
  const nombreA = 'Tere Robles';
  const nombreB = 'Rafa';
  const destinatario = 'Rafa Juan C.';
  const aniversario = '14 de octubre';
  const titulo = 'Encontrarnos de verdad';
  const foto = (n) => `assets/fotos/foto-${String(n).padStart(2, '0')}.webp`;
  const portada = (n) => `assets/fotos/portada-${n}.webp`;

  const imagenIlustrativa = (nombre) => ({ img: `assets/ambiente/${nombre}.webp`, ambientacion: true });
  const video = (nombre, ambientacion = false) => {
    const carpeta = ambientacion ? 'ambiente' : 'video';
    return { img: `assets/${carpeta}/${nombre}.mp4`, poster: `assets/${carpeta}/${nombre}.webp`, ambientacion };
  };
  const escena = (medio, ...texto) => ({ ...(typeof medio === 'number' ? { img: foto(medio) } : medio), texto });
  const pista = (id, cancion) => ({ cancion, musica: `assets/audio/${id}-climax.mp3` });
  const todoContigo = pista('todo-contigo', 'Todo contigo · Álvaro de Luna');
  const teEsperaba = pista('te-esperaba', 'Te Esperaba · Carlos Rivera');
  const razon = pista('razon', 'Razón · Los Caligaris');
  const solamenteTu = pista('solamente-tu', 'Solamente tú · Pablo Alborán');
  const teAmare = pista('te-amare', 'Te Amaré · Miguel Bosé');
  const canciones = [todoContigo, teEsperaba, razon, solamenteTu, teAmare];
  const creditos = [['Para', destinatario], ['De', nombreA], ['Aniversario', aniversario]];

  const episodio = (titulo, descripcion, imagen, track, escenas) => ({
    titulo, descripcion, imagen, escenas, duracion: 6 + escenas.length * 10, ...track
  });
  const pelicula = (num, titulo, track, sinopsis, escenas) => ({
    num, tipo: 'pelicula', titulo, imagen: portada(num), clasificacion: 'TP', anio: 2026,
    sinopsis, creditos: [...creditos, ['Música', track.cancion]], ...track,
    episodios: [episodio(titulo, sinopsis, portada(num), track, escenas)]
  });

  const temporadas = [
    pelicula(0, 'Aquel 14 de octubre', todoContigo,
      'Una coincidencia en una aplicación se convierte, desde la primera conversación, en algo que Tere y Rafa quieren seguir descubriendo.', [
        escena(22, 'Nuestra historia comenzó un 14 de octubre.', 'Fue una coincidencia en una aplicación.'),
        escena(2, 'Desde la primera conversación me dieron ganas de seguir conociéndote.'),
        escena(11, 'Con cada cosa que me contabas, iba descubriendo maneras en las que nos parecíamos.'),
        escena(3, 'Coincidíamos en gustos, en lo que valoramos', 'y hasta en cómo entendemos algunas cosas de la vida.'),
        escena(13, 'Me gustó el respeto con el que empezamos a conocernos.'),
        escena(17, 'Ahora pienso en ese día y me da gusto que hayamos seguido hablando.')
      ]),
    pelicula(1, 'A 8,500 kilómetros', razon,
      'Tere cuenta cómo las conversaciones y las confidencias hicieron que Rafa se sintiera cerca, incluso a miles de kilómetros.', [
        escena(imagenIlustrativa('luna'), 'Entre tú y yo hay 8,500 kilómetros.'),
        escena(12, 'Me sorprende lo cerca que me haces sentir cada vez que hablamos de lo que nos importa.'),
        escena(video('olas', true), 'Han sido pláticas, confidencias, ilusiones y ganas de estar juntos.'),
        escena(18, 'Con el tiempo he podido contarte más de mí', 'y he tenido la suerte de que tú también me cuentes de ti.'),
        escena(16, 'Siento contigo una conexión profunda, en lo emocional y en lo espiritual.'),
        escena(15, 'Y cuando pienso en tenerte cerca, me emociona todo lo que nos queda por vivir.')
      ]),
    pelicula(2, 'Gracias por abrirme tu mundo', solamenteTu,
      'Un agradecimiento de Tere a Rafa por lo que se han contado, por la confianza y por el espacio que se hacen cada día.', [
        escena(1, 'Rafa, gracias por lo que me has confiado en tan poquito tiempo.'),
        escena(imagenIlustrativa('libreta'), 'Gracias por escucharme con calma cuando quiero contarte algo importante.'),
        escena(video('dedicatoria'), 'Qué bonito poder decirte lo que siento y quedarme con ganas de saber cómo lo vives tú.'),
        escena(8, 'Me da gusto compartir contigo lo que me entusiasma, hasta las cosas más sencillas.'),
        escena(25, 'Quiero seguir teniendo detalles contigo, incluso en los días comunes.'),
        escena(20, 'Y quiero que tú también puedas contar conmigo cuando el día se ponga difícil.')
      ]),
    pelicula(3, 'Cuando dijimos casarnos', teAmare,
      'La propuesta de casarse le da un rumbo a lo que imaginaban. Tere piensa en los pasos que quiere tomar con Rafa, desde la libertad de los dos.', [
        escena(23, 'Cuando apareció la idea de casarnos, empecé a imaginar una vida contigo.'),
        escena(video('atardecer', true), 'Cualquier cambio o viaje que hagamos quiero que lo decidamos juntos.'),
        escena(4, 'Quiero que los dos tengamos la libertad de poner en palabras lo que queremos.'),
        escena(19, 'Me ilusiona pensar en compartir un día cualquiera contigo', 'y poder quedarnos un rato más platicando.'),
        escena(21, 'En apenas un mes, lo que sentíamos ya nos daba ganas de hacer planes para toda la vida.'),
        escena(24, 'Tengo ganas de dar esos pasos cuando los dos estemos listos. Te elijo, Rafa.')
      ]),
    {
      num: 4, tipo: 'serie', titulo: 'Elegirnos cada día', imagen: portada(4), clasificacion: 'TP', anio: 2026,
      sinopsis: 'Tres episodios sobre la confianza de hablar de todo, las ganas de estar cerca y el futuro que Tere quiere construir con Rafa.',
      creditos, ...teEsperaba,
      episodios: [
        episodio('Lo que nos fuimos contando', 'Tere recuerda la confianza que encontró en sus primeras conversaciones con Rafa.', foto(10), teEsperaba, [
          escena(10, 'Qué rápido me dieron ganas de contarte más de mí.'),
          escena(14, 'Me gustaba reconocerme en algunas cosas que me decías.'),
          escena(5, 'También me gustaba preguntarte por lo que era importante para ti.'),
          escena(6, 'Gracias por la confianza de hablar conmigo de lo que te ilusiona.'),
          escena(video('mensaje'), 'Yo también quiero que conmigo tengas un lugar para decir lo que sientes.'),
          escena(9, 'Para mí, conocerte sigue siendo una de las cosas más bonitas de esta historia.')
        ]),
        episodio('Un lugar en nuestros días', 'Tere imagina maneras cotidianas de seguir acompañándose mientras los separan 8,500 kilómetros.', foto(18), razon, [
          escena(11, 'Hay días en que me encantaría sentarme contigo y preguntarte cómo te fue.'),
          escena(imagenIlustrativa('luna'), 'Mientras estemos lejos, quiero seguir haciéndome tiempo para escucharte.'),
          escena(18, 'Me hace ilusión que nos sigamos contando qué nos dio risa y qué se nos complicó.'),
          escena(video('retrato'), 'Se me antoja ese abrazo largo que a veces se me queda pendiente cuando acabamos de hablar.'),
          escena(7, 'Quiero seguir cuidando esa manera tan nuestra de sentirnos cerca.'),
          escena(16, 'Y que sepas que puedes contar conmigo, aunque ese día estemos a 8,500 kilómetros.')
        ]),
        episodio('Todos los pasos que vienen', 'Después de hablar de casarse, Tere le cuenta a Rafa qué quiere cuidar mientras construyen sus planes.', foto(24), todoContigo, [
          escena(video('arena'), 'Me hace ilusión que tengamos tanto por delante para imaginar juntos.'),
          escena(24, 'Quiero que, cuando haya que tomar una decisión grande, podamos hablarla con calma.'),
          escena(20, 'Quiero celebrar tus metas y seguir contándote las mías.'),
          escena(video('atardecer', true), 'Ojalá nos queden muchas sobremesas para platicar de todo esto.'),
          escena(23, 'Qué bonito que aquel 14 de octubre nos haya dado ganas de elegirnos.'),
          escena(17, 'No nos encontramos cerca,', 'nos encontramos de verdad.')
        ])
      ]
    }
  ];

  const historia = [
    'Nuestra historia comenzó un 14 de octubre…',
    'Lo que empezó con una coincidencia en una aplicación se convirtió, desde el primer día, en una conexión extraordinaria. Descubrimos que compartíamos gustos, valores, respeto y una manera muy especial de sentir y entender la vida.',
    'Aunque nos separan 8,500 kilómetros, hemos conseguido estar más cerca que muchas parejas que se tienen a unos pasos. Entre conversaciones, confidencias, ilusiones y deseos, fuimos construyendo un amor que hoy es emocional, espiritual y profundamente apasionado.',
    'Y entonces llegó una propuesta que transformó nuestros sueños en un proyecto de vida: casarnos. Porque si algo tenemos claro es que la distancia no define lo que sentimos ni limita lo que queremos construir.',
    'Hoy sabemos que cualquier cambio, cualquier viaje y cualquier paso que demos será una decisión tomada desde nuestra propia libertad, pero sobre todo desde el amor y las ganas de elegirnos.',
    'Así, en apenas un mes, dejamos de ser dos desconocidos para comenzar a escribir la historia que queremos compartir toda la vida.',
    'No nos encontramos cerca, nos encontramos de verdad.'
  ].join('\n\n');

  return {
    pareja: { nombreA, nombreB, nombreCompletoA: nombreA, nombreCompletoB: destinatario, aniversario, anioInicio: '', ciudad: '', viajes: [] },
    fotos: {
      hero: 'assets/fotos/hero.webp', perfilB: 'assets/fotos/perfil-rafa.webp',
      perfilPareja: 'assets/fotos/perfil-juntos.webp',
      t0: foto(7), t1: foto(11), t2: foto(13), t3: foto(17), t4: foto(18), t5: foto(24)
    },
    media: {
      intro: 'assets/audio/intro.mp3', temporadas: temporadas.map((s) => s.musica),
      videoFinal: 'assets/video/para-rafa.mp4'
    },
    acceso: {
      demo: false, password: '4103f0a4e707b1c7bebbc42809ab0ace8dd3f56d844d7903bfe9f95a2ccc6972',
      pistaPassword: 'El día y el mes de nuestro aniversario (DDMM).', estreno: ''
    },
    notificacion: { whatsapp: '529843862123', email: '', endpoint: '' },
    sitio: {
      titulo, url: 'https://streaming-us-2.rotfstudio.com/tere-rafa/', coincidencia: 100, clasificacion: 'TP', anio: 2026,
      clasificacionTexto: 'Romance y recuerdos compartidos',
      heroTag: 'DE TERE ROBLES PARA RAFA JUAN C.', heroTop: aniversario, filaRecomendada: 'Nuestro capítulo',
      sinopsis: 'Se conocieron un 14 de octubre, a 8,500 kilómetros de distancia. En apenas un mes, ya hablaban de pasar la vida juntos.',
      generos: ['Romance', 'Basada en su historia']
    },
    temporadas,
    extras: [{ titulo: 'La historia que escribió Tere', img: foto(22), texto: historia }],
    final: {
      titulo: 'Lo que quiero vivir contigo',
      imagen: portada(5),
      sinopsis: 'Una carta de Tere para Rafa, cinco preguntas para conversar juntos y un último montaje.',
      preguntas: [
        '¿Qué recuerdas primero cuando piensas en aquel 14 de octubre?',
        '¿Cuándo te diste cuenta de lo cerca que podíamos sentirnos aun a 8,500 kilómetros?',
        '¿Qué es lo que más disfrutas de nuestras conversaciones?',
        '¿Qué te hace más ilusión de construir una vida juntos?',
        '¿Qué te gustaría que siguiéramos cuidando al tomar nuestras próximas decisiones?'
      ],
      carta: () => [
        'Rafa, amor:',
        'Si vuelvo a aquel 14 de octubre, me acuerdo de las ganas que me dieron de seguir conociéndote. Me gustaba descubrir lo que compartíamos y también escucharte cuando me contabas algo que yo habría visto de otra manera.',
        'Gracias por hacerme un lugar en tus días. Por contarme tus ilusiones y por escuchar las mías. A 8,500 kilómetros he llegado a sentirte muy cerca. Y a veces, al despedirnos, me quedo con unas ganas enormes de abrazarte y seguir platicando otro rato.',
        'Cuando empezamos a hablar de casarnos me dio mucha ilusión pensar en todo lo que podríamos compartir. Me encantaría que, cuando toque decidir un viaje, un cambio o cualquier paso grande, nos tomemos el tiempo de hablarlo. Quiero saber qué te hace ilusión a ti y que los dos podamos elegirlo con libertad.',
        'Gracias por este comienzo, Rafa. Todavía me sorprende todo lo que pudo cambiar en un mes. Me hace feliz que al pensar en lo que viene me den tantas ganas de vivirlo contigo.',
        'No nos encontramos cerca, nos encontramos de verdad.',
        'Con amor,\nTere'
      ].join('\n\n')
    },
    creditos: [...creditos, ['Banda sonora', canciones.map((track) => track.cancion).join(' / ')], ['Escenas ilustrativas', 'Pexels']],
    postCreditos: {
      imagen: foto(15), etiqueta: 'ESCENA POST-CRÉDITOS',
      texto: 'Cuando estemos juntos, tengo ganas de abrazarte y quedarme ahí un rato.',
      anuncio: 'Continuará',
      subtitulo: 'Todavía nos quedan muchas cosas por contarnos.',
      sorpresa: 'Feliz aniversario, Rafa. Con amor, Tere.'
    }
  };
})();


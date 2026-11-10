/* Nuestro capítulo · De Jaqueline Aguirre para Carlos Vargas Mora */
(() => {
  const c = window.TDN;
  const remitente = 'Jaqueline Aguirre';
  const destinatario = 'Carlos Vargas Mora';
  const foto = n => `assets/fotos/foto-${String(n).padStart(2, '0')}.webp`;
  const portada = n => `assets/fotos/portada-${String(n).padStart(2, '0')}.webp`;
  const stock = slug => `assets/ambiente/${slug}.webp`;
  const clip = (carpeta, slug) => ({
    img: `assets/${carpeta}/${slug}.mp4`,
    poster: `assets/${carpeta}/${slug}.webp`
  });
  const escena = (medio, ...texto) => typeof medio === 'string'
    ? { img: medio, poster: medio, texto }
    : { ...medio, texto };
  const horizonte = clip('ambiente', 'horizonte');
  const olas = clip('ambiente', 'olas');
  const momento = clip('video', 'entre-nosotros');
  const brindis = clip('video', 'otro-brindis');

  const pista = (titulo, slug) => ({ titulo, src: `assets/audio/${slug}-climax.mp3` });
  const teAmo = pista('Te Amo · Alexander Acha', 'te-amo');
  const disfruto = pista('Disfruto · Carla Morrison', 'disfruto');
  const contigo = pista('Contigo Quiero · Reyli Barba', 'contigo-quiero');
  const brillas = pista('Brillas · León Larregui', 'brillas');
  const teVi = pista('Te Vi Venir · Sin Bandera', 'te-vi-venir');
  const pistas = [teAmo, disfruto, contigo, brillas, teVi];

  Object.assign(c.pareja, {
    nombreA: 'Jaqueline', nombreB: 'Carlos', apodos: ['Jaqueline', 'Carlos'], apodo: 'Carlos',
    aniversario: '', fechaInicio: '', fechaCodigo: '', anios: 5,
    ciudad: '', primeraCita: '', viajes: [], dificiles: [], anecdota: '', gustosB: [],
    cancion: 'Te Amo', artista: 'Alexander Acha',
    suenos: ['Escucharnos con paciencia', 'Acompañarnos en nuestros proyectos', 'Hacer espacio para más días juntos'],
    mensajeFinal: 'Cinco años después, todavía me ilusiona lo que nos falta por escribir. Te amo, Carlos. — Jaqueline'
  });
  Object.assign(c.fotos, {
    hero: 'assets/fotos/hero.webp', perfilB: foto(17), perfilPareja: foto(7),
    t0: foto(16), t1: foto(7), t2: foto(15), t3: foto(4), t4: foto(19), t5: foto(1),
    final: portada(1), puzzle: foto(16), postCreditos: foto(19)
  });
  Object.assign(c.media, {
    intro: 'assets/audio/intro.mp3', temporadas: pistas.map(p => p.src), canciones: pistas.map(p => p.titulo),
    musica: '', videoFinal: 'assets/video/para-carlos.mp4', audioRemitente: ''
  });
  Object.assign(c.acceso, { demo: false, password: '', pistaPassword: '', estreno: '' });
  Object.assign(c.notificacion, { whatsapp: '', email: '', endpoint: '' });
  Object.assign(c.sitio, {
    url: 'https://streaming-us-2.rotfstudio.com/jaqueline-carlos/', titulo: 'Cinco años de escribirnos juntos', coincidencia: 100,
    clasificacion: 'TP', clasificacionTexto: 'Romance y recuerdos',
    heroTag: 'SOLO PARA CARLOS', heroTop: 'De Jaqueline para ti · Cinco años juntos',
    sinopsis: 'Lo nuestro fue tomando calor poco a poco. Después de cinco años, quiero volver a mirar contigo lo que vivimos y celebrar todo lo que aún podemos escribir. — Jaqueline',
    generos: ['Romance', 'Nuestra historia', 'Aniversario'], filaRecomendada: 'Cinco años de escribirnos juntos'
  });

  const creditos = musica => [['Para', destinatario], ['De', remitente], ['Nuestra historia', 'Cinco años juntos'], ['Banda sonora', musica]];
  const episodio = (titulo, descripcion, duracion, track, escenas, cubierta) => ({
    titulo, descripcion, duracion, musica: track.src, cancion: track.titulo,
    imagen: portada(cubierta), escenas, interaccion: null, recompensa: ''
  });
  const pelicula = (num, titulo, cubierta, track, sinopsis, escenas) => ({
    num, tipo: 'pelicula', titulo, anio: 2026, clasificacion: 'TP', imagen: portada(cubierta),
    musica: track.src, cancion: track.titulo, top10: num === 0, sinopsis, creditos: creditos(track.titulo),
    episodios: [episodio(titulo, sinopsis, 78, track, escenas, cubierta)]
  });

  c.temporadas.push(
    pelicula(0, 'Cinco años de escribirnos juntos', 16, teAmo,
      'Jaqueline mira lo que han construido desde que se cruzaron sus caminos. Cinco años después, todavía le emociona lo que les falta por escribir.', [
        escena(foto(16), 'Carlos, ya van cinco años desde que se cruzaron nuestros caminos.', 'Todavía me sorprende todo lo que cabía en ese primer encuentro.'),
        escena(stock('fogata'), 'Lo nuestro se parece a una fogata que fue tomando calor poco a poco.', 'Con el tiempo aprendimos a cuidarla entre los dos.'),
        escena(foto(3), 'En estos años me has visto reír hasta que me duele la cara.', 'Y también me has visto llorar cuando ni yo sabía cómo explicar lo que sentía.'),
        escena(foto(9), 'Nos hemos conocido en todas esas versiones.', 'Hoy te quiero con mucho más de lo que sabía de ti al principio.'),
        escena(horizonte, 'Cuando pienso en lo que hemos vivido, me da gusto saber que seguimos aquí.', 'Y que todavía podemos sorprendernos el uno al otro.'),
        escena(foto(1), 'Te amo, Carlos.', 'Cinco años juntos y todavía tengo ganas de escribir contigo lo que sigue.')
      ]),
    pelicula(1, 'Volver a escucharnos', 7, teVi,
      'Hubo silencios y desacuerdos. Jaqueline recuerda el esfuerzo de volver a hablarse, perdonarse y buscar la calma juntos.', [
        escena(stock('lluvia'), 'Hubo días en que nos costó hasta empezar a hablar.', 'A veces pesaba más el silencio que lo que teníamos que decirnos.'),
        escena(foto(10), 'En los desacuerdos también nos tocó aprender del otro.', 'A mí me costaba poner en palabras algunas cosas que me dolían.'),
        escena(olas, 'Cuando bajaba el enojo, podíamos volver a escucharnos.', 'Ahí empezábamos a entender qué había sentido el otro.'),
        escena(foto(5), 'Gracias por las veces que volvimos a hablar con calma.', 'Y por darme espacio para decir lo que me había guardado.'),
        escena(foto(13), 'Perdonarnos nos permitió seguir, con más cuidado.', 'Quiero que sigamos aprendiendo a pedir perdón y a escucharlo.'),
        escena(foto(7), 'Te agradezco que hayamos encontrado tantas veces la manera de acercarnos.', 'Me acuerdo de eso cuando pienso en todo lo que hemos construido.')
      ]),
    pelicula(2, 'La calma de tus brazos', 15, disfruto,
      'Una carta en escenas sobre la paciencia de Carlos, sus miradas cómplices y los abrazos que Jaqueline todavía recuerda.', [
        escena(foto(15), 'Carlos, gracias por esos abrazos que llegaron justo cuando los necesitaba.', 'A veces me bastaba sentirte cerca para poder respirar más tranquila.'),
        escena(foto(6), 'Gracias por tu paciencia y por el cariño de todos los días.', 'Hay gestos tuyos que se me quedaron grabados por lo pequeños que eran.'),
        escena(foto(12), 'Me gusta cuando nos miramos y ya entendimos el chiste.', 'Es una complicidad que hemos ido haciendo nuestra.'),
        escena(momento, 'Me gusta volver a vernos en movimiento.', 'Hay gestos que una foto alcanza a guardar solo a medias.'),
        escena(foto(14), 'Qué bien me hace tener ratos contigo para bajar el ritmo.', 'Hasta en una tarde cualquiera encuentro algo que quiero recordar.'),
        escena(foto(8), 'También quiero ser un lugar tranquilo para ti.', 'Que puedas contarme lo que te pesa y encontrarme cerca para escucharte.')
      ]),
    pelicula(3, 'Los días que guardo', 4, brillas,
      'Del paseo en lancha a un brindis, Jaqueline vuelve a las fotos y al video de esos días que le gusta recordar con Carlos.', [
        escena(foto(4), 'Por las risas que todavía me acuerdo cómo sonaban.', 'Y por los brindis que me dan ganas de repetir contigo.'),
        escena(foto(2), 'Una mesa, dos bebidas y tú ahí conmigo.', 'Qué gusto que quedara una foto de esa salida.'),
        escena(foto(17), 'Esta del paseo en lancha siempre me hace detenerme.', 'Quiero volver a salir así contigo, con tiempo para mirar alrededor.'),
        escena(foto(20), 'También guardo esta de la plaza, al pie de las alas.', 'Me gusta recorrer en fotos los ratitos de aquel paseo.'),
        escena(brindis, 'De este momento me alegra tener un video.', 'Se ve mejor ese segundo en que nos miramos antes de brindar.'),
        escena(foto(11), 'Me da gusto haber guardado tanto de esos días.', 'Cada foto me devuelve las ganas de estar ahí contigo.')
      ]),
    {
      num: 4, tipo: 'serie', titulo: 'Todo lo que nos queda por escribir', anio: 2026, clasificacion: 'TP',
      imagen: portada(19), musica: contigo.src, cancion: [contigo, disfruto, brillas].map(p => p.titulo).join(' / '),
      sinopsis: 'Tres episodios para hablar de lo que Jaqueline quiere cuidar con Carlos, de cómo acompañarse y de los recuerdos que todavía les quedan por hacer.',
      creditos: creditos('Reyli Barba, Carla Morrison y León Larregui'),
      episodios: [
        episodio('Elegirnos a diario', 'Jaqueline quiere seguir haciendo tiempo para escucharse, sobre todo cuando el día se les hace largo.', 58, contigo, [
          escena(stock('fogata'), 'Quiero que sigamos cuidando esto que encendimos entre los dos.', 'Que podamos acercarnos aun cuando cueste encontrar las palabras.'),
          escena(foto(15), 'Me gustaría preguntarte más seguido cómo estás', 'y quedarme a escuchar la respuesta, incluso cuando tengamos prisa.'),
          escena(foto(9), 'Quiero que nos demos permiso de decirnos cuando algo nos duele.', 'Y que aprendamos a recibirlo con la misma paciencia que pedimos.'),
          escena(foto(7), 'Esos son los detalles con los que quiero seguir eligiéndote.', 'Un día a la vez, con cariño y con ganas.')
        ], 7),
        episodio('Hacerle sitio a tus sueños', 'Un deseo de acompañarse en los proyectos de cada uno y hacer espacio para los que elijan juntos.', 58, disfruto, [
          escena(foto(18), 'Me gusta imaginar qué planes podríamos ir haciendo juntos.', 'También quiero saber cuáles te ilusionan a ti.'),
          escena(horizonte, 'Me gustaría que tuvieras espacio para intentar lo que sueñas.', 'Yo quiero estar cerca para echarte la mano y celebrar tus avances.'),
          escena(foto(8), 'También quiero contarte mis propios planes.', 'A ver qué idea se nos ocurre cuando los platiquemos con calma.'),
          escena(foto(19), 'Podemos ir dando pasos a nuestro ritmo.', 'Me ilusiona que nos podamos acompañar en el camino.')
        ], 19),
        episodio('Una página más', 'Jaqueline brinda por las salidas sin prisa, las fotos pendientes y los años que todavía quiere compartir.', 58, brillas, [
          escena(foto(16), 'Me gustaría volver a salir contigo sin tanta prisa.', 'Guardar otra foto de los dos en un día que nos haya hecho bien.'),
          escena(olas, 'Quiero más tardes para ver cómo cambia la luz.', 'Y más ratos en los que se nos olvide mirar la hora.'),
          escena(foto(19), 'Y cuando volvamos a mirar todo esto,', 'ojalá tengamos muchos recuerdos nuevos que contarnos.'),
          escena(foto(1), 'Gracias por estos cinco años, Carlos.', 'Todavía me emociona pensar que la próxima página la vamos a escribir juntos.')
        ], 1)
      ]
    }
  );

  c.extras = [
    {
      titulo: 'Cinco años de escribirnos juntos', img: foto(16), texto: [
        'Hay historias que empiezan con fuegos artificiales. La nuestra se parece más a una fogata que fue tomando calor poco a poco.',
        'Hace cinco años se cruzaron nuestros caminos, Carlos. Desde entonces nos hemos conocido en los días de risas incontenibles y también en esos ratos en que el mundo pesa y cuesta decir lo que sentimos.',
        'Tuvimos desacuerdos, discusiones y silencios largos. Cada vez que logramos volver a conversar con calma, aprendimos algo de cómo cuidarnos. Pudimos pedir perdón, entendernos un poco más y elegir seguir juntos.',
        'Gracias por ser mi refugio cuando el día pesa. Me acuerdo de tus miradas cómplices, de tu paciencia y de cómo me tomas la mano cuando más lo necesito. Espero que tú también hayas encontrado en mí un lugar donde descansar y alguien con quien compartir lo que te ilusiona.',
        'Guardo nuestras risas, las lágrimas que nos secamos, los proyectos que hemos compartido y los miedos que fuimos dejando atrás. Aquí estamos, con más de qué hablar y con más ganas de cuidarnos. Estos cinco años son el primer capítulo. Qué bonito que aún nos queden tantas páginas.',
        'Con amor,\nJaqueline'
      ].join('\n\n')
    },
    { titulo: 'Gracias por tu paciencia', img: foto(15), texto: 'Gracias por quedarte cerquita cuando me costaba hablar. Me acuerdo de tus abrazos cuando pienso en lo que significa sentirme acompañada.' },
    { titulo: 'Un ratito más en Valle', img: foto(19), texto: 'Veo esta foto en Valle y me acuerdo de lo mucho que disfruto tener tiempo para salir y estar contigo.' },
    { titulo: 'Lo que todavía sueño contigo', img: foto(7), texto: 'Quiero seguir haciendo tiempo para nosotros, acompañar lo que sueñas y llenar de recuerdos las páginas que nos faltan.' }
  ];

  Object.assign(c.final, {
    titulo: 'Lo que quiero seguir escribiendo contigo', imagen: portada(1),
    sinopsis: 'Cinco preguntas para Carlos, una carta de Jaqueline y un último video para celebrar sus cinco años.',
    preguntas: [
      '¿Qué recuerdo de estos cinco años te gustaría volver a vivir conmigo?',
      '¿Qué te ha hecho sentir más acompañado en los días difíciles?',
      '¿Qué detalle nuestro te gustaría que siguiéramos cuidando?',
      '¿Qué proyecto te ilusiona y cómo quisieras que te acompañara?',
      'Si pudiéramos elegir un día para empezar nuestra próxima página, ¿cómo te gustaría pasarlo?'
    ],
    carta: () => [
      'Carlos, amor:',
      'Cuando vuelvo a ver nuestras fotos, me dan ganas de sentarme contigo y recordar qué pasó antes y después de cada una. La lancha, las salidas, aquel rato en Valle. También pienso en lo que casi nunca queda en una foto: tus abrazos cuando el día pesaba y las conversaciones en las que fuimos haciendo las paces.',
      'Gracias por tu paciencia, por los detalles con los que me has hecho sentir querida y por las veces que volvimos a buscarnos para hablar. Me alegra haber crecido contigo en estos años. Quiero seguir haciendo espacio para lo que te importa, saber qué sueñas y contarte lo que yo también quiero intentar.',
      'Hoy celebro que hayamos llegado hasta aquí. Me ilusionan las risas que todavía nos faltan, las tardes sin prisa y todas las veces en que nos quedará algo más que contarnos.',
      'Te amo, Carlos. Gracias por escribir estos cinco años conmigo.',
      'Jaqueline Aguirre'
    ].join('\n\n')
  });
  c.creditos = [
    ['Para', destinatario], ['De', remitente], ['Nuestra historia', 'Cinco años juntos'],
    ['Banda sonora', pistas.map(p => p.titulo).join(' · ')],
    ['Escenas de ambiente', 'Pexels'], ['', 'Continuará ♡']
  ];
  c.postCreditos = {
    imagen: foto(19), etiqueta: 'ESCENA POST-CRÉDITOS', texto: 'Carlos, todavía nos quedan páginas.',
    anuncio: 'Cinco años de escribirnos juntos', subtitulo: 'La próxima página empieza contigo.',
    sorpresa: 'Te amo. — Jaqueline ♡'
  };
})();

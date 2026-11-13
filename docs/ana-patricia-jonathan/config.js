window.TDN = (() => {
  const titulo = 'Un poquito más';
  const fecha = '3 de agosto de 2026';
  const pareja = { nombreA: 'Ana Patricia', nombreB: 'Jonathan Giovanni', ciudad: '', viajes: [] };
  const foto = (id) => `assets/fotos/foto-${String(id).padStart(2, '0')}.webp`;
  const portada = (id) => `assets/fotos/portada-${id}.webp`;
  const ilustracion = (id, video = false) => ({
    img: `assets/ambiente/${id}.${video ? 'mp4' : 'webp'}`,
    ...(video && { poster: `assets/ambiente/${id}.webp` }),
    ambientacion: true
  });
  const escena = (medio, texto) => ({
    ...(typeof medio === 'number' ? { img: foto(medio) } : medio), texto
  });

  const pista = (id, cancion) => ({ cancion, musica: `assets/audio/${id}.mp3` });
  const meMuero = pista('me-muero', 'Me Muero · La Quinta Estación');
  const sorpresa = pista('mi-sorpresa-fuiste-tu', 'Mi Sorpresa Fuiste Tú · Calibre 50');
  const coleccionista = pista('coleccionista-de-canciones', 'Coleccionista de Canciones · Camila');
  const enamorado = pista('enamorado-por-primera-vez', 'Enamorado por Primera Vez · Enrique Iglesias');
  const heroe = pista('heroe', 'Héroe · Enrique Iglesias');
  const pistas = [meMuero, sorpresa, coleccionista, enamorado, heroe];
  const corteEpisodio = (track) => ({ ...track, musica: track.musica.replace('.mp3', '-episodio.mp3') });

  const dedicatoria = [
    '❤️‍🔥💌 Hay algo que me pasa contigo y es que, incluso en los días más normales, encuentro motivos para enamorarme un poquito más. 🥹❤️ A veces basta con imaginar tu sonrisa, recordar tu voz o pensar en la forma en que me miras para sentir que mi corazón tiene una razón especial para latir.',
    'No quiero que nuestro amor sea solamente bonito cuando todo marcha bien. Quiero amarte también cuando estés cansado, cuando no tengas ganas de hablar, cuando necesites silencio o cuando la vida te pese demasiado. 🫂🌹',
    'Quiero aprender tus tristezas, cuidar tus sueños y ser esa persona con la que nunca tengas que fingir que todo está perfecto. Porque para mí, amarte no es solamente disfrutar de tu felicidad… también es querer acompañarte en tus días difíciles. ❤️✨',
    'Y si algún día me preguntas qué es lo que más amo de ti, quizá no encuentre una respuesta exacta. Solo sé que mi corazón se siente profundamente feliz de haberte encontrado. 💋💕'
  ];
  const creditos = [['Para', pareja.nombreB], ['De', pareja.nombreA]];
  const episodio = (id, titulo, descripcion, track, escenas) => ({
    titulo, descripcion, imagen: portada(id), duracion: 6 + 11 * escenas.length, escenas, ...track
  });
  const pelicula = (num, titulo, track, sinopsis, escenas) => ({
    num, tipo: 'pelicula', titulo, imagen: portada(num), anio: 2026, clasificacion: 'TP',
    sinopsis, top10: num === 0, ...track, creditos: [...creditos, ['Música', track.cancion]],
    episodios: [episodio(num, titulo, sinopsis, track, escenas)]
  });

  const temporadas = [
    pelicula(0, titulo, meMuero,
      'Ana Patricia guarda las sonrisas, las miradas y los abrazos que la hacen enamorarse de Jonathan Giovanni en los días más normales.', [
        escena(5, 'Jonathan, a veces basta con acordarme de tu sonrisa para que el día me cambie.'),
        escena(4, 'Me pasa con tu voz y con esa forma tuya de mirarme. Luego me quedo sonriendo sola.'),
        escena(ilustracion('luces'), 'Hasta en un día cualquiera encuentro un motivo nuevo para enamorarme de ti.'),
        escena(17, 'Me encanta tenerte cerquita, sentir tus brazos y quedarme ahí un ratito más.'),
        escena(1, 'Así me pasa contigo. Cada vez que te vuelvo a mirar, me enamoro un poquito más.')
      ]),
    pelicula(1, 'Qué suerte encontrarte', sorpresa,
      'Un agradecimiento por los paseos, las fotos espontáneas y la alegría de haber coincidido.', [
        escena(8, 'Gracias por las comidas que se alargan solo porque estamos a gusto platicando.'),
        escena(11, 'Me gusta volver a esta foto y acordarme de las luces, del ruido y de lo feliz que estaba contigo.'),
        escena(6, 'Gracias por los ratos en los que podemos hacer caras y reírnos de nosotros mismos.'),
        escena(16, 'Miro esta foto y pienso en la suerte que tuve de coincidir contigo.'),
        escena(2, 'Me hace profundamente feliz haberte encontrado, Jonathan Giovanni.')
      ]),
    pelicula(2, 'También en silencio', heroe,
      'Una promesa de acompañarlo con paciencia, incluso cuando la vida pese y cueste encontrar palabras.', [
        escena(ilustracion('lluvia', true), 'Cuando la vida te pese, quiero que puedas sentarte conmigo y tomarte tu tiempo.'),
        escena(9, 'Si llegas cansado o necesitas silencio, puedo quedarme aquí contigo.'),
        escena(12, 'Puedes decirme que hoy fue difícil. Conmigo puedes sentirte tal como estés.'),
        escena(ilustracion('luces'), 'Quiero aprender a escuchar lo que te entristece y saber cómo darte espacio cuando lo necesites.'),
        escena(15, 'En los días difíciles también quiero estar cerquita de ti.')
      ]),
    pelicula(3, 'Lo que quiero cuidar', enamorado,
      'Ana Patricia imagina los paseos, las conversaciones y los sueños que quiere seguir compartiendo con él.', [
        escena(ilustracion('olas', true), 'Me gustaría que volvamos al mar y nos quedemos en la orilla hasta que se haga tarde.'),
        escena(13, 'Quiero que nos sigamos dando tiempo para salir, hacer fotos y volver a los lugares que nos gustan.'),
        escena(14, 'Quiero hacerle espacio a lo que te ilusiona y estar ahí para celebrar tus logros.'),
        escena(ilustracion('mar'), 'También quiero que tengamos tardes tranquilas para hablar de lo que soñamos y planearlo juntos.'),
        escena(3, 'Me hace ilusión seguir caminando de tu mano, a nuestro ritmo.')
      ]),
    {
      num: 4, tipo: 'serie', titulo: 'Todo lo que me pasa contigo', imagen: portada(4),
      anio: 2026, clasificacion: 'TP', ...coleccionista, creditos,
      sinopsis: 'Tres episodios sobre lo que Ana Patricia guarda de sus días juntos, lo que quiere decirle y lo que le ilusiona vivir con él.',
      episodios: [
        episodio(6, 'Fotos que me hacen volver', 'Un paseo por la feria, el parque y una noche en el Ángel.', coleccionista, [
          escena(11, 'De la feria me quedo con esta foto, con todas esas luces detrás de nosotros.'),
          escena(5, 'Del parque me gusta recordar lo sencillo que se siente pasar una tarde contigo.'),
          escena(4, 'A veces una foto que sacamos sin pensarlo termina siendo la que más ganas me da de volver a ese día.'),
          escena(3, 'Si pudiera repetir esta noche en el Ángel, te volvería a tomar de la mano en las escaleras.')
        ]),
        episodio(7, 'A tu lado, a tu ritmo', 'Una manera de decirle que puede compartir sus alegrías y sus días pesados.', corteEpisodio(heroe), [
          escena(ilustracion('lluvia', true), 'Si algún día te cuesta encontrar palabras, podemos quedarnos un rato en silencio.'),
          escena(10, 'Quiero que conmigo te sientas en confianza para contarme las cosas a tu ritmo.'),
          escena(12, 'Quiero conocer eso que todavía te emociona intentar y echarte porras mientras lo haces.'),
          escena(17, 'Y cuando por fin llegue ese día que tanto esperabas, quiero abrazarte y celebrarlo contigo.')
        ]),
        episodio(8, 'Que vengan más días así', 'Un deseo para los días que siguen al 3 de agosto y para las fotos que faltan por tomar.', corteEpisodio(sorpresa), [
          escena(ilustracion('mar'), 'Ojalá sigamos encontrando lugares donde parar un rato y hacer otra foto juntos.'),
          escena(7, 'Me gusta guardar lo nuestro hasta en un dibujo. Al verlo me dan ganas de volver a abrazarte así.'),
          escena(16, 'Gracias por los ratos de luz, por los paseos y por lo fácil que es sonreír cuando te tengo cerca.'),
          escena(1, 'Qué feliz me hace haberte encontrado. Te amo, Jonathan Giovanni. — Ana Patricia')
        ])
      ]
    }
  ];

  return {
    pareja,
    fotos: {
      hero: 'assets/fotos/hero.webp', perfilB: 'assets/fotos/perfil-jonathan.webp',
      perfilPareja: 'assets/fotos/perfil-ana.webp',
      t0: foto(5), t1: foto(8), t2: foto(11), t3: foto(15), t4: foto(17), t5: foto(1)
    },
    media: {
      intro: 'assets/audio/intro.mp3',
      temporadas: temporadas.map(({ musica }) => musica),
      videoFinal: 'assets/video/un-poquito-mas.mp4'
    },
    acceso: {
      demo: false, password: 'b1ad064ec8ee2fb5c71605de8e9f9e280f2d2d9a2c43872d18ad9625982c16a1',
      pistaPassword: 'Nuestra fecha de aniversario: día, mes y los últimos dos dígitos del año.',
      estreno: ''
    },
    notificacion: { whatsapp: '525549331149', email: '', endpoint: '' },
    sitio: {
      titulo, url: 'https://streaming-us-2.rotfstudio.com/ana-patricia-jonathan/index.html?compartir=1',
      coincidencia: 100, clasificacion: 'TP',
      clasificacionTexto: 'Una dedicatoria de aniversario',
      heroTag: 'DE ANA PATRICIA PARA JONATHAN GIOVANNI', heroTop: fecha,
      sinopsis: 'Jonathan, recordar tu voz me hace enamorarme otro poquito. Gracias por los días que compartimos. También quiero estar contigo cuando necesites silencio.',
      generos: ['Romance', 'Aniversario', 'Recuerdos'], filaRecomendada: temporadas[0].titulo
    },
    temporadas,
    extras: [
      { titulo: 'Una noche en el Ángel', img: foto(3), texto: 'Me gusta recordar esta noche y vernos en la foto, bajando las escaleras de la mano.' },
      { titulo: 'Una foto junto al mar', img: foto(13), texto: 'Quiero volver a caminar por la orilla contigo, aunque ya se haya hecho de noche.' },
      { titulo: 'Nosotros en un dibujo', img: foto(7), texto: 'Guardaría mil versiones de ese abrazo.' }
    ],
    final: {
      titulo: 'Para ti, Jonathan Giovanni', imagen: portada(5),
      sinopsis: 'La carta de Ana Patricia y un último montaje de sus fotos.',
      preguntas: [
        '¿Qué foto de los dos te hizo sonreír primero?',
        '¿Qué momento sencillo de los dos te gusta recordar?',
        '¿Cómo te gustaría que te acompañe cuando tengas un día pesado?',
        '¿Qué sueño tuyo te gustaría que celebremos juntos?',
        '¿Qué lugar te gustaría visitar conmigo la próxima vez?'
      ],
      carta: () => ['Jonathan Giovanni,', ...dedicatoria, 'Con todo mi amor,\nAna Patricia'].join('\n\n')
    },
    creditos: [
      ...creditos, ['Aniversario', fecha],
      ['Banda sonora', pistas.map(({ cancion }) => cancion).join(' · ')],
      ['Escenas ilustrativas', 'Pexels · Melike B, iam hogir, Nothing Ahead y Peter Fowler']
    ],
    postCreditos: {
      imagen: foto(17), etiqueta: 'ESCENA POST-CRÉDITOS',
      texto: 'Si estás cerquita cuando termines de ver esto, ven y abrázame un ratito.',
      anuncio: 'Todavía quedan muchas fotos', subtitulo: 'Yo quiero seguir guardándolas contigo.',
      sorpresa: 'Te amo. — Ana Patricia'
    }
  };
})();

window.TDN = (() => {
  const nombreA = 'Israel';
  const nombreB = 'Anna';
  const destinataria = 'Anna Fernández Rodríguez';
  const aniversario = '17 de noviembre de 2026';
  const titulo = 'A las cuatro de la mañana';
  const foto = (n) => `assets/fotos/foto-${String(n).padStart(2, '0')}.webp`;
  const portada = (n) => `assets/fotos/portada-${n}.webp`;
  const ambiente = (nombre) => `assets/ambiente/${nombre}.webp`;
  const clip = (nombre) => ({ img: `assets/ambiente/${nombre}.mp4`, poster: ambiente(nombre) });
  const escena = (medio, ...texto) => ({
    ...(typeof medio === 'string' ? { img: medio, poster: medio } : medio), texto
  });

  const canciones = {
    bonita: ['Qué Bonita · Lefty SM', 'que-bonita'],
    vida: ['Mi Vida Eres Tú · Sonyk el Dragón', 'mi-vida-eres-tu'],
    gustas: ['Me Gustas · Santa RM', 'me-gustas'],
    favorita: ['Mi droga favorita · Maniako', 'mi-droga-favorita'],
    simplemente: ['Simplemente Tu · Peso Pluma y Tito Double P', 'simplemente-tu']
  };
  const pista = ([cancion, archivo]) => ({ cancion, musica: `assets/audio/${archivo}-climax.mp3` });
  const episodio = (titulo, descripcion, duracion, cancion, escenas) => ({
    titulo, descripcion, duracion, escenas, ...pista(cancion)
  });
  const creditos = [['Para', destinataria], ['De', nombreA], ['Aniversario', aniversario]];
  const pelicula = (num, titulo, imagen, cancion, sinopsis, escenas) => ({
    num, tipo: 'pelicula', titulo, imagen: portada(imagen), clasificacion: 'TP', anio: 2026,
    sinopsis, top10: num === 0, creditos, ...pista(cancion),
    episodios: [episodio(titulo, sinopsis, 56, cancion, escenas)]
  });

  const temporadas = [
    pelicula(0, titulo, 3, canciones.bonita,
      'En el rancho, antes de empezar a trabajar, Israel se tomaba unos minutos para escribirle a Anna. Así empezaron a acercarse, mensaje a mensaje.', [
        escena(foto(3), 'Anna, todavía me acuerdo de las madrugadas en el rancho.', 'A las cuatro de la mañana, antes de empezar a trabajar, yo ya te andaba escribiendo.'),
        escena(clip('amanecer'), 'Lo hacía todos los días.', 'Me gustaba empezar el día haciendo un ratito para ti.'),
        escena(ambiente('libreta'), 'Cada vez tenía más ganas de contarte cómo me iba', 'y de saber cómo te había ido a ti.'),
        escena(foto(1), 'Con los días me quedé con ganas de platicar contigo en persona.', 'Ya nos habíamos dicho mucho por mensaje, y todavía quería saber más de ti.'),
        escena(foto(5), 'Ahora veo esta foto y pienso en lo mucho que ha pasado', 'desde aquel primer mensaje antes de entrar a trabajar.'),
        escena(foto(9), 'Y todavía me sigue dando el mismo gusto saber de ti.', 'Feliz aniversario, Anna.')
      ]),
    pelicula(1, 'De vuelta a Villa Juanita', 7, canciones.gustas,
      'Israel vuelve a Villa Juanita y por fin puede platicar con Anna en persona. En una semana, los dos ya eran novios.', [
        escena(ambiente('camino'), 'Pasaron los días y regresé a Villa Juanita.', 'Tenía muchas ganas de sentarme a platicar contigo.'),
        escena(clip('regreso'), 'Por fin podía verte cuando me estabas platicando algo.', 'Ya traía todas las ganas de conocerte que se me habían juntado en el rancho.'),
        escena(foto(10), 'Empezamos a conocernos en persona.', 'Me gustaba escucharte y darme cuenta de que quería volver a verte.'),
        escena(foto(8), 'A la semana ya éramos novios.', 'Siempre me da gusto acordarme de lo rápido que se dieron las cosas.'),
        escena(foto(6), 'La verdad es que duramos poquito de novios.', 'Me gustabas demasiado y yo quería que esto siguiera.'),
        escena(foto(7), 'Todavía me alegra haberme animado a acercarme a ti.', 'De aquella plática llegamos a todo lo que somos hoy.')
      ]),
    pelicula(2, 'Lo que vieron con el tiempo', 4, canciones.vida,
      'Al principio, la familia de Anna tenía sus dudas. Israel recuerda cómo fueron cambiando las cosas a lo largo de los meses.', [
        escena(foto(4), 'Al principio, en tu familia les preocupaba que yo te hiciera daño.', 'Sabía que me faltaba ganarme su confianza.'),
        escena(clip('regreso'), 'Eso tomó meses.', 'Conforme fueron conociéndome, fueron cambiando de opinión.'),
        escena(foto(2), 'Hoy agradezco que con el tiempo me hayan dado la oportunidad', 'de que me conocieran y vieran lo importante que eres para mí.'),
        escena(foto(10), 'Y a ti, Anna, te agradezco la paciencia de esos primeros meses.', 'Me da gusto que nos hayamos dado tiempo para conocernos a fondo.'),
        escena(foto(5), 'Todavía quiero que puedas contar conmigo en lo de todos los días.', 'En lo que sale fácil y en lo que nos cuesta un poquito más.'),
        escena(foto(3), 'Quiero seguir cuidando la confianza que hemos hecho entre los dos.', 'Se la debemos a todos esos días que decidimos compartir.')
      ]),
    pelicula(3, 'Lo que quiero vivir contigo', 9, canciones.simplemente,
      'En su aniversario, Israel le cuenta a Anna qué quiere cuidar de su matrimonio y qué le hace ilusión construir a su lado.', [
        escena(foto(9), 'Cuando pienso en lo que viene, se me antojan más días juntos.', 'Hasta una tarde cualquiera en la que podamos salir a dar una vuelta.'),
        escena(ambiente('libreta'), 'Quiero que hagamos espacio para platicar de lo que queremos lograr.', 'Me ilusiona echarte la mano con tus planes y hacer otros entre los dos.'),
        escena(foto(2), 'Quiero cuidar esos ratos tranquilos en los que podemos estar cerquita.', 'Y que también tengamos tiempo para descansar y reírnos un rato.'),
        escena(clip('amanecer'), 'Me gustaría que, por mucho trabajo que tengamos,', 'sigamos encontrando un momento para preguntarnos cómo estamos.'),
        escena(foto(8), 'Ojalá nos queden muchas fotos más por tomar.', 'Me hace ilusión pensar en las historias que todavía nos falta contar.'),
        escena(foto(7), 'Gracias por compartir tu vida conmigo, Anna.', 'Qué bonito poder decirte, otro 17 de noviembre, que te amo.')
      ]),
    {
      num: 4, tipo: 'serie', titulo: 'De aquel día a nosotros', imagen: portada(8),
      clasificacion: 'TP', anio: 2026, creditos, ...pista(canciones.favorita),
      sinopsis: 'Tres episodios sobre el día en que se conocieron, las ganas de estar juntos y lo que Israel quiere celebrar con Anna este 17 de noviembre.',
      episodios: [
        episodio('Aquel día en Francisco Villa', 'El primer encuentro con Anna ocurrió en un día difícil para Israel. Al volver al rancho, quiso seguir en contacto.', 44, canciones.vida, [
          escena(ambiente('camino'), 'Nos conocimos en Francisco Villa, en el funeral de mi hermana.', 'Fue un día difícil y lo recuerdo con mucho respeto.'),
          escena(foto(3), 'De ese día guardo también el recuerdo de haberte conocido.', 'Luego me regresé al rancho donde trabajaba.'),
          escena(clip('amanecer'), 'Allá, antes de que amaneciera, empecé a escribirte.', 'Una madrugada se volvió otra, hasta que se hizo parte de mi día.'),
          escena(foto(1), 'Con el tiempo me dieron ganas de platicar contigo de frente.', 'Volver a verte en Villa Juanita me hacía mucha ilusión.')
        ]),
        episodio('Lo rápido que te quise cerca', 'Israel recuerda lo rápido que se hicieron novios y las ganas que tenía de seguir a su lado.', 44, canciones.favorita, [
          escena(foto(7), 'Después de vernos y platicar, nos hicimos novios en una semana.', 'Todavía me da risa acordarme de lo impaciente que estaba por verte.'),
          escena(foto(6), 'Yo tenía clarito que quería estar contigo.', 'Me gustaba lo que iba descubriendo de ti cada vez que hablábamos.'),
          escena(foto(4), 'Pasaron los meses y también cambió la manera en que tu familia me veía.', 'Me dio gusto que pudieran ir conociéndome con calma.'),
          escena(foto(5), 'Aquellas ganas de verte siguen aquí.', 'Hasta cuando estamos juntos y me arrimo un poquito más para salir en la foto.')
        ]),
        episodio('Este 17 de noviembre', 'Israel agradece la vida que comparte con su esposa y le cuenta lo que espera de los días que vienen.', 44, canciones.simplemente, [
          escena(foto(10), 'Para este aniversario quise volver a mirar de dónde venimos.', 'Me da gusto tener un lugar al que podamos regresar para recordar esos días.'),
          escena(foto(2), 'Gracias por abrirme un espacio en tu vida, Anna.', 'A tu lado he encontrado un montón de ratitos que quiero seguir cuidando.'),
          escena(clip('regreso'), 'Ojalá sigamos haciendo planes que nos den ganas a los dos.', 'Y que, aunque se complique el día, siempre encontremos cómo echarnos la mano.'),
          escena(foto(8), 'Feliz aniversario, Anna Fernández Rodríguez.', 'Te amo. Israel.')
        ])
      ]
    }
  ];

  return {
    pareja: { nombreA, nombreB, aniversario, anioInicio: '', ciudad: '', viajes: [] },
    fotos: {
      hero: 'assets/fotos/hero.webp', perfilB: 'assets/fotos/perfil-anna.webp',
      perfilPareja: 'assets/fotos/perfil-pareja.webp',
      t0: foto(3), t1: foto(7), t2: foto(5), t3: foto(9), t4: foto(8), t5: foto(4)
    },
    media: {
      intro: 'assets/audio/intro.mp3',
      temporadas: Object.values(canciones).map((cancion) => pista(cancion).musica),
      videoFinal: 'assets/video/para-anna.mp4'
    },
    acceso: {
      demo: false, password: 'f8d64a31eb7d864da9252b7e5dd2659229cf1a3c4bf9d6d544c0318c81e13cff',
      pistaPassword: 'El día y el mes de nuestro aniversario (DDMM).', estreno: ''
    },
    notificacion: { whatsapp: '529241109672', email: '', endpoint: '' },
    sitio: {
      titulo, url: 'https://streaming-us-2.rotfstudio.com/israel-anna/', coincidencia: 100, clasificacion: 'TP',
      clasificacionTexto: 'Romance y recuerdos compartidos',
      heroTag: 'DE ISRAEL PARA ANNA', heroTop: '17 de noviembre de 2026',
      sinopsis: 'Su historia empieza en Francisco Villa y sigue en el rancho, con los mensajes que Israel le escribía a Anna a las cuatro de la mañana.',
      generos: ['Romance', 'Música'], filaRecomendada: titulo
    },
    temporadas,
    ordenReproduccion: ["4-1", "0-1", "1-1", "2-1", "3-1", "4-2", "4-3"],
    extras: [],
    final: {
      titulo: 'Para ti, Anna',
      imagen: portada(3),
      sinopsis: 'Una carta de Israel a su esposa, cinco preguntas para compartir y un último montaje con sus fotos.',
      preguntas: [
        '¿Qué recuerdas de aquellas madrugadas en las que te escribía?',
        '¿Qué se te quedó de cuando volvimos a platicar en Villa Juanita?',
        '¿Qué foto de las que viste aquí te gustaría volver a tomar conmigo?',
        '¿Qué plan te gustaría que hiciéramos juntos pronto?',
        '¿Qué te gustaría que siguiéramos cuidando en nuestro matrimonio?'
      ],
      carta: () => [
        'Anna Fernández Rodríguez:',
        'Para nuestro aniversario me acordé de cuando te escribía a las cuatro de la mañana. Antes de empezar a trabajar en el rancho, me gustaba tomarme ese ratito para decirte algo y empezar el día pensando en ti.',
        'Desde que volví a Villa Juanita y platicamos en persona, cada vez tenía más ganas de verte. En una semana ya éramos novios. Yo quería seguir contigo y me sigue dando gusto haberme animado a decírtelo.',
        'Gracias por la vida que compartimos, por dejarme conocerte con el paso del tiempo y por todos esos ratos que ahora puedo volver a mirar en una foto. También agradezco que tu familia se haya dado la oportunidad de conocerme.',
        'Quiero seguir haciéndote tiempo, escucharte con calma y echarte la mano con tus metas. Me ilusiona pensar en los planes que podamos hacer juntos y en los días comunes que nos queden para platicar de cualquier cosa.',
        'Feliz aniversario, mi amor. Te amo.',
        'Israel'
      ].join('\n\n')
    },
    creditos: [
      ...creditos,
      ['Banda sonora', Object.values(canciones).map(([cancion]) => cancion).join(' · ')],
      ['Tomas de ambiente', 'Pexels']
    ],
    postCreditos: {
      imagen: foto(8), etiqueta: 'ESCENA POST-CRÉDITOS',
      texto: 'Cuando volvamos a tomarnos una foto, acuérdate de abrazarme tantito más.',
      anuncio: 'Continuará',
      subtitulo: 'Todavía nos quedan muchos ratos por compartir.',
      sorpresa: 'Feliz aniversario, Anna. Con amor, Israel.'
    }
  };
})();

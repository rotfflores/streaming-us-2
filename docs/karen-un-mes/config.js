window.TDN = (() => {
  const titulo = 'Un mes después';
  const foto = (n) => `assets/fotos/foto-${String(n).padStart(2, '0')}.webp`;
  const portada = (n) => `assets/fotos/portada-${n}.webp`;
  const ambiente = (nombre) => `assets/ambiente/${nombre}.webp`;
  const clip = (nombre) => ({ img: `assets/ambiente/${nombre}.mp4`, poster: ambiente(nombre) });
  const escena = (medio, ...texto) => ({
    ...(typeof medio === 'string' ? { img: medio, poster: medio } : medio), texto
  });

  const canciones = {
    destino: ['Destino o Casualidad · Melendi y Ha*Ash', 'destino-o-casualidad'],
    ojos: ['Tus Ojos · Beto Cárdenas', 'tus-ojos'],
    amor: ['Amor Amor', 'amor-amor'],
    agua: ['Bajo El Agua · Manuel Medrano', 'bajo-el-agua']
  };
  const pista = ([cancion, archivo]) => ({ cancion, musica: `assets/audio/${archivo}-climax.mp3` });
  const episodio = (titulo, descripcion, duracion, cancion, escenas) => ({
    titulo, descripcion, duracion, escenas, ...pista(cancion)
  });
  const creditos = [['Para', 'Karen']];
  const pelicula = (num, titulo, imagen, cancion, sinopsis, escenas) => ({
    num, tipo: 'pelicula', titulo, imagen: portada(imagen), clasificacion: 'TP', anio: 2026,
    sinopsis, top10: num === 0, creditos, ...pista(cancion),
    episodios: [episodio(titulo, sinopsis, 53, cancion, escenas)]
  });

  const temporadas = [
    pelicula(0, titulo, 21, canciones.destino,
      'En un mes, conocer a Karen se convirtió en una de esas cosas que dan ganas de contar. Así empieza este regalo.', [
        escena(foto(4), 'Karen, hace un mes te conocí.', 'Me da gusto pensar en todo lo que he podido conocer de ti en tan poquito tiempo.'),
        escena(foto(1), 'Me gusta cuando salimos y el día va tomando su propia forma.', 'A veces basta con caminar un rato y seguir platicando.'),
        escena(foto(8), 'También me gustó ver cómo nos quedaron estas fotos.', 'Aquí hay un poquito de lo bien que me la paso contigo.'),
        escena(foto(9), 'Me río de que entre tantas flores yo traía puestos los lentes oscuros.', 'Igual esta foto se ganó su lugar.'),
        escena(clip('horizonte'), 'Cada vez que nos despedimos me quedo con ganas de seguir la plática.', 'Últimamente también me quedo pensando en cuándo vamos a vernos otra vez.'),
        escena(foto(21), 'Hice esto para que sepas cómo he vivido este primer mes.', 'Me da mucho gusto haberte encontrado.')
      ]),
    pelicula(1, 'Lo que me gusta de ti', 12, canciones.ojos,
      'Entre paseos, cafés y sonrisas, todavía queda mucho por descubrir de Karen.', [
        escena(foto(12), 'Me gusta verte sonreír, Karen.', 'Esta foto me da ganas de volver a sentarme a platicar contigo.'),
        escena(foto(7), 'Me gusta descubrir qué se te antoja hacer.', 'A veces de ahí sale la mejor parte del día.'),
        escena(foto(16), 'También me gusta que nos dé por tomar fotos de lo que tenemos enfrente.', 'La próxima vez te voy a pedir que me cuentes cuál es tu favorita.'),
        escena(foto(11), 'Hasta en esta foto, con el café en primer plano, hay algo que me hace sonreír.', 'Me gusta ir descubriendo todos esos detalles tuyos.'),
        escena(ambiente('luces'), 'Todavía me quedan un montón de preguntas para ti.', '¿Qué lugar te alegra volver a visitar? ¿Qué canción pondrías ahora mismo?'),
        escena(foto(19), 'De todas las cosas que tengo ganas de hacer,', 'una de las que más me emociona es seguir conociéndote.')
      ]),
    pelicula(2, 'Gracias por estos días', 13, canciones.amor,
      'Una pausa para agradecer el tiempo, las pláticas y el gusto de compartir una mesa.', [
        escena(foto(13), 'Gracias por hacerte tiempo para verme.', 'Me gusta haberte tenido enfrente en ratos como este.'),
        escena(foto(5), 'Gracias por los ratos en que podemos sentarnos, pedir algo rico', 'y platicar sin estar viendo la hora.'),
        escena(foto(14), 'A veces me acuerdo de algún detalle y me dan ganas de contártelo en ese momento.', 'Qué gusto tener ya cosas de las que nos podemos acordar.'),
        escena(ambiente('tulipanes'), 'Ojalá se note cuánto valoro tu compañía.', 'Sentarme contigo un rato siempre me deja de buenas.'),
        escena(foto(10), 'También me gusta guardar una foto que diga dónde estuvimos.', 'Luego la vuelvo a ver y me acuerdo de cómo me sentí ese día.'),
        escena(foto(20), 'Gracias por compartir conmigo un pedacito de tu tiempo, Karen.', 'Ha sido un mes que me da gusto volver a mirar.')
      ]),
    pelicula(3, 'Los planes que se me antojan', 16, canciones.agua,
      'Un café, otra escapada y el tiempo para inventar juntos sus propios planes.', [
        escena(foto(15), 'Me gustaría volver a salir contigo a algún lugar con una vista así.', 'Esta vez quiero que nos tomemos una foto juntos ahí arriba.'),
        escena(foto(18), 'También se me antoja salir sin tener todo planeado.', 'Podemos escoger el rumbo cuando ya estemos afuera.'),
        escena(clip('olas'), 'Y me ilusiona que tú me enseñes un lugar que te guste mucho.', 'Quiero saber qué pedirías, qué camino tomarías y qué foto guardarías de ese día.'),
        escena(foto(2), 'Entre un plan y otro me gustaría que nos hiciéramos tiempo para escucharnos.', 'Quiero saber qué te emociona y cómo puedo estar ahí para ti.'),
        escena(foto(17), 'Si a ti también te da curiosidad lo que puede salir de esto,', 'me gustaría que encontráramos juntos la forma de empezar.'),
        escena(foto(22), 'Hay algo que llevo un rato queriendo preguntarte.', 'Te lo dejé en la carta del final.')
      ]),
    {
      num: 4, tipo: 'serie', titulo: 'Los días contigo', imagen: portada(22),
      clasificacion: 'TP', anio: 2026, creditos, ...pista(canciones.destino),
      sinopsis: 'Tres episodios para recordar los días al aire libre, las sobremesas y el momento de decir lo que siento.',
      episodios: [
        episodio('Entre árboles y flores', 'Las fotos de un paseo vuelven a abrir las ganas de compartir el camino.', 44, canciones.destino, [
          escena(foto(3), 'Me gusta mucho esta foto tuya entre los árboles.', 'Tiene algo de la calma que me da salir a caminar contigo.'),
          escena(foto(1), 'A veces me dan ganas de regresar a un lugar cuando veo las fotos.', 'También me da curiosidad saber qué viste tú ese día.'),
          escena(foto(6), 'Aquí volví a fijarme en todas las flores que tenías alrededor.', 'Y de paso me quedé mirando tu sonrisa.'),
          escena(foto(4), 'Me gustaría que otro día armáramos una salida de estas.', '¿Tú a dónde irías?')
        ]),
        episodio('Quédate otro ratito', 'Un episodio para esos minutos que se alargan cuando da gusto estar con alguien.', 44, canciones.ojos, [
          escena(foto(23), 'Me gusta cuando una salida termina en sobremesa.', 'Siempre aparece otra cosa de la que hablar.'),
          escena(foto(11), 'Qué buen plan es sentarme contigo a tomar un café.', 'La próxima vez se me antoja pedir algo para compartir.'),
          escena(ambiente('tulipanes'), 'También quiero que tengas tiempo para contarme las cosas que te importan.', 'Me gusta saber de ti, hasta de lo que pasó en un día cualquiera.'),
          escena(foto(13), 'Ojalá tengamos más ratos de esos en los que uno piensa:', '«Me puedo quedar aquí un poquito más».')
        ]),
        episodio('Lo que quería decirte', 'Antes de abrir la carta, un último momento para contar cómo se siente este comienzo.', 44, canciones.agua, [
          escena(foto(20), 'Karen, me gustas y disfruto mucho estar contigo.', 'Me ilusiona decirlo así de claro.'),
          escena(clip('horizonte'), 'Me gusta cómo se siente apenas estar empezando a conocernos.', 'Quiero que los dos tengamos tiempo de descubrir qué nos hace sentir a gusto.'),
          escena(foto(19), 'Yo sí tengo ganas de invitarte a otro plan, volver a verte', 'y, si a ti te nace lo mismo, ver qué podemos construir juntos.'),
          escena(foto(21), 'Me guardé una pregunta para el último momento.', 'Cuando quieras, abre tu carta.')
        ])
      ]
    }
  ];

  return {
    pareja: { nombreA: '', nombreB: 'Karen', aniversario: '', anioInicio: '', ciudad: '', viajes: [] },
    fotos: {
      hero: 'assets/fotos/hero.webp', heroMovil: 'assets/fotos/hero-movil.webp', perfilB: 'assets/fotos/perfil-karen.webp',
      perfilPareja: 'assets/fotos/perfil-juntos.webp',
      t0: foto(4), t1: foto(6), t2: foto(12), t3: foto(13), t4: foto(19), t5: foto(21)
    },
    media: {
      intro: 'assets/audio/intro.mp3',
      temporadas: Object.values(canciones).map((cancion) => pista(cancion).musica),
      videoFinal: 'assets/video/para-karen.mp4'
    },
    acceso: {
      demo: false, password: '904294d8c54b1c63e40832fa1d95bcde534b310df6d42882ce4baf28f3e0184a',
      pistaPassword: 'El nombre de la persona para quien hice este regalo.', estreno: ''
    },
    notificacion: { whatsapp: '525561398494', email: '', endpoint: '' },
    sitio: {
      titulo, url: 'https://streaming-us-2.rotfstudio.com/karen-un-mes/', coincidencia: 100, clasificacion: 'TP',
      clasificacionTexto: 'Romance y recuerdos compartidos',
      heroTag: 'PARA KAREN',
      sinopsis: 'Hace un mes te conocí, Karen. Quise guardar en estas películas lo que me ha hecho sonreír desde entonces y algo que me hacía ilusión decirte.',
      generos: ['Romance', 'Música'], filaRecomendada: titulo
    },
    temporadas,
    extras: [],
    final: {
      titulo: 'Una carta para Karen',
      imagen: portada(22),
      sinopsis: 'Una carta sobre este primer mes y una pregunta que quería hacerte.',
      pregunta: 'Karen, ¿quieres ser mi novia?',
      opciones: [
        { id: 'si', etiqueta: 'Sí, quiero', mensaje: 'Sí, quiero ser tu novia. 💛' },
        { id: 'tiempo', etiqueta: 'Quiero pensarlo', mensaje: 'Me gustaría tomarme un poco de tiempo para pensarlo.' },
        { id: 'no', etiqueta: 'Prefiero decir que no', mensaje: 'Gracias por el regalo. Prefiero que no seamos novios.' }
      ],
      carta: [
        'Karen:',
        'Hace un mes te conocí y desde entonces me alegra cada vez que se nos hace vernos. Disfruto platicar contigo, salir a dar una vuelta y terminar guardando fotos que luego vuelvo a ver con una sonrisa. Al hacerte este regalo me di cuenta de cuántos ratitos bonitos caben en tan pocas semanas.',
        'Gracias por el tiempo que me has dado y por dejarme conocerte a tu ritmo. Me gustas, y me hace ilusión seguir descubriendo qué te emociona, qué te da risa y adónde irías si mañana tuvieras toda la tarde libre.',
        'Me gustaría compartir contigo más de esos días. Hacer planes entre los dos, escucharte cuando quieras contarme algo y echarte porras en lo que te propongas. Si a ti también te ilusiona, quiero intentarlo contigo.',
        'Te dejo la pregunta aquí para que puedas leerla a solas y en el momento que tú quieras. Sea cual sea tu respuesta, me alegra haberte conocido.'
      ].join('\n\n')
    },
    creditos: [
      ...creditos,
      ['Banda sonora', Object.values(canciones).map(([cancion]) => cancion).join(' · ')],
      ['Tomas de ambiente', 'Pexels']
    ],
    postCreditos: {
      imagen: foto(21), etiqueta: 'ESCENA POST-CRÉDITOS',
      texto: 'De este mes me quedo con la alegría de haberte conocido.',
      anuncio: 'Para ti, Karen',
      subtitulo: 'Gracias por ver hasta el final.',
      sorpresa: 'Ojalá la próxima vez que nos veamos podamos elegir juntos la canción del camino.'
    }
  };
})();

window.TDN = (() => {
  const titulo = 'Del café a la luna';
  const foto = (id) => `assets/fotos/foto-${String(id).padStart(2, '0')}.webp`;
  const portada = (id) => `assets/fotos/portada-${id}.webp`;
  const ambiente = (id, video = false) => ({
    img: `assets/ambiente/${id}.${video ? 'mp4' : 'webp'}`,
    ...(video && { poster: `assets/ambiente/${id}.webp` }),
    ambientacion: true
  });
  const video = { img: 'assets/video/recuerdo-29.mp4', poster: 'assets/video/recuerdo-29.webp' };
  const escenas = (lista) => lista.map(([medio, texto]) => ({
    ...(typeof medio === 'number' ? { img: foto(medio) } : medio), texto
  }));
  const temas = {
    fragil: 'Frágil · Allison',
    luna: 'Rayando el Sol · Maná',
    nena: 'Nena · Miguel Bosé',
    siento: 'Siento Que · Jumbo',
    vino: 'El vino de tu boca · Alejandro Sanz'
  };
  const creditos = [['Para', 'Sandra'], ['De', 'Jorge Alejandro']];
  const episodio = (titulo, descripcion, tema, lista, imagen, duracion = 6 + 10 * lista.length) => ({
    titulo, descripcion, imagen,
    escenas: escenas(lista), duracion,
    cancion: temas[tema], musica: `assets/audio/${tema}-climax.mp3`
  });
  const pelicula = (num, titulo, tema, sinopsis, lista) => {
    const ep = episodio(titulo, sinopsis, tema, lista, portada(num));
    return {
      num, tipo: 'pelicula', titulo, imagen: ep.imagen, anio: 2026, clasificacion: 'TP',
      sinopsis, top10: num === 0, cancion: ep.cancion, musica: ep.musica,
      creditos: [...creditos, ['Música', temas[tema]]], episodios: [ep]
    };
  };
  const temporadas = [
    pelicula(0, 'El café pendiente', 'fragil',
      'Dos años como contactos en Facebook y un café que por fin tuvo fecha.', [
        [1, 'Sandra, esta foto tuya es de cuando todavía no nos conocíamos en persona. Ya estábamos en el Facebook del otro.'],
        [2, 'Pasaron dos años y el café seguía pendiente. Me da gusto pensar que todavía nos quedaban ganas de vernos.'],
        [3, 'También está esta foto mía de aquellos días. Todavía no teníamos ni una juntos.'],
        [ambiente('cafe', true), 'Hasta que por fin nos pusimos de acuerdo y nos citamos. Qué bueno que le hicimos espacio a ese café.'],
        [4, 'Después llegaron nuestras primeras fotos juntos. Me da gusto volver a verlas y pensar en todo lo que empezó ahí.'],
        [5, 'En esta foto hasta salió el ramo. Me gusta guardar esos detalles porque me dan ganas de volver a sorprenderte.']
      ]),
    pelicula(1, 'La noche de luna llena', 'luna',
      'Después de verse, Jorge y Sandra encontraron otro motivo para salir juntos. Bastaba con mirar hacia arriba.', [
        [ambiente('luna', true), 'Después de vernos salió el plan de ir a mirar la luna llena. Qué bonito fue tener una excusa tan sencilla para volver a verte.'],
        [6, 'Cuando repaso nuestras primeras salidas, me acuerdo de lo a gusto que me siento haciendo planes contigo.'],
        [7, 'Me gusta vernos aquí, compartiendo mesa. Es de esas cosas que siempre se me antoja volver a hacer contigo.'],
        [8, 'Y qué gusto ir encontrando más fotos en las que ya salimos los dos. Cada una me recuerda que nos seguimos dando tiempo.'],
        [ambiente('lunafoto'), 'Si vuelve a haber luna llena cuando tengamos la noche libre, ¿vamos a verla otra vez?']
      ]),
    pelicula(2, 'Dos boletos', 'siento',
      'La invitación para ver la película de Michael Jackson se suma a uno de sus planes favoritos, ir al cine juntos.', [
        [ambiente('cine'), 'Después de ver la luna llegó otra invitación. Esta vez el plan era ver la película de Michael Jackson.'],
        [9, 'De todas las cosas que se nos antoja hacer juntos, el cine ya se ganó su lugar. Me hace ilusión desde que escogemos la función.'],
        [10, 'También me gusta el rato de después, cuando todavía podemos quedarnos juntos y comentar lo que vimos.'],
        [11, 'Gracias por hacerle un huequito a estas salidas. A veces una ida al cine es lo que más ganas tengo de que llegue en toda la semana.'],
        [12, 'Para la próxima escojamos otra película. Y si salimos con hambre, de ahí nos vamos a cenar.']
      ]),
    pelicula(3, 'Que se alargue la noche', 'nena',
      'Una copa, una cena y una cita en la discoteca. Con Sandra, a Jorge le dan ganas de quedarse un rato más.', [
        [13, 'Siempre que podemos, buscamos un rato para salir a comer, cenar o tomarnos una copa. A mí me encanta tener algo así que esperar contigo.'],
        [ambiente('copas'), 'Me gusta cuando podemos pedir algo más, seguir platicando y dejar el regreso para un poquito después.'],
        [14, 'Hay noches en las que se nos va la hora y terminamos amaneciéndonos. El tiempo contigo siempre se me pasa rápido.'],
        [15, 'Y luego me topo con fotos como esta. Me dan ganas de acercarme y quedarme así, cerquita de ti.'],
        [ambiente('disco'), 'Entre nuestros planes también hubo una cita para ir a bailar a una discoteca. Se me antoja que hagamos otra.'],
        [16, 'Cuando volvamos a bailar, escoge tú la primera canción. Yo con gusto te sigo.']
      ]),
    {
      num: 4, tipo: 'serie', titulo: 'Nos vemos el ocho', imagen: portada(4),
      anio: 2026, clasificacion: 'TP', sinopsis: 'Tres episodios para guardar lo vivido y hacer planes para el próximo día ocho.',
      cancion: temas.vino, musica: 'assets/audio/vino-climax.mp3', creditos,
      episodios: [
        episodio('Tiempo para los dos', 'Jorge agradece el tiempo que él y Sandra encuentran para estar juntos.', 'vino', [
          [17, 'Sandra, gracias por hacer un espacio para vernos, incluso en semanas en que cada quien trae sus pendientes.'],
          [18, 'Me gusta volver a ver las veces que salimos y toparme con una foto en la que te me acercaste así.'],
          [19, 'Sentarnos a comer juntos me parece un plan buenísimo. Siempre me queda algo que quiero contarte antes de irnos.'],
          [20, 'Hasta guardamos esta foto de las luces. Me gusta que entre nuestras fotos también estén esos detalles que vimos juntos.'],
          [21, 'Gracias por compartir conmigo tantas sobremesas y tantas noches. Todavía hay mucho que quiero platicar contigo.']
        ], foto(19)),
        episodio('Todo lo que falta por hacer', 'Una lista de planes sencillos que Jorge quiere seguir compartiendo con Sandra.', 'siento', [
          [22, 'Me gustaría que sigamos encontrando ratos para salir y también para preguntarnos cómo estamos, con tiempo para escuchar la respuesta.'],
          [ambiente('copas'), 'Podemos empezar con una cena. Tengo ganas de sentarme contigo a escoger qué viaje o qué salida hacemos primero.'],
          [23, 'Quiero conocer más lugares contigo. Ojalá en la próxima salida podamos caminar sin prisa y parar por algo de comer.'],
          [24, 'También quiero que me cuentes qué planes te ilusionan a ti. Me gustaría acompañarte y celebrar contigo cuando los logres.'],
          [25, 'Y si un fin de semana se desocupa, hagamos una vuelta como las que nos han regalado fotos así.'],
          [26, 'Aquí quedó una de El Triunfo. Me pregunto en qué lugar nos vamos a tomar la próxima.']
        ], foto(26), 56),
        episodio('Otra foto el próximo ocho', 'Una celebración del ocho de cada mes, con un lugar especial para el 8 de mayo.', 'vino', [
          [27, 'Me gusta que el ocho de cada mes tengamos un día para acordarnos de todo lo que llevamos compartido.'],
          [28, 'Tenía que salir esta foto. Me encanta que hasta «El vino de tu boca» se haya quedado escrito en uno de nuestros recuerdos.'],
          [video, 'También quise guardar este ratito en movimiento. Me gusta que podamos volver a él cuando queramos.'],
          [30, 'Y entre todos los ochos, el 8 de mayo tiene su propio lugar. Quiero seguir celebrándolo contigo, Sandra.'],
          [31, 'Para el próximo ocho te propongo un plan. Escogemos dónde ir y, antes de volver a casa, nos tomamos otra foto.']
        ], foto(28))
      ]
    }
  ];

  return {
    pareja: { nombreA: 'Jorge Alejandro', nombreB: 'Sandra', ciudad: '', viajes: [] },
    fotos: {
      hero: 'assets/fotos/hero.webp', perfilB: 'assets/fotos/perfil-sandra.webp',
      perfilPareja: 'assets/fotos/perfil-juntos.webp',
      t0: foto(5), t1: foto(8), t2: foto(14), t3: foto(16), t4: foto(26), t5: foto(28)
    },
    media: {
      intro: 'assets/audio/intro.mp3',
      temporadas: temporadas.map(({ musica }) => musica),
      videoFinal: 'assets/video/otro-ocho.mp4'
    },
    acceso: {
      demo: false, password: 'e7e8a9495215d6f65d3f0eb98eb810b56911d2c1bd132ead67b68d01a16caa23',
      pistaPassword: 'Nuestra fecha especial en cuatro números. Primero el día.', estreno: ''
    },
    notificacion: { whatsapp: '526122019751', email: '', endpoint: '' },
    sitio: {
      titulo, url: 'https://streaming-us-2.rotfstudio.com/jorge-sandra/index.html?compartir=1',
      coincidencia: 100, clasificacion: 'TP', clasificacionTexto: 'Una dedicatoria de amor',
      heroTag: 'DE JORGE ALEJANDRO PARA SANDRA', heroTop: 'Nuestro capítulo · Cada día 8',
      sinopsis: 'Sandra, tardamos dos años en ponernos de acuerdo para ese café. Desde entonces llegaron la luna llena, las noches de cine y las ganas de seguir haciendo planes contigo.',
      generos: ['Romance', 'Recuerdos'], filaRecomendada: temporadas[0].titulo
    },
    temporadas,
    extras: [
      { titulo: 'El ocho de cada mes', img: foto(16), texto: 'Me gusta que tengamos un día al mes para celebrar que seguimos haciendo planes juntos.' },
      { titulo: '8 de mayo', img: foto(28), texto: 'Entre todos nuestros ochos, este merece que le guardemos mesa, tiempo y una foto nueva.' }
    ],
    final: {
      titulo: 'Para el próximo ocho', imagen: portada(5),
      sinopsis: 'Una carta de Jorge Alejandro para Sandra y un último montaje de sus recuerdos.',
      preguntas: [
        '¿Qué te acuerdas de cuando por fin nos pusimos de acuerdo para vernos?',
        '¿Qué momento guardarías de la noche en que fuimos a ver la luna?',
        '¿Qué película te gustaría que viéramos juntos la próxima vez?',
        '¿Qué plan te gustaría hacer para celebrar el próximo ocho?',
        '¿Qué te ilusiona que hagamos juntos este año?'
      ],
      carta: () => [
        'Sandra:',
        'Me da gusto acordarme de aquel café pendiente. Pasamos dos años siendo contactos en Facebook y un día por fin nos citamos. Todavía sonrío al pensar en todo lo que vino después. Salimos a ver la luna llena y luego llegó la invitación para ir a ver la película de Michael Jackson.',
        'Gracias por compartirme tu tiempo. Me gusta salir contigo a tomar una copa, inventar un plan para comer o cenar, ir al cine y terminar platicando hasta que amanece. También me dan ganas de volver a bailar contigo. Si me dices cuándo, yo aparto la noche.',
        'Quiero seguir haciendo tiempo para nosotros el ocho de cada mes y celebrar contigo ese 8 de mayo que tiene un lugar especial. Quiero escucharte hablar de tus planes, estar cerca cuando algo te cueste y festejar contigo cuando te salga eso que tanto querías.',
        'Me alegra que por fin hayamos hecho espacio para ese café. Para el próximo ocho ya se me antoja que escojamos un plan y nos regalemos otra foto.',
        'Con cariño,\nJorge Alejandro'
      ].join('\n\n')
    },
    creditos: [...creditos, ['Banda sonora', Object.values(temas).join(' · ')], ['Escenas ilustrativas', 'Pexels']],
    postCreditos: {
      imagen: foto(31), etiqueta: 'ESCENA POST-CRÉDITOS',
      texto: 'Sandra, el próximo ocho te invito a otro café. Esta vez pongámosle hora de una vez.',
      anuncio: 'Nos vemos el ocho', subtitulo: 'Un café y tiempo para nosotros.',
      sorpresa: 'Te quiero, Sandra. — Jorge Alejandro'
    }
  };
})();

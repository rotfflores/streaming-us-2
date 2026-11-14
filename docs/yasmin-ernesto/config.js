window.TDN = (() => {
  const titulo = 'Todo lo que quiero contigo';
  const foto = (id) => `assets/fotos/foto-${String(id).padStart(2, '0')}.webp`;
  const portada = (id) => `assets/fotos/portada-${id}.webp`;
  const ambiente = (id, video = false) => ({
    img: `assets/ambiente/${id}.${video ? 'mp4' : 'webp'}`,
    ...(video && { poster: `assets/ambiente/${id}.webp` }),
    ambientacion: true
  });
  const escena = ([medio, texto]) => ({
    ...(typeof medio === 'number' ? { img: foto(medio) } : medio),
    texto
  });
  const pista = (id, cancion) => ({ id, cancion });
  const dedico = pista('te-dedico', 'Te dedico · Banda Los Sebastianes');
  const hoy = pista('hoy-necesito', 'Hoy necesito · David Zahan');
  const gracias = pista('gracias-por-tanto-amor', 'Gracias por tanto amor · Joan Sebastian');
  const besos = pista('tus-besos', 'Tus besos · Los Caligaris');
  const todo = pista('eres-todo-lo-que-necesito', 'Eres todo lo que necesito · Romeo Santos');
  const creditos = [['Para', 'Ernesto León'], ['De', 'Yasmín Rodríguez']];
  const musica = (track, duracion) => ({
    cancion: track.cancion, musica: `assets/audio/${track.id}-${duracion}s.mp3`
  });
  const episodio = (titulo, descripcion, track, escenas) => {
    const duracion = 6 + 10 * escenas.length;
    return { titulo, descripcion, duracion, escenas: escenas.map(escena), ...musica(track, duracion) };
  };
  const pelicula = (num, titulo, track, sinopsis, escenas) => {
    const ep = episodio(titulo, sinopsis, track, escenas);
    return {
      num, tipo: 'pelicula', titulo, imagen: portada(num), anio: 2026, clasificacion: 'TP',
      sinopsis, top10: num === 0, cancion: ep.cancion, musica: ep.musica,
      creditos: [...creditos, ['Música', track.cancion]],
      episodios: [{ ...ep, imagen: portada(num) }]
    };
  };

  const temporadas = [
    pelicula(0, titulo, dedico,
      'Yasmín junta sus fotos y canciones favoritas para decirle a Ernesto lo mucho que significa para ella.', [
        [ambiente('horizonte', true), 'Ernesto, quería encontrar una forma bonita de decirte lo mucho que me alegra estar contigo.'],
        [1, 'Me gusta esta foto. Estamos pegaditos y se me nota en la cara lo feliz que me hace tenerte cerca.'],
        [3, 'Si tuviera que escoger una imagen para decirte cómo me siento, empezaría por nuestras manos juntas.'],
        [5, 'Qué gusto guardar fotos así. Cada vez que las veo me dan ganas de pedirte otra, aunque ya tengamos un montón.'],
        [6, 'Estas canciones me prestan un poquito de valor para decirte cosas que a veces me guardo.'],
        [13, 'Te preparé todo esto porque te amo y te amaré por siempre, Ernesto. Ojalá te saque la misma sonrisa que tú me sacas a mí.']
      ]),
    pelicula(1, 'Gracias por estar cerquita', gracias,
      'Una dedicatoria para agradecerle a Ernesto su compañía y el cariño que cabe en los gestos más sencillos.', [
        [16, 'Gracias por hacerme sentir a gusto a tu lado. En esta foto se me nota hasta en la sonrisa.'],
        [11, 'También me gusta tener fotos tuyas solo. Me dan ganas de mandarte un mensaje y decirte que estoy pensando en ti.'],
        [12, 'Gracias por dejarme acercarme así, hasta que los dos quepamos en el mismo cuadrito.'],
        [19, 'En esta foto quiero quedarme un ratito más. Me encanta verte descansando cerquita de mí.'],
        [ambiente('cielo'), 'A veces el día se va entre pendientes y se me olvida decirlo. Gracias por compartir tu tiempo conmigo.'],
        [25, 'Si te tengo cerca cuando termines de ver esto, ven. Te debo un abrazo por cada uno de estos gracias.']
      ]),
    pelicula(2, 'Con la mano en la tuya', besos,
      'Dos manos juntas, una foto en el coche y el gusto de compartir hasta el trayecto más corto.', [
        [8, 'Me gusta mirar nuestras manos juntas. Qué fácil se me hace querer quedarme así contigo.'],
        [10, 'Aquí vamos en el coche. Ojalá volvamos a salir, pongamos una de estas canciones y tengamos tiempo de cantar.'],
        [27, 'Entre estas fotos hasta salió la moto. Qué risa imaginar cuántas más podríamos guardar en la próxima vuelta.'],
        [4, 'Con esa playera es imposible perderte de vista. Yo igual te buscaría entre toda la gente.'],
        [ambiente('ciudad'), 'Se me antoja salir contigo una tarde, parar por algo rico y platicar hasta que cambie la luz.'],
        [5, 'Y antes de regresar a casa, acércate. Todavía me falta un beso tuyo.']
      ]),
    pelicula(3, 'Los planes que nos faltan', todo,
      'Lo que Yasmín sueña compartir con Ernesto, desde una tarde libre hasta las metas que puedan celebrar juntos.', [
        [ambiente('olas', true), 'Quiero que nos hagamos tiempo para salir sin prisa, aunque todavía no sepamos a dónde.'],
        [14, 'Me gustaría que me contaras qué te ilusiona hacer. Quiero escuchar tus planes y echarte porras.'],
        [15, 'Y cuando tengas un día pesado, quiero que puedas llegar conmigo y platicar de lo que traes en la cabeza.'],
        [17, 'Quiero celebrar contigo las cosas que cuestan trabajo, desde que empiezas hasta el día en que dices que ya lo lograste.'],
        [20, 'También quiero festejar lo chiquito. A veces alcanza con apartar la tarde, pedir algo de comer y descansar juntos.'],
        [13, 'Todavía nos quedan planes por hacer y fotos por tomar. Me ilusiona pensar en eso contigo.']
      ]),
    {
      num: 4, tipo: 'serie', titulo: 'Cuando pienso en ti', imagen: portada(4),
      anio: 2026, clasificacion: 'TP', ...musica(hoy, 66),
      sinopsis: 'Tres episodios sobre los detalles que Yasmín guarda de Ernesto y las ganas de seguir compartiendo días con él.',
      creditos,
      episodios: [
        episodio('Tengo ganas de verte', 'Un mensaje para esos días en que una foto despierta ganas de verse.', hoy, [
          [ambiente('ciudad'), 'Hay tardes en que me dan ganas de preguntarte si ya terminaste todo y si puedo verte un ratito.'],
          [2, 'Me gusta abrir la galería y encontrarte parado ahí como si estuvieras a punto de saludarme.'],
          [7, 'También me gusta guardarte así, listo para salir. Me imagino la próxima vez que pueda ir contigo.'],
          [9, 'Te veo aquí con tus tenis rojos y me entran ganas de decirte que hoy toca foto de los dos.'],
          [18, 'Y después de la foto, quiero que nos sentemos tantito. Me gusta saber cómo te fue, incluso cuando el día fue de lo más normal.'],
          [22, 'Hoy tenía ganas de verte, Ernesto. Por eso me puse a buscar estas fotos y acabé escribiéndote.']
        ]),
        episodio('Todas tus versiones', 'Yasmín vuelve a mirar los retratos que le sacan una sonrisa.', besos, [
          [21, 'Me divierte pasar de una foto a otra y encontrarte de chamarra, de gorra o con un estilo completamente distinto.'],
          [23, 'En esta saliste de vino. Me dieron ganas de dejar la foto aquí para poder volver a verla.'],
          [24, 'Hasta el dragón de tu playera terminó en la serie. Ese detalle tenía que salir por lo menos una vez.'],
          [26, 'Y aquí van otra vez esos tenis rojos. Ya ves que sí me fijo.'],
          [28, 'Si estás sonriendo mientras lees esto, imagíname del otro lado sonriendo contigo.'],
          [12, 'De todas las fotos, esta tiene una ventaja. En esta puedo estar así de cerca de ti.']
        ]),
        episodio('Volvamos a salir en la misma foto', 'El último episodio se queda con un deseo para los días que vienen.', dedico, [
          [ambiente('horizonte', true), 'La próxima vez que tengamos una tarde libre, quiero que nos demos permiso de ir despacio.'],
          [6, 'Quiero otra foto de los dos, de esas que salen cuando nos juntamos rápido para caber.'],
          [ambiente('cielo'), 'Quiero platicar contigo de lo que todavía nos gustaría hacer y escoger juntos por dónde empezar.'],
          [1, 'También quiero guardar algún día sencillo, de esos en los que con un abrazo me alcanza para acordarme de la tarde entera.'],
          [3, 'Cuando vuelvas a tomarme de la mano, acuérdate de que también te estoy escogiendo yo.'],
          [16, 'Y cuando salga la próxima foto, quiero volver a verme así de contenta junto a ti. Te amo y te amaré por siempre, Ernesto.']
        ])
      ]
    }
  ];

  return {
    pareja: { nombreA: 'Yasmín', nombreB: 'Ernesto', ciudad: '', viajes: [] },
    fotos: {
      hero: 'assets/fotos/hero.webp', perfilB: 'assets/fotos/perfil-ernesto.webp',
      perfilPareja: 'assets/fotos/perfil-juntos.webp',
      t0: foto(1), t1: foto(3), t2: foto(10), t3: foto(12), t4: foto(13), t5: foto(16)
    },
    media: {
      intro: 'assets/audio/intro.mp3',
      temporadas: temporadas.map(({ musica }) => musica),
      videoFinal: 'assets/video/para-ernesto.mp4'
    },
    acceso: {
      demo: false, password: '0048a973df331dcc6fa69755734c1956f94f9183922e577dcfb808f7a7d496a9',
      pistaPassword: 'Cuatro letras. Lo que celebran estas películas.', estreno: ''
    },
    notificacion: { whatsapp: '525637562417', email: '', endpoint: '' },
    sitio: {
      titulo, url: 'https://streaming-us-2.rotfstudio.com/yasmin-ernesto/index.html?compartir=1', coincidencia: 100, clasificacion: 'TP',
      clasificacionTexto: 'Una dedicatoria de amor',
      heroTag: 'DE YASMÍN PARA ERNESTO', heroTop: 'Nuestro capítulo',
      sinopsis: 'Ernesto, junté nuestras fotos y estas canciones para darte las gracias por los ratitos que compartimos. Ojalá hagamos tiempo para muchos más. — Yasmín',
      generos: ['Romance', 'Recuerdos'], filaRecomendada: temporadas[0].titulo
    },
    temporadas,
    extras: [
      { titulo: 'De la mano', img: foto(3), texto: 'Quiero seguir encontrando tu mano cuando nos sentemos juntos.' },
      { titulo: 'Una vuelta más', img: foto(10), texto: 'La próxima vez que salgamos, yo pongo la música.' },
      { titulo: 'Bien cerquita', img: foto(25), texto: 'De todas las cosas que quiero volver a hacer, abrazarte es la más fácil de empezar.' }
    ],
    final: {
      titulo: 'Lo que quería decirte, Ernesto', imagen: portada(5),
      sinopsis: 'Una carta de Yasmín y un último montaje con las fotos de los dos.',
      preguntas: [
        '¿Qué foto de los dos guardarías para volver a verla en un día difícil?',
        '¿Qué canción te gustaría que pongamos la próxima vez que salgamos?',
        '¿Qué plan sencillo te gustaría que hagamos juntos pronto?',
        '¿Qué meta tuya te gustaría contarme para que la celebremos juntos?',
        'Si pudieras ponerle nombre a nuestro siguiente capítulo, ¿cómo se llamaría?'
      ],
      carta: () => [
        'Ernesto:',
        'Empecé a mirar nuestras fotos y me quedé un buen rato en la de nuestras manos. Entre todos los retratos, esa me hizo pensar en lo fácil que es decirte «aquí estoy» cuando te tomo de la mano.',
        'Gracias por compartir tu tiempo conmigo. Me encanta encontrarnos en una foto del coche, en un abrazo o tan juntos que apenas cabemos en la pantalla. Cada una me deja ganas de verte otra vez.',
        'Quiero que tengamos tiempo para salir, para contarnos cómo nos fue y para platicar de las cosas que nos ilusionan. Quiero saber qué sueñas hacer y estar ahí para echarte porras mientras lo intentas.',
        'Te amo y te amaré por siempre, Ernesto. Cuando nos veamos, acuérdame que nos tomemos otra foto. La de hoy también la quiero guardar.',
        'Con cariño,\nYasmín Rodríguez'
      ].join('\n\n')
    },
    creditos: [
      ...creditos,
      ['Banda sonora', [dedico, hoy, gracias, besos, todo].map(({ cancion }) => cancion).join(' · ')],
      ['Escenas ilustrativas', 'Pexels']
    ],
    postCreditos: {
      imagen: foto(3), etiqueta: 'ESCENA POST-CRÉDITOS',
      texto: 'Ernesto, me faltó pedirte algo. La próxima vez que estemos juntos, dame la mano un ratito más.',
      anuncio: 'El siguiente capítulo', subtitulo: 'Nos toca escribirlo juntos.',
      sorpresa: 'Te amo y te amaré por siempre. — Yasmín'
    }
  };
})();

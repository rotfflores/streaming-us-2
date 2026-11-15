window.TDN = (() => {
  const nombreA = 'Juan';
  const nombreB = 'Elizabeth';
  const aniversario = '15 de noviembre';
  const anioEstreno = 2026;
  const titulo = 'Un pedacito de tu vida';
  const foto = (n) => `assets/fotos/foto-${String(n).padStart(2, '0')}.webp`;
  const portada = (n) => `assets/fotos/portada-${n}.webp`;
  const ambiente = (nombre) => `assets/ambiente/${nombre}.webp`;
  const clip = (base) => ({ img: `${base}.mp4`, poster: `${base}.webp` });
  const video = (n) => clip(`assets/video/momento-${n}`);
  const escena = (medio, ...texto) => ({
    ...(typeof medio === 'string' ? { img: medio, poster: medio } : medio), texto
  });

  const tracks = {
    anhelo: ['Mi Mayor Anhelo — Banda MS', 'mi-mayor-anhelo'],
    gracias: ['Simplemente Gracias — Calibre 50', 'simplemente-gracias'],
    pensando: ['Pensando en Ti — Cuarto de Milla', 'pensando-en-ti'],
    amor: ['Es Amor', 'es-amor'],
    llegar: ['Para llegar a ti', 'para-llegar-a-ti']
  };
  const pista = ([cancion, archivo]) => ({ cancion, musica: `assets/audio/${archivo}-climax.mp3` });
  const episodio = (titulo, descripcion, duracion, track, escenas) => ({
    titulo, descripcion, duracion, escenas, ...pista(track)
  });
  const creditos = [['Para', nombreB], ['De', nombreA], ['Aniversario', aniversario]];
  const pelicula = (num, titulo, imagen, track, sinopsis, escenas) => ({
    num, tipo: 'pelicula', titulo, imagen: portada(imagen), clasificacion: 'TP', anio: anioEstreno,
    sinopsis, top10: num === 0, creditos, ...pista(track),
    episodios: [episodio(titulo, sinopsis, 55, track, escenas)]
  });

  const temporadas = [
    pelicula(0, titulo, 2, tracks.anhelo,
      'En poco tiempo, Juan y Elizabeth vivieron momentos que él quiere guardar. Esta película nace de las ganas de decirle cuánto significaron.', [
        escena(foto(2), 'Elizabeth, en tan poquito tiempo vivimos un montón de cosas.', 'Todavía me sorprende todo lo que tengo para recordar.'),
        escena(video(3), 'Me gusta vernos aquí, mirándonos de reojo.', 'En unos segundos se alcanza a ver lo a gusto que me siento contigo.'),
        escena(foto(7), 'Luego está esta foto frente al espejo.', 'Me dan ganas de volver a quedarme un ratito en ese día.'),
        escena(clip('assets/ambiente/horizonte'), 'Al ver todo esto junto, dan ganas de ir más despacio.', 'Así puedo acordarme de cómo me sentí en cada momento.'),
        escena(foto(9), 'Hasta una foto con casco me hace sonreír.', 'Me alegra haber compartido contigo también esos ratos.'),
        escena(foto(8), 'Si hoy pudiera decirte una sola cosa, sería esta:', 'gracias por compartir un pedacito de tu vida conmigo. 🫶')
      ]),
    pelicula(1, 'Cuando pienso en ti', 8, tracks.pensando,
      'Una foto basta para que Juan se acuerde de una mirada, de la risa que vino después y de las ganas de volver a ver a Elizabeth.', [
        escena(ambiente('libreta'), 'A veces estoy concentrado en cualquier otra cosa', 'y de pronto me descubro pensando en ti.'),
        escena(foto(1), 'Entonces me acuerdo de una foto como esta.', 'Tu cara y las manos haciendo señas me devuelven a ese ratito.'),
        escena(video(6), 'Me gusta conservar también lo que se mueve:', 'la forma en que volteas, el gesto que una foto sola se perdería.'),
        escena(foto(4), 'Me dan ganas de saber cómo te fue hoy,', 'de oír lo que te hizo reír y contarte lo que me pasó.'),
        escena(video(4), 'Veo cómo nos volteamos a ver en este video.', 'Si me preguntas qué me gusta de estar contigo, podría enseñártelo.'),
        escena(foto(6), 'Ojalá un día cualquiera vuelvas a ver esto', 'y te den las mismas ganas de sonreír que a mí.')
      ]),
    pelicula(2, 'Gracias por estar ahí', 6, tracks.gracias,
      'Juan vuelve a las fotos de los días comunes y a los videos de las salidas para agradecerle a Elizabeth que le hiciera un lugar en su vida.', [
        escena(foto(10), 'Me da gusto que también tengamos fotos de los días comunes.', 'Ahora puedo volver a ver momentos que se me habrían escapado.'),
        escena(video(5), 'Y tenemos videos de esos ratos', 'en los que lo único que quería era seguir pasándola bien contigo.'),
        escena(foto(5), 'Volví a ver esta foto de nuestras manos.', 'Me gusta todo lo que puede hacerme sentir un gesto tan sencillo.'),
        escena(video(7), 'Gracias por acercarte para grabar otro poquito.', 'Hoy me alegra poder volver a oír la canción y vernos ahí.'),
        escena(foto(11), 'Gracias por compartir conmigo lo de todos los días.', 'Por eso me gusta tanto volver a ver estas fotos.'),
        escena(foto(2), 'Elizabeth, qué bueno haberte conocido.', 'Qué bonito que de tan poco tiempo me quede tanto que agradecerte.')
      ]),
    pelicula(3, 'Lo que quiero cuidar', 3, tracks.amor,
      'Juan piensa en lo que quiere seguir haciendo con Elizabeth: darse tiempo, escucharse bien y hacerse compañía mientras cada quien cumple sus metas.', [
        escena(foto(5), 'Cuando pienso en lo que viene, se me ocurre empezar por algo sencillo:', 'hacer tiempo para estar contigo, aunque los días se llenen.'),
        escena(clip('assets/ambiente/olas'), 'Quiero preguntarte cómo estás', 'y quedarme el tiempo suficiente para escuchar la respuesta.'),
        escena(foto(6), 'Cuando tengas un plan que te emocione, quiero que me lo cuentes.', 'Me va a dar gusto verte avanzar y poder echarte la mano.'),
        escena(ambiente('camino'), 'Me gustaría hacer un plan contigo y ponerle fecha.', 'Hasta una tarde libre para ir a algún lugar nuevo me hace ilusión.'),
        escena(video(4), 'También quiero guardar tiempo para los ratos de siempre:', 'vernos, platicar y que de pronto ya se nos haya ido la tarde.'),
        escena(foto(3), 'Quiero que sigamos encontrando ganas de vernos.', 'Y que tengamos muchos días de los que queramos guardar una foto.')
      ]),
    {
      num: 4, tipo: 'serie', titulo: 'Todo lo que cabe en un ratito', imagen: portada(9),
      clasificacion: 'TP', anio: anioEstreno, creditos, ...pista(tracks.llegar),
      sinopsis: 'Tres episodios de Juan para Elizabeth. Uno para lo que ya vivieron, otro para lo que él siente al recordarlo y uno más para lo que le hace ilusión compartir.',
      episodios: [
        episodio('Lo que alcanzamos a vivir', 'Juan recorre sus recuerdos y vuelve al detalle que más los une: ver a Elizabeth pasándola bien.', 35, tracks.llegar, [
          escena(video(2), 'Si me pongo a ver nuestros videos, uno siempre me lleva al siguiente.', 'Al rato ya estoy recorriendo todas las fotos.'),
          escena(foto(7), 'Me gustó encontrar esta otra vez.', 'Hay mucho de nosotros en la forma de acercarnos para que salgamos los dos.'),
          escena(video(1), 'Qué suerte haber guardado también un poquito de ese día.', 'Cuántas cosas vivimos juntos en tan poco tiempo.'),
          escena(foto(9), 'De todos estos recuerdos, me quedo con las ganas', 'de seguir sabiendo cómo se siente estar a tu lado.')
        ]),
        episodio('Hay cosas que me guardo', 'Juan pone en palabras lo que le pasa cuando vuelve a ver las miradas y las sonrisas de los dos.', 35, tracks.pensando, [
          escena(ambiente('libreta'), 'Quería dejarte algo que pudieras volver a abrir', 'cuando te dieran ganas de saber qué se me pasa por la cabeza.'),
          escena(video(7), 'Por ejemplo, aquí me gusta cómo nos vemos juntos.', 'Siempre termino reproduciendo estos segundos otra vez.'),
          escena(foto(4), 'A veces me da pena decirte cuánto te pienso.', 'Por eso hoy quise tomarme el tiempo de escribirlo.'),
          escena(foto(8), 'Me gusta estar contigo, Elizabeth.', 'Me sigue dando gusto decir tu nombre y pensar en nosotros.')
        ]),
        episodio('Otro 15 de noviembre', 'Juan celebra su aniversario y se imagina qué le gustaría tener para recordar cuando vuelva a llegar la fecha.', 44, tracks.gracias, [
          escena(clip('assets/ambiente/horizonte'), 'Hoy es 15 de noviembre.', 'Quería quedarme un rato pensando en todo lo que me ha dado estar contigo.'),
          escena(foto(3), 'Ojalá el próximo 15 volvamos a mirar estas fotos', 'y tengamos alguna historia nueva que contarnos entre los dos.'),
          escena(video(6), 'Me gustaría guardar más ratos así,', 'aunque lo único que hagamos sea salir y dejar que el día nos sorprenda.'),
          escena(foto(8), 'Gracias por los momentos inolvidables, Elizabeth.', 'Feliz aniversario. Con cariño, Juan.')
        ])
      ]
    }
  ];

  return {
    pareja: { nombreA, nombreB, aniversario, anioInicio: '', ciudad: '', viajes: [] },
    fotos: {
      hero: 'assets/fotos/hero.webp', perfilB: 'assets/fotos/perfil-elizabeth.webp',
      perfilPareja: 'assets/fotos/perfil-pareja.webp',
      t0: foto(2), t1: foto(8), t2: foto(6), t3: foto(7), t4: foto(3), t5: foto(9)
    },
    media: {
      intro: 'assets/audio/intro.mp3',
      temporadas: Object.values(tracks).map((track) => pista(track).musica),
      videoFinal: 'assets/video/para-elizabeth.mp4'
    },
    acceso: {
      demo: false, password: '0d0c9bc37ae955b26c8bfecc22fcd072c4ea5ce95947a5051b5ed7399bff4f2e',
      pistaPassword: 'El día y el mes de nuestro aniversario (DDMM).', estreno: ''
    },
    notificacion: { whatsapp: '524851362285', email: '', endpoint: '' },
    sitio: {
      titulo, url: 'https://streaming-us-2.rotfstudio.com/juan-elizabeth/', coincidencia: 100, clasificacion: 'TP',
      clasificacionTexto: 'Romance y recuerdos compartidos',
      heroTag: 'DE JUAN PARA ELIZABETH', heroTop: aniversario,
      sinopsis: 'Juan celebra el 15 de noviembre con los recuerdos de lo que ha vivido junto a Elizabeth y las ganas de seguir compartiendo días con ella.',
      generos: ['Romance', 'Música'], filaRecomendada: titulo
    },
    temporadas,
    extras: [],
    final: {
      titulo: 'Tengo algo que decirte, Elizabeth', imagen: portada(8),
      sinopsis: 'Cinco preguntas, una carta de Juan y un último montaje para celebrar su aniversario.',
      preguntas: [
        '¿Qué recuerdo nuestro te dieron ganas de volver a vivir?',
        '¿Cuál de nuestras fotos guardarías en favoritos?',
        '¿Qué canción te hace pensar en nosotros?',
        '¿Qué plan te daría gusto que hiciéramos pronto?',
        '¿Qué te gustaría que recordáramos el próximo 15 de noviembre?'
      ],
      carta: () => [
        'Elizabeth:',
        'En tan poco tiempo pasé muchas cosas y viví momentos inolvidables a tu lado. Gracias por compartir un pedacito de tu vida conmigo. 🫶',
        'Mientras veía estas fotos otra vez, me acordé de lo bien que me la paso contigo. Hasta en las fotos en las que vamos con casco, o en las que apenas alcanzamos a salir los dos, encuentro algo que me da gusto recordar.',
        'Me gustaría que siguiéramos haciéndonos espacio. Quiero escuchar lo que te ilusiona, animarte con lo que quieras lograr y que de vez en cuando nos pongamos de acuerdo para salir a hacer algo que los dos tengamos ganas de hacer.',
        'Feliz 15 de noviembre, Elizabeth. Gracias por todo lo que ya me llevo de esta historia.',
        'Con cariño,\nJuan'
      ].join('\n\n')
    },
    creditos: [...creditos, ['Banda sonora', Object.values(tracks).map(([cancion]) => cancion).join(' · ')]],
    postCreditos: {
      imagen: foto(8), etiqueta: 'ESCENA POST-CRÉDITOS',
      texto: 'Cuando volvamos a tomarnos una foto, quiero acordarme de lo bonito que fue hacerte este regalo.',
      anuncio: 'Continuará', subtitulo: 'Me da gusto pensar en la próxima vez que nos veamos.',
      sorpresa: 'Feliz aniversario, Elizabeth. — Juan'
    }
  };
})();

window.TDN = (() => {
  const nombreA = 'Jorge';
  const nombreB = 'Nora';
  const nombreCompletoA = 'Jorge Alberto Murillo León';
  const nombreCompletoB = 'Nora Lorena Valdez Gómez';
  const anioInicio = 2026;
  const fechaInicio = '2026-09-04';

  const foto = n => `assets/fotos/foto-${String(n).padStart(2, '0')}.webp`;
  const portada = nombre => `assets/fotos/portada-${nombre}.webp`;
  const ambiente = nombre => `assets/fotos/ambiente-${nombre}.webp`;
  const imagen = (img, ...texto) => ({ img, texto });
  const recuerdo = (n, ...texto) => imagen(foto(n), ...texto);
  const video = (nombre, ...texto) => ({
    img: `assets/video/${nombre}.mp4`,
    poster: `assets/fotos/${nombre}.webp`,
    texto
  });

  const canciones = [
    ['La magia de conectar — Edén Muñoz', 'la-magia-de-conectar'],
    ['Amor de antes — Grupo Firme y Herencia de Grandes', 'amor-de-antes'],
    ['Aquí es — La Original Banda El Limón', 'aqui-es'],
    ['Desde que te tengo (Live From Japan) — Carín León', 'desde-que-te-tengo'],
    ['Hasta viejitos — Carín León y KAROL G', 'hasta-viejitos']
  ].map(([cancion, nombre]) => ({ cancion, musica: `assets/audio/${nombre}.mp3` }));

  const creditosDe = (...extra) => [
    ['Para', nombreCompletoB], ['Con amor de', nombreCompletoA], ...extra
  ];
  const episodio = (titulo, descripcion, pista, escenas, caratula) => ({
    titulo, descripcion, imagen: caratula, duracion: 44, ...pista, escenas
  });
  const pelicula = (num, titulo, caratula, pista, sinopsis, escenas) => ({
    num, tipo: 'pelicula', titulo, anio: anioInicio, clasificacion: 'TP',
    imagen: caratula, ...pista, sinopsis, top10: num === 2,
    creditos: creditosDe(['Música', pista.cancion]),
    episodios: [episodio(titulo, sinopsis, pista, escenas, caratula)]
  });

  const peliculas = [
    pelicula(0, 'Dos días de marzo', portada('cerro'), canciones[0],
      'Una diligencia de trabajo, dos encuentros y un cerro bajo el sol de marzo.', [
        imagen(ambiente('desierto'), 'El 19 de marzo nos vimos por primera vez, por una diligencia del trabajo.'),
        video('video-2', 'Qué distinto se siente mirar hacia atrás, sabiendo lo que vendría después.'),
        recuerdo(3, 'El 20 de marzo nos volvimos a encontrar por la misma diligencia.'),
        recuerdo(1, 'Estábamos en un cerro, junto a un acantilado, con el sol ardiendo.'),
        video('atardecer', 'Me acuerdo del calor de ese día. Hoy también me quedo con la alegría de haberte visto.'),
        recuerdo(7, 'Si pudiera decirle algo a la Nora de ese cerro, le diría que guarde bien ese recuerdo.')
      ]),
    pelicula(1, 'Volver a encontrarte', portada('agosto'), canciones[1],
      'El 26 de agosto, un curso les dio la oportunidad de empezar a platicar.', [
        recuerdo(12, 'Pasó el tiempo, hasta que el 26 de agosto volvimos a coincidir en un curso.'),
        recuerdo(16, 'Esa vez empezamos a platicar y pude conocerte un poco más.'),
        recuerdo(21, 'Me gusta recordar que lo nuestro se fue haciendo lugar en conversaciones.'),
        recuerdo(20, 'Gracias por el tiempo que nos dimos para conocernos.'),
        recuerdo(26, 'Qué gusto que aquel reencuentro nos haya acercado.'),
        recuerdo(28, 'Ya teníamos ganas de ver qué podía pasar entre nosotros.')
      ]),
    pelicula(2, 'El día 4', portada('septiembre'), canciones[2],
      'El 4 de septiembre decidieron salir. Cada día 4 guarda algo de ese comienzo.', [
        recuerdo(6, 'El 4 de septiembre decidimos salir y ahí empezó todo, Nora.'),
        recuerdo(13, 'Ese día se quedó conmigo. Ahora cada día 4 me hace pensar en ti.'),
        recuerdo(14, 'Me da gusto haber dado ese paso contigo.'),
        video('video-1', 'Al vernos juntos, me vuelven las ganas de guardar hasta los ratitos más sencillos.'),
        recuerdo(7, 'El 4 de diciembre cumplimos tres meses de novios.'),
        recuerdo(22, 'Gracias por este comienzo. Qué bonito poder celebrar que somos novios.')
      ]),
    pelicula(3, 'Lo que quiero cuidar', portada('futuro'), canciones[4],
      'Una película sobre los detalles que Jorge agradece y lo que sueña construir con Nora.', [
        recuerdo(2, 'Todavía guardo esta foto. Fue el primer detalle.'),
        recuerdo(29, 'Gracias por recibir mi cariño y dejarme compartirlo contigo.'),
        imagen(ambiente('orilla'), 'Quiero saber escucharte con calma y acompañarte en las cosas que te importan.'),
        recuerdo(30, 'También quiero que tengamos ratos para descansar y reírnos de cualquier cosa.'),
        video('amanecer', 'Me ilusiona celebrar tus logros y compartir contigo lo que a mí también me hace soñar.'),
        recuerdo(28, 'Si seguimos llenando de cariño los días comunes, imagínate todo lo que nos queda por vivir.')
      ])
  ];

  const serie = {
    num: 4, tipo: 'serie', titulo: 'Detrás de cada día 4', anio: anioInicio,
    clasificacion: 'TP', imagen: portada('serie'), ...canciones[3],
    sinopsis: 'Tres episodios para volver a las primeras casualidades, agradecer lo que ya comparten e imaginar lo que viene.',
    creditos: creditosDe(['Próximo capítulo', 'Por escribir juntos']),
    episodios: [
      episodio('Lo que recuerdo de marzo', 'Jorge vuelve a las dos primeras veces que vio a Nora.', canciones[0], [
        imagen(ambiente('desierto'), 'Por trabajo nos cruzamos el 19 de marzo.'),
        recuerdo(3, 'Esta fue la razón por la que te vi al día siguiente.'),
        recuerdo(1, 'Y así se veía todo desde el cerro, aquel 20 de marzo.'),
        video('atardecer', 'Al volver a ese recuerdo, primero me vienen la luz y el calor.'),
        recuerdo(8, 'Después pienso en lo bonito que fue volver a encontrarte en agosto.'),
        recuerdo(11, 'De esos primeros días me queda una sonrisa. Qué bueno que coincidimos.')
      ], portada('cerro')),
      episodio('Gracias por estos tres meses', 'Un primer detalle y varios recuerdos que Jorge quiere guardar.', canciones[3], [
        recuerdo(2, 'De todos los recuerdos, quise guardar un lugar para este primer detalle.'),
        recuerdo(10, 'Gracias por los momentos que ya puedo recordar contigo.'),
        recuerdo(23, 'Me gusta que haya cosas tan pequeñas capaces de traerme de vuelta a un día juntos.'),
        recuerdo(25, 'Quiero seguir encontrando tiempo para nosotros, incluso en semanas que se llenan de pendientes.'),
        recuerdo(19, 'Estas fotos me hacen pensar en lo mucho que cabe en tres meses.'),
        recuerdo(27, 'Gracias por dejarme compartir este comienzo contigo, Nora.')
      ], portada('agosto')),
      episodio('Nuestro siguiente capítulo', 'Metas pequeñas y grandes para una historia que sigue.', canciones[4], [
        video('amanecer', 'Me emociona pensar en todos los lugares que podríamos conocer juntos.'),
        recuerdo(17, 'Quiero seguir preguntándote cómo estuvo tu día y escuchar lo que tengas ganas de contar.'),
        recuerdo(15, 'Quiero que tengamos la confianza de decirnos qué necesitamos.'),
        recuerdo(22, 'Quiero acompañarte en tus planes y poder contar contigo para los míos.'),
        video('video-1', 'Ojalá nos queden muchos de estos ratos para mirarnos y sonreír.'),
        recuerdo(28, 'Por estos tres meses y por todos los días 4 que nos falten por celebrar.')
      ], portada('futuro'))
    ]
  };

  const mensajeFinal = 'Gracias por el tiempo que nos hemos dado para conocernos. Me ilusiona acompañarte en lo que quieres lograr, compartirte lo que sueño y seguir haciendo espacio para nosotros.';
  const fotos = {
    hero: portada('pareja'), perfilB: foto(12), perfilPareja: foto(22),
    t0: foto(7), t1: foto(8), t2: foto(2), t3: foto(22), t4: foto(28), t5: foto(13),
    final: portada('futuro'), postCreditos: foto(28)
  };
  const musicaCompleta = canciones.map(pista => pista.cancion).join(' · ');

  return {
    pareja: { nombreA, nombreB, fechaInicio, anioInicio },
    fotos,
    media: {
      intro: 'assets/audio/intro.mp3',
      videoFinal: 'assets/video/para-nora.mp4'
    },
    acceso: { demo: false, password: '0412', pistaPassword: 'El día y el mes en que cumplimos tres meses.', estreno: '' },
    notificacion: { whatsapp: '526121391427', email: '', endpoint: '' },
    sitio: {
      url: 'https://streaming-us-2.rotfstudio.com/jorge-nora/index.html',
      coincidencia: 100, clasificacion: 'TP', clasificacionTexto: 'Romance',
      heroTag: 'JORGE PARA NORA', heroTop: 'Tres meses de novios',
      sinopsis: 'Nos vimos por trabajo en marzo, volvimos a platicar en agosto y el 4 de septiembre decidimos salir. Nora, esta es nuestra historia.',
      generos: ['Romance', 'Historia real'], filaRecomendada: 'El día 4'
    },
    temporadas: [...peliculas, serie],
    extras: [
      { titulo: 'Desde el cerro', img: foto(1), texto: 'Así se miraba desde el cerro el 20 de marzo, el día en que volvimos a coincidir en la diligencia.' },
      { titulo: 'La diligencia', img: foto(3), texto: 'La razón por la que nos vimos aquel 20 de marzo.' },
      { titulo: 'El primer detalle', img: foto(2), texto: 'El primer detalle. Qué gusto haber podido dártelo.' },
      { titulo: 'Un recuerdo de los dos', img: foto(7), texto: 'Una foto para volver a mirar cuando quiera acordarme de lo bonito que es estar contigo.' },
      { titulo: 'Nuestra banda sonora', img: foto(13), texto: musicaCompleta }
    ],
    final: {
      titulo: 'Una carta para Nora', imagen: fotos.final,
      sinopsis: 'Jorge recuerda cómo empezó todo y le deja a Nora un espacio para contar su parte de la historia.',
      preguntas: [
        '¿Qué pensaste la primera vez que nos vimos?',
        '¿Qué recuerdo de estos tres meses te hace sonreír?',
        '¿Qué te gustaría que hiciéramos juntos?',
        '¿En qué sueño te gustaría que te acompañara?',
        '¿Qué quisieras decirme hoy?'
      ],
      carta: () => `Nora:

Si me hubieran dicho el 19 de marzo, cuando nos vimos por aquella diligencia, que terminaría escribiéndote una carta por nuestros tres meses de novios, me habría costado imaginarlo. Al día siguiente nos encontramos otra vez en ese cerro. Todavía me acuerdo de la vista desde arriba y de lo fuerte que pegaba el sol.

El 26 de agosto nos reencontramos en un curso y empezamos a platicar. Agradezco haber tenido esa oportunidad de conocerte. También agradezco a los dos por decidir salir aquel 4 de septiembre. Desde entonces, el día 4 tiene un significado distinto para mí.

${mensajeFinal}

Este 4 de diciembre quiero celebrar los tres meses y lo bonito de saber que todavía tenemos mucho por conocernos. Gracias por estar aquí, Nora. Me hace feliz ser tu novio.

Con amor,
${nombreCompletoA}`
    },
    creditos: creditosDe(
      ['Protagonistas', `${nombreA} y ${nombreB}`],
      ['Nuestro comienzo', '4 de septiembre de 2026'],
      ['Tres meses de novios', '4 de diciembre de 2026'],
      ['Banda sonora', musicaCompleta],
      ['Ambientación de paisaje', 'John Craig / BLM · D Coetzee · Vicky Ponce · JaredMcKenzie']
    ),
    postCreditos: {
      imagen: fotos.postCreditos, etiqueta: 'ESCENA POST-CRÉDITOS',
      texto: 'Nora, me encanta que esta historia sea nuestra.',
      anuncio: 'Nos vemos en el siguiente capítulo',
      subtitulo: 'Celebremos otros días 4.',
      sorpresa: 'Con amor, Jorge. ♡'
    }
  };
})();

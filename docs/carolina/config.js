window.TDN = (() => {
  const titulo = 'Aquí sigo';
  const foto = (n) => `assets/fotos/foto-${String(n).padStart(2, '0')}.webp`;
  const portada = (n) => `assets/fotos/portada-${n}.webp`;
  const clip = (ruta) => ({ img: `${ruta}.mp4`, poster: `${ruta}.webp` });
  const ambiente = (n) => ({ img: `assets/ambiente/${n}.webp`, ambientacion: true });
  const ambienteVideo = (n) => ({ ...clip(`assets/ambiente/${n}`), ambientacion: true });
  const recuerdo = (n) => clip(`assets/video/recuerdo-${n}`);
  const temas = {
    dime: 'Dime que no · Ricardo Arjona',
    duele: 'Duele verte · Ricardo Arjona',
    gustas: 'Me gustas · Joan Sebastian',
    pideme: 'Pídeme · Grupo Firme',
    contigo: 'Tú con él · Frankie Ruiz'
  };
  const musica = (tema) => ({ cancion: temas[tema], musica: `assets/audio/${tema}-climax.mp3` });
  const creditos = [['Para', 'Carolina']];
  const episodio = (titulo, descripcion, tema, imagen, lista) => ({
    titulo, descripcion, imagen, ...musica(tema),
    duracion: 6 + 10 * lista.length,
    escenas: lista.map(([medio, texto]) => ({
      ...(typeof medio === 'number' ? { img: foto(medio) } : medio),
      texto
    }))
  });
  const pelicula = (num, titulo, tema, sinopsis, lista) => {
    const imagen = portada(num);
    return {
      num, tipo: 'pelicula', titulo, imagen, anio: 2026, clasificacion: 'TP',
      sinopsis, top10: num === 0, ...musica(tema),
      creditos: [...creditos, ['Música', temas[tema]]],
      episodios: [episodio(titulo, sinopsis, tema, imagen, lista)]
    };
  };

  const temporadas = [
    pelicula(0, 'Un día en el trabajo', 'dime',
      'Carolina y quien le escribe se conocieron en el trabajo. De ahí salió una amistad que todavía importa.', [
        [ambiente('escritorio'), 'Caro, nos conocimos en el trabajo. Hoy me da gusto pensar en todo lo que vino de habernos encontrado ahí.'],
        [8, 'Con el tiempo te convertiste en alguien a quien me daba gusto encontrar en medio de cualquier jornada.'],
        [5, 'Me alegra que el trabajo me haya dado la oportunidad de conocerte y, con el tiempo, de llamarte mi amiga.'],
        [10, 'Si pudiera volver a aquel comienzo, me daría curiosidad saber qué recuerdas tú de esos días.'],
        [2, 'Yo me quedo con la suerte de haber coincidido contigo. Entre tantos días de trabajo, ahí empezó nuestra amistad.'],
        [7, 'Y hoy quería tomarme un rato para decirte lo mucho que agradezco haberte conocido.']
      ]),
    pelicula(1, 'Cuando las cosas cambian', 'duele',
      'La amistad también cambia de ritmo. Una mirada sincera a lo que cuesta y a lo que todavía se puede cuidar.', [
        [1, 'Hemos pasado por varias cosas. Sé que hoy nuestra amistad se siente distinta y a veces extraño la confianza de antes.'],
        [ambienteVideo('olas'), 'Hay cosas que con el tiempo se acomodan y otras que todavía cuestan. Entiendo que cada quien lleva su ritmo.'],
        [4, 'Si a veces dudas de mí, entiendo que una promesa pesa menos que lo que una persona hace con el tiempo.'],
        [3, 'Si un día quieres hablar de lo que pasó, me gustaría escucharte y entender cómo lo viviste tú.'],
        [14, 'Pase el tiempo que pase, sigo valorando lo que compartimos y el lugar que tiene esta amistad en mi vida.'],
        [7, 'Hoy solo quería dejarte esta certeza. Si un día necesitas apoyo y quieres buscarme, puedes contar conmigo.']
      ]),
    pelicula(2, 'Gracias por tu amistad', 'gustas',
      'Un rato para agradecerle a Carolina el tiempo y la confianza que ha compartido.', [
        [6, 'Caro, gracias por los ratos que compartimos y por dejarme conocerte más allá del trabajo.'],
        [9, 'Me da gusto poder guardar estas fotos. Cada vez que las veo me acuerdo de cuánto valoro tenerte de amiga.'],
        [recuerdo(2), 'También quise guardar un poquito de ti en movimiento. Ver este video me sacó una sonrisa.'],
        [13, 'Gracias por la confianza que me diste cuando te nació compartirme algo tuyo. Siempre la voy a valorar.'],
        [11, 'Ojalá te sigan llegando días con motivos para reírte, descansar y sentirte orgullosa de lo que haces.'],
        [12, 'Y si tienes buenas noticias que te den ganas de contarme, a mí me va a dar mucho gusto celebrarlas contigo.']
      ]),
    pelicula(3, 'Puedes contar conmigo', 'pideme',
      'Una promesa sencilla de amistad. Escucharte y echarte la mano cuando te haga falta.', [
        [12, 'Caro, si un día te hace falta hablar, me puedes escribir. Puede ser para desahogarte o para contarme cualquier cosa.'],
        [ambiente('libreta'), 'Puede que yo no tenga todas las respuestas. Sí puedo guardar el teléfono un rato y ponerte toda mi atención.'],
        [3, 'Y si necesitas que te eche la mano con algo, dime qué te serviría. Vemos qué puedo hacer.'],
        [recuerdo(1), 'También me gustaría saber de ti en los días buenos. Cuenta conmigo para escuchar tus buenas noticias.'],
        [5, 'A veces cuesta pedir ayuda. Si te nace escribirme, puedes empezar por donde te salga.'],
        [7, 'Aunque hoy las cosas sean diferentes, aquí sigo, Caro. Cuando me necesites, puedes contar conmigo.']
      ]),
    {
      num: 4, tipo: 'serie', titulo: 'Lo que viene', imagen: portada(4),
      anio: 2026, clasificacion: 'TP',
      sinopsis: 'Tres episodios sobre volver a platicar, celebrar tus metas y darle tiempo a la amistad.',
      ...musica('contigo'), creditos,
      episodios: [
        episodio('Con tiempo para platicar', 'Un plan que puede empezar con un mensaje.', 'contigo', foto(8), [
          [ambiente('escritorio'), 'Si un día se nos acomoda el horario, me gustaría sentarme contigo a platicar con calma.'],
          [8, 'Podría ser un café después del trabajo. Me daría gusto saber cómo estás y qué has traído en la cabeza.'],
          [1, 'También podemos empezar con un mensaje, en el momento en que te den ganas de escribirme.'],
          [6, 'Si me quieres contar algo de tu día, yo te leo. También hay lugar para lo cotidiano entre amigos.'],
          [13, 'Por lo pronto, me da gusto que hayas llegado hasta aquí. Me hacía ilusión prepararte este rato.']
        ]),
        episodio('Todo lo que quieres lograr', 'Un deseo de que Carolina tenga tiempo y ánimo para sus propios planes.', 'gustas', foto(13), [
          [ambienteVideo('atardecer'), 'Caro, ojalá tengas tiempo para los planes que te emocionan y para descansar cuando te haga falta.'],
          [10, 'Me gustaría que te dieras crédito por lo que ya lograste, sobre todo por esas cosas que solo tú sabes cuánto te costaron.'],
          [11, 'Si te dan ganas de contarme alguna meta, quiero saber qué significa para ti y cómo vas con ella.'],
          [14, 'Y cuando se te dé algo que llevabas tiempo esperando, aquí tienes a alguien que va a alegrarse contigo.'],
          [9, 'Te deseo días en que puedas decir: esto lo hice por mí, y valió la pena.']
        ]),
        episodio('A nuestro ritmo', 'Un cierre que le deja espacio a lo que la amistad pueda ser hoy.', 'dime', foto(7), [
          [2, 'Me gustaría que sigamos encontrando maneras de cuidar esta amistad, incluso si ya cambiaron muchas cosas.'],
          [4, 'Ojalá podamos volver a platicar con confianza, cuando nos nazca y con tiempo para escucharnos.'],
          [ambiente('libreta'), 'Me da curiosidad pensar en qué nos vamos a contar la próxima vez que tengamos un rato para hablar.'],
          [5, 'Por ahora, gracias por llegar hasta el final y por todo el tiempo que me has compartido.'],
          [7, 'Ya sabes dónde encontrarme, Caro. Te mando un abrazo y te deseo que te vaya muy bien en lo que venga.']
        ])
      ]
    }
  ];

  return {
    pareja: { nombreA: '', nombreB: 'Carolina', ciudad: '', viajes: [] },
    fotos: {
      hero: 'assets/fotos/hero.webp', perfilB: 'assets/fotos/perfil.webp',
      t0: foto(1), t1: foto(3), t2: foto(5), t3: foto(8), t4: foto(12), t5: foto(13)
    },
    media: {
      intro: 'assets/audio/intro.mp3',
      temporadas: temporadas.map((t) => t.musica),
      videoFinal: 'assets/video/aqui-sigo.mp4'
    },
    acceso: {
      demo: false,
      password: '0426491043cb32c4e24bf55149f38689536f1ec8c6072167e2091879ce19cd25',
      pistaPassword: 'Tu nombre de cariño, en cuatro letras.', estreno: ''
    },
    notificacion: { whatsapp: '525621165124', email: '', endpoint: '' },
    sitio: {
      titulo, url: 'https://streaming-us-2.rotfstudio.com/carolina/index.html?compartir=1', coincidencia: 100, clasificacion: 'TP',
      clasificacionTexto: 'Una historia de amistad',
      heroTag: 'PARA CAROLINA', heroTop: 'Nuestro capítulo',
      sinopsis: 'Nos conocimos en el trabajo. Muchas cosas han cambiado desde entonces, pero me sigue dando gusto llamarte mi amiga. Si me necesitas, aquí estoy.',
      generos: ['Amistad', 'Recuerdos'], filaRecomendada: temporadas[0].titulo
    },
    temporadas,
    extras: [
      { titulo: 'Lo que quería decirte', img: foto(7), texto: 'Aunque hoy las cosas sean distintas y a veces dudes de mí, si algún día me necesitas, aquí voy a estar para ti.' },
      { titulo: 'Un café pendiente', img: 'assets/ambiente/libreta.webp', texto: 'Si un día se nos acomoda, me gustaría que nos diéramos el tiempo de platicar con calma.' }
    ],
    final: {
      titulo: 'Una carta para Caro', imagen: portada(5),
      sinopsis: 'Unas palabras para Carolina y un montaje con sus recuerdos.',
      preguntas: [
        '¿Qué recuerdas de cuando nos conocimos en el trabajo?',
        '¿Qué momento de nuestra amistad te gusta recordar?',
        '¿Qué te gustaría que te preguntara cuando tengas un día difícil?',
        '¿De qué te daría gusto platicar si nos tomáramos un café?',
        '¿Qué meta te gustaría celebrar este año?'
      ],
      carta: () => [
        'Caro,',
        'Nos conocimos en el trabajo y me da mucho gusto que de ahí haya salido nuestra amistad. Hemos pasado por varias cosas y sé que hoy ya no somos tan cercanos como antes. A veces extraño la confianza que teníamos y me quedo con el gusto de haberte conocido.',
        'Si en algún momento has dudado de mí, entiendo que estas palabras por sí solas no arreglan nada. Quería decirte algo que sí puedo cumplir. Si me necesitas y decides buscarme, aquí voy a estar. Te puedo escuchar, echarte la mano cuando esté en mis manos o simplemente hacerte compañía.',
        'Gracias por los ratos y la confianza que me has dado. Ojalá tengas tiempo para lo que disfrutas y para todo eso que quieres lograr. Si un día te nace contarme cómo te va, también quiero saber de las cosas buenas.',
        'Si se nos da un café, me dará gusto verte y platicar con calma. Mientras tanto, te mando un abrazo grande, amiga.',
        'Con cariño.'
      ].join('\n\n')
    },
    creditos: [...creditos, ['Banda sonora', Object.values(temas).join(' · ')], ['Escenas ilustrativas', 'Pexels']],
    postCreditos: {
      imagen: foto(6), etiqueta: 'ESCENA POST-CRÉDITOS',
      texto: 'Si un día te dan ganas de platicar, escríbeme, Caro. Me va a dar gusto leerte.',
      anuncio: 'Cuando se nos acomode', subtitulo: 'Un café y tiempo para ponernos al día.',
      sorpresa: 'Aquí sigo, amiga.'
    }
  };
})();

/* Nuestro capítulo ($79) · Edición independiente de Janeth para Oran. */
(() => {
  const A = 'Janeth', B = 'Oran', title = 'El amor de mi vida';
  const photo = n => `assets/fotos/foto-${String(n).padStart(2, '0')}.webp`;
  const cover = key => `assets/fotos/${key}.webp`;
  const ambient = key => `assets/ambiente/${key}.webp`;
  const tracks = [
    ['Tan enamorados · Carolina Ross', 'tan-enamorados'],
    ['Estrellitas y duendes', 'estrellitas-y-duendes'],
    ['No Hay Cielo · Franco de Vita', 'no-hay-cielo'],
    ['Bésame · Ricardo Montaner', 'besame'],
    ['Estoy Enamorado · Thalía y Pedro Capó', 'estoy-enamorado']
  ].map(([cancion, key]) => ({ cancion, musica: `assets/audio/${key}.mp3` }));
  const still = (img, ...texto) => ({ img: typeof img === 'number' ? photo(img) : img, texto });
  const clip = (key, ...texto) => ({ video: `assets/ambiente/${key}.mp4`, poster: ambient(key), texto });
  const episode = (titulo, descripcion, track, escenas) => ({ titulo, descripcion, duracion: 72, ...tracks[track], escenas });
  const film = (num, key, titulo, sinopsis, track, escenas) => ({
    num, tipo: 'pelicula', titulo, imagen: cover(key), anio: 2026, clasificacion: 'TP',
    sinopsis, ...tracks[track], top10: num === 0,
    creditos: [['De', A], ['Para', B], ['Con todo mi amor', A]],
    episodios: [episode(titulo, sinopsis, track, escenas)]
  });
  const temporadas = [
    film(0, 'giro', 'El giro que no vi venir', 'Janeth tiene algo que decirle a Oran: después de pensar en enviarlo preso, terminó siendo el amor de su vida. Así de inesperado fue encontrarse.', 2, [
      still(3, 'Oran, si alguien me hubiera contado cómo iba a terminar sintiéndome por ti, habría querido saber la historia completa.'),
      still(11, 'Porque sí: después de pensar en enviarte preso, terminé reconociendo en ti al amor de mi vida.'),
      still(5, 'Todavía me sorprende pensar en esa vuelta que dio lo nuestro. Y aquí estoy, haciéndote una película para decirte cuánto te amo.'),
      clip('olas', 'Nos encontramos. Hoy esas dos palabras me hacen pensar en todo lo que significa tenerte en mi vida.'),
      still(9, 'Quise guardar esa parte de nuestra historia aquí, con mis palabras y esa mezcla de sorpresa y cariño que me provoca.'),
      still(2, 'Lo que más quiero que sepas, Oran, es esto: eres el amor de mi vida. Con todo y el giro que yo no vi venir.')
    ]),
    film(1, 'enamorados', 'Tan enamorada de ti', 'Las ganas de mirarlo un rato más y ponerle música a eso que Janeth siente por él. Una dedicatoria para Oran, sin prisa.', 4, [
      still(7, 'Me gusta mirarte en estas fotos. A veces me quedo un ratito más en una, solo porque me dan ganas de verte.'),
      still(1, 'Me encanta esa sonrisa tuya. Quería que también tuviera su lugar en este regalo.'),
      still(12, 'Busqué canciones para acompañar todo lo que quería decirte, porque hay sentimientos que me gusta compartir contigo así.'),
      still(6, 'Si estuvieras aquí mientras veo esta parte, seguramente ya me habrías descubierto sonriéndote a la pantalla.'),
      clip('atardecer', 'Me gustaría tener una tarde sin pendientes, sentarme cerquita de ti y escuchar una de estas canciones completa.'),
      still(10, 'Oran, esta es mi manera de acercarme un poquito más a ti y decirte: me tienes muy enamorada.')
    ]),
    film(2, 'gracias', 'Gracias por encontrarnos', 'Janeth agradece haber coincidido con Oran y hace espacio para decirle lo mucho que significa para ella.', 1, [
      still(4, 'Hoy quiero agradecer que nos encontramos. Tu nombre ya tiene un lugar muy especial en mi vida.'),
      still(14, 'Hacerte este detalle me dio tiempo para pensar en ti y buscar cómo decirte lo que siento.'),
      still(8, 'Gracias por formar parte de mi historia. Me gusta poder nombrarte cuando pienso en la persona que amo.'),
      still(ambient('flores'), 'Quiero acordarme de decirte gracias también en los días comunes, cuando podamos hablar sin prisa.'),
      still(13, 'Y quiero que este regalo te lo recuerde cuando lo vuelvas a abrir: hay alguien que pensó en ti con muchísimo cariño.'),
      still(2, 'Esa alguien soy yo, Janeth. Gracias por existir en mi vida, Oran.')
    ]),
    film(3, 'contigo', 'Mi lugar contigo', 'Un deseo sencillo: encontrar tiempo para los dos, cuidarse y seguir eligiendo cómo escribir lo que viene.', 3, [
      still(8, 'Cuando pienso en lo que viene, me dan ganas de hacerte un lugar en mis planes y preguntarte por los tuyos.', 'Todos esos planes contigo los he esperado muchísimo. Me hace ilusión pensar en el día en que podamos vivirlos juntos.'),
      still(9, 'Me gustaría que pudiéramos apartar tiempo para nosotros, aunque el plan fuera solamente quedarnos platicando.'),
      clip('olas', 'Quiero escuchar qué te ilusiona, qué te preocupa y en qué te gustaría que te acompañara.'),
      still(1, 'Me gustaría que tú también supieras lo que sueño, y que pudiéramos animarnos a dar esos primeros pasos.'),
      still(11, 'Hay muchas cosas que todavía podemos descubrir juntos. Me emociona imaginar las que iremos escogiendo los dos.'),
      still(7, 'Por ahora te dejo estas fotos, estas canciones y todas mis ganas de darte un beso cuando te vea.')
    ]),
    {
      num: 4, tipo: 'serie', titulo: 'Lo que nos falta vivir', imagen: cover('serie'),
      anio: 2026, clasificacion: 'TP', ...tracks[1],
      sinopsis: 'Tres capítulos sobre cómo Janeth desea cuidar su amor: escucharse, apoyar sus metas y seguir haciendo espacio para los dos.',
      creditos: [['Con amor', A], ['Para', B]],
      episodios: [
        episode('Hablarnos bonito', 'Lo que Janeth quiere cuidar en sus conversaciones con Oran.', 2, [
          still(6, 'Quiero que podamos decirnos lo que sentimos, incluso cuando cueste un poquito encontrar las palabras.'),
          still(10, 'Me gustaría escucharte con calma y preguntarte lo que no entienda, en lugar de quedarme adivinando.'),
          clip('olas', 'Cuando tengamos un día complicado, quiero acordarme de que puedo detenerme, respirar y volver a hablar contigo.'),
          still(5, 'También quiero contarte lo que yo necesito. Me importa que podamos conocernos cada vez mejor.'),
          still(ambient('flores'), 'Y que entre las conversaciones serias siempre encontremos un momento para decirnos algo bonito.'),
          still(14, 'Empiezo hoy: te amo, Oran. Me importa mucho lo que estamos escribiendo juntos.')
        ]),
        episode('Metas de dos', 'Ganas de apoyar los sueños de cada uno y elegir un plan compartido.', 1, [
          still(ambient('camino'), 'Si pudiéramos escoger una meta para compartir, me gustaría sentarme contigo y escuchar cuál propondrías.', 'He esperado muchísimo todos esos planes contigo, Oran. Tengo muchas ganas de que podamos hacerlos realidad.'),
          still(8, 'Quiero conocer esos planes que te dan ilusión, también los que todavía estás pensando cómo empezar.'),
          still(12, 'Yo también tengo deseos que quiero contarte. Me emociona pensar que podamos apoyarnos en ellos.'),
          still(4, 'Me gustaría celebrar contigo cada paso que logres, aunque al principio parezca pequeño.'),
          clip('atardecer', 'Y hacernos tiempo para disfrutar lo que vamos viviendo, mientras encontramos el siguiente paso.'),
          still(13, 'El lugar o el plan podemos escogerlo después. Hoy quería decirte que me da ilusión imaginarlo contigo.')
        ]),
        episode('Lo que sigue contigo', 'Las ganas de seguir reuniendo recuerdos y compartir lo que viene.', 0, [
          still(2, 'Oran, quise guardar en este regalo un poquito de todo lo que siento por ti.'),
          still(11, 'Cuando volvamos a ver estas películas, me gustaría hacerlo contigo y descubrir qué sentimos al escucharlas otra vez.'),
          still(3, 'Tal vez nos detengamos en una foto, o tú tengas algo que contarme que yo no haya pensado al verla.'),
          still(ambient('estrellas'), 'Me gustaría que fuéramos sumando recuerdos nuevos, de esos que después queremos volver a mirar.'),
          still(7, 'Quiero que sigamos encontrando motivos para hacernos un detalle y regalarnos tiempo juntos.'),
          still(9, 'Te amo, Oran. Con amor, Janeth. Todavía tengo muchas ganas de descubrir lo que sigue contigo.')
        ])
      ]
    }
  ];
  const fotos = {
    hero: cover('hero'), perfilB: cover('perfil-oran'), perfilPareja: cover('perfil-pareja'),
    t0: photo(2), t1: photo(11), t2: photo(7), t3: photo(12), t4: photo(8), t5: photo(9),
    final: cover('carta'), postCreditos: photo(1)
  };
  const letter = `Oran:

Nos encontramos y terminaste siendo el amor de mi vida. Todavía me sorprende decirlo cuando pienso en ese detalle tan nuestro: después de pensar en enviarte preso, aquí estoy, buscando la forma más bonita de decirte que te amo.

Quise hacerte este regalo para que pudieras detenerte un momento y sentir todo el cariño con el que pensé en ti. Miré tus fotos, escogí estas canciones y fui encontrando palabras para algo que tengo muy claro: eres una persona inmensamente importante para mí.

Gracias por formar parte de mi vida. Me da alegría poder decir tu nombre cuando pienso en el amor y en todo lo que quiero compartir contigo.

Todos esos planes contigo los he esperado muchísimo, Oran. Me hace ilusión pensar en el día en que podamos vivirlos juntos y compartir todo eso que he imaginado a tu lado.

Me gustaría que siguiéramos encontrando tiempo para los dos. Quiero escuchar tus planes, contarte los míos y descubrir cuáles nos gustaría hacer juntos. Quiero que podamos hablarnos con cariño, preguntar cuando no entendamos algo y acompañarnos en lo que a cada uno le dé ilusión.

No sé qué fotos escogeremos para nuestro próximo regalo. Ojalá tengamos muchas nuevas y nos sentemos a verlas juntos, con alguna de estas canciones de fondo. A mí me emociona pensar en todo lo que todavía podemos vivir.

Hoy te dejo este pedacito de lo que siento para que vuelvas a él cuando quieras. Me tienes enamorada, Oran. Eres el amor de mi vida.

Este regalo es para ti, porque te amo.

Con amor,
Janeth`;
  window.TDN = {
    pareja: { nombreA: A, nombreB: B, aniversario: '2026-01-17', fechaInicio: '2026-01-17', viajes: [], mensajeFinal: letter },
    fotos, temporadas,
    media: { intro: 'assets/audio/intro.mp3', musica: '', videoFinal: 'assets/video/escena-final.mp4' },
    acceso: { demo: false, password: '1701', pistaPassword: 'La clave de cuatro números que Janeth te compartió.', estreno: '' },
    notificacion: { whatsapp: '529613860668' },
    sitio: {
      url: "https://streaming-us-2.rotfstudio.com/janeth-oran/splash.html",
      coincidencia: 100, clasificacion: 'TP', clasificacionTexto: 'Romance',
      heroTag: 'NUESTRO CAPÍTULO', heroTop: 'De Janeth para Oran', titulo: title,
      sinopsis: 'Nos encontramos y te convertiste en el amor de mi vida. Oran, hice este regalo para contarte lo que siento, darte las gracias e imaginar contigo lo que sigue.',
      generos: ['Romance', 'Un giro inesperado', 'Nuestra historia'], filaRecomendada: temporadas[0].titulo
    },
    extras: [
      { titulo: 'Porque te amo', img: photo(11), texto: 'De Janeth para Oran, con todo mi amor. Un detalle para recordarte lo mucho que significas para mí.' },
      { titulo: 'Canciones para ti', img: ambient('estrellas'), texto: tracks.map(t => t.cancion).join(' / ') }
    ],
    final: {
      titulo: 'Una carta para Oran', imagen: fotos.final,
      sinopsis: 'Janeth pone en palabras lo que siente por ti, lo que agradece y lo que le gustaría vivir a tu lado.',
      preguntas: ['¿Qué te gustaría que viviéramos juntos en nuestro próximo capítulo?'], carta: () => letter
    },
    creditos: [['De', A], ['Para el amor de mi vida', B], ['Con todo mi amor', A], ['Paisajes de ambiente', 'Pexels'], ['Con todo mi amor', 'Janeth']],
    postCreditos: {
      imagen: fotos.postCreditos, etiqueta: 'TODAVÍA QUEDABA ALGO POR DECIRTE',
      texto: 'De todas las vueltas que pudo dar esta historia, qué bonito haberte encontrado.',
      anuncio: 'Te amo, Oran', subtitulo: 'Con amor, Janeth',
      sorpresa: 'Cuando termine esta canción, me gustaría que me contaras cuál fue tu parte favorita. Yo ya sé la mía: tú.'
    }
  };
})();

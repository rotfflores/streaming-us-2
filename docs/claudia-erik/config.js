window.TDN = (() => {
  const nombreA = 'Claudia', nombreB = 'Erik';
  const aniversario = 'Agosto de 2025';
  const foto = n => `assets/fotos/foto-${String(n).padStart(2, '0')}.webp`;
  const portada = n => `assets/fotos/portada-${n}.webp`;
  const video = (n, ambiente = false) => ({img: ambiente ? `assets/ambiente/${n}.mp4` : `assets/video/video-${String(n).padStart(2, '0')}.mp4`, poster: ambiente ? `assets/ambiente/${n}.webp` : `assets/video/video-${String(n).padStart(2, '0')}.webp`, ambientacion: ambiente});
  const paisaje = nombre => ({img:`assets/ambiente/${nombre}.webp`, ambientacion:true});
  const escena = (medio, ...texto) => ({...(typeof medio === 'number' ? {img:foto(medio)} : medio), texto});
  const pista = (id,cancion) => ({musica:`assets/audio/${id}-climax.mp3`,cancion});
  const fe = pista('se-quedo-conmigo','Se Quedó Conmigo · Jesús Adrián Romero');
  const problema = pista('el-problema','El Problema · Ricardo Arjona');
  const tu = pista('fuiste-tu','Fuiste Tú · Ricardo Arjona y Gaby Moreno');
  const vida = pista('me-cambiaste','Me Cambiaste la Vida · Rio Roma');
  const canciones = [fe,problema,tu,vida];
  const creditos = [['Para',nombreB],['De',nombreA],['Nuestra historia',aniversario]];
  const episodio = (titulo,descripcion,imagen,pista,escenas) => ({titulo,descripcion,imagen,...pista,escenas,duracion:6+escenas.length*10});
  const pelicula = (num,titulo,pista,sinopsis,escenas) => ({num,tipo:'pelicula',titulo,imagen:portada(num),clasificacion:'TP',anio:2026,sinopsis,...pista,creditos:[...creditos,['Música',pista.cancion]],episodios:[episodio(titulo,sinopsis,portada(num),pista,escenas)]});
  const temporadas = [
    pelicula(0,'La noche de tu mirada',vida,'Claudia vuelve a esa noche en la que una mirada bastó para encender su historia con Erik.',[
      escena(14,'Todo comenzó una noche, Erik.','Te apoderaste de mi mirada y algo en mí se quedó contigo.'),
      escena(video(1),'Me deslumbraste.','Entre tantas cosas que podían pasar, pasó esto: me enamoré de ti.'),
      escena(4,'Cuando pienso en nuestro comienzo, vuelvo a esa emoción de mirarte.'),
      escena(1,'Caí a tus pies, como lo escribí al contar nuestra historia.','Todavía me enternece recordarlo.'),
      escena(paisaje('cielo'),'Hoy le doy gracias a Dios por permitir que nuestros caminos coincidieran.'),
      escena(13,'Desde agosto de 2025 guardamos un comienzo que es solo nuestro.'),
      escena(14,'Qué bonito que aquella mirada se haya convertido en esta historia.','Con amor, Claudia.')
    ]),
    pelicula(1,'Dios en medio de nosotros',fe,'Una dedicatoria sobre la fe que Claudia y Erik comparten y el amor que desean cuidar con Dios en el centro.',[
      escena(paisaje('cielo'),'Dios es el centro de nuestras vidas.','Quiero que también sea el centro de nuestra relación.'),
      escena(4,'Erik, me gustaría que nuestra fe se reflejara en cómo nos tratamos.'),
      escena(video('atardecer',true),'Que nos ayude a escuchar con paciencia, a hablar con respeto','y a reconocer cuándo necesitamos pedir perdón.'),
      escena(12,'Le pido a Dios sabiduría para acompañarte','sin dejar de cuidar lo que cada uno lleva en el corazón.'),
      escena(video(2),'Quiero hacer espacio para agradecer juntos.','Por lo bueno que tenemos y por lo que todavía podemos aprender.'),
      escena(1,'Que en los días difíciles recordemos que podemos hablar, orar y volver a intentarlo.'),
      escena(14,'Gracias, Dios, por esta historia.','Ayúdanos a cuidarla con hechos, cada día.')
    ]),
    pelicula(2,'Gracias por llegar a mi vida',tu,'Lo que Claudia quiere agradecer: la emoción de encontrarse y las ganas de seguir compartiendo.',[
      escena(13,'Erik, gracias por despertar en mí esta manera de sentir.'),
      escena(video(3),'A veces pienso en esa noche y sonrío.','Me gusta que nuestro comienzo me siga emocionando.'),
      escena(6,'Gracias por formar parte de una historia que quiero seguir contando contigo.'),
      escena(7,'Quiero que haya espacio para la risa, para las preguntas','y para decirnos con confianza cómo estamos.'),
      escena(video(4),'Me hace ilusión seguir descubriéndote.','Conocer lo que sueñas y contarte también lo que yo deseo.'),
      escena(3,'Le agradezco a Dios que podamos compartir lo que para los dos es tan importante.'),
      escena(14,'Esta es mi manera de decirte que te amo.','Y que me alegra que seas tú, Erik.')
    ]),
    pelicula(3,'Lo que quiero construir contigo',problema,'Una promesa de cuidar la relación con respeto y fe, y una invitación a imaginar juntos lo que viene.',[
      escena(video('olas',true),'Cuando pienso en el futuro, tengo deseos que quiero compartir contigo.'),
      escena(5,'Me ilusiona construir un lugar donde podamos sentir paz.','Quiero saber también cómo lo imaginas tú.'),
      escena(8,'Que cada proyecto tenga espacio para las ideas de los dos.'),
      escena(9,'Que aprendamos a hacer equipo, paso a paso,','sin exigirnos tener todas las respuestas desde el principio.'),
      escena(10,'Quiero celebrar tus metas y animarte a seguir creciendo.','También quiero compartirte las mías.'),
      escena(video(5),'Que Dios nos guíe al tomar decisiones','y nos ayude a cuidar lo que estamos construyendo.'),
      escena(4,'No sé todo lo que viene.','Sí sé que quiero hablarlo, soñarlo y caminarlo contigo.')
    ]),
    {num:4,tipo:'serie',titulo:'Caminar contigo y con Dios',imagen:portada(4),clasificacion:'TP',anio:2026,...fe,creditos,
      sinopsis:'Tres capítulos para recordar el comienzo, cuidar el presente y poner nuestros deseos en manos de Dios.',
      episodios:[
        episodio('Aquello que empezó en una mirada','La emoción de aquella noche, en las palabras de Claudia.',foto(1),vida,[
          escena(1,'Hay miradas que se quedan guardadas.','La tuya se quedó conmigo.'),
          escena(video(6),'Aquella noche me deslumbraste','y sentí que mi corazón quería acercarse a ti.'),
          escena(2,'Estas imágenes acompañan lo que quiero contarte.','Lo que más atesoro es lo que siento cuando pienso en nosotros.'),
          escena(13,'Erik, me alegra que estés en mi vida.'),
          escena(14,'Le doy gracias a Dios por nuestro comienzo.','Agosto de 2025: una parte de nuestra historia que siempre voy a guardar.')
        ]),
        episodio('Amarnos en las cosas pequeñas','Lo que Claudia desea cuidar en los días que comparten.',foto(4),tu,[
          escena(4,'Quiero que el amor se nos note en los detalles.'),
          escena(11,'En encontrar un momento de calma','para preguntarnos cómo estamos y escuchar la respuesta.'),
          escena(video(2),'En agradecer sin dar por hecho lo que el otro hace.'),
          escena(paisaje('mar'),'En orar por nosotros','y también poner de nuestra parte cuando haya algo que mejorar.'),
          escena(6,'Quiero seguir eligiendo la ternura, la honestidad y el respeto contigo.')
        ]),
        episodio('Nuestros deseos, en Sus manos','Una invitación a pensar juntos en el futuro.',foto(12),fe,[
          escena(12,'Me gustaría seguir sumando recuerdos contigo.'),
          escena(video('atardecer',true),'Salir a descubrir lugares cuando podamos','y disfrutar también los días sencillos.'),
          escena(5,'Hablar de lo que queremos construir','y decidir juntos cada paso.'),
          escena(video(5),'Que Dios nos dé claridad para elegir','y paciencia para acompañarnos mientras crecemos.'),
          escena(14,'Erik, tengo fe y tengo ilusión.','Quiero seguir escribiendo esta historia contigo.')
        ])
      ]}
  ];
  return {
    pareja:{nombreA,nombreB,nombreCompletoA:nombreA,nombreCompletoB:nombreB,aniversario,anioInicio:'2025',ciudad:'',viajes:[]},
    fotos:{hero:'assets/fotos/hero.webp',perfilB:'assets/fotos/perfil-erik.webp',perfilPareja:'assets/fotos/perfil-juntos.webp',t0:foto(14),t1:foto(4),t2:foto(1),t3:foto(12),t4:foto(13),t5:foto(14)},
    media:{intro:'assets/audio/intro.mp3',temporadas:temporadas.map(s=>s.musica),videoFinal:'assets/video/para-erik.mp4'},
    acceso:{demo:false,password:'46372791018924b8cbc444334300f85a211d2f29a56f2bb4890780b5983fc201',pistaPassword:'La clave de cuatro números que Claudia preparó para ti.',estreno:''},
    notificacion:{whatsapp:'524651014984',email:'',endpoint:''},
    sitio:{titulo:'Cuando tu mirada me encontró',url:'https://streaming-us-2.rotfstudio.com/claudia-erik/',coincidencia:100,clasificacion:'TP',anio:2026,clasificacionTexto:'Una historia de amor y fe',heroTag:'DE CLAUDIA PARA ERIK',heroTop:aniversario,filaRecomendada:'Nuestro capítulo',sinopsis:'Una noche, una mirada y un corazón que se rindió. Claudia le dedica a Erik su historia, con Dios en el centro y la ilusión de seguir caminando juntos.',generos:['Romance','Fe','Nuestra historia']},
    temporadas,
    extras:[{titulo:'Así contó Claudia nuestro comienzo',img:foto(14),texto:'Historia breve en una noche cuando el se apoderó de mi mirada me destello y caí a sus pies.\n\nQuisiera incluir a Dios en medio de esta relación. Dios es el centro de nuestras vidas. Algo que pudieran incluir sería bello'}],
    final:{titulo:'Una carta para ti, Erik',imagen:portada(5),sinopsis:'Lo que siento, lo que agradezco y lo que deseo vivir contigo. Con amor, Claudia.',preguntas:[
      '¿Qué recuerdas de aquella noche en que empezó nuestra historia?',
      '¿Qué momento de nosotros te hace sonreír?',
      '¿Cómo te gustaría que cuidáramos nuestra fe juntos?',
      '¿Qué sueño te gustaría que construyéramos entre los dos?',
      '¿Qué quisieras decirme al terminar esta historia?'
    ],carta:()=>[
      'Erik, amor:',
      'Quise hacerte este regalo para volver contigo a aquella noche. Te apoderaste de mi mirada, me deslumbraste y caí a tus pies. Así de breve pude contar nuestro comienzo; así de grande lo siento cuando lo recuerdo.',
      'Desde agosto de 2025 tenemos una historia que me emociona. Al mirar estas imágenes vuelvo a pensar en lo bonito que es tener algo nuestro para recordar y en todas las cosas que todavía me gustaría compartir contigo.',
      'Gracias por llegar a mi vida. Quiero seguir descubriendo lo que te ilusiona, escuchar lo que te preocupa y contarte también lo que llevo dentro. Me gustaría que siempre encontráramos una forma sincera y cariñosa de hablarnos.',
      'Dios es el centro de nuestras vidas y quiero que siga estando en medio de nuestra relación. Le agradezco por ti y le pido que nos enseñe a amarnos con paciencia, con respeto y con humildad. Que nuestra fe se convierta en acciones: escuchar, cuidar nuestras palabras, agradecer y pedir perdón cuando haga falta.',
      'Sueño con seguir haciendo recuerdos contigo. Con compartir días sencillos, conocer lugares cuando podamos y hablar de los proyectos que nos ilusionan. Quiero saber qué deseas tú, para que lo que construyamos tenga espacio para los dos.',
      'No conozco todas las respuestas del futuro. Hoy quiero poner nuestros deseos en manos de Dios y hacer mi parte para cuidar este amor. Quiero que podamos crecer, acompañarnos y seguir encontrando motivos para elegirnos.',
      'Gracias por aquella mirada, Erik. Me deslumbraste esa noche y hoy me hace feliz poder dedicarte estas palabras.',
      'Con amor,\nClaudia'
    ].join('\n\n')},
    creditos:[...creditos,['Banda sonora',canciones.map(c=>c.cancion).join(' / ')],['Con fe','Dios en el centro de nuestras vidas'],['Escenas ilustrativas','Paisajes de Unsplash y Pexels']],
    postCreditos:{imagen:foto(14),etiqueta:'ESCENA POST-CRÉDITOS',texto:'Le doy gracias a Dios por tu vida y por la alegría de compartir esta historia contigo.',anuncio:'Nuestra historia continúa',subtitulo:'Con fe, con amor y con ganas de seguir caminando juntos.',sorpresa:'Para Erik, con todo mi amor. Claudia.'}
  };
})();

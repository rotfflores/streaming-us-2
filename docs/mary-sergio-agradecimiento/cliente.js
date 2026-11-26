/* Edición independiente: Mary para Sergio. Un regalo de agradecimiento. */
(() => {
 const c=window.TDN,A='Mary',B='Sergio';
 const foto=n=>`assets/fotos/foto-${String(n).padStart(2,'0')}.webp`;
 const portada=n=>`assets/fotos/portada-${String(n).padStart(2,'0')}.webp`;
 const ambiente=n=>`assets/ambiente/${n}.webp`;
 const video=n=>({img:`assets/video/recuerdo-${String(n).padStart(2,'0')}.mp4`,poster:`assets/fotos/video-${String(n).padStart(2,'0')}.webp`});
 const sunset={img:'assets/ambiente/atardecer.mp4',poster:ambiente('atardecer')};
 const olas={img:'assets/ambiente/olas.mp4',poster:ambiente('olas')};
 const tracks=[['Tus latidos — Calibre 50','tus-latidos'],['Ahí estabas tú — Carín León','ahi-estabas-tu'],['Qué más puedo pedir — Carín León','que-mas-puedo-pedir'],['Como tú — Fuerza Regida','como-tu'],['Lo tienes todo — Julión Álvarez','lo-tienes-todo']].map(([titulo,slug])=>({titulo,src:`assets/audio/${slug}.mp3`}));
 const historia='Nos conocimos por Facebook y empezamos a platicar. Después nos conocimos en persona, con ese miedo de no saber si le agradaríamos al otro. Seguimos platicando y, a los seis meses, nos juntamos un 19 de septiembre de 2022. Hemos tenido altas y bajas, pero aquí seguimos juntos. Hoy simplemente quiero agradecerte que estés conmigo cuando lo necesito, que me apoyes, que me tengas paciencia y que me quieras como me quieres.';
 Object.assign(c.pareja,{nombreA:A,nombreB:B,nombreCompletoA:A,nombreCompletoB:B,apodos:[B,'mi amor'],apodo:B,fechaInicio:'2022-09-19',anioInicio:2022,anios:4,aniosManual:4,fechaCodigo:'1909',ciudad:'',primeraCita:'Nos conocimos en persona después de platicar por Facebook',cancion:tracks[1].titulo,artista:'Carín León',viajes:[],dificiles:['Hemos tenido altas y bajas, pero seguimos juntos.'],anecdota:'De hablar por Facebook a compartir la vida: nos juntamos el 19 de septiembre de 2022.',culpableAnecdota:2,gustosB:[],suenos:['Seguir apoyándonos en lo que cada uno quiera lograr','Cuidar la confianza y hablar con cariño','Hacer tiempo para nosotros y disfrutar lo cotidiano'],mensajeFinal:historia});
 Object.assign(c.fotos,{hero:'assets/fotos/hero.webp',perfilB:foto(2),perfilPareja:foto(6),t0:foto(1),t1:foto(3),t2:foto(6),t3:foto(8),t4:foto(10),t5:foto(13),t6:foto(15),t7:foto(16),final:portada(15),puzzle:foto(6),puzzle2:foto(10),postCreditos:foto(15)});
 Object.assign(c.media,{intro:'assets/audio/intro.mp3',temporadas:tracks.map(t=>t.src),canciones:tracks.map(t=>t.titulo),musica:'',videoFinal:'assets/video/para-sergio.mp4',audioRemitente:''});
 Object.assign(c.acceso,{demo:false,password:'sergio',pistaPassword:'Tu nombre, en minúsculas.',estreno:''});
 Object.assign(c.notificacion,{whatsapp:'523411341042',email:'',endpoint:''});
 Object.assign(c.sitio,{url:'https://streaming-us-2.rotfstudio.com/mary-sergio-agradecimiento/index.html?compartir=1',coincidencia:100,clasificacion:'TP',clasificacionTexto:'Una historia de gratitud',heroTag:'EXCLUSIVO PARA SERGIO',heroTop:'Una dedicatoria de Mary',sinopsis:'De un mensaje en Facebook a una vida juntos. Sergio, hoy quiero agradecerte por estar cuando te necesito, por apoyarme y por quererme como me quieres. Esta historia es para ti.',generos:['Nuestra historia','Gracias por estar','Tú y yo'],filaRecomendada:'Aquí seguimos, juntos'});
 const scene=(media,texto)=>typeof media==='number'?{img:foto(media),poster:foto(media),texto}:typeof media==='string'?{img:ambiente(media),poster:ambiente(media),texto}:{...media,texto};
 const scenes=rows=>rows.map(([m,...t])=>scene(m,t));
 const film=(num,titulo,n,track,sinopsis,rows)=>({num,tipo:'pelicula',titulo,anio:2026,clasificacion:'TP',imagen:portada(n),musica:track.src,cancion:track.titulo,top10:num===0,sinopsis,creditos:[['Para',B],['Con amor de',A],['Nuestra vida juntos','Desde el 19 de septiembre de 2022'],['Banda sonora',track.titulo]],episodios:[{titulo,duracion:88,descripcion:sinopsis,escenas:scenes(rows),interaccion:null,recompensa:''}]});
 const films=[
  film(0,'Todo empezó con un mensaje',1,tracks[0],'Facebook fue el comienzo. Entre pláticas y los nervios de vernos por primera vez, fuimos encontrando una razón para seguir conociéndonos.',[
   [1,'Sergio, ¿quién diría que una plática','podía llevarnos hasta aquí?'],
   [2,'Nos conocimos por Facebook.','Así comenzó lo nuestro.'],
   ['cielo','Primero fueron los mensajes,','las ganas de seguir conversando.'],
   [3,'Después llegó el momento','de conocernos en persona.'],
   [4,'Yo tenía miedo.','¿Te agradaría al conocerme de verdad?'],
   [5,'Había nervios y preguntas,','pero también ganas de verte.'],
   [video(1),'Nos conocimos y seguimos platicando.','La historia apenas comenzaba.'],
   [6,'Me da ternura recordar','todo lo que aún no sabíamos de nosotros.'],
   [sunset,'A veces vuelvo a ese comienzo','y sonrío por lo que vino después.'],
   [7,'Gracias por seguir aquella conversación.','Gracias por llegar a mi vida. — Mary']]),
  film(1,'Un diecinueve de septiembre',6,tracks[2],'A los seis meses dimos un paso importante: el 19 de septiembre de 2022 empezamos a vivir juntos. Esta es mi forma de recordar lo que significa compartir la vida contigo.',[
   [6,'Seguimos conociéndonos, Sergio.','Y lo nuestro fue creciendo.'],
   [7,'A los seis meses','decidimos juntarnos.'],
   [8,'El 19 de septiembre de 2022','empezamos nuestra vida juntos.'],
   ['horizonte','Una fecha que guardo con cariño:','el comienzo de una nueva etapa.'],
   [9,'Compartir la vida contigo','es mucho más que una fecha.'],
   [video(2),'Es ir conociéndonos de cerca,','también en los días más sencillos.'],
   [10,'Aprender a entendernos,','a decir lo que necesitamos.'],
   [11,'Hoy miro nuestras fotos','y agradezco que seas parte de mi vida.'],
   [olas,'Quiero seguir encontrando contigo','motivos para disfrutar cada día.'],
   [12,'De aquellos mensajes a estar aquí.','Qué bonito que sigamos siendo nosotros.']]),
  film(2,'Aquí seguimos, juntos',8,tracks[3],'Hemos tenido altas y bajas. Hoy quiero reconocer el camino que compartimos y expresar mis ganas de cuidarnos con paciencia, respeto y cariño.',[
   [8,'Nuestra historia tiene altas y bajas.','También eso forma parte de nosotros.'],
   [9,'Hay días que se sienten ligeros','y otros que cuestan un poquito más.'],
   ['horizonte','No siempre sé decir lo que siento,','pero hoy quiero intentarlo.'],
   [10,'Gracias por tu paciencia, Sergio.','Por acompañarme en lo que vivimos.'],
   [11,'Aun con las dificultades,','aquí seguimos juntos.'],
   [video(3),'Y yo quiero poner de mi parte','para que estemos bien los dos.'],
   [12,'Quiero escucharte con más calma','y hablarte con más cariño.'],
   [13,'Que podamos decir lo que nos duele','y buscar juntos cómo cuidarnos.'],
   [sunset,'Deseo que nuestro amor tenga','confianza, respeto y ternura.'],
   [14,'Gracias por lo que hemos compartido.','Quiero seguir construyendo contigo.']]),
  film(3,'Gracias por estar',15,tracks[1],'Este regalo nace de algo sencillo y enorme: agradecerte que estés cuando te necesito, que me apoyes y que me quieras como me quieres.',[
   [15,'Hoy no necesito una fecha especial','para decirte algo importante.'],
   [16,'Gracias por estar conmigo','cuando más te necesito.'],
   [1,'Gracias por apoyarme.','Tu compañía significa mucho para mí.'],
   [2,'Por tenerme paciencia','y quererme como me quieres.'],
   [video(4),'Quiero que tú también sientas','que puedes contar conmigo.'],
   [6,'Que tus días difíciles encuentren','un abrazo y compañía en mí.'],
   ['cielo','Que podamos apoyarnos','en lo que cada uno sueñe lograr.'],
   [10,'Quiero cuidar lo que tenemos,','también con mis acciones.'],
   [olas,'Y seguir disfrutando contigo','las cosas sencillas de la vida.'],
   [15,'Te quiero, Sergio.','Gracias por estar. Con amor, Mary.']])
 ];
 const ep=(titulo,descripcion,track,rows)=>({titulo,descripcion,duracion:66,musica:track.src,cancion:track.titulo,escenas:scenes(rows),interaccion:null,recompensa:''});
 const serie={num:4,tipo:'serie',titulo:'Lo que quiero seguir contigo',anio:2026,clasificacion:'TP',imagen:portada(10),musica:tracks[4].src,cancion:tracks[4].titulo,sinopsis:'Tres capítulos para decirte lo que siento, agradecer lo que compartimos y hablar de lo que deseo construir contigo.',creditos:[['Para',B],['De',A]],episodios:[
  ep('Lo que valoro de ti','Tu apoyo, tu paciencia y esa manera de estar cuando te necesito.',tracks[4],[
   [3,'Hay cosas tuyas que agradezco','más de lo que a veces digo.'],
   [5,'Tu apoyo cuando te necesito.','Saber que estás conmigo.'],
   [video(1),'Tu paciencia, tu compañía,','la forma en que me quieres.'],
   [7,'No quiero acostumbrarme','a dejar de agradecerte.'],
   ['rosas','Hoy estas palabras son para ti,','con todo mi cariño.'],
   [9,'Quiero que al ver nuestra historia','también tú te sientas querido.']]),
  ep('Ser tu equipo','Deseos de escucharnos, acompañarnos y cuidar el cariño en la vida diaria.',tracks[1],[
   [11,'Tú has estado para mí.','Yo también quiero estar para ti.'],
   [13,'Quiero escuchar lo que te ilusiona','y lo que te preocupa.'],
   ['cielo','Que puedas hablar conmigo','con confianza y tranquilidad.'],
   [video(2),'Que nos apoyemos en nuestras metas','sin dejar de cuidarnos.'],
   [14,'Que aprendamos a pedir ayuda','y a celebrar lo que vamos logrando.'],
   [16,'Mi deseo es que seamos un equipo,','en lo bonito y en lo difícil.']]),
  ep('Todo lo que nos falta vivir','Pequeñas metas para seguir compartiendo: tiempo juntos, confianza y muchos momentos por recordar.',tracks[2],[
   [1,'Me ilusiona pensar en lo que sigue.','En lo que aún podemos compartir.'],
   [4,'Quiero que hagamos tiempo','para platicar y disfrutar juntos.'],
   [12,'Que no falten ganas de reír,','de tener detalles y de escucharnos.'],
   ['horizonte','Deseo que nuestras metas encuentren','apoyo y ánimo en el otro.'],
   [video(4),'Que hagamos de lo cotidiano','algo que nos dé gusto recordar.'],
   [15,'Aquí seguimos, Sergio.','Y me alegra seguir contigo. — Mary']])
 ]};
 c.temporadas.splice(0,c.temporadas.length,...films,serie);
 c.extras=[{titulo:'Nuestra historia, en mis palabras',img:foto(1),texto:historia},{titulo:'Donde comenzó todo',img:foto(3),texto:'Un mensaje por Facebook, las pláticas y los nervios de conocernos en persona. Me gusta pensar en todo lo que vino después.'},{titulo:'19 de septiembre de 2022',img:foto(6),texto:'A los seis meses nos juntamos. Ese día comenzó nuestra vida juntos y una etapa que guardo con mucho cariño.'},{titulo:'Lo que hoy quiero decirte',img:foto(15),texto:'Gracias por estar cuando te necesito, por apoyarme, por tu paciencia y por quererme como me quieres. Este regalo es para ti.'}];
 const carta=[
  'Sergio:',
  'Hoy quiero regalarte estas palabras porque hay cosas que siento y no siempre encuentro el momento de decirte. Simplemente quiero agradecerte que estés conmigo cuando te necesito. Agradecerte tu apoyo, tu paciencia y la manera en que me quieres.',
  'A veces pienso en cómo empezó todo. Nos conocimos por Facebook y empezamos a platicar, sin saber todavía en qué se convertiría aquella conversación. Después llegó el día de conocernos en persona. Yo tenía ese miedo de no saber si te agradaría al verme, de preguntarme qué pasaría cuando dejáramos de hablar solo por mensajes. Recordar esos nervios hoy me da ternura.',
  'Nos conocimos y seguimos platicando. A los seis meses decidimos juntarnos, un 19 de septiembre de 2022. Esa fecha tiene un lugar especial para mí porque empezamos a compartir nuestra vida de otra manera. De los mensajes pasamos a conocernos de cerca, con todo lo que significa estar juntos.',
  'Hemos tenido altas y bajas. No quiero hacer de nuestra historia algo perfecto, porque lo que valoro es que sea nuestra. Aun con lo que nos ha costado, aquí seguimos. Y yo quiero que sigamos poniendo de nuestra parte para estar bien, para escucharnos y para tratarnos con el cariño y el respeto que los dos merecemos.',
  'Gracias por estar cuando lo necesito, Sergio. Por apoyarme y por tenerme paciencia. No quiero que tu compañía se vuelva algo que yo dé por hecho. Quiero saber agradecerte con palabras y también con acciones, hacerte sentir que te quiero y que me importa lo que vivimos.',
  'Yo también quiero ser compañía para ti. Que puedas contarme lo que sientes, lo que te ilusiona y lo que te preocupa. Deseo acompañarte en tus metas y compartir contigo las mías. Que podamos alegrarnos por lo que logramos y darnos ánimo cuando las cosas no salgan como esperamos.',
  'Para lo que viene, quiero seguir haciendo tiempo para nosotros: para conversar, reír, tener detalles y disfrutar lo cotidiano. Deseo que construyamos más confianza, que aprendamos a cuidarnos mejor y que sigamos encontrando razones para sentirnos a gusto juntos.',
  'Este regalo nace de todo eso. De mirar lo que hemos vivido y querer decirte, sin esperar una fecha especial, que agradezco tenerte en mi vida. Gracias por quererme como me quieres. Te quiero mucho, Sergio, y me alegra que sigamos escribiendo nuestra historia.',
  'Con todo mi cariño,\nMary'
 ].join('\n\n');
 Object.assign(c.final,{titulo:'Sergio, esto es para ti',imagen:portada(15),sinopsis:'Una carta para agradecer tu compañía y seguir hablando de nosotros.',preguntas:['¿Qué sentiste al recorrer nuestra historia?','¿Qué recuerdas de cuando empezamos a platicar por Facebook?','¿Qué momento de nuestra vida juntos guardas con más cariño?','¿Qué te gustaría que hiciéramos para cuidarnos mejor?','¿Qué meta o sueño te ilusionaría compartir conmigo?'],carta:()=>carta});
 c.creditos=[['Para',B],['Con todo mi cariño',A],['Nuestro comienzo','Una conversación por Facebook'],['Nuestra vida juntos','Desde el 19 de septiembre de 2022'],['Banda sonora',tracks.map(t=>t.titulo).join(' · ')],['Gracias','Por estar, por apoyarme y por quererme'],['','Nuestra historia continúa ♡']];
 c.postCreditos={imagen:foto(15),etiqueta:'ESCENA POST-CRÉDITOS',texto:'Sergio, todavía nos quedan muchas conversaciones y recuerdos…',anuncio:'Gracias por estar',subtitulo:'Por lo vivido, por tu compañía y por lo que deseo seguir construyendo contigo.',sorpresa:'Te quiero mucho. Con todo mi cariño, Mary. ♡'};
})();

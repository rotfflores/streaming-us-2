/* Blanca Maricela Mendez García → Angel Leobardo Nava Aniceto */
(() => {
 const c=window.TDN,A='Blanca Maricela Mendez García',B='Angel Leobardo Nava Aniceto';
 const foto=n=>`assets/fotos/foto-${String(n).padStart(2,'0')}.webp`,portada=n=>`assets/fotos/portada-${String(n).padStart(2,'0')}.webp`;
 const video=n=>({img:`assets/video/recuerdo-${String(n).padStart(2,'0')}.mp4`,poster:`assets/fotos/video-${String(n).padStart(2,'0')}.webp`});
 const tracks=[['Mi Sorpresa Fuiste Tú — Calibre 50','mi-sorpresa-fuiste-tu'],['Con Todo El Alma','con-todo-el-alma'],['Mi Bello Ángel — Los Primos MX','mi-bello-angel'],['Amor del Bueno — Reyli Barba','amor-del-bueno']].map(([titulo,slug])=>({titulo,src:`assets/audio/${slug}.mp3`}));
 const historia='Amor, hoy quiero agradecerte por tu paciencia, por tu esfuerzo que haces día a día para salir adelante, estoy orgullosa de ti por no rendirte, hoy más que nunca estoy segura que si Dios te puso en mi camino fue por algo, gracias por ser mi complemento perfecto !!!\n\nTe amo mi colashon de melón';
 Object.assign(c.pareja,{nombreA:'Blanca',nombreB:'Ángel',nombreCompletoA:A,nombreCompletoB:B,apodos:['mi colashon de melón','mi amor'],apodo:'mi colashon de melón',fechaInicio:'2023-12-25',anioInicio:2023,fechaCodigo:'251223',ciudad:'',primeraCita:'',cancion:tracks[2].titulo,artista:'Los Primos MX',viajes:[],dificiles:[],anecdota:'',culpableAnecdota:2,gustosB:[],suenos:['Seguir creciendo juntos','Acompañarnos en nuestras metas','Cuidar nuestro amor con paciencia'],mensajeFinal:historia});
 Object.assign(c.fotos,{hero:'assets/fotos/hero.webp',perfilB:foto(1),perfilPareja:foto(5),t0:foto(1),t1:foto(7),t2:foto(14),t3:foto(21),t4:foto(26),t5:foto(10),t6:foto(18),t7:foto(24),final:portada(26),puzzle:foto(5),puzzle2:foto(14),postCreditos:foto(26)});
 Object.assign(c.media,{intro:'assets/audio/intro.mp3',temporadas:tracks.map(t=>t.src),canciones:tracks.map(t=>t.titulo),musica:'',videoFinal:'assets/video/para-angel.mp4',audioRemitente:''});
 Object.assign(c.acceso,{demo:false,password:'269fca343396db3bfbdf6e82316fee60edd55165a769989d2e500c2e1ae685b1',pistaPassword:'Nuestra fecha especial: día, mes y año, con dos cifras cada uno.',estreno:''});
 Object.assign(c.notificacion,{whatsapp:'523345952021',email:'',endpoint:''});
 Object.assign(c.sitio,{url:'https://streaming-us-2.rotfstudio.com/blanca-angel/index.html?compartir=1',coincidencia:100,clasificacion:'TP',clasificacionTexto:'Una historia de amor',heroTag:'EXCLUSIVO PARA ÁNGEL',heroTop:'Blanca presenta · Desde el 25 de diciembre de 2023',sinopsis:'Tu paciencia, tu esfuerzo y esa forma tuya de seguir adelante. Cuatro películas y una serie para recordarte cuánto te admiro y por qué eres mi complemento perfecto.',generos:['Nuestro aniversario','Gratitud','Amor del bueno'],filaRecomendada:'Todo lo que quiero decirte'});
 const escenas=rows=>rows.map(([m,...texto])=>({...typeof m==='number'?{img:foto(m),poster:foto(m)}:m,texto}));
 const ep=(titulo,descripcion,track,rows,duracion=72)=>({titulo,descripcion,duracion,musica:track.src,cancion:track.titulo,escenas:escenas(rows),interaccion:null,recompensa:''});
 const film=(num,titulo,n,track,sinopsis,rows)=>({num,tipo:'pelicula',titulo,anio:2026,clasificacion:'TP',imagen:portada(n),musica:track.src,cancion:track.titulo,top10:num===0,sinopsis,creditos:[['Para',B],['De',A],['Nuestra fecha','25 de diciembre de 2023'],['Banda sonora',track.titulo]],episodios:[ep(titulo,sinopsis,track,rows,88)]});
 const films=[
 film(0,'Dios te puso en mi camino',5,tracks[0],'Una dedicatoria para el amor que Blanca agradece cada día: su compañero, su sorpresa y su complemento perfecto.',[
  [1,'Ángel, hay algo que hoy','quiero decirte con todo mi corazón.'],
  [2,'Hoy más que nunca estoy segura','de que Dios te puso en mi camino por algo.'],
  [3,'Y al mirar nuestros recuerdos,','me nace agradecer que estés en mi vida.'],
  [4,'Desde el 25 de diciembre de 2023,','hay una fecha que es nuestra.'],
  [5,'Lo más bonito de esta historia','es poder compartirla contigo.'],
  [video(1),'Gracias por tu paciencia,','por acompañarme a tu manera.'],
  [6,'Me emociona pensar','en todo lo que todavía podemos construir.'],
  [1,'Gracias por ser','mi complemento perfecto.']]),
 film(1,'Estoy orgullosa de ti',7,tracks[1],'Lo que Blanca ve en Ángel: el esfuerzo de cada día, la fuerza de volver a intentar y las ganas de salir adelante.',[
  [7,'Amor, veo el esfuerzo','que haces día a día para salir adelante.'],
  [8,'Quiero que sepas que lo valoro,','que para mí significa mucho.'],
  [9,'Estoy orgullosa de ti','por no rendirte.'],
  [10,'También quiero acompañarte','cuando necesites detenerte y respirar.'],
  [11,'Deseo que encuentres en mí','un abrazo y un lugar para hablar.'],
  [video(2),'Admiro tus ganas de seguir,','de buscar un camino hacia tus metas.'],
  [12,'Quiero celebrar tus avances contigo,','también los que parecen pequeños.'],
  [13,'Que nunca se te olvide, Ángel:','estoy orgullosa de ti.']]),
 film(2,'Mi complemento perfecto',14,tracks[2],'La paciencia y la gratitud se vuelven una película: una forma de decir gracias por lo que Ángel aporta a su vida.',[
  [14,'Gracias por tu paciencia, amor.','Hoy quiero darle su propio capítulo.'],
  [15,'Por esa parte de ti','que agradezco tener en mi vida.'],
  [16,'Quiero aprender a escucharte mejor,','a cuidar también lo que tú sientes.'],
  [17,'Deseo que podamos hablar','con confianza, respeto y cariño.'],
  [video(3),'Que la paciencia nos ayude','a seguir encontrándonos.'],
  [18,'Y que no se nos olvide agradecer','lo que hacemos el uno por el otro.'],
  [19,'Cuando digo mi complemento perfecto,','te lo digo con todo mi amor.'],
  [20,'Mi bello Ángel,','gracias por ser parte de mi camino.']]),
 film(3,'Lo que sueño contigo',21,tracks[3],'Deseos para los capítulos que vienen: acompañarse, crecer y seguir eligiendo un amor que cuide de los dos.',[
  [21,'No conozco todos los capítulos','que nos esperan por vivir.'],
  [22,'Pero sí sé que quiero','seguir construyendo contigo.'],
  [23,'Sueño con vernos avanzar,','cada uno con sus metas y sus ilusiones.'],
  [24,'Con acompañarnos sin olvidar','lo que necesita cada uno.'],
  [video(4),'Deseo que podamos cuidarnos','con paciencia y con amor.'],
  [25,'Que encontremos tiempo para nosotros,','para escucharnos y disfrutar juntos.'],
  [26,'Que sigamos sumando recuerdos','que nos dé alegría volver a mirar.'],
  [5,'Te amo, mi colashon de melón.','Con todo mi amor, Blanca.']])
 ];
 const serie={num:4,tipo:'serie',titulo:'Gracias por estar en mi vida',anio:2026,clasificacion:'TP',imagen:portada(26),musica:tracks[2].src,cancion:tracks[2].titulo,sinopsis:'Tres capítulos para decirte gracias, reconocer tu esfuerzo y mirar con ilusión lo que viene.',creditos:[['Para',B],['Con amor',A]],episodios:[
 ep('Tu paciencia, mi gratitud','Un agradecimiento por esa paciencia que Blanca valora tanto.',tracks[3],[
  [3,'A veces una palabra sencilla','puede guardar mucho amor.'],[5,'La mía hoy es gracias.','Gracias por tu paciencia conmigo.'],[9,'Quiero aprender a devolverte','esa calma que tanto valoro.'],[14,'A escucharte con atención,','a preguntarte cómo te sientes.'],[18,'Que el cariño tenga espacio','también en lo cotidiano.'],[22,'Gracias por ser tú, Ángel.','Tu paciencia tiene un lugar en mi corazón.']]),
 ep('Tu esfuerzo sí se ve','Para que Ángel recuerde cuánto admira Blanca sus ganas de seguir adelante.',tracks[1],[
  [7,'Hay algo que quiero','que escuches una vez más.'],[11,'Veo tu esfuerzo, amor.','Veo tus ganas de salir adelante.'],[video(2),'Estoy orgullosa de que sigas intentando,','de que no te rindas.'],[16,'Quiero que puedas compartir conmigo','tus ilusiones y también tus preocupaciones.'],[20,'Deseo acompañarte con cariño,','sin que tengas que tener todas las respuestas.'],[25,'Me da orgullo la persona que eres.','Gracias por dejarme caminar a tu lado.']]),
 ep('Nuestro próximo capítulo','Un deseo de seguir creciendo sin dejar de cuidar lo que hoy los une.',tracks[0],[
  [2,'Nuestra historia tiene','una fecha que llevo conmigo.'],[6,'25 de diciembre de 2023.','Un día que siempre será especial.'],[12,'Hoy quiero mirar hacia adelante','con gratitud por tenerte en mi vida.'],[17,'Deseo que tus sueños tengan espacio,','y que podamos compartir los nuestros.'],[23,'Que nunca falten paciencia,','ganas de escucharnos y cariño.'],[26,'Te amo mi colashon de melón.','Continuará… contigo. — Blanca']])
 ]};
 // La serie comparte diez recuerdos entre sus tres episodios.
 const mediosSerie=[5,7,14,17,18,20,23,24,26,video(2)];
 serie.episodios.forEach((e,i)=>e.escenas.forEach((s,j)=>{
  const m=mediosSerie[(i*3+j)%mediosSerie.length];
  Object.assign(s,typeof m==='number'?{img:foto(m),poster:foto(m)}:m);
 }));
 c.temporadas.splice(0,c.temporadas.length,...films,serie);
 c.extras=[{titulo:'Las palabras de Blanca',img:foto(5),texto:historia},{titulo:'Tu esfuerzo merece ser reconocido',img:foto(7),texto:'Estoy orgullosa de ti por no rendirte. Gracias por el esfuerzo que haces día a día para salir adelante.'},{titulo:'Nuestra fecha especial',img:foto(14),texto:'25 de diciembre de 2023. Una fecha para recordar lo que nos une y mirar con ilusión los capítulos que vienen.'},{titulo:'Lo que deseo contigo',img:foto(26),texto:'Quiero que sigamos creciendo, acompañándonos en nuestras metas y cuidando nuestro amor con paciencia.'}];
 const carta=['Mi amor, Ángel:',historia,'Hoy quiero que estas palabras te acompañen. Que al volver a ver nuestras fotos recuerdes que veo tu esfuerzo, que valoro tu paciencia y que me siento orgullosa de ti.','Me hace feliz tenerte en mi camino. Agradezco a Dios por tu vida y por la oportunidad de compartir esta historia contigo. Gracias por ser mi complemento perfecto.','Para lo que viene, deseo que podamos seguir escuchándonos y creciendo juntos. Que tus metas y las mías tengan espacio, que podamos celebrar cada avance y acompañarnos con cariño cuando necesitemos descansar.','Quiero cuidar lo que sentimos y seguir sumando momentos que un día podamos mirar con una sonrisa. No tengo escrito nuestro futuro, pero sí tengo muchas ganas de construirlo contigo.','Te amo, mi colashon de melón.','Con todo mi amor,\n'+A].join('\n\n');
 Object.assign(c.final,{titulo:'Ángel, con todo mi amor',imagen:portada(26),sinopsis:'Una carta de Blanca y un espacio para contarle lo que tú también sientes.',preguntas:['¿Qué sentiste al recorrer nuestra historia?','¿Qué recuerdo de nosotros te hace sonreír?','¿Qué te gustaría que siguiéramos cuidando en nuestra relación?','¿Qué meta o sueño te gustaría compartir conmigo?','¿Qué quieres decirme después de ver esta sorpresa?'],carta:()=>carta});
 c.creditos=[['Para',B],['Con todo el amor de',A],['Nuestra fecha','25 de diciembre de 2023'],['Banda sonora',tracks.map(t=>t.titulo).join(' · ')],['Gracias por','Tu paciencia y tu esfuerzo de cada día'],['Mi deseo','Seguir creciendo y cuidándonos juntos'],['','Continuará ♡']];
 c.postCreditos={imagen:foto(26),etiqueta:'UNA ÚLTIMA COSA',texto:'Ángel, siempre habrá algo más que agradecerte…',anuncio:'Te amo mi colashon de melón',subtitulo:'Gracias por ser mi complemento perfecto.',sorpresa:'Con todo mi amor, Blanca. ♡'};
})();

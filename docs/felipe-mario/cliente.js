/* Edición independiente: Felipe Sigüenza → Mario. */
(() => {
 const c=window.TDN,A='Felipe Sigüenza',B='Mario';
 const foto=n=>`assets/fotos/foto-${String(n).padStart(2,'0')}.webp`;
 const portada=n=>`assets/fotos/portada-${String(n).padStart(2,'0')}.webp`;
 const ambiente=n=>`assets/ambiente/${n}.webp`;
 const sunset={img:'assets/ambiente/atardecer.mp4',poster:ambiente('atardecer')};
 const olas={img:'assets/ambiente/olas.mp4',poster:ambiente('olas')};
 const tracks=[['Why Am I Like This — Orla Gartland','why-am-i-like-this'],['Hechizo — Ana Gabriel','hechizo'],['Shallow — Lady Gaga y Bradley Cooper','shallow'],['Dancing On My Own — Robyn','dancing-on-my-own'],['On The Floor — Jennifer Lopez ft. Pitbull','on-the-floor']].map(([titulo,slug])=>({titulo,src:`assets/audio/${slug}.mp3`}));
 const historia='Porque la vida no nos da lo que buscamos , si no lo que necesitamos. A esto podemos agregarle , gracias por tantos días de aprendizaje, contigo he aprendido a poner limites a decir no a algunas personas , a quererme y darme tiempo , espero yo contribuya a tu persona aunque no aceptes jaja. Lo más grato es comprar ahora los trastes y la frazada por el bien de los dos, como decía Diego y Amanda , happy day 180!';
 Object.assign(c.pareja,{nombreA:A,nombreB:B,nombreCompletoA:A,nombreCompletoB:B,apodos:[B,'mi amor'],apodo:B,fechaInicio:'',anioInicio:'',anios:0,aniosManual:0,fechaCodigo:'180',ciudad:'',primeraCita:'',cancion:tracks[2].titulo,artista:'Lady Gaga y Bradley Cooper',viajes:[],dificiles:[],anecdota:'Comprar los trastes y la frazada por el bien de los dos.',culpableAnecdota:2,gustosB:[],suenos:['Seguir aprendiendo juntos','Cuidar nuestro espacio y tiempo','Construir bienestar para los dos'],mensajeFinal:historia});
 Object.assign(c.fotos,{hero:'assets/fotos/hero.webp',perfilB:foto(2),perfilPareja:foto(1),t0:foto(1),t1:foto(5),t2:foto(9),t3:foto(13),t4:foto(17),t5:foto(21),t6:foto(23),t7:foto(25),final:portada(25),puzzle:foto(1),puzzle2:foto(9),postCreditos:foto(25)});
 Object.assign(c.media,{intro:'assets/audio/intro.mp3',temporadas:tracks.map(t=>t.src),canciones:tracks.map(t=>t.titulo),musica:'',videoFinal:'assets/video/para-mario.mp4',audioRemitente:''});
 Object.assign(c.acceso,{demo:false,password:'7b69759630f869f2723875f873935fed29d2d12b10ef763c1c33b8e0004cb405',pistaPassword:'Los días de historia que celebramos.',estreno:''});
 Object.assign(c.notificacion,{whatsapp:'522283354974',email:'',endpoint:''});
 Object.assign(c.sitio,{url:'https://streaming-us-2.rotfstudio.com/felipe-mario/index.html?compartir=1',coincidencia:100,clasificacion:'TP',clasificacionTexto:'180 días de historia',heroTag:'EXCLUSIVO PARA MARIO',heroTop:'Felipe Sigüenza presenta · 180 días de historia!',sinopsis:'La vida nos acercó a lo que necesitábamos. Cuatro películas y una serie para celebrar 180 días de aprendizaje, gratitud, cariño y pequeños detalles que cuidan de los dos.',generos:['180 días','Nuestra historia','Aprender juntos'],filaRecomendada:'Lo que estamos construyendo'});
 const scene=(media,texto)=>typeof media==='number'?{img:foto(media),poster:foto(media),texto}:typeof media==='string'?{img:ambiente(media),poster:ambiente(media),texto}:{...media,texto};
 const scenes=rows=>rows.map(([m,...t])=>scene(m,t));
 const film=(num,titulo,n,track,sinopsis,rows)=>({num,tipo:'pelicula',titulo,anio:2026,clasificacion:'TP',imagen:portada(n),musica:track.src,cancion:track.titulo,top10:num===0,sinopsis,creditos:[['Para',B],['De',A],['Celebramos','180 días de historia'],['Banda sonora',track.titulo]],episodios:[{titulo,duracion:88,descripcion:sinopsis,escenas:scenes(rows),interaccion:null,recompensa:''}]});
 const films=[
  film(0,'Lo que necesitábamos',1,tracks[2],'A veces la vida nos acerca a alguien que nos ayuda a mirarnos de otra manera. Así celebra Felipe estos 180 días con Mario.',[
   [1,'Mario, hoy celebramos','¡180 días de historia!'],
   [2,'Porque la vida no nos da lo que buscamos,','sino lo que necesitamos.'],
   [3,'Y en estos días contigo','he encontrado mucho que aprender.'],
   [4,'Me gusta detenerme un momento','y reconocer lo que hemos construido.'],
   [5,'No todo lo valioso llega con un plan.','A veces llega con una persona.'],
   ['horizonte','Hoy quiero mirar con cariño','el camino que vamos haciendo.'],
   [6,'Hay algo bonito en compartir','y también en descubrirse a uno mismo.'],
   [7,'Gracias por estar en esta historia,','por todo lo que me has enseñado.'],
   [sunset,'Quiero seguir aprendiendo a cuidar','lo que nos hace bien a los dos.'],
   [1,'Happy day 180, Mario.','Con cariño, Felipe Sigüenza.']]),
  film(1,'Aprender a quererme',8,tracks[0],'Una película sobre poner límites, decir no y darse tiempo: aprendizajes que Felipe agradece de estos días juntos.',[
   [8,'Contigo he aprendido algo importante:','también necesito cuidarme.'],
   [9,'He aprendido a poner límites,','a escuchar lo que yo necesito.'],
   [10,'A decir no a algunas personas,','aunque a veces cueste hacerlo.'],
   [11,'A quererme','sin dejarme siempre para después.'],
   [12,'A darme tiempo,','a reconocer que mi espacio también vale.'],
   ['cielo','Quiero llevarme estos aprendizajes','a cada parte de mi vida.'],
   [13,'Gracias por ser parte','de este proceso de conocerme mejor.'],
   [14,'Deseo que lo nuestro tenga espacio','para lo que necesita cada uno.'],
   [sunset,'Que podamos acompañarnos','y seguir siendo nosotros mismos.'],
   [8,'Gracias por tantos días de aprendizaje.','Eso también es parte de nuestra historia.']]),
  film(2,'Los trastes y la frazada',15,tracks[1],'El cariño también aparece en decisiones sencillas: comprar lo que les hace bien y pensar en los dos.',[
   [15,'Lo más grato también puede estar','en algo tan sencillo como esto:'],
   [16,'comprar ahora los trastes','y la frazada por el bien de los dos.'],
   [17,'Me gusta ese detalle de nuestra historia,','esa manera tan cotidiana de pensar juntos.'],
   [18,'Encontrar algo que nos sirve,','algo que nos da comodidad.'],
   [19,'Pensar en los dos','al tomar una pequeña decisión.'],
   ['horizonte','Quiero cuidar esos gestos','que hacen más amable la vida.'],
   [20,'Que sigamos descubriendo','qué nos hace sentir bien.'],
   [21,'Que nunca falten motivos para reírnos','de nuestras propias ocurrencias.'],
   [olas,'Ojalá sigamos sumando detalles','que se vuelvan parte de lo nuestro.'],
   [15,'Los trastes, la frazada y nosotros.','A veces ahí cabe todo un capítulo.']]),
  film(3,'Por el bien de los dos',22,tracks[4],'Una celebración y un deseo: seguir creciendo, escucharse y construir bienestar sin dejar de ser uno mismo.',[
   [22,'Hoy quiero celebrar contigo,','con alegría por estos 180 días.'],
   [23,'Espero yo contribuir a tu persona,','aunque no aceptes, jaja.'],
   [24,'Me gustaría aportarte cariño,','compañía y motivos para sonreír.'],
   [25,'Que lo que aprendamos juntos','nos sirva también por separado.'],
   ['cielo','Deseo que podamos hablar','de lo que cada uno necesita.'],
   [4,'Que haya espacio para tus metas','y también para las mías.'],
   [10,'Quiero seguir aprendiendo a escucharte,','con atención y sin darlo todo por hecho.'],
   [18,'Sueño con más momentos sencillos,','con risas y bienestar para los dos.'],
   [olas,'No tengo escrito lo que sigue.','Tengo ganas de poner de mi parte.'],
   [25,'Como decían Diego y Amanda:','¡Happy day 180!']])
 ];
 const ep=(titulo,descripcion,track,rows)=>({titulo,descripcion,duracion:66,musica:track.src,cancion:track.titulo,escenas:scenes(rows),interaccion:null,recompensa:''});
 const serie={num:4,tipo:'serie',titulo:'180 días y lo que sigue',anio:2026,clasificacion:'TP',imagen:portada(25),musica:tracks[3].src,cancion:tracks[3].titulo,sinopsis:'Tres episodios sobre el espacio personal, la gratitud y las ganas de seguir aportándonos cosas bonitas.',creditos:[['Para',B],['De',A]],episodios:[
  ep('Mi espacio, nuestro cariño','Darse tiempo también forma parte de lo que Felipe ha aprendido.',tracks[3],[
   [9,'He aprendido a darme tiempo,','a no olvidarme de mí.'],
   [11,'A poner límites','y reconocer lo que me hace bien.'],
   [13,'Deseo que podamos estar cerca','respetando el espacio de cada uno.'],
   ['cielo','Que podamos decir lo que necesitamos','con confianza y con cariño.'],
   [17,'Quiero llevar estos aprendizajes conmigo,','hacerlos parte de mi día a día.'],
   [21,'Y agradecerte, Mario,','por ser parte de este crecimiento.']]),
  ep('Lo que me dejas','Palabras de agradecimiento por estos días de aprendizaje.',tracks[1],[
   [3,'Gracias por tantos días de aprendizaje.','Hoy quiero decirlo con todas sus letras.'],
   [7,'Por recordarme que quererme','también merece tiempo y atención.'],
   [12,'Por todo lo que me llevo','de esta etapa contigo.'],
   [16,'Y por esos detalles tan nuestros:','los trastes y la frazada.'],
   [sunset,'Me gusta pensar en lo sencillo','que también se vuelve importante.'],
   [20,'Hay cosas de estos 180 días','que quiero seguir cuidando.']]),
  ep('También quiero aportarte','Un deseo de acompañar a Mario y contribuir a su bienestar.',tracks[2],[
   [22,'Espero yo contribuir a tu persona,','aunque no aceptes, jaja.'],
   [23,'Quiero acompañarte con cariño,','sin decidir por ti.'],
   [24,'Deseo que tus metas encuentren espacio','y que podamos compartir las nuestras.'],
   ['horizonte','Que aprendamos a escucharnos','y a cuidar lo que nos hace bien.'],
   [25,'Que los próximos capítulos tengan','más risas y más tiempo para los dos.'],
   [1,'Mario, happy day 180.','Esta historia continuará. — Felipe']])
 ]};
 c.temporadas.splice(0,c.temporadas.length,...films,serie);
 c.extras=[{titulo:'Las palabras de Felipe',img:foto(1),texto:historia},{titulo:'Aprender a cuidarme',img:foto(9),texto:'Poner límites, decir no, quererme y darme tiempo: aprendizajes que hoy quiero agradecer.'},{titulo:'Lo cotidiano también cuenta',img:foto(16),texto:'Los trastes y la frazada, por el bien de los dos. Un detalle sencillo que tiene su propio lugar en nuestra historia.'},{titulo:'Lo que deseo contigo',img:foto(25),texto:'Seguir aprendiendo, respetar nuestros espacios y aportarnos cosas bonitas.'}];
 const carta=[
  'Mario:',
  '¡180 días de historia! Hoy quiero hacer una pausa para agradecerte lo que he aprendido contigo. Porque la vida no nos da lo que buscamos, sino lo que necesitamos, y en estos días he encontrado mucho que mirar con cariño.',
  'Contigo he aprendido a poner límites, a decir no a algunas personas, a quererme y a darme tiempo. Quiero seguir haciendo espacio para esos aprendizajes, para cuidarme y escuchar lo que necesito.',
  'Espero yo contribuir a tu persona, aunque no aceptes, jaja. Me gustaría que mi compañía también te dejara algo bonito: cariño, una sonrisa, una conversación o un momento en el que te sientas escuchado.',
  'Lo más grato es comprar ahora los trastes y la frazada por el bien de los dos. Me da ternura que algo tan cotidiano pueda decir tanto de lo que vamos construyendo y de cómo empezamos a pensar en nuestro bienestar.',
  'Para lo que viene, deseo que sigamos aprendiendo a escucharnos. Que haya espacio para tus metas, para las mías y para las cosas que queramos compartir. Que cuidarnos incluya respetar lo que cada uno es y necesita.',
  'Gracias por estos días, Mario. Quiero seguir poniendo de mi parte, disfrutar los detalles y encontrar más motivos para reírnos juntos. Como decían Diego y Amanda: ¡happy day 180!',
  'Con cariño,\nFelipe Sigüenza'
 ].join('\n\n');
 Object.assign(c.final,{titulo:'Mario, esto es para ti',imagen:portada(25),sinopsis:'Una carta para celebrar lo aprendido y abrir espacio para lo que tú también sientes.',preguntas:['¿Qué sentiste al recorrer nuestros 180 días?','¿Qué has aprendido de ti en esta historia?','¿Qué detalle de nosotros te hace sonreír?','¿Cómo podemos cuidar mejor el espacio y el bienestar de cada uno?','¿Qué te gustaría compartir en nuestro próximo capítulo?'],carta:()=>carta});
 c.creditos=[['Para',B],['Con cariño de',A],['Celebramos','180 días de historia!'],['Banda sonora',tracks.map(t=>t.titulo).join(' · ')],['Nuestro pequeño gran detalle','Los trastes y la frazada'],['Lo que deseo','Aprender y cuidar de los dos'],['','Continuará ♡']];
 c.postCreditos={imagen:foto(25),etiqueta:'ESCENA POST-CRÉDITOS',texto:'Mario, esta historia todavía tiene capítulos por escribir…',anuncio:'¡Happy day 180!',subtitulo:'Como decían Diego y Amanda. Por lo aprendido y por lo que viene.',sorpresa:'Con cariño, Felipe Sigüenza. ♡'};
})();

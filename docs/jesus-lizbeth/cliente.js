/* Dedicatoria independiente de JESUS para LIZBETH. */
(() => {
 const c=window.TDN,A='JESUS',B='LIZBETH';
 const foto=n=>`assets/fotos/foto-${String(n).padStart(2,'0')}.webp`;
 const portada=n=>`assets/fotos/portada-${String(n).padStart(2,'0')}.webp`;
 const amb=n=>`assets/ambiente/${n}.webp`;
 const video=n=>({img:`assets/video/recuerdo-${String(n).padStart(2,'0')}.mp4`,poster:`assets/fotos/video-${String(n).padStart(2,'0')}.webp`});
 const sunset={img:'assets/ambiente/atardecer.mp4',poster:amb('atardecer')};
 const scene=(img,...texto)=>typeof img==='string'?{img,poster:img,texto}:{...img,texto};
 const tracks=[['Me cambiaste la vida — Río Roma','me-cambiaste-la-vida'],['Por eso te amo — Río Roma','por-eso-te-amo'],['Te amo — Franco De Vita','te-amo']].map(([titulo,slug])=>({titulo,src:`assets/audio/${slug}.mp3`}));
 Object.assign(c.pareja,{nombreA:A,nombreB:B,nombreCompletoA:A,nombreCompletoB:B,apodos:[B,'mi amor'],apodo:B,
  fechaInicio:'',anioInicio:'',anios:0,aniosManual:0,fechaCodigo:'',ciudad:'',primeraCita:'',cancion:tracks[0].titulo,artista:'Río Roma',viajes:[],dificiles:[],anecdota:'',culpableAnecdota:2,gustosB:[],
  suenos:['Cuidar nuestro amor','Apoyar nuestras metas','Crear nuevos recuerdos'],mensajeFinal:'LIZBETH, te amo. Quiero seguir construyendo algo bonito contigo. — JESUS'});
 Object.assign(c.fotos,{hero:'assets/fotos/hero.webp',perfilB:foto(7),perfilPareja:foto(6),t0:foto(6),t1:foto(7),t2:foto(18),t3:foto(26),t4:foto(23),t5:foto(11),t6:foto(16),t7:foto(25),final:portada(23),puzzle:foto(6),puzzle2:foto(18),postCreditos:foto(26)});
 Object.assign(c.media,{intro:'assets/audio/intro.mp3',temporadas:[tracks[0].src,tracks[1].src,tracks[2].src,tracks[0].src,tracks[1].src],canciones:tracks.map(t=>t.titulo),musica:'',videoFinal:'assets/video/para-lizbeth.mp4',audioRemitente:''});
 Object.assign(c.acceso,{demo:false,password:'ee429a10d9b2e0e481357dc116839da31c2fb465557838f07fc7ea4eaee4d383',pistaPassword:'La clave de cuatro letras que JESUS preparó para ti.',estreno:''});
 Object.assign(c.notificacion,{whatsapp:'527445880591',email:'',endpoint:''});
 Object.assign(c.sitio,{url:'https://streaming-us-2.rotfstudio.com/jesus-lizbeth/index.html?compartir=1',coincidencia:100,clasificacion:'TP',clasificacionTexto:'Amor, gratitud y sueños compartidos',heroTag:'EXCLUSIVO PARA LIZBETH',heroTop:'De JESUS para LIZBETH · Una dedicatoria para ti',
  sinopsis:'Hay recuerdos que merecen una pantalla y sentimientos que merecen decirse. JESUS dedica a LIZBETH cuatro películas y una serie sobre el amor, la gratitud y las ganas de seguir construyendo juntos.',generos:['Romance','Nuestros recuerdos','Hecha para ti'],filaRecomendada:'Cada recuerdo, una razón para amarte'});
 const film=(num,titulo,n,track,sinopsis,escenas)=>({num,tipo:'pelicula',titulo,anio:2026,clasificacion:'TP',imagen:portada(n),musica:track.src,cancion:track.titulo,top10:num===0,sinopsis,
  creditos:[['Para',B],['Con todo el amor de',A],['Nuestra banda sonora',track.titulo]],episodios:[{titulo,duracion:88,descripcion:sinopsis,escenas,interaccion:null,recompensa:''}]});
 const films=[
  film(0,'Qué bonito tenerte en mi vida',6,tracks[0],'Una declaración para LIZBETH, hecha de imágenes que guardan lo nuestro y palabras que JESUS quiere dedicarle.',[
   scene(foto(6),'LIZBETH, esta pantalla es para ti.','De JESUS, con todo mi amor.'),
   scene(foto(1),'Quise reunir un poquito de nosotros','y regalarte un momento para sentirlo.'),
   scene(foto(3),'Mirar estas fotos me recuerda','lo bonito que es compartir contigo.'),
   scene(foto(4),'A veces me faltan palabras,','pero hoy quiero empezar por dos: te amo.'),
   scene(foto(5),'Me gusta que seas tú','quien aparece a mi lado en estos recuerdos.'),
   scene(video(1),'Hay instantes que pasan rápido','y que quiero guardar por mucho tiempo.'),
   scene(amb('horizonte'),'Quiero hacer espacio para lo nuestro,','incluso en los días más ocupados.'),
   scene(foto(7),'Que nunca se me olvide decirte','lo especial que eres para mí.'),
   scene(foto(8),'Qué bonito tenerte en mi vida.','Qué bonito poder dedicarte esto.'),
   scene(foto(6),'Este capítulo lleva tu nombre, LIZBETH.','Y todo el cariño que siento por ti. — JESUS')]),
  film(1,'Mis razones para amarte',7,tracks[1],'El amor también vive en las cosas sencillas: estar cerca, escucharse y hacer tiempo para los dos.',[
   scene(foto(9),'LIZBETH, me gusta compartir contigo','esas pequeñas partes de la vida.'),
   scene(foto(10),'Quiero conocerte cada día un poco más,','sin dar por hecho lo que sientes.'),
   scene(foto(11),'Me ilusiona tener tiempo para nosotros,','aunque sea un ratito sencillo.'),
   scene(foto(12),'Quiero escucharte con atención,','de esa que se demuestra estando presente.'),
   scene(foto(13),'Que podamos reír juntos','y disfrutar de nuestra compañía.'),
   scene(video(2),'Me gusta guardar estos instantes','y saber que forman parte de lo nuestro.'),
   scene(foto(14),'Deseo que conmigo puedas sentir','cariño, confianza y respeto.'),
   scene(amb('cielo'),'Y que encontremos motivos nuevos','para seguir acercándonos.'),
   scene(foto(15),'No quiero esperar una ocasión especial','para hacerte saber cuánto te amo.'),
   scene(foto(7),'Hoy la ocasión eres tú.','Por eso esta dedicatoria es para ti.')]),
  film(2,'Gracias por compartir conmigo',18,tracks[2],'Una pausa para agradecer la compañía de LIZBETH y los recuerdos que JESUS quiere conservar.',[
   scene(foto(16),'Hoy quiero hacer una pausa','para darte las gracias, LIZBETH.'),
   scene(foto(17),'Por ser parte de estos recuerdos','que me gusta volver a mirar.'),
   scene(foto(18),'Por compartir conmigo','pedacitos de tu tiempo y de tu vida.'),
   scene(foto(19),'Por cada oportunidad de estar juntos,','de conocernos y de disfrutar.'),
   scene(foto(20),'Estas fotos guardan gestos','que hoy quiero mirar con más cariño.'),
   scene(video(3),'Y estos videos me dejan volver','por un momento a lo que compartimos.'),
   scene(foto(21),'Quiero que mi agradecimiento','también se convierta en acciones.'),
   scene(foto(22),'En escucharte, en respetarte','y en hacer tiempo para los dos.'),
   scene(sunset,'Que siempre encuentre una manera','de cuidar lo que eres para mí.'),
   scene(foto(18),'Gracias por compartir conmigo.','Te amo, LIZBETH. — JESUS')]),
  film(3,'Todo lo que quiero contigo',26,tracks[0],'Un futuro expresado como deseo: crecer, apoyarse y seguir creando recuerdos, paso a paso.',[
   scene(foto(23),'Cuando pienso en lo que viene,','me ilusiona seguir construyendo contigo.'),
   scene(foto(24),'Quiero que podamos hablar','de lo que cada uno sueña.'),
   scene(amb('horizonte'),'Que tus metas tengan espacio,','y que las mías también puedan crecer.'),
   scene(foto(25),'Deseo acompañarte con paciencia,','sin querer decidir tu camino por ti.'),
   scene(video(4),'Quiero nuevos momentos para guardar,','con tiempo para disfrutarlos de verdad.'),
   scene(foto(26),'Que aprendamos a decir lo que sentimos','con honestidad y con cariño.'),
   scene(foto(2),'Que no falten los detalles','ni las ganas de sorprendernos.'),
   scene(sunset,'Sueño con días tranquilos,','con risas y con nuevos comienzos.'),
   scene(foto(11),'No tengo escrito todo el futuro.','Sí tengo ganas de poner de mi parte.'),
   scene(foto(26),'Paso a paso, LIZBETH.','Con amor, con respeto y contigo. — JESUS')])
 ];
 const ep=(titulo,descripcion,track,escenas)=>({titulo,descripcion,duracion:66,musica:track.src,cancion:track.titulo,escenas,interaccion:null,recompensa:''});
 const serie={num:4,tipo:'serie',titulo:'Seguir eligiéndonos',anio:2026,clasificacion:'TP',imagen:portada(23),musica:tracks[1].src,cancion:tracks[1].titulo,
  sinopsis:'Tres episodios para detenernos en lo que sentimos, cuidar el presente e imaginar los próximos capítulos.',creditos:[['Para',B],['Una dedicatoria de',A]],episodios:[
   ep('Lo que siento por ti','Una declaración sencilla y sincera para LIZBETH.',tracks[2],[
    scene(foto(6),'LIZBETH, quiero decirte algo','sin prisas y mirándote desde aquí.'),
    scene(foto(7),'Te amo.','Y quiero que puedas sentirlo.'),
    scene(foto(16),'En mis palabras,','pero también en cómo te trato.'),
    scene(video(1),'Quiero prestar atención','a lo que te hace sonreír.'),
    scene(foto(23),'Y seguir encontrando maneras','de hacerte sentir querida.'),
    scene(foto(26),'Esto es para ti, mi amor.','Con todo el cariño de JESUS.')]),
   ep('Cuidar lo nuestro','Escucharnos y estar presentes: deseos para el día a día.',tracks[1],[
    scene(foto(18),'Quiero que hagamos espacio','para escucharnos de verdad.'),
    scene(foto(7),'Para hablar con cariño,','también cuando pensemos distinto.'),
    scene(foto(16),'Para preguntar cómo estás','y quedarme a escuchar la respuesta.'),
    scene(sunset,'Para encontrar calma','y disfrutar de los momentos sencillos.'),
    scene(video(2),'Para cuidar los recuerdos que tenemos','y crear otros que nos hagan sonreír.'),
    scene(foto(26),'Que el amor se note en lo cotidiano.','Eso quiero construir contigo.')]),
   ep('Nos quedan capítulos','Un deseo para lo que aún podemos vivir juntos.',tracks[0],[
    scene(sunset,'Todavía hay conversaciones,','risas y sueños por compartir.'),
    scene(foto(18),'Quiero celebrar tus pasos','y aprender a acompañarte mejor.'),
    scene(foto(6),'Que tengamos ilusión por lo que viene','y cariño por lo que ya guardamos.'),
    scene(video(4),'Que nunca nos falten las ganas','de crear nuevos recuerdos.'),
    scene(foto(23),'Y que podamos seguir eligiendo','el respeto, la paciencia y el amor.'),
    scene(foto(26),'Nuestra pantalla dice: continuará.','Mi corazón dice: contigo. — JESUS')])
  ]};
 c.temporadas.splice(0,c.temporadas.length,...films,serie);
 c.extras=[{titulo:'Para ti, LIZBETH',img:foto(7),texto:'Quise regalarte un momento para recordar lo nuestro y decirte cuánto te amo. De JESUS, con todo mi cariño.'},
  {titulo:'Nuestros recuerdos',img:foto(18),texto:'Las fotos y videos que compartimos tienen un lugar especial en esta dedicatoria. Cada uno guarda un pedacito de nosotros.'},
  {titulo:'Lo que quiero cuidar',img:foto(23),texto:'El tiempo para escucharnos, el respeto por nuestros sueños y las ganas de seguir creando recuerdos juntos.'},
  {titulo:'Un próximo capítulo',img:foto(26),texto:'Deseo que sigamos creciendo, que podamos apoyarnos y que encontremos nuevos motivos para sonreír juntos.'}];
 const carta=[
  'LIZBETH:',
  'Quise preparar algo que pudieras abrir con calma, mirar, escuchar y guardar. Algo que reuniera nuestros recuerdos y me ayudara a decirte cuánto te amo.',
  'Al mirar estas fotos y videos, pienso en lo valioso que es compartir una parte de la vida contigo. Hoy quiero detenerme en eso, en nosotros, y darte el lugar que tienes en mi corazón.',
  'Gracias por compartir conmigo tu tiempo y estos momentos que ahora puedo volver a mirar. Quiero aprender a valorar cada instante y a demostrarte mi cariño también en lo cotidiano.',
  'Deseo que conmigo puedas sentirte escuchada y respetada. Quiero conocer lo que sueñas, celebrar tus avances y acompañarte sin olvidar que tus metas son tuyas y merecen espacio para crecer.',
  'Sueño con más momentos sencillos, conversaciones sinceras, risas y recuerdos que todavía no existen. Quiero que aprendamos a hablar de lo que sentimos y que cuidemos lo nuestro con paciencia.',
  'No sé cómo serán todos los capítulos que vienen. Sí sé que quiero poner amor, atención y ganas de mi parte. Que esta dedicatoria sea también una invitación a seguir construyendo algo bonito entre los dos.',
  'Ojalá que, cuando vuelvas a entrar aquí, encuentres un recordatorio de lo especial que eres para mí. Te amo, LIZBETH. Gracias por formar parte de mi vida.',
  'Con todo mi amor,\nJESUS'
 ].join('\n\n');
 Object.assign(c.final,{titulo:'Una carta para LIZBETH',imagen:portada(23),sinopsis:'Lo que siento, lo que agradezco y lo que quiero construir contigo, escrito con todo mi amor.',
  preguntas:['¿Qué sentiste al ver esta dedicatoria?','¿Cuál de nuestros recuerdos te gustaría volver a vivir?','¿Qué detalle te hace sentir más querida?','¿Qué sueño te gustaría que apoyáramos juntos?','¿Qué te gustaría que tuviera nuestro próximo capítulo?'],carta:()=>carta});
 c.creditos=[['Para',B],['Con todo el amor de',A],['Nuestros recuerdos','Fotos y videos de JESUS y LIZBETH'],['Banda sonora',tracks.map(t=>t.titulo).join(' · ')],['Lo que deseo','Amor, respeto y sueños compartidos'],['El próximo capítulo','Seguir construyendo juntos'],['','Continuará ♡']];
 c.postCreditos={imagen:foto(26),etiqueta:'ESCENA POST-CRÉDITOS',texto:'LIZBETH, todavía nos quedan recuerdos por crear…',anuncio:'Continuará',subtitulo:'Que el próximo capítulo nos encuentre con ganas de cuidarnos.',sorpresa:'Con todo mi amor, JESUS. ♡'};
})();

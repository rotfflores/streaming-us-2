/* Karina Soto para Daniel Rodriguez · Nuestro capítulo, $79. */
(() => {
 const c=window.TDN,A='Karina Soto',B='Daniel Rodriguez';
 const foto=n=>`assets/fotos/foto-${String(n).padStart(2,'0')}.webp`;
 const portada=n=>`assets/fotos/portada-${String(n).padStart(2,'0')}.webp`;
 const track={titulo:'Porque Tú Llegaste (Versión Banda) — Jorge Medina',src:'assets/audio/porque-tu-llegaste-climax.mp3'};
 const historia=`Me había jurado no volver a enamorarme, pero entonces llegaste tú, y todo cambió. Tu mirada y tu sonrisa han iluminado mis días, has juntado los trozos de mi corazón roto, haciéndome olvidar los miedos y sombras del pasado. Has hecho desaparecer mis fantasmas y me has mostrado qué significa querer de verdad.

Hoy, gracias a ti, siento que mi corazón sabe lo que es amar, y no solo querer o poseer. Has forjado día a día las llaves que mantenían cerrada mi alma, y ahora, por fin libre, ha decidido amarte y entregarse a ti. Deseo amarte sin reservas, hacerte feliz cada día, y devolverte todo el amor que tan desinteresadamente me has dado.

Desde que entraste en mi vida, todo ha cobrado un nuevo sentido. Tu amor ha transformado mi existencia y me ha enseñado lo que significa amar de verdad. Eres mi inspiración y mi alegría, y no puedo imaginar un día sin ti. Permíteme seguir siendo la persona que te acompañe en cada paso del camino, la que celebre tus éxitos y te consuele en los momentos difíciles. Quiero ser la razón de tu sonrisa y el refugio de tu corazón por muchos años más. Te amo más de lo que las palabras pueden expresar, y adoro el futuro lleno de amor y felicidad que estamos construyendo paso a paso. Algunos días pueden ser duros, pero lo compensa el estar a tu lado.

NI EN MIL VIDAS ENTENDERÁS CUANTO ME ENAMORE DE TIII .....

( hay cosas que sé explicar pero que siento con toda el alma )`;
 Object.assign(c.pareja,{nombreA:A,nombreB:B,nombreCompletoA:A,nombreCompletoB:B,apodo:'Daniel',apodos:['Daniel'],fechaInicio:'',anioInicio:'',anios:0,aniosManual:0,fechaCodigo:'3011',fechaAniversario:'30 de noviembre',ciudad:'',primeraCita:'',cancion:track.titulo,artista:'Jorge Medina',viajes:[],dificiles:[],anecdota:'',culpableAnecdota:2,gustosB:[],suenos:['Seguir construyendo un futuro juntos, paso a paso','Celebrar tus éxitos y acompañarte en los días difíciles','Cuidar nuestro amor y hacernos felices cada día'],mensajeFinal:historia});
 Object.assign(c.fotos,{hero:portada(19),perfilB:foto(27),perfilPareja:foto(4),t0:foto(4),t1:foto(7),t2:foto(10),t3:foto(12),t4:foto(19),t5:foto(23),t6:foto(24),t7:foto(27),final:portada(23),puzzle:foto(4),puzzle2:foto(19),postCreditos:foto(26)});
 Object.assign(c.media,{intro:'assets/audio/intro.mp3',temporadas:[track.src],canciones:[track.titulo],musica:track.src,videoFinal:'assets/video/nuestro-futuro.mp4',audioRemitente:''});
 Object.assign(c.acceso,{demo:false,cualquierClave:false,password:'41c8fa7d060badc5618a28326dc00cf07e1ce22a79a94a1fed94f271d3127447',pistaPassword:'Nuestro aniversario, en cuatro dígitos: día y mes.',estreno:''});
 Object.assign(c.notificacion,{whatsapp:'528135590554',email:'',endpoint:''});
 Object.assign(c.sitio,{titulo:'Porque tú llegaste',url:'https://streaming-us-2.rotfstudio.com/karina-daniel/index.html?compartir=1',coincidencia:100,clasificacion:'TP',clasificacionTexto:'Amor y aniversario',heroTag:'30 DE NOVIEMBRE · NUESTRO ANIVERSARIO',heroTop:'De Karina Soto para Daniel Rodriguez',sinopsis:'Me había jurado no volver a enamorarme… pero llegaste tú y todo cambió. Cuatro películas y una serie sobre el amor que me devolvió la confianza, tus abrazos y el futuro que deseo construir contigo.',generos:['Romance','Gratitud','Nuestro futuro'],filaRecomendada:'Un amor que se construye paso a paso'});
 const scenes=rows=>rows.map(([m,...texto])=>m===null?{texto:texto.join('\n')}:typeof m==='number'?{img:foto(m),poster:foto(m),texto}:m.endsWith('.mp4')?{img:`assets/ambiente/${m}`,poster:`assets/ambiente/${m.replace('.mp4','.webp')}`,texto}:{img:`assets/ambiente/${m}.webp`,texto});
 const film=(num,titulo,n,sinopsis,rows)=>({num,tipo:'pelicula',titulo,anio:2026,clasificacion:'TP',imagen:portada(n),musica:track.src,cancion:track.titulo,top10:num===0,sinopsis,creditos:[['Para',B],['Con todo mi amor',A],['Nuestro aniversario','30 de noviembre'],['Banda sonora',track.titulo]],episodios:[{titulo,duracion:88,descripcion:sinopsis,escenas:scenes(rows),interaccion:null,recompensa:''}]});
 c.temporadas=[
  film(0,'Porque tú llegaste',4,'La historia de un corazón que había cerrado sus puertas y encontró en tu mirada una nueva manera de amar.',[
   [1,'Me había jurado','no volver a enamorarme.'],
   [2,'Pero entonces llegaste tú, Daniel.','Y todo cambió.'],
   ['cielo','Donde antes había miedo,','empezó a entrar la luz.'],
   [3,'Tu mirada y tu sonrisa','han iluminado mis días.'],
   [4,'Sin pedirme que olvidara de golpe,','me diste motivos para volver a confiar.'],
   [5,'Fuiste juntando con amor','los trozos de mi corazón.'],
   ['atardecer.mp4','Hoy miro hacia adelante','con una ilusión que lleva tu nombre.'],
   [6,'Esta historia cambió cuando llegaste.','Y quiero seguirla viviendo contigo.']]),
  film(1,'Las llaves de mi alma',7,'Gracias por tu paciencia y por ese amor que abrió, día a día, las puertas de mi corazón.',[
   [7,'Había puertas que mi alma','mantenía cerradas por miedo.'],
   [8,'Tú no llegaste a exigir las llaves.','Las fuiste forjando día a día.'],
   [9,'Con tu cariño, con tu presencia,','con todo lo que me has dado.'],
   ['olas.mp4','Las sombras del pasado','dejaron de decidir por mí.'],
   [10,'Gracias por mostrarme','qué significa querer de verdad.'],
   [11,'Hoy mi corazón puede elegir.','Y te elige a ti.'],
   [12,'Libre, sin reservas,','con todo lo que soy.'],
   [23,'No quiero poseerte. Quiero amarte.','Y caminar de tu mano.']]),
  film(2,'Mi refugio eres tú',19,'Quiero devolverte el amor que me has dado: acompañarte, celebrar tus éxitos y abrazarte cuando el día pese.',[
   [13,'Hay días que pueden ser duros.','Pero lo compensa estar a tu lado.'],
   [14,'Tu amor ha transformado mi vida','y le ha dado un nuevo sentido.'],
   [15,'Eres mi inspiración, Daniel.','Eres también mi alegría.'],
   ['atardecer.mp4','Quiero que en mí encuentres calma','cuando afuera todo haga ruido.'],
   [16,'Celebrar contigo tus éxitos.','Y acompañarte cuando algo cueste.'],
   [17,'No tengo que saber cada respuesta','para elegir estar contigo.'],
   [18,'Deseo ser la razón de tu sonrisa','y el refugio de tu corazón.'],
   [19,'Gracias por todo el amor que me das.','Quiero cuidarlo cada día.']]),
  film(3,'Ni en mil vidas',26,'Una promesa de seguir construyendo juntos, sin prisa, con gratitud y con todo el amor que cabe en el alma.',[
   [20,'Te amo más de lo que','las palabras pueden expresar.'],
   [21,'Adoro el futuro que estamos','construyendo paso a paso.'],
   ['horizonte','No necesito conocer el mañana','para desear vivirlo contigo.'],
   [22,'Quiero hacerte feliz cada día','y seguir aprendiendo a amarte.'],
   [24,'Que nuestro amor encuentre espacio','en las cosas pequeñas de la vida.'],
   [25,'Que nunca nos falten las ganas','de escucharnos y cuidarnos.'],
   [26,'NI EN MIL VIDAS ENTENDERÁS','CUANTO ME ENAMORE DE TIII .....'],
   [27,'Feliz aniversario, Daniel.','Con todo mi amor, Karina.']]),
  {num:4,tipo:'serie',titulo:'Paso a paso, contigo',anio:2026,clasificacion:'TP',imagen:portada(23),musica:track.src,cancion:track.titulo,sinopsis:'Tres capítulos para agradecer lo que me has dado, cuidar lo que somos y soñar con todo lo que deseo vivir a tu lado.',creditos:[['Para',B],['De',A],['Nuestra fecha','30 de noviembre']],episodios:[
   {titulo:'Gracias por llegar',descripcion:'Tu mirada, tu sonrisa y la confianza que volvió a mi corazón.',duracion:66,musica:track.src,cancion:track.titulo,interaccion:null,escenas:scenes([
    [2,'Gracias por entrar en mi vida','y cambiar mi manera de mirar el amor.'],
    [5,'Por tu sonrisa,','que sabe iluminar mis días.'],
    ['cielo','Por hacer desaparecer mis fantasmas','y darme motivos para confiar.'],
    [9,'Por el cariño que me has dado','sin pedir nada a cambio.'],
    [12,'Mi corazón volvió a abrirse.','Y encontró un lugar contigo.'],
    [null,'Gracias por llegar, Daniel.','Gracias por quedarte en mi historia.']])},
   {titulo:'Lo que quiero cuidar',descripcion:'Un amor libre que se demuestra con compañía, respeto y detalles de todos los días.',duracion:66,musica:track.src,cancion:track.titulo,interaccion:null,escenas:scenes([
    [7,'Quiero amarte sin reservas,','sin dejar de cuidar lo que somos.'],
    [10,'Que podamos escucharnos','incluso cuando el día sea difícil.'],
    [19,'Quiero celebrar lo que te hace feliz','y abrazarte cuando necesites calma.'],
    ['olas.mp4','Que el amor siga siendo una elección','que hacemos con libertad.'],
    [23,'Devolverte, en cada detalle,','el cariño que me has dado.'],
    [null,'Amarte de verdad.','Con presencia, paciencia y corazón.']])},
   {titulo:'El futuro que deseo',descripcion:'Seguir siendo tu compañía y construir juntos muchos años de amor y felicidad.',duracion:66,musica:track.src,cancion:track.titulo,interaccion:null,escenas:scenes([
    [17,'Permíteme acompañarte','en cada paso del camino.'],
    ['horizonte','Deseo un futuro con amor,','felicidad y ganas de seguir juntos.'],
    [22,'Que podamos celebrar tus éxitos','y los que alcancemos de la mano.'],
    [24,'Quiero ser tu sonrisa y tu refugio','por muchos años más.'],
    ['atardecer.mp4','Hay cosas que sé explicar,','pero que siento con toda el alma.'],
    [27,'Nuestra historia sigue, Daniel.','Paso a paso. Tú y yo.']])}
  ]}
 ];
 c.extras=[{titulo:'Cuando todo cambió',img:foto(4),texto:'Me había jurado no volver a enamorarme, pero entonces llegaste tú, y todo cambió.'},{titulo:'Las llaves de mi alma',img:foto(7),texto:'Has forjado día a día las llaves que mantenían cerrada mi alma. Hoy, libre, ha decidido amarte.'},{titulo:'Mi lugar contigo',img:foto(23),texto:'Algunos días pueden ser duros, pero lo compensa el estar a tu lado.'},{titulo:'30 de noviembre',img:foto(27),texto:'Feliz aniversario, Daniel. Quiero seguir construyendo contigo un futuro lleno de amor, paso a paso.'}];
 Object.assign(c.final,{titulo:'Con toda el alma',imagen:portada(23),sinopsis:'Una carta de Karina para Daniel y un espacio para que tú también compartas lo que sientes.',preguntas:['¿Qué sentiste al ver nuestra historia?','¿Qué es lo que más agradeces del amor que compartimos?','¿Qué momento de los que vivimos juntos guardarías para siempre?','¿Cómo te gustaría que sigamos cuidando nuestro amor?','¿Qué sueñas con construir conmigo en los próximos años?'],carta:()=>`Daniel:\n\n${historia}\n\nFeliz aniversario. 30 de noviembre.\n\nCon todo mi amor,\nKarina Soto.`});
 c.creditos=[['Para',B],['Envía',A],['Nuestro aniversario','30 de noviembre'],['Nuestra historia','Volver a confiar. Aprender a amar.'],['Nuestro deseo','Un futuro juntos, paso a paso'],['Banda sonora',track.titulo],['','Ni en mil vidas entenderás cuánto me enamoré de ti.']];
 c.postCreditos={imagen:foto(26),etiqueta:'NUESTRA HISTORIA CONTINÚA',texto:'Ni en mil vidas entenderás cuánto me enamoré de ti.',anuncio:'Todavía nos queda tanto por vivir…',subtitulo:'Quiero seguir siendo tu compañía, tu sonrisa y tu refugio.',sorpresa:'Te amo, Daniel. Con toda el alma. Karina. ♥'};
})();

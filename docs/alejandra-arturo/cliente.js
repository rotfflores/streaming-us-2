/* Alejandra → Arturo. Edición independiente: Nuestro capítulo, $79. */
(() => {
 const c=window.TDN,A='Alejandra',B='Arturo';
 const foto=n=>`assets/fotos/foto-${String(n).padStart(2,'0')}.webp`;
 const portada=n=>`assets/fotos/portada-${String(n).padStart(2,'0')}.webp`;
 const ambiente=n=>({img:`assets/ambiente/${n}.mp4`,poster:`assets/ambiente/${n}.webp`});
 const tracks=[['Valió la pena equivocarme','valio-la-pena'],['Ya es muy tarde','ya-es-muy-tarde'],['De ti exclusivo','de-ti-exclusivo'],['El final de nuestra historia','el-final'],['Si tu amor no vuelve','si-tu-amor-no-vuelve']].map(([titulo,slug])=>({titulo:`${titulo} — La Arrolladora Banda El Limón`,src:`assets/audio/${slug}.mp3`}));
 const historia='Después de más de 20 años de dejar nuestra historia inconclusa, hemos retomado con toda la conciencia, el amor, la entrega y el cariño para esta vez sí quedarnos juntos.';
 const promesa='Esta vez no te voy a dejar ir para estar siempre juntos.';
 Object.assign(c.pareja,{nombreA:A,nombreB:B,nombreCompletoA:A,nombreCompletoB:B,apodo:B,apodos:[B],fechaInicio:'',anioInicio:'',anios:0,aniosManual:0,fechaCodigo:'2111',aniversario:'21 de noviembre',ciudad:'',primeraCita:'',cancion:tracks[2].titulo,artista:'La Arrolladora Banda El Limón',viajes:[],dificiles:['Una historia que quedó inconclusa durante más de 20 años'],anecdota:'',culpableAnecdota:2,gustosB:[],suenos:['Cuidar este reencuentro con amor y conciencia','Elegirnos con entrega y cariño cada día','Construir un futuro para quedarnos juntos'],mensajeFinal:`${historia}\n\n${promesa}`});
 Object.assign(c.fotos,{hero:'assets/fotos/hero.webp',perfilB:foto(5),perfilPareja:foto(14),t0:foto(3),t1:foto(6),t2:foto(7),t3:foto(11),t4:foto(14),t5:foto(15),t6:foto(17),t7:foto(18),final:portada(14),puzzle:foto(5),puzzle2:foto(18),postCreditos:foto(14)});
 Object.assign(c.media,{intro:'assets/audio/intro.mp3',temporadas:tracks.map(t=>t.src),canciones:tracks.map(t=>t.titulo),musica:'',videoFinal:'assets/video/para-arturo.mp4',audioRemitente:''});
 Object.assign(c.acceso,{demo:false,password:'f5095cd644fbe157a3ebc71d3e3212530f58e6d8a88c400c811314f217278c59',pistaPassword:'Nuestro aniversario: día y mes, en cuatro números.',estreno:''});
 Object.assign(c.notificacion,{whatsapp:'525537362452',email:'',endpoint:''});
 Object.assign(c.sitio,{titulo:'Esta vez, para quedarnos',url:'https://streaming-us-2.rotfstudio.com/alejandra-arturo/index.html?compartir=1',coincidencia:100,clasificacion:'TP',clasificacionTexto:'Un amor que vuelve',heroTag:'EXCLUSIVO PARA ARTURO',heroTop:'Alejandra presenta · 21 de noviembre',sinopsis:'Más de 20 años después de dejar nuestra historia inconclusa, volvimos a elegirnos. Esta vez con conciencia, amor, entrega y cariño. Esta vez, para quedarnos juntos.',generos:['Reencuentro','Nuestro aniversario','Para siempre'],filaRecomendada:'Lo que quiero decirte'});
 const scene=(m,texto)=>m===null?{texto:texto.join('\n')}:typeof m==='number'?{img:foto(m),poster:foto(m),texto}:typeof m==='string'?{img:`assets/ambiente/${m}.webp`,texto}:{...m,texto};
 const scenes=rows=>rows.map(([m,...t])=>scene(m,t));
 const film=(num,titulo,n,track,sinopsis,rows)=>({num,tipo:'pelicula',titulo,anio:2026,clasificacion:'TP',imagen:portada(n),musica:track.src,cancion:track.titulo,top10:num===0,sinopsis,creditos:[['Para',B],['Con todo mi amor',A],['Nuestro aniversario','21 de noviembre'],['Banda sonora',track.titulo]],episodios:[{titulo,duracion:88,descripcion:sinopsis,escenas:scenes(rows),interaccion:null,recompensa:''}]});
 c.temporadas=[
  film(0,'La historia que quedó pendiente',3,tracks[3],'Hubo una historia de amor que quedó inconclusa. Más de 20 años después, Alejandra y Arturo tienen la oportunidad de darle un nuevo capítulo.',[
   [null,'Arturo, hubo una historia nuestra','que se quedó sin terminar.'],
   ['cielo','Pasaron más de 20 años','antes de que pudiéramos retomarla.'],
   [3,'No quiero cambiar lo que vivimos.','Quiero cuidar lo que hoy vuelve a empezar.'],
   [null,'Lo que quedó inconcluso','hoy tiene una nueva oportunidad.'],
   [6,'Estas fotos pertenecen a nuestro presente.','El pasado nos trajo hasta aquí.'],
   [ambiente('olas'),'Hubo un final que parecía escrito.','Ahora podemos escribir algo distinto.'],
   [1,'No podemos recuperar los años.','Sí podemos elegir cómo vivir los que vienen.'],
   [null,'Nuestra historia ya no termina en una pausa.','Hoy volvemos a ponerle el corazón.']]),
  film(1,'Volver a encontrarte',5,tracks[0],'Retomar no es borrar el tiempo: es mirarse hoy y decidir, con toda la conciencia, que todavía quieren un camino juntos.',[
   [5,'Volver a ti no es volver atrás.','Es encontrarnos con quienes somos hoy.'],
   [null,'Hoy retomamos nuestra historia','con toda la conciencia.'],
   [7,'No quiero quedarme solo con el recuerdo.','Quiero compartir contigo el presente.'],
   [ambiente('atardecer'),'Después de tantos años,','este reencuentro merece nuestro cuidado.'],
   [9,'Me alegra que podamos estar aquí.','Que podamos volver a decir: nosotros.'],
   ['horizonte','Que cada paso sea una elección,','cada gesto una manera de acercarnos.'],
   [null,'No necesito que todo sea perfecto.','Quiero que sea sincero y compartido.'],
   [null,'Arturo, hoy te elijo','con los ojos abiertos y el corazón entero.']]),
  film(2,'Amarnos con conciencia',11,tracks[4],'El amor, la entrega y el cariño que Alejandra quiere convertir en presencia, escucha y cuidado para esta nueva etapa.',[
   [11,'Esta vez quiero amarte con conciencia.','Que sepas cuánto significa tenerte cerca.'],
   [null,'Quiero escucharte con atención.','Hacer espacio para lo que sientes.'],
   [12,'Que el cariño se note','en nuestra manera de hablarnos.'],
   ['cielo','Que podamos conversar sin dejar','lo importante para después.'],
   [13,'Quiero que mi entrega sea presencia,','que puedas sentirme a tu lado.'],
   [ambiente('olas'),'El miedo a perder lo nuestro','quiero convertirlo en ganas de cuidarnos.'],
   [null,'No dar por hecho este reencuentro.','Elegirte también en los días sencillos.'],
   [null,'Amarnos con conciencia es mi deseo:','cuidar entre los dos lo que hoy tenemos.']]),
  film(3,'Esta vez, para quedarnos',14,tracks[2],'Una dedicatoria de aniversario y una promesa para Arturo: construir juntos la historia que esta vez sí quieren continuar.',[
   [14,'21 de noviembre.','Nuestro aniversario tiene un lugar en esta historia.'],
   [15,'Arturo, esta vez quiero quedarme.','Con amor, entrega y cariño.'],
   [null,'Quiero hacer planes contigo.','Encontrar el tiempo para compartirlos.'],
   [18,'Que lo que soñemos juntos','encuentre pasos pequeños y constantes.'],
   [ambiente('atardecer'),'Quiero que nuestro futuro tenga','más presencia, más escucha y más nosotros.'],
   [null,'Después de una historia inconclusa,','mi deseo es seguir escribiendo a tu lado.'],
   [null,'Hoy no te regalo un final.','Te regalo mis ganas de continuar contigo.'],
   [null,promesa,'Con todo mi amor, Alejandra.']]),
  {num:4,tipo:'serie',titulo:'El amor que retomamos',anio:2026,clasificacion:'TP',imagen:portada(8),musica:tracks[0].src,cancion:tracks[0].titulo,sinopsis:'Tres capítulos sobre la gratitud de reencontrarnos, la decisión de cuidarnos y los sueños que quiero construir contigo.',creditos:[['Para',B],['Con amor',A]],episodios:[
   {titulo:'Gracias por volver a nosotros',descripcion:'La gratitud de poder retomar esta historia contigo.',duracion:66,musica:tracks[0].src,cancion:tracks[0].titulo,interaccion:null,escenas:scenes([
    [2,'Gracias por volver a ser parte','de esta historia conmigo, Arturo.'],
    [null,'Por retomar lo que quedó inconcluso','y darle espacio en nuestro presente.'],
    [4,'Valoro esta oportunidad','de conocernos también como somos hoy.'],
    [ambiente('atardecer'),'Quiero agradecerte sin dar por hecho','que hoy podamos elegirnos.'],
    [null,'Que mi cariño te lo recuerde:','me importa mucho este nosotros.'],
    [null,'Gracias por estar aquí.','Me hace ilusión lo que viene contigo.']])},
   {titulo:'Cuidar lo que elegimos',descripcion:'Lo que deseo aprender y poner en práctica para quedarnos juntos.',duracion:66,musica:tracks[1].src,cancion:tracks[1].titulo,interaccion:null,escenas:scenes([
    [8,'Quiero que lo nuestro tenga tiempo,','atención y cuidado de los dos.'],
    [null,'Hablar cuando algo nos preocupe.','Escucharnos con cariño y respeto.'],
    [10,'No dejar que lo importante','se quede sin decir.'],
    ['horizonte','Que la conciencia con la que volvimos','acompañe también nuestras decisiones.'],
    [null,'No quiero esperar a que sea tarde','para decirte cuánto te amo.'],
    [null,'Hoy quiero demostrártelo','con entrega, paciencia y presencia.']])},
   {titulo:'Todo lo que aún quiero contigo',descripcion:'Un futuro abierto para compartir, crecer y seguir eligiéndonos.',duracion:66,musica:tracks[2].src,cancion:tracks[2].titulo,interaccion:null,escenas:scenes([
    [16,'Quiero que sigamos encontrando','motivos para sonreír juntos.'],
    [17,'Compartir ratos sencillos,','hacer planes y acompañarnos.'],
    [null,'Que podamos crecer sin dejar de cuidarnos.','Que haya espacio para lo que sueña cada uno.'],
    [ambiente('olas'),'Nuestro futuro todavía está por escribirse.','Me ilusiona escribirlo contigo.'],
    [null,'No sé cada detalle de lo que vendrá.','Sí sé lo que hoy deseo con todo mi corazón.'],
    [null,promesa,'Alejandra, para Arturo.']])}
  ]}
 ];
 c.extras=[{titulo:'Nuestra historia',img:foto(3),texto:historia},{titulo:'Lo que elijo hoy',img:foto(5),texto:'Amarte con conciencia, entrega y cariño. Hacer de este reencuentro una historia que cuidemos entre los dos.'},{titulo:'Nuestro aniversario',img:foto(14),texto:`21 de noviembre. ${promesa}`}];
 Object.assign(c.final,{titulo:'Arturo, esta vez para siempre',imagen:portada(14),sinopsis:'Una carta de Alejandra y un espacio para escribir juntos lo que viene.',preguntas:['¿Qué sentiste al ver esta nueva parte de nuestra historia?','¿Qué significa para ti que nos hayamos reencontrado?','¿Cómo te gustaría que cuidáramos nuestro amor cada día?','¿Qué sueño quieres que construyamos juntos?','¿Qué te gustaría decirme en este aniversario?'],carta:()=>`Arturo:\n\n${historia}\n\nHoy, en nuestro aniversario del 21 de noviembre, quiero que sepas cuánto valoro esta oportunidad. No podemos recuperar los años que pasaron, pero sí podemos cuidar el presente que ahora compartimos.\n\nGracias por retomar esta historia conmigo. Quiero escucharte, acompañarte y que sientas mi amor en mi manera de estar a tu lado. Que la entrega y el cariño con los que hemos vuelto también se conviertan en acciones de cada día.\n\nMe ilusiona hacer planes contigo, aprender a cuidarnos mejor y seguir eligiéndonos con toda la conciencia. Esta vez quiero construir, junto a ti, un amor en el que los dos queramos quedarnos.\n\n${promesa}\n\nCon todo mi amor,\nAlejandra`});
 c.creditos=[['Para',B],['Con todo mi amor',A],['Nuestro aniversario','21 de noviembre'],['Nuestra historia','Más de 20 años después, volvimos a elegirnos'],['Lo que nos une','Conciencia, amor, entrega y cariño'],['Banda sonora',tracks.map(t=>t.titulo).join(' · ')],['',promesa]];
 c.postCreditos={imagen:foto(14),etiqueta:'NUESTRA HISTORIA CONTINÚA',texto:'Arturo, esta vez quiero escribir la vida contigo.',anuncio:'Esta vez, para quedarnos.',subtitulo:'Con toda la conciencia, el amor, la entrega y el cariño.',sorpresa:promesa};
})();

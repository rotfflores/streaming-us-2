/* Edición exclusiva para Yaret / Wonka · Paquete $199. */
(() => {
 const M=window.CLIENT_MEDIA;
 const photo=i=>M.fotos[i%M.fotos.length].ruta;
 const cover=i=>M.fotos[i%M.fotos.length].portada;
 const track=n=>({musica:M.canciones[n].src,cancion:M.canciones[n].titulo});
 const nombre=i=>i%2?'Wonka':'babe';
 const materials=[...M.fotos,...M.videos.filter(v=>!v.especial)].sort((a,b)=>a.orden-b.orden);
 const groups=Array.from({length:15},(_,i)=>materials.slice(Math.floor(i*materials.length/15),Math.floor((i+1)*materials.length/15)));
 const games={
  fecha:{tipo:'codigo',titulo:'La fecha que es nuestra',modo:'fecha',pregunta:'¿Qué día celebramos nuestro aniversario?',placeholder:'DDMM',respuestas:['0306'],pista:'El 3 de junio, día y mes.',ok:'Cada 3 de junio, otra razón para celebrarnos.'},
  ciudad:{tipo:'quiz',titulo:'El reencuentro',pregunta:'¿En qué ciudad la vida volvió a reunirnos?',opciones:['Chicago','Madrid','Monterrey'],correcta:0,ok:'Chicago guarda el capítulo en que lo nuestro pudo comenzar.'},
  leo:{tipo:'adivinanza',titulo:'El zodíaco que nos une',texto:'En nuestra historia decimos: «El zodíaco en ___ nos une». ¿Qué palabra falta?',respuestas:['leo'],pista:'Tres letras, mucho corazón.',ok:'El zodíaco en Leo nos une.'},
  memoria:{tipo:'memory',titulo:'Recuerdos de dos en dos',pares:[0,1,2,3,4,5].map(photo),ok:'Hay momentos que siempre encuentran su pareja.'},
  puzzle:{tipo:'puzzle',titulo:'Volver a encontrarnos',imagen:photo(2),ok:'Pieza por pieza, otra vez tú y yo.'},
  palabras:{tipo:'sopa',titulo:'Lo que nos une',palabras:['BABE','WONKA','CHICAGO','LEO','AMOR','PAZ','DEPORTE'],ok:'Todas estas palabras tienen algo de nosotros.'},
  conexion:{tipo:'quiz',titulo:'Nuestra conexión',pregunta:'¿Qué palabras describen lo que sentimos?',opciones:['Amor, paz y pasión','Prisa y distancia','Solo casualidad'],correcta:0,ok:'Amor para elegirnos, paz para quedarnos y pasión para acercarnos.'}
 };
 const story=[
  ['Lo que nunca te dije','Hace años nos gustábamos y el tiempo guardó las palabras. Hoy podemos decirlas.',[
   ['babe, antes de esta historia','hubo algo que no nos atrevíamos a decir.'],
   ['Nos conocimos hace años,','y nos gustábamos más de lo que confesábamos.'],
   ['Somos el amor de otra vida','que nos alcanzó para encontrarnos en esta.'],
   ['Entonces todavía no sabíamos','que la vida nos volvería a encontrar.'],
   ['Me encanta que respetemos nuestras heridas,','pero nos cuidemos avanzando como equipo que somos.'],
   ['Qué bonito que lo que sentíamos','por fin tenga un lugar entre los dos.']]],
  ['Chicago tenía otros planes','Lejos de México, una ciudad se convirtió en el escenario de nuestro reencuentro.',[
   ['Wonka, somos de México,','pero la vida nos reunió de nuevo en Chicago.'],
   ['Después de tantos años,','volvimos a coincidir en el extranjero.'],
   ['Conocerte otra vez, desde este presente,','le dio otro sentido a lo que sentía.'],
   ['Una ciudad puede ser enorme;','a tu lado encontré cercanía.'],
   ['Lo que antes se quedaba en silencio','hoy tiene abrazos y palabras.'],
   ['Chicago guarda nuestro reencuentro.','Y yo guardo la alegría de tenerte.']]],
  ['El zodíaco en Leo nos une','Las estrellas se alinean para reunirnos… y el zodíaco en Leo nos une.',[
   ['Las estrellas se alinean para reunirnos…','El zodíaco en Leo nos une.'],
   ['Me gusta esa pequeña complicidad','de descubrir cosas que nos unen.'],
   ['Hay mucha pasión en lo nuestro,','y me encanta sentirla contigo.'],
   ['Quiero que esa chispa también sea','cariño, escucha y atención.'],
   ['Que podamos acercarnos con confianza','y decirnos lo que necesitamos.'],
   ['Entre tantas coincidencias,','mi favorita es habernos reencontrado.']]],
  ['Mi lugar de paz','El amor que se siente como una pausa y la compañía que quiero cuidar.',[
   ['Wonka, nuestra conexión','tiene una paz que quiero cuidar.'],
   ['Me gusta poder estar contigo','y sentir tanto amor.'],
   ['Quiero que haya tiempo para escucharnos,','sin apurar lo que sentimos.'],
   ['Que una conversación sencilla','también tenga su lugar en nuestros días.'],
   ['Deseo que podamos hablarnos con cariño','y apoyarnos cuando haga falta.'],
   ['Gracias por esta calma compartida.','Gracias por ser parte de mi vida.']]],
  ['La pasión de elegirte','Una dedicatoria a la atracción, la ternura y las ganas de estar cerca.',[
   ['babe, hay mucha pasión','en esta historia que estamos viviendo.'],
   ['Me gusta sentirte cerca','y saber que nos amamos tanto.'],
   ['Quiero seguir encontrando maneras','de hacerte sentir todo lo que provocas en mí.'],
   ['Que no se nos olvide el coqueteo,','ni un detalle porque sí.'],
   ['Deseo que tengamos nuestro tiempo,','con intimidad, cariño y confianza.'],
   ['Me ilusiona seguir eligiéndote','con esta misma emoción.']]],
  ['Entre la cancha y la granja','Nos une el amor por los animales, el deporte y nuestro trabajo, y la alegría de compartirlo.',[
   ['Wonka, entre la cancha y la granja','también se escribe algo de nosotros.'],
   ['Tenemos algo muy bonito en común:','amamos nuestro trabajo y lo compartimos.'],
   ['Me gusta compartir contigo','lo que hacemos con tanto amor.'],
   ['Nos unen los animales, el deporte','y el gusto por lo que hacemos.'],
   ['Quiero seguir compartiendo tus días,','tus ganas y la ilusión por nuestro trabajo.'],
   ['Amar lo que hacemos y compartirlo contigo','hace más especial esta historia.']]],
  ['En el mismo equipo','El deporte que nos gusta y el deseo de acompañar los retos de cada quien.',[
   ['babe, el deporte','es otra de las cosas que compartimos.'],
   ['Me gusta pensar en nuevos planes','que podamos disfrutar los dos.'],
   ['Quiero celebrar tu esfuerzo','y tenerte cerca en mis propios retos.'],
   ['Que encontremos tiempo para movernos,','para reír y para recuperar energía.'],
   ['Y que cada meta tenga espacio,','sin compararnos ni exigirnos de más.'],
   ['Mi deseo es sencillo:','seguir haciendo equipo contigo.']]],
  ['Gracias por este amor','Un momento para agradecer lo que somos y la oportunidad de vivirlo.',[
   ['Wonka, gracias por esta historia','que se siente de ensueño.'],
   ['Por este amor tan grande','que hoy podemos compartir.'],
   ['Por la paz de nuestra conexión','y por tanta pasión.'],
   ['Me alegra que la vida nos reuniera','cuando ya habían pasado tantos años.'],
   ['Quiero que mi gratitud se convierta','en tiempo, detalles y cuidado.'],
   ['Gracias por ser tú','en este capítulo de mi vida.']]],
  ['Todos nuestros próximos junios','Los deseos que quiero poner sobre la mesa para seguir construyendo juntos.',[
   ['babe, nuestro aniversario','es el 3 de junio.'],
   ['Cuando pienso en lo que viene,','me ilusiona seguir celebrando contigo.'],
   ['Quiero conocer tus metas','y encontrar maneras de apoyarte.'],
   ['Sueño con más recuerdos compartidos,','con tiempo para disfrutarlos.'],
   ['Que podamos cuidar el amor,','la paz y las ganas de estar cerca.'],
   ['Que los próximos junios nos encuentren','con más razones para elegirnos.']]],
  ['Volver a decirlo','Lo que sentimos merece palabras, incluso cuando parece evidente.',[
   ['Wonka, hubo años en los que','no dijimos cuánto nos gustábamos.'],
   ['Ahora quiero hacer espacio','para decirte lo que siento.'],
   ['Te amo.','Y me alegra poder vivir este amor contigo.'],
   ['Quiero preguntarte cómo estás','y quedarme a escuchar la respuesta.'],
   ['Que hablar de nosotros','sea una forma de acercarnos.'],
   ['Hoy te lo dejo escrito:','me hace feliz que seas tú.']]],
  ['Aprender a cuidarnos','Una invitación a cuidar la calma que nos conecta.',[
   ['babe, quiero cuidar','la paz que hay entre nosotros.'],
   ['Hacer tiempo para estar presentes','y disfrutar nuestra compañía.'],
   ['Deseo que podamos decir','lo que nos hace bien.'],
   ['Y escuchar con respeto','cuando algo necesite cambiar.'],
   ['Que el cariño encuentre sitio','en nuestros días más sencillos.'],
   ['El amor que quiero contigo','también se construye en esos detalles.']]],
  ['De México al reencuentro','Nuestras raíces y la ciudad en la que volvimos a coincidir.',[
   ['Wonka, nuestra historia','tiene raíces en México.'],
   ['Después de años, Chicago','nos dio un nuevo escenario.'],
   ['Volvimos a encontrarnos lejos,','y lo que sentíamos pudo acercarnos.'],
   ['Me gusta pensar en todo lo que hoy','sí podemos compartir.'],
   ['Lo que vivimos se siente','como una historia de película.'],
   ['Y mi parte favorita','es estar viviéndola contigo.']]],
  ['Lo extraordinario de lo sencillo','Un deseo de disfrutar los pequeños momentos tanto como los grandes.',[
   ['babe, quiero disfrutar contigo','también los días sin una ocasión especial.'],
   ['Una conversación larga,','un rato para nosotros.'],
   ['Un plan que nos guste a los dos','y una foto para recordarlo después.'],
   ['Me ilusiona seguir descubriendo','qué te hace sonreír.'],
   ['Y dejar que lo cotidiano','también tenga su propia magia.'],
   ['Que esta historia de ensueño','encuentre espacio en cada día.']]],
  ['Un sueño de cada quien','Acompañarnos con respeto y dar espacio a las metas de ambos.',[
   ['Wonka, quiero que podamos hablar','de lo que cada quien sueña.'],
   ['De lo que te ilusiona ahora','y de cómo puedo acompañarte.'],
   ['Deseo celebrar tus avances','sin querer decidir tu camino.'],
   ['Que nuestras metas encuentren apoyo','y también su propio espacio.'],
   ['Me ilusiona imaginar nuevos planes','y elegirlos juntos, paso a paso.'],
   ['Que hacer equipo','también signifique ayudarnos a crecer.']]],
  ['Continuará contigo','El próximo capítulo todavía puede sorprendernos.',[
   ['babe, lo que viene','todavía tiene páginas por escribir.'],
   ['Quiero llenarlas de amor,','de paz y de mucha pasión.'],
   ['De planes compartidos','y nuevas razones para agradecer.'],
   ['Que otro 3 de junio','nos encuentre cuidando lo nuestro.'],
   ['Gracias por vivir conmigo','esta historia que parece una película.'],
   ['Wonka, la pantalla dice: continuará.','Yo deseo que sea contigo.']]]
 ];
 const scenes=(group,lines)=>{
  const list=group.map((m,i)=>({img:m.ruta,poster:m.poster||m.ruta,texto:lines[i%lines.length],duracion:m.duracion||9,ordenOriginal:m.orden}));
  for(let i=list.length;i<lines.length;i++)list.push({texto:lines[i].join('\n'),duracion:9});
  return list;
 };
 const episode=(title,desc,n,sc,interaccion=null)=>({titulo:title,descripcion:desc,...track(n),escenas:sc,duracion:6+sc.reduce((sum,s)=>sum+s.duracion,0),interaccion});
 const film=(num,title,desc,n,sc,image,interaccion=null)=>({num,tipo:'pelicula',titulo:title,anio:2026,imagen:image,top10:num<10,clasificacion:'TP',sinopsis:desc,...track(n),creditos:[['Para',nombre(num)],['Aniversario','3 de junio'],['Nuestra historia','México · Chicago']],episodios:[episode(title,desc,n,sc,interaccion)]});
 const specials=M.videos.filter(v=>v.especial).sort((a,b)=>a.orden-b.orden);
 const specialTitles=['La vida nos volvió a encontrar','Una historia de ensueño','Amor, paz y mucha pasión'];
 const temporadas=specials.map((v,i)=>film(i,specialTitles[i],`Para ${nombre(i)}: un recuerdo especial, completo, para volver a sentir lo nuestro.`,[2,0,1][i],[{img:v.ruta,poster:v.poster,texto:[],duracion:v.duracion}],v.portada||v.poster));
 const assigned=[games.fecha,games.ciudad,games.leo,null,null,null,games.memoria,games.puzzle,null,games.palabras,null,null,null,games.conexion,null];
 for(let i=0;i<9;i++){
  const [title,desc,lines]=story[i];const sc=scenes(groups[i],lines);const material=groups[i].find(x=>!x.duracion)||groups[i][0];
  temporadas.push(film(i+3,title,desc,i+3,sc,material?.portada||material?.poster||cover(i),assigned[i]));
 }
 for(let i=0;i<3;i++){
  const offset=9+i*2;const titles=['Lo que nos decimos','Nuestra vida de película','Los capítulos que soñamos'];
  const episodios=[offset,offset+1].map((k,j)=>episode(story[k][0],story[k][1],12+i,scenes(groups[k],story[k][2]),assigned[k]));
  temporadas.push({num:12+i,tipo:'serie',titulo:titles[i],anio:2026,clasificacion:'TP',imagen:cover((i+1)*3),sinopsis:story[offset][1]+' '+story[offset+1][1],...track(12+i),episodios});
 }
 const carta=`babe:

Hace años nos conocimos y nos guardamos lo mucho que nos gustábamos. A veces pienso en todas las palabras que entonces no dijimos y me alegra que nuestra historia haya encontrado otra oportunidad.

Somos de México, pero la vida nos volvió a reunir en el extranjero, en Chicago. Después de tantos años, poder vivir esto contigo se siente como una historia de ensueño, como una película en la que por fin podemos decir y demostrar lo que sentimos.

Wonka, nos amamos mucho, y eso es lo que más quiero celebrar. Gracias por la paz de nuestra conexión, por tanto amor y por esa pasión que nos acerca. Me hace feliz que seas tú quien comparte conmigo este capítulo.

El zodíaco en Leo nos une. También nos unen el amor por los animales y el gusto por el deporte. Me gusta descubrir esas coincidencias y saber que, además de lo que ya compartimos, todavía nos queda tanto por conocer del otro.

Quiero cuidar lo que somos en los detalles: escucharte con atención, hacer tiempo para nosotros y decirte lo que siento. Que el amor se note en cómo nos hablamos y en cómo nos acompañamos.

babe, cuando pienso en el futuro, deseo que podamos seguir haciendo equipo. Quiero conocer tus metas, celebrar tus avances y compartir también mis sueños contigo. Me ilusiona imaginar nuevos recuerdos, planes que nos gusten a los dos y días sencillos que se vuelvan especiales por estar juntos.

Cada 3 de junio quiero que tengamos una razón más para agradecer esta historia. Que nunca dejemos de cuidar el amor, la paz y la pasión que nos unen.

Wonka, gracias por este reencuentro y por todo lo que estamos viviendo. Todavía nos quedan capítulos por escribir. Me hace ilusión que sean contigo.

Te amo, con todo mi corazón.`;
 window.TDN={
  pareja:{nombreA:'Mi amor',nombreB:'babe',nombreCompletoA:'',nombreCompletoB:'Yaret / Wonka',apodos:['babe','Wonka'],apodo:'Wonka',aniversario:'3 de junio',fechaInicio:'',anioInicio:'',anios:0,fechaCodigo:'0306',ciudad:'Chicago',viajes:[],suenos:['Cuidar nuestro amor','Apoyar nuestras metas','Crear recuerdos juntos'],gustosB:['Animales','Deporte'],mensajeFinal:'Wonka, quiero seguir escribiendo esta historia contigo.'},
  fotos:{hero:'assets/fotos/hero.webp',perfilB:M.fotos.find(f=>f.orden===69).ruta,perfilPareja:M.fotos.find(f=>f.orden===47).ruta,t0:photo(0),t1:photo(1),t2:photo(2),t3:photo(3),t4:photo(4),t5:photo(5),t6:photo(6),t7:photo(7),final:M.fotos.find(f=>f.orden===69).portada,puzzle:photo(2),puzzle2:photo(3),postCreditos:M.fotos.find(f=>f.orden===79).ruta},
  media:{intro:'assets/audio/intro.mp3',temporadas:M.canciones.map(t=>t.src),canciones:M.canciones.map(t=>t.titulo),musica:'',videoFinal:'assets/video/montaje-final.mp4',audioRemitente:''},
  acceso:{password:'7e831593833c68e3f2f6323a7d176d98fe2dd518e6847f813f528a513679333d',demo:false,pistaPassword:'Nuestro aniversario: día y mes, en cuatro números.',estreno:''},
  notificacion:{whatsapp:'524431373757',email:'',endpoint:''},
  sitio:{url:'https://streaming-us-2.rotfstudio.com/yaret-wonka/splash.html',titulo:'La vida nos debía esta historia',heroTop:'Para babe / Wonka · México y Chicago',heroTag:'3 DE JUNIO · NUESTRO ANIVERSARIO',coincidencia:100,clasificacion:'TP',clasificacionTexto:'Amor, paz y pasión',sinopsis:'Nos conocimos hace años y nos guardamos lo mucho que nos gustábamos. La vida volvió a reunirnos en Chicago. Hoy vivimos una historia de ensueño: mucho amor, paz y pasión. Esta pantalla es para ti, babe.',generos:['Romance','Nuestro reencuentro','Una historia real'],filaRecomendada:'Para volver a sentir lo nuestro'},
  temporadas,
  extras:[{titulo:'Nuestras raíces',img:photo(0),texto:'Somos de México. Chicago guarda nuestro reencuentro.'},{titulo:'El zodíaco en Leo nos une',img:photo(1),texto:'Las estrellas se alinean para reunirnos… También nos unen el amor por los animales y el deporte.'},{titulo:'Nuestra conexión',img:photo(2),texto:'Mucho amor, paz y mucha pasión.'},{titulo:'3M, Marimar, Mowgli, Marisol',img:photo(3),texto:'Una fecha para celebrar lo que vivimos y lo que deseamos construir.'}],
  final:{titulo:'Todo lo que quiero decirte',imagen:cover(3),sinopsis:'babe, una carta para agradecer lo nuestro y soñar con los capítulos que vienen.',preguntas:['Wonka, ¿qué sentiste al volver a ver nuestra historia?','¿Qué recuerdas de nuestro reencuentro en Chicago?','babe, ¿qué detalle nuestro te hace sentir paz?','¿Qué sueño te gustaría que apoyáramos juntos?','¿Cómo te gustaría celebrar nuestro próximo 3 de junio?'],carta:()=>carta},
  creditos:[['Para','babe / Wonka'],['Nuestra fecha','3 de junio'],['El reencuentro','Chicago'],['Nuestras raíces','México'],['Lo que nos une','Amor · Paz · Pasión'],['Banda sonora',M.canciones.map(t=>t.titulo).join(' · ')],['','Todavía nos quedan capítulos por escribir.']],
  postCreditos:{imagen:photo(4),etiqueta:'DESPUÉS DE LOS CRÉDITOS',texto:'Wonka, nuestra historia sigue…',anuncio:'Continuará contigo',subtitulo:'Más amor, más paz y nuevas razones para acercarnos.',sorpresa:'babe, te amo. ♡'}
 };
})();

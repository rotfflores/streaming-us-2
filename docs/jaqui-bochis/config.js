/* Jaqui → Bochis · edición independiente · paquete $199. */
(() => {
 const M=window.CLIENT_MEDIA;
 const photo=i=>M.fotos[i%M.fotos.length].ruta;
 const cover=i=>M.fotos[i%M.fotos.length].portada;
 const soundtrack=(needle)=>{const t=M.canciones.find(t=>t.titulo.toLowerCase().includes(needle.toLowerCase()));if(!t)throw Error('Falta canción: '+needle);return {musica:t.src,cancion:t.titulo};};
 const stories=[
 ['En medio de la rutina','Él buscaba un motivo para conversar y ella encontraba su parte favorita del día.','Desde Que',[
  'Hay historias que empiezan sin hacer ruido. La nuestra comenzó entre la rutina y las prisas del trabajo.',
  'Bochis, tú encontrabas un motivo para acercarte y conversar conmigo un ratito.',
  'Yo dejaba los papeles, los pendientes y cualquier urgencia para escucharte.',
  'Bastaba con que aparecieras para sentir que el mundo se detenía un momento.',
  'Sin darnos cuenta, aquellas pláticas se volvieron mi parte favorita del día.',
  'Hoy miro hacia atrás y me alegra que entre tantos pendientes hayamos encontrado tiempo para nosotros.']],
 ['Un aventón hacia nosotros','El camino a casa se llenó de risas, miradas y ganas de seguir coincidiendo.','Hecha',[
  'La complicidad creció. Nuestros caminos empezaron a encontrarse también fuera de la oficina.',
  'Un día me ofreciste un aventón para llevarme a casa. Parecía un gesto sencillo.',
  'Después se repitió durante varios días, y esos ratos se pasaban volando.',
  'Entre risas y miradas cómplices, el coche se convirtió en otro espacio para conocernos.',
  'No necesitábamos un gran plan: estar contigo ya hacía especial el regreso.',
  'Gracias por acercarte con esos pequeños gestos que fueron haciendo sitio para este amor.']],
 ['Lo que decían tus ojos','Una confesión cambió el rumbo de aquellas conversaciones.','A Mí Me Gustas',[
  'Hasta que llegó el día en que me dijiste lo que ya se asomaba en tus ojos.',
  'Te gustaba. Y querías algo más conmigo.',
  'Nos fuimos conociendo poco a poco; a mí me tomó tiempo decidir dar el siguiente paso.',
  'Mientras yo encontraba mi respuesta, lo nuestro seguía creciendo entre conversaciones y salidas.',
  'Me gusta recordar ese comienzo: la emoción de descubrirnos y las ganas de estar cerca.',
  'Bochis, qué bonito que aquella confesión se haya convertido en nuestra historia.']],
 ['Una crepa y un sí','El 23 de noviembre de 2024 empezó el noviazgo que hoy celebramos.','Creo En Ti',[
  'El 23 de noviembre de 2024 salimos y compartimos una crepa.',
  'Fue en esa salida cuando por fin te di el sí y acepté ser tu novia.',
  'Un momento sencillo se quedó para siempre como una de nuestras fechas más importantes.',
  'En ese instante sentí que mi vida se acababa de llenar de luz.',
  'Hoy, 23 de noviembre de 2026, celebramos dos años desde aquel comienzo.',
  'Si pudiera volver a ese momento, sonreiría al saber todo lo bonito que nos esperaba.']],
 ['Mi refugio tiene tu nombre','La confianza creció hasta convertirse en un lugar al que siempre queremos volver.','Tanto',[
  'Después de aquel sí, todo se volvió más bonito entre nosotros.',
  'Nos empezamos a llevar todavía mejor. La confianza se hizo nuestro refugio.',
  'Los días se llenaron de momentos que hoy guardo muy adentro.',
  'Contigo aprendí cuánto puede significar sentirse acompañada en las cosas de todos los días.',
  'Gracias por la cercanía que hemos construido, por dejarme conocerte y por conocerme también.',
  'Quiero seguir cuidando este lugar que hacemos juntos cuando nos escuchamos con cariño.']],
 ['Los nervios antes del para siempre','El camino a una cena guardaba una sorpresa que cambiaría sus vidas.','Bailando Bachata',[
  'Llegó el 16 de diciembre de 2025. Aquella noche todavía tenía una sorpresa guardada.',
  'Íbamos camino a cenar y tú estabas nervioso, tan nervioso que no podías contener los manotazos.',
  'Yo me daba cuenta, aunque fingía no notarlo para seguirte el juego.',
  'Ahora recuerdo esos nervios con una ternura enorme: detrás venía algo muy importante.',
  'Al llegar me recibiste de una manera tan dulce, con una mirada llena de cariño.',
  'Hay detalles de esa noche que se me quedaron grabados incluso antes de ver el anillo.']],
 ['El anillo y mis lágrimas','La propuesta del 16 de diciembre de 2025, contada desde el corazón de Jaqui.','Regalo de Dios',[
  'Tus palabras me acariciaron el corazón. Entonces sacaste el anillo.',
  'Me pediste matrimonio, y de pronto todo lo que sentía se convirtió en lágrimas.',
  'Lloraba de emoción, de felicidad, de saber que querías compartir tu vida conmigo.',
  'Te dije que sí. Acepté con todo mi ser.',
  'Fue una noche increíble, de esas que parecen un sueño del que nunca quieres despertar.',
  'Bochis, gracias por regalarme ese recuerdo. Lo llevo conmigo con toda la emoción de aquel día.']],
 ['Así se siente agradecerte','Una dedicatoria a las conversaciones, los detalles y el amor que han construido.','Te Amo',[
  'Gracias por buscar una conversación cuando esta historia todavía no tenía nombre.',
  'Por aquellos aventones a casa que hoy recuerdo como el principio de algo enorme.',
  'Por decirme lo que sentías y abrir la puerta para que yo también descubriera mi respuesta.',
  'Por la confianza que fue creciendo después del primer sí.',
  'Por aquella cena, por el anillo y por las palabras que todavía me emocionan.',
  'Quiero que mi gratitud se note también en lo que hago por ti, en cómo te escucho y en cómo te cuido.']],
 ['De la mano en lo difícil','Las altas y bajas también forman parte de una historia que sigue creciendo.','Hagamos',[
  'Como toda historia de amor, la nuestra ha tenido altas y bajas.',
  'No todo ha sido sencillo, pero hemos sabido salir adelante sosteniéndonos de la mano.',
  'Cada tropiezo nos ha recordado la importancia de volver a acercarnos.',
  'Quiero seguir escuchándote incluso cuando nos cueste encontrar las palabras.',
  'Que podamos reconocer lo que duele, hablarnos con respeto y cuidar lo que hemos construido.',
  'Me importa que encontremos razones para seguir juntos y formas de demostrarnos ese amor.']],
 ['Todos los días que sueño contigo','Deseos para el futuro: compartir, acompañarse y seguir construyendo confianza.','Soñador',[
  'Cuando pienso en lo que viene, me ilusiona imaginar una vida compartida contigo.',
  'Deseo que sigamos encontrando tiempo para conversar, como al principio, aunque el día tenga prisa.',
  'Quiero conocer tus metas y acompañarte mientras buscas lo que te hace feliz.',
  'También quiero compartirte mis sueños y encontrar contigo planes que nos emocionen a los dos.',
  'Ojalá nunca dejemos de reírnos, de tener detalles y de disfrutar estar cerca.',
  'El futuro todavía no está escrito. Me hace feliz poder imaginarlo contigo.']],
 ['Que el tiempo nos encuentre juntos','Una promesa de atención y cariño para los años que vienen.','Thinking',[
  'Me gusta pensar que este aniversario es una pausa para mirarnos y agradecer.',
  'Dos años desde aquella crepa, y tantos recuerdos que ya tienen nuestros nombres.',
  'Deseo que el tiempo nos encuentre haciéndonos preguntas, escuchándonos y aprendiendo el uno del otro.',
  'Que los cambios de la vida tengan un lugar para nuestras manos juntas.',
  'Quiero seguir descubriendo cosas de ti y contándote también las que cambian en mí.',
  'Que cada aniversario nos dé más recuerdos para mirar con esta misma ternura.']],
 ['Mi sí también vive en el presente','Una película para celebrar el segundo aniversario y volver a elegir su historia.','Die With',[
  'Te dije sí el 23 de noviembre de 2024, compartiendo una crepa.',
  'Te dije sí otra vez el 16 de diciembre de 2025, con lágrimas de felicidad y un anillo frente a mí.',
  'Hoy, 23 de noviembre de 2026, quiero celebrar todo lo que esos momentos significan.',
  'Te amo por esta historia que vivimos, por la confianza que construimos y por todo lo que aún podemos aprender.',
  'Gracias por compartir conmigo estos dos años, Bochis.',
  'Mi deseo sigue siendo encontrar contigo la razón para escribir el próximo capítulo. Con amor, Jaqui.']],
 ['Lo que guardo al terminar el día','Las palabras y recuerdos que siguen cerca cuando llega la noche.','Almohada',[
  'Hay momentos que regresan a mí cuando el día por fin se queda en calma.',
  'Tus pláticas en el trabajo, las risas en el coche y la emoción de nuestras primeras salidas.',
  'Me gusta que esos recuerdos sigan teniendo un lugar en mi presente.',
  'Quiero decirte lo que siento mientras lo estamos viviendo, sin esperar una ocasión perfecta.',
  'Que podamos hablar también de lo que extrañamos o necesitamos, con confianza.',
  'Bochis, gracias por ser parte de tantas cosas que hoy guardo con cariño.']],
 ['Las palabras que quiero decirte','Una conversación de corazón a corazón, con espacio para los dos.','Almohada',[
  'Te amo. Y me importa encontrar maneras de que puedas sentirlo en nuestros días.',
  'Quiero preguntarte cómo estás y escuchar tu respuesta con atención.',
  'Contarte lo que me emociona, lo que me preocupa y lo que sueño contigo.',
  'Que nuestra confianza siga siendo un refugio en el que podamos hablar con sinceridad.',
  'Tus sentimientos también tienen un lugar en esta historia.',
  'Deseo que sigamos conociéndonos, aunque creamos saberlo todo del otro.']],
 ['Gracias por todo lo vivido','Los pequeños gestos también merecen su propio capítulo.','Te Quiero',[
  'Gracias por cada vez que encontraste una razón para acercarte.',
  'Por dejar que las pláticas sencillas se convirtieran en complicidad.',
  'Por compartir conmigo recuerdos que hoy me hacen sonreír.',
  'Por ese sí que me pediste con un anillo y por la emoción de aquella noche.',
  'Agradezco también que hayamos sabido sostenernos cuando algo se puso difícil.',
  'Todo eso forma parte del amor que hoy quiero celebrar contigo.']],
 ['Cuidarnos de aquí en adelante','Deseos concretos para seguir haciendo equipo.','Te Quiero',[
  'Quiero que sigamos cuidando el modo en que nos hablamos.',
  'Hacer espacio para una plática tranquila incluso cuando haya muchos pendientes.',
  'Reconocer el esfuerzo del otro y agradecer los detalles cotidianos.',
  'Apoyar nuestras metas, sin olvidar que también necesitamos tiempo para descansar y estar juntos.',
  'Que podamos pedir ayuda, decir lo que sentimos y encontrar acuerdos entre los dos.',
  'Me ilusiona un futuro en el que el amor se note en esas pequeñas decisiones.']],
 ['Después de dos síes','El noviazgo y el compromiso abren la puerta a lo que todavía desean construir.','Regalo de Dios',[
  'Nuestra historia tiene dos síes que llevo en el corazón.',
  'El de la crepa que marcó nuestro noviazgo. El del anillo que nos hizo soñar con una vida juntos.',
  'Cada uno guarda una emoción distinta y el mismo deseo de estar contigo.',
  'No sabemos cada detalle de lo que viene, y todavía podemos elegirlo juntos.',
  'Quiero que nos acompañemos con amor, paciencia y ganas de seguir aprendiendo.',
  'Bochis, qué bonito haber llegado hasta aquí y tener tantas páginas por escribir.']],
 ['Nuestra historia continuará','El cierre de esta pantalla y la ilusión de los siguientes capítulos.','Desde Que',[
  'Comenzamos entre papeles, pendientes y unas ganas enormes de conversar.',
  'Llegaron los aventones, las miradas, una crepa y el primer sí.',
  'Después, la confianza, una cena inolvidable y el anillo que todavía me emociona recordar.',
  'Hoy celebramos dos años de un amor que ha sabido salir adelante de la mano.',
  'Deseo que sigamos encontrando una razón para elegirnos, cuidarnos y construir juntos.',
  'La pantalla puede terminar aquí. Nuestra historia, Bochis, quiero seguir escribiéndola contigo.']]
 ];
 const games=[
  {tipo:'quiz',titulo:'El comienzo',pregunta:'¿Dónde empezaron nuestras conversaciones?',opciones:['En el trabajo','En un aeropuerto','En un concierto'],correcta:0,ok:'Entre la rutina y las prisas, encontramos un momento para nosotros.'},
  {tipo:'completar',titulo:'Nuestro primer sí',frase:'El día que acepté ser tu novia compartimos una ___.',opciones:['crepa','pizza','hamburguesa'],correcta:0,ok:'Una crepa y un sí: 23 de noviembre de 2024.'},
  {tipo:'codigo',titulo:'La fecha de nuestro comienzo',modo:'fecha',pregunta:'¿Qué día comenzó nuestro noviazgo?',placeholder:'DDMMAAAA',respuestas:['23112024','23/11/2024','231124'],pista:'23 de noviembre de 2024.',ok:'Dos años después, seguimos celebrando ese sí.'},
  {tipo:'ordenar',titulo:'Así comenzó lo nuestro',eventos:['Las pláticas en el trabajo','Los aventones a casa','El sí mientras compartíamos una crepa','La propuesta de matrimonio'],ok:'Cada capítulo nos fue acercando al siguiente.'},
  {tipo:'memory',titulo:'Recuerdos en pareja',pares:[0,8,19,30,45,60].map(photo),ok:'Pequeños pedacitos de una historia muy nuestra.'},
  {tipo:'puzzle',titulo:'Pieza por pieza',imagen:photo(0),ok:'Qué bonito seguir construyendo juntos.'},
  {tipo:'sopa',titulo:'Palabras de nuestra historia',palabras:['JAQUI','BOCHIS','CREPA','ANILLO','CONFIANZA','AMOR','JUNTOS'],ok:'Nuestra historia también vive en estas palabras.'}
 ];
 // Todos los recursos personales tienen su lugar en un capítulo. Los paisajes son ambiente simbólico.
 const materials=[];
 for(let i=0;i<18;i++){
  materials.push(...M.fotos.slice(Math.floor(i*M.fotos.length/18),Math.floor((i+1)*M.fotos.length/18)));
  if(M.videos[i])materials.push(M.videos[i]);
 }
 const scenes=(i)=>{
  const group=materials.slice(Math.floor(i*materials.length/18),Math.floor((i+1)*materials.length/18));
  const lines=stories[i][3];
  const list=group.map((m,j)=>({img:m.escenaRuta||m.ruta,poster:m.poster||m.ruta,texto:[lines[j]],duracion:m.escenaDuracion||m.duracion||10}));
  const ambient=i%3===0?{img:'assets/ambiente/atardecer.mp4',poster:'assets/ambiente/atardecer-poster.webp',duracion:15.015}:i%3===1?{img:'assets/ambiente/olas.mp4',poster:'assets/ambiente/olas-poster.webp',duracion:9.042}:{img:`assets/ambiente/${['cielo','mar','atardecer'][Math.floor(i/3)%3]}.webp`,duracion:10};
  list.push({...ambient,texto:[lines[5]]});return list;
 };
 const assigned={0:games[0],3:games[1],5:games[3],6:games[2],8:games[4],10:games[5],15:games[6]};
 const episode=i=>{const sc=scenes(i);return {titulo:stories[i][0],descripcion:stories[i][1],...soundtrack(stories[i][2]),escenas:sc,duracion:6+sc.reduce((n,s)=>n+s.duracion,0),interaccion:assigned[i]||null,recompensa:''};};
 const temporadas=stories.slice(0,12).map(([titulo,sinopsis],i)=>({num:i,tipo:'pelicula',titulo,sinopsis,anio:2026,clasificacion:'TP',top10:i<10,imagen:cover(i*5),...soundtrack(stories[i][2]),creditos:[['De','Jaqui'],['Para','Bochis'],['Nuestra fecha','23 de noviembre de 2024']],episodios:[episode(i)]}));
 ['Lo que vive en mi corazón','Gracias y nuevos propósitos','Después del sí'].forEach((titulo,i)=>temporadas.push({num:12+i,tipo:'serie',titulo,anio:2026,clasificacion:'TP',imagen:cover(54+i*6),sinopsis:stories[12+i*2][1]+' '+stories[13+i*2][1],...soundtrack(stories[12+i*2][2]),episodios:[episode(12+i*2),episode(13+i*2)]}));
 const carta=`Bochis:

Nuestra historia empezó sin hacer ruido, entre la rutina del trabajo y esos ratitos en los que tú buscabas un motivo para conversar. Yo dejaba los pendientes, los papeles y cualquier urgencia porque escucharte ya se estaba convirtiendo en mi parte favorita del día.

Después llegaron los aventones a casa, las risas y las miradas cómplices. Me dijiste que te gustaba y que querías algo más conmigo. Nos fuimos conociendo poco a poco y, aunque me tomó tiempo decidirme, el 23 de noviembre de 2024, mientras compartíamos una crepa, por fin te di el sí. En ese instante sentí que mi vida se llenaba de luz.

Todo se volvió más bonito. Nos llevábamos cada vez mejor, la confianza se convirtió en nuestro refugio y empezamos a guardar recuerdos que hoy llevo muy dentro.

Y entonces llegó el 16 de diciembre de 2025. Recuerdo tus nervios camino a la cena, los manotazos que no podías contener y cómo yo fingía no darme cuenta para seguirte el juego. Recuerdo la ternura con la que me recibiste y tus palabras. Cuando sacaste el anillo y me pediste matrimonio, lloré de pura felicidad. Te dije que sí con todo mi ser. Fue una noche increíble, de esas que quisiera volver a abrazar.

Hoy, 23 de noviembre de 2026, celebramos dos años desde aquel primer sí. Gracias por cada conversación, por cada detalle y por todo lo que hemos construido. Hemos tenido altas y bajas, pero hemos sabido salir adelante sosteniéndonos de la mano. Eso también es parte de lo que quiero agradecerte.

Te amo profundamente. Deseo que sigamos escuchándonos con paciencia, apoyando nuestras metas y encontrando tiempo para nosotros. Que cuidemos la confianza, que podamos hablar de lo que sentimos y que nunca falten razones para acercarnos otra vez.

Todavía tenemos capítulos por escribir. Mi ilusión es seguir compartiéndolos contigo, con amor, con cuidado y con las ganas de seguir eligiéndonos.

Feliz segundo aniversario, Bochis.
Con todo mi amor,
Jaqui`;
 window.TDN={
  pareja:{nombreA:'Jaqui',nombreB:'Bochis',apodos:['Bochis'],apodo:'Bochis',fechaInicio:'2024-11-23',anioInicio:2024,anios:2,aniosManual:2,fechaCodigo:'23112024',aniversario:'23 de noviembre de 2026',ciudad:'Donde comenzó nuestra historia',primeraCita:'La salida en la que compartimos una crepa',cancion:'Regalo de Dios',artista:'Julión Álvarez',viajes:[],dificiles:['Las altas y bajas que hemos superado juntos'],anecdota:'Tus nervios camino a la cena de nuestra propuesta',culpableAnecdota:1,gustosB:[],suenos:['Cuidar nuestra confianza','Apoyar nuestras metas','Seguir escribiendo nuestra vida juntos'],mensajeFinal:carta},
  fotos:{hero:'assets/fotos/hero.webp',perfilB:photo(34),perfilPareja:photo(30),t0:photo(0),t1:photo(8),t2:photo(16),t3:photo(24),t4:photo(32),t5:photo(40),t6:photo(48),t7:photo(56),final:cover(60),puzzle:photo(0),puzzle2:photo(1),postCreditos:photo(60)},
  media:{intro:'assets/audio/intro.mp3',temporadas:M.canciones.map(t=>t.src),canciones:M.canciones.map(t=>t.titulo),musica:'',videoFinal:'assets/video/montaje-final.mp4',audioRemitente:''},
  acceso:{password:'c4863d417bcc1e79f67897173ba6f8fee1db4c74371d762947321a06acad0a89',demo:false,pistaPassword:'La fecha de nuestro segundo aniversario: día, mes y los dos últimos números del año.',estreno:''},
  notificacion:{whatsapp:'522211379483',email:'',endpoint:''},
  sitio:{url:'https://streaming-us-2.rotfstudio.com/jaqui-bochis/splash.html',titulo:'Toda una vida por escribir',heroTop:'De Jaqui, para Bochis',heroTag:'23 NOVIEMBRE 2026 · NUESTRO SEGUNDO ANIVERSARIO',coincidencia:100,clasificacion:'TP',clasificacionTexto:'Dos años de amor y confianza',sinopsis:'Entre las prisas del trabajo encontramos tiempo para nosotros. Llegaron los aventones, una crepa, el primer sí y una noche con un anillo. Bochis, hoy celebro nuestros dos años y todo lo que todavía sueño contigo.',generos:['Romance','Nuestra historia','Segundo aniversario'],filaRecomendada:'Cada capítulo nos trajo hasta aquí'},
  temporadas,
  extras:[{titulo:'23 de noviembre de 2024',img:photo(3),texto:'Compartíamos una crepa cuando acepté ser tu novia. Así comenzó nuestro noviazgo.'},{titulo:'16 de diciembre de 2025',img:photo(20),texto:'Tus nervios, una cena, un anillo y mi sí entre lágrimas de felicidad.'},{titulo:'Dos años contigo',img:photo(40),texto:'El 23 de noviembre de 2026 celebramos nuestro segundo aniversario.'},{titulo:'Lo que quiero construir',img:photo(60),texto:'Más confianza, tiempo para escucharnos y apoyo para las metas de los dos.'}],
  final:{titulo:'Bochis, te volvería a decir que sí',imagen:cover(60),sinopsis:'Una carta de Jaqui para celebrar lo vivido y soñar con lo que viene.',preguntas:['¿Qué recuerdas de nuestras primeras pláticas en el trabajo?','¿Qué sentiste el día de la crepa y nuestro primer sí?','¿Cómo recuerdas la noche de nuestra propuesta?','¿Qué sueño te gustaría que construyéramos juntos?','¿Qué te gustaría decirme en nuestro segundo aniversario?'],carta:()=>carta},
  creditos:[['Con amor de','Jaqui'],['Para','Bochis'],['Nuestro primer sí','23 de noviembre de 2024'],['Nuestro compromiso','16 de diciembre de 2025'],['Segundo aniversario','23 de noviembre de 2026'],['Banda sonora',M.canciones.map(t=>t.titulo).join(' · ')],['Imágenes de ambiente','Paisajes de Unsplash y Pexels. Escenas simbólicas.'],['','Gracias por seguir escribiendo esta historia conmigo.']],
  postCreditos:{imagen:photo(60),etiqueta:'UN CAPÍTULO MÁS',texto:'Bochis, todavía nos queda tanto por vivir…',anuncio:'Continuará de tu mano',subtitulo:'Que siempre encontremos una razón para seguir juntos.',sorpresa:'Feliz segundo aniversario. Te amo. — Jaqui ♡'}
 };
})();

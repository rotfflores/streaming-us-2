/* Regalo independiente de Armando para Karyme · Nuestro capítulo, $79. */
(() => {
 const c=window.TDN,A='Armando',B='Karyme';
 const foto=n=>`assets/fotos/foto-${String(n).padStart(2,'0')}.webp`;
 const portada=n=>`assets/fotos/portada-${String(n).padStart(2,'0')}.webp`;
 const video=n=>({img:`assets/video/momento-${String(n).padStart(2,'0')}.mp4`,poster:`assets/fotos/video-${String(n).padStart(2,'0')}.webp`});
 const tracks=[['Primera cita — Carin León','primera-cita'],['Bailando — Enrique Iglesias, Descemer Bueno y Gente de Zona','bailando'],['Aliado al tiempo — La Nueva Marca','aliado-al-tiempo'],['Por siempre mi amor — Banda MS','por-siempre-mi-amor']].map(([titulo,slug])=>({titulo,src:`assets/audio/${slug}.mp3`}));
 tracks.push({titulo:'Una canción para ti — elegida por Armando',src:'assets/audio/una-cancion-para-ti.mp3'});
 const historia=`Primero que nada, ¿cómo olvidar el primer día que te vi? Sabes cómo siempre te lo digo —quizás hasta ya te aburras—, pero desde ese momento jamás pude sacarte de mi corazón. 🥺💘 Cuando hablamos por primera vez, sentía que ya te conocía, quizás de otra vida, y en esta te volviste a cruzar en mi camino. ✨ Ese primer beso que te robé, las idas al cine a escondidas, los besos que me dabas temblando y cómo nos sudaban las manos al tomarnos... 🥰🎬💋 Mi gran y primer amor, te amo como no imaginé que se podía amar a una persona. Siempre voy a elegirte a pesar de las peleas o discusiones que tengamos; siempre serás tú ese gran amor. ❤️🤝

Y a pesar de la distancia y el tiempo, hoy estamos juntos, tomados de la mano y con una bendición enorme: de tanto pedirle a Dios, nos cumplió el deseo de tener un hijo. 🙏👶 Te doy las gracias por darme la oportunidad de ser padre. Voy a trabajar tanto emocionalmente como en mi trabajo, y le echaré muchas ganas para que no les falte nada, pidiendo que Dios me dé la sabiduría para poder transmitir todo el amor que siento por ustedes, que son mi familia. 💙🏡

Amo nuestras noches de cine. Me encanta abrazarte cuando dormimos.

Te amo, Karyme, y siempre serás mi pastelito. 🍰❤️‍🩹🥹`;
 Object.assign(c.pareja,{nombreA:A,nombreB:B,nombreCompletoA:A,nombreCompletoB:B,apodo:'mi pastelito',apodos:['Karyme','mi pastelito'],fechaInicio:'',anioInicio:'',anios:0,aniosManual:0,fechaCodigo:'',ciudad:'',primeraCita:'',cancion:tracks[0].titulo,artista:'Carin León',viajes:[],dificiles:['La distancia y el tiempo'],anecdota:'Las idas al cine a escondidas y las manos que nos sudaban al tomarnos.',culpableAnecdota:2,gustosB:[],suenos:['Trabajar en mí y crecer emocionalmente','Esforzarme para que a mi familia no le falte nada','Pedir a Dios sabiduría para transmitirles todo mi amor'],mensajeFinal:historia});
 Object.assign(c.fotos,{hero:'assets/fotos/hero.webp',perfilB:foto(15),perfilPareja:foto(4),t0:foto(4),t1:foto(2),t2:foto(9),t3:foto(17),t4:foto(6),t5:foto(21),t6:foto(22),t7:foto(24),final:portada(24),puzzle:foto(7),puzzle2:foto(20),postCreditos:foto(24)});
 Object.assign(c.media,{intro:'assets/audio/intro.mp3',temporadas:tracks.map(t=>t.src),canciones:tracks.map(t=>t.titulo),musica:'',videoFinal:'assets/video/para-karyme.mp4',audioRemitente:''});
 Object.assign(c.acceso,{demo:false,password:'096491bdbce46d92488666db2668327117a480f182650c6081ffb33d3cc15212',pistaPassword:'Tu nombre, mi pastelito.',estreno:''});
 Object.assign(c.notificacion,{whatsapp:'526463832680',email:'',endpoint:''});
 Object.assign(c.sitio,{titulo:'Siempre tú, mi pastelito',url:'https://streaming-us-2.rotfstudio.com/armando-karyme/index.html?compartir=1',coincidencia:100,clasificacion:'TP',clasificacionTexto:'Nuestro gran amor',heroTag:'EXCLUSIVO PARA KARYME',heroTop:'Armando presenta · Nuestra historia',sinopsis:'Del primer beso y las idas al cine a escondidas, a la bendición de formar una familia. Cuatro películas y una serie sobre mi primer gran amor: tú, Karyme.',generos:['Nuestro primer amor','Familia','Siempre tú'],filaRecomendada:'Lo que siento por ti'});
 const scene=(m,texto)=>m===null?{texto:texto.join('\n')}:typeof m==='number'?{img:foto(m),poster:foto(m),texto}:typeof m==='string'?{img:`assets/ambiente/${m}.webp`,texto}:{...m,texto};
 const scenes=rows=>rows.map(([m,...t])=>scene(m,t));
 const film=(num,titulo,n,track,sinopsis,rows)=>({num,tipo:'pelicula',titulo,anio:2026,clasificacion:'TP',imagen:portada(n),musica:track.src,cancion:track.titulo,top10:num===0,sinopsis,creditos:[['Para',B],['Con todo mi amor',A],['Nuestra historia','Siempre tú, mi pastelito'],['Banda sonora',track.titulo]],episodios:[{titulo,duracion:88,descripcion:sinopsis,escenas:scenes(rows),interaccion:null,recompensa:''}]});
 c.temporadas=[
  film(0,'Desde el primer día',4,tracks[0],'El primer encuentro, un beso robado y aquellas salidas al cine a escondidas: el comienzo que Armando nunca ha podido sacar de su corazón.',[
   [4,'Karyme, ¿cómo olvidar','el primer día que te vi?'],
   [null,'Quizás te lo he dicho mil veces.','Desde ese momento jamás pude sacarte de mi corazón.'],
   [10,'Cuando hablamos por primera vez,','sentía que ya te conocía.'],
   ['cielo','Quizás de otra vida...','Y en esta volviste a cruzarte en mi camino.'],
   [video(2),'Ese primer beso que te robé.','Tus besos temblando, nuestras manos sudando.'],
   [2,'Las idas al cine a escondidas.','La emoción de encontrarnos y estar cerquita.'],
   [5,'Mi gran y primer amor:','contigo descubrí cuánto podía amar.'],
   [null,'El principio de mi historia favorita','siempre va a tener tu nombre.']]),
  film(1,'Mi lugar es contigo',2,tracks[1],'Las noches de cine y los abrazos al dormir: el amor también vive en esas cosas pequeñas que Armando quiere seguir compartiendo con Karyme.',[
   [14,'Amo nuestras noches de cine.','Me encanta compartir ese ratito contigo.'],
   [11,'Y me encanta abrazarte','cuando dormimos.'],
   [null,'Entre tantas cosas que deseo,','hay una muy sencilla: seguir cerca de ti.'],
   [12,'No necesito palabras perfectas','para saber lo que siento cuando te abrazo.'],
   [7,'Me gusta la vida contigo,','con nuestras risas y nuestra forma de querernos.'],
   ['atardecer','Quiero seguir haciendo espacio','para nosotros en medio de cada día.'],
   [13,'Que sigamos encontrando momentos','para mirarnos, reírnos y cuidarnos.'],
   [null,'Si me preguntas dónde quiero estar,','mi respuesta sigue siendo contigo.']]),
  film(2,'La bendición de ser familia',9,tracks[3],'La oración que se volvió una bendición y un gracias que no cabe en una sola frase: la oportunidad de ser padre y el amor por su familia.',[
   [8,'De tanto pedirle a Dios,','nos cumplió el deseo de tener un hijo.'],
   [9,'Una bendición enorme','que guardo con todo mi amor.'],
   [null,'Karyme, te doy las gracias','por darme la oportunidad de ser padre.'],
   [22,'Ustedes son mi familia.','Mi amor también quiere aprender a cuidarles mejor.'],
   [video(3),'Pido a Dios que me dé sabiduría','para transmitirles todo lo que siento.'],
   ['cielo','Que el amor se note en mis palabras,','pero también en mi manera de estar presente.'],
   [3,'Quiero seguir creciendo como persona','y darles lo mejor de mí.'],
   [null,'Gracias por esta familia, Karyme.','Los llevo en cada esfuerzo y en cada oración.']]),
  film(3,'Siempre voy a elegirte',17,tracks[2],'La distancia y el tiempo no borraron su amor. Una promesa de esfuerzo, crecimiento emocional y ganas de construir un futuro juntos.',[
   [17,'A pesar de la distancia y el tiempo,','hoy estamos juntos, tomados de la mano.'],
   [18,'Siempre voy a elegirte,','aun cuando haya peleas o discusiones.'],
   [null,'Quiero aprender a escucharte mejor','y cuidar la manera en que nos hablamos.'],
   [19,'Voy a trabajar en mí,','también emocionalmente.'],
   [video(4),'Le echaré muchas ganas a mi trabajo','para que no les falte nada.'],
   ['horizonte','No quiero que mis metas se queden en palabras.','Quiero dar pasos, con amor y constancia.'],
   [20,'Pidiéndole a Dios sabiduría','para amarles como mi corazón desea.'],
   [null,'Siempre serás tú ese gran amor.','Hoy y en todo lo que aún nos falta construir.']]),
  {num:4,tipo:'serie',titulo:'Tú, yo y nuestra familia',anio:2026,clasificacion:'TP',imagen:portada(24),musica:tracks[3].src,cancion:tracks[3].titulo,sinopsis:'Tres capítulos íntimos: lo que agradezco, lo que quiero aprender y el amor que quiero seguir dándoles.',creditos:[['Para','Karyme, mi pastelito'],['Con amor','Armando']],episodios:[
   {titulo:'Gracias por estar aquí',descripcion:'Lo que agradezco de compartir la vida contigo.',duracion:66,musica:tracks[3].src,cancion:tracks[3].titulo,interaccion:null,escenas:scenes([
    [6,'Gracias por estar en esta historia.','Por compartir conmigo tu amor y tu vida.'],
    [null,'No doy por hecho que hoy estemos juntos.','Conozco el valor de poder tomarte de la mano.'],
    [21,'Gracias por los momentos de cercanía,','por las risas que guardo contigo.'],
    [null,'Por nuestras noches de cine,','y por dejarme abrazarte al dormir.'],
    [1,'Gracias por darme la oportunidad de ser padre.','Hay gratitudes que se quedan para toda la vida.'],
    [null,'Quiero que sientas mi agradecimiento','en la forma en que cuide de ustedes.']])},
   {titulo:'Lo que quiero aprender',descripcion:'Crecer emocionalmente y convertir el amor en acciones.',duracion:66,musica:tracks[4].src,cancion:tracks[4].titulo,interaccion:null,escenas:scenes([
    [23,'Quiero crecer contigo, Karyme.','Seguir aprendiendo a cuidar nuestra familia.'],
    [null,'Escuchar antes de responder.','Hablar con cariño incluso cuando no sea fácil.'],
    [video(6),'Que las diferencias no nos hagan olvidar','todo lo que somos el uno para el otro.'],
    [video(5),'Trabajar en mí también es una manera','de demostrarles cuánto los amo.'],
    [null,'Quiero poner esfuerzo y constancia','en mi trabajo y en mi corazón.'],
    [null,'Y pedirle a Dios la sabiduría','que necesito para hacerlo cada día mejor.']])},
   {titulo:'Mi pastelito, siempre tú',descripcion:'Una declaración para Karyme y para la vida que siguen construyendo.',duracion:66,musica:tracks[0].src,cancion:tracks[0].titulo,interaccion:null,escenas:scenes([
    [15,'Mi pastelito, te amo','como no imaginé que podía amar.'],
    [16,'Desde aquellas manos temblando','hasta todo lo que hoy somos.'],
    [null,'No quiero dejar de elegirte.','Quiero seguir encontrándome contigo.'],
    [video(1),'Nuestra familia está en mis sueños,','en mis ganas y en mis oraciones.'],
    [24,'Ustedes son mi familia.','Y quiero darles todo el amor que llevo dentro.'],
    [null,'Te amo, Karyme.','Siempre serás mi pastelito. 🍰❤️']])}
  ]}
 ];
 c.extras=[{titulo:'Nuestra historia, en palabras de Armando',img:foto(4),texto:historia},{titulo:'Noches de cine, abrazos al dormir',img:foto(2),texto:'Amo nuestras noches de cine. Me encanta abrazarte cuando dormimos. En esos momentos también vive mi felicidad contigo.'},{titulo:'Gracias por nuestra familia',img:foto(9),texto:'Gracias por darme la oportunidad de ser padre. Le pido a Dios sabiduría para transmitirles todo el amor que siento por ustedes.'},{titulo:'Mis ganas de ser mejor',img:foto(17),texto:'Voy a trabajar emocionalmente y en mi trabajo. Quiero que mi amor se convierta en cuidado, esfuerzo y presencia para nuestra familia.'}];
 Object.assign(c.final,{titulo:'Para ti, mi pastelito',imagen:portada(24),sinopsis:'Una carta de Armando y un espacio para que le cuentes lo que llevas en el corazón.',preguntas:['¿Qué sentiste al ver nuestra historia?','¿Qué recuerdo de nosotros te gustaría volver a vivir?','¿Qué es lo que más disfrutas de nuestra familia?','¿Cómo podemos cuidarnos mejor y seguir creciendo juntos?','¿Qué sueño te gustaría que construyéramos como familia?'],carta:()=>`Karyme, mi pastelito:\n\n${historia}\n\nCon todo mi amor,\nArmando`});
 c.creditos=[['Para','Karyme, mi pastelito'],['Con todo mi amor','Armando'],['Nuestro comienzo','Un encuentro que nunca salió de mi corazón'],['Nuestra bendición','La familia que le pedimos a Dios'],['Mi promesa','Seguir creciendo y elegirte cada día'],['Banda sonora',tracks.map(t=>t.titulo).join(' · ')],['','Nuestra historia sigue contigo.']];
 c.postCreditos={imagen:foto(24),etiqueta:'NUESTRA HISTORIA CONTINÚA',texto:'Karyme, de todos los caminos, quiero seguir caminando contigo.',anuncio:'Siempre tú, mi pastelito.',subtitulo:'Gracias por ser mi gran amor y por nuestra familia.',sorpresa:'Te amo. Con todo mi corazón, Armando.'};
})();

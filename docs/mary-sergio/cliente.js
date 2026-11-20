/* Mary dedica esta edición independiente a Sergio. */
(() => {
 const c=window.TDN,A='Mary',B='Sergio';
 const foto=n=>`assets/fotos/foto-${String(n).padStart(2,'0')}.webp`;
 const portada=n=>`assets/fotos/portada-${String(n).padStart(2,'0')}.webp`;
 const ambiente=n=>`assets/ambiente/${n}.webp`;
 const sunset={img:'assets/ambiente/atardecer.mp4',poster:ambiente('atardecer')};
 const olas={img:'assets/ambiente/olas.mp4',poster:ambiente('olas')};
 const tracks=[['Coleccionista de canciones — Camila','coleccionista'],['Enamorado de tus ojos','enamorado'],['Te amo — Franco De Vita','te-amo'],['Rosas rojas — Industria del Amor','rosas-rojas'],['Sabes una cosa — Luis Miguel','sabes-una-cosa']].map(([titulo,slug])=>({titulo,src:`assets/audio/${slug}.mp3`}));
 const historia='Nos hicimos novios el 29 de marzo del 2025 ....nos llevamos super super bien ....cada mes me llevaba flores y siempre a estado para mi.\nHubo momentos dificiles y tristes y estabamos a punto de dejarnos ....pero el amor triunfo y seguimos echandole ganas ...nos unimos como matrimonio el 22 de abril del 2026 y hasta el momento somos muy felices';
 Object.assign(c.pareja,{nombreA:A,nombreB:B,nombreCompletoA:A,nombreCompletoB:B,apodos:[B,'mi amor'],apodo:B,fechaInicio:'2025-03-29',anioInicio:2025,anios:0,aniosManual:0,fechaCodigo:'2211',ciudad:'',primeraCita:'',cancion:tracks[2].titulo,artista:'Franco De Vita',viajes:[],dificiles:['Estuvimos a punto de separarnos, pero el amor triunfó y seguimos echándole ganas.'],anecdota:'Cada mes me llevabas flores y siempre has estado para mí.',culpableAnecdota:1,gustosB:[],suenos:['Cuidar nuestro matrimonio cada día','Seguir escuchándonos y eligiéndonos','Compartir muchos aniversarios más'],mensajeFinal:historia});
 Object.assign(c.fotos,{hero:'assets/fotos/hero.webp',perfilB:foto(2),perfilPareja:foto(1),t0:foto(1),t1:foto(6),t2:foto(11),t3:foto(16),t4:foto(21),t5:foto(25),t6:foto(26),t7:foto(27),final:portada(27),puzzle:foto(1),puzzle2:foto(11),postCreditos:foto(27)});
 Object.assign(c.media,{intro:'assets/audio/intro.mp3',temporadas:tracks.map(t=>t.src),canciones:tracks.map(t=>t.titulo),musica:'',videoFinal:'assets/video/para-sergio.mp4',audioRemitente:''});
 Object.assign(c.acceso,{demo:false,password:'ac1964eb089654e01f7bfb4871e0cd31ea4d2aa6e6e48774b6b9917b1341dbf6',pistaPassword:'El día y el mes de nuestro aniversario de siete meses, en cuatro dígitos.',estreno:''});
 Object.assign(c.notificacion,{whatsapp:'524131233582',email:'',endpoint:''});
 Object.assign(c.sitio,{url:'https://streaming-us-2.rotfstudio.com/mary-sergio/index.html?compartir=1',coincidencia:100,clasificacion:'TP',clasificacionTexto:'7 meses de casados',heroTag:'EXCLUSIVO PARA SERGIO',heroTop:'Mary presenta · 22 de noviembre de 2026',sinopsis:'Desde aquel 29 de marzo hasta nuestro sí del 22 de abril. Una historia de flores, compañía y un amor que encontró la manera de seguir. Sergio, celebremos nuestros siete meses de casados.',generos:['Nuestra historia','Siete meses','Amor que permanece'],filaRecomendada:'Todo lo que quiero seguir viviendo contigo'});
 const scene=(media,texto)=>typeof media==='number'?{img:foto(media),poster:foto(media),texto}:typeof media==='string'?{img:ambiente(media),poster:ambiente(media),texto}:{...media,texto};
 const scenes=rows=>rows.map(([m,...t])=>scene(m,t));
 const film=(num,titulo,n,track,sinopsis,rows)=>({num,tipo:'pelicula',titulo,anio:2026,clasificacion:'TP',imagen:portada(n),musica:track.src,cancion:track.titulo,top10:num===0,sinopsis,creditos:[['Para',B],['Con amor de',A],['Celebramos','7 meses de casados · 22 de noviembre'],['Banda sonora',track.titulo]],episodios:[{titulo,duracion:88,descripcion:sinopsis,escenas:scenes(rows),interaccion:null,recompensa:''}]});
 const films=[
  film(0,'El comienzo de nosotros',1,tracks[0],'El 29 de marzo de 2025 comenzó nuestro noviazgo. Hoy miro ese comienzo y agradezco todo lo que nos trajo hasta aquí.',[
   [1,'Sergio, esta historia es nuestra.','Y hoy quiero contártela con el corazón.'],
   [2,'El 29 de marzo de 2025','nos hicimos novios.'],
   [3,'Desde entonces nos llevamos','súper, súper bien.'],
   [4,'Me gusta recordar ese comienzo,','la alegría de saber que estábamos juntos.'],
   ['horizonte','Sin conocer todo lo que vendría,','empezamos a escribir lo nuestro.'],
   [5,'Cada mes llegabas con flores.','Yo iba guardando cada gesto en el corazón.'],
   [6,'Siempre has estado para mí.','Eso es algo que nunca quiero dar por hecho.'],
   [7,'Al mirar nuestras fotos,','veo cuánto significa tenerte en mi vida.'],
   [sunset,'Desde aquel primer capítulo','hasta el hogar que hoy construimos.'],
   [8,'Si vuelvo a pensar en nuestro comienzo,','vuelvo a sonreír por ti. — Mary']]),
  film(1,'Un amor que florece',9,tracks[3],'Las flores de cada mes dicen mucho de ti. Esta película es mi manera de agradecer tu presencia y los detalles que hacen tan bonito lo nuestro.',[
   [9,'Hay detalles que se quedan contigo','mucho después de recibirlos.'],
   ['rosas','Como las flores que me llevabas','cada mes.'],
   [10,'Para mí, cada ramo llevaba algo más:','el cariño de que pensaras en mí.'],
   [11,'Gracias por esos gestos,','por hacerme sentir acompañada.'],
   [12,'Gracias por estar para mí,','por tu manera de hacerte presente.'],
   [13,'Me hace feliz pensar en nosotros','y en lo bien que nos llevamos.'],
   ['cielo','Quiero que también tú sientas','todo el amor que tengo para darte.'],
   [14,'Que encuentre formas de cuidarte','en lo sencillo de cada día.'],
   [olas,'Deseo que nunca dejemos de tener','detalles bonitos el uno con el otro.'],
   [15,'Tú me dabas flores.','Hoy yo te regalo nuestra historia.']]),
  film(2,'El amor encontró el camino',16,tracks[2],'También hubo tristeza y momentos difíciles. Estuvimos a punto de dejarnos, pero el amor triunfó y seguimos echándole ganas.',[
   [16,'Nuestra historia también tuvo','momentos difíciles y tristes.'],
   [17,'Hubo un momento en que estuvimos','a punto de dejarnos.'],
   ['horizonte','Recordarlo me hace valorar','el camino que logramos seguir.'],
   [18,'Porque el amor triunfó.','Y seguimos echándole ganas.'],
   [19,'Hoy agradezco que sigamos aquí,','con ganas de cuidar lo nuestro.'],
   [20,'Quiero escucharte más,','decirte lo que siento con cariño.'],
   [21,'Que podamos hablar de lo difícil','y buscar juntos cómo estar mejor.'],
   ['cielo','Mi deseo es que nuestro amor','siempre tenga respeto y ternura.'],
   [sunset,'Que elijamos cuidarnos cada día,','con hechos y con paciencia.'],
   [22,'Sergio, te amo.','Y me alegra seguir escribiendo contigo.']]),
  film(3,'Siete meses de nuestro sí',23,tracks[4],'El 22 de abril de 2026 nos unimos en matrimonio. El 22 de noviembre celebramos siete meses de una vida que quiero seguir construyendo contigo.',[
   [23,'El 22 de abril de 2026','nos unimos como matrimonio.'],
   [24,'Ese sí tiene un lugar enorme','en nuestra historia.'],
   [25,'El 22 de noviembre','cumplimos siete meses de casados.'],
   [26,'Hasta hoy somos muy felices.','Y quiero celebrar eso contigo.'],
   [27,'Me emociona pensar','en todo lo que aún podemos vivir.'],
   ['horizonte','Sueño con un hogar donde podamos','escucharnos y sentirnos queridos.'],
   [3,'Con seguir teniendo detalles,','con hacer tiempo para nosotros.'],
   [11,'Con celebrar tus alegrías','y acompañarte en tus metas.'],
   [olas,'Con llegar a muchos aniversarios','sintiéndonos un equipo.'],
   [27,'Felices siete meses, mi amor.','Gracias por ser mi esposo. — Mary']])
 ];
 const ep=(titulo,descripcion,track,rows)=>({titulo,descripcion,duracion:66,musica:track.src,cancion:track.titulo,escenas:scenes(rows),interaccion:null,recompensa:''});
 const serie={num:4,tipo:'serie',titulo:'Lo que quiero vivir contigo',anio:2026,clasificacion:'TP',imagen:portada(27),musica:tracks[1].src,cancion:tracks[1].titulo,sinopsis:'Tres capítulos de gratitud, sentimientos y deseos para el matrimonio que seguimos construyendo.',creditos:[['Para',B],['De',A]],episodios:[
  ep('Gracias por estar','Una pausa para agradecer tus flores, tu presencia y la alegría de compartir la vida.',tracks[1],[
   [4,'Gracias por estar para mí, Sergio.','Hoy quiero que lo sepas una vez más.'],
   [8,'Por los detalles que recuerdo','con tanta ternura.'],
   ['rosas','Por las flores de cada mes,','por todo el cariño que significan.'],
   [12,'Por lo bien que nos llevamos,','por la alegría de ser nosotros.'],
   [16,'Quiero que tú también encuentres','compañía y amor en mí.'],
   [20,'Que al mirar nuestra historia','te sientas tan querido como yo.']]),
  ep('Elegirnos todos los días','Deseos de escucharnos, cuidar el cariño y seguir poniendo de nuestra parte.',tracks[0],[
   [5,'Seguimos echándole ganas.','Esa frase también cuenta lo que somos.'],
   [10,'Quiero que nos demos tiempo','para hablar y escucharnos.'],
   [15,'Que podamos pedir un abrazo,','decir lo que sentimos sin miedo.'],
   ['cielo','Deseo que nos tratemos con ternura','incluso cuando no pensemos igual.'],
   [21,'Que nunca falten ganas de cuidar','lo que nos hace felices.'],
   [sunset,'Que seguir juntos sea también','seguir haciéndonos bien.']]),
  ep('Muchos veintidós más','Metas que sueño compartir: un hogar con amor, apoyo para nuestros sueños y muchos aniversarios.',tracks[4],[
   [6,'Hoy son siete meses de casados.','Y me ilusiona pensar en lo que sigue.'],
   [14,'Quiero seguir descubriendo contigo','lo bonito de la vida diaria.'],
   [22,'Que encontremos tiempo para reír,','para conversar y estar juntos.'],
   ['horizonte','Deseo acompañar tus metas','y compartir contigo las mías.'],
   [26,'Que nuestro hogar se llene','de confianza, respeto y cariño.'],
   [27,'Por muchos veintidós más, Sergio.','Con todo mi amor, Mary.']])
 ]};
 c.temporadas.splice(0,c.temporadas.length,...films,serie);
 c.extras=[{titulo:'Nuestra historia, en mis palabras',img:foto(1),texto:historia},{titulo:'29 de marzo de 2025',img:foto(8),texto:'El día en que nos hicimos novios. El comienzo de una historia que hoy seguimos escribiendo.'},{titulo:'Flores de cada mes',img:ambiente('rosas'),texto:'Gracias por las flores y por estar siempre para mí. Tus detalles tienen un lugar muy bonito en mi corazón.'},{titulo:'22 de abril de 2026',img:foto(23),texto:'Nos unimos como matrimonio. Este 22 de noviembre celebramos siete meses de casados y la felicidad de seguir juntos.'}];
 const carta=[
  'Sergio, mi amor:',
  'Este 22 de noviembre cumplimos siete meses de casados y quiero regalarte una pausa para mirar nuestra historia. Me llena de alegría pensar que aquel 29 de marzo de 2025, cuando nos hicimos novios, fue el comienzo de todo lo que hoy compartimos.',
  'Nos llevamos súper, súper bien, y eso es algo que agradezco mucho. Recuerdo con ternura las flores que me llevabas cada mes. Cada detalle tuyo me hacía sentir tu cariño, pero hay algo que valoro todavía más: siempre has estado para mí.',
  'También hubo momentos difíciles y tristes. Estuvimos a punto de dejarnos, y no quiero borrar esa parte de lo que vivimos. Me hace valorar que el amor triunfara y que siguiéramos echándole ganas. Hoy quiero cuidar esa oportunidad con paciencia, respeto y mucho amor.',
  'El 22 de abril de 2026 nos unimos como matrimonio. Desde entonces, nuestra historia tiene ese sí que elegimos compartir. Hasta hoy somos muy felices, y me gusta detenerme a agradecerlo: tenerte como esposo, sentir que seguimos juntos y pensar en todo lo que aún podemos construir.',
  'Para lo que viene, sueño con un hogar en el que los dos podamos hablar de lo que sentimos, apoyarnos en nuestras metas y encontrar tiempo para nosotros. Quiero que sigamos teniendo detalles, que nos escuchemos de verdad y que aprendamos a cuidarnos mejor cada día.',
  'Gracias por las flores, por estar y por seguir escribiendo esta historia conmigo. Deseo que celebremos muchos veintidós más, que no nos falten ganas de ser un equipo y que la felicidad que hoy sentimos encuentre siempre nuevas formas de crecer.',
  'Felices siete meses de casados, Sergio. Te amo y me emociona seguir compartiendo la vida contigo.',
  'Con todo mi amor,\nMary'
 ].join('\n\n');
 Object.assign(c.final,{titulo:'Sergio, una carta para ti',imagen:portada(27),sinopsis:'Siete meses de casados, una historia que agradezco y mucho amor por compartir.',preguntas:['¿Qué sentiste al recorrer nuestra historia?','¿Qué recuerdo de nuestro noviazgo guardas con más cariño?','¿Qué es lo que más disfrutas de estos siete meses de casados?','¿Qué podemos hacer para cuidar todavía más nuestro matrimonio?','¿Qué sueño te gustaría que construyéramos juntos?'],carta:()=>carta});
 c.creditos=[['Para',B],['Con todo mi amor',A],['Nuestro comienzo','29 de marzo de 2025'],['Nuestro matrimonio','22 de abril de 2026'],['Celebramos','7 meses de casados · 22 de noviembre de 2026'],['Banda sonora',tracks.map(t=>t.titulo).join(' · ')],['Gracias','Por las flores, tu compañía y nuestro amor'],['','Nuestra historia continúa ♡']];
 c.postCreditos={imagen:foto(27),etiqueta:'ESCENA POST-CRÉDITOS',texto:'Sergio, todavía nos quedan muchos capítulos por escribir…',anuncio:'Por muchos veintidós más',subtitulo:'Siete meses de casados y un futuro que deseo seguir construyendo contigo.',sorpresa:'Te amo. Con todo mi corazón, Mary. ♡'};
})();

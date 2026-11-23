/* La Maeta para su amigo Abdiel · edición independiente, paquete $79. */
(() => {
 const c=window.TDN,A='tu amiga la Maeta de preesco',B='Abdiel';
 const foto=n=>`assets/fotos/foto-${String(n).padStart(2,'0')}.webp`;
 const portada=n=>`assets/fotos/portada-${String(n).padStart(2,'0')}.webp`;
 const tracks=[['Mi Talismán — Ana Gabriel','mi-talisman'],['Ahí Estabas Tú — Carín León','ahi-estabas-tu'],['La constante — Enrique Bunbury','la-constante'],['Desde Que Llegaste — Reyli Barba','desde-que-llegaste'],['Te Vi Venir — Sin Bandera','te-vi-venir']].map(([titulo,slug])=>({titulo,src:`assets/audio/${slug}-climax.mp3`}));
 const principal='Casi nunca te lo digo, pero gracias por compartir un pedacito de tu vida conmigo, por hacerme reír, gracias por cruzarte en mi camino y ser parte de mi historia. Te quiere tu amiga la Maeta..';
 const historia='Nuestra amistad comenzó de una manera muy chistosa y diferente a lo normal, no olvidaré la Torre de poleas qué fue donde cruzamos palabras por primera vez, fue increíble gracias por existir en mi vida.\nRecuerda seremos como el yin yang dos fuerzas que nos equilibraremos entre si. Podrás tener mil amigas pero jamás una como yo, te quiero.';
 const frase='En el lugar equivocado, aunque des lo mejor de ti, nada será suficiente. En el lugar correcto, con solo estar ahí, tu presencia será celebrada.';
 Object.assign(c.pareja,{nombreA:A,nombreB:B,nombreCompletoA:A,nombreCompletoB:'El amigo Abdiel',apodo:'amigo',apodos:['Abdiel','amigo'],fechaInicio:'',anioInicio:'',anios:0,aniosManual:0,fechaCodigo:'',ciudad:'',primeraCita:'La Torre de poleas',cancion:tracks[0].titulo,artista:'Ana Gabriel',viajes:[],dificiles:[],anecdota:'La Torre de poleas, donde cruzamos palabras por primera vez de una manera muy chistosa y diferente.',culpableAnecdota:2,gustosB:[],suenos:['Seguir compartiendo risas y buenos momentos','Acompañarnos y celebrar los logros del otro','Cuidar una amistad en la que podamos ser nosotros mismos'],mensajeFinal:principal+'\n\n'+historia});
 Object.assign(c.fotos,{hero:'assets/fotos/hero.webp',perfilB:foto(8),perfilPareja:foto(1),t0:foto(1),t1:foto(2),t2:foto(3),t3:foto(4),t4:foto(5),t5:foto(6),t6:foto(7),t7:foto(8),final:portada(1),puzzle:foto(1),puzzle2:foto(9),postCreditos:foto(1)});
 Object.assign(c.media,{intro:'assets/audio/intro.mp3',temporadas:tracks.map(t=>t.src),canciones:tracks.map(t=>t.titulo),musica:'',videoFinal:'assets/video/para-mi-amigo.mp4',audioRemitente:''});
 Object.assign(c.acceso,{demo:false,password:'17948953967fbb5b789b224b4c74acadba3dbd94380ed3eed72609fd6e8d7d05',pistaPassword:'Tu nombre, amigo, en minúsculas.',estreno:''});
 Object.assign(c.notificacion,{whatsapp:'529513559029',email:'',endpoint:''});
 Object.assign(c.sitio,{titulo:'Gracias por cruzarte en mi camino',url:'https://streaming-us-2.rotfstudio.com/maeta-abdiel/index.html?compartir=1',coincidencia:100,clasificacion:'TP',clasificacionTexto:'Amistad',heroTag:'EXCLUSIVO PARA MI AMIGO ABDIEL',heroTop:'Tu amiga la Maeta de preesco presenta',sinopsis:'Una amistad que empezó en la Torre de poleas y encontró su propio equilibrio. Cuatro películas, una serie y muchas formas de decirte: gracias por existir en mi vida.',generos:['Amistad','Risas','Yin y yang'],filaRecomendada:'Porque las buenas amistades merecen su historia'});
 const scenes=rows=>rows.map(([m,...texto])=>m===null?{texto:texto.join('\n')}:typeof m==='number'?{img:foto(m),poster:foto(m),texto}:m==='frase'?{img:'assets/fotos/frase.webp',texto}:m.endsWith('.mp4')?{img:`assets/ambiente/${m}`,poster:`assets/ambiente/${m.replace('.mp4','.webp')}`,texto}:{img:`assets/ambiente/${m}.webp`,texto});
 const film=(num,titulo,n,track,sinopsis,rows)=>({num,tipo:'pelicula',titulo,anio:2026,clasificacion:'TP',imagen:portada(n),musica:track.src,cancion:track.titulo,top10:num===0,sinopsis,creditos:[['Para','El amigo Abdiel'],['De',A],['Nuestra historia','Una amistad con su propio equilibrio'],['Banda sonora',track.titulo]],episodios:[{titulo,duracion:88,descripcion:sinopsis,escenas:scenes(rows),interaccion:null,recompensa:''}]});
 c.temporadas=[
  film(0,'Tres metros sobre el cielo',1,tracks[3],'Nuestra versión: una amistad que empezó de una forma muy chistosa. La Torre de poleas, las primeras palabras y la alegría de habernos encontrado.',[
   [1,'Abdiel, nuestra amistad empezó','de una manera muy chistosa y diferente.'],
   [6,'No olvidaré la Torre de poleas.','Ahí cruzamos palabras por primera vez.'],
   [null,'A veces un encuentro inesperado','termina teniendo un lugar especial en tu historia.'],
   [2,'Y tú encontraste el tuyo en la mía,','con tu forma de ser y de hacerme reír.'],
   ['cielo','Qué increíble que nuestros caminos','se hayan cruzado de esa manera.'],
   [5,'Gracias por compartir','un pedacito de tu vida conmigo.'],
   ['atardecer.mp4','Esta película empieza con un encuentro.','Y sigue con un gracias por tu amistad.'],
   [null,'Gracias por ser parte de mi historia.','Te quiere tu amiga la Maeta.']]),
  film(1,'Tengo ganas de ti',7,tracks[1],'Segunda parte de Tres metros sobre el cielo, en nuestra versión de amistad: ganas de seguir coincidiendo, compartiendo risas y sumando buenos momentos.',[
   [7,'Esta segunda parte tiene ganas','de más risas, pláticas y buenos ratos.'],
   [null,'No hace falta una ocasión especial','para agradecerte que seas mi amigo.'],
   [3,'Hay detalles que se quedan guardados','porque nos recuerdan a alguien que apreciamos.'],
   [4,'Gracias por compartir conmigo','tu tiempo y tu manera de ver la vida.'],
   ['olas.mp4','Ojalá sigamos encontrando momentos','para platicar y reírnos sin tanta prisa.'],
   [null,'Que podamos seguir siendo nosotros,','con nuestras diferencias y nuestra confianza.'],
   [8,'Me da gusto que existas, Abdiel.','Y que una parte de tu camino coincida con el mío.'],
   [null,'A esta amistad todavía le caben','muchas conversaciones y buenas carcajadas.']]),
  film(2,'Los puentes de Madison',9,tracks[2],'Hay encuentros que construyen puentes. Un agradecimiento por la compañía, el respeto y la libertad de ser distintos y seguir encontrando equilibrio.',[
   [9,'Hay personas que se vuelven un puente','entre un día cualquiera y una buena sonrisa.'],
   ['horizonte','Nuestra amistad tiene su propia manera','de unir dos formas distintas de ser.'],
   [null,'Recuerda: seremos como el yin yang.','Dos fuerzas que se equilibran entre sí.'],
   [10,'No tenemos que pensar igual en todo','para escucharnos y tratarnos con cariño.'],
   ['olas.mp4','Que podamos acompañarnos','sin dejar de ser quienes somos.'],
   ['frase','En el lugar correcto, tu presencia','será celebrada. Y qué razón.'],
   [null,'Deseo que encuentres gente y lugares','donde puedas sentirte valorado tal como eres.'],
   [null,'Y que nuestra amistad siga siendo','un espacio de confianza, respeto y risas.']]),
  film(3,'Retrato de una mujer en llamas',5,tracks[0],'Un retrato de lo que tu amiga la Maeta quiere decirte: gracias por existir, por las risas y por ser parte de su historia. Una amistad que conserva su chispa.',[
   [5,'Hoy el retrato lo hacemos con palabras.','Las que a veces no digo tan seguido.'],
   [null,'Casi nunca te lo digo,','pero gracias por compartir tu vida conmigo.'],
   [1,'Por hacerme reír,','por cruzarte en mi camino.'],
   ['atardecer.mp4','Las buenas amistades conservan su chispa','en los detalles y en la forma de estar.'],
   [8,'Podrás tener mil amigas,','pero jamás una como yo.'],
   ['frase','Que tu presencia sea celebrada.','Que nunca tengas que dejar de ser tú.'],
   [null,'No olvidaré cómo empezó esta amistad.','Fue increíble: gracias por existir en mi vida.'],
   [null,'Te quiero, amigo Abdiel.','Tu amiga la Maeta.']]),
  {num:4,tipo:'serie',titulo:'Como el yin y el yang',anio:2026,clasificacion:'TP',imagen:portada(1),musica:tracks[4].src,cancion:tracks[4].titulo,sinopsis:'Tres capítulos sobre lo que agradezco, el equilibrio de nuestra amistad y los buenos deseos que quiero compartir contigo.',creditos:[['Para','El amigo Abdiel'],['De',A]],episodios:[
   {titulo:'Qué bueno que coincidimos',descripcion:'La Torre de poleas y un encuentro que se volvió amistad.',duracion:66,musica:tracks[4].src,cancion:tracks[4].titulo,interaccion:null,escenas:scenes([
    [6,'Todo empezó en la Torre de poleas.','Con nuestras primeras palabras.'],
    [null,'De una manera chistosa,','distinta a lo que uno esperaría.'],
    [2,'Y aquí estamos, amigo,','compartiendo un pedacito de la vida.'],
    ['cielo','No hace falta ponerle una fecha','para saber que este encuentro vale mucho.'],
    [1,'Gracias por cruzarte en mi camino','y por ser parte de mi historia.'],
    [null,'Qué bueno que coincidimos.','Qué bueno poder llamarte amigo.']])},
   {titulo:'Dos fuerzas, un equilibrio',descripcion:'Ser distintos y encontrar nuestra propia forma de acompañarnos.',duracion:66,musica:tracks[2].src,cancion:tracks[2].titulo,interaccion:null,escenas:scenes([
    [3,'Como el yin y el yang,','dos fuerzas que se equilibran entre sí.'],
    [4,'Cada quien con su forma de ser,','su manera de pensar y su propio camino.'],
    ['olas.mp4','Ojalá sepamos escucharnos,','darnos ánimo y celebrar lo bueno.'],
    [null,'Que podamos hablar con confianza','y respetar también nuestros espacios.'],
    ['frase','En el lugar correcto,','tu presencia será celebrada.'],
    [null,'Tu amistad tiene un lugar aquí, Abdiel.','Gracias por ser tú.']])},
   {titulo:'Lo que deseo para ti',descripcion:'Buenos deseos para tu camino y ganas de seguir cuidando esta amistad.',duracion:66,musica:tracks[3].src,cancion:tracks[3].titulo,interaccion:null,escenas:scenes([
    [10,'Deseo que sigas encontrando motivos','para sentirte orgulloso de ti.'],
    ['horizonte','Que tengas ánimo para tus metas,','a tu ritmo y con tus propias decisiones.'],
    [7,'Que no te falten risas,','buenos amigos y ganas de seguir adelante.'],
    ['atardecer.mp4','Ojalá sigamos sumando recuerdos','sin perder nuestra forma de ser.'],
    [9,'Podrás tener mil amigas,','pero jamás una como yo.'],
    [null,'Te quiero, amigo.','Con cariño, tu amiga la Maeta de preesco.']])}
  ]}
 ];
 c.extras=[{titulo:'Casi nunca te lo digo…',img:foto(1),texto:principal},{titulo:'La Torre de poleas',img:foto(6),texto:historia},{titulo:'En el lugar correcto',img:'assets/fotos/frase.webp',texto:frase+'\n\nY qué razón.'},{titulo:'Nuestra forma de equilibrarnos',img:foto(3),texto:'Como el yin yang: dos fuerzas que se equilibran entre sí. Que sigamos cuidando esta amistad con respeto, confianza y buen humor.'}];
 Object.assign(c.final,{titulo:'Una carta para mi amigo',imagen:portada(1),sinopsis:'Lo que tu amiga la Maeta quiere decirte, y un espacio para que tú también compartas lo que sientes.',preguntas:['¿Qué sentiste al ver este detalle de tu amiga la Maeta?','¿Qué recuerdas de aquella primera plática en la Torre de poleas?','¿Qué es lo que más te hace reír de nuestra amistad?','¿Cómo te gustaría que siguiéramos cuidando esta amistad?','¿Qué buen momento te gustaría que compartiéramos después?'],carta:()=>`Para el amigo Abdiel:\n\n${principal}\n\n${historia}\n\n${frase}\n\nCon cariño,\nTu amiga la Maeta de preesco.`});
 c.creditos=[['Para','El amigo Abdiel'],['Envía',A],['Nuestro comienzo','La Torre de poleas'],['Nuestra esencia','Risas, amistad y equilibrio'],['Nuestro símbolo','El yin y el yang'],['Banda sonora',tracks.map(t=>t.titulo).join(' · ')],['','Gracias por ser parte de mi historia.']];
 c.postCreditos={imagen:foto(1),etiqueta:'ESTA AMISTAD CONTINÚA',texto:'Podrás tener mil amigas, pero jamás una como yo.',anuncio:'¡Todavía nos quedan muchas risas!',subtitulo:'Gracias por compartir un pedacito de tu vida conmigo.',sorpresa:'Te quiero, amigo Abdiel. Tu amiga la Maeta de preesco. ☯'};
})();

(() => {
 const c=window.TDN,A='Violeta Verónica',B='Luis Oscar';
 const foto=n=>`assets/fotos/foto-${String(n).padStart(2,'0')}.webp`,amb=n=>`assets/ambiente/${n}.webp`;
 const tracks=[['El amor de mi vida — Calibre 50','amor-de-mi-vida'],['Eres mi todo — Banda MS Style','eres-mi-todo'],['Regalo de Dios — Julión Álvarez','regalo-de-dios'],['Le doy gracias a Dios — Julión Álvarez y Yuridia','gracias-a-dios'],['Siempre te voy a querer — Calibre 50 / Luis R Conriquez','siempre-te-voy-a-querer']].map(([titulo,slug])=>({titulo,src:`assets/audio/${slug}.mp3`}));
 const historia='Yo, Violeta Verónica Torres Pérez, conocí a mi esposo, Luis Oscar Trujillo Martinez, el 16 de abril: ese es nuestro aniversario. Tenemos 13 años juntos y vamos para 14. Tuvimos tres hijos: Luis Oscar, Luis Ramón y Luisa Violeta. Yo ya tenía a Edson Gael y él a Luis Adrián. Los amamos mucho a todos por igual.';
 Object.assign(c.pareja,{nombreA:A,nombreB:B,nombreCompletoA:'Violeta Verónica Torres Pérez',nombreCompletoB:'Luis Oscar Trujillo Martinez',apodos:[B,'mi amor'],apodo:'mi amor',fechaInicio:'',anioInicio:'',anios:13,aniosManual:13,fechaCodigo:'1604',ciudad:'',primeraCita:'',cancion:tracks[0].titulo,artista:'Calibre 50',viajes:[],dificiles:[],anecdota:'Nos conocimos un 16 de abril y hemos construido una familia en la que amamos a nuestros cinco hijos por igual.',culpableAnecdota:2,gustosB:[],suenos:['Seguir cuidando nuestra unión','Acompañar a nuestros cinco hijos con el mismo amor','Compartir muchos aniversarios más'],mensajeFinal:historia});
 Object.assign(c.fotos,{hero:amb('horizonte'),perfilB:'assets/ambiente/perfil-b.svg',perfilPareja:'assets/ambiente/perfil-pareja.svg',t0:amb('portada-0'),t1:amb('portada-1'),t2:amb('portada-2'),t3:amb('portada-3'),t4:amb('portada-4'),t5:amb('rosas'),t6:amb('cielo'),t7:amb('horizonte'),final:amb('final'),puzzle:amb('rosas'),puzzle2:amb('cielo'),postCreditos:amb('horizonte')});
 Object.assign(c.media,{intro:'assets/audio/intro.mp3',temporadas:tracks.map(t=>t.src),canciones:tracks.map(t=>t.titulo),musica:'',videoFinal:'assets/video/para-luis-oscar.mp4',audioRemitente:''});
 Object.assign(c.acceso,{demo:false,cualquierClave:false,password:'1604',pistaPassword:'El día y mes en que comenzó nuestra historia (DDMM).',estreno:''});
 Object.assign(c.notificacion,{whatsapp:'526565555953',email:'',endpoint:''});
 Object.assign(c.sitio,{url:'https://streaming-us-2.rotfstudio.com/violeta-luis-oscar/index.html?compartir=1',coincidencia:100,clasificacion:'TP',clasificacionTexto:'Amor y familia',heroTag:'SOLO PARA LUIS OSCAR',heroTop:'13 años juntos · Rumbo a 14',sinopsis:'Un 16 de abril comenzó nuestra historia. Hoy celebramos 13 años juntos, rumbo a 14, y el amor por nuestros cinco hijos. Luis Oscar, esta es mi manera de decirte cuánto significa la vida que compartimos.',generos:['Nuestra historia','Amor de familia','Siempre nosotros'],filaRecomendada:'Aquel 16 de abril'});
 const scene=(m,...texto)=>typeof m==='number'?{img:foto(m),texto}:['atardecer','olas'].includes(m)?{img:`assets/ambiente/${m}.mp4`,poster:amb(m),texto}:{img:amb(m),texto};
 const scenes=rows=>rows.map(r=>scene(...r));
 const ep=(titulo,descripcion,track,rows,duracion=66)=>({titulo,descripcion,duracion,musica:track.src,cancion:track.titulo,escenas:scenes(rows),interaccion:null,recompensa:''});
 const film=(num,titulo,track,sinopsis,rows)=>({num,tipo:'pelicula',titulo,anio:'',clasificacion:'TP',imagen:amb(`portada-${num}`),musica:track.src,cancion:track.titulo,top10:num===0,sinopsis,creditos:[['Para','Luis Oscar Trujillo Martinez'],['Con todo mi amor',A],['Nuestro aniversario','16 de abril'],['Banda sonora',track.titulo]],episodios:[ep(titulo,sinopsis,track,rows,88)]});
 c.temporadas=[
  film(0,'Aquel 16 de abril',tracks[0],'La fecha que siempre tendrá un lugar en nosotros: el comienzo de una historia que lleva 13 años y va por muchos más.',[
   [1,'Luis Oscar, esta historia es nuestra.','La que empezó un 16 de abril.'],
   ['horizonte','Hay fechas que se guardan en el calendario.','La nuestra también vive en mi corazón.'],
   [2,'Ese día nos conocimos.','Por eso el 16 de abril es nuestro aniversario.'],
   [3,'Han pasado 13 años juntos.','Y vamos para 14, mi amor.'],
   ['atardecer','Me emociona mirar el camino recorrido','y saber que lo he compartido contigo.'],
   [4,'Hoy quiero detenerme a agradecer','la vida que hemos ido construyendo.'],
   [5,'Lo nuestro tiene muchos capítulos.','Y todavía quiero escribir más a tu lado.'],
   ['rosas','Cada aniversario me recuerda','lo mucho que significa encontrarte.']]),
  film(1,'Cinco formas de amar',tracks[2],'Edson Gael, Luis Adrián, Luis Oscar, Luis Ramón y Luisa Violeta: cinco hijos, el mismo amor y un lugar para cada uno.',[
   [6,'Nuestra historia también se cuenta','con los nombres de nuestros hijos.'],
   [7,'Tú y yo tuvimos a Luis Oscar,','Luis Ramón y Luisa Violeta.'],
   ['cielo','Cada uno tiene su propia forma de ser.','Cada uno merece sentirse amado.'],
   [8,'Yo ya tenía a Edson Gael.','Tú también tenías a Luis Adrián.'],
   [9,'A todos los amamos mucho.','A todos, por igual.'],
   ['olas','Quiero que cada uno encuentre en nosotros','cariño, escucha y un lugar seguro.'],
   [10,'Cinco nombres que caben enteros','en el corazón de nuestra familia.'],
   ['horizonte','Gracias por compartir conmigo','este amor tan grande por nuestros hijos.']]),
  film(2,'Gracias por nuestra vida',tracks[3],'Una película de gratitud por la vida compartida, por ser compañeros y por la familia que tanto amamos.',[
   [11,'Luis Oscar, gracias por ser parte','de estos 13 años de mi vida.'],
   ['rosas','Quiero darte las gracias con tiempo,','sin dejar lo que siento para después.'],
   [12,'Gracias por la historia que nos une,','por ser mi esposo y mi compañero.'],
   [13,'Me llena el corazón pensar','en nuestra familia y en lo que significa.'],
   ['atardecer','Le doy gracias a Dios por nuestra vida','y por el amor que deseo seguir cuidando.'],
   [14,'Quiero que tú también sientas','cuánto te amo y cuánto te valoro.'],
   [15,'Esta es una pausa para mirarnos','y celebrar que seguimos aquí.'],
   ['cielo','Gracias por formar parte','de lo más querido de mi vida.']]),
  film(3,'Siempre te voy a elegir',tracks[4],'Mis deseos para nosotros: escucharnos, cuidarnos y seguir haciendo equipo mientras llegan nuevos aniversarios.',[
   [16,'Vamos para 14 años juntos.','Y me ilusiona pensar en lo que viene.'],
   [17,'Deseo que sigamos encontrando tiempo','para escucharnos y estar cerca.'],
   ['horizonte','Que cuidemos nuestro amor','con paciencia y con respeto.'],
   [18,'Quiero acompañarte en tus metas','y compartir contigo las mías.'],
   ['olas','Que nuestros hijos siempre encuentren','el mismo cariño en nosotros.'],
   [19,'Deseo muchos más 16 de abril,','muchas razones para celebrar la vida.'],
   [20,'Luis Oscar, sigo soñando contigo.','Con amor, tu Violeta Verónica.'],
   ['rosas','Lo que viene aún está por escribirse.','Yo quiero seguir haciéndolo a tu lado.']]),
  {num:4,tipo:'serie',titulo:'Lo que viene contigo',anio:'',clasificacion:'TP',imagen:amb('portada-4'),musica:tracks[1].src,cancion:tracks[1].titulo,sinopsis:'Tres capítulos para decirte lo que siento, agradecer nuestra familia y compartir mis deseos para el futuro.',creditos:[['Para',B],['De',A]],episodios:[
   ep('Eres mi todo','Lo que significa compartir la vida contigo.',tracks[1],[
    [21,'Mi amor, a veces faltan palabras','para decir lo mucho que significas.'],
    ['rosas','Hoy quiero que esta historia','hable por mí, con todo mi cariño.'],
    [22,'Eres mi esposo, Luis Oscar.','Y tienes un lugar enorme en mi vida.'],
    ['atardecer','Deseo que lo sientas en mis palabras','y también en mi forma de cuidarte.'],
    [23,'Quiero seguir compartiendo contigo','el amor por lo que hemos construido.'],
    ['cielo','Que nunca nos falten maneras','de decirnos cuánto nos queremos.']]),
   ep('Un lugar para los cinco','Nuestro amor por Edson Gael, Luis Adrián, Luis Oscar, Luis Ramón y Luisa Violeta.',tracks[2],[
    [24,'Nuestros hijos son parte esencial','de la historia que hoy celebramos.'],
    ['horizonte','Edson Gael y Luis Adrián,','Luis Oscar, Luis Ramón y Luisa Violeta.'],
    [25,'Quiero que cada uno sepa','que nuestro amor es para todos por igual.'],
    [26,'Deseo que podamos acompañarlos','en sus sueños y en sus propios caminos.'],
    ['olas','Escuchar sus ideas, celebrar sus alegrías','y estar cuando necesiten un abrazo.'],
    ['cielo','Cinco vidas que amamos.','Una familia que quiero seguir cuidando.']]),
   ep('Por muchos abriles más','Los sueños que quiero seguir compartiendo contigo.',tracks[0],[
    [27,'Hay mucho que agradezco del pasado.','Y mucho que deseo para nuestro futuro.'],
    [28,'Quiero que sigamos siendo un equipo,','con espacio para hablar de lo que sentimos.'],
    ['atardecer','Que sepamos celebrar lo sencillo','y hacer tiempo para nosotros.'],
    [29,'Que el amor por nuestros hijos','siga acompañando nuestras decisiones.'],
    ['horizonte','Que lleguen nuevos aniversarios','con más cariño, confianza y unión.'],
    [30,'Por muchos abriles más, Luis Oscar.','Te amo. — Violeta Verónica']])
  ]}
 ];
 for(const t of c.temporadas)for(const e of t.episodios)e.imagen=t.imagen;
 c.extras=[{titulo:'Nuestra historia',img:amb('horizonte'),texto:historia},{titulo:'16 de abril',img:amb('rosas'),texto:'El día en que nos conocimos. Nuestro aniversario, nuestra fecha y el comienzo de esta historia.'},{titulo:'Todos por igual',img:amb('cielo'),texto:'Edson Gael, Luis Adrián, Luis Oscar, Luis Ramón y Luisa Violeta. Los amamos mucho a todos por igual.'}];
 const carta=[
  'Luis Oscar, mi amor:',
  'Un 16 de abril nos conocimos. Desde entonces, esa fecha tiene un lugar muy especial en mi vida: es nuestro aniversario, el comienzo de la historia que compartimos. Tenemos 13 años juntos y vamos para 14. Al decirlo, siento gratitud por todo lo que significa haber llegado hasta aquí contigo.',
  'Quise regalarte esta historia para que puedas detenerte un momento y sentir cuánto te amo. A veces la vida sigue tan deprisa que dejamos palabras hermosas pendientes. Hoy quiero decirte que valoro nuestra unión, que me importa nuestra vida y que me emociona pensar en los capítulos que todavía podemos escribir.',
  'Juntos tuvimos a Luis Oscar, Luis Ramón y Luisa Violeta. Yo ya tenía a Edson Gael y tú a Luis Adrián. Los amamos mucho a todos por igual. Ese amor por nuestros cinco hijos es una de las partes más importantes de lo que somos. Cada uno tiene su lugar en nuestro corazón; deseo que siempre lo sepan y lo sientan.',
  'Gracias por ser mi esposo y por compartir conmigo esta familia. Quiero seguir cuidando nuestro amor, escucharte con atención y encontrar tiempo para nosotros. Deseo que podamos hablar de nuestras metas, celebrar lo que nos alegra y acompañarnos con paciencia cuando necesitemos apoyo.',
  'Para nuestros hijos sueño con un hogar lleno de cariño, respeto y confianza. Quiero que cada uno sepa que puede acercarse a nosotros, contarnos lo que siente y encontrar amor. Me gustaría que los acompañáramos en sus propios sueños, con la misma ternura para todos.',
  'Para ti y para mí deseo muchos aniversarios más. Que cada 16 de abril nos encuentre con ganas de seguir eligiéndonos. Que nunca nos falten detalles, conversaciones y momentos para recordar que también somos esa pareja cuya historia empezó aquel día.',
  'Luis Oscar Trujillo Martinez, gracias por estos 13 años juntos. Vamos para 14 y yo sigo mirando hacia adelante con amor. Ojalá esta dedicatoria te abrace un poquito y te recuerde todo lo que significas para mí.',
  'Te amo. Por nuestra familia, por nuestra unión y por muchos abriles más.',
  'Con todo mi amor,\nVioleta Verónica Torres Pérez'
 ].join('\n\n');
 Object.assign(c.final,{titulo:'Luis Oscar, esta carta es para ti',imagen:amb('final'),sinopsis:'Lo que agradezco, lo que siento y lo que sueño seguir viviendo contigo.',preguntas:['¿Qué sentiste al recorrer nuestra historia?','¿Qué recuerdo de estos 13 años guardas con más cariño?','¿Qué significa para ti la familia que compartimos?','¿Cómo te gustaría que siguiéramos cuidando nuestro amor?','¿Qué sueño quieres que construyamos juntos en los próximos años?'],carta:()=>carta});
 c.creditos=[['Para','Luis Oscar Trujillo Martinez'],['Con todo mi amor','Violeta Verónica Torres Pérez'],['Nuestro aniversario','16 de abril'],['Nuestra historia','13 años juntos · Rumbo a 14'],['Nuestros hijos','Edson Gael · Luis Adrián · Luis Oscar · Luis Ramón · Luisa Violeta'],['Siempre','Los amamos a todos por igual'],['Banda sonora',tracks.map(t=>t.titulo).join(' · ')],['','Por muchos abriles más ♡']];
 c.postCreditos={imagen:amb('horizonte'),etiqueta:'NUESTRA HISTORIA CONTINÚA',texto:'Todavía nos quedan muchos capítulos por escribir, mi amor.',anuncio:'Por muchos abriles más',subtitulo:'Tú, yo y el amor por nuestra familia.',sorpresa:'Siempre contigo. Violeta Verónica. ♡'};
})();

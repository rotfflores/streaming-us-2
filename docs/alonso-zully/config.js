/* Edición independiente. Las dedicatorias se inspiran en los títulos recibidos. */
(() => {
const M=window.CLIENT_MEDIA;
const texts=[
 ['El recuerdo de una pregunta que llevaba todo mi amor.',[
  'Zully, hay preguntas que guardan una vida entera de ilusión. Esta fue la mía.',
  'Pedirte matrimonio fue darle palabras a mi deseo de compartir el camino contigo.',
  'Hoy quiero volver a mirar ese instante con el mismo cariño con el que lo guardo.',
  'Más allá de aquel día, quiero que mi amor se vea en cómo te escucho y te cuido.',
  'Me ilusiona seguir construyendo contigo una vida con espacio para los sueños de los dos.',
  'Este recuerdo abre nuestra historia porque todavía tengo muchas ganas de elegirte. — Alonso'
 ]],
 ['Un detalle para celebrar tu vida y decirte cuánto significas para mí.',[
  'Hay regalos que intentan decir lo que a veces nos cuesta poner en palabras.',
  'Este cumpleaños tiene su propio lugar entre los recuerdos que quiero guardar contigo.',
  'Celebrarte también es agradecer que formas parte de mi vida, Zully.',
  'Quiero que nunca nos falten motivos para tener detalles y hacernos sentir queridos.',
  'Mi deseo es seguir encontrando maneras de sorprenderte y dedicarte tiempo.',
  'Que este recuerdo te devuelva un poquito del cariño con el que lo guardé.'
 ]],
 ['Nuestro primer recuerdo compartiendo la cocina.',[
  'Nuestra primera vez cocinando juntos merece su propia película.',
  'Qué bonito encontrar un recuerdo de nosotros en algo tan sencillo como preparar comida.',
  'Compartir la cocina también puede ser una forma de aprender a hacer equipo.',
  'No necesito una ocasión enorme para querer pasar tiempo contigo.',
  'Me ilusiona que todavía nos queden recetas por probar y ratitos por compartir.',
  'Zully, quiero seguir haciendo de lo cotidiano un lugar para nosotros.'
 ]],
 ['La emoción de guardar una primera vez entre nuestros recuerdos.',[
  'Hay primeras veces que dan ganas de conservar completas, como este viaje en avión.',
  'Zully, me gusta que este recuerdo forme parte del álbum de nuestra historia.',
  'Mirar estas imágenes es volver a detenernos en una experiencia que tuvo su propia emoción.',
  'Gracias por compartir conmigo momentos que merecen quedarse.',
  'Deseo que vengan nuevos destinos y oportunidades de descubrir algo juntos.',
  'Que nunca perdamos las ganas de mirar el mundo con ilusión y de compartir el camino.'
 ]],
 ['Cancún en nuestras fotos; tú en mis recuerdos favoritos.',[
  'Nuestras vacaciones en Cancún tienen un lugar especial en esta historia.',
  'Me gusta poder regresar a ese viaje a través de nuestras fotografías.',
  'Cada imagen guarda un instante que ahora podemos volver a mirar sin prisas.',
  'Zully, gracias por compartir conmigo este pedacito del mundo.',
  'Quiero seguir haciendo espacio para salir de la rutina y disfrutar de nosotros.',
  'Por Cancún, por lo vivido y por los viajes que todavía podemos imaginar.'
 ]],
 ['Un paseo por Xcaret que se queda en nuestra colección de momentos.',[
  'Nuestro paseo por Xcaret merece una pausa y una pantalla completa.',
  'Hay lugares que terminan unidos a la persona con quien los compartimos.',
  'Hoy vuelvo a estas imágenes y agradezco poder guardar este recuerdo contigo.',
  'Me gusta que nuestra historia también tenga espacio para explorar y descubrir.',
  'Deseo que sigamos encontrando planes que nos emocionen a los dos.',
  'Zully, qué bonito que este capítulo de Xcaret lleve nuestros nombres.'
 ]],
 ['Salir juntos y darle un lugar a los momentos sencillos.',[
  'Un paseo también puede convertirse en un recuerdo al que queramos volver.',
  'A veces lo más bonito de un plan es tener tiempo para compartirlo contigo.',
  'Estas fotos me recuerdan que nuestra historia vive en muchos tipos de momentos.',
  'En los viajes grandes y en esas salidas que merecen guardarse por ser nuestras.',
  'Quiero seguir reservando tiempo para caminar, conversar y estar cerca de ti.',
  'Zully, que siempre encontremos un ratito para salir al encuentro de nosotros.'
 ]],
 ['Nuestra acampada en el Pico de Orizaba, un recuerdo de aventura.',[
  'Acampar en el Pico de Orizaba tiene su propio capítulo en nuestro mapa.',
  'Me gusta que también tengamos recuerdos de salir a la naturaleza juntos.',
  'Estas imágenes guardan nuestra acampada y lo que ese viaje significa para nosotros.',
  'Gracias por formar parte de una historia que también se escribe fuera de casa.',
  'Deseo que sigamos encontrando aventuras que podamos disfrutar a nuestro ritmo.',
  'Por esta acampada y por los caminos que todavía nos gustaría compartir, Zully.'
 ]],
 ['La primera perrija y el cariño que también tiene patitas.',[
  'Nuestra primera perrija merece un lugar muy especial en esta colección.',
  'Hay cariños que llegan con patitas y se vuelven parte de nuestros recuerdos.',
  'Estas fotos guardan un capítulo de nuestra familia que quiero mirar con ternura.',
  'Zully, qué bonito compartir también el amor y el cuidado por nuestros perrijos.',
  'Deseo que nunca nos falten tiempo, paciencia y ganas de cuidarlos.',
  'A nuestra primera perrija: aquí también eres protagonista.'
 ]],
 ['Volver a Boscana a través de nuestras fotografías.',[
  'Nuestro paseo en Boscana se queda aquí, entre los capítulos de nosotros.',
  'Cada salida compartida tiene algo que merece detenerse en una fotografía.',
  'Me gusta mirar estas imágenes y darles otra vez el tiempo que merecen.',
  'Gracias por compartir conmigo este paseo y por estar en estos recuerdos, Zully.',
  'Quiero que sigamos buscando planes para disfrutar juntos, sin prisas.',
  'Que Boscana sea uno de muchos lugares a los que podamos regresar con cariño.'
 ]],
 ['Otro destino en el mapa de nuestra historia: Mérida.',[
  'Mérida tiene su lugar en nuestro álbum de vacaciones.',
  'Un viaje se vuelve más nuestro con cada imagen que decidimos guardar.',
  'Hoy quise reunir estas fotografías para volver a compartirlas contigo.',
  'Zully, gracias por acompañarme también en este capítulo de nuestra historia.',
  'Deseo que podamos seguir conociendo lugares y disfrutando del tiempo juntos.',
  'Por Mérida y por ese próximo destino que todavía podemos elegir entre los dos.'
 ]],
 ['Nuestros cafés: una forma sencilla de hacernos espacio.',[
  'No todo lo que merece una película necesita un destino lejano.',
  'Nuestros cafés también son parte de las cosas que quiero guardar contigo.',
  'Me gusta encontrar un recuerdo de nosotros en una mesa y una pausa compartida.',
  'Quiero seguir teniendo tiempo para preguntarte cómo estás y escuchar lo que me cuentes.',
  'Ojalá nunca nos falte un momento para un café, una conversación y un poco de calma.',
  'Zully, también en los planes sencillos quiero seguir eligiendo estar contigo.'
 ]],
 ['Nuestra familia de patitas también tiene su propia película.',[
  'Perrijos y nietos: un título lleno de ternura para este capítulo de nosotros.',
  'Quise que todos estos recuerdos tuvieran su lugar en la pantalla.',
  'Hay mucho cariño en volver a mirar las fotos de nuestra familia de patitas.',
  'Gracias por compartir conmigo esta forma de querer y de cuidar, Zully.',
  'Deseo que sigamos creando recuerdos con ellos y dando tiempo a lo que amamos.',
  'Esta historia también es suya: por los perrijos, los nietos y el amor que compartimos.'
 ]]
];
const seriesStories=[
 ['Lo que siento por ti','Una pausa para decirte cuánto significa compartir la vida contigo.',0,[
  'Zully, quise que estas imágenes también llevaran las palabras que siento por ti.',
  'Te amo y valoro que compartamos tantos recuerdos distintos.',
  'Desde una pregunta de matrimonio hasta una pausa para un café, hay mucho de nosotros aquí.',
  'Quiero que puedas volver a este regalo y sentir el cariño con el que lo preparé.',
  'Y quiero seguir encontrando maneras de demostrártelo fuera de la pantalla.'
 ]],
 ['Elegirte en los días sencillos','Propósitos para que el cariño se note cada día.',11,[
  'Nuestro amor también merece tiempo en los días más sencillos.',
  'Deseo escucharte con atención y preguntarte qué necesitas.',
  'Compartir una comida, una conversación o un paseo que disfrutemos juntos.',
  'Hacer del respeto y la paciencia una parte de nuestra manera de querernos.',
  'Zully, quiero que elegirte se note en mis palabras y en mis pequeños gestos.'
 ]],
 ['Gracias por estos recuerdos','Un agradecimiento por las páginas que compartimos.',4,[
  'Gracias por estar en esta colección de momentos que hoy puedo volver a mirar.',
  'Por compartir viajes, primeras veces, paseos y ratitos de café.',
  'Por formar parte de una historia que también tiene una familia de patitas.',
  'Quiero valorar lo vivido sin dar por hecho el tiempo que compartimos.',
  'Zully, este regalo también es un gracias por cada recuerdo que lleva nuestros nombres.'
 ]],
 ['Cuidar lo que tenemos','Deseos para seguir aprendiendo a hacer equipo.',8,[
  'Lo que compartimos merece atención, cariño y tiempo.',
  'Deseo que podamos decirnos lo que sentimos con confianza y respeto.',
  'Escuchar tus ideas, compartirte las mías y construir acuerdos juntos.',
  'Aprender a cuidarnos y cuidar también de nuestros perrijos.',
  'No quiero dejar el agradecimiento guardado: quiero encontrar formas de hacerlo visible.'
 ]],
 ['El próximo destino','Sueños abiertos para elegir juntos nuevas aventuras.',10,[
  'Nuestro mapa ya tiene recuerdos de Cancún, Xcaret, Boscana y Mérida.',
  'También tiene una acampada en el Pico de Orizaba y esa primera vez en avión.',
  'Me ilusiona imaginar qué lugar nos gustaría conocer después.',
  'Quiero escuchar tus ideas y encontrar un próximo plan que nos emocione a los dos.',
  'No hace falta decidirlo hoy, Zully. Me alegra poder soñarlo contigo.'
 ]],
 ['Una vida por seguir escribiendo','El futuro como una invitación a seguir compartiendo.',0,[
  'Esta pantalla reúne recuerdos; la próxima página todavía está por escribirse.',
  'Deseo que en ella haya espacio para tus metas y para las mías.',
  'Para nuevos viajes, más cafés y muchos momentos con nuestros perrijos.',
  'Para apoyarnos, seguir conociéndonos y cuidar la manera en que nos queremos.',
  'Zully, quiero seguir construyendo contigo una historia a la que nos dé alegría volver. — Alonso'
 ]]
];
const photo=i=>M.fotos[i%M.fotos.length].ruta;
const sound=i=>({musica:M.canciones[i%8].src,cancion:M.canciones[i%8].titulo});
const games=[
 {tipo:'quiz',titulo:'Nuestra historia',pregunta:'¿Quiénes protagonizan estas películas?',opciones:['Alonso y Zully','Cancún y Mérida','El café y las maletas'],correcta:0},
 {tipo:'completar',titulo:'Algo que nos une',frase:'Quiero seguir creando ___ contigo.',opciones:['recuerdos','distancias','olvidos'],correcta:0},
 {tipo:'codigo',titulo:'El nombre más bonito',modo:'texto',pregunta:'¿Para quién preparó Alonso este regalo?',respuestas:['Zully','Zully Hernández'],pista:'Su nombre aparece en la portada.'},
 {tipo:'ordenar',titulo:'El orden de nuestras películas',eventos:['El día que le pedí matrimonio','Un regalo de cumpleaños','Nuestra primera vez cocinando juntos','Su primera vez en avión']},
 {tipo:'memory',titulo:'Parejas de recuerdos',pares:[0,6,19,32,47,70].map(photo)},
 {tipo:'puzzle',titulo:'Una foto de nosotros',imagen:'assets/fotos/puzzle.webp'},
 {tipo:'sopa',titulo:'Palabras de nuestra historia',palabras:['ALONSO','ZULLY','AMOR','CAFE','VIAJES','PERRIJOS','JUNTOS']}
];
const assigned={2:games[0],4:games[1],6:games[2],8:games[3],10:games[4],11:games[5],15:games[6]};
function makeEpisode(titulo,descripcion,group,lines,track,index){
 const entries=group.medios||group.fotos;
 const n=Math.max(entries.length,entries.some(f=>f.duracion)?entries.length:lines.length);
 const escenas=Array.from({length:n},(_,j)=>{
  const f=entries[j%entries.length];return {img:f.ruta,...(f.poster?{poster:f.poster}:{}),duracion:f.duracion||8,texto:f.duracion?lines:[lines[Math.min(lines.length-1,Math.floor(j*lines.length/n))]]};
 });
 return {titulo,descripcion,...sound(track),duracion:6+escenas.reduce((n,s)=>n+s.duracion,0),escenas,interaccion:assigned[index]||null,recompensa:''};
}
const temporadas=M.carpetas.map((g,i)=>({num:i,tipo:'pelicula',titulo:g.titulo,sinopsis:texts[i][0],anio:'',clasificacion:'TP',top10:i<10,imagen:g.medios[0].portada,...sound(i),creditos:[['De','Alonso Camacho'],['Para','Zully Hernández']],episodios:[makeEpisode(g.titulo,texts[i][0],g,texts[i][1],i,i)]}));
const eps=seriesStories.map(([title,desc,folder,lines],i)=>{
 const fotos=M.carpetas[folder].fotos.length?M.carpetas[folder].fotos:M.carpetas[4].fotos;
 return makeEpisode(title,desc,{fotos:fotos.slice(0,6)},lines,i+2,13+i);
});
['Lo que siento contigo','Gracias por nuestra historia','Todo lo que viene'].forEach((titulo,i)=>temporadas.push({num:13+i,tipo:'serie',titulo,anio:'',clasificacion:'TP',imagen:M.carpetas[seriesStories[i*2][2]].medios[0].portada,sinopsis:seriesStories[i*2][1]+' '+seriesStories[i*2+1][1],...sound(i+2),episodios:eps.slice(i*2,i*2+2)}));
const carta=`Zully:

Quise regalarte un lugar donde nuestros recuerdos pudieran encontrarse. Una pantalla para volver al día que te pedí matrimonio, al regalo de cumpleaños, a nuestra primera vez cocinando juntos y a esa primera vez en avión.

Aquí también están Cancún, Xcaret, nuestros paseos, la acampada en el Pico de Orizaba, Boscana y Mérida. Y están nuestros cafés, porque esos momentos sencillos también merecen un espacio en nuestra historia.

Gracias por compartir conmigo todo esto. Por ser parte de las fotos y los videos que hoy me hacen detenerme y mirar con cariño lo que hemos vivido. Gracias también por el amor que compartimos con nuestra primera perrija, los perrijos y los nietos de patitas.

Te amo, Zully. Quiero que ese amor se note en el tiempo que te dedico, en cómo te escucho y en las pequeñas decisiones con las que cuidamos lo nuestro. Deseo seguir conociendo tus ilusiones, apoyarte en tus metas y compartirte lo que sueño.

Me ilusiona pensar en nuevos viajes, en más comidas hechas juntos y en tantos cafés que todavía podemos compartir. No quiero escribir el futuro por los dos: quiero escucharte y descubrir contigo qué queremos construir.

Este regalo guarda lo que ya es nuestro y deja abierta la puerta a todo lo que viene. Ojalá cada vez que vuelvas a verlo encuentres una razón para sonreír y sientas cuánto significas para mí.

Con todo mi amor,
Alonso Camacho`;
window.TDN={
 pareja:{nombreA:'Alonso Camacho',nombreB:'Zully Hernández',apodos:['Zully'],apodo:'Zully',fechaInicio:'',anioInicio:'',anios:'',aniosManual:0,fechaCodigo:'',aniversario:'',ciudad:'',primeraCita:'',cancion:'',artista:'',viajes:['Cancún','Xcaret','Pico de Orizaba','Boscana','Mérida'],dificiles:[],anecdota:'',gustosB:[],suenos:['Seguir creando recuerdos','Escucharnos y acompañarnos','Elegir juntos nuestro próximo destino'],mensajeFinal:carta},
 fotos:{hero:'assets/fotos/hero.webp',perfilB:'assets/fotos/perfil-zully.webp',perfilPareja:'assets/fotos/perfil-pareja.webp',t0:photo(0),t1:photo(5),t2:photo(10),t3:photo(15),t4:photo(20),t5:photo(25),t6:photo(30),t7:photo(35),final:'assets/fotos/hero.webp',puzzle:'assets/fotos/puzzle.webp',puzzle2:'',postCreditos:photo(90)},
 media:{intro:'assets/audio/intro.mp3',temporadas:M.canciones.map(t=>t.src),canciones:M.canciones.map(t=>t.titulo),musica:'',videoFinal:'assets/video/montaje-final.mp4',audioRemitente:''},
 acceso:{password:'amor',demo:false,pistaPassword:'Lo que sentimos y lo que une esta historia. Cuatro letras.',estreno:''},
 notificacion:{whatsapp:'',email:'',endpoint:''},
 sitio:{url:'https://streaming-us-2.rotfstudio.com/alonso-zully/',titulo:'Alonso & Zully',heroTop:'De Alonso, para Zully',heroTag:'NUESTRA HISTORIA',coincidencia:100,clasificacion:'TP',clasificacionTexto:'Amor, viajes y una familia de patitas',sinopsis:'Una propuesta, primeras veces, Cancún, Mérida, cafés y una familia de patitas. Zully, estos 13 recuerdos tienen su propia película, y todo lo que siento por ti tiene su lugar aquí.',generos:['Romance','Aventuras juntos','Nuestra historia'],filaRecomendada:'Más recuerdos para volver a mirarnos'},
 temporadas,
 extras:[{titulo:'La propuesta',img:M.carpetas[0].medios[0].poster,texto:'El recuerdo de una pregunta llena de ilusión.'},{titulo:'Nuestra cocina',img:photo(0),texto:'Las primeras veces también pueden tener sabor a nosotros.'},{titulo:'Nuestros cafés',img:M.carpetas[11].fotos[0].ruta,texto:'Una pausa para escucharnos y estar cerca.'},{titulo:'Nuestra familia de patitas',img:M.carpetas[12].fotos[0].ruta,texto:'Perrijos y nietos también son protagonistas.'}],
 final:{titulo:'Zully, esta carta es para ti',imagen:'assets/fotos/hero.webp',sinopsis:'Unas palabras de Alonso y un espacio para escribir lo que tú sientes.',preguntas:['¿Qué sentiste al volver a ver el día de la propuesta?','¿Qué viaje o primera vez te gustaría volver a vivir conmigo?','¿Qué recuerdo de nuestros cafés o nuestros perrijos te hace sonreír?','¿Qué sueño o próximo destino te gustaría que eligiéramos juntos?','¿Qué te gustaría decirme después de ver nuestra historia?'],carta:()=>carta},
 creditos:[['Con todo mi amor','Alonso Camacho'],['Para','Zully Hernández'],['Protagonistas','Alonso y Zully'],['Participación especial','Nuestros perrijos y nietos de patitas'],['Recuerdos','Nuestras fotos y videos'],['Banda sonora',M.canciones.map(t=>t.titulo).join(' · ')],['','Gracias por compartir el camino conmigo.']],
 postCreditos:{imagen:M.carpetas[12].fotos[0].ruta,etiqueta:'CONTINUARÁ',texto:'Zully, todavía nos quedan muchos recuerdos por crear…',anuncio:'La próxima página, contigo',subtitulo:'Nuevos destinos, más cafés y tiempo para nosotros.',sorpresa:'Te amo. Con todo mi cariño, Alonso.'}
};
})();

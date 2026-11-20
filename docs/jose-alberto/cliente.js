/* Pedido independiente · Jose Alberto · Amistad y ascenso. */
(() => {
 const c=window.TDN, B='Jose Alberto', A='Tu amistad';
 const foto=n=>`assets/fotos/foto-${String(n).padStart(2,'0')}.webp`;
 const portada=n=>`assets/fotos/portada-${String(n).padStart(2,'0')}.webp`;
 const ambiente=n=>`assets/ambiente/${n}.webp`;
 const sunset={img:'assets/ambiente/atardecer.mp4',poster:ambiente('atardecer')};
 const olas={img:'assets/ambiente/olas.mp4',poster:ambiente('olas')};
 const tracks=[['You’ve Got a Friend — Carole King','youve-got-a-friend'],['Count on Me — Bruno Mars','count-on-me'],['Fix You — Coldplay','fix-you'],['You’ve Got a Friend in Me — Randy Newman','friend-in-me'],['I’ll Be There for You — The Rembrandts','ill-be-there']].map(([titulo,slug])=>({titulo,src:`assets/audio/${slug}.mp3`}));
 const historia='Nos conocimos hace seis años, en la Dirección de Materiales de Guerra. Los dos trabajamos en el Ejército y, con el tiempo, empezamos a llevarnos bien. Te admiro por tu responsabilidad, tu capacidad y tu buen corazón. Has pasado por distintas áreas y siempre te has involucrado: para mí, eso habla de un buen líder. Gracias por los consejos, por la confianza y por las vivencias lindas que guardo con respeto. Hoy quiero felicitarte por tu ascenso a Teniente Coronel y desearte todo lo mejor.';
 Object.assign(c.pareja,{nombreA:A,nombreB:B,nombreCompletoA:A,nombreCompletoB:B,apodos:['Alberto'],apodo:'Alberto',fechaInicio:'',anioInicio:'',anios:6,aniosManual:6,fechaCodigo:'',ciudad:'',primeraCita:'',cancion:tracks[0].titulo,artista:'Carole King',viajes:[],dificiles:[],anecdota:'Nos conocimos en la Dirección de Materiales de Guerra.',culpableAnecdota:2,gustosB:[],suenos:['Fortaleza para tus nuevas responsabilidades','Sabiduría para guiar a tu equipo','Bienestar en esta nueva etapa'],mensajeFinal:historia});
 Object.assign(c.fotos,{hero:'assets/fotos/hero.webp',perfilB:foto(2),perfilPareja:foto(2),t0:foto(1),t1:foto(2),t2:foto(3),t3:foto(4),t4:foto(5),t5:ambiente('horizonte'),t6:foto(3),t7:foto(5),final:portada(1),puzzle:foto(1),puzzle2:foto(3),postCreditos:foto(5)});
 Object.assign(c.media,{intro:'assets/audio/intro.mp3',temporadas:tracks.map(t=>t.src),canciones:tracks.map(t=>t.titulo),musica:'',videoFinal:'assets/video/para-jose-alberto.mp4',audioRemitente:''});
 Object.assign(c.acceso,{demo:false,password:'5c51155d02e12c6cc165cbd5b99c013c94ab81a65c9cd0a637ae2e48c95bf822',pistaPassword:'Es una clave exclusiva de este regalo. Pídesela a quien te compartió el enlace y respeta mayúsculas y símbolos.',estreno:''});
 Object.assign(c.notificacion,{whatsapp:'525572926525',email:'',endpoint:''});
 Object.assign(c.sitio,{titulo:'Destino compartido, historias distintas',url:'https://streaming-us-2.rotfstudio.com/jose-alberto/index.html?compartir=1',coincidencia:100,clasificacion:'TP',clasificacionTexto:'Una amistad que deja huella',heroTag:'EXCLUSIVO PARA JOSE ALBERTO',heroTop:'20 de noviembre · Un ascenso merecido',sinopsis:'Seis años desde aquel encuentro en la Dirección de Materiales de Guerra. Una dedicatoria de amistad, gratitud y admiración para celebrar tu ascenso a Teniente Coronel.',generos:['Amistad','Gratitud','Teniente Coronel'],filaRecomendada:'Una trayectoria que merece celebrarse'});
 const scene=(m,texto)=>typeof m==='number'?{img:foto(m),poster:foto(m),texto}:typeof m==='string'?{img:ambiente(m),poster:ambiente(m),texto}:{...m,texto};
 const scenes=rows=>rows.map(([m,...t])=>scene(m,t));
 const film=(num,titulo,n,track,sinopsis,rows)=>({num,tipo:'pelicula',titulo,anio:2026,clasificacion:'TP',imagen:portada(n),musica:track.src,cancion:track.titulo,top10:num===0,sinopsis,creditos:[['Para',B],['Con respeto y cariño','De quien admira tu camino'],['Celebramos','Tu ascenso a Teniente Coronel'],['Banda sonora',track.titulo]],episodios:[{titulo,duracion:88,descripcion:sinopsis,escenas:scenes(rows),interaccion:null,recompensa:''}]});
 const films=[
  film(0,'Seis años de una buena amistad',1,tracks[3],'Un encuentro en la Dirección de Materiales de Guerra se convirtió en confianza, consejos y recuerdos que merecen su propio lugar.',[
   [1,'Alberto, hace seis años','nuestros caminos se encontraron.'],
   ['horizonte','Fue en la Dirección','de Materiales de Guerra.'],
   [2,'Los dos trabajamos en el Ejército.','Ahí empezamos a llevarnos bien.'],
   [3,'Con el tiempo fui conociendo','a la persona detrás del cargo.'],
   [4,'Una persona responsable,','capaz y de buen corazón.'],
   [sunset,'Hay encuentros que dejan huella','sin necesitar demasiadas palabras.'],
   [5,'Guardo los consejos que me diste','y la confianza que compartimos.'],
   ['cielo','También esas vivencias lindas','que hoy recuerdo con respeto.'],
   [2,'Esta dedicatoria nace de la gratitud','y de la admiración que te tengo.'],
   [1,'Gracias por lo compartido, Alberto.','Nuestra amistad tiene su propia historia.']]),
  film(1,'El líder que admiro',2,tracks[1],'La capacidad de involucrarse, la responsabilidad y el buen corazón: motivos para admirar a Alberto como jefe y como persona.',[
   [2,'Hay muchas maneras de ejercer un cargo.','La tuya me ha dejado aprendizajes.'],
   [3,'Has desempeñado responsabilidades','en distintas áreas.'],
   ['horizonte','Y en cada una has sabido involucrarte,','poner atención y comprometerte.'],
   [4,'He visto en ti a una persona capaz,','responsable con lo que le toca hacer.'],
   [1,'Te tengo mucha admiración como jefe.','Quería que lo supieras.'],
   [olas,'Para mí, un buen líder también deja','algo valioso en quienes lo rodean.'],
   [5,'Tus consejos tienen un lugar','en lo que agradezco de estos años.'],
   ['cielo','Admiro tu capacidad.','Y también tu buen corazón.'],
   [2,'Deseo que esa manera de ser','te acompañe en las nuevas encomiendas.'],
   [3,'Que sigas guiando con sabiduría,','con la humanidad que reconozco en ti.']]),
  film(2,'Todo lo que hay detrás',3,tracks[2],'Detrás del ascenso hay esfuerzo, disciplina, constancia y sacrificios personales. Esta película reconoce el camino hasta ese logro.',[
   [3,'Un ascenso se anuncia en un día.','El camino se construye durante años.'],
   ['horizonte','Hoy quiero reconocer','todo lo que hay detrás de este logro.'],
   [1,'El esfuerzo que has puesto','día tras día en tu carrera.'],
   [4,'La constancia para continuar','y la disciplina para cumplir.'],
   [sunset,'También los sacrificios personales','que han acompañado tu dedicación.'],
   [2,'Sé que llegar hasta aquí','ha exigido mucho de ti.'],
   ['cielo','Por eso me alegra sinceramente','verte alcanzar este reconocimiento.'],
   [5,'Tu ascenso es fruto','de años de entrega a tu carrera.'],
   [3,'Ojalá puedas hacer una pausa','y sentir orgullo por lo conseguido.'],
   [1,'Te mereces este reconocimiento,','Alberto. Y mucho más.']]),
  film(3,'Mi Teniente Coronel',5,tracks[4],'20 de noviembre: una felicitación por el ascenso y los mejores deseos para las responsabilidades que comienzan.',[
   [5,'20 de noviembre.','Una nueva etapa en tu trayectoria.'],
   [1,'¡Muchas felicidades','por tu ascenso a Teniente Coronel!'],
   [2,'Me alegra profundamente por ti.','Quiero que te llegue esta felicitación.'],
   ['horizonte','Te deseo el mayor de los éxitos','en tus nuevas responsabilidades.'],
   [3,'Que tengas fortaleza','para afrontar cada encomienda.'],
   [4,'Sabiduría para tomar decisiones','y para acompañar a tu equipo.'],
   [olas,'Que también encuentres bienestar','en medio de todo lo que viene.'],
   [5,'Deseo que te vaya bien,','con sinceridad y con respeto.'],
   ['cielo','Que esta nueva etapa te traiga','motivos para sentirte orgulloso.'],
   [1,'¡Muchas felicidades,','mi Teniente Coronel!']])
 ];
 const ep=(titulo,descripcion,track,rows)=>({titulo,descripcion,duracion:66,musica:track.src,cancion:track.titulo,escenas:scenes(rows),interaccion:null,recompensa:''});
 const serie={num:4,tipo:'serie',titulo:'Lo que guardo con respeto',anio:2026,clasificacion:'TP',imagen:portada(4),musica:tracks[0].src,cancion:tracks[0].titulo,sinopsis:'Tres episodios para agradecer los consejos, honrar lo compartido y desearte lo mejor en tu nueva etapa.',creditos:[['Para',B],['Una dedicatoria de','Amistad, respeto y gratitud']],episodios:[
  ep('Gracias por tus consejos','Las palabras y los aprendizajes que se quedan.',tracks[0],[
   [2,'Hay consejos que se quedan','mucho después de una conversación.'],
   [3,'Los tuyos forman parte','de lo que agradezco de conocerte.'],
   ['cielo','Te considero una persona especial','por lo que has aportado a mi vida.'],
   [4,'Gracias por la confianza','que pudimos compartir.'],
   [sunset,'Y por los momentos en los que','pudimos apoyarnos mutuamente.'],
   [1,'Hoy quería decirte gracias, Alberto.','Con respeto y con cariño.']]),
  ep('Los recuerdos que cuido','Una mirada serena a las vivencias lindas, sin reproches.',tracks[3],[
   [4,'Guardaré con respeto','el tiempo que compartimos.'],
   [5,'Las confianzas que nos dimos,','los momentos de apoyo.'],
   [2,'También las vivencias lindas','que tienen un lugar en mi memoria.'],
   ['horizonte','No guardo rencor.','Solo deseo que todo te salga bien.'],
   [olas,'Hay gratitud en esta dedicatoria','y sinceridad en mis buenos deseos.'],
   [3,'Que lo valioso de lo compartido','se quede acompañado de respeto.']]),
  ep('Que todo te salga bien','Fortaleza, sabiduría y buenos deseos para lo que viene.',tracks[1],[
   [5,'Lo que viene trae','nuevas responsabilidades.'],
   [1,'Te deseo fortaleza para cumplirlas','sin perder lo que te hace ser tú.'],
   ['cielo','Que encuentres claridad','en las decisiones importantes.'],
   [3,'Que tus esfuerzos sigan encontrando','motivos y reconocimiento.'],
   [sunset,'Que tengas toda la suerte','para cumplir cada encomienda.'],
   [2,'Alberto, te mereces lo mejor.','¡Felicidades, mi Teniente Coronel!']])
 ]};
 c.temporadas.splice(0,c.temporadas.length,...films,serie);
 c.extras=[{titulo:'Donde comenzó la amistad',img:foto(2),texto:historia},{titulo:'Admiración por tu liderazgo',img:foto(3),texto:'Tu capacidad, tu responsabilidad y la manera de involucrarte en cada área son motivos de admiración.'},{titulo:'Gracias por tus consejos',img:foto(4),texto:'Por las confianzas, el apoyo y los aprendizajes que guardo con respeto.'},{titulo:'Un ascenso merecido',img:foto(5),texto:'20 de noviembre. Felicidades por tu ascenso a Teniente Coronel. Que tengas fortaleza y sabiduría en esta nueva etapa.'}];
 const carta=[
  'Alberto:',
  'Quiero felicitarte profundamente por tu ascenso a Teniente Coronel. Sé perfectamente todo el esfuerzo, la constancia, la disciplina y los muchísimos sacrificios personales que has tenido que hacer día tras día para alcanzar este merecido logro, fruto de años de dedicación a tu carrera.',
  'Hace seis años nos conocimos en la Dirección de Materiales de Guerra. Con el tiempo empezamos a llevarnos bien y pude reconocer en ti a una persona responsable, muy capaz y de buen corazón. Te admiro como jefe, por la manera en que te has involucrado en las distintas áreas en las que has estado y por tu liderazgo.',
  'Gracias por los consejos que me has dado, por las confianzas y por esas vivencias lindas que guardo en mi memoria. Te considero una persona especial para mí y quería hacerte llegar un presente que hablara desde esa gratitud.',
  'Quiero decirte que me alegra sinceramente por ti. Guardaré con respeto el tiempo que compartimos, las confianzas que nos dimos y los momentos en los que pudimos apoyarnos mutuamente. No guardo rencor, solo deseo que todo te salga bien.',
  'Te deseo el mayor de los éxitos en cada una de tus nuevas responsabilidades y en tu nueva etapa. Que tengas la fortaleza, la sabiduría y toda la suerte para cumplir cada una de tus encomiendas. Te mereces este reconocimiento y mucho más.',
  '¡Muchas felicidades, mi Teniente Coronel!',
  'Con respeto, cariño y admiración.'
 ].join('\n\n');
 Object.assign(c.final,{titulo:'Alberto, unas palabras para ti',imagen:portada(1),sinopsis:'Una carta de felicitación y un espacio para expresar lo que te deja esta dedicatoria.',preguntas:['¿Qué sentiste al recibir esta dedicatoria?','¿Qué recuerdo de estos seis años guardas con más cariño?','¿Qué aprendizaje te ha acompañado en tu trayectoria?','¿Qué significa para ti este ascenso a Teniente Coronel?','¿Qué deseas para esta nueva etapa?'],carta:()=>carta});
 c.creditos=[['Para',B],['Celebramos','Tu ascenso a Teniente Coronel'],['20 de noviembre','Un reconocimiento merecido'],['Nuestra historia','Seis años desde Materiales de Guerra'],['Lo que permanece','Respeto, gratitud y admiración'],['Banda sonora',tracks.map(t=>t.titulo).join(' · ')],['','Que todo te salga bien.']];
 c.postCreditos={imagen:foto(5),etiqueta:'UN ÚLTIMO DESEO',texto:'Alberto, que lo mejor de tu camino siga por delante.',anuncio:'¡Felicidades, mi Teniente Coronel!',subtitulo:'Por tu esfuerzo, tu constancia y tu buen corazón.',sorpresa:'Con respeto, cariño y admiración.'};
})();

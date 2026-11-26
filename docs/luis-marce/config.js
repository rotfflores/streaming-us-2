/* Luis Bernal → Marce Montoya. Nuestro Capítulo ($79).
   Cuatro películas, una serie de tres episodios y exactamente un memorama.
   No se proporcionó fecha de aniversario ni hechos biográficos adicionales. */
window.TDN = (() => {
  const P = {
    nombreA: "Luis Bernal", nombreB: "Marce Montoya", apodos: ["Marce"], apodo: "Marce",
    fechaInicio: "", anioInicio: 2026, anios: "casi 11", aniosManual: 0, fechaCodigo: "",
    ciudad: "", primeraCita: "", cancion: "A Ella", artista: "El Poder del Norte",
    viajes: [], dificiles: [], anecdota: "", culpableAnecdota: 2, gustosB: [],
    suenos: ["Seguir compartiendo el camino", "Crear nuevos recuerdos juntos", "Cuidar lo que hemos construido"],
    mensajeFinal: "Marce, casi 11 años no caben en una pantalla. Pero quería detenerme un momento y recordarte cuánto significa para mí compartir la vida contigo. Gracias por tu compañía, por el apoyo que me das y por todo lo que hemos ido construyendo. No necesito una fecha especial para decirte que te amo. Me ilusiona pensar en los recuerdos que todavía nos esperan, en las conversaciones que faltan y en todas las veces que volveremos a elegirnos. Esta historia lleva tu nombre porque mi forma de mirar la vida también lleva algo de ti. Con todo mi amor, Luis."
  };
  const photo = n => `assets/fotos/foto-${String(n).padStart(2,"0")}.webp`;
  const F = {
    hero: "assets/fotos/hero.webp", perfilB: "assets/fotos/perfil-marce.webp", perfilPareja: "assets/fotos/perfil-pareja.webp",
    t0: photo(2), t1: photo(4), t2: photo(7), t3: photo(8), t4: photo(11), t5: photo(14), t6: photo(10), t7: photo(5),
    final: "assets/fotos/final.webp", puzzle: photo(8), puzzle2: "", postCreditos: photo(14)
  };
  const M = {
    intro: "assets/audio/intro.mp3",
    temporadas: ["assets/audio/a-ella-climax.mp3", "assets/audio/marce-mi-companera-climax.mp3", "assets/audio/cant-help-falling-in-love-climax.mp3", "assets/audio/just-the-way-you-are-climax.mp3", "assets/audio/you-climax.mp3"],
    canciones: ["A Ella · El Poder del Norte", "Marce, mi compañera · Canción personalizada", "Can't Help Falling in Love · Elvis Presley", "Just the Way You Are · Bruno Mars", "you! · LANY"],
    musica: "", videoFinal: "assets/video/para-marce.mp4", audioRemitente: ""
  };
  const acceso = {demo:false, cualquierClave:false, password:"marce", pistaPassword:"Tu nombre, en minúsculas", estreno:""};
  const notificacion = {whatsapp:"528117802807", email:"", endpoint:""};
  const sitio = {
    url:new URL("./",location.href).href, coincidencia:100, clasificacion:"TP", clasificacionTexto:"Amor, recuerdos y un camino compartido",
    heroTag:"UNA HISTORIA ORIGINAL", heroTop:"N.º 1 en el corazón de Luis",
    sinopsis:"Marce, esta es una pequeña parte de nuestra historia en casi 11 años. Cuatro películas y una serie para recordar, darte las gracias y seguir imaginando lo que viene juntos.",
    estrenoTexto:"De Luis Bernal para Marce Montoya · Casi 11 años contigo",
    generos:["Romántica", "Recuerdos", "Nuestra historia"], filaRecomendada:"Casi 11 años contigo"
  };
  const S = (n,a,b) => ({img:photo(n),texto:[a,b]});
  const V = (name,a,b) => ({img:`assets/ambiente/${name}.mp4`,poster:`assets/ambiente/${name}.webp`,texto:[a,b]});
  const A = (name,a,b) => ({img:`assets/ambiente/${name}.webp`,texto:[a,b]});
  const son = i => ({musica:M.temporadas[i],cancion:M.canciones[i]});
  const credits = i => [["De",P.nombreA],["Para",P.nombreB],["Nuestra historia","Casi 11 años compartiendo el camino"],["Banda sonora",M.canciones[i]]];
  const movie = (num,titulo,sinopsis,duracion,escenas) => ({num,tipo:"pelicula",titulo,anio:2026,clasificacion:"TP",imagen:`assets/fotos/portada-${num}.webp`,...son(num),top10:true,sinopsis,creditos:credits(num),episodios:[{titulo,duracion,descripcion:sinopsis,escenas}]});
  const temporadas = [
    movie(0,"Casi 11 años contigo","Hay historias que se cuentan con fechas. La nuestra también se cuenta con miradas, compañía y recuerdos. Una película de Luis para Marce, para volver a mirar todo lo que significa estar juntos.",102,[
      S(2,"Marce, casi 11 años…","y todavía hay tanto que quiero decirte."),
      S(1,"Entre una foto y otra","hay una parte de nuestra vida que solo nosotros conocemos."),
      V("olas","No todo lo importante se queda en una fotografía.","Hay momentos que se guardan en la forma de sentir."),
      S(3,"Miro estas imágenes y veo más que el paso del tiempo:","veo la alegría de haberlo compartido contigo."),
      S(6,"Cada versión de nosotros","forma parte de lo que somos hoy."),
      S(5,"Unas veces bastó una sonrisa;","otras, saber que estabas cerca."),
      S(9,"Casi 11 años no caben en una película.","Pero caben en dos palabras: gracias, Marce."),
      V("atardecer","Gracias por recorrer este camino conmigo.","Por darle tu luz a nuestra historia."),
      S(14,"Si pudiera elegir de nuevo a mi compañera,","volvería a buscarte a ti.")
    ]),
    movie(1,"Mi lugar contigo","Una película sobre el apoyo, la compañía y esa paz que se siente al saber que hay alguien con quien caminar. Con la canción especial dedicada a Marce.",221,[
      S(8,"Hay personas que hacen más ligero el camino.","Para mí, tú eres una de ellas, Marce."),
      A("montanas","A veces el día pide más de lo que uno tiene.","Tu compañía me recuerda que puedo seguir."),
      S(7,"No siempre sé decirlo en el momento:","tu apoyo significa mucho para mí."),
      S(4,"Gracias por escuchar, por estar,","por todas esas formas de cuidar que no hacen ruido."),
      V("olas","La tranquilidad también se parece a esto:","a poder ser uno mismo junto a alguien."),
      S(19,"Contigo, una pausa puede ser un recuerdo.","Y una conversación, el mejor lugar del día."),
      S(10,"Tu cariño tiene un sitio en mi vida","que nadie más podría ocupar."),
      S(22,"Mi compañera, mi amor, Marce.","Qué suerte compartir este camino contigo."),
      S(23,"Quiero guardar más imágenes tuyas,","más momentos para volver a sonreír."),
      S(24,"A veces un paseo se queda con nosotros","por la alegría de haberlo compartido."),
      S(25,"El paisaje puede ser hermoso,","pero mi parte favorita es estar contigo."),
      S(26,"Lo bonito de mirar nuestras fotos","es encontrarnos juntos una vez más."),
      S(27,"Que sigan llegando los recuerdos, Marce,","y que nos sigan encontrando de la mano."),
      S(28,"Hay fotos que me devuelven una sonrisa","con solo volver a mirarlas."),
      S(29,"Compartir la alegría contigo","hace que el recuerdo se quede un poco más."),
      S(30,"Entre tantas imágenes,","siempre encuentro una razón para acercarme a ti."),
      S(31,"Esa mirada tuya, Marce,","también tiene un lugar en mis mejores recuerdos."),
      S(26,"Y aquí estamos, juntos una vez más,","sumando momentos a nuestra historia."),
      S(32,"Quiero seguir guardando fotografías contigo,","y viviendo todo lo que pasa entre ellas."),
      S(8,"No necesito esperar una fecha especial:","hoy también quiero decirte cuánto te amo.")
    ]),
    movie(2,"Volvería a elegirte","El tiempo cambia las fotografías y las formas de ver la vida. Esta película celebra lo que sigue importando: encontrar a alguien con quien querer continuar.",90,[
      S(1,"El tiempo pasa, las fotos cambian,","y nosotros seguimos escribiendo nuestra historia."),
      S(2,"Hay algo bonito en mirar atrás:","descubrir cuánto hemos compartido sin darnos cuenta."),
      V("atardecer","El amor se construye también en lo pequeño.","En prestar atención. En hacer espacio. En acompañar."),
      S(6,"No quiero querer solo nuestros mejores recuerdos.","Quiero cuidar también nuestro presente."),
      S(7,"Conocernos a través de los años","es otra manera de seguir encontrándonos."),
      A("luz","No necesito una historia perfecta.","Me importa seguir haciendo bonita la nuestra."),
      S(13,"Y cuando pienso en todo lo que falta por vivir,","me ilusiona que estés tú."),
      S(14,"Ayer, hoy y en lo que viene:","Marce, volvería a elegirte.")
    ]),
    movie(3,"Así, como eres","Una dedicatoria para Marce: su sonrisa, su presencia y esa forma suya de volver especial una imagen. Un recordatorio de que el amor también se dice mirando con atención.",102,[
      S(22,"Esta película tiene una protagonista favorita.","Y, Marce, siempre has sido tú."),
      S(17,"Me gusta verte en nuestras fotografías.","Reconocer tu mirada y esa forma tan tuya de estar."),
      S(18,"Hay sonrisas que dan luz a un recuerdo.","La tuya hace eso en los míos."),
      S(12,"Me gusta la persona que eres,","con todo eso que te hace única."),
      S(15,"Cada imagen guarda un detalle distinto.","Cada una me da un motivo para sonreír."),
      S(16,"Gracias por compartir conmigo","tu tiempo y tu manera de mirar el mundo."),
      S(20,"No necesitas convertirte en alguien más","para ocupar este lugar en mi corazón."),
      S(21,"Quiero seguir descubriendo cosas de ti,","aunque llevemos casi 11 años juntos."),
      S(4,"Así, como eres.","Así te quiero, Marce.")
    ]),
    {
      num:4,tipo:"serie",titulo:"Todavía nos queda",anio:2026,clasificacion:"TP",imagen:"assets/fotos/portada-4.webp",...son(4),top10:true,
      sinopsis:"Tres capítulos sobre los recuerdos que guardamos, las cosas que quiero agradecerte y el futuro que me ilusiona compartir contigo. Porque casi 11 años son una historia, y todavía nos queda mucho por escribir.",creditos:credits(4),
      episodios:[
        {titulo:"Lo que guardamos",duracion:78,descripcion:"Una mirada a nuestras fotografías y a lo que se queda con nosotros.",escenas:[
          S(11,"Algunas fotos guardan el paisaje.","Las nuestras guardan cómo se sintió estar juntos."),
          S(13,"No hace falta recordar cada fecha","para saber que algo valió la pena."),
          V("olas","Hay días que pasan deprisa,","pero dejan algo que dura mucho más."),
          S(17,"Quiero seguir guardando estos instantes:","las sonrisas, las miradas, la compañía."),
          S(18,"Lo mejor de volver a ver nuestras fotos","es reconocer que ahí también estamos hoy."),
          S(14,"Con más recuerdos, con más camino,","y con ganas de seguir compartiéndolo.")
        ]},
        {titulo:"Todo lo que te agradezco",duracion:78,descripcion:"Hay palabras que merecen decirse más seguido. Gracias es una de ellas.",escenas:[
          S(8,"Gracias, Marce,","por lo que hemos vivido y por tu compañía."),
          S(7,"Por ese apoyo que se siente","incluso cuando faltan las palabras."),
          A("luz","Gracias por lo cotidiano,","por esas cosas pequeñas que sostienen lo grande."),
          S(9,"Por regalarle a mi vida","tantos recuerdos que me gusta volver a mirar."),
          S(10,"Gracias por la confianza de ser nosotros,","sin tener que parecer una película perfecta."),
          S(5,"Y por todo lo que no cabe en esta pantalla,","pero llevo conmigo todos los días.")
        ]},
        {titulo:"El siguiente capítulo",duracion:78,descripcion:"No hay un guion cerrado: hay ganas de seguir caminando juntos.",escenas:[
          V("atardecer","Me gusta pensar en lo que viene,","si lo puedo imaginar contigo."),
          S(19,"Quiero más conversaciones sin prisa,","más momentos para nosotros."),
          A("mar","Más recuerdos por crear,","y lugares que algún día podamos descubrir juntos."),
          S(20,"Quiero que sigamos encontrando motivos","para cuidarnos y hacernos sonreír."),
          S(22,"Sin exigirle al futuro un guion perfecto:","con ganas de construirlo, un día a la vez."),
          S(14,"Casi 11 años contigo, Marce.","Y todavía quiero muchos capítulos más.")
        ]}
      ]
    }
  ];
  const extras = [
    {titulo:"La protagonista",img:photo(22),texto:"Marce Montoya. La persona para quien Luis quiso reunir estas imágenes y estas palabras."},
    {titulo:"Nuestros recuerdos",img:photo(11),texto:"22 fotografías de su historia, acompañadas de paisajes para darle espacio a lo que se siente."},
    {titulo:"Cinco canciones",img:photo(8),texto:"A Ella, una canción personalizada para Marce, Can't Help Falling in Love, Just the Way You Are y you!"},
    {titulo:"Fuera de cámara",img:photo(10),texto:"La parte más grande de esta historia vive fuera de una pantalla: en todo lo que solo ustedes conocen."}
  ];
  const final = {
    titulo:"Marce, ahora tú",sinopsis:"Luis puso sus recuerdos y sus palabras. Ahora hay un espacio para los tuyos: lo que más guardas de estos casi 11 años y lo que te ilusiona vivir juntos.",imagen:F.final,
    preguntas:["¿Qué recuerdo de estos casi 11 años te gusta volver a vivir?","¿Qué detalle de nosotros te hace sonreír?","¿Qué te gustaría que cuidáramos siempre de nuestra relación?","¿Qué sueño o plan te ilusiona compartir conmigo?","¿Qué te gustaría decirle hoy a Luis?"],
    carta:r=>`Marce:\n\nLlegaste al final de este catálogo, pero nuestra historia sigue abierta.\n\nQuiero guardar este recuerdo que elegiste: ${r[0]}. Y ese detalle que te hace sonreír: ${r[1]}.\n\nTambién quiero escuchar lo que deseas cuidar de nosotros: ${r[2]}.\n\nMe ilusiona conocer ese siguiente capítulo que imaginas: ${r[3]}.\n\nY estas palabras tuyas merecen su propio lugar en nuestra historia: ${r[4]}.\n\n${P.mensajeFinal}\n\nCon amor,\nLuis Bernal`
  };
  const creditos = [["Un regalo de",P.nombreA],["Para la protagonista de esta historia",P.nombreB],["Tiempo compartido","Casi 11 años"],["Recuerdos","Sus fotografías"],["Banda sonora",M.canciones.join(" · ")],["La mejor parte","Todo lo que todavía nos queda por vivir"],["Con todo mi amor","Luis, para Marce"]];
  const postCreditos = {imagen:F.postCreditos,etiqueta:"UN CAPÍTULO MÁS",texto:"Marce, esta historia sigue contigo.",anuncio:"Continuará…",subtitulo:"Porque todavía nos queda mucho por vivir.",sorpresa:"Te amo. Con amor, Luis."};
  return {pareja:P,fotos:F,media:M,acceso,notificacion,sitio,temporadas,extras,final,creditos,postCreditos,arcades:["memory"]};
})();

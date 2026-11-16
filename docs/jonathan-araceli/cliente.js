(() => {
  document.addEventListener('DOMContentLoaded',()=>{
    if(!document.body.dataset.page||['player','splash','password','profiles'].includes(document.body.dataset.page))return;
    [['canciones.html','♫','Nuestras canciones','16px','#e50914'],['recuerdos.html','▣','Nuestros recuerdos','62px','#303030']].forEach(([href,icon,label,bottom,background])=>{
      const x=document.createElement('a'); x.className='tdn-float';x.href=href;x.setAttribute('aria-label',label);x.innerHTML=`<b>${icon}</b><span>${label}</span>`;
      Object.assign(x.style,{position:'fixed',right:'16px',bottom,zIndex:1000,background,color:'white',padding:'9px 14px',borderRadius:'999px',fontWeight:700,textDecoration:'none',boxShadow:'0 4px 20px #0009',fontSize:'14px'});document.body.append(x);
    });
  });
})();


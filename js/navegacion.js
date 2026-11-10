'use strict';
// Solo gestiona desplegables del menú; no toca el visualizador ni las fotos.
(function(){
  function init(){
    const nav=document.getElementById('tv-main-nav');
    if(!nav) return;
    const groups=Array.from(nav.querySelectorAll('details.tv-nav-group'));
    const hoverDesktop=window.matchMedia('(hover:hover) and (min-width:901px)');
    groups.forEach(group=>{
      // Los elementos <details> cerrados no muestran contenido al pasar el cursor:
      // abrirlos desde JS para reproducir el efecto del ejemplo de referencia.
      group.addEventListener('pointerenter',()=>{if(hoverDesktop.matches)group.open=true;});
      group.addEventListener('pointerleave',()=>{if(hoverDesktop.matches)group.open=false;});
      group.addEventListener('toggle',()=>{
        if(group.open) groups.forEach(other=>{if(other!==group)other.open=false;});
      });
    });
    nav.addEventListener('click',event=>{
      if(event.target.closest('a')) groups.forEach(group=>{group.open=false;});
    });
    document.addEventListener('pointerdown',event=>{
      if(!nav.contains(event.target))groups.forEach(group=>{group.open=false;});
    });
    document.addEventListener('keydown',event=>{
      if(event.key==='Escape'){
        groups.forEach(group=>{group.open=false;});
        const active=document.activeElement;
        if(active&&nav.contains(active)&&typeof active.blur==='function')active.blur();
      }
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();

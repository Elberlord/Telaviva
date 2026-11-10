'use strict';
// Tela Viva v1.9: solo controles táctiles y botón flotante; conserva la lógica de cotización original.
(function(){
  function init(){
    const tv=window.TelaViva||{};
    const quote=document.getElementById('tvMobileQuote');
    if(quote)quote.addEventListener('click',()=>{
      if(typeof tv.quote==='function')tv.quote();
    });

    const select=document.getElementById('sizeSelect');
    if(!select||document.getElementById('tvSizeQuick'))return;
    const group=document.createElement('div');
    group.id='tvSizeQuick';group.className='tv-size-quick';
    group.setAttribute('role','group');group.setAttribute('aria-label','Elegir talla S, M o L');
    const buttons=[];
    for(const size of ['S','M','L']){
      const button=document.createElement('button');
      button.type='button';button.textContent=size;
      button.setAttribute('aria-label','Talla '+size);
      button.addEventListener('click',()=>{
        select.value=size;
        select.dispatchEvent(new Event('change',{bubbles:true}));
        sync();
      });
      group.appendChild(button);buttons.push(button);
    }
    function sync(){
      buttons.forEach(button=>button.setAttribute('aria-pressed',String(button.textContent===select.value)));
    }
    select.insertAdjacentElement('afterend',group);
    select.addEventListener('change',sync);
    const reset=document.getElementById('resetButton');
    if(reset)reset.addEventListener('click',()=>queueMicrotask(sync));
    sync();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();

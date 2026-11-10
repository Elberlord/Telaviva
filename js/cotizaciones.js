'use strict';
(function(TV){
  function makeQuote(){
    const {state}=TV,garment=TV.getGarment(),fabric=TV.getFabric(),color=TV.getColor();
    const photos=TV.getGallery(garment,fabric,color);
    const chosen=photos[state.slide]||photos[0];
    const modelLine=chosen?.modelName?`\n✂️ *Diseño:* ${chosen.modelName} (modelo ${state.slide+1} de ${photos.length})`:'';
    const compatibility=garment.recommended.includes(fabric.id)?'':'\n⚠️ Tela y prenda: consultar compatibilidad de confección.';
    return `Hola, deseo cotizar una prenda en Tela Viva.\n\n`+
      `👗 *Prenda:* ${garment.name}${modelLine}\n🧵 *Tela:* ${fabric.name}\n🎨 *Color:* ${color.name}\n📏 *Talla:* ${state.size}\n🔢 *Cantidad:* ${state.quantity}`+
      `${state.notes.trim()?'\n📝 *Detalles:* '+state.notes.trim():''}${compatibility}\n\n`+
      `🔗 *Mi selección:* ${TV.selectionLink()}\n\n¿Me confirman disponibilidad, precio y tiempo de confección?`;
  }
  function notice(s){const el=TV.$('notice');if(el)el.textContent=s;}
  function quote(){
    const number=String(TV.config?.whatsappNumber||'').replace(/\D/g,'');
    const url=`https://wa.me/${number}?text=${encodeURIComponent(makeQuote())}`;
    if(!number)notice('Agrega el WhatsApp comercial en js/config.js. Por ahora podrás elegir a quién enviar el mensaje.');
    window.open(url,'_blank','noopener,noreferrer');
  }
  async function save(){
    const link=TV.selectionLink();
    try{await navigator.clipboard.writeText(link);notice('Enlace del diseño copiado. Puedes guardarlo o compartirlo.');}
    catch{const t=document.createElement('textarea');t.value=link;document.body.appendChild(t);t.select();const ok=document.execCommand('copy');t.remove();notice(ok?'Enlace copiado.':'Copia el enlace que aparece en el navegador.');}
  }
  TV.makeQuote=makeQuote;TV.quote=quote;TV.save=save;TV.notice=notice;
})(window.TelaViva=window.TelaViva||{});

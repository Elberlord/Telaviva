'use strict';
(function (TV) {
  const { $, state, getGarment, getFabric, getColor, selectionLink } = TV;
function makeQuote(){const recommended=getGarment().recommended.includes(state.fabric);const note=state.notes.trim();return `Hola, quiero solicitar una cotización de una prenda personalizada.\n\n🧵 *PRENDA:* ${getGarment().name}\n🪡 *TELA:* ${getFabric().name}\n🎨 *COLOR:* ${getColor().name}\n📏 *TALLA:* ${state.size}\n🔢 *CANTIDAD:* ${state.quantity}\n${note?`📝 *DETALLES:* ${note}\n`:''}${recommended?'':'⚠️ *Compatibilidad de tela y prenda por confirmar*\n'}\n🔗 *VER MI DISEÑO:* ${selectionLink()}\n\n¿Me pueden confirmar precio, disponibilidad y tiempo de confección?`}
function announce(msg){$('notice').textContent=msg}
function quote(){const number=String(TV.config?.whatsappNumber||'').replace(/\D/g,'');const whatsapp=number?`https://wa.me/${number}?text=${encodeURIComponent(makeQuote())}`:`https://wa.me/?text=${encodeURIComponent(makeQuote())}`;if(!number)announce('Número del negocio aún no configurado: WhatsApp te pedirá elegir un contacto.');else announce('Abriendo WhatsApp con los detalles de tu diseño…');window.open(whatsapp,'_blank','noopener,noreferrer')}
async function share(){const link=selectionLink();try{await navigator.clipboard.writeText(link);announce('¡Enlace del diseño copiado! Puedes compartirlo.')}catch{const copy=document.createElement('textarea');copy.value=link;copy.style.position='fixed';copy.style.opacity='0';document.body.appendChild(copy);copy.select();const success=document.execCommand('copy');copy.remove();announce(success?'¡Enlace copiado!':'Copia el enlace desde la barra del navegador.')}}
TV.makeQuote = makeQuote;
TV.quote = quote;
TV.share = share;
TV.announce = announce;
})(window.TelaViva = window.TelaViva || {});

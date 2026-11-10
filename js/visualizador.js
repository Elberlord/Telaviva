'use strict';
(function(TV){
  // Se actualiza tanto el material como la foto de modelo, sin volver al vestido por error.
  function renderPreview(){
    const garment=TV.getGarment(),fabric=TV.getFabric(),color=TV.getColor();
    const pics=TV.getGallery(garment,fabric,color);
    const idx=Math.min(Math.max(0,TV.state.slide),Math.max(0,pics.length-1));TV.state.slide=idx;
    const shown=pics[idx] || null;
    const img=TV.$('modelPhoto'),fallback=TV.$('modelFallback');
    const swatch=TV.fabricPhoto(fabric.id,color.id);
    const fallBackNow=()=>{
      img.hidden=true;fallback.hidden=false;
      TV.$('modelFallbackFabric').src=swatch;
      TV.$('modelFallbackTitle').textContent=garment.name;
      TV.$('previewStatus').textContent='Modelo sin fotografía disponible';
    };
    // Una misma fotografía por estilo; la recoloración cambia SOLO los píxeles de la prenda.
    const ticket=TV.previewTicket=(TV.previewTicket||0)+1;
    img.onload=null;img.onerror=null;
    if(shown){
      img.hidden=false;fallback.hidden=true;
      img.alt=`${garment.name} en color ${color.name}; simulación digital, tejido ilustrativo`;
      img.onerror=()=>{if(ticket===TV.previewTicket)fallBackNow();};
      img.src=shown.photo;
      TV.recolorPhoto(shown.photo,shown.mask,color.hex).then(url=>{
        if(ticket===TV.previewTicket){img.src=url;img.hidden=false;fallback.hidden=true;}
      }).catch(()=>{if(ticket===TV.previewTicket)TV.$('previewStatus').textContent='Fotografía base sin recoloración';});
    }else{fallBackNow();}
    TV.$('previewStatus').textContent='Color simulado sobre la misma fotografía';
    TV.$('photoCaption').textContent=`${garment.name}: ${color.name}. Modelo, pose y fondo fijos; la textura de ${fabric.name} es orientativa, no una confección real.`;
    TV.$('modelCounter').hidden=true;
    TV.$('modelPrev').hidden=true;TV.$('modelNext').hidden=true;
    TV.$('modelFabricChipImage').src=swatch;
    TV.$('modelFabricChipImage').alt=`Tejido seleccionado: ${fabric.name} ${color.name}`;
    TV.$('modelChipColor').textContent=color.name;
    TV.$('modelChipFabric').textContent=fabric.name;
    TV.$('modelFabricChip').hidden=false;
    const sample=TV.$('selectedFabricPhoto');sample.src=swatch;sample.alt=`Muestra de ${fabric.name}, color ${color.name}`;
    TV.$('selectedFabricName').textContent=fabric.name;TV.$('selectedColorName').textContent=`Color: ${color.name}`;
    TV.$('fabricDescription').textContent=fabric.description+'.';TV.$('fabricTexture').textContent=fabric.texture;
    TV.$('fabricUses').textContent=fabric.uses;
    TV.$('fabricWidth').textContent='Por confirmar';TV.$('fabricComposition').textContent='Por confirmar';
    const ok=garment.recommended.includes(fabric.id);
    TV.$('compatibility').textContent=ok?'✓ Material recomendado para esta prenda':'⚠ Esta tela no está recomendada para esta prenda. Consultar confección.';
    TV.$('compatibility').dataset.ok=String(ok);
    TV.$('resultThumb').src=swatch;TV.$('resultThumb').alt=`Tela: ${fabric.name}, ${color.name}`;
    TV.$('resultGarment').textContent=garment.name;TV.$('resultFabric').textContent=fabric.name;
    TV.$('resultColor').textContent=color.name;TV.$('resultSize').textContent=TV.state.size;
    TV.$('resultQty').textContent=TV.state.quantity;
  }
  function changeSlide(delta){const length=TV.getGallery(TV.getGarment(),TV.getFabric(),TV.getColor()).length;if(!length)return;TV.state.slide=(TV.state.slide+delta+length)%length;renderPreview();}
  TV.renderPreview=renderPreview;TV.changeSlide=changeSlide;
})(window.TelaViva=window.TelaViva||{});

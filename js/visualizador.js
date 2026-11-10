'use strict';
(function(TV){
  function renderPreview(){
    const garment=TV.getGarment(),fabric=TV.getFabric(),color=TV.getColor();
    const pics=TV.getGallery(garment,fabric,color);
    const idx=Math.min(Math.max(0,TV.state.slide),Math.max(0,pics.length-1));TV.state.slide=idx;
    const shown=pics[idx]||null;
    const img=TV.$('modelPhoto'),fallback=TV.$('modelFallback');
    const swatch=TV.fabricPhoto(fabric.id,color.id);
    const special=Boolean(shown?.preRendered);
    const ticket=TV.previewTicket=(TV.previewTicket||0)+1;
    const fallBackNow=()=>{
      img.hidden=true;fallback.hidden=false;
      TV.$('modelFallbackFabric').src=swatch;
      TV.$('modelFallbackTitle').textContent=garment.name;
      TV.$('previewStatus').textContent='Modelo sin fotografía disponible';
    };
    img.onload=null;img.onerror=null;
    if(shown){
      img.hidden=false;fallback.hidden=true;
      img.alt=special?`${garment.name} de ${fabric.name}: ${shown.modelName}, color ${color.name}`:`${garment.name}, color ${color.name}; simulación digital`;
      img.onerror=()=>{if(ticket===TV.previewTicket)fallBackNow();};
      // Vestidos de licra: 12 imágenes FIJAS. Nunca recalcular con Canvas.
      img.src=shown.photo;
      if(!special){
        TV.recolorPhoto(shown.photo,shown.mask,color.hex).then(url=>{
          if(ticket===TV.previewTicket){img.src=url;img.hidden=false;fallback.hidden=true;}
        }).catch(()=>{if(ticket===TV.previewTicket)TV.$('previewStatus').textContent='Fotografía base sin recoloración';});
      }
    }else{fallBackNow();}
    const status=TV.$('previewStatus');
    status.textContent=special?`${shown.modelName} · ${color.name}`:'Color simulado sobre la misma fotografía';
    TV.$('photoCaption').textContent=special?
      `Vestido de licra — ${shown.modelName}. Color: ${color.name}. Imagen ilustrativa. Usa las flechas para ver los cuatro cortes.`:
      `${garment.name}: ${color.name}. Modelo, pose y fondo fijos; la textura de ${fabric.name} es orientativa, no una confección real.`;
    const many=pics.length>1;
    TV.$('modelCounter').hidden=!many;
    TV.$('modelCounter').textContent=`${idx+1} / ${pics.length}`;
    TV.$('modelPrev').hidden=!many;
    TV.$('modelNext').hidden=!many;
    TV.$('modelPrev').setAttribute('aria-label',`Ver modelo anterior, ${idx+1} de ${pics.length}`);
    TV.$('modelNext').setAttribute('aria-label',`Ver modelo siguiente, ${idx+1} de ${pics.length}`);
    TV.$('modelFabricChipImage').src=swatch;
    TV.$('modelFabricChipImage').alt=`Tejido seleccionado: ${fabric.name}, ${color.name}`;
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
    TV.$('resultThumb').src=special?shown.photo:swatch;
    TV.$('resultThumb').alt=special?`Vestido seleccionado: ${shown.modelName} en ${color.name}`:`Tela: ${fabric.name}, ${color.name}`;
    TV.$('resultGarment').textContent=special?`${garment.name} · ${shown.modelName}`:garment.name;
    TV.$('resultFabric').textContent=fabric.name;
    TV.$('resultColor').textContent=color.name;
    TV.$('resultSize').textContent=TV.state.size;
    TV.$('resultQty').textContent=TV.state.quantity;
  }
  function changeSlide(delta){
    const length=TV.getGallery(TV.getGarment(),TV.getFabric(),TV.getColor()).length;
    if(length<2)return;
    TV.state.slide=(TV.state.slide+delta+length)%length;
    renderPreview();TV.updateUrl();
  }
  TV.renderPreview=renderPreview;TV.changeSlide=changeSlide;
})(window.TelaViva=window.TelaViva||{});

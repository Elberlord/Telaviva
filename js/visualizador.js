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
    // Limpiar manejadores anteriores para evitar mostrar foto de una selección anterior.
    img.onload=null;img.onerror=null;
    if(shown){
      img.hidden=false;fallback.hidden=true;
      img.alt=shown.exact?`Imagen conceptual de ${garment.name} en ${fabric.name} ${color.name}`:`Fotografía de referencia: ${garment.name}; la tela ${fabric.name} ${color.name} se muestra en la muestra contigua`;
      img.onload=()=>{fallback.hidden=true;img.hidden=false;};
      img.onerror=fallBackNow;
      img.src=shown.photo;
    } else {fallBackNow();}
    TV.$('previewStatus').textContent=shown?.exact?'Imagen conceptual de esta combinación':'Modelo de referencia · ver muestra de tela';
    const caption=TV.$('photoCaption');
    caption.textContent=shown?.exact?'Vista conceptual de la prenda y material seleccionados.':`Referencia visual de ${garment.name}. ${shown?.caption||''} La muestra visible identifica la tela y color elegidos.`;
    TV.$('modelCounter').textContent=`${idx+1} / ${pics.length}`;
    TV.$('modelCounter').hidden=pics.length<2;
    TV.$('modelPrev').hidden=pics.length<2;TV.$('modelNext').hidden=pics.length<2;
    TV.$('modelFabricChipImage').src=swatch;
    TV.$('modelFabricChipImage').alt=`Tejido seleccionado: ${fabric.name} ${color.name}`;
    TV.$('modelChipColor').textContent=color.name;
    TV.$('modelChipFabric').textContent=fabric.name;
    TV.$('modelFabricChip').hidden=Boolean(shown?.exact);
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

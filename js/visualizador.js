'use strict';
(function(TV){
  function renderPreview(){
    const garment=TV.getGarment(),fabric=TV.getFabric(),color=TV.getColor();
    const pics=TV.getGallery(garment,fabric,color);
    const idx=Math.min(Math.max(0,TV.state.slide),pics.length-1);TV.state.slide=idx;const shown=pics[idx];
    const img=TV.$('modelPhoto');img.src=shown.photo;img.alt=`${garment.name}: ${shown.caption}`;
    img.onerror=()=>{img.onerror=null;img.src='assets/modelos/vestido-lino-verde.webp';};
    const label=TV.$('photoCaption');label.textContent=shown.exact?'Vista conceptual del modelo con la tela seleccionada': 'Foto referencial del corte. La tela y el color elegidos se muestran a la derecha.';
    TV.$('modelCounter').textContent=`${idx+1} / ${pics.length}`;
    TV.$('modelPrev').hidden=pics.length<2;TV.$('modelNext').hidden=pics.length<2;
    const image=TV.$('selectedFabricPhoto');image.src=TV.fabricPhoto(fabric.id,color.id);image.alt=`Muestra fotorealista de ${fabric.name}, color ${color.name}`;
    TV.$('selectedFabricName').textContent=fabric.name;TV.$('selectedColorName').textContent=`Color: ${color.name}`;
    TV.$('fabricDescription').textContent=fabric.description+'.';TV.$('fabricTexture').textContent=fabric.texture;TV.$('fabricUses').textContent=fabric.uses;
    TV.$('fabricWidth').textContent='Por confirmar';TV.$('fabricComposition').textContent='Por confirmar';
    TV.$('compatibility').textContent=garment.recommended.includes(fabric.id)?'✓ Material recomendado para esta prenda':'ⓘ Esta combinación requiere confirmación de confección';
    TV.$('compatibility').dataset.ok=String(garment.recommended.includes(fabric.id));
    TV.$('resultThumb').src=TV.fabricPhoto(fabric.id,color.id);TV.$('resultThumb').alt=`Tela seleccionada: ${fabric.name}, ${color.name}`;
    TV.$('resultGarment').textContent=garment.name;TV.$('resultFabric').textContent=fabric.name;TV.$('resultColor').textContent=color.name;
    TV.$('resultSize').textContent=TV.state.size;TV.$('resultQty').textContent=TV.state.quantity;
  }
  function changeSlide(delta){const length=TV.getGallery(TV.getGarment(),TV.getFabric(),TV.getColor()).length;TV.state.slide=(TV.state.slide+delta+length)%length;renderPreview();}
  TV.renderPreview=renderPreview;TV.changeSlide=changeSlide;
})(window.TelaViva=window.TelaViva||{});

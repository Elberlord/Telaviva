'use strict';
(function(TV){
  function render(){
    const {state}=TV;
    TV.$('garmentSelect').value=state.garment;TV.$('fabricSelect').value=state.fabric;
    TV.$('sizeSelect').value=state.size;TV.$('quantityInput').value=state.quantity;
    TV.renderSwatches();TV.renderPreview();TV.updateUrl();
  }
  function init(){
    for(const garment of TV.garments)TV.$('garmentSelect').add(new Option(garment.name,garment.id));
    for(const fabric of TV.fabrics)TV.$('fabricSelect').add(new Option(fabric.name,fabric.id));
    TV.restoreFromUrl();TV.renderCatalog();
    TV.$('garmentSelect').addEventListener('change',e=>{TV.state.garment=e.target.value;TV.state.slide=0;render();});
    TV.$('fabricSelect').addEventListener('change',e=>{TV.state.fabric=e.target.value;TV.state.color=0;TV.state.slide=0;render();});
    TV.$('sizeSelect').addEventListener('change',e=>{TV.state.size=e.target.value;render();});
    TV.$('notesInput').addEventListener('input',e=>TV.state.notes=e.target.value);
    TV.$('quantityInput').addEventListener('change',e=>{TV.state.quantity=Math.max(1,Math.min(99,Math.trunc(Number(e.target.value)||1)));render();});
    TV.$('decreaseQty').addEventListener('click',()=>{TV.state.quantity=Math.max(1,TV.state.quantity-1);render();});
    TV.$('increaseQty').addEventListener('click',()=>{TV.state.quantity=Math.min(99,TV.state.quantity+1);render();});
    TV.$('modelPrev').addEventListener('click',()=>TV.changeSlide(-1));
    TV.$('modelNext').addEventListener('click',()=>TV.changeSlide(1));
    TV.$('quoteButton').addEventListener('click',TV.quote);TV.$('saveButton').addEventListener('click',TV.save);
    TV.$('resetButton').addEventListener('click',()=>{Object.assign(TV.state,{garment:'vestido',fabric:'lino',color:0,size:'M',quantity:1,notes:'',slide:0});TV.$('notesInput').value='';TV.notice('');render();});
    TV.$('year').textContent=String(new Date().getFullYear());render();
  }
  document.addEventListener('DOMContentLoaded',init);TV.render=render;
})(window.TelaViva=window.TelaViva||{});

'use strict';
(function(TV){
  const {state}=TV;
  function selectionLink(){
    const url=new URL(location.href);url.search='';url.hash='personalizador';
    const selection={prenda:state.garment,tela:state.fabric,color:TV.getColor().id,talla:state.size,cantidad:state.quantity};
    if(state.garment==='vestido'&&state.fabric==='licra')selection.modelo=String(state.slide+1);
    for(const [k,v] of Object.entries(selection))url.searchParams.set(k,String(v));
    return url.toString();
  }
  function restoreFromUrl(){
    const p=new URLSearchParams(location.search);const garment=p.get('prenda'),fabric=p.get('tela'),color=p.get('color'),size=p.get('talla'),qty=Number(p.get('cantidad'));
    if(TV.garments.some(g=>g.id===garment))state.garment=garment;
    if(TV.fabrics.some(f=>f.id===fabric))state.fabric=fabric;
    const colors=TV.getFabric().colors;const i=colors.findIndex(c=>c.id===color);
    if(i>=0)state.color=i; else if(/^\d+$/.test(String(color)))state.color=Math.min(colors.length-1,Number(color));
    if(['XS','S','M','L','XL','A medida'].includes(size))state.size=size;
    if(Number.isInteger(qty)&&qty>=1&&qty<=99)state.quantity=qty;
    const model=Number(p.get('modelo'));
    if(state.garment==='vestido'&&state.fabric==='licra'&&Number.isInteger(model)&&model>=1&&model<=TV.licraVestidos.length)state.slide=model-1;
  }
  function updateUrl(){try{history.replaceState(null,'',selectionLink())}catch(e){/* local */}}
  TV.selectionLink=selectionLink;TV.restoreFromUrl=restoreFromUrl;TV.updateUrl=updateUrl;
})(window.TelaViva=window.TelaViva||{});

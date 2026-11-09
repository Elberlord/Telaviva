
'use strict';
(function (TV) {
  // Una foto base por tipo de prenda; el tejido se simula sobre sus regiones neutras.
  // La fotografía sigue siendo una referencia, no representa confección definitiva.
  const cache = new Map();
  let generation = 0;
  const zones = {
    vestido: [{x:0.20,y:0.30,w:0.63,h:0.65}],
    enagua: [{x:0.17,y:0.44,w:0.68,h:0.52}],
    pantalon: [{x:0.17,y:0.45,w:0.68,h:0.53}],
    blusa: [{x:0.16,y:0.24,w:0.72,h:0.50}],
    bano: [{x:0.24,y:0.30,w:0.54,h:0.30},{x:0.24,y:0.58,w:0.54,h:0.16}]
  };
  const clamp = x => Math.min(255,Math.max(0,x));
  const colorRgb = h => [1,3,5].map(i=>parseInt(h.slice(i,i+2),16));
  const near = (x,y,zone) => x>=zone.x && x<=zone.x+zone.w && y>=zone.y && y<=zone.y+zone.h;
  function weave(type,x,y) {
    switch(type){
      case 'denim':return ((x+y)%8<2? -0.052:0.018) + ((x-y+1024)%9===0?0.044:0);
      case 'linen': return (x%6===0||y%6===0)?-0.031:0.008;
      case 'satin': return Math.sin((x+y)*0.055)*0.055;
      case 'twill':return ((x+Math.floor(y/3))%9<2)?-0.04:0.01;
      case 'chiffon':return 0.015*Math.sin(x*0.14);
      case 'crepe':return ((x*13+y*17)%23<7)?-0.018:0.009;
      default: return ((x*7+y*3)%17<5)?-0.013:0.005;
    }
  }
  function imageUrl(cat,id,remote=false){return remote?TV.photoRemote(cat,id):TV.photoUrl(cat,id)}
  function loadPhoto(kind,id){
    const name=kind+':'+id;
    if(cache.has(name))return cache.get(name);
    const promise = new Promise(resolve=>{
      let alternate=false;
      const img=new Image();
      img.onload=()=>resolve(img);
      img.onerror=()=>{
        if(!alternate){alternate=true;img.crossOrigin='anonymous';img.src=imageUrl(kind,id,true)}
        else resolve(null);
      };
      img.src=imageUrl(kind,id);
    });
    cache.set(name,promise);
    return promise;
  }
  function recolor(canvas,img,type,hex,fabric){
    const ctx=canvas.getContext('2d',{willReadFrequently:true});
    const w=canvas.width=420,h=canvas.height=630;
    const sourceRatio=img.naturalWidth/img.naturalHeight,targetRatio=w/h;
    let sw=img.naturalWidth,sh=img.naturalHeight,sx=0,sy=0;
    if(sourceRatio>targetRatio){sw=img.naturalHeight*targetRatio;sx=(img.naturalWidth-sw)/2}
    else{sh=img.naturalWidth/targetRatio;sy=(img.naturalHeight-sh)/2}
    ctx.drawImage(img,sx,sy,sw,sh,0,0,w,h);
    const pixels=ctx.getImageData(0,0,w,h),data=pixels.data,target=colorRgb(hex);
    const regions=zones[type]||[];
    for(let y=0;y<h;y++)for(let x=0;x<w;x++){
      const xx=x/w,yy=y/h;
      if(!regions.some(z=>near(xx,yy,z)))continue;
      const n=(y*w+x)*4,r=data[n],g=data[n+1],b=data[n+2];
      const max=Math.max(r,g,b),min=Math.min(r,g,b),sat=max-min;
      const bright=(r+g+b)/3;
      // Evita piel, cabello, fondos de alto contraste y zonas demasiado oscuras.
      const skin=r>g*1.12 && g>b*1.10 && r>95 && b<210;
      if(skin || bright<72 || sat>59)continue;
      let strength=Math.min(0.93,0.36+(bright-72)/225);
      if(type==='enagua' && yy<0.47)strength*=0.45;
      if(type==='pantalon' && yy<0.51)strength*=0.45;
      if(type==='blusa' && yy>0.65)strength*=0.45;
      const fold=Math.max(0.40,Math.min(1.17,(bright/230)));
      const texture=weave(fabric,x,y);
      for(let c=0;c<3;c++) {
        const output=clamp(target[c]*fold*(1+texture) + (bright-170)*0.10);
        data[n+c]=Math.round(data[n+c]*(1-strength)+output*strength);
      }
    }
    ctx.putImageData(pixels,0,0);
  }
  async function render(){
    const serial=++generation;
    const garment=TV.getGarment(),fabric=TV.getFabric(),color=TV.getColor();
    const host=TV.$('previewFigure');
    const real=TV.photoSource('modelos',garment.id);
    if(!host || !real)return;
    const canvas=document.createElement('canvas');
    canvas.className='real-model-canvas';
    canvas.setAttribute('role','img');
    canvas.setAttribute('aria-label',`Referencia de ${garment.name} con simulación del color ${color.name}`);
    const image=await loadPhoto('modelos',garment.id);
    if(serial!==generation)return;
    host.replaceChildren();
    if(image){
      try{recolor(canvas,image,garment.id,color.hex,fabric.texture);host.appendChild(canvas)}
      catch(err){ // Si la imagen remota no permite canvas, mostrar foto intacta, sin fingir recolorización.
        const photo=document.createElement('img');photo.className='real-model-photo';photo.src=image.src;photo.alt=`Modelo real de referencia para ${garment.name}`;host.appendChild(photo)
      }
    }else {host.innerHTML=TV.garmentSvg()}
    const info=document.createElement('div');info.className='model-credit';
    const a=document.createElement('a');a.href=real.source;a.target='_blank';a.rel='noopener noreferrer';a.textContent='Foto de referencia · Pexels';
    info.appendChild(a);host.appendChild(info);
    const textile=TV.$('textileDetail');
    if(textile){
      textile.style.setProperty('--selected-color',color.hex);
      const im=TV.$('textilePhoto');
      if(im){im.src=TV.photoUrl('telas',fabric.id);im.onerror=()=>{im.onerror=null;im.src=TV.photoRemote('telas',fabric.id)};im.alt=`Fotografía de referencia de la familia ${fabric.name}`}
      const name=TV.$('textileText');if(name)name.textContent=`${fabric.name} · ${color.name}`;
    }
  }
  TV.renderPhoto=render;
})(window.TelaViva = window.TelaViva || {});

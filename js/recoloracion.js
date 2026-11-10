'use strict';
(function(TV){
  // Recoloración local, sin API, usando máscara alfa precalculada para cada tipo de prenda.
  // Se conserva la luminancia relativa de cada píxel para mantener pliegues y sombras.
  const cache=new Map();
  const load=url=>{
    if(!cache.has(url))cache.set(url,new Promise((resolve,reject)=>{
      const image=new Image();image.onload=()=>resolve(image);image.onerror=()=>reject(new Error('No se pudo cargar '+url));image.src=url;
    }));
    return cache.get(url);
  };
  function rgb(hex){const h=hex.replace('#','');return [0,2,4].map(i=>parseInt(h.slice(i,i+2),16));}
  async function recolor(photo,mask,hex){
    const [source,alpha]=await Promise.all([load(photo),load(mask)]);
    const canvas=document.createElement('canvas');canvas.width=source.naturalWidth;canvas.height=source.naturalHeight;
    const ctx=canvas.getContext('2d',{willReadFrequently:true});ctx.drawImage(source,0,0);
    const base=ctx.getImageData(0,0,canvas.width,canvas.height);
    const m=document.createElement('canvas');m.width=canvas.width;m.height=canvas.height;
    const mc=m.getContext('2d',{willReadFrequently:true});mc.drawImage(alpha,0,0,canvas.width,canvas.height);
    const maskData=mc.getImageData(0,0,canvas.width,canvas.height).data;
    const target=rgb(hex),d=base.data;
    let weighted=0,count=0;
    for(let i=0;i<d.length;i+=4){const a=maskData[i]/255;if(a>.1){weighted+=(.2126*d[i]+.7152*d[i+1]+.0722*d[i+2])*a;count+=a;}}
    const avg=weighted/Math.max(1,count);
    for(let i=0;i<d.length;i+=4){const a=maskData[i]/255;if(a<.015)continue;
      const light=.2126*d[i]+.7152*d[i+1]+.0722*d[i+2];
      const scale=Math.max(.28,Math.min(1.85,light/Math.max(1,avg)));
      for(let c=0;c<3;c++){const wanted=Math.min(255,target[c]*scale);d[i+c]=Math.round(d[i+c]*(1-a)+wanted*a);}
    }
    ctx.putImageData(base,0,0);
    return canvas.toDataURL('image/webp',.91);
  }
  TV.recolorPhoto=recolor;
})(window.TelaViva=window.TelaViva||{});

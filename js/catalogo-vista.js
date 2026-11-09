'use strict';
(function(TV){
  function renderCatalog(){
    const host=TV.$('fabricTiles');host.replaceChildren();
    for(const fabric of TV.fabrics){
      const color=fabric.colors[0];const card=document.createElement('button');card.type='button';card.className='fabric-tile';card.setAttribute('aria-label',`Elegir tela ${fabric.name}`);
      const img=document.createElement('img');img.src=TV.fabricPhoto(fabric.id,color.id);img.alt=`Fotografía conceptual de la textura ${fabric.name}`;img.loading='lazy';
      const title=document.createElement('strong');title.textContent=fabric.name;
      const subtitle=document.createElement('small');subtitle.textContent=fabric.description;
      card.append(img,title,subtitle);
      card.addEventListener('click',()=>{TV.state.fabric=fabric.id;TV.state.color=0;TV.state.slide=0;TV.render();TV.$('personalizador').scrollIntoView({behavior:'smooth',block:'start'});});
      host.appendChild(card);
    }
  }
  function renderSwatches(){
    const host=TV.$('swatches'),fabric=TV.getFabric();host.replaceChildren();
    fabric.colors.forEach((color,index)=>{
      const b=document.createElement('button');b.type='button';b.className='swatch';b.title=color.name;b.setAttribute('aria-label',`${fabric.name}, ${color.name}`);b.setAttribute('aria-pressed',String(index===TV.state.color));
      b.style.setProperty('--swatch-color',color.hex);
      const img=document.createElement('img');img.src=TV.fabricPhoto(fabric.id,color.id);img.alt='';img.loading='eager';b.appendChild(img);
      b.addEventListener('click',()=>{TV.state.color=index;TV.state.slide=0;TV.render();});host.appendChild(b);
    });
    TV.$('colorLabel').textContent=TV.getColor().name;
  }
  TV.renderCatalog=renderCatalog;TV.renderSwatches=renderSwatches;
})(window.TelaViva=window.TelaViva||{});

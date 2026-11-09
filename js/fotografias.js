'use strict';
(function(TV){
  // Fotografías editoriales generadas para esta demo en combinación exacta.
  const exact=[
    {garment:'vestido',fabric:'lino',color:'verde-salvia',photo:'assets/modelos/vestido-lino-verde.webp',caption:'Vestido de lino verde · imagen conceptual',exact:true},
    {garment:'vestido',fabric:'saten',color:'vino',photo:'assets/modelos/vestido-saten-vino.webp',caption:'Vestido de satén vino · imagen conceptual',exact:true}
  ];
  // Fotografías independientes usadas únicamente para ilustrar el tipo de prenda.
  // Se conservan del catálogo de la versión 1.2. Nunca se anuncian como combinación exacta.
  const generic={
    vestido:{photo:'assets/modelos/vestido-lino-verde.webp',caption:'Referencia de vestido (tela y color en el panel derecho)'},
    enagua:{photo:'assets/fotos/modelos-enagua.jpg',caption:'Referencia de enagua / falda'},
    pantalon:{photo:'assets/fotos/modelos-pantalon.jpg',caption:'Referencia de pantalón'},
    blusa:{photo:'assets/fotos/modelos-blusa.jpg',caption:'Referencia de blusa'},
    bano:{photo:'assets/fotos/modelos-bano.jpg',caption:'Referencia de traje de baño'}
  };
  function getGallery(garment,fabric,color){
    const match=exact.find(p=>p.garment===garment.id&&p.fabric===fabric.id&&p.color===color.id);
    const base=generic[garment.id]||generic.vestido;
    if(match)return [match];
    if(garment.id==='vestido')return [{...base,exact:false}];
    return [{...base,exact:false}];
  }
  TV.getGallery=getGallery;
})(window.TelaViva=window.TelaViva||{});

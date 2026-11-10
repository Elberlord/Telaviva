'use strict';
(function(TV){
  // Vestidos de licra aprobados: una fotografía estática por diseño/color.
  // Los cambios de color NUNCA aplican máscara en el navegador para este grupo.
  const licraVestidos = [
    {id:'cuello-alto',name:'Cuello alto · manga larga'},
    {id:'tirantes-abertura',name:'Tirantes · abertura lateral'},
    {id:'asimetrico',name:'Asimétrico · un hombro'},
    {id:'halter-abertura',name:'Halter · abertura lateral'}
  ];
  const styles={vestido:'vestido',bano:'bano',blusa:'blusa',pantalon:'pantalon',enagua:'enagua'};
  function getGallery(garment,fabric,color){
    if(garment.id==='vestido' && fabric.id==='licra'){
      const tone=color.id; // El catálogo garantiza una imagen precalculada para cada tono.
      return licraVestidos.map((style,index)=>({
        photo:`assets/modelos/licra-vestido/${style.id}-${tone}.webp`,
        mask:null,exact:true,preRendered:true,modelId:style.id,modelName:style.name,modelIndex:index,
        caption:`Vestido de licra, corte ${style.name}, color ${color.name}. Fotografía conceptual con variante de color precompuesta.`
      }));
    }
    const style=styles[garment.id];
    if(!style)return [];
    return [{photo:`assets/modelos/${style}-base.webp`,mask:`assets/modelos/${style}-mascara.png`,exact:false,preRendered:false,
      caption:`Simulación del color ${color.name} en ${garment.name}. La textura del tejido es ilustrativa.`}];
  }
  TV.licraVestidos=licraVestidos;
  TV.getGallery=getGallery;
})(window.TelaViva=window.TelaViva||{});

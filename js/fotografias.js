'use strict';
(function(TV){
  // Un retrato base por estilo. La modelo y el fondo nunca cambian al seleccionar color.
  // La recoloración es una simulación: NO reproduce la composición o trama real de otra tela.
  const styles={vestido:'vestido',bano:'bano',blusa:'blusa',pantalon:'pantalon',enagua:'enagua'};
  function getGallery(garment,fabric,color){
    const style=styles[garment.id];
    if(!style)return [];
    return [{photo:`assets/modelos/${style}-base.webp`,mask:`assets/modelos/${style}-mascara.png`,exact:false,
      caption:`Simulación del color ${color.name} en ${garment.name}. La fotografía conserva modelo, pose y fondo; la textura del tejido es ilustrativa.`}];
  }
  TV.getGallery=getGallery;
})(window.TelaViva=window.TelaViva||{});

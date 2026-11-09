'use strict';
(function (TV) {
  // Una fotografía identificada como exacta solo se presenta para esa combinación de prenda/tela/color.
  // Los demás ejemplos son REFERENCIAS DEL CORTE, nunca se anuncian como la confección exacta.
  const exact = [
    {garment:'vestido',fabric:'lino',color:'verde-salvia',photo:'assets/modelos/vestido-lino-verde.webp',caption:'Imagen conceptual de vestido en lino verde',exact:true},
    {garment:'vestido',fabric:'saten',color:'vino',photo:'assets/modelos/vestido-saten-vino.webp',caption:'Imagen conceptual de vestido en satén vino',exact:true}
  ];
  // Fotografías de referencia Pexels: NO equivalen al tejido ni diseño ofertado.
  // Están alojadas externamente hasta incorporar imágenes propias por combinación.
  const pexels = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=950`;
  const generic = {
    vestido: [{photo:pexels(5254741),caption:'Vestido largo de referencia (color y tela pueden ser distintos)'}],
    enagua: [{photo:pexels(5393765),caption:'Falda de referencia (color y tela pueden ser distintos)'}],
    pantalon: [{photo:pexels(17503375),caption:'Pantalón de referencia (color y tela pueden ser distintos)'}],
    blusa: [{photo:pexels(20106356),caption:'Blusa de referencia (color y tela pueden ser distintos)'}],
    bano: [{photo:pexels(2260944),caption:'Traje de baño de dos piezas de referencia (tejido diferente)'}]
  };
  // Referencias aproximadas del mismo tipo de prenda y tono. No confundir con foto exacta.
  const toneReferences = {
    'bano|azul-indigo': [{photo:pexels(2260944),caption:'Traje de baño azul de referencia; no está confeccionado en mezclilla'}],
    'bano|negro': [{photo:pexels(20379906),caption:'Traje de baño negro de referencia; confirmar la compatibilidad del tejido'}],
    'pantalon|azul-indigo': [{photo:pexels(17503375),caption:'Pantalón de mezclilla azul de referencia'}],
    'pantalon|negro': [{photo:pexels(13983341),caption:'Pantalón oscuro de referencia'}],
    'blusa|blanco': [{photo:pexels(40675851),caption:'Blusa blanca de referencia'}]
  };
  function getGallery(garment,fabric,color) {
    const match = exact.find(p=>p.garment===garment.id&&p.fabric===fabric.id&&p.color===color.id);
    if(match)return [match];
    const refs=toneReferences[`${garment.id}|${color.id}`] || generic[garment.id] || [];
    return refs.map(ref=>({...ref,exact:false,garment:garment.id}));
  }
  TV.getGallery=getGallery;
})(window.TelaViva=window.TelaViva||{});

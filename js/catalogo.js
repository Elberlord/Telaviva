'use strict';
(function (TV) {
  // Colores de demostración: no deben anunciarse como existencias confirmadas.
  const fabrics = [
    {id:'lino',name:'Lino',description:'Natural, fresco y elegante',texture:'Fibra visible, tacto natural',uses:'Vestidos, blusas y pantalones',colors:[{id:'verde-salvia',name:'Verde salvia',hex:'#78856a'},{id:'beige-arena',name:'Beige arena',hex:'#ceb08c'}]},
    {id:'mezclilla',name:'Mezclilla',description:'Resistente y versátil',texture:'Trama diagonal, tejido firme',uses:'Pantalones, enaguas y chaquetas',colors:[{id:'negro',name:'Negro',hex:'#23262b'},{id:'azul-indigo',name:'Azul índigo',hex:'#27577e'}]},
    {id:'saten',name:'Satén',description:'Brillante y sofisticado',texture:'Superficie satinada de alto brillo',uses:'Vestidos elegantes y blusas',colors:[{id:'vino',name:'Vino',hex:'#7e1839'},{id:'verde-esmeralda',name:'Verde esmeralda',hex:'#087b59'}]},
    {id:'algodon',name:'Algodón',description:'Suave, cómodo y transpirable',texture:'Trama suave de aspecto mate',uses:'Blusas, vestidos y ropa casual',colors:[{id:'blanco',name:'Blanco',hex:'#e8e7e2'},{id:'rosa',name:'Rosa',hex:'#e3a9b5'}]},
    {id:'licra',name:'Licra',description:'Elástica y de gran ajuste',texture:'Punto elástico de superficie lisa',uses:'Vestidos ajustados, ropa deportiva y trajes de baño',colors:[{id:"gris",name:"Gris",hex:"#777581"},{id:"negro",name:"Negro",hex:"#29282c"},{id:"blanco",name:"Blanco",hex:"#f2f0eb"},{id:"beige",name:"Beige",hex:"#c9ac8f"},{id:"cafe",name:"Café",hex:"#775644"},{id:"coral",name:"Coral",hex:"#f67577"},{id:"rojo",name:"Rojo",hex:"#bf2639"},{id:"vino",name:"Vino",hex:"#74283f"},{id:"rosa",name:"Rosa",hex:"#e9a0b5"},{id:"fucsia",name:"Fucsia",hex:"#c82988"},{id:"morado",name:"Morado",hex:"#7550a1"},{id:"lila",name:"Lila",hex:"#b6a0d5"},{id:"azul-marino",name:"Azul marino",hex:"#183252"},{id:"azul-rey",name:"Azul rey",hex:"#2659be"},{id:"azul-indigo",name:"Azul índigo",hex:"#365780"},{id:"celeste",name:"Celeste",hex:"#89bfdf"},{id:"turquesa",name:"Turquesa",hex:"#19acb4"},{id:"verde-esmeralda",name:"Verde esmeralda",hex:"#07865a"},{id:"verde-oliva",name:"Verde oliva",hex:"#64734a"},{id:"verde-menta",name:"Verde menta",hex:"#9cccb0"},{id:"amarillo",name:"Amarillo",hex:"#edcb54"},{id:"naranja",name:"Naranja",hex:"#ee8d36"}]},
    {id:'chifon',name:'Chifón',description:'Ligero y vaporoso',texture:'Delicado, fino y semitransparente',uses:'Vestidos con caída y capas',colors:[{id:'rosa',name:'Rosa palo',hex:'#dca3ad'},{id:'azul',name:'Azul cielo',hex:'#93c4de'}]},
    {id:'crepe',name:'Crepé',description:'Textura distinguida',texture:'Relieve suave de caída fluida',uses:'Vestidos, blusas y pantalones',colors:[{id:'granate',name:'Granate',hex:'#961b3b'},{id:'verde-bosque',name:'Verde bosque',hex:'#1b654e'}]},
    {id:'gabardina',name:'Gabardina',description:'Firme, duradera y formal',texture:'Sarga marcada, tejido estructurado',uses:'Pantalones, faldas y chaquetas',colors:[{id:'caqui',name:'Caqui',hex:'#b49b70'},{id:'azul-marino',name:'Azul marino',hex:'#20385c'}]}
  ];
  const garments = [
    {id:'vestido',name:'Vestido largo',short:'Vestido',recommended:['lino','saten','algodon','chifon','crepe','licra']},
    {id:'enagua',name:'Enagua / falda',short:'Enagua',recommended:['lino','mezclilla','saten','algodon','chifon','crepe','gabardina']},
    {id:'pantalon',name:'Pantalón',short:'Pantalón',recommended:['lino','mezclilla','algodon','crepe','gabardina']},
    {id:'blusa',name:'Blusa',short:'Blusa',recommended:['lino','saten','algodon','chifon','crepe']},
    {id:'bano',name:'Traje de baño dos piezas',short:'Traje de baño',recommended:['licra']}
  ];
  const fabricPhoto = (fabricId,colorId) => 'assets/telas/'+fabricId+'-'+colorId+'.webp';
  TV.fabrics=fabrics; TV.garments=garments; TV.fabricPhoto=fabricPhoto;
})(window.TelaViva=window.TelaViva||{});

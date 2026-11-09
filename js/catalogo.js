'use strict';
(function (TV) {
const fabrics = [
  {id:'lino',name:'Lino',description:'Natural, fresco y ligero',texture:'linen',colors:[{name:'Verde salvia',hex:'#829781'},{name:'Beige arena',hex:'#d4b991'},{name:'Blanco marfil',hex:'#f2eddf'},{name:'Terracota',hex:'#bd7862'},{name:'Azul cielo',hex:'#8aa9b9'}]},
  {id:'mezclilla',name:'Mezclilla',description:'Resistente, casual y versátil',texture:'denim',colors:[{name:'Negro',hex:'#303235'},{name:'Azul índigo',hex:'#3b5272'},{name:'Azul claro',hex:'#91acc2'},{name:'Gris humo',hex:'#868b8e'}]},
  {id:'saten',name:'Satén',description:'Brillante, suave y elegante',texture:'satin',colors:[{name:'Rojo vino',hex:'#8c3446'},{name:'Champán',hex:'#d8bc9b'},{name:'Verde esmeralda',hex:'#267768'},{name:'Azul noche',hex:'#333e75'},{name:'Rosa viejo',hex:'#bc8597'}]},
  {id:'algodon',name:'Algodón',description:'Cómodo, suave y transpirable',texture:'cotton',colors:[{name:'Blanco',hex:'#f0efea'},{name:'Negro',hex:'#33363a'},{name:'Rosa suave',hex:'#dfa9b3'},{name:'Lavanda',hex:'#a9a1c9'},{name:'Verde oliva',hex:'#707d51'}]},
  {id:'licra',name:'Licra',description:'Elástica, ideal para movimiento',texture:'stretch',colors:[{name:'Negro',hex:'#292a30'},{name:'Coral',hex:'#e77870'},{name:'Azul océano',hex:'#277c9e'},{name:'Fucsia',hex:'#bf4288'}]},
  {id:'chifon',name:'Chifón',description:'Vaporoso y delicado',texture:'chiffon',colors:[{name:'Rosa palo',hex:'#d8aaa9'},{name:'Marfil',hex:'#eeeadc'},{name:'Azul niebla',hex:'#a4bbcb'},{name:'Ciruela',hex:'#72526e'}]},
  {id:'crepe',name:'Crepé',description:'Elegante y con caída fluida',texture:'crepe',colors:[{name:'Negro',hex:'#33343a'},{name:'Granate',hex:'#8a3c51'},{name:'Crema',hex:'#e5d6b8'},{name:'Verde bosque',hex:'#406457'}]},
  {id:'gabardina',name:'Gabardina',description:'Firme y de acabado definido',texture:'twill',colors:[{name:'Caqui',hex:'#a99b7d'},{name:'Azul marino',hex:'#38465a'},{name:'Negro',hex:'#333333'},{name:'Arena',hex:'#d3b998'}]},
];
const garments = [
  {id:'vestido',name:'Vestido largo',recommended:['lino','saten','algodon','chifon','crepe']},
  {id:'enagua',name:'Enagua / falda',recommended:['lino','mezclilla','saten','algodon','chifon','crepe','gabardina']},
  {id:'pantalon',name:'Pantalón',recommended:['lino','mezclilla','algodon','crepe','gabardina']},
  {id:'blusa',name:'Blusa',recommended:['lino','saten','algodon','chifon','crepe']},
  {id:'bano',name:'Traje de baño dos piezas',recommended:['licra']},
];
TV.fabrics = fabrics;
TV.garments = garments;
})(window.TelaViva = window.TelaViva || {});

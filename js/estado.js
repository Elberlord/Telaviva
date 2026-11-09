'use strict';
(function (TV){
  const state={garment:'vestido',fabric:'lino',color:0,size:'M',quantity:1,notes:'',slide:0};
  TV.state=state;
  TV.$=id=>document.getElementById(id);
  TV.getFabric=()=>TV.fabrics.find(f=>f.id===state.fabric)||TV.fabrics[0];
  TV.getGarment=()=>TV.garments.find(g=>g.id===state.garment)||TV.garments[0];
  TV.getColor=()=>TV.getFabric().colors[state.color]||TV.getFabric().colors[0];
})(window.TelaViva=window.TelaViva||{});

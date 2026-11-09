'use strict';
(function (TV) {
  const { fabrics, garments } = TV;
const $ = id => document.getElementById(id);
TV.$ = $;
const state={garment:'vestido',fabric:'lino',color:0,size:'M',quantity:1,notes:''};
function getFabric(){return fabrics.find(f=>f.id===state.fabric)||fabrics[0]}
function getGarment(){return garments.find(g=>g.id===state.garment)||garments[0]}
function getColor(){return getFabric().colors[state.color]||getFabric().colors[0]}
TV.state = state;
TV.getFabric = getFabric;
TV.getGarment = getGarment;
TV.getColor = getColor;
})(window.TelaViva = window.TelaViva || {});

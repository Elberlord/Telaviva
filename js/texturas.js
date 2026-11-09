'use strict';
(function (TV) {
function shade(hex,delta){let raw=hex.replace('#','');return '#'+[0,2,4].map(i=>Math.max(0,Math.min(255,parseInt(raw.slice(i,i+2),16)+delta)).toString(16).padStart(2,'0')).join('')}
function escapeXml(s){return String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[ch]))}
function texturePattern(fabric,color){const base=color.hex;const pale=shade(base,42),dark=shade(base,-35);let lines='';switch(fabric.texture){case 'denim':lines='<path d="M0 0L12 12M-6 0L6 12M6 0L18 12M0 6L6 0M0 12L12 0" stroke="'+pale+'" stroke-width="1" opacity=".31"/><path d="M0 2L10 12M2 0L12 10" stroke="'+dark+'" opacity=".26" stroke-width=".8"/>';break;case 'linen':lines='<path d="M0 2H14M0 8H14M3 0V14M10 0V14" stroke="'+pale+'" stroke-width=".55" opacity=".38"/><path d="M0 5H14M6 0V14" stroke="'+dark+'" stroke-width=".45" opacity=".22"/>';break;case 'satin':lines='<path d="M0 2Q7 0 14 2M0 9Q7 7 14 9" stroke="'+pale+'" opacity=".26" stroke-width="2"/><path d="M3 0L11 14" stroke="'+dark+'" opacity=".1"/>';break;case 'twill':lines='<path d="M-4 14L10 0M2 14L16 0M8 14L22 0" stroke="'+pale+'" stroke-width="1.4" opacity=".3"/>';break;case 'chiffon':lines='<path d="M0 0Q8 8 14 0M0 8Q8 16 14 8" stroke="'+pale+'" stroke-width="1.3" opacity=".2"/>';break;case 'stretch':lines='<path d="M0 5H14M0 11H14" stroke="'+pale+'" opacity=".13" stroke-width="1"/>';break;case 'crepe':lines='<circle cx="2" cy="4" r=".8" fill="'+pale+'" opacity=".28"/><circle cx="11" cy="11" r=".8" fill="'+dark+'" opacity=".28"/>';break;default:lines='<path d="M0 4H14M0 11H14M5 0V14M12 0V14" stroke="'+pale+'" stroke-width=".5" opacity=".22"/>'}
return `<pattern id="cloth" patternUnits="userSpaceOnUse" width="14" height="14"><rect width="14" height="14" fill="${base}"/>${lines}</pattern>`}
TV.shade = shade;
TV.escapeXml = escapeXml;
TV.texturePattern = texturePattern;
})(window.TelaViva = window.TelaViva || {});

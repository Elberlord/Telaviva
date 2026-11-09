'use strict';
(function (TV) {
  const { state, garments, fabrics, getFabric } = TV;
function selectionLink(){const url=new URL(window.location.href);url.hash='personalizador';url.searchParams.set('prenda',state.garment);url.searchParams.set('tela',state.fabric);url.searchParams.set('color',String(state.color));url.searchParams.set('talla',state.size);url.searchParams.set('cantidad',String(state.quantity));url.searchParams.delete('nota');return url.toString()}
function updateUrl(){try{history.replaceState(null,'',selectionLink())}catch(e){/* Esquemas file:// pueden impedir modificar la URL. */}}
function restoreFromUrl(){const p=new URLSearchParams(location.search);const g=p.get('prenda'),f=p.get('tela'),c=Number(p.get('color')),s=p.get('talla'),q=Number(p.get('cantidad'));if(garments.some(x=>x.id===g))state.garment=g;if(fabrics.some(x=>x.id===f))state.fabric=f;if(Number.isInteger(c)&&c>=0&&c<getFabric().colors.length)state.color=c;if(['XS','S','M','L','XL','A medida'].includes(s))state.size=s;if(Number.isInteger(q)&&q>=1&&q<=99)state.quantity=q}
TV.selectionLink = selectionLink;
TV.updateUrl = updateUrl;
TV.restoreFromUrl = restoreFromUrl;
})(window.TelaViva = window.TelaViva || {});

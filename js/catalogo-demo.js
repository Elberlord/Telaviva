'use strict';
(function (TV) {
  // Solo oferta demostrativa: conservar los datos originales en catalogo.js.
  const prendasPermitidas = new Set(['vestido', 'enagua']);
  TV.fabrics = (TV.fabrics || []).filter(tela => tela.id === 'licra');
  TV.garments = (TV.garments || []).filter(prenda => prendasPermitidas.has(prenda.id));

  // La primera carga y Reiniciar deben iniciar en una combinación disponible.
  TV.state.fabric = 'licra';
  if (!prendasPermitidas.has(TV.state.garment)) TV.state.garment = 'vestido';
  TV.state.color = 0;

  function limitarMenus() {
    const nav = document.getElementById('tv-main-nav');
    if (!nav) return;
    const groups = Array.from(nav.querySelectorAll('details.tv-nav-group'));
    const fotos = [{id:'vestido',titulo:'Vestidos largos de licra'}, {id:'enagua',titulo:'Enaguas y faldas de licra'}];
    const menus = [
      {panel:groups[0]?.querySelector('.tv-nav-panel'),keep:'#personalizador',options:fotos},
      {panel:groups[1]?.querySelector('.tv-nav-panel'),keep:'#catalogo',options:[{id:'vestido',titulo:'Licra · 22 colores'}]}
    ];
    menus.forEach(menu => {
      if (!menu.panel) return;
      // Retener solo el enlace general de esta sección; retirar opciones no terminadas.
      for (const link of menu.panel.querySelectorAll('a')) {
        if (link.getAttribute('href') !== menu.keep) link.remove();
      }
      menu.options.forEach(item => {
        const a = document.createElement('a');
        a.textContent = item.titulo;
        a.href = `?prenda=${item.id}&tela=licra&color=gris#personalizador`;
        menu.panel.appendChild(a);
      });
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', limitarMenus, {once:true});
  } else limitarMenus();
})(window.TelaViva = window.TelaViva || {});

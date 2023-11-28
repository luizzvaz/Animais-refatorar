import clickFora from './clicouFora.js';

export default function menuMobile() {
  const butonMenu = document.querySelector('[data-menu="buton"]');
  const listMenu = document.querySelector('[data-menu="list"]');
  const eventos = ['click', 'touchstart'];
  function abrirMenu() {
    listMenu.classList.toggle('ativo');
    butonMenu.classList.toggle('ativo');
    clickFora(listMenu, eventos, () => {
      listMenu.classList.remove('ativo');
      butonMenu.classList.remove('ativo');
    });
  }
  if (butonMenu) {
    abrirMenu();
    eventos.forEach((event) => {
      butonMenu.addEventListener(event, abrirMenu);
    });
  }
}

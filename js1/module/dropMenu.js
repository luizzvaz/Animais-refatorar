import clickFora from './clicouFora.js';

export default function dropMenu() {
  const dropMenus = document.querySelectorAll('[data-dropdown]');
  const acoes = ['touchstart', 'click'];
  function abrirMenu() {
    // e.preventDefault()
    this.classList.toggle('ativo');
    clickFora(this, acoes, () => {
      this.classList.remove('ativo');
    });
  }
  dropMenus.forEach((menu) => {
    acoes.forEach((eventos) => {
      menu.addEventListener(eventos, abrirMenu);
    });
  });
}

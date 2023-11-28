export default function modalInt() {
  const bntAbrir = document.querySelector('[data-modal="abrir"]');
  const btnFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');
  const divLogin = containerModal.querySelector('div');
  function abrirLogin(evennt) {
    evennt.preventDefault();
    containerModal.classList.add('ativo');
    divLogin.classList.add('ativo');
  }

  function fecharLogin(event) {
    event.preventDefault();
    containerModal.classList.remove('ativo');
    divLogin.classList.remove('ativo');
  }
  function clicarFora(event) {
    if (event.target === this) {
      fecharLogin(event);
    }
    // if (event.target === containerModal) {
    //   fecharLogin(event)
    // }
  }
  function teclaEsc(e) {
    if (e.key === 'Escape') {
      fecharLogin(e);
    }
  }
  bntAbrir.addEventListener('click', abrirLogin);
  btnFechar.addEventListener('click', fecharLogin);
  containerModal.addEventListener('click', clicarFora);
  window.addEventListener('keydown', teclaEsc);
}

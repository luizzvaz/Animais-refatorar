export default class modal {
  constructor(btnabrir, btnfechar, containermodal) {
    this.bntAbrir = document.querySelector(btnabrir);
    this.btnFechar = document.querySelector(btnfechar);
    this.containerModal = document.querySelector(containermodal);
    this.eventtoggleLogin = this.eventtoggleLogin.bind(this)
    this.clicarFora = this.clicarFora.bind(this)

  }
  //abre e fchar o modal
  toggleLogin() {
    this.containerModal.classList.toggle('ativo');
  }
  fehcarlogin() {
    this.containerModal.classList.remove(`ativo`)
  }
  // add o evento de toggle ao modal
  eventtoggleLogin(event) {
    event.preventDefault();
    this.toggleLogin();
  }

  //fechar se clicar fora
  clicarFora(event) {
    if (event.target === this.containerModal) {
      this.toggleLogin();
    }
  }

  //add eventos
  addEvents() {
    this.bntAbrir.addEventListener('click', this.eventtoggleLogin);
    this.btnFechar.addEventListener('click', this.eventtoggleLogin);
    this.containerModal.addEventListener('click', this.clicarFora);

  }
  //iniciar
  init() {
    if (this.bntAbrir && this.btnFechar && this.containerModal) {
      this.addEvents()

    }
    return this;
  }

}

export default class acordion {
  constructor(lista) {
    this.acordionList = document.querySelectorAll(lista);
    this.class = 'ativar'
  }
  ativando(item) {
    item.nextElementSibling.classList.toggle(this.class);
    item.classList.toggle(this.class);
  }
  //add evento
  addAcodionEvente(item) {
    this.acordionList.forEach((item) => {
      item.addEventListener('click', () => this.ativando(item));
    });
  }
  //iniciar funcao
  init() {
    if (this.acordionList.length) {
      //primeiro item
      this.ativando(this.acordionList[0]);
      this.addAcodionEvente();
    }
    return this
  }
}

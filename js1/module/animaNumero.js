export default class animaNumero {
  constructor(numeros, classObserva, mira) {
    this.numeros = document.querySelectorAll(numeros);
    this.observadorTarget = document.querySelector(mira)
    this.classObserv = classObserva

    this.observando = this.observando.bind(this);
  }
  //recebe um elemento com um numero em seu texto e incrementa ate o final e depois coloca o numero.
  static incrementarNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let i = 0;
    const timer = setInterval(() => {
      i += incremento;
      numero.innerText = i;
      if (i > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }
  ligarNumero() {
    this.numeros.forEach(numero => this.constructor.incrementarNumero(numero));
  }
  //funcao que ocorre quando a mutao ocorrer
  observando(mutacao) {
    if (mutacao[0].target.classList.contains(this.classObserv)) {
      this.observador.disconnect();
      this.ligarNumero();
    }
  }
  //add o mutacao observe para verificar quando a classe ativo foi add ao target
  addMutationObeserve() {
    this.observador = new MutationObserver(this.observando);
    this.observador.observe(this.observadorTarget, { attributes: true });
  }
  init() {
    if (this.numeros.length && this.observadorTarget) {
      this.addMutationObeserve()
    }
    return this;
  }
}

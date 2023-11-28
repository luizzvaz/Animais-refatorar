export default class balonMapa {
  constructor(item) {
    this.balons = document.querySelectorAll(item);
    //binde
    this.fecharBalon = this.fecharBalon.bind(this)
    this.mouseMove = this.mouseMove.bind(this)
    this.mouseDentro = this.mouseDentro.bind(this)
  }
  //move o balao 
  mouseMove(e) {
    const px = 'px';
    this.balonBox.style.top = (e.pageY + 8) + px;
    if (e.pageX + 260 > window.innerWidth) {
      this.balonBox.style.left = (e.pageX - 160) + px;
    } else {
      this.balonBox.style.left = (e.pageX + 8) + px;
    }
  }
  //fecha o balao quando sai do lugar
  fecharBalon(event) {
    this.balonBox.remove();
    event.currentTarget.removeEventListener('mouseleave', this.fecharBalon);
    event.currentTarget.removeEventListener('mousemove', this.mouseMove);
  }

  //cria o balao e bota no box
  criarBalon(element) {
    const balonBox = document.createElement('div');
    const texto = element.getAttribute('aria-label');
    balonBox.classList.add('balon');
    balonBox.innerText = texto;
    const div = document.querySelector('div');
    div.appendChild(balonBox);
    this.balonBox = balonBox;
  };
  mouseDentro(event) {
    //cria e coloca em uma propriedade e move com o target
    this.criarBalon(event.currentTarget);
    event.currentTarget.addEventListener('mousemove', this.mouseMove);
    event.currentTarget.addEventListener('mouseleave', this.fecharBalon);
  }
  //add evento
  addeventListener() {
    this.balons.forEach((balon) => {
      balon.addEventListener('mouseover', this.mouseDentro);
    });
  }
  //inicia
  init() {
    if (this.balons.length) {
      this.addeventListener()
    }
    return this
  }
}


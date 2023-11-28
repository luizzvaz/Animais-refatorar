export default function balonMapa() {
  function criarBalon(element) {
    const balonBox = document.createElement('div');
    const texto = element.getAttribute('aria-label');
    balonBox.classList.add('balon');
    balonBox.innerText = texto;
    const div = document.querySelector('div');
    div.appendChild(balonBox);
    return balonBox;
  }

  const mouseMove = {
    handleEvent(e) {
      const px = 'px';
      this.balonBox.style.top = (e.pageY + 8) + px;
      this.balonBox.style.left = (e.pageX + 8) + px;
    },
  };
  const fecharBalon = {
    handleEvent() {
      this.balonBo.remove();
      this.element.removeEventListener('mouseleave', fecharBalon);
      this.element.removeEventListener('mousemove', mouseMove);
    },
  };

  function mouseDentro() {
    const balonBox = criarBalon(this);
    // function mouseMove() {
    //   balonBox.style.top = (e.pageY + 8) + "px"
    //   balonBox.style.left = (e.pageX + 8) + "px"
    // }
    mouseMove.balonBox = balonBox;
    this.addEventListener('mousemove', mouseMove);

    //------------------------------
    // function fecharBalon() {
    //   balonBox.remove()
    //   this.removeEventListener('mouseleave', fecharBalon)
    // }

    fecharBalon.balonBo = balonBox;
    fecharBalon.element = this;
    this.addEventListener('mouseleave', fecharBalon);
  }
  const balons = document.querySelectorAll('[data-balon]');
  balons.forEach((balon) => {
    balon.addEventListener('mouseover', mouseDentro);
  });
}

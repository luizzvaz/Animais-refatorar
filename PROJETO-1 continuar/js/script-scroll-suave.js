function intScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-scroll="suave"] a[href^="#"]')

  if (linksInternos.length) {
    function scrollSuave(event) {
      event.preventDefault();
      const herfe = event.currentTarget.getAttribute('href')
      const secao = document.querySelector(herfe)
      const topo = secao.offsetTop
      window.scrollTo({
        top: topo,
        behavior: "smooth",
      })

    }

    function scrollSuave2(event) {
      event.preventDefault();
      const herfe = event.currentTarget.getAttribute('href')
      const secao = document.querySelector(herfe)
      secao.scrollIntoView({
        behavior: "smooth",
        block: 'start',
      })
      //esse não precisa saber a distancia, apenas selecionar o elemento!
    }

    linksInternos.forEach((link) => {
      link.addEventListener('click', scrollSuave)
    })
  }
}
intScrollSuave()
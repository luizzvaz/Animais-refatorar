// import clickFora from './script-clicouFora'
function dropMenu() {
  const dropMenus = document.querySelectorAll('[data-dropdown]')
  const acoes = ['touchstart', 'click']
  dropMenus.forEach((menu) => {
    acoes.forEach(eventos => {
      menu.addEventListener(eventos, abrirMenu)
    })
  })

  function abrirMenu(e) {
    // e.preventDefault()
    this.classList.toggle('ativo')
    clickFora(this, acoes, () => {
      this.classList.remove('ativo')
    })
  }
  function clickFora(element, events, retorno) {
    const html = document.documentElement
    const atributo = 'data-outside'

    if (!element.hasAttribute(atributo)) {
      events.forEach((eventos) => {
        html.addEventListener(eventos, clicouFora)
      })
      element.setAttribute(atributo, "")
    }


    function clicouFora(event) {
      if (!element.contains(event.target)) {
        element.removeAttribute(atributo)
        events.forEach(eventos => {
          html.removeEventListener(eventos, clicouFora)
        })
        retorno();
      }
    }
  }
}
dropMenu()

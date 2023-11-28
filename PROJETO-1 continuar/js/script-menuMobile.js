function menuMobile() {
  const butonMenu = document.querySelector('[data-menu="buton"]')
  const listMenu = document.querySelector('[data-menu="list"]')
  const eventos = ['click', 'touchstart']
  if (butonMenu) {
    function abrirMenu() {
      listMenu.classList.toggle('ativo')
      butonMenu.classList.toggle('ativo')
      clickFora(listMenu, eventos, () => {
        listMenu.classList.remove('ativo')
        butonMenu.classList.remove('ativo')
      })
    }


    function clickFora(element, events, retorno) {
      const html = document.documentElement
      const atributo = 'data-outside'

      if (!element.hasAttribute(atributo)) {
        events.forEach((eventos) => {
          setTimeout(() => { html.addEventListener(eventos, clicouFora) })
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
    eventos.forEach((event) => {
      butonMenu.addEventListener(event, abrirMenu)
    })
  }
}
menuMobile()
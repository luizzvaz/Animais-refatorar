// export default 
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

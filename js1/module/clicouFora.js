export default function clickFora(element, events, retorno) {
  const html = document.documentElement;
  const atributo = 'data-outside';

  function clicouFora(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(atributo);
      events.forEach((eventos) => {
        html.removeEventListener(eventos, clicouFora);
      });
      retorno();
    }
  }
  if (!element.hasAttribute(atributo)) {
    events.forEach((eventos) => {
      setTimeout(() => {
        html.addEventListener(eventos, clicouFora);
      });
    }); element.setAttribute(atributo, "");
  }
}

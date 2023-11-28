export default function tabNav() {
  const tabmenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabcontent = document.querySelectorAll('[data-tab="content"] section');
  function ative(index) {
    tabcontent.forEach((itens) => {
      itens.classList.remove('ativo');
    });
    const direcao = tabcontent[index].dataset.anima;
    tabcontent[index].classList.add(direcao, 'ativo');
  }
  if (tabcontent && tabmenu) {
    tabmenu.forEach((item, index) => {
      item.addEventListener('click', () => {
        ative(index);
      });
    });
  }
}

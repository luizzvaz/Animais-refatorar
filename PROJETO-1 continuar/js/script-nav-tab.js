
function tabNav() {
  const tabmenu = document.querySelectorAll('[data-tab="menu"] li')
  const tabcontent = document.querySelectorAll('[data-tab="content"] section')
  if (tabcontent && tabmenu) {
    function ative(index) {
      tabcontent.forEach((itens) => {
        itens.classList.remove('ativo')
      })
      const direcao = tabcontent[index].dataset.anima
      console.log(direcao)
      tabcontent[index].classList.add(direcao, 'ativo')
    }

    tabmenu.forEach((item, index) => {
      item.addEventListener('click', () => {
        ative(index)
      })
    })
  }
}
tabNav()
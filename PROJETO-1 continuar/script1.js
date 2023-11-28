function tabNav() {
  const tabmenu = document.querySelectorAll('[data-tab="menu"] li')
  const tabcontent = document.querySelectorAll('[data-tab="content"] section')
  if (tabcontent.length && tabmenu.length) {
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
//======================================================================================
//acordion list
function acordionFaq() {
  const acordionList = document.querySelectorAll('[data-acordion="seletor"] dt')
  // if (acordionList.length) {

  //   acordionList[0].nextElementSibling.classList.add('ativar')

  //   acordionList.forEach((item, index) => {
  //     item.addEventListener('click', () => {
  //       console.log(index)
  //       item.nextElementSibling.classList.toggle('ativar')
  //     })
  //   })
  // }

  if (acordionList.length) {

    acordionList[0].nextElementSibling.classList.add('ativar')
    acordionList[0].classList.add('ativar')
    function ativando() {
      this.classList.toggle('ativar')
      this.nextElementSibling.classList.toggle('ativar')
    }
    acordionList.forEach((item) => {
      item.addEventListener('click', ativando)
    })
  }
}
acordionFaq()

//======================================================================================
//scroll suave
function intScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-scroll="suave"] a[href^="#"]')

  if (linksInternos.length) {
    // function scrollSuave(event) {
    //   event.preventDefault();
    //   const herfe = event.currentTarget.getAttribute('href')
    //   const secao = document.querySelector(herfe)
    //   const topo = secao.offsetTop
    //   window.scrollTo({
    //     top: topo,
    //     behavior: "smooth",
    //   })

    // }
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
      link.addEventListener('click', scrollSuave2)
    })
  }
}
intScrollSuave()

//======================================================================================
//scroll anima
function animaPage() {
  const sections = document.querySelectorAll('[data-scroll="anima"]')
  if (sections.length) {
    const windowAtiv = window.innerHeight * 0.6

    function animaScroll() {

      sections.forEach((section) => {
        const secTop = section.getBoundingClientRect().top - windowAtiv
        if (secTop < 0) {
          section.classList.add('ativou')
        }
      })
    }
    animaScroll()
    window.addEventListener('scroll', animaScroll)
  }
}
animaPage()
//======================================================================================
function modalInt() {

  const bntAbrir = document.querySelector('[data-modal="abrir"]')
  const btnFechar = document.querySelector('[data-modal="fechar"]')
  const containerModal = document.querySelector('[data-modal="container"]')
  const divLogin = containerModal.querySelector('div')
  function abrirLogin(evennt) {
    evennt.preventDefault()
    containerModal.classList.add('ativo')
    divLogin.classList.add('ativo')
  }

  function fecharLogin(event) {
    event.preventDefault()
    containerModal.classList.remove('ativo')
    divLogin.classList.remove('ativo')
  }
  function clicarFora(event) {
    if (event.target === this) {
      fecharLogin(event)
    }
    // if (event.target === containerModal) {
    //   fecharLogin(event)
    // }
  }
  function teclaEsc(e) {
    if (e.key === 'Escape') {
      fecharLogin(e)
    }
  }
  bntAbrir.addEventListener('click', abrirLogin);
  btnFechar.addEventListener('click', fecharLogin);
  containerModal.addEventListener('click', clicarFora)
  window.addEventListener('keydown', teclaEsc)
}
modalInt()
//======================================================================================
function balonMapa() {

  const balons = document.querySelectorAll('[data-balon]')
  balons.forEach((balon) => {
    balon.addEventListener('mouseover', mouseDentro)
  })

  function mouseDentro(e) {
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


  function criarBalon(element) {
    const balonBox = document.createElement('div')
    const texto = element.getAttribute('aria-label')
    balonBox.classList.add('balon')
    balonBox.innerText = texto
    const div = document.querySelector('div')
    div.appendChild(balonBox)
    return balonBox
  }
  const fecharBalon = {
    handleEvent() {
      this.balonBo.remove();
      this.element.removeEventListener('mouseleave', fecharBalon)
      this.element.removeEventListener('mousemove', mouseMove)
    }
  }
  const mouseMove = {
    handleEvent(e) {
      this.balonBox.style.top = (e.pageY + 8) + 'px';
      this.balonBox.style.left = (e.pageX + 8) + 'px';
    }
  }
}
balonMapa()
//======================================================================
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
}
dropMenu()
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
//============================================================
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



    eventos.forEach((event) => {
      butonMenu.addEventListener(event, abrirMenu)
    })
  }
}
menuMobile()
//============================================================
function animaNumeros() {
  const numeros = document.querySelectorAll('[data-numeros]')


  function ligarNumero() {
    numeros.forEach((numero) => {
      const total = +numero.innerText
      const incremento = Math.floor(total / 100)
      let i = 0
      const timer = setInterval(() => {
        i += incremento
        numero.innerText = i
        if (i > total) {
          numero.innerText = total
          clearInterval(timer)
        }
      }, 20 * Math.random())
    })
  }

  function observando(mutacao) {
    if (mutacao[0].target.classList.contains('ativou')) {
      observador.disconnect()
      ligarNumero()
    }
  }
  const miraObservador = document.querySelector('.numeros')
  const observador = new MutationObserver(observando)
  observador.observe(miraObservador, { attributes: true })

}
animaNumeros()
//============================================================

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
import animaNumero from './animaNumero.js';

export default function infofetch(url) {
  //add info extra aos animais existentes
  function addInfo(e) {
    const h3 = e.especie;
    const h3selec = document.querySelector('#' + h3);
    const origemSpan = document.createElement('span');
    const origemSpan1 = document.createElement('span');
    const numerosNat = +e.natural;
    origemSpan.classList.add('origem');
    origemSpan.innerHTML = `- ${e.local}  <span data-numeros>${numerosNat}</span> </br> </br> - ${e.local2}  <span data-numeros>${+e.cativeiro}</span> `;

    h3selec.appendChild(origemSpan);
    h3selec.appendChild(origemSpan1);
  }
  //anima os numeros
  function animarNUmeros() {
    const animanumero = new animaNumero('[data-numeros]', 'ativou', '.numeros');
    animanumero.init();
  };
  //puxa as infos extra em um arquivo json
  async function puxarinfo() {
    try {//faz o fecht e aguarda a resposta e transforma resposta em json
      const infoAnimais = await fetch(url);
      const animaisJson = await infoAnimais.json();
      animaisJson.forEach((animal) => {
        addInfo(animal);
        animarNUmeros();
      });
    } catch (erro) {
      console.log(erro);
    }
  };
  return puxarinfo(url);
}

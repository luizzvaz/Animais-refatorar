import animaNumero from './animaNumero.js';

export default function infofetch() {
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

  async function puxarinfo(url) {
    const infoAnimais = await fetch(url);
    const animaisJson = await infoAnimais.json();
    animaisJson.forEach((animal) => {
      addInfo(animal);
      animaNumero();
    });
  }
  puxarinfo('./API/api.json');
}

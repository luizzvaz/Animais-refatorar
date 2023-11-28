export default function acordion() {
  const acordionList = document.querySelectorAll('[data-acordion="seletor"] dt');
  function ativando() {
    this.nextElementSibling.classList.toggle('ativar');
    this.classList.toggle('ativar');
  }
  // if (acordionList.length) {
  //   acordionList[0].nextElementSibling.classList.add('ativar');
  //   acordionList.forEach((item, index) => {
  //     item.addEventListener('click', () => {
  //       console.log(index);
  //       item.nextElementSibling.classList.toggle('ativar');
  //     });
  //   });
  // }

  if (acordionList.length) {
    acordionList[0].classList.add('ativar');
    acordionList[0].nextElementSibling.classList.add('ativar');
    acordionList.forEach((item) => {
      item.addEventListener('click', ativando);
    });
  }
}

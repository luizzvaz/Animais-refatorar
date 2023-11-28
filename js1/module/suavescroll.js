export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }
    this.scrollSuave2 = this.scrollSuave2.bind(this);
  }
  scrollSuave2(event) {
    event.preventDefault();
    const herfe = event.currentTarget.getAttribute('href');
    const secao = document.querySelector(herfe);
    secao.scrollIntoView(this.options);
  }
  addLikEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener('click', this.scrollSuave2);
    });
  }
  init() {
    if (this.linksInternos.length) {
      this.addLikEvent()
    }
    return this;
  }
};

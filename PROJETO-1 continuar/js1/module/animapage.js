export default function animaPage() {
  const sections = document.querySelectorAll('[data-scroll="anima"]');
  const windowAtiv = window.innerHeight * 0.6;
  function animaScroll() {
    sections.forEach((section) => {
      const secTop = section.getBoundingClientRect().top - windowAtiv;
      if (secTop < 0) {
        section.classList.add('ativou');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativou');
      }
    });
  }
  if (sections.length) {
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}

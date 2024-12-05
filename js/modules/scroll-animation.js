export default class ScrollAnimation {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindow = window.innerHeight * 0.6;

    this.scrollAnimation = this.scrollAnimation.bind(this);
  }
  scrollAnimation() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const visibleSection = sectionTop - this.halfWindow < 0;
      if (visibleSection) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }
  init() {
    if (this.sections.length) {
      this.scrollAnimation();
      window.addEventListener('scroll', this.scrollAnimation);
    }
  }
}

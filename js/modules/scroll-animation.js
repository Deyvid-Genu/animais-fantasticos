export default function initScrollAnimation() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  const halfWindow = window.innerHeight * 0.6;
  if (sections.length) {
    function scrollAnimation() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const visibleSection = sectionTop - halfWindow < 0;
        if (visibleSection) {
          section.classList.add('ativo');
        } else if (section.classList.contains('ativo')) {
          section.classList.remove('ativo');
        }
      });
    }

    scrollAnimation();
    window.addEventListener('scroll', scrollAnimation);
  }
}

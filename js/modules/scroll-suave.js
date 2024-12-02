export default function initSmoothScroll() {
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    //window.scrollTo(0, section.offsetTop);
    //   window.scrollTo({
    //     top: section.offsetTop,
    //     behavior: "smooth",
    //   });
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  const linksInternos = document.querySelectorAll(
    "[data-menu='smooth'] a[href^='#']",
  );
  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}

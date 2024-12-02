export default function initAnimaNumeros() {
  const spans = document.querySelectorAll('[data-numero]');
  function animaNumeros() {
    spans.forEach((numero) => {
      const total = +numero.innerText;
      const incremento = total / 100;
      let start = 0;
      const timer = setInterval(() => {
        start = start + incremento;
        numero.innerText = Math.floor(start);
        if (start > total) {
          clearInterval(timer);
          numero.innerText = total;
        }
      }, 25 * Math.random());
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animaNumeros();
    }
  }
  const observer = new MutationObserver(handleMutation);
  const observerTarget = document.querySelector('.numeros');

  observer.observe(observerTarget, { attributes: true });
}

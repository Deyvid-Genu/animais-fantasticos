export default function initModal() {
  const buttonOpen = document.querySelector("[data-modal='abrir']");
  const buttonClose = document.querySelector("[data-modal='fechar']");
  const containerModal = document.querySelector("[data-modal='container']");
  if (buttonOpen && buttonClose && containerModal) {
    function toggleModal(event) {
      event.preventDefault();
      containerModal.classList.toggle('ativo');
    }
    buttonOpen.addEventListener('click', toggleModal);
    buttonClose.addEventListener('click', toggleModal);

    function modalOuterClick(event) {
      if (event.target === this) {
        toggleModal(event);
      }
    }

    containerModal.addEventListener('click', modalOuterClick);
  }
}

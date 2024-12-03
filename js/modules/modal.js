export default class Modal {
  constructor(open, close, container) {
    this.buttonOpen = document.querySelector(open);
    this.buttonClose = document.querySelector(close);
    this.containerModal = document.querySelector(container);

    //binding the object to the this of the callbacks
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.modalOuterClick = this.modalOuterClick.bind(this);
  }

  //open or close the modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  //add the toggle event to the modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  //closes the modal when click out of its bounds
  modalOuterClick(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  //add events to the modal elements
  addModalEvent() {
    this.buttonOpen.addEventListener('click', this.eventToggleModal);
    this.buttonClose.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.modalOuterClick);
  }
  init() {
    if (this.buttonOpen && this.buttonClose && this.containerModal) {
      this.addModalEvent();
    }
    return this;
  }
}

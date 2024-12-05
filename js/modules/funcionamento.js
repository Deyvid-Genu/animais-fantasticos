export default class Funcionamento {
  constructor(weekDate) {
    this.funcionamento = document.querySelector(weekDate);
    this.activeClass = 'aberto';
  }
  funcionamentoInfo() {
    this.weekDays = this.funcionamento.dataset.semana.split(',').map(Number);
    this.hours = this.funcionamento.dataset.hora.split(',').map(Number);
  }

  infoNow() {
    this.dateNow = new Date();
    this.daysNow = this.dateNow.getDay();
    this.hoursNow = this.dateNow.getUTCHours() - 3;
  }

  isOpen() {
    const weekDaysOpen = this.weekDays.indexOf(this.daysNow) !== -1;
    const hoursOpen =
      this.hoursNow >= this.hours[0] && this.hoursNow < this.hours[1];
    return weekDaysOpen && hoursOpen;
  }

  activeOpenStyle() {
    if (this.isOpen()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }
  init() {
    if (this.funcionamento) {
      this.funcionamentoInfo();
      this.infoNow();
      this.activeOpenStyle();
    }
    return this;
  }
}

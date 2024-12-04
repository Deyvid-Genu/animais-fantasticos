export default class NumbersAnimation {
  constructor(spans, numbers, observerClass) {
    this.spans = document.querySelectorAll(spans);
    this.observerTarget = document.querySelector(numbers);
    this.oberverClass = observerClass;

    //binding the this of the object to the callback of the mutation
    this.handleMutation = this.handleMutation.bind(this);
  }

  //Select the `innerText` of an element, convert it to a `Number`, increment from `0` to the number provided by the element, and simultaneously update the element's `innerText` with the result.
  static incrementNumber(number) {
    const total = +number.innerText;
    const incremento = total / 100;
    let start = 0;
    const timer = setInterval(() => {
      start = start + incremento;
      number.innerText = Math.floor(start);
      if (start > total) {
        clearInterval(timer);
        number.innerText = total;
      }
    }, 25 * Math.random());
  }

  //init the number increment for each number provided by the selected element
  animaNum() {
    this.spans.forEach((number) => {
      this.constructor.incrementNumber(number);
    });
  }

  //function that init when mutations happen
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.oberverClass)) {
      this.observer.disconnect();
      this.animaNum();
    }
  }
  // add the mutation observer to verify when the class `ativo` is added to the element `target`
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.spans.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}

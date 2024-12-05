import debounce from './debounce.js';
export default class ScrollAnimation {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindow = window.innerHeight * 0.6;

    //binding the oject as the this of the callback function
    this.checkDistance = debounce(this.checkDistance.bind(this), 20);
  }

  //get the offsetTop of each element
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.halfWindow),
      };
    });
  }

  //compare the offsetTop of the elements with the window scrollY
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.scrollY > item.offset) {
        item.element.classList.add('ativo');
      } else if (item.element.classList.contains('ativo')) {
        item.element.classList.remove('ativo');
      }
    });
  }

  //initate the functions that get the elements offsetTop, the function that compare the element offsetTop with the defined distance in the window scrollY and start the animation
  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }

  //remove the event when scrolling
  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}

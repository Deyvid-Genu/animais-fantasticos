export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    //bindind the object to the this of the callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  //create the tooltip box and append to the body
  createTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  //add the events mousemove and mouseleave when the mouse is over the target element
  onMouseOver(event) {
    this.createTooltipBox(event.currentTarget);
    event.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
    event.currentTarget.addEventListener('mousemove', this.onMouseMove);
  }

  //update the location of the tooltip box as the mouse move over the element and don't let the tooltip exceed the width of the window
  onMouseMove(event) {
    this.tooltipBox.style.top = event.pageY + 20 + 'px';
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = event.pageX - 180 + 'px';
    } else {
      this.tooltipBox.style.left = event.pageX + 20 + 'px';
    }
  }

  //remove the events mousemove and mouseleave when the mouse leaves the target element
  onMouseLeave(event) {
    this.tooltipBox.remove();
    event.currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    event.currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }
  init() {
    if (this.tooltips) {
      this.addTooltipsEvent();
    }
    return this;
  }
}

import outsideClick from './outside-click.js';

export default class DrodownMenu {
  constructor(menus, activeClass, events) {
    this.dropdownMenus = document.querySelectorAll(menus);
    this.activeClass = 'active';

    //define touchstart and click as default arguments of events if the user doesn't define by himself
    if (events === undefined) {
      this.events = ['touchstart', 'click'];
    } else {
      this.events = events;
    }
    this.events = events;

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  //activate the dropdown menu and watch when the user clicks outside of his bounds
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove('active');
    });
  }

  //add the events to the dropdown menu
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      ['touchstart', 'click'].forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }
  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}

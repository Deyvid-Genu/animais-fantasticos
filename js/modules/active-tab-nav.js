export default class activateTabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeCLass = 'ativo';
  }

  // activate the tab by her index
  activetab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeCLass);
    });
    const anime = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeCLass, anime);
  }

  //add events in the tabs
  addTabNavEvent() {
    this.tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => {
        this.activetab(index);
      });
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      //activate the first item
      this.activetab(0);

      this.addTabNavEvent();
    }
    return this;
  }
}

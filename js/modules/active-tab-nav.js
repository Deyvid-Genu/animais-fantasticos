export default function activateTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");
  const activeCLass = 'ativo';

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(activeCLass);
    function activetab(index) {
      tabContent.forEach((section) => {
        section.classList.remove(activeCLass);
      });
      const anime = tabContent[index].dataset.anime;
      tabContent[index].classList.add(activeCLass, anime);
    }

    tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => {
        activetab(index);
      });
    });
  }
}

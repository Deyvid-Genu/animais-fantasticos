import SmoothScroll from './modules/smooth-scroll.js';
import initScrollAnimation from './modules/scroll-animation.js';
import TabNav from './modules/active-tab-nav.js';
import Accordion from './modules/accordion.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initDrodownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import createAnimals from './modules/fetch-animals.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

const smoothScroll = new SmoothScroll("[data-menu='smooth'] a[href^='#']");
smoothScroll.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section",
);
tabNav.init();

const modal = new Modal(
  "[data-modal='abrir']",
  "[data-modal='fechar']",
  "[data-modal='container']",
);
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

createAnimals('../../animaisapi.json', '.numeros-grid');

initScrollAnimation();
initDrodownMenu();
initMenuMobile();
initFuncionamento();
initFetchBitcoin();

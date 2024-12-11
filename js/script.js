import SmoothScroll from './modules/smooth-scroll.js';
import ScrollAnimation from './modules/scroll-animation.js';
import TabNav from './modules/active-tab-nav.js';
import Accordion from './modules/accordion.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import DrodownMenu from './modules/dropdown-menu.js';
import MenuMobile from './modules/menu-mobile.js';
import Funcionamento from './modules/funcionamento.js';
import createAnimals from './modules/fetch-animals.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
import { SlideNav } from './modules/slide.js';

const smoothScroll = new SmoothScroll("[data-menu='smooth'] a[href^='#']");
smoothScroll.init();

const accordion = new Accordion('[data-anime="accordion"] dt', 'active');
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

const animationScroll = new ScrollAnimation("[data-anime='scroll']");
animationScroll.init();

const dropdownMenu = new DrodownMenu('[data-dropdown]');
dropdownMenu.init();

const menuMobile = new MenuMobile("[data-menu='button']", "[data-menu='list']");
menuMobile.init();

const funcionamento = new Funcionamento('[data-semana]');
funcionamento.init();

createAnimals('./animaisapi.json', '.numeros-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addControl('.custom-controls');

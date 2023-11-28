import navtab from './module/navtab.js';
import acordion from './module/acodionn.js';
import ScrollSuave from './module/suavescroll.js';
import pageint from './module/animapage.js';
import modal from './module/modalLongin.js';
import balonmap from './module/balonmap.js';
import dropMenu from './module/dropMenu.js';
import menuMobile from './module/menuMobile.js';
import horario from './module/horarioFunc.js';
import infofetch from './module/fetchanimais.js';

const scrollsuave = new ScrollSuave('[data-scroll="suave"] a[href^="#"]')
scrollsuave.init();
const Acordion = new acordion('[data-acordion="seletor"] dt')
Acordion.init();
horario();
navtab();
pageint();
modal();
balonmap();
dropMenu();
menuMobile();
infofetch();

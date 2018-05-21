import $ from 'jquery';
import './app/FeaturesSlideshow';
import './app/RevealHeader';
import ImageLoading from './app/ImageLoading';
import { TweenMax, morphSVG, TimelineLite } from 'gsap';
import initSections from './app/Sections';
import Rellax from 'rellax';
import SetMobileHeight from './app/SetMobileHeight';
import './app/MobileSlideshow';
import './app/Homepage';

// var rellax = new Rellax('.rellax', {
//     center: true
// });

document.addEventListener("DOMContentLoaded", function (event) {
    initSections('[data-animate]');
});
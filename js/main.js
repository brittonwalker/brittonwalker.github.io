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


$('.mobile-vid-trigger').on('click', function(e) {
    e.preventDefault();
    $('.mobile-vid-frame').addClass('active');
})

document.addEventListener("fullscreenchange", function() {
    if (!document.fullscreenElement) $('.mobile-vid-frame').removeClass('active');
  }, false);
  
  document.addEventListener("msfullscreenchange", function() {
    if (!document.msFullscreenElement) $('.mobile-vid-frame').removeClass('active');
  }, false);
  
  document.addEventListener("mozfullscreenchange", function() {
    if (!document.mozFullScreen) $('.mobile-vid-frame').removeClass('active');
  }, false);
  
  document.addEventListener("webkitfullscreenchange", function() {
    if (!document.webkitIsFullScreen) $('.mobile-vid-frame').removeClass('active');
  }, false);
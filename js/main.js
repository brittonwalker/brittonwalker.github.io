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
})

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

$(document).ready(function() {
    $('.mobile-vid-trigger').on('click', function(ev) {

        console.log('clicked');
        $("#video")[0].src += "&autoplay=1";
        ev.preventDefault();

    });
});
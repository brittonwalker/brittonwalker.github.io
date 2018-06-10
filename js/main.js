import $ from 'jquery';
import './app/FeaturesSlideshow';
import './app/RevealHeader';
import ImageLoading from './app/ImageLoading';
import { TweenMax, morphSVG, TimelineLite } from 'gsap';
import initSections from './app/Sections';
import SetMobileHeight from './app/SetMobileHeight';
import './app/MobileSlideshow';
import './app/Homepage';

document.addEventListener("DOMContentLoaded", function (event) {
    initSections('[data-animate]');
});


var YouTubeIframeLoader = require('youtube-iframe');
$(document).ready( function() {
    var player;
    YouTubeIframeLoader.load(function(YT) {
        player = new YT.Player('player', {
            playerVars: {
                modestbranding: true
              },
            height: '390',
            width: '640',
            videoId: 'QReEdfjUqXw',
            events: {
                'onStateChange': onPlayerStateChange
            }
        });
    });

    function onPlayerReady(event) {
        event.target.playVideo();
    }
    var done = false;
    function onPlayerStateChange(event) {
        if(event.data === 0) {          
            $('.mobile-vid-frame').removeClass('active');
        }        
    }
    function stopVideo() {
        player.stopVideo();
    }

    $('.mobile-vid-trigger').on('click', function(e) {
        e.preventDefault();
        $('.mobile-vid-frame').addClass('active');
        player.playVideo();
    })
})

/**
 * _Slideshow.js
 */

import $ from 'jquery';
import 'slick-carousel';

class Slideshow {

    constructor() {

        var slideIndex;

        var $home = $('.home-slides');

        $home.slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            speed: 1000,
            autoplay: false,
            arrows: false,
            swipe: false
        });

        $home.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            slideIndex = nextSlide;
            if ( nextSlide > currentSlide ) {
                $('.slick-dots').addClass(`position-${nextSlide}`); 
            } else {
                $('.slick-dots').removeClass(`position-${currentSlide}`); 
            }
            if (nextSlide === 7) {
                $('.locked').removeClass('locked');
                $('.features-slides').addClass('no-touch');
            }
        });

        var canScroll = true;

        function navigateSlidesOnScroll (e) {
            e.preventDefault();
            if (canScroll === false) {
                console.log('cant scroll');
                return;
            }
            if (slideIndex >= 7) {
                $('html, body').stop().animate({
                    scrollTop: $('#footer').offset().top
                }, 1000, function() {
                    $home.off();
                });
            }
            if (e.originalEvent.deltaY > 0) {
                $(this).slick('slickNext');
                
                if (slideIndex <= 7) {
                    canScroll = false;
                    setTimeout(function () {
                        canScroll = true;
                    }, 2000)
                } else {
                    $('html, body').stop().animate({
                        scrollTop: $('#footer').offset().top
                    }, 1000,
                    function () {
                        $home.off();
                    });
                }
            } else {
                $(this).slick('slickPrev');
                canScroll = false;
                setTimeout(function () {
                    canScroll = true;
                }, 2000)
            }
        }

        $home.on('wheel click', navigateSlidesOnScroll);

    }
}
new Slideshow();
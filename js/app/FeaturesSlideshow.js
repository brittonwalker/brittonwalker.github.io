/**
 * _Slideshow.js
 */

import $ from 'jquery';
import 'slick-carousel';

class Slideshow {

    constructor() {

        var features = $('.features-slides');
        var item_length = $('.feature-slide').length - 1;
        var dots = $('<div class="slick-dots"></div');
        var slideIndex;

        $('.features-slides').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            swipe: true,
            verticalSwiping: true,
            arrows: false,
        });

        var slides = document.getElementsByClassName('feature-slide');
        var result = Object.keys(slides).map(function(key) {
            return [slides[key]];
        });

        var slideCount = slides.length - 1;
        console.log(slideCount);

        $('.locked').on('click', function() {
            // console.log(slideCount)
            // $(slides[slideCount]).fadeOut(300, function() { 
            //     $(this).remove();
            //     slideCount--;
            // });
        })

        var home = $('.home-slides');

        $('.home-slides').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            speed: 1000,
            autoplay: false,
            arrows: false,
            swipe: false
        });

        $('.features-slides, .home-slides').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            console.log(currentSlide);
            console.log(nextSlide);
            slideIndex = nextSlide;
            $('.slick-dots').addClass(`position-${nextSlide}`);
            if (nextSlide === 7) {
                $('.locked').removeClass('locked');
                $('.features-slides').addClass('no-touch');
            }
        });

        var canScroll = true;

        function navigateSlidesOnScroll (e) {
            e.preventDefault();
            if (canScroll === false) {
                return;
            }
            if (slideIndex >= 7) {
                // $('.home-slides').off();
                $('html, body').stop().animate({
                    scrollTop: $('#footer').offset().top
                }, 1000);
            }
            if (e.originalEvent.deltaY > 0) {
                $(this).slick('slickNext');
                
                if (slideIndex < 7) {
                    canScroll = false;
                    setTimeout(function () {
                        canScroll = true;
                    }, 2000)
                } else {
                    $('html, body').stop().animate({
                        scrollTop: $('#footer').offset().top
                    }, 1000);
                }
            }
        }

        $('.home-slides').on('wheel', navigateSlidesOnScroll);

    }
}
new Slideshow();
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

        $('.features-slides').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            swipe: true,
            verticalSwiping: true,
            arrows: false,
        });

        $('.features-slides').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            console.log(currentSlide);
            console.log(nextSlide);
            $('.slick-dots').addClass(`position-${nextSlide}`);
            if (nextSlide === 7) {
                $('.locked').removeClass('locked');
                $('.features-slides').addClass('no-touch');
            }
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
        });

    }
}
new Slideshow();
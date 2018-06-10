/**
 * _MobileSlideshow.js
 */

import $ from 'jquery';
import 'slick-carousel';
import 'hammerjs';

class MobileSlideshow {

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
            arrows: false,
        });

        var slides = document.getElementsByClassName('feature-slide');
        var result = Object.keys(slides).map(function(key) {
            return [slides[key]];
        });

        var slideCount = slides.length - 1;

        $('.features-slides').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            slideIndex = nextSlide;
            $('.slick-dots').addClass(`position-${nextSlide}`);
            if (nextSlide === 7) {
                $('.locked').removeClass('locked');
                $('.features-slides').addClass('no-touch');
                mc.destroy();
            }
        });

        var canScroll = true;

        function navigateSlidesOnScroll (e) {
            e.preventDefault();
            if (canScroll === false) {
                return;
            }
            
            if (e.originalEvent.deltaY > 0) {
                $(this).slick('slickNext');
                
                if (slideIndex <= 7) {
                    canScroll = false;
                    setTimeout(function () {
                        canScroll = true;
                    }, 1000)
                } else {
                    // End Slideshow Function
                }
            }
        }

        if ( $('.features-page').length ) {
            var mobileSlideContainer = document.getElementById('mobile-slide-container');
            var mc = new Hammer(mobileSlideContainer);

            mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });
            mc.on("panleft panright panup pandown tap press", function(ev) {
                $('.features-slides').slick('slickNext');
            });

            if (nextSlide === 7) {
                mc.destroy();
            }
        }

    }
}
new MobileSlideshow();
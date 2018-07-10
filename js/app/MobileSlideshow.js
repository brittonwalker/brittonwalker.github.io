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
        var leftArrow = '<div class="slick-prev"><i class="icon-arrow-right"></i></div>';
        var rightArrow = '<div class="slick-next"><i class="icon-arrow-right"></i></div>';
        var slideIndex;

        $('.features-slides').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            swipe: false,
            arrows: true,
            prevArrow: $('.arrows-container').append(leftArrow),
            nextArrow: $('.arrows-container').append(rightArrow),
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

            mc.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
            mc.on("swipeup tap", function(ev) {
                $('.features-slides').slick('slickNext');
            });
            
            $('.features-slides').on('afterChange', function (event, slick, currentSlide, nextSlide) {
                slideIndex = nextSlide;
                if (nextSlide === 7) {
                    mc.destroy();
                }
            });
        }

    }
}
new MobileSlideshow();
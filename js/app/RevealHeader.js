/**
 * _RevealHeader.js
 */

import $ from 'jquery';
import 'slick-carousel';

class RevealHeader {

    constructor() {

        $('body').on('wheel', (function (e) {

            if (e.originalEvent.deltaY < 0) {
                $('header').addClass('reveal');
            } else {
                $('header').removeClass('reveal');
            }

        }));

        $('.mobile-click-area').on('click', function() {
            $('header').addClass('reveal');
        })

        var lastY;
        $('body').on('touchmove', function (e) {
            var currentY = e.originalEvent.touches[0].clientY;
            if (currentY > lastY) {
                $('header').removeClass('reveal');
            } else if (currentY < lastY) {
                // $('header').addClass('reveal');
            }
            lastY = currentY;
        });

    }
}
new RevealHeader();

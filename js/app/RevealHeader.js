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

    }
}
new RevealHeader();

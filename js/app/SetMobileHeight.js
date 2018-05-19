/**
 * SetMobileHeight.js
 */

import $ from 'jquery';

class SetMobileHeight {

    constructor() {

        $.each( $('.full'), function() {
            $(this).css( 'height', window.innerHeight );
            console.log(window.innerHeight);
        })

    }
}
new SetMobileHeight();

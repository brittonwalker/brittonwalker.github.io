/**
 * _Gradient.js
 */

import $ from 'jquery';
import 'tinygradient';
var tinygradient = require('tinygradient');

class CreateSVG {

    constructor() {

        let maskA = document.getElementById('partA');
        let maskB = document.getElementById('partB');

        var gradient = tinygradient('white', 'pink', 'blue' );
        let gradientArray = gradient.rgb(360);

        this.clickSVG();

        this.createGradient(0, 361, maskA, maskB, gradientArray);

    }

    makeRGBA(degree) {

        var ratio = 1 - Math.abs((degree / 360));
        var colorVal = Math.floor(255 * ratio);
        
        var colorArray = [colorVal, colorVal, colorVal]
        return 'rgba(' + colorArray.join(',') + ',1)';
       
    }

    clickSVG() {

        $('svg').on('click', () => { 

            if ( $('.svg-wrapper').hasClass('step-one') ) {
                $('.svg-wrapper').removeClass('step-one');
                $('.svg-wrapper').addClass('step-two')
                let maskA = document.getElementById('partA');
                let maskB = document.getElementById('partB');
                var gradient = tinygradient('pink', 'yellow', 'grey' );
                let gradientArray = gradient.rgb(360);
                this.createGradient(45, 361, maskA, maskB, gradientArray);
            } else if ( $('.svg-wrapper').hasClass('step-two') ) {
                $('.svg-wrapper').removeClass('step-two');
                $('.svg-wrapper').addClass('step-three');
            } else if ( $('.svg-wrapper').hasClass('step-three') ) {
                $('.svg-wrapper').removeClass('step-three');
                $('.svg-wrapper').addClass('step-four');
            } else if ( $('.svg-wrapper').hasClass('step-four') ) {
                $('.svg-wrapper').removeClass('step-four');
                $('.svg-wrapper').addClass('step-five');
            } else if ( $('.svg-wrapper').hasClass('step-five') ) {
                $('.svg-wrapper').removeClass('step-five');
                $('.svg-wrapper').addClass('step-six');
            } else if ( $('.svg-wrapper').hasClass('step-six') ) {
                $('.svg-wrapper').removeClass('step-six');
                $('.svg-wrapper').addClass('step-seven');
            } else if ( $('.svg-wrapper').hasClass('step-seven') ) {
                $('.svg-wrapper').removeClass('step-seven');
                $('.svg-wrapper').addClass('step-eight');
            }
                
        });

    }

    createGradient(start, deg, maskA, maskB, colors) {

        console.log(start);
        for (var i = start; i <= deg; i++) {

            console.log(colors[i]);

            let rgbaColors = 'rgba( ' + Math.round(colors[i]._r) + ', ' + Math.round(colors[i]._g) + ', ' + Math.round(colors[i]._b) + ', ' + Math.round(colors[i]._a) + ' )';
            
            var startRotation = deg + i;
            var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('width', 75);
            rect.setAttribute('height', 75);
            rect.setAttribute('fill', this.makeRGBA(i));
            rect.setAttribute('fill', rgbaColors );
            rect.setAttribute('transform', 'rotate(' + startRotation + ' 75 75)');
        
            if (i > deg) {
                maskB.appendChild(rect);
            } else {
                maskA.appendChild(rect);
            }
        
        }

    }

}
new CreateSVG();
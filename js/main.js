import $ from 'jquery';
import './app/FeaturesSlideshow';
import './app/RevealHeader';
import ImageLoading from './app/ImageLoading';
import { TweenMax, morphSVG, TimelineLite } from 'gsap';
import initSections from './app/Sections';

document.addEventListener("DOMContentLoaded", function (event) {
    initSections('[data-animate]');
})

var step = 0;
var canClick = false;
var readyToStart = false;

var morphArray = [
    {morphSVG:"M414,736l-7.411-758.368H414h307.573", shapeIndex:4, fill: "#F3EDE4"},
    {morphSVG:"M414,736l-7.411-758.368H414l295.574-212.991l548.971,89.996l-205.488,676.466", shapeIndex:5, fill: "#FFE2CE"},
    {morphSVG:"M414,736l-7.411-758.368H414l295.574-212.991l548.971,89.996l-148.651,1747.261", shapeIndex:4, fill: "#CAFBD7"},
    {morphSVG:"M414,736l-7.411-758.368H414l295.574-212.991l548.971,89.996l-88.646,2032.29L-57.224,1703.908", shapeIndex:5, fill: "#242130"},
    {morphSVG:"M414,736l-7.411-758.368H414l295.574-212.991l548.971,89.996l-88.646,2032.29L-57.224,1703.908 l-306.031-807.081", shapeIndex:4, fill: "#242130"},
    {morphSVG:"M414,736l-7.411-758.368H414l295.574-212.991l548.971,89.996l-88.646,2032.29L-57.224,1703.908 l-306.031-807.081c0,0-251.493-1812.179,769.843-1494.147", shapeIndex:4, fill: "#242130"},
]

var maxSteps = morphArray.length - 1;
var $imgs = $('.testing img').toArray().reverse();

var textArray = [
    {
        text: 'A Sensory Meditation <br>Experience',
        color: '#3FCCD9'
    },
    {
        text: 'Designed to evolve <br>with you.',
        color: '#7268E3'
    },
    {
        text: 'Sensitive to your <br>environment and intention.',
        color: '#FF6417'
    },
    {
        text: 'Generative sound meditations and adaptive visuals make every session unique.',
        color: '#A09FD1'
    },
    {
        text: 'Minimal, adaptive, and evolved.',
        color: '#A09FD1'
    },
]

function myFunc() {
    canClick = true;
}

function setText() {
    $('.slide-text').html(textArray[step].text);
}

setText();

var tl = new TimelineLite();
tl.fromTo('.one-logo', 1, {opacity: 0, y: 30}, {opacity: 1, y: 0})
.fromTo('.available', 1, {opacity: 0, y: 10}, {opacity: 1, y: 0, zIndex: 10, onComplete:myFunc});



$('#yo').on('swipe', function() {

    // Stop from clicking until animation has completed
    if ( canClick === false ) {
        return;
    } else {
        canClick = false;
    }

    // Tween out One logo for text animation
    TweenMax.to('.one-logo', .5, {y: '-20', opacity: 0, onComplete: resetY});

    function resetY() {
        TweenMax.to('.one-logo', .5, {y: '00'});
    }

    // Step through the gradient animation
    TweenMax.to('#yo #polygon', 1, morphArray[step]);
    TweenMax.to($($imgs[step]), 1, {opacity: 0});

    var start = TweenMax.fromTo('.slide-text', 1, {opacity: 0, y: '10'}, {opacity: 1, y: '0'});
    // Animate the text
    // if ( step < 1 ) {
    //     start;
    // } else {
    //     console.log('heo');
    //     TweenMax.to('.slide-text', 1, {opacity: 0, y: '-10'}, {opacity: 1, y: '0', onComplete: setText()})
    // }
    if ( step < maxSteps ) {

        $('.slide-text').html(textArray[step].text)
        TweenMax.to($('.next-slide-text'), 1, {opacity: 1, y: '-10', onComplete:myFunc})
        TweenMax.set($('.slide-text'), {clearProps:"all"});
        
        $('.slide-text').css('color', textArray[step].color)
        $('.available').css('color', textArray[step].color)

        step = step + 1;
        console.log('stepped, step = ' + step + ' out of ' + maxSteps);

    } else {

        TweenMax.to($('.slide-text'), 1, {opacity: 0, y: '-50'});
        TweenMax.to($('.one-logo'), 1, {opacity: 1});
        $('.wordmark-container').addClass('rise-up');


    }
    
})
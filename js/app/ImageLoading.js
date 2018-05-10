/**
 * ImageLoading.js
 */

import $ from 'jquery';
require('imagesloaded');

export default class ImageLoading {

    constructor() {

        // Background Image with class of .bg-thumb
        $('.bg-thumb').imagesLoaded({
                background: true
            })
            .progress(this.onProgress2);

        // Images from an image tag.
        $('.loading').imagesLoaded()
            .progress(this.onProgress);

    }

    // triggered after each item is loaded
    onProgress(imgLoad, image) {
        $(image.img).removeClass('loading');
    }

    onProgress2(imgLoad, image) {
        $(image.element).removeClass('loading');
    }

}
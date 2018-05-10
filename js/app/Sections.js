class Section {

    constructor(element) {
        this.stateClass = '__animated'
        this.$section = element
        this.events()
    }

    events() {
        this.boundAnimate = this.animate.bind(this)
        this.boundAnimate()
        window.addEventListener('scroll', this.boundAnimate, false)
    }

    animate(event) {
        if (this.isInViewport(this.$section)) {
            if (!this.hasClass(this.$section, this.stateClass)) {
                this.$section.classList.add(this.stateClass)
            }
            window.removeEventListener('scroll', this.boundAnimate, false)
        }
    }

    isInViewport(element) {
        var rect = element.getBoundingClientRect()

        const windowHeight = (window.innerHeight || document.documentElement.clientHeight)
        const windowWidth = (window.innerWidth || document.documentElement.clientWidth)

        const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0)
        const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0)

        return (vertInView && horInView)
    }

    hasClass(element, cls) {
        return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1
    }

}

export default function initSections(selector) {
    if (typeof selector === `string`) {
        for (let section of document.querySelectorAll(selector)) {
            new Section(section)
        }
    }
}

const Body = document.body
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right')

let activeSlide = 2

setBgToBody()

function setBgToBody() {
    Body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}
console.log(slides[0])

function setActiveSlide() {
    slides.forEach((slide) => slide.classList.remove('active'))

 slides[activeSlide].classList.add('active')   
}

rightBtn.addEventListener('click', () => {
    activeSlide++

    if (activeSlide > slides.length - 1) {
        activeSlide = 0
    }

    setBgToBody()
    setActiveSlide()
})

leftBtn.addEventListener('click', () => {
    activeSlide--

    if(activeSlide < 0) {
        activeSlide = slides.length -1
    }

    setActiveSlide()
    setBgToBody()
})
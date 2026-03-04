const reveals = document.querySelectorAll('.reveal')

window.addEventListener('scroll', () => {
    reveals.forEach((reveal) => {
        let coord = reveal.getBoundingClientRect()

        if (coord.bottom > 0 && coord.top < window.innerHeight) {
            reveal.classList.add('reveal_active')
        }
    })
})
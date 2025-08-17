const reveals = document.querySelectorAll('.reveal')

window.addEventListener('scroll', () => {
    reveals.forEach((reveal) => {
        let position = reveal.getBoundingClientRect()

        if (position.top < window.innerHeight && position.bottom > 0) {
            reveal.classList.add('reveal_active')
        }
    })
})
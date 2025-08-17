const bookControlSize = document.querySelectorAll('.book__control_font-size')
const book = document.getElementById('book')

bookControlSize.forEach(control => {
    const fontSizes = control.querySelectorAll('.font-size')

    fontSizes.forEach(fontSize => {
        fontSize.onclick = function(event) {
            event.preventDefault()

            fontSizes.forEach(item => item.classList.remove('font-size_active'))
            this.classList.add('font-size_active')

            book.classList.remove('book_fs-small', 'book_fs-big')

            const size = this.getAttribute('data-size')
            if (size === 'small') {
                book.classList.add('book_fs-small')
            } else if (size === 'big') {
                book.classList.add('book_fs-big')
            }
        }
    });
})

const bookControlColor = document.querySelectorAll('.book__control_color')

bookControlColor.forEach(control => {
    const colors = control.querySelectorAll('.color')

    colors.forEach(color => {
        color.onclick = function(event) {
            event.preventDefault()

            colors.forEach(item => item.classList.remove('color_active'))
            this.classList.add('color_active')

            book.classList.remove('text_color_gray', 'text_color_whitesmoke', 'text_color_black')

            const col = this.getAttribute('data-text-color')
            book.style.color = col
        }
    })
})

const bookControlBg = document.querySelectorAll('.book__control_background')

bookControlBg.forEach(control => {
    const colorsBg = control.querySelectorAll('.color')

    colorsBg.forEach(color => {
        color.onclick = function(event) {
            event.preventDefault()

            colorsBg.forEach(item => item.classList.remove('color_active'))
            this.classList.add('color_active')

            book.classList.remove('bg_color_black', 'bg_color_gray', 'bg_color_white')

            const col = this.getAttribute('data-bg-color')
            book.style.backgroundColor = col
        }
    })
})
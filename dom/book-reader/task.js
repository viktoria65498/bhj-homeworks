const book = document.getElementById('book')
const font__sizes = document.querySelectorAll('.font-size')

font__sizes.forEach(size => {
    size.addEventListener('click', (event) => {
        event.preventDefault()

        font__sizes.forEach(s => {s.classList.remove('font-size_active')})
        size.classList.add('font-size_active')

        book.classList.remove('book_fs-big', 'book_fs-small')
        let bookSize = size.dataset.size

        if (bookSize === 'big') {
            book.classList.add('book_fs-big')
        }

        if (bookSize === 'small') {
            book.classList.add('book_fs-small')
        }
    })
})

const colors = document.querySelectorAll('.book__control_color .color')

colors.forEach(color => {
    color.addEventListener('click', (event) => {
        event.preventDefault()

        colors.forEach(c => {c.classList.remove('color_active')})
        color.classList.add('color_active')

        book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black')
        let bookColor = color.dataset.textColor

        if (bookColor === 'black') {
            book.classList.add('book_color-black')
        }

        if (bookColor === 'gray') {
            book.classList.add('book_color-gray')
        }

        if (bookColor === 'whitesmoke') {
            book.classList.add('book_color-whitesmoke')
        }
    })
})

const bgColors = document.querySelectorAll('.book__control_background .color')

bgColors.forEach(bg => {
    bg.addEventListener('click', (event) => {
        event.preventDefault()

        bgColors.forEach(b => {b.classList.remove('color_active')})
        bg.classList.add('color_active')

        book.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white')
        let bookBg = bg.dataset.bgColor

        if (bookBg === 'black') {
            book.classList.add('book_bg-black')
        }

        if (bookBg === 'gray') {
            book.classList.add('book_bg-gray')
        }

        if (bookBg === 'white') {
            book.classList.add('book_bg-white')
        }
    })
})

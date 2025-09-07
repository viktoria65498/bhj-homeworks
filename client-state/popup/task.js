const modal = document.getElementById('subscribe-modal')
const modalClose = document.querySelector('.modal__close')

modalClose.addEventListener('click', function(e) {
    e.preventDefault()

    modal.classList.remove('modal_active')
    document.cookie = 'modal=close; max-age=3600; path=/'
})

if (!document.cookie.includes('modal=close')) {
    modal.classList.add('modal_active')
}

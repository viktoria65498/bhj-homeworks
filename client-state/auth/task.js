const form = document.getElementById('signin__form')
const url = 'https://students.netoservices.ru/nestjs-backend/auth'
const welcome = document.getElementById('welcome')
const signin = document.querySelector('.signin')
const userId = document.getElementById('user_id')

window.addEventListener('DOMContentLoaded', function() {
    const saved = localStorage.getItem('user_id')

    if (saved) {
        signin.classList.remove('signin_active')
        welcome.classList.add('welcome_active')
        userId.textContent = saved
    }
})

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const xhr = new XMLHttpRequest()
    xhr.open('POST', url)
    xhr.responseType = 'json'

    xhr.addEventListener('load', function() {
            const data = xhr.response

            if (data.success) {
                localStorage.setItem('user_id', data.user_id)
                form.reset()

                signin.classList.remove('signin_active')
                welcome.classList.add('welcome_active')
                userId.textContent = data.user_id
            } else {
                alert('Неверный логин или пароль')
            }
        })

    const formData = new FormData(form);
    xhr.send(formData)
})
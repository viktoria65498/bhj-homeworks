const form = document.getElementById('signin__form')
const url = 'https://students.netoservices.ru/nestjs-backend/auth'
const welcome = document.getElementById('welcome')
const signin = document.querySelector('.signin')
const userId = document.getElementById('user_id')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const xhr = new XMLHttpRequest()
    xhr.open('POST', url)


    xhr.addEventListener('load', function() {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText)

            if (data.success) {
                localStorage.setItem('user_id', data.user_id)

                signin.classList.remove('signin_active')
                welcome.classList.add('welcome_active')
                userId.textContent = data.user_id
            } else {
                alert('Неверный логин или пароль')
            }
        } else {
            alert(xhr.status)
        }
    })

    const formData = new FormData(form);
    xhr.send(formData)
})
const form = document.getElementById('form')
const progress = document.getElementById('progress')
const url = 'https://students.netoservices.ru/nestjs-backend/upload'

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const formData = new FormData(form)
    const xhr = new XMLHttpRequest()

    xhr.upload.onprogress = function(event) {
        progress.value = event.loaded / event.total
    }

    xhr.onload = function() {
        progress.value = 1.0
        alert('Файл загружен')
    }

    xhr.open('POST', url)
    xhr.send(formData)
})
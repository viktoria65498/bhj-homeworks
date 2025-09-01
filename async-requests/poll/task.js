document.addEventListener('DOMContentLoaded', () => {
    const xhr = new XMLHttpRequest()
    const url = 'https://students.netoservices.ru/nestjs-backend/poll'

    const title = document.getElementById('poll__title')
    const answers = document.getElementById('poll__answers')

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {
            const data = JSON.parse(xhr.responseText)
            const poll = data.data

            title.textContent = poll.title

            poll.answers.forEach(answerText => {
                const button = document.createElement('button')
                button.classList.add('poll__answer')
                button.innerHTML = `${answerText}`

                answers.appendChild(button)

                button.addEventListener('click', () => {
                    alert('Спасибо, ваш голос засчитан!')
                })
            })
        }
    })

    xhr.open('GET', url)
    xhr.send()
})
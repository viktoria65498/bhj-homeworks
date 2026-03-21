document.addEventListener('DOMContentLoaded', () => {
    const pollTitle = document.getElementById('poll__title')
    const pollAnswers= document.getElementById('poll__answers')

    const xhr = new XMLHttpRequest()
    const url = 'https://students.netoservices.ru/nestjs-backend/poll'

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {
            const data = JSON.parse(xhr.response)

            pollTitle.textContent = data.data.title

            data.data.answers.forEach(answer => {
                const button = document.createElement('button')
                button.classList.add('poll__answer')
                button.textContent = answer

                pollAnswers.append(button)

                button.addEventListener('click', () => {
                    alert('Спасибо, ваш голос засчитан!')
                })
            })
        }
    })
    
    xhr.open('GET', url)
    xhr.send()
})
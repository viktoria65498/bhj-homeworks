document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loader')
    const items = document.getElementById('items')
    loader.classList.add('loader_active')

    const xhr = new XMLHttpRequest()
    const url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses'

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {
            loader.classList.remove('loader_active')

            const data = JSON.parse(xhr.responseText)
            const valutes = data.response.Valute

            for (const code in valutes) {
                const currency = valutes[code]

                const item = document.createElement('div')
                item.classList.add('item')

                item.innerHTML = `
                    <div class="item__code">${currency.CharCode}</div>
                    <div class="item__value">${currency.Value}</div>
                    <div class="item__currency">руб.</div>
                    `

                items.appendChild(item)
            }
        }
    })

    xhr.open('GET', url)
    xhr.send()
})
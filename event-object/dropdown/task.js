const dropdowns = document.querySelectorAll('.dropdown')

dropdowns.forEach((dropdown) => {
    const value = dropdown.querySelector('.dropdown__value')
    const list = dropdown.querySelector('.dropdown__list')

    value.addEventListener('click', () => {
        list.classList.toggle('dropdown__list_active')
    })

    const items = list.querySelectorAll('.dropdown__item')
    items.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            const itemText = item.querySelector('.dropdown__link').textContent
            value.textContent = itemText

            list.classList.remove('dropdown__list_active')
        })
    })
})
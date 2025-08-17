const dropdowns = document.querySelectorAll('.dropdown')
dropdowns.forEach(dropdown => {
    const dropdownValue = dropdown.querySelector('.dropdown__value')
    const dropdownList = dropdown.querySelector('.dropdown__list')

    function openMenu() {
        dropdownList.classList.toggle('dropdown__list_active')
    }

    dropdownValue.onclick = openMenu

    const dropdownItems = dropdown.querySelectorAll('.dropdown__item')

    function changeValue(e) {
        e.preventDefault()
        const itemText = e.currentTarget.querySelector('.dropdown__link').textContent
        dropdownValue.textContent = itemText
        dropdownList.classList.remove('dropdown__list_active')
    }

    dropdownItems.forEach(item => {
        item.onclick = changeValue
    })
})
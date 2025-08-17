const tabNavigations = document.querySelectorAll('.tab__navigation')
tabNavigations.forEach(tabNavigation => {
    const tabs = tabNavigation.querySelectorAll('.tab')
    const tabContents = tabNavigation.closest('.tabs').querySelectorAll('.tab__content')

    function clickTab() {
        tabs.forEach(tab => tab.classList.remove('tab_active'))
        this.classList.add('tab_active')

        tabContents.forEach(content => content.classList.remove('tab__content_active'))
        const index = Array.from(tabs).indexOf(this)
        tabContents[index].classList.add('tab__content_active')
    }

    tabs.forEach(item  => {
        item.onclick = clickTab
    })
})
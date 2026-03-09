const has_tooltips = document.querySelectorAll('.has-tooltip')
const tooltip = document.createElement('div')
tooltip.className = 'tooltip'

has_tooltips.forEach(has_tooltip => {
    has_tooltip.addEventListener('click', (e) => {
        e.preventDefault()

        has_tooltip.append(tooltip)
        tooltip.classList.add('tooltip_active')
        tooltip.textContent = has_tooltip.getAttribute('title')

        has_tooltip.style.position = 'relative'
        tooltip.style.position = 'absolute'
        tooltip.style.left = '0px'
        tooltip.style.top = has_tooltip.offsetHeight + 'px'
    })  
})
const hasTooltips = document.querySelectorAll('.has-tooltip')
const tooltip = document.createElement('div')
tooltip.className = 'tooltip'
tooltip.style.position = 'absolute'
document.body.append(tooltip)

hasTooltips.forEach(hasTooltip => {
    hasTooltip.addEventListener('click', (e) => {
        e.preventDefault()

        if (tooltip.textContent === hasTooltip.getAttribute('title')) {
            tooltip.classList.toggle('tooltip_active')
            return
        }

        tooltip.classList.add('tooltip_active')
        tooltip.textContent = hasTooltip.getAttribute('title')
        
        tooltip.style.left = hasTooltip.getBoundingClientRect().left + window.scrollX + 'px'
        tooltip.style.top = hasTooltip.getBoundingClientRect().bottom + window.scrollY + 'px'
    })  
})
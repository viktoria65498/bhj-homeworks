const hasTooltips = document.querySelectorAll('.has-tooltip')
const tip = document.createElement('div')
tip.className = 'tooltip'
document.body.appendChild(tip)

hasTooltips.forEach(hasTooltip => {
    hasTooltip.addEventListener('click', function (event) {
        event.preventDefault()

        const coords = hasTooltip.getBoundingClientRect()
        tip.style.left = coords.left + 'px'
        tip.style.top = coords.bottom + 'px'
        
        if (tip.classList.contains('tooltip_active') && tip.textContent === hasTooltip.getAttribute('title')) {
            tip.classList.remove('tooltip_active')
            return
        }

        tip.textContent = hasTooltip.getAttribute('title')
        tip.classList.add('tooltip_active')
    })
})
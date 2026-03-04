const rotators = document.querySelectorAll('.rotator')

rotators.forEach((rotator) => {
    const rotator__case = rotator.querySelectorAll('.rotator__case')

    let index = 0
    setInterval(() => {
        rotator__case[index].classList.remove('rotator__case_active')
        
        index +=1
        if (index === rotator__case.length) {
            index = 0
        }
        
        rotator__case[index].classList.add('rotator__case_active')
    }, 1000)
})
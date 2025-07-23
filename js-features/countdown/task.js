const timerDown = function() {
    const timer = document.getElementById("timer")

    let current = parseInt(timer.textContent)
    
    if (current > 0) {
        current -= 1
        timer.textContent = current
    }

    if (current === 0) {
        clearInterval(intervalId)
        alert("Вы победили в конкурсе!")
    }
}

let intervalId = setInterval(timerDown, 1000)
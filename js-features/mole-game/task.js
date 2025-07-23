let dead = document.getElementById("dead")
let lost = document.getElementById("lost")
let holes = document.getElementsByClassName("hole")

Array.from(holes).forEach(hole => {
    hole.onclick = function click(hole) {
        if (this.classList.contains("hole_has-mole")) {
            dead.textContent = parseInt(dead.textContent) + 1
        } else {
            lost.textContent = parseInt(lost.textContent) + 1
        }

        if (dead.textContent == 10) {
            alert("Вы победили!")
            dead.textContent = 0
            lost.textContent = 0
        }

        if (lost.textContent == 5) {
            alert("Вы проиграли.")
            dead.textContent = 0
            lost.textContent = 0
        }
    }
})
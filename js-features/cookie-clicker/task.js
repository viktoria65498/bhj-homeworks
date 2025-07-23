const imageCookie = document.getElementById("cookie")
const clickerCounter = document.getElementById("clicker__counter")

imageCookie.onclick = function click() {
    let counter = parseInt(clickerCounter.textContent)
    counter +=1
    clickerCounter.textContent = counter

    imageCookie.width = 230
    setTimeout(() => {imageCookie.width = 200}, 100)
}
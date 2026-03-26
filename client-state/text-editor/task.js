const editor = document.getElementById('editor')

window.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('editor')
    editor.value = saved
})

editor.addEventListener('input', () => {
    localStorage.setItem('editor', editor.value)
})

const button = document.getElementById('button')

button.addEventListener('click', () => {
    localStorage.removeItem('editor')
    editor.value = ''
})
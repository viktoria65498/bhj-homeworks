const editor = document.getElementById('editor')

window.addEventListener('DOMContentLoaded', function() {
    const saved = localStorage.getItem('editor')
    editor.value = saved
})

editor.addEventListener('input', function() {
    localStorage.setItem('editor', editor.value)
})
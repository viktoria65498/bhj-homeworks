const form = document.getElementById('tasks__form')
const input = document.getElementById('task__input')
const btn = document.getElementById('tasks__add')
const list = document.getElementById('tasks__list')

form.addEventListener('submit', function(event) {
    event.preventDefault()

    const task = document.createElement('div')
    task.className = 'task'

    if (input.value.trim()) {
        task.innerHTML = `<div class="task__title">${input.value}</div>
            <a href="#" class="task__remove">&times;</a>`
        list.appendChild(task)
        input.value = ''
    }

    const remove = task.querySelector('.task__remove')
    remove.addEventListener('click', function(e) {
        e.preventDefault()
        task.remove()
    })
})
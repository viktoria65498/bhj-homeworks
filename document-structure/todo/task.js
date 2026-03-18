const input = document.getElementById('task__input')
const btn = document.getElementById('tasks__add')
const list = document.getElementById('tasks__list')

function addTask() {
    const title = input.value.trim()

    if (!title) {
        return
    }

    list.insertAdjacentHTML('afterbegin', `
        <div class="task">
            <div class="task__title">${title}</div>
            <a href="#" class="task__remove">&times;</a>
        </div>
    `)

    input.value = ''
}

btn.addEventListener('click', (e) => {    
    e.preventDefault()
    addTask()
})

list.addEventListener('click', (e) => {
    if (e.target.classList.contains('task__remove')) {
        e.preventDefault()
        e.target.closest('.task').remove()
    }
})

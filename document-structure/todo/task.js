const input = document.getElementById('task__input')
const btn = document.getElementById('tasks__add')
const list = document.getElementById('tasks__list')

function addTask() {
    if (!input.value.trim()) {
        return
    }

    const task = document.createElement('div')
    task.className = 'task'

    const title = document.createElement('div')
    title.className = 'task__title'
    title.textContent = input.value
    input.value = ''

    const remove = document.createElement('a')
    remove.className = 'task__remove'
    remove.textContent = '×'

    remove.addEventListener('click', (e) => {
        e.preventDefault()
        task.remove()
    })

    task.append(title, remove)
    list.append(task)
}

input.addEventListener('keydown', (e) => {    
    if (e.key === 'Enter') {
        e.preventDefault()
        addTask()
    }
})

btn.addEventListener('click', (e) => {    
    e.preventDefault()
    addTask()
})

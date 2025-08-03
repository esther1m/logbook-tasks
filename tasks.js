class Task{
    static uniqueid = 0

    constructor(description){
        this.id = Task.uniqueid++
        this.taskDescription =  description
        this.completed = false
    }
}

class TaskManager {
    constructor (...task){
        this.taskList = []
    }

    addTask (description){
        const newTask = new Task (description)
        this.taskList.push(newTask)
    }
}
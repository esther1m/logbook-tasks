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

    listTasks(){
        this.taskList.forEach((task) => {
            console.log(
                `ID: ${task.id}, Description: ${task.taskDescription}, Completed: ${task.completed}`
                )
        })
    }

    completeTask(id){
        this.taskList.forEach((task) => {
            if (id === task.id) {
                task.completed = true;
            }
        })
    }

    deleteTask(id){
        this.taskList = this.taskList.filter((task => task.id !== id))
    }

    filterTasks(condition){
        return this.taskList.filter((task => condition(task)))
    }
}

// Create a new task manager
const taskManager = new TaskManager();
// Add tasks
taskManager.addTask("Buy groceries");
taskManager.addTask("Read a book");
taskManager.addTask("Write code");

// Mark a task as completed
taskManager.completeTask(1);
taskManager.listTasks(); // Should display all tasks

taskManager.deleteTask(2);
taskManager.listTasks();

const completedTasks = taskManager.filterTasks(task => task.completed);
console.log(...completedTasks);

class Task{
    static uniqueid = 0

    constructor(description, priority, dueDate){
        this.id = Task.uniqueid++
        this.taskDescription =  description
        this.completed = false

        this.priority = priority
        this.dueDate = dueDate
    }
}

class TaskManager {
    constructor (...task){
        this.taskList = []
    }

    addTask (description, priority, dueDate){
        const newTask = new Task (description, priority, dueDate)
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
taskManager.addTask("Buy groceries", 1, "08-08-2025");
taskManager.addTask("Read a book", 3, "11-12-2025");
taskManager.addTask("Write code", 2, "15-09-2025");

// Mark a task as completed
taskManager.completeTask(1);
taskManager.listTasks(); // Should display all tasks

taskManager.deleteTask(2);
taskManager.listTasks();

const completedTasks = taskManager.filterTasks(task => task.completed);
console.log(...completedTasks);

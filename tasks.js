class Task{
    static uniqueid = 0

    constructor(description, priority, dueDate){
        this.id = Task.uniqueid++ // Assign a unique ID to the task
        this.taskDescription =  description
        this.completed = false // Task starts as incomplete

        this.priority = priority
        this.dueDate = dueDate
    }
}

// Class for managing a list of tasks
class TaskManager {
    constructor (...task){
        this.taskList = [] // Initialize an empty task list
    }

     // Add a new task to the list
    addTask (description, priority, dueDate){
        const newTask = new Task (description, priority, dueDate)
        this.taskList.push(newTask)
    }

    // Display all tasks in the console
    listTasks(){
        this.taskList.forEach((task) => {
            console.log(
                `ID: ${task.id}, Description: ${task.taskDescription}, Completed: ${task.completed}, Priority: ${task.priority}, Due by: ${task.dueDate} \n`
                )
        })
    }

    // Mark a task as completed given its ID
    completeTask(id){
        this.taskList.forEach((task) => {
            if (id === task.id) {
                task.completed = true;
            }
        })
    }

    // Remove a task from the list given its ID
    deleteTask(id){
        this.taskList = this.taskList.filter((task => task.id !== id))
    }

    // Return a filtered list based on a condition function
    filterTasks(condition){
        return this.taskList.filter((task => condition(task)))
    }

    // Sort tasks by ascending priority (lowest number = highest priority)
    priorityTasks() {
        this.taskList.sort((a,b) => a.priority - b.priority)
        
    }
}

// --- Testing examples ---

// Create a new task manager
const taskManager = new TaskManager();
// Add tasks
taskManager.addTask("Buy groceries", 1, "08-08-2025");
taskManager.addTask("Read a book", 3, "11-12-2025");
taskManager.addTask("Write code", 2, "15-09-2025");

// Mark a task as completed
taskManager.completeTask(1);
taskManager.listTasks(); // Should display all tasks

// Sort tasks by priority and display again
taskManager.priorityTasks();
taskManager.listTasks();

// Delete the task with ID 2 and show the updated list
taskManager.deleteTask(2);
taskManager.listTasks();

// Filter for completed tasks and log them
const completedTasks = taskManager.filterTasks(task => task.completed);
console.log(...completedTasks);



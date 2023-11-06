// Get references to HTML elements
let inputBox = document.getElementById("input-box")
let listContainer = document.getElementById("list-container")
const taskCount = document.getElementById('count');

// Function to add a task
function addTask(){
    if(inputBox.value === ''){
        alert("You have to write some thing")
    }else{
        let li = document.createElement('li')
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)

    }
    inputBox.value = ''
    updateTaskCount()
    saveData();
}

// Event listener for task list items and close buttons
listContainer.addEventListener("click",function(e){
if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked")
    saveData();
}else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    updateTaskCount()
    saveData();
}
},false)

// Function to save task data to local storage
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

// Function to display tasks from local storage
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}

// Function to update the task count and display it
function updateTaskCount() {
    const tasks = document.querySelectorAll('li').length;
    taskCount.innerHTML = `All tasks : ${tasks}`;
}

// Display tasks from local storage when the page loads
showTask();
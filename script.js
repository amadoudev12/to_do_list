const taskinput = document.getElementById('taskinput')
const addbutton = document.getElementById('addtask')
const listTask = document.getElementById('taskList')
loadTask()
function addtask(){
    const task = taskinput.value.trim()
    if(task){
        createTask(task)
        savedTask()
    }else{
        alert('entrez un tache')
    }
    taskinput.value = ''
}

function createTask(task){
    let listItem = document.createElement('li')

    listItem.textContent=task

    // creation du button del 
    let delBtn = document.createElement('button')
    delBtn.textContent='x'
    listItem.appendChild(delBtn)
    delBtn.addEventListener('click',()=>{
        listTask.removeChild(listItem)
        savedTask()
    })

    listTask.appendChild(listItem)
}

addbutton.addEventListener('click',()=>{
    addtask()
})

function savedTask(){
    let tasks=[]
    listTask.querySelectorAll('li').forEach((item)=>{
        tasks.push(item.textContent.replace('delete',''))
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function loadTask(){
    const tasks = JSON.parse(localStorage.getItem('tasks'))
    if(tasks){
        tasks.forEach(createTask)
    }
}


// l'horloge 
let time = document.querySelector('.time')
let message = document.querySelector('.message')
let toDay = document.querySelector('.date')
function timeDisplay(){
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let secondes = date.getSeconds()
    if (hours<10){hours = "0"+hours}
    if (minutes<10){minutes = "0"+minutes}
    if (secondes<10){secondes = "0"+secondes}
    time.textContent=`${hours}:${minutes}:${secondes}`
    if(hours<12){
        message.textContent="Bonne journée ma YELLI"
    }else{
        message.textContent="Bonne soirée ma YELLI" 
    }

    // recuperation de la date 
    const jour = ["lundi","mardi","mercredi","Jeudi","Vendredi","Samedi","Dimanche"]
    const indexDay = date.getDay()
    const indexDate = date.getDate()
    if(indexDate<10){indexDate = "0"+indexDate}
    const year = date.getFullYear()
   
}
setInterval(()=>{
    timeDisplay()
},1000)
timeDisplay()
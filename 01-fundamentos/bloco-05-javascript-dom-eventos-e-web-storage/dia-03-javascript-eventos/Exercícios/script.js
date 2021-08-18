function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  // 1 Requisito 
  function incertDays (){
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
    const daysLine = document.querySelector('#days');
  
    for (let index = 0; index < dezDaysList.length; index += 1) {
      const day = dezDaysList[index];
      const dayOfTheMonth = document.createElement('li');
      if (day === 24 || day === 31){ 
        dayOfTheMonth.classList.add('day', 'holiday');
        dayOfTheMonth.innerHTML = day;
        daysLine.appendChild(dayOfTheMonth);
      } else if (day === 4 || day === 11 || day === 18){ 
          dayOfTheMonth.classList.add('day', 'friday');
          dayOfTheMonth.innerHTML = day;
          daysLine.appendChild(dayOfTheMonth);
        } else if (day === 25 ){ 
            dayOfTheMonth.classList.add('day', 'holiday', 'friday');
            dayOfTheMonth.innerHTML = day;
            daysLine.appendChild(dayOfTheMonth);
          } else {
              dayOfTheMonth.className = 'day';
              dayOfTheMonth.innerHTML = day;
              daysLine.appendChild(dayOfTheMonth);
            }
    }
  }
  incertDays();

// Requisito 2 
function buttonHoliday (buttonName) {

let addButton = document.createElement('button');
addButton.innerHTML = buttonName;
addButton.id = 'btn-holiday';
document.querySelector('.buttons-container').appendChild(addButton);
}
buttonHoliday('Holidays')
// Requisito 3

function colorHoliday() {
  const getHolidayButton = document.querySelector('#btn-holiday');
  const classHoliday = document.getElementsByClassName('holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let newColor = 'white';
  
  getHolidayButton.addEventListener('click', function(){
    for ( let index in classHoliday){
      if (classHoliday[index].style.backgroundColor === newColor){
        classHoliday[index].style.backgroundColor = backgroundColor
      } else {
        classHoliday[index].style.backgroundColor = newColor;
        }
    }
  });
}
colorHoliday();

// Requisito 4 

function buttonFriday (buttonName) {

  let addButton2 = document.createElement('button');
  addButton2.innerHTML = buttonName;
  addButton2.id = 'btn-friday';
  document.querySelector('.buttons-container').appendChild(addButton2);
  }
buttonFriday('Feriados')

// Requisito 5

function wordFriday(arrayFriday) {
  const getFridayButton = document.querySelector('#btn-friday');
  const classFriday = document.getElementsByClassName('friday');
  
  let newFriday= 'Sextou';
  
  getFridayButton.addEventListener('click', function(){
    for ( let index in classFriday){
      if (classFriday[index].innerHTML !== newFriday){
        classFriday[index].innerHTML = newFriday
      } else {
        classFriday[index].innerHTML = arrayFriday[index];
        }
    }
  });
}
let fridayArray = [4, 11, 18, 25];
wordFriday(fridayArray);

//Requisito 6

function mouseOverDay (){
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};
function mouseOutDay (){
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  })
};
mouseOutDay ();
mouseOverDay ();

// Requisito 7 8
function newTask (task) {
  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('spam');

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName);
}
newTask('Projeto: Lista To Do');

// Requisito 8

function newTaskDiv (color) {
  let tasksContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask);
  
}
newTaskDiv('green');

// Requisito 9

function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

setTaskClass();

// Requisito 10 

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();

// Requisito 11 - Bonus

function addNewTask() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  })

  getInputField.addEventListener('keyup', function(event) {
    if (event.keyCode === 13 && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
};

addNewTask();
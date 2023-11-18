const taskList = document.getElementsByTagName("li");
const list = document.getElementById('tasks');
const close = document.getElementsByClassName("close");
const inputVal = document.getElementById('todo-input');

const main = () => {
  let i = 0;
  for (i = 0; i < taskList.length; i++) {
    const closeTag = addCloseSign();
    taskList[i].appendChild(closeTag);
  }

  // Add a "checked" symbol when clicking on a list item
  list.addEventListener('click', (e) => {
    if (e.target.tagName === 'li'.toUpperCase()) e.target.classList.toggle('checked');
  }, false);

  const taskElem = document.createElement('li');
  const task = localStorage.getItem('task')
  if (task !== "" || typeof task !== null || typeof task !== "undefined") {
    taskElem.append(task)
    list.appendChild(taskElem).setAttribute('class', 'task')
    const closeTag = addCloseSign()
    taskElem.appendChild(closeTag);
  }

  // Click on a close button to hide the current list item
  deleteTask()
}

const addCloseSign = () => {
  const span = document.createElement("span");
  const txt = document.createTextNode("\u00D7");
  span.setAttribute('class', "close");
  span.appendChild(txt);
  return span
}

const deleteTask = () => {
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      const div = this.parentElement;
      div.style.display = "none";
      localStorage.removeItem('task');
    }
  }
}

const addTask = () => {
  const taskElem = document.createElement('li');
  const task = document.createTextNode(inputVal.value)

  taskElem.appendChild(task);
  
  if (inputVal.value === "") alert("Must write something on input field!");
  else list.appendChild(taskElem).setAttribute('class', 'task');

  let items = [];
  items.push(inputVal.value)
  localStorage.setItem('task', items)
  inputVal.value = "";

  const closeTag = addCloseSign();
  taskElem.appendChild(closeTag);

  deleteTask()
}

main()

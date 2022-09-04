let unfinished = ['Go to codepen and get inspired', 'Pick a project'];
let finished = ['Take out the dog for a walk'];

localStorage

const now = new Date().toDateString();
const dateObj = document.querySelector(".date");
dateObj.innerHTML = now;
console.log(now);

const newElement = () => {
  let inputValue = document.querySelector(".addNewToDo").value;
 
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    unfinished.push(inputValue);
    showPendingItems();
    showFinishedItems();
  } 
}


const showPendingItems = () => {
  const pedingNumber = document.querySelector(".pending");
  pedingNumber.innerHTML = `You have ${unfinished.length} pendig items:`
  let myList = document.querySelector(".myList");
  myList.innerHTML = "";
  unfinished.forEach((task, idx) => {
    let text = document.createTextNode(task);
    let li = document.createElement("li");
    li.appendChild(text)
    myList.appendChild(li);

    li.addEventListener('click', () => {
      finished.push(unfinished[idx]);
      unfinished.splice(idx, 1);
      showPendingItems();
      showFinishedItems();
    })
  })

}

const showFinishedItems = () => {
  const finishedNumber = document.querySelector(".completed");
  finishedNumber.innerHTML = `Completed tasks: ${Math.round(finished.length / (finished.length + unfinished.length)*100)} %:`
  let myList = document.querySelector(".CompletedList");
  myList.innerHTML = "";

  finished.forEach((task) => {
    let text = document.createTextNode(task);
    let li = document.createElement("li");
    li.appendChild(text)
    myList.appendChild(li);
    li.classList.toggle('checked')
  })
}

const createButton = () => {
  const clearAllButton = document.querySelector(".clear");
  clearAllButton.addEventListener('click', () => {
    unfinished = [];
    showPendingItems();
  });

  const showCompleteButton = document.querySelector(".show");
  showCompleteButton.addEventListener('click', () => {
    const completedList = document.querySelector(".CompletedList");
    completedList.classList.toggle('hidden');
    if(completedList.classList.contains("hidden")) {
      showCompleteButton.innerHTML = 'Show Complete'
    } else {
      showCompleteButton.innerHTML = "Hide Complete"
    }
  })
}


const init = () => {
  showPendingItems();
  showFinishedItems();
  createButton();
}


init();
// localStorage.clear()
let unfinished = JSON.parse(localStorage.getItem("unfinished")) || [];
let finished = JSON.parse(localStorage.getItem("finished")) || [];

localStorage;

const now = new Date().toDateString();
const dateObj = document.querySelector(".date");
dateObj.innerHTML = now;
console.log(now);

const newElement = () => {
  let inputField = document.querySelector(".addNewToDo");

  if (inputField.value === "") {
    alert("You must write something!");
  } else {
    unfinished.push(inputField.value);
    localStorage.setItem("unfinished", JSON.stringify(unfinished));
    inputField.value = "";
    showPendingItems();
    showFinishedItems();
  }
};

const showPendingItems = () => {
  const pedingNumber = document.querySelector(".pending");
  pedingNumber.innerHTML = `You have ${unfinished.length} pendig items:`;
  let myList = document.querySelector(".myList");
  myList.innerHTML = "";
  unfinished.forEach((task, idx) => {
    let text = document.createTextNode(task);
    let li = document.createElement("li");
    li.appendChild(text);
    myList.appendChild(li);

    li.addEventListener("click", () => {
      finished.push(unfinished[idx]);
      unfinished.splice(idx, 1);
      localStorage.setItem("finished", JSON.stringify(finished));
      localStorage.setItem("unfinished", JSON.stringify(unfinished));
      showPendingItems();
      showFinishedItems();
    });
  });
  const chill = document.querySelector(".chill");

  if (unfinished.length > 0) {
    pedingNumber.classList.remove("hidden");
    chill.classList.add("hidden");
  } else {
    pedingNumber.classList.add("hidden");
    chill.classList.remove("hidden");
  }
};

const showFinishedItems = () => {
  const finishedNumber = document.querySelector(".completed");
  finishedNumber.innerHTML = `Completed tasks: ${Math.round(
    (finished.length / (finished.length + unfinished.length)) * 100
  )} %:`;
  let myList = document.querySelector(".CompletedList");
  myList.innerHTML = "";

  finished.forEach((task) => {
    let text = document.createTextNode(task);
    let li = document.createElement("li");
    li.appendChild(text);
    myList.appendChild(li);
    li.classList.toggle("checked");
  });
};

const createButtons = () => {
  const showCompleteButton = document.querySelector(".show");
  showCompleteButton.addEventListener("click", () => {
    const completedList = document.querySelector(".CompletedList");
    completedList.classList.toggle("hidden");
    if (completedList.classList.contains("hidden")) {
      showCompleteButton.innerHTML = "Show Complete";
    } else {
      showCompleteButton.innerHTML = "Hide Complete";
    }
  });

  const clearAllButton = document.querySelector(".clear");
  clearAllButton.addEventListener("click", () => {
    unfinished = [];
    localStorage.setItem("unfinished", JSON.stringify(unfinished));
    showPendingItems();
    showFinishedItems();
  });
};

const init = () => {
  showPendingItems();
  showFinishedItems();
  createButtons();
};

init();

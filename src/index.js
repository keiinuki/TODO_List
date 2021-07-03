import "./styles.css";

const addTaskTrigger = document.getElementsByClassName("js-addTask-trigger")[0];
const addTaskTarget = document.getElementsByClassName("js-addTask-target")[0];
const addTaskValue = document.getElementsByClassName("js-addTask-value")[0];

const removeTask = (removeButton) => {
  const targetTask = removeButton.closest("li");
  addTaskTarget.removeChild(targetTask);
};

const completeTask = (completeButton) => {
  const targetTask = completeButton.closest("li");
  targetTask.classList.add("isComplete");
  targetTask.removeChild(completeButton);
};

const addTask = (task) => {
  const listItem = document.createElement("li");
  const removeButton = document.createElement("button");
  const completeButton = document.createElement("button");

  removeButton.innerText = "消すよ！";
  removeButton.style.marginLeft = "15px";
  removeButton.style.position = "abslute";
  removeButton.addEventListener("click", () => removeTask(removeButton));

  completeButton.innerText = "やったよ！";
  completeButton.style.marginLeft = "15px";
  completeButton.style.position = "relative";
  completeButton.addEventListener("click", () => completeTask(completeButton));

  listItem.innerText = task;
  listItem.style.width = "200px";
  listItem.style.backgroundColor = "red";
  listItem.append(completeButton);
  listItem.append(removeButton);
  addTaskTarget.appendChild(listItem);
};

addTaskTrigger.addEventListener("click", (event) => {
  const task = addTaskValue.value;
  addTask(task);
  addTaskValue.value = "";
});

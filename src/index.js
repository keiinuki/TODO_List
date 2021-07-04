import "./styles.css";

const addTaskTrigger = document.getElementsByClassName("addTask-trigger")[0];
const addTaskTarget = document.getElementsByClassName("addTask-target")[0];
const addTaskValue = document.getElementsByClassName("addTask-value")[0];

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

  removeButton.innerText = "やめるわ！";
  removeButton.style.marginLeft = "15px";
  removeButton.style.float = "right";
  removeButton.addEventListener("click", () => removeTask(removeButton));

  completeButton.innerText = "やったで！";
  completeButton.style.marginLeft = "15px";
  completeButton.style.float = "right";
  completeButton.addEventListener("click", () => completeTask(completeButton));

  listItem.innerText = task;
  listItem.style.width = "400px";
  listItem.style.height = "48px";
  listItem.appendChild(completeButton);
  listItem.appendChild(removeButton);
  addTaskTarget.appendChild(listItem);
};

addTaskTrigger.addEventListener("click", (event) => {
  const task = addTaskValue.value;
  addTask(task);
  addTaskValue.value = "";
});

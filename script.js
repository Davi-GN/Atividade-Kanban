const input = document.getElementById("taskInput");
const button = document.getElementById("addTaskBtn");
const list = document.getElementById("taskList");

const li = document.createElement("li");
const btn = document.createElement("button");

const count  = () => {
    const length = document.getElementById("count");
    length.textContent = list.childElementCount;
}

// Add
button.addEventListener("click", () => {
    const li = document.createElement("li");
    const btn = document.createElement("button");

    li.textContent = input.value;
    btn.textContent = "X";
    li.appendChild(btn);
    list.appendChild(li);
    
    // Remove
    btn.onclick = () => {
        btn.parentElement.remove();
        count();
    }
    count();
})
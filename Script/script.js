const input = document.getElementById("taskInput");
const button = document.getElementById("addTaskBtn");
const list = document.getElementById("taskList");

const li = document.createElement("li");
const btn = document.createElement("button");

const count  = () => {
    const length = document.getElementById("count");
    length.textContent = list.childElementCount;
}

// Focus addBtn
document.addEventListener("keydown", (e) => {
    if (e.key == "/") {
       input.focus(); 
    }
})

// Add
button.addEventListener("click", () => {
    const li = document.createElement("li");
    const btn = document.createElement("button");

    li.setAttribute("draggable", "true");

    li.id = Math.random().toString(16).slice(2);

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
});
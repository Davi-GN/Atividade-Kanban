const containers = document.querySelectorAll(".container");
const tasks = document.querySelectorAll("li");

tasks.forEach( task => {
    task.addEventListener("dragstart", (e) => {
        console.log("top");
    });
});


document.body.addEventListener("dragstart", (e) => {
    if (e.target.matches("li")) {
        e.dataTransfer.setData('text/plain', e.target.id);
    }
});


containers.forEach( container => {
    container.addEventListener("dragenter", (e) => {
        e.preventDefault();
        container.style.border = "solid 1px rgba(0,0,0,0.2)";
        container.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    });
    container.addEventListener("dragover", (e) => {
        e.preventDefault();
    });
    container.addEventListener("dragleave", (e) => {
        container.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";
        container.style.border = "none";
    });
    container.addEventListener("drop", (e) => {
        container.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";
        container.style.border = "none";

        const id = e.dataTransfer.getData('text/plain');
        const draggable = document.getElementById(id);

        e.target.appendChild(draggable);
    });
});
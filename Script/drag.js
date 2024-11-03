const containers = document.querySelectorAll(".container");



containers.forEach( container => {
    container.addEventListener("dragenter", (e) => {
        container.style.border = "solid 1px rgba(0,0,0,0.2)";
        container.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    });
    container.addEventListener("dragleave", (e) => {
        container.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";
        container.style.border = "none";
    })
});
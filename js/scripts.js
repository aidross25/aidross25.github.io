// Rotating Titles
const titles = ["a Software Developer", "a Student", "Driven", "Passionate"];
let titleIndex = 0;

function updateTitle() {
    document.getElementById("dynamic-title").textContent = titles[titleIndex];
    titleIndex = (titleIndex + 1) % titles.length;
}

setInterval(updateTitle, 3000);

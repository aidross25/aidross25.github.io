// Rotating Titles
const titles = ["a Software Developer", "a Student", "Driven", "Passionate"];
let titleIndex = 0;

function updateTitle() {
    document.getElementById("dynamic-text").textContent = titles[titleIndex];
    titleIndex = (titleIndex + 1) % titles.length;
}

setInterval(updateTitle, 3000);

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message Sent! (Integration Placeholder)");
});


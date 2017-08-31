var message = document.getElementById("message");

document.getElementById("north").addEventListener("click", function (event) {
   message.innerText = "north";
});
document.getElementById("west").addEventListener("click", function (event) {
   message.innerText = "west";
});
document.getElementById("east").addEventListener("click", function (event) {
   message.innerText = "east";
});
document.getElementById("south").addEventListener("click", function (event) {
   message.innerText = "south";
});


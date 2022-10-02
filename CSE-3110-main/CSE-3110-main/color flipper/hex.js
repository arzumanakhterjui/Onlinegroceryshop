
let color_database = ["red", "green", "blue", "yellow", "pink", "purple"]
document.querySelector("#btn").addEventListener("click", function() {
    let index = Math.floor(Math.random() * 6);
    console.log(index);
    document.body.style.backgroundColor = color_database[index];
    document.querySelector(".color").textContent = color_database[index];
    document.querySelector(".color").style.color = color_database[index];
})
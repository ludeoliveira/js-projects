const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

// set up a loop who will generate the 6 values hex color code based on the positions of the hex array. ex: #f15025. the loop will run 6 times and add the random value to the hexColor value.

btn.addEventListener("click" , function() {
    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]
    }
    
    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor
})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}
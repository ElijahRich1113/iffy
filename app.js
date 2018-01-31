//*console.log("Hi B"); *//
var input = document.getElementById("input");

var button = document.getElementById("btn1");

var answer = document.getElementById("output");

var picture = document.getElementById("picture")

button.addEventListener("click", function(){
    // console.log(input.value);
    if (input.value === "3") {
        answer.innerHTML = "Triangle";
        picture.src = "./assets/triangle.png";
    }
    else if (input.value === "4") {
        answer.innerHTML = "Square";
        picture.src = "./assets/square.png";
    }
    else if (input.value === "5") {
        answer.innerHTML = "Pentagon";
        picture.src = "./assets/pentagon.png";
    }
    else if (input.value === "6") {
        answer.innerHTML = "Hexagon";
        picture.src = "./assets/hexagon.png";
    }
    else if (input.value === "7") {
        answer.innerHTML = "Heptagon";
        picture.src = "./assets/heptagon.png";
    }
    else if (input.value === "8") {
        answer.innerHTML = "Octagon";
        picture.src = "./assets/octagon.png"
    }
    else if (input.value === "9") {
        answer.innerHTML = "Nonagon";
        picture.src = "./assets/nonagon.png";
    }
    else if (input.value === "10") {
        answer.innerHTML = "Decagon";
        picture.src = "./assets/decagon.png";
    }
    else {
        answer.innerHTML = "Try Again!";
        picture.src = "./assets/sadface.png";
    }
});
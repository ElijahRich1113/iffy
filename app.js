//*console.log("Hi B"); *//
var input = document.getElementById("input");

var button = document.getElementById("btn1");

var answer = document.getElementById("output");

var picture = document.getElementById("picture")

button.addEventListener("click", function(){
    // console.log(input.value);
    if (input.value === "3") {
        answer.innerHTML = "Triangle";
        picture.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/OPM_Generalization_link_symbol.svg/1232px-OPM_Generalization_link_symbol.svg.png";
    }
    else if (input.value === "4") {
        answer.innerHTML = "Square";
        answer.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/2000px-Square_-_black_simple.svg.png";
    }
    else if (input.value === "5") {
        answer.innerHTML = "Pentagon";
        answer.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Screw_Head_-_Pentagon_External.svg/1024px-Screw_Head_-_Pentagon_External.svg.png";
    }
    else if (input.value === "6") {
        answer.innerHTML = "Hexagon";
        answer.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Feather-core-octagon.svg/600px-Feather-core-octagon.svg.png";
    }
    else if (input.value === "7") {
        answer.innerHTML = "Heptagon";
        answer.src = "https://upload.wikimedia.org/wikipedia/commons/9/93/Regular_heptagon.svg";
    }
    else if (input.value === "8") {
        answer.innerHTML = "Octagon";
        answer.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Regular_octagon.svg/1200px-Regular_octagon.svg.png"
    }
    else if (input.value === "9") {
        answer.innerHTML = "Nonagon";
        answer.src = "https://d30y9cdsu7xlg0.cloudfront.net/png/633633-200.png";
    }
    else if (input.value === "10") {
        answer.innerHTML = "Decagon";
        answer.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Regular_decagon.svg/1200px-Regular_decagon.svg.png";
    }
    else {
        answer.innerHTML = "Try Again!";
        answer.src = "https://vignette.wikia.nocookie.net/scream-queens/images/5/52/White-smiley-face-png-white_frowning_face_u2639_icon_256x256.png/revision/latest?cb=20160627203959";
    }
});
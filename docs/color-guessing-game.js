// select all
var colors = generateRandomColors(6);
var target_color = pickColor();

// select all text elements
var squares = document.querySelectorAll(".square");
var color_display = document.getElementById("color-display");
var message_display = document.querySelector("#message");
var h1 = document.querySelector("h1");

// select all buttions
var reset_button = document.querySelector("#reset");
var hard_button = document.getElementById("hard");
var easy_button = document.getElementById("easy");


// logic for clicking easy button
easy_button.addEventListener("click", function () {
    // toggle colors of buttions
    easy_button.classList.add("selected");
    hard_button.classList.remove("selected");

    // reset colors for game
    colors = generateRandomColors(3);
    target_color = pickColor();

    // update the header
    color_display.textContent = target_color;
    h1.style.backgroundColor = "steelblue";

    // update display to show 3 colors
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }

});

hard_button.addEventListener("click", function () {
    easy_button.classList.remove("selected");
    hard_button.classList.add("selected");

    // reset colors for game
    colors = generateRandomColors(6);
    target_color = pickColor();

    // update the header
    color_display.textContent = target_color;
    h1.style.backgroundColor = "steelblue";

    // update display to show 6 colors
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "initial";
    }
});

// logic for clicking reset button
reset_button.addEventListener("click", function () {
    // reset colors
    if (easy_button.classList.contains("selected")) {
        colors = generateRandomColors(3);
    }
    else {
        colors = generateRandomColors(6);
    }
    target_color = pickColor();
    color_display.textContent = target_color;
    h1.style.backgroundColor = "steelblue";
    message_display.textContent = "";

    // reset text and buttons
    reset_button.textContent = "New Colors"

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
});

color_display.textContent = target_color;

for (var i = 0; i < squares.length; i++) {
    // initial colors for squares
    squares[i].style.backgroundColor = colors[i];

    // click listeners for squares
    squares[i].addEventListener("click", function () {
        // get color of clicked square
        var clicked_color = this.style.backgroundColor;
        // compare color of square to the target color
        if (clicked_color === target_color) {
            message_display.textContent = "Correct";
            changeColorsOnWin(target_color);
            h1.style.backgroundColor = clicked_color;
            reset_button.textContent = "Play Again?"
        }
        else {
            this.style.backgroundColor = "#232323";
            message_display.textContent = "Try Again";
        }
    });
}

// changes the color of all squares to the target/winning color
function changeColorsOnWin(color) {
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

// picks a random color to be the winning color
function pickColor() {
    var rand_number = Math.floor(Math.random() * colors.length);
    return colors[rand_number];
}

// generates an array of random rgb colors
function generateRandomColors(num) {
    color_array = [];

    for (var i = 0; i < num; i++) {
        color_array.push(generateRandomColor());
    }

    return color_array;
}

// generate a random rgb color
function generateRandomColor() {

    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}
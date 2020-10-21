function rotateMe(event) {
    event.preventDefault();
    let r = 0;
    r += event.deltaY * 10;
    this.style.transform = `rotate(${r}deg)`;
}

let dots = document.getElementsByClassName("dot");

for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener('wheel', rotateMe, false);
}

function changeColor() {

    let colors = [
        "rgb(58, 13, 140)",
        "rgb(75, 11, 150)",
        "rgb(8, 40, 146)",
        "rgb(7, 65, 158)",
        "magenta",
    ];

    // let's make sure every click results in a color change
    // on the chance our old color matches our new color we want to choose again
    while(true) {

        let oldColor = this.style.backgroundColor;
        let color = colors[Math.floor(Math.random()*colors.length)];

        // if old color does not equal new color then update the style and break the loop
        if (oldColor != color) {
            this.style.backgroundColor = color;
            break;
        }
    }
}

let squares = document.getElementsByClassName("square");

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', changeColor, false);
}
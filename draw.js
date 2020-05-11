// initialise with an empty canvas
function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    background(255);
}

// take inputs
const color_input = document.getElementById('color');
const weight_input = document.getElementById('weight');
const clear = document.getElementById('clear')
const save = document.getElementById('save')

// keep track of all paths
const paths = [];
let curr_path = []

//called after setup indefinitely looped
function draw(){
    noFill();

    if (mouseIsPressed){
        const point = {
            x: mouseX,
            y: mouseY,
            color: color_input.value,
            weight: weight_input.value
        };
        curr_path.push(point);
    }

    paths.forEach(path => {
        beginShape();
        path.forEach(point => {
            stroke(point.color);
            strokeWeight(point.weight);
            vertex(point.x, point.y);
        });
        endShape();
    })
    
}

// event fired when mouse id pressed
function mousePressed(){
    // clean the current path
    curr_path = [];
    //push the path in paths array
    paths.push(curr_path);
}

// remove all paths and clear the background
clear.addEventListener('click', () => {
    paths.splice(0);
    background(255);
});

// save the current canvas
save.addEventListener('click', () => {
    saveCanvas('my-drawing', 'png')
});
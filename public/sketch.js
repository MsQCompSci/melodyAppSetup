//variable for JSON object with file names
let songs;

function preload() {
  //load and save the songs folder as JSON
  songs = loadJSON("/songs"); 
}

function setup() {
    createCanvas(400, 400);
    //print song names to console
    console.log(songs)
}
  
function draw() {
    background(220);
}

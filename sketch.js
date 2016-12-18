var canvas;
var score;
var button;
var initialInput;
var submitButton;
var database;

function setup() {
  canvas = createCanvas(100,100);
  score = 0;
  createP('Click the button to get points.');
  button = createButton('click');
  button.mousePressed(increaseScore);
  initialInput = createInput('initials');
  submitButton = createButton('submit');
  submitButton.mousePressed(submitScore);



  var config = {
  apiKey: "AIzaSyASMHOeW94v4OOoNK3od71ViwCQ1UwGXwY",
  authDomain: "my-not-awesome-project-b1cde.firebaseapp.com",
  databaseURL: "https://my-not-awesome-project-b1cde.firebaseio.com",
  storageBucket: "my-not-awesome-project-b1cde.appspot.com",
  messagingSenderId: "597045138992"
};
firebase.initializeApp(config);
database= firebase.database();
}

function draw() {
  background(51);
  textAlign(CENTER);
  textSize(32);
  fill(255);
  text(score, width / 2, height / 2);
}

function submitScore() {
  var data = {
    initials: initialInput.value(),
    score: score
  }
  console.log(data);
  var ref = database.ref('scores');
  ref.push(data);
}

function increaseScore() {
  score++;
}

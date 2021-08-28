//FIRST STEP: Added addEventListener on one button click

// document.querySelector("button").addEventListener("click", handleClick);
//
// function handleClick() {
//   alert("I got clicked!");
// }


//SECOND STEP: Simplified it

// document.querySelector("button").addEventListener("click", function handleClick() {
//   alert("I got clicked!");
// });


//THIRD STEP: Added addEventListener on each button click

// var numberOfDrumButtons = document.querySelectorAll(".drum").length;  //.drum to target only drum buttons and not other buttons on page
//
// for (var i = 0; i < numberOfDrumButtons; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {   //this is an anonymous function
//     alert("I got clicked!");
//   });
// }


//FOURTH STEP: Add sound
// var numberOfDrumButtons = document.querySelectorAll(".drum").length;  //.drum to target only drum buttons and not other buttons on page
//
// for (var i = 0; i < numberOfDrumButtons; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {   //this is an anonymous function
//
//     var audio = new Audio("sounds/crash.mp3");
//   });
//     audio.play();
// }

//FIFTH STEP: Move sound to switch case and add style after click

//Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length; //.drum to target only drum buttons and not other buttons on page

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() { //this is an anonymous function

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}


//Detecting Key Press
document.addEventListener("keypress", function(event) {

  makeSound(event.key);
  buttonAnimation(event.key);
})


function makeSound(key) {

  switch (key) {
    case 'w':
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
    break;

    case 'a':
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
    break;

    case 's':
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
    break;

    case 'd':
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
    break;

    case 'j':
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
    break;

    case 'k':
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
    break;

    case 'l':
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
    break;

    default: console.log(key);
  }
}



function buttonAnimation( currentKey ) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100)

}

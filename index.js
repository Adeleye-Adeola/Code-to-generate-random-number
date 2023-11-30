// To use this set your input to id "rd-text", from MD"
// To use any just comment 2 block of code for one to work

// Random Number
var inputArea = document.getElementById("rd-text");
var minValue;
function generate() {
  var randomNumber = Math.floor(Math.random() * 900) + 100;
  inputArea.value = randomNumber;
}

// Random Alphabet
var inputArea = document.getElementById("rd-text");
var alph = "abcdefghijklmnopqrstuvwxyz";
function generate() {
  var randomNumber1 = Math.floor(Math.random() * alph.length);
  inputArea.value = alph[randomNumber1];
}

// Random Number and alphabet
var inputArea = document.getElementById("rd-text");
var alph = "abcdefghijklmnopqrstuvwxyz";
function generate() {
  var randomNumber1 = Math.floor(Math.random() * 10);
  var randomNumber2 = Math.floor(Math.random() * 10);
  var randomNumber3 = Math.floor(Math.random() * 10);
  var randomNumber4 = Math.floor(Math.random() * alph.length);
  var randomNumber5 = Math.floor(Math.random() * alph.length);
  inputArea.value =
    randomNumber1 +
    "-" +
    alph[randomNumber4] +
    "-" +
    randomNumber2 +
    randomNumber3 +
    "-" +
    alph[randomNumber5];
}

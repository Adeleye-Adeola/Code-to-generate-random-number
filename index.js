// To use this set your input to id "rd-text", from MD//
var inputArea = document.getElementById("rd-text");
var minValue;
function generate() {
  var randomNumber = Math.floor(Math.random() * 900) + 100;
  inputArea.value = randomNumber;
}

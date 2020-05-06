// JS Goes here - ES6 supported

import "./css/main.css";


document.getElementById("build-button").addEventListener("click", showBuildInstructions, false);

function showBuildInstructions() {
  var x = document.getElementById("build-instructions");
  var y = document.getElementById("build-button");
  x.style.display = "block";
  y.style.display = "none";
}

console.log("hi there");

// JS Goes here - ES6 supported

import "./css/main.css";



function showBuildInstructions() {
  var x = document.getElementById("build-instructions");
  var y = document.getElementById("build-button");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
  }
}

console.log("hi there")

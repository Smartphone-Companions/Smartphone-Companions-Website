// JS Goes here - ES6 supported

import "./css/main.css";


// Mobile nav js
let menuIsOpen = false
const menu = document.getElementById('menu')
const menuBtn = document.getElementById('menu-btn')

const closeMenu = () => {
  menu.className = menu.className.replace('left-50', 'left-100')
  menuBtn.innerHTML = 'Menu'
  menuIsOpen = false
}

const openMenu = () => {
  menu.className = menu.className.replace('left-100', 'left-50')
  menuBtn.innerHTML = 'Close'
  menuIsOpen = true
}

window.onload = () => {
  console.log("Hi there")
  // bind click handler to menu button
  menuBtn.onclick = (e) => {
    e.preventDefault()
    if (menuIsOpen) closeMenu()
    else openMenu()
  }
}

window.onresize = closeMenu


var el = document.getElementById("build-button");
if (el != null) {
  el.addEventListener("click", showBuildInstructions, false);
}

function showBuildInstructions() {
  var x = document.getElementById("build-instructions");
  var y = document.getElementById("build-button");
  x.style.display = "block";
  y.style.display = "none";
}

console.log("hi there");

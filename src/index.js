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

// under construction emblem
//https://github.com/GeorgeHastings/emblem

var Emblem = {
  init: function(el, str) {
    var element = document.querySelector(el);
    var text = str ? str : element.innerHTML;
    element.innerHTML = '';
    for (var i = 0; i < text.length; i++) {
      var letter = text[i];
      var span = document.createElement('span');
      var node = document.createTextNode(letter);
      var r = (360/text.length)*(i);
      var x = (Math.PI/text.length).toFixed(0) * (i);
      var y = (Math.PI/text.length).toFixed(0) * (i);
      span.appendChild(node);
      span.style.webkitTransform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
      span.style.transform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
      element.appendChild(span);
    }
  }
};

Emblem.init('.under-construction');

//This is e.i.
var listItems = document.querySelectorAll('.box');

function logThis()          {
for(i = 0; i < listItems.length; i++) {
  listItems[i].classList.toggle('selectedcolor');
  }
}

for(i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener('mouseenter', logThis);
  listItems[i].addEventListener('mouseleave', logThis);
}

//This is e.ii.



var message1 = document.createTextNode('Oooh - so close, but no cigar');
var message2 = document.createTextNode('DING DING DING - We have a winner');
var message3 = document.createTextNode('Oops, butter luck next time');


var box1 = document.getElementById('Box1');
var box2 = document.getElementById('Box2');
var box3 = document.getElementById('Box3');

var startButton = document.querySelector('.heading button');

var placeholder1 = document.getElementById('Placeholder1');
var placeholder2 = document.getElementById('Placeholder2');
var placeholder3 = document.getElementById('Placeholder3');


//This is e.iii with e.ii.


function showMessage1() {
  placeholder1.appendChild(message1);
  startButton.classList.remove('hide');
}

function showMessage2() {
  placeholder2.appendChild(message2);
  startButton.classList.remove('hide');
}

function showMessage3() {
  placeholder3.appendChild(message3);
  startButton.classList.remove('hide');
}

box1.addEventListener('click', showMessage1);
box2.addEventListener('click', showMessage2);
box3.addEventListener('click', showMessage3);

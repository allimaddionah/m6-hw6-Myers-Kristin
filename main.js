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

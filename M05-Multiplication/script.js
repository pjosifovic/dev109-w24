//variables
var table = prompt("Please enter an integer:");             
var i = 1;               
var msg = '<h2>Multiplication Table</h2>';              

// loops
while (i < 11) {
  msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
  i++;
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;

console.log('Hello WhollyCoder...');
displayArea = document.getElementById('output');
initialValue = 0;
numbers = [];
operation = '';
equalPressed = false;
setDisplayValue(initialValue);

numberButtons = document.getElementsByClassName('btn-number');
for( i = 0; i < numberButtons.length; i++){
  numberButtons[i].addEventListener('click', numberButtonFunction);
}

operationButtons = document.getElementsByClassName('btn-operation');
for( i = 0; i < operationButtons.length; i++){
  operationButtons[i].addEventListener('click', operationButtonFunction);
}

zeroButton = document.getElementById('btn-zero');
zeroButton.addEventListener('click', zeroButtonFunction);

clearButton = document.getElementById('btn-clear');
clearButton.addEventListener('click', clearButtonFunction);

oppositeButton = document.getElementById('btn-opposite');
oppositeButton.addEventListener('click', oppositeButtonFunction);

percentButton = document.getElementById('btn-percent');
percentButton.addEventListener('click', percentButtonFunction);

decimalButton = document.getElementById('btn-decimal');
decimalButton.addEventListener('click', decimalButtonFunction);

equalButton = document.getElementById('btn-equal');
equalButton.addEventListener('click', equalButtonFunction);

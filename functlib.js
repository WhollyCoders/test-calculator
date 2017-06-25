function getDisplayValue(){
  return displayArea.innerHTML;
}

function setInitialValue(initialValue){
  displayArea.innerHTML = initialValue;
}

function setDisplayValue(value){
  if(toString(value) > 10){
    value.toPrecision(10);
  }
  displayArea.innerHTML = value;
}

function numberButtonFunction(e){
  if(equalPressed == true){
    setDisplayValue(initialValue);
    equalPressed = false;
  }
  console.log('The '+e.target.innerHTML+' Button Was Clicked...');
  buttonValue = e.target.innerHTML;
  if(getDisplayValue() == '0'){
    setDisplayValue(buttonValue);
  }else{
    displayArea.innerHTML += buttonValue;
  }
}

function zeroButtonFunction(){
  if(equalPressed == true){
    setDisplayValue(initialValue);
    equalPressed = false;
  }
  if(displayArea.innerHTML == '0'){
    setDisplayValue(initialValue);
  }else{
    displayArea.innerHTML += '0';
  }

}

function clearButtonFunction(){
  setDisplayValue(initialValue);
}

function oppositeButtonFunction(){
  setDisplayValue(parseFloat(getDisplayValue()) * -1);
}

function percentButtonFunction(){
  if(getDisplayValue().length <= 10){
      setDisplayValue(parseFloat(getDisplayValue()) / 100);
  }else{
      setDisplayValue(parseFloat(getDisplayValue()).toPrecision(10) / 100);
  }
}

function decimalButtonFunction(){
  if(equalPressed == true){
    setDisplayValue(initialValue);
    equalPressed = false;
  }
  if(!displayArea.innerHTML.includes('.')){
    displayArea.innerHTML += '.';
  }
}

function operationButtonFunction(e){
  displayValue = getDisplayValue();
  operation = e.target.name;
  console.log('The '+operation+' - ['+e.target.innerHTML+'] Button Was Clicked...');
  numbers[0] = parseFloat(displayValue);
  setDisplayValue(initialValue);
}

function equalButtonFunction(){
  displayValue = getDisplayValue();
  numbers[1] = parseFloat(displayValue);
  calculate();
  equalPressed = true;
}

function calculate(){
  switch (operation) {
    case 'addition':
      setDisplayValue(numbers[0] + numbers[1]);
      break;
    case 'subtraction':
      setDisplayValue(numbers[0] - numbers[1]);
      break;
    case 'multiplication':
      setDisplayValue(numbers[0] * numbers[1]);
      break;
    case 'division':
      setDisplayValue(numbers[0] / numbers[1]);
      break;
    default:
      console.log('***** There has been an ERROR!!! *****');
  }
}

function makeExpontial(value){
  value = parseFloat(value);
  setDisplayValue(value.toExponential());
}

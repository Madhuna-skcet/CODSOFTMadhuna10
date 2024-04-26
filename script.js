function addToDisplay(value) {
    document.getElementById('display').value += value;
  }

  function clearDisplay() {
    document.getElementById('display').value = '';
  }

  function calculate() {
    var expression = document.getElementById('display').value;
    var result = eval(expression);
    document.getElementById('display').value = result;
  }

  function trigFunction(func) {
    var expression = document.getElementById('display').value;
    var inputValue = eval(expression);
    var result;
    switch (func) {
      case 'sin':
        result = Math.sin(inputValue * Math.PI / 180); // Convert degrees to radians
        break;
      case 'cos':
        result = Math.cos(inputValue * Math.PI / 180); // Convert degrees to radians
        break;
      case 'tan':
        result = Math.tan(inputValue * Math.PI / 180); // Convert degrees to radians
        break;
    }
    document.getElementById('display').value = result;
  }
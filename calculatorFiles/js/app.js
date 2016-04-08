$(document).ready(function(){
  var calculator = Object.create(Calculator);
  var display = $('#display');
  var lastOperation = '';
  var lol = 5;

  $('#clear').on('click', clear);
  $('#plus').on('click', plus);
  $('#equal').on('click', equal);
  $('#subtract').on('click', subtract);
  $('#multiply').on('click', multiply);
  $('#divide').on('click', divide);
  $('.num').on('click', updateDisplay);
  $('mem-plus').on('click', memAdd);
  $('mem-minus').on('click', memSub);
  $('mem-recall').on('click', memDisplay);
  $('mem-clear').on('click', memClear);
  $('dot').on('click', dot);


  function dot(){
    calculator.operation = '.';
    display.text(calculator.current + ".");
  }

  function updateDisplay(){
    if(calculator.operation == 'n'){
      calculator.current = 10*calculator.current + parseInt($(this).text());
      display.text(calculator.current);
    }
    else{
      calculator.current = 10*calculator.current + parseInt($(this).text());
      display.text(calculator.last + " " + calculator.operation + " " + calculator.current);
    }

  }

  function divide(){
    equal();
    calculator.last = calculator.current;
    calculator.operation = '/';
    display.text(calculator.current + " / ");
    calculator.current = 0;
  }

  function multiply(){
    equal();
    calculator.last = calculator.current;
    calculator.operation = 'X';
    display.text(calculator.current + " X ");
    calculator.current = 0;
  }

  function subtract(){
    equal();
    calculator.last = calculator.current;
    calculator.operation = '-';
    display.text(calculator.current + " - ");
    calculator.current = 0;
  }

  function plus(){
    equal();
    calculator.last = calculator.current;
    calculator.operation = '+';
    display.text(calculator.current + " + ");
    calculator.current = 0;
  }

  function clear(){
    calculator.last = 0;
    calculator.current = 0;
    calculator.operation = 'n';
    display.text(calculator.current);
  }

  function equal(){
    switch(calculator.operation){
      case '/':
        calculator.current = calculator.last / calculator.current;
        display.text(calculator.current);
        break;
      case 'X':
        calculator.current = calculator.last * calculator.current;
        display.text(calculator.current);
        break;
      case '+':
        calculator.current = calculator.last + calculator.current;
        display.text(calculator.current);
        break;
      case '-':
        calculator.current = calculator.last - calculator.current;
        display.text(calculator.current);
        break;
    }
  }

  function memAdd(){

  }

  function memSub(){

  }

  function memClear(){

  }

  function memDisplay(){
    
  }



});

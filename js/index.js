var n = prompt('Введите номер числа Фибоначчи:');
var parametrA = 1;
var parametrB = 0;
var fibonacci;


if(n === 1) {
  document.write('Число Фибоначчи: ' + parametrB);
}
if(n === 0) {
  document.write('Число Фибоначчи: ' + parametrA);
}

function calcNumberFibonacci(numb){
  var i;  
  var result;
  for(i = 2; i < n; i++) {
    result = parametrA + parametrB;
    parametrB = parametrA;
    parametrA = result;
  } 
  return result;
} 

fibonacci = calcNumberFibonacci(n); 

document.write('number: ' + fibonacci);




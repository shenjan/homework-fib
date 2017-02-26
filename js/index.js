var n = prompt('Введите номер числа Фибоначчи:');
var parametrA = 2;
var parametrB = 1;

if(n < 2) {
  document.write('Число (цикл): ' + parametrB);
}

function fibonacciLoop(numb){
  var i;  
  var result;
  for(i = 2; i < n; i++) {
    result = parametrA + parametrB;
    parametrB = parametrA;
    parametrA = result;
  } 
  return result;
} 

function fibonacciRecursion(number) {
  if(number < 2) {
    return 1;
  }
  else {
    return fibonacciRecursion(number-2) + fibonacciRecursion(number-1);  
  }
}

var fibonacci1 = fibonacciLoop(n);
var fibonacci2 = fibonacciRecursion(n); 

document.write('Число (цикл): ' + fibonacci1);
document.write('<br>Число (рекурсия): ' + fibonacci2);



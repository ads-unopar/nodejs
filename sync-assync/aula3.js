//console.log('Primeiro');
//console.log('Segundo');
//Em contrapartida, uma API assíncrona é aquela em que a API iniciará uma operação e retornará imediatamente (antes da conclusão da operação). Assim que a operação terminar, a API usará algum mecanismo para executar operações adicionais. Por exemplo, o código abaixo imprimirá "Segundo, Primeiro" porque, mesmo que o método setTimeout() seja chamado primeiro e retorna imediatamente, a operação não se completa por vários segundos.
setTimeout(function() {
   console.log('Primeiro');
   }, 3000);
console.log('Segundo');




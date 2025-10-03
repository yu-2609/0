// I am a Comment. I do Nothing

// How to Declare variables:
let x = 5;
const y = 6; 
// y = 10; 會出現錯誤
// How to Compute values:
let z = x + y;

// How to Output values:
console.log(z);
function add(a, b) {
  return a + b;
}
console.log(add(3, 5)); // 8

const multiply = (a, b) => { a * b; };
console.log(multiply(4, 6)); // 24

function greet(name) {
  return  "Hello, " + name + "!";
}
//repeatGreeting 接收另一個宣告fn 函式當參數 → 高階函式
function repeatGreeting(fn, name) {
  console.log(fn(name));
  console.log(fn(name));
}
repeatGreeting(greet, 'Amy');
// Hello, Amy!
// Hello, Amy!

alert('hello world');
//建立自訂函式

function hello(){      
    alert('00');
}
function hello2(name){  
    let n = prompt("請輸入暱稱");
    alert('hello, '+name+'你的暱稱是'+n);
}
function sum(x,y){
    let s = x + y;
    return s;
}
console.log(sum(4,5));

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
const result = document.querySelector(".result");
const count = document.querySelector(".count");

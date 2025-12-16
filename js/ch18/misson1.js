let num1 = 2;
let num2 = 3;

let num3 = num1-- * --num2;
// 읽기먼저하기때문에 2 * 쓰기먼저 하기때문에 2 = 4
console.log('num1:', num1); //결과값1
console.log('num2:', num2); //결과값2
console.log('num3:', num3);
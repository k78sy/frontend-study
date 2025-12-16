// Math.random(); 메소드를 호출하면 0.0000 ~ 0.9999 사이의 랜덤값을 리턴한다
// 리턴: 일시켰으니 값을 가져옴

let rVal = Math.random();
let rVal2 = console.log('rVal:', rVal);
console.log('rVal2:', rVal2)

// 0~9.9999
let rVal3 = Math.random() * 10;
console.log('rVal3:', rVal3);
console.log('parseInt(rVal3):', parseInt(rVal3));

let rVal4 = parseInt(Math.random() * 10);
console.log('rVal4:', rVal4);
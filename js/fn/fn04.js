/*
지금까지 함수를 만들때 function 키워드를 사용했다..
자바스크립트에서 함수는 1급 객체이다.
즉, 주소값을 가질 수 있다.
*/

// sum이라고 하는 변수에 함수 주소값이 저장된 것.
function sum(n1, n2) {
    console.log('sum:', n1 + n2);
}

const con1 = sum; // sum에 저장되어있는 함수의 주솟값을 복사해 con1에 대입
console.log(typeof con1);
con1(20, 50);

console.log('1:', sum);
sum(10, 20);
sum = 'abc'; // 변수다보니 문자열 넣으면 앞의 값이 날아가버림
console.log('2:', sum)
console.log('con1:', con1);
con1(60, 6);

// javascript&파이썬: 함수도 있고, 메소드도 있음
// JAVA: 함수는 없고, 메소드가 있음
// C: 함수가 있고, 메소드가 없음
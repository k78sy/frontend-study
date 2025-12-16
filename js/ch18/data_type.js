/*
자료형 (데이터 유형)
- bloolean: 참(true), 거짓(false)
*/


let bool1 = true;
let bool2 = false;

console.log('bool1:', bool1);
console.log('bool2:', bool2);

console.log('typeof bool1:', typeof bool1);
console.log('typeof bool1:', typeof (bool1));

// 불린 타입은 비교 연산자(관계 연산자)의 결과로 많이 사용된다.
let n1 = 10, n2 = 20;
bool1 = n1 > n2;

console.log('bool1:', bool1);

console.log('n1 > 10', n1 > 10);
console.log('n1 >= 10', n1 >= 10);
console.log('-----------------------');
console.log('n2 <= 20', n1 <= 20);
console.log('n2 < 20', n1 < 20);
console.log('-----------------------');
console.log('n1 == n2', n1 == n2); // ==은 앞과 뒤가 같다
console.log('n1 != n2', n1 != n2); // !=은 앞과 뒤가 같지 않다/ !는 not / ==의 반대

console.log('-----------논리연산자 ! (NOT)');
console.log('!(n1 == n2)', !(n1 == n2)); 
console.log('!(n1 != n2)', !(n1 != n2)); 
console.log('-----------논리연산자 && (AND)');
console.log('true && true', true && true); 
console.log('true && true && false', true && true && false);
// &&연산자는 모든 값이 true여야만 true, 단 하나만 flase여도 false
console.log('-----------논리연산자 || (or)');
console.log('false || false', false || false); 
console.log('false || true || false', false || true || false);
// ||연산자는 모든 값이 false여야만 false, 단 하나만 true여도 true
/*
화살표 함수 (Arrow Function)

function 키워드를 쓰는 문법이 ES5까지 문법
화살표 함수는 ES6 이후에 나온 문법
*/

function sum(n1, n2) {
    console.log('sum:', n1 + n2);
}
sum(40, 50);

//정의 방법이 기존과 달라짐
const arrowSum = (n1, n2) => {
    console.log('arrowSum:', n1 + n2);
}
// 호출 방법은 동일
arrowSum(30, 20);

/*
화살표 함수는  
1. ()를 생략할 수 있는 조건: 파라미터가 1개일때
2. {}를 생략할 수 있는 조건: 코드가 1줄일때
3. 리턴함수를 정의할 때 {} 생략하면 return 키워드 생략 가능;
*/

function pow(num) {
    console.log('pow:', num * num);
}
pow(10);

const pow2 = num => console.log('pow2:', num * num);
pow2(10);

console.log('---------------------1,2,3 상황')
function returnPow(num) {
    return num * num;
}
const returnPow2 = num => num * num; // return 함수
const returnPow3 = num => { num * num }; // void 함수
const returnPow4 = num => { return num * num }; // return 함수

console.log('returnPow(20):', returnPow(20))
console.log('returnPow2(20):', returnPow2(20))
console.log('returnPow3(30):', returnPow3(30))
console.log('returnPow4(30):', returnPow4(30))

/*
함수 function

함수를 만드는 부분과 사용하는 부분으로 나뉜다
함수를 만드는 행위: "함수를 정의한다" definition function
함수를 사용하는 행위: "함수를 호출한다" call function
*/

// 함수 정의
function sum(n1, n2) {
    console.log('sum', (n1 + n2));
    return; // 호출한 곳으로 다시 돌아간다. 안적어도 자동으로 들어간다 친다.
}
console.log('-----실행-----')
// 함수 호출
// 모든 함수는 return 키워드를 만난다. 그래서 호출한 곳으로 다시 돌아온다.
sum(1, 4);
sum(50, 10);
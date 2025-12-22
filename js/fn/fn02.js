/*
void 함수: 함수 호출하고 리턴만 하는 함수
return 함수: 함수 호출하고 리턴할 때 값과 함께 리턴하는 함수
*/

function voidAdd(n1, n2) { // 계산하는 것만 목표
    let sum = n1 + n2;
    console.log('voidAdd-sum:', sum);
    return; // return 키워드 생략가능
}

function returnAdd(n1, n2) { // 계산한 값을 가져가는 게 목표
    let sum = n1 + n2;
    return sum; // 값과 함께 돌아가겠다고 명시하는 것이기 때문에 return 키워드 생략 불가능
}

const voidValue = voidAdd(10, 20);
void (10, 20); //void함수는 외롭게 사용


const returnValue = returnAdd(10, 20); //return 함수는 리턴값을 저장하여 사용

console.log('voidVal: ', voidValue);
console.log('returnVal: ', returnValue);


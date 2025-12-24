////////////////////////// 2.11 Return: 값을 console로 표시하는 게 아니라 결과를 코드로 받아내기
const age1 = 96;
function calculateKrAge(ageOfForeigner){
    ageOfForeigner + 2;
    return  "Hello! "
};

const krAge = calculateKrAge(age1);
console.log(krAge);

// calculateKrAge를 실행시키면 96이라는 argument가 age1 자리로 대체. 96 + 2 return
// 무언가를 Return하면 계산을 담당하는 function의 코드는 그 function이 return하는 값과 같아진다.





const calculator = {
    plus: function (a, b){
        return  a + b;
    },
    minus: function (a, b){
        return  a - b;
    },
    times: function (a, b){
        return  a * b;
    },
    divide: function (a, b){
        return  a / b;
    },
    power: function (a, b){
        return  a ** b;
    },
};
calculator.minus(2, 3);
calculator.times(2, 3);
calculator.divide(2, 3);
calculator.power(2, 3);

const plusResult = calculator.plus(2, 3);
// 이렇게 하면 이제 나는 calculator.plus(2, 3)의 값이 있는 것
console.log(plusResult);
// const calculator 내에서 console을 사용하지 않았음! 이제 return된 값을 console.log 하는 것!


const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);

console.log(powerResult);

// Return 하는 순간 function은 끝. Return 뒤에 쓴 스크립트는 실행 안됨.

/////////////////////// 2.12


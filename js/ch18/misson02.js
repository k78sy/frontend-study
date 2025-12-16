let rVal = parseInt(Math.random() * 9 + 4);
const val = parseInt((Math.random() * 9.0)) + 4;
// 자바의 경우 실수는 실수끼리 계산하지 않으면 자동형변환이 있고 리소스를 너무 많이 잡아먹음
// 그래서 실수끼리 곱한후, 정수로 변환한 뒤, 정수 4를 더한것
console.log(rVal);
console.log(val);
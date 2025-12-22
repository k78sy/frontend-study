/**

abs를 리턴 함수를 만들고
콘솔에는 "절대값: 리턴한 값 출력해주세요"
 */


function abs(num) {
  // const result = num;
  // if (result < 0) {
  //     result = -result;
  // }
  // return result;
    const result = num < 0 ? -num : num;
    return result;
}

const absValue = abs(-10);

console.log('절대값:', absValue);



function abs2(num) {
    return num < 0 ? -num : num;
}

const result1 = abs2(-20);
console.log('result1:', result1)
console.log('result2:', abs2(-25));
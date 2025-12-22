function random(num) {
    return parseInt(Math.random() * num);
}
const randomValue = random(9); // 0~8 랜덤값을 리턴하는 함수를 만들어주세요
console.log('0~8 랜덤값', randomValue);
const randomValue2 = random(15); // 0~8 랜덤값을 리턴하는 함수를 만들어주세요
console.log('0~14 랜덤값', randomValue2);
function random(n1, n2) {
    return (parseInt(Math.random() * (n2-n1))) + n1;
}

const randomValue = random(3, 9); // 3~8 랜덤값을 리턴하는 함수 만들기
console.log('randomValue:', randomValue);

const randomValue2 = random(10, 15); // 10~14 랜덤값을 리턴하는 함수 만들기
console.log('randomValue2:', randomValue2);
// assign operator
// 대입 연산자

let n1 = 10;
n1 = n1 + 5;
// n1 = 10 + 5
// n1 = 15
// 변수라서 값을 변경할수 있다. = 변수값을 변경하려면 대입연산자가 필요하다
console.log('n1:', n1);

// 변수에 들어있는 값이 변경되려면 =(대입연산자)를 이용하여 변경해야합니다. 유일하게 대입연산자없이
// 숫자 변수의 값을 변경할 수 있는 연산자 증가연산자, 감소 연산자

let n3 = 50;
n3++;
++n3;
// 쓰기 작업만 할때는 ++가 앞에있든 뒤에 있든 큰 상관이 없음
console.log('n3:', n3);
n3--;
--n3;
--n3;
console.log('n3:', n3);


let n4 = 10;
let result4 = n4++; // 읽기 먼저 하고 쓰기

let n5 = 10;
let result5 = ++n5; // 쓰기 먼저 하고 읽기

console.log('result4:', result4);
console.log('result5:', result5);
console.log('n4:', n4)
console.log('n5:', n5)

console.log('---------------------------------------------');
let n6 = 10;
n6++; //쓰기
console.log('n6:', n6); //읽기

let n7 = 10;
console.log('n7++:', n7++); // 읽기와 쓰기를 동시에
console.log('n7:', n7);

let n8 = 10;
console.log('n8++:', ++n8); // 읽기와 쓰기를 동시에
console.log('n8:', n8);

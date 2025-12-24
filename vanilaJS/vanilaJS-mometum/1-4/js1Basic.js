console.log(545454);
console.log("hello");
//"" 으로 묶는 것은 text임 number 아님
// "" '' 사용에 상관없음 그냥 앞뒤가 똑같기만 하면 됨

console.log(5 + 2);
console.log(5 * 2);
console.log(5 / 2);

//위에서 아래로 순서대로
//개발자는 게으르당.. 코드 작성량을 줄이기 위해 - > 변수를 만들자











//#2.2
const a = 8;
const b = 3;
// costans상수. 변하지 않는 값.

console.log(a + b);
console.log(a * b);
console.log(a / b);

let myName = "Name";
//변수는 띄어쓰기 공백이 없음. 띄어쓰기는 대문자로 표시할것 camelBack

console.log("hello " +   myName);

//변수 만드는 다른 방법 let








//#2.3

myName = "Full name ";
// constant는 상수, varialbe이 변화가 없음
// let은 새로운 것을 생성할 때 사용하는 것 업데이트 하고 싶으면 그냥 하면 됩.
// 업데이트 하는 것이기 때문에 let으로 정의한 값앞에 매번 let을 쓸 필요 없음.

console.log("your new name is " +   myName);

// 제일 오래된 변수 정의 방법: var 원한다면 어디서든 업데이트 할 수 있음. 언어의 보호를 막을 수 없음. 새롭게 나온 const let을 쓸 것.








/////////////////////////// 2.4 //Boolean

const am = true;
const bm = false;
console.log(am);
console.log(bm);
// 로그인, 동영상 재생 여부 등. 트루 펄스만 있음 됨


const cm = null;
console.log(cm);
// 값이 있는데 트루거나, 펄스거나, null이란 값이거나. null 은 "비어있어요"를 의도적으로 표현하는 것 
// >> 변수안에 어떤 것이 없다는 것을 확실하게 하기 위해 쓰는 것. 자연적으로 발생하지 않음


let something;
console.log(something, am);
// 변수의 값이 정의되지 않았음 undefined










/////////////////////////// 2.5 //Arrays 자료를 정리하는 법 /////////////////////////// 

// arrays가 없는 세상: 
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";


// array 값을 골라 빼오기 쉽게 만드는 것
const daysOfWeek = [mon , tue , wed , thu , fri , sat , sun];
// sting 이 아닌 array가 되는 것
console.log(daysOfWeek);

const nonsense = [1 ,2 ,"hello", false, null, true, undefined, "name" ];
console.log(daysOfWeek,nonsense);


const days0fWeek = ["mon" , "tue" , "wed" , "thu" , "fri" , "sat" ];

// 1. array 의 항목 찾기 (두번쨰= 1d을 찾기)
// 유의할 점 : 컴퓨터는 0부터 숫자를 셈. 두번째를 찾고 싶으면 1, 첫번째를 찾고 싶으면 0
console.log(days0fWeek[1]);

// 2. array의 항목 추가하기
days0fWeek.push("sun")
console.log(days0fWeek);

// 2-1. array 활용 예시 : 구매목록
const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("kimbab")
console.log(toBuy);



///////////////////////// 2.6 object 항목과 값을 매치시키는 방법 /////////////////////////

const player = {
    name: "nico",
    points: 10,
    fat: true,
};

console.log(player);
console.log(player.name);
console.log(player["name"]);

// 1. 값 바꾸는 것도 가능

player.fat = false;
console.log(player.fat);

// player를 정의하는 것은 const지만 그 안에 fat을 바꾸는덴 문제 X


// 2. 추가도 가능

player.lastName = "potato";


player.points = player.points + 15;
console.log(player.points);







/////////////////////////////////////////////////////Recap ///////////////////////////////////////////

//varient 만들기
const abc = 5  // 바뀌지 않는 변수
let bcd = 3  // 중간에 바뀌는 변수

//var //은 옛날 것

// Boolean


let hello;
console.log(hello); // 이경우 undefined가 뜸. hello 변수의 값이 정해지지 않았기 때문에
// undefined를 가진 프로그램 언어는 많지 않음.. 글타더라


//array 만들기 : 정의할때 [] 안에 내용 넣기
const me = "sexy";
const days = ["potato","items","zero"]

days[2] = "two"
// 변경하기 items 바꾸기
days.push("last");
// items 추가하기 
///////////////// Data Type /////////////////////

// Number 데이터
//interger 정수
// flat 정수 아닌거..
//1+1

// text 데이터
// string 처음부터 끝까지 text 이고
//  "hello" + "My name is in"


/////////////////
// console에 로그 표시 console.log(23123123)
console.log(5 + 2);

///////////////////// Variables /////////////////////
// const 변하지 않는 변수 정의 constant 상수
const a = 5;
const b = 2;
console.log(a + 2);
console.log(a * 2);
console.log(a / 2);
// const veryLongVarientName = "mama"; 띄어쓰기 적용안됨

// let 변하는 변수 정의
let myName = "nico";
console.log("hello " + myName);
myName = "nicolas"
console.log("hello" + myName);

/////////////////Booleans
const amIFat = false;
console.log(amIFat);
// null 값이 없음 (emptyX null이란 값으로 차있다는 것) 값이 없다는 사실을 알려주는 것.
// true / false
let somthing;
console.log(somthing); // undefined 정의 되지 안않음

/////////////////Arrays
const daysOfWeek = ["mon", "tue", "wed", "thu", "fir", "sat", "sun"]
console.log(daysOfWeek[4]); // Get Item from Array
daysOfWeek.push("holyday") // Add Item 
console.log(daysOfWeek);


//////////////// Object
const player = {
    name: "nico",
    points: 10,
    fat: true,
};
console.log(player);
console.log(player.points);
player.fat = false;
console.log(player.fat);
player.lastName = "potato";
console.log(player);


////////// Function 반복적으로 사용할 기능
function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + "I'm " + age + "years old")
}
sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 21);

function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}
plus(60, 8)

const playerTest = {
    name: "nico",
    sayHello: function (otherName) {
        console.log("hello " + otherName + " nice to Meet you!")
    }
}
console.log(playerTest.sayHello("lynn"));


///////////////// Return
const age = 96;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2
}
const krAge = calculateKrAge(age); //// return 결과로 대체하는것
console.log(krAge);
// 과정은 놔두고 결과만 보고 싶어할 때가 있음 그럴때 사용하는 게 return 인셈


/////////////////////// 조건문 conditionals
const presentAge = prompt("How old are you?");
console.log(typeof presentAge); /// Date type 보는 방법
/// 현재 상태라면 숫자 입력해도 string (text)로 나옴
parseInt() // string을 Number로 convert
console.log(presentAge, parseInt(presentAge)); // 숫자를 입력하지 않을 경우 NaN 표기 (Not a Number)

const conditionalsAge = parseInt(prompt("How old are you?"));
console.log(conditionalsAge);

console.log(isNaN(conditionalsAge)); // isNaN : number boolean (T/F판별)
/// 숫자 입력시 false = NaN이 아님 = 숫자가 아닌것이 아님 = 숫자임

if (isNaN(conditionalsAge) || conditionalsAge < 0) {
    /// condition === true
    console.log("Plese write a real positive number");
} else if (conditionalsAge < 18) {
    /// condition === false
    console.log("Thank you for writting your age.")
    console.log("You are too young")
} else if (conditionalsAge >=18 && conditionalsAge <= 50){
    console.log("You can drink")
} else {
    console.log("You can't drink")
}






/////////////////////////////////////////////////////////////////////////////////////////////////
document.title
document.body
document.location

document.getElementById("title")
const idTitle = document.getElementById("title");
console.log(idTitle); 
console.dir(idTitle); ///// elemet를 자세하게 보여주는
title.innerText = "Got you!";
console.log(title.id);
console.log(title.className);

//const hellos = document.getElementsByClassName("hello");
//console.log(hellos)

const idTitleQ = document.querySelector("#title");
const idTitleI = document.getElementById("title");  // 두개가 같은거... 걍 첫번째꺼 쓰자!

const qTitle = document.querySelector(".hello h1");
console.log(qTitle);
qTitle.style.color = "blue";

/////////////////////////////////////////EVENT ///////////////////////////////////////////////////////////////
function handletitleClick() {
    console.log("title was clicked!");
    qTitle.style.color = "yellow";
}
function handleMouseEnter() {
    console.log("mouse is here!");
    title.innerText = "Mouse is here!"
}
function handleMouseLeave() {
    console.log("mouse is out!");
    title.innerText = "Mouse is out!"
}
qTitle.addEventListener("click", handletitleClick);
qTitle.addEventListener("mouseenter", handleMouseEnter);
qTitle.addEventListener("mouseleave", handleMouseLeave);

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
};
function handleWindowCopy() {
    alert("copier!")
};
function handleWindowOffline() {
    alert("SOS no Wifi!")
}
function handleWindowOnline() {
    alert("ALL GOODDDDDDDDDDDDDDDDDDD")
}
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

const cTitle = document.querySelector(".color h1");

function handleTitleClick() {
    const currentColor = cTitle.style.color;
    let NewColor;
    if (currentColor === "blue") {
        NewColor = "tomato";
    }else {
        NewColor = "blue";
    }
    cTitle.style.color = NewColor;
};
cTitle.addEventListener("click", handleTitleClick);

const classTitle = document.querySelector(".color h2");

// function handleClickClass() {
//     if (classTitle.className === "active") {
//         classTitle.className = "";
//     } else {
//         classTitle.className = "active";
//     };
// };

// function handleClickClass() {  //// 오류방지를 위해 클레스네임도 정의를 해두는 버릇
//     const clickClass = "active"
//     if (classTitle.className === clickClass) {
//         classTitle.className = "";
//     } else {
//         classTitle.className = clickClass;
//     };
// };

// function handleClickClass() {  //// 기존 class를 모두 날리지 않게 하기 위해 classList 사용
//     const clickClass = "active"
//     if (classTitle.classList.contains(clickClass)) {
//         classTitle.classList.remove(clickClass);
//     } else {
//         classTitle.classList.add(clickClass)
//     };
// };

function handleClickClass() {  //// 간단하게 toggle
    const clickClass = "active"
    classTitle.classList.toggle(clickClass);
};

classTitle.addEventListener("click", handleClickClass);
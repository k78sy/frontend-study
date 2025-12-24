//////////////////// 2.6  Object 게임 캐릭터를 만드는 컨셉
const player ={
    name: "Name",
    points: 10,
    fat: true,
};
console.log(player);
console.log(player.name);
console.log(player["name"]);
player.fat = false;
player.lastName = "potato";
console.log(player);
player.points = player.points + 15;
console.log(player);



/////////////// 2.7, 2.8 Function 반복해서 쓸수 있는 코드 조각

function sayhello(nameOfPerson, age){
    // {} 이 블록 안에 쓰이는 것이 반복
    console.log("Hello my name is " + nameOfPerson + " and i'm " + age);
    // argument(인수): function을 실행하는 동안 어떤 정보를 function에게 보낼 수 있는 방법
}

//alert();
//console.log();

sayhello("name", 29);
sayhello("bucky", 107);
sayhello("sam", 45);


function plus (a,b){
    console.log(a + b);
}

plus(8, 30);
// Nan 데이터가 숫자가 아니란 의미
// 순서가 아주 중요함!

function divide (a,b){
    console.log (a / b)
}
divide(456,6);



function sayhello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + " and i'm " + age);
}///// 밖에서는 이렇게 했는데 


const player = {
    name2: "nico",
    sayHello2: function (otherPersonsName){
        console.log("hello " + otherPersonsName + " nice to meet you!" + " my name is " + name2) },
};///// Object 안에선 이렇게 함! 

const player1 = {
    name: "name1",
    say: function (otherPersonsName){
        console.log("hello " + otherPersonsName + " nice to meet you!" + " my name is " + name1) },
};
player1.say("lynn");




////////////////////////////////////Review//////////////////////////////////////


//object
console.log(player);
player.lastName = "potato";
//console.log는 사실 object 였던 것입

console.log(player.name);
console.log(player.name = "sam");
console.log(player.name);

// javascript는 위에서부터 아래로 내려옵니다. html, css, javascript까지는 그런듯.


function plus1 (){
    console.log(2 + 3);
}
plus1();
// plus1; 만 쓰면 실행 안됨. () 가 실행하라는 의미

function minusFive (potato){
    console.log(potato - 5);
}
minusFive(5,6,7,123,43)
// 오뢰 첫번째 argument 받을 준비만 되어있음!



const calculator = {
    plus: function (a, b){
        console.log(a + b);
    },
    minus: function (a, b){
        console.log(a - b);
    },
    times: function (a, b){
        console.log(a * b);
    },
    divide: function (a, b){
        console.log(a / b);
    },
    power: function (a, b){
        console.log(a ** b);
    },
};
calculator.minus(2, 3);
calculator.times(2, 3);
calculator.divide(2, 3);
calculator.power(2, 3);

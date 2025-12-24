// /////////////////// 22.08 conditionals

//const age = prompt("How old are you?")
// alret 창 띄우며 질문하는 funcition // javascript의 진행을 일시 정지 시켜놓음
// 이거 별로 안씀... 창이 안이쁨 아무 css를 못바꿈. 어떤 브라우저는 이 alret를 차단.
// 요즘은 html,, css 를 사용함. prompt 이건 브라우저의 기본.

//console.log(age);
////console.log(typeof age); // variable 값의 데이터 타입이 뭔지 알려줌

parseInt(); // string 을 number로 바꿔주는 funcition

//console.log(age, parseInt(age)); // variable 값의 데이터 타입이 뭔지 알려줌


const age = parseInt ( prompt ("How old are you?") );
//javascipt는 안에서 밖으로 대답해나감


// 2.14
console.log(isNaN(age)); // true false 판별해주는 funciton.
// 이것은 NaN (Not a number)인가? true : string false : number

//if(condition){
    /// condition === true
//} else{
    /// condition === false
//};

//if(true){
//};

//if(isNaN(age)){
 //   console.log("Please wirte a number")
//} else {
//    console.log("Thank you for wirting your age")
//};




// 2.15

// || OR
// true || true === true
// false || true === true
// true || false === true
// false || false === false


// && AND
// true && true === true
// false && true === false
// true && false === false
// false && false === false

// = 값을 넘기는 것
// !== ~가 아니라면?
// ==== EQUAL

if(isNaN(age) || age < 0){
    // 값이 숫자가 아니거나, 음수의 숫자거나
    console.log("Please wirte a real positive number")
} else if(age < 18) {
    console.log("You are too young.")
} else if(age >= 18 && age <= 50){
// and && 둘다 true 여지만 작동함
// or || 둘중 하나만 true면 true
    console.log("You can drink.")
} else if(age > 50 && age <= 80){
    console.log("You should exercise.")
} else if(age === 100){
    // 80 이상이면 아래 조건이 실행될테니 그 전에 이 조건을 먼저 제시해야함.
    console.log("WoW your are wise.")
}else if(age !== 100){
    // 100 이 아니라면?
    console.log("WoW...")
}else if(age > 80){
    console.log("You can do whatever you want.")
} else{
    console.log("You can't drink.")
};


if((a && b) || (c && d)){
    //뒤에서부터 {(c와 d가 둘다 true) 인경우 true} {(a와 b가 둘다 true) 인경우 true} 둘 중 하나가 true 라면 조건문 실행
}
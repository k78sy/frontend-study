//3.6

const h1 = document.querySelector(".hello h1");
console.log(h1);

h1.innerText = "Click Me";

// click event 
function handleTItleClick1() {
    const currentColor = h1.style.color;
    let newColor;
    //h1.style.color = "blue";
    //console.log(h1.style.color);
    if (currentColor === "blue"){
        newColor = "tomato";
    }else{
        newColor = "blue";
    }
    h1.style.color = newColor;
}

//h1.addEventListener("click", handleTItleClick);

// 이건 javascript에서 style을 하는 것이니 그다지 추천하지 않음. css는 style에서 하는 게 좋음



//3.7

function handleTItleClick2() {
   // h1.className = "active";
    //if (h1.className === "clicked"){
    //    h1.className = "";
    //}else {
    //    h1.className = "clicked";
    //}// css classname을 그대로 가져와서 썼다간 className 작성에 실수를 할 수 도 있겠 지요 raw string을 쓰는 대신 변수를 설정하면 그나마 낫겟죠
    const clickedClass = "clicked";
    if (h1.className === clickedClass){
        h1.className = "";
    }else {
        h1.className = clickedClass;
    }
}


//3.8
// >>> 이 코드의 버그는 만일 이미 class 명이 있다면 그걸 교체해버리는 문제가 발생.
// className은 class를 직접 바꿔버리는 거임

function handleTItleClick3() {
     const clickedClass = "clicked";
     if (h1.classList.contains(clickedClass)){
        //classList는 class들의 목록으로 작업할 수 있게끔 허용해주는 것. element의 class 내용물을 조작하는 걸 허용한다.
        //contain은 HTML elment 의 class에 포함되어있는지 말해주는 것
         h1.classList.remove(clickedClass);
         // class 중 clicked가 있다면 clicked을 삭제합니다.
     }else {
        h1.classList.add(clickedClass);
        // class 중 clicked가 없다면 clicked을 추가합니다.
     }
 }
// 굳이 이걸 자바스크립트에서 할 필요는 없다?? 고 ㅎ?? 하네요


// 한줄로 줄여버린 것 toggle!!
function handleTItleClick() {
    h1.classList.toggle("clicked")
}


h1.addEventListener("click", handleTItleClick);



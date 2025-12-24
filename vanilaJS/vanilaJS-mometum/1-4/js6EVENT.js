/////// 3.3

//////////////////////event/////////////////////////////////////

const title = document.querySelector(".hello h1");
console.log(title);

title.innerText = "Click Me";

// click event 
function handleTItleClick() {
    console.log("title was Clidked!");
    title.style.color = "blue";
}
// 우리는 사용자가 click 이라는 이벤트를 했을때 javascript가 function을 실행시켜주길 바람. 
//그러니 handleTitleClick에 ()<function을 실행시키는 것을 넣지 않는것.
title.addEventListener("click", handleTItleClick); //괄호 안넣는거 완전완전 중요함!





//3.4
// MDN에서 이벤트 찾는게 아주 유용함Web API
// dir 해서 on붙은거  찾는데 event listen 임


// mouse over event
function handleMouseEnter (){
    title.innerText = "Mouse is here!"
}
//title.addEventListener("mouseenter", handleMouseEnter);
title.onmouseenter = handleMouseEnter;

// mouse leave event
function handleMouseLeave (){
    title.innerText = "Mouse is gone!"
}
title.addEventListener("mouseleave", handleMouseLeave);



//3.5


title.onclick = handleTItleClick;//이렇게도 가능합니다.
// on~ 과 동일하나 addEventListher을 사용하면 removeEventListener로 삭제하는 것이 용이함

//document.body , title 이런것들이 중요하니까 있음~


function handleWindowersize(){
document.body.style.backgroundColor = "blue";
}
window.addEventListener("resize", handleWindowersize);

function handleWindowerCopy(){
    alert("copier!");
}
window.addEventListener("copy", handleWindowerCopy);

function handleWindowOffline(){
    alert("SOS no WIFI");
}
window.addEventListener("offline", handleWindowOffline);

function handleWindowOnline(){
    alert("All Good");
}
window.addEventListener("online", handleWindowOnline);


//document의 body,head,title 이런것들은 중요하기 때문에
//document.body.style~의 명령이 허용되지만, div같은것들은 호출이 안됨
//나머지 element들은 querySelector나 getElementById로 불러와야됨!!!!!!!
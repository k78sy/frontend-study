// 3.0

//console 창에 document 라고 치면
// document 라고 치면 내 html 불러 올 수 있습니다.
// 이미 있는 object

console.dir(document);
//document.title = "hi"; >> s내 title을 javascript에서 바꿀 수 있음!
// document를 object로 보는 것. documet의 title을 불러올 수 있다.



// 3.1
const titleID = document.getElementById("title");

//console.log(title);
//console.dir(title);
// javascript에서 이 HTML 을 표현하는 이 object들을 보여주는 것. javascript 관점에서 HTML!

//title.innerText = "Got you!"
//console.log(title.id);
//console.log(title.className);



// 3.2
/////////////////////////////////Serching For Elements //////////////////////////////////////////////////////////
const hellosh1 = document.getElementsByClassName("helloh1");
// array 를 가지고 옵니다~~

console.log(hellosh1);
console.dir(hellosh1);

const titleT = document.getElementsByTagName("h1")
console.log(titleT);
// tag name으로 element들을 가지고 올 수 있음
// array 를 가지고 옵니다~~



//▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ 이 강의 후반부에는 내내 이것만 씁니다 ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
const title = document.querySelector(".hello h1");
// querySelector은 element를 Css 방식으로 검색 할 수 있음.
// hello 라는 클래스의 내부에 있는 h1을 가지고 올 수 있음.
console.log(title);
// .hello h1 이 여러개 존재할때 첫번째 요소만 가져옴

const titleAll = document.querySelectorAll(".hello h1");
console.log(titleAll);
//세개의 h1이 들어있는 array를 가져옴. 이 요소를 가지고 있는 모든 것을 가져오는 것입니다~


//const id1 = document.querySelector("#id");
//const id2 = document.getElementsByClassName("id");
// 이 둘은 같은 역할을 함

title.innerText = "Hello";




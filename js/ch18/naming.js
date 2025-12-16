/*

식별자(변수명, 상수명, 함수명 등등) 네이밍 규칙 
- 숫자로 시작하면 안된다.
- 특수기호는 _,$만 사용 가능 
- 예약어 사용 금지 (특정 단어는 역할이 있음)
- 스페이스 사용 불가
- 한글 가능하나 영어,숫자,특수기호만 사용


명명 기법 : 단어 여러개를 합쳐서 식별자를 만들 때 사용하는 기법
- 카멜 케이스 Camel Case
- 파스칼 케이스 Pascal Case
- 스네이크 케이스 Snake Case
- 케밥 케이스 Kebap Case 개발언어로는 사용할 수 없는 기법

my, name, is, hong 단어로 식별자를 만들때: 

Calmel Case : myNameIsHong
Pascal Case : MyNameIsHong
Snake Case : my_name_is_hong
Kebap Case : my-name-is-hong

*/

// let 1bbb; // NO!!!!

let aaa$b;
let _abc$b;

//const let;
// const let 이미 역할이 정해진 단어-예약어는 변수명으로 사용 금지

//let ab dc; //스페이스 역할 넣고 싶다면 _사용
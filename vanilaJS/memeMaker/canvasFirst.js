const canvas = document.querySelector("canvas");
// ctx는 붓의 역할. 반드시 2d < 소문자로 쓸것!!!
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

// ctx.fillRect(50, 50, 100, 200);
// fillRect(x, y, width, height);

// ctx.rect(50, 50, 100, 100);
// ctx.rect(150, 150, 100, 100);
// ctx.fill();
// ctx.rect(250, 250, 100, 100);
// ctx.stroke();

////////////////////////////////////// 1.2
// ctx.rect(50, 50, 100, 100);
// ctx.rect(150, 150, 100, 100);
// ctx.rect(250, 250, 100, 100);
// ctx.fill();
// ctx.rect(350, 350, 100, 100);
// ctx.fillStyle = "red";
// setTimeout(() => { ctx.fill() }, 5000);
// 같은 경로라서 다같이 묶음 처리....

// ctx.rect(50, 50, 100, 100);
// ctx.rect(150, 150, 100, 100);
// ctx.rect(250, 250, 100, 100);
// ctx.fill();
// ctx.beginPath(); //새로운 경로 생성. 위의 것과 분리된 경로
// ctx.rect(350, 350, 100, 100);
// ctx.rect(450, 450, 100, 100);
// ctx.fillStyle = "red";
// ctx.fill();

//////////////////////////////////////////1.3
//rect는 일종의 shortcut
// ctx.moveTo(50, 50); // 브러쉬를 위치시키고 (선을 긋지 않고 이동시키는거)
// ctx.lineTo(150, 50); // 브러쉬 이동 왼쪽>오른쪽
// ctx.lineTo(150, 150);  //위에서 이동된 상태의 브러쉬를 또 이동 위에서> 아래로
// ctx.lineTo(50, 150);  // 이동된 상태의 브러쉬를 또 이동 오른쪽 > 왼쪽
// ctx.fill();

//////////////////////////////////////// 1.4 집만들기
// ctx.fillRect(200, 200, 50, 200);
// ctx.fillRect(400, 200, 50, 200);
// ctx.lineWidth = 2; //순서 중요!
// ctx.strokeRect(300, 300, 50, 100);
// ctx.fillRect(200, 200, 200, 20);
// ctx.moveTo(200, 200);
// ctx.lineTo(325, 100);
// ctx.lineTo(450, 200);
// ctx.fill();

/////////////////////////////////////////// 1.5 사람 그리기
// ctx.fillRect(210 - 40, 200 - 20, 15, 100); //팔
// ctx.fillRect(350 - 40, 200 - 20, 15, 100);  //팔
// ctx.fillRect(260 - 40, 200 - 20, 60, 200); //몸통
// ctx.arc(250, 100, 50, 0, 2 * Math.PI); // 얼굴
// //arc(x, y, 반지름, 시작각도, 끝나는각도/ 완전한 원 각도 기억해두면 됨)
// ctx.fill();

// ctx.beginPath(); //눈색깔 바꾸기위해 재시작
// ctx.fillStyle = "white";
// ctx.arc(260 + 10, 80, 8, Math.PI , 2 * Math.PI); //눈
// ctx.arc(220 + 10, 80, 8, Math.PI , 2 * Math.PI);
// ctx.fill();


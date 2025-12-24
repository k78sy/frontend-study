const images = ["1.jpg","2.jpg","3.jpg","4.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
console.log(chosenImage);

const bgImage = document.createElement("img"); // Element 생성
bgImage.src = `img/${chosenImage}`;

console.log(bgImage);

document.body.appendChild(bgImage); // body에 html 추가
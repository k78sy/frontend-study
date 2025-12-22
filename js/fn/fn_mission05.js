function printStarLine(num) {
    let star = '';
    for (i = 0; i < num; i++) {
        star += '*';
    }
    console.log(star);
}

function printStarLine1(star) {
    let i = 0;
    let starLine = '';
    while (true) {
        starLine += '*';
        i++;
        if (i === star) {
            break;
        }
    }
    console.log(starLine);
}

printStarLine(5);
printStarLine(6);
// *****
printStarLine1(3);
// ***

console.log('--------------------------Square');

function printStarSquare(star) {
    let starLine = '';
    for (k = 0; k < star; k++) {
        starLine += '*';
    }
    for (i = 0; i < star; i++) {
        console.log(starLine);
    }
}
function printStarSquare2(star) {
    for (let i = 0; i < star; i++) {
        printStarLine(star);
    }
}
printStarSquare2(5);
printStarSquare(3);

console.log('--------------------------traingle');

function printStarTraingle1(star) {
    let starLine = '';
    for (i = 1; i <= star; i++){
        starLine += '*';
        console.log(starLine);
    }
}

function printStarTraingle(star) {
    for (i = 1; i <= star; i++){
        printStarLine(i)
    }
}

printStarTraingle1(5);
printStarTraingle(3);
//*
//**
//***
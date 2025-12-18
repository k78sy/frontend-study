const dan = parseInt(Math.random() * 8.0) + 2;
console.log(`${dan}단`)
for (let i = 1; i<=9; i++) {
    console.log(`${dan} X ${i} = ${dan*i}`);
}

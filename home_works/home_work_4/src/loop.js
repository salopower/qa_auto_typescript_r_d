function countUp() {
    for (let i = 0; i <= 9; i++) {
        console.log("Iterator:", i);
    }
}
function countDown() {
    for (let i = 100; i >= 0; i -= 10) {
        console.log("Iterator:", i);
    }
}

countUp();
countDown();

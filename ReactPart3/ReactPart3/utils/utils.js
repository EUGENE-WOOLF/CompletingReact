export function rollDice(n) {
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = getRandomNum();
    }
    return arr;
}

export function getRandomNum() {
    return Math.floor(Math.random() * 6) + 1;
}

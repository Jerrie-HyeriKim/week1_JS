// Spread Example
console.log("hi");
console.log(Math.max(1, 2, 3));
const numbers = [4, 5, 110, 0, 1]; // Array
//Math.max(numbers); 실행 x ; array를 argument 인자로 받을 수 없음

console.log("Spread Operator: " + Math.max(...numbers)); // spread 사용하여 해결

// Rest Example
function add(a, b) {
    return a + b;
}

console.log(add(3, 4, 5, 6, 7));
function add1(a, b, ...restn) {
    console.log(restn);
    return a + b;
}
console.log(add1(3, 4, 5, 6, 7));
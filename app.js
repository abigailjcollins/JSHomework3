var myOne = 45
var myTwo = 66

// Regular Function

function addThem(a, b){
    return a + b

} console.log(addThem(myOne, myTwo));


function subtractThem(a, b){
    return a - b
} console.log(subtractThem(myOne, myTwo));


function multiplyThem(a, b){
    return a * b
} console.log(multiplyThem(myOne, myTwo));

function divideThem(a, b){
    return a / b
} console.log(divideThem(myOne, myTwo));

// Arrow Function

(a, b) => a + b
 console.log(addThem(myOne, myTwo));

(a, b) => a - b
 console.log(subtractThem(myOne, myTwo));

(a, b) => a * b
 console.log(multiplyThem(myOne, myTwo));

(a, b) => a / b
 console.log(divideThem(myOne, myTwo));


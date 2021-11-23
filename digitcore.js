//task 1
function calc(a, b, operator) {
    return eval(`${a} ${operator} ${b}`)
}

const result = calc('2', '2', '/') //any operator can be added
console.log(result)

//task 2
let Tom = [1, 4, 7, 2, 4];
let Jack = [3, 4, 2, 4, 4];
let Output = [1, 2];


let tomResult = 0;
let jackResult = 0;
let finalResult = [];

Tom.forEach((element, key) => {
    if (element > Jack[key]) {
        tomResult++;
    } else if (element < Jack[key]) {
        jackResult++;
    }
});

finalResult = [tomResult, jackResult];

if (Output[0] === finalResult[0] && Output[1] === finalResult[1]) {
    console.log('true', Output, finalResult);
} else {
    console.log('false', Output, finalResult);
}


// task 3
function kangaroo(x1, x2, v1, v2) {
    if(v1 >v2){
        while (x1<x2) {
            x1+=v1
            x2+=v2
        }
        if (x1 === x2) {
            return {result:"YES", when: {x1, x2}}
        }else {
            return "NO"
        }
    }
}
console.log(kangaroo(1, 2, 2, 1))

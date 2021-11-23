//task 1
function calc(a, b, operator) {
    return eval(`${a} ${operator} ${b}`)
}

const result = calc('2', '2', '/') //any operator can be added
console.log(result)
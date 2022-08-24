function calcular(number1,operator,number2){
    let result = Number
    switch (operator){
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            let mod = Number
            result = number1 / number2
            mod = number1 % number2
            result = result + ' com resto ' + mod
            break
    }
    return result;
}
console.log(calcular(2,'+',5));
console.log(calcular(2,'-',5));
console.log(calcular(2,'*',5));
console.log(calcular(11,'/',11));



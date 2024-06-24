
function setCharAt(string, index, char) {
    if(index >= string.length) return string;
    return string.substring(0, index) + char + string.substring(index+1);
}

function capitalize(string)
{
    if(typeof string === 'string' || string instanceof String) {
        if(string.charAt(0) >= 'a' && string.charAt(0) <= 'z') {
            return setCharAt(string, 0, String.fromCharCode(string.charCodeAt(0) - ("a".charCodeAt(0) - "A".charCodeAt(0))));
        }
    }
    return string;
}

function reverseString(string)
{
    if(typeof string === 'string' || string instanceof String) {
        let result = "";
        for(let x = 0; x < string.length; x++) {
            result = string.charAt(x) + result;
        }
        return result;
    }
    else {
        throw new TypeError("Given input is not a string!");
    }
    
}

const calculator = (function() {
    let add = (a, b) => {
        if(typeof a === 'number' && typeof b === 'number') return a + b;
        else throw new TypeError("Given input(s) is/are not a number")
    }

    let subtract = (a, b) => {
        if(typeof a === 'number' && typeof b === 'number') return a - b;
        else throw new TypeError("Given input(s) is/are not a number")
    }

    let multiply = (a, b) => {
        if(typeof a === 'number' && typeof b === 'number') return a * b;
        else throw new TypeError("Given input(s) is/are not a number")
    }

    let divide = (a, b) => {
        if(typeof a === 'number' && typeof b === 'number')
            if(b !== 0) return a / b;
            else throw new Error("Division by zero is prohibited");
        else throw new TypeError("Given input(s) is/are not a number");
    }

    return {add, subtract, multiply, divide}
})()

function caesarCipher(string, rots)
{
    if((typeof string === 'string' || string instanceof String) && Number.isInteger(rots)) {
        result = "";
        for(let x = 0; x < string.length; x++) {
            const distance = "a".charCodeAt(0) - "A".charCodeAt(0);
            if(string.charAt(x) >= 'a' && string.charAt(x) <= 'z') {
                let finalValue = string.charCodeAt(x) + rots;
                if(finalValue > "z".charCodeAt(0)) finalValue -= 26;
                result += String.fromCharCode(finalValue);
            } else if(string.charAt(x) >= 'A' && string.charAt(x) <= 'Z') {
                let finalValue = string.charCodeAt(x) + rots;
                if(finalValue > "Z".charCodeAt(0)) finalValue -= 26;
                result += String.fromCharCode(finalValue);
            }
            else result += string.charAt(x);
        }
        return result;
    }
    else {
        throw new TypeError("Wrong type in input params!");
    }
}

function analyzeArray(arr)
{
    if(arr.length === 0) {
        throw Error("Empty array passed");
    }
    let sum = 0;
    let min = arr[0];
    let max = arr[0];
    arr.forEach((ele) => { 
        sum += ele;
        if(ele < min) min = ele;
        if(ele > max) max = ele;
    });
    const length = arr.length
    object = {
        average: (sum / length),
        min,
        max,
        length,
    }

    return object;
}

module.exports = {capitalize, reverseString, calculator, caesarCipher, analyzeArray};
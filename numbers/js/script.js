const arrayHundred = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
const arrayTen = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
const arrayUnits = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];


/** @Returns the length of the entered number
 * @param {number} number Input number
 * @return {number}
 */
const numberLength = (number) => {
    return String(number).length;
}


/** @Convert hundreds of entered numbers to Roman
 * @param {number} number Input number
 * @return {number}
 */
const calculateHundred = (number) => {
    const hundred = number.toString()[0];
    return arrayHundred[hundred - 1];
}

/** @Convert ten of entered numbers to Roman
 * @param {number} number Input number
 * @return {number}
 */
const calculateTen = (length, number) => {
    let ten;
    if (length == 3) {
        ten = number.toString()[1];
    } else if (length == 2) {
        ten = number.toString()[0];
    }
    if (ten == 0) {
        return "";
    } else {
        return arrayTen[ten - 1];
    }
}

/** @Convert units of entered numbers to Roman
 * @param {number} number Input number
 * @return {number}
 */
const calculateUnits = (number) => {
    const unit = number % 10;
    if (unit == 0) {
        return "";
    } else {
        return arrayUnits[unit - 1];
    }
}

/** @Returns the entered number in Roman numerals
 * @param {number} number Input number
 * @param {number} length of input number
 * @return {string}
 */
const calculate = (number, length) => {
    let result = "";
    switch (length) {
        case 3:
            result += calculateHundred(number);
        case 2:
            result += calculateTen(length, number);
        case 1:
            result += calculateUnits(number);
            break;
    }
    return result;
}

/** @Adds result to page
 * @param {number} number The input number
 */
const addReuslt = (number) => {
    let add = document.querySelector("#add_text");
    add.innerText = "";
    add.append(calculate(number, numberLength(number)));
}

const input = document.querySelector("#input");
document.querySelector("#input").oninput = function() {
    addReuslt(input.value);
}

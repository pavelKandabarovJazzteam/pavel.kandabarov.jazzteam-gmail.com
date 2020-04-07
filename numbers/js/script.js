const ARRAYHUNDRED = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
const ARRAYTEN = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
const ARRAYUNITS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];


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
    const hundred = String(number)[0];
    return ARRAYHUNDRED[hundred - 1];
}

/** @Convert ten of entered numbers to Roman
 * @param {number} number Input number
 * @return {number}
 */
const calculateTen = (number, length) => {
    let ten;
    if (length == 3) {
        ten = String(number)[1];
    } else if (length == 2) {
        ten = String(number)[0];
    }
    if (ten == 0) {
        return "";
    } else {
        return ARRAYTEN[ten - 1];
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
        return ARRAYUNITS[unit - 1];
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
             result += calculateTen(number, length);
         case 1:
             result += calculateUnits(number);
             break;
     }
     return result;
 }

/** @Adds result to page
 * @param {number} number The input number
 */
let add = document.querySelector("#add_text");
const addReuslt = (number) => {
    add.innerText = "";
    add.append(calculate(number, numberLength(number)));
}

document.querySelector("#input").oninput = () => {
    let input = document.querySelector("#input");
    let regxpr = input.dataset.regexp;
    regxpr = new RegExp(regxpr, 'i');
    let alert = document.querySelector(".alert");
    if (!input.value.replace(/^0+/, '').trim().match(regxpr)) {
        add.innerText = "";
        alert.style.cssText = "opacity: 0;";
        alert.style.cssText = "opacity: 1;";
    }else{
        alert.style.cssText = "opacity: 0;";
        addReuslt(input.value.replace(/^0+/, '').trim());
    }
}

const arrayHundred = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
const arrayTen = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
const arrayUnits = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

const numberLength = (number) => {
    return String(number).length;
}

const calculateHundred = (number) => {
    const hundred = number.toString()[0];
    return arrayHundred[hundred - 1];
}

const calculateTen = (length, number) => {
    let ten;
    if (length == 3) {
        ten = number.toString()[1];
    } else if (length == 2) {
        ten = number.toString()[0];
    }
    if (ten == 0) {
        return "";
    }else {
        return arrayTen[ten - 1];
    }
}

const calculateUnits = (number) => {
    const unit = number % 10;
    if (unit == 0) {
        return "";
    } else {
        return arrayUnits[unit - 1];
    }
}

const calculate = function(number, length) {
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

const addReuslt = (number) => {
    let add = document.querySelector("#add_text");
    add.innerText = "";
    add.append(calculate(number, numberLength(number)));
}

let input = document.querySelector("#input");
input.oninput = function() {
    addReuslt(input.value);
}

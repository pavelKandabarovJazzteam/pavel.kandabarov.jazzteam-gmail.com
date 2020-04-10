const NUMBERS = {
    1: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    2: ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    3: ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    4: ["CIƆ", "CIƆCIƆ", "CIƆCIƆCIƆ", "CIƆIƆƆ", "IƆƆ", "IƆƆCIƆ", "IƆƆCIƆCIƆ", "IƆƆCIƆCIƆCIƆ", "CIƆCCIƆƆ"],
    5: ["CCIƆƆ", "CCIƆƆCCIƆƆ", "CCIƆƆCCIƆƆCCIƆƆ", "CCIƆƆIƆƆƆ", "IƆƆƆ", "IƆƆƆCCIƆƆ", "IƆƆƆCCIƆƆCCIƆƆ", "IƆƆƆCCIƆƆCCIƆƆCCIƆƆ", "CCIƆƆCCCIƆƆƆ"]
}

const total = (num, len) => {
    let secondSlice = (-len != -1) ? -len+1 : undefined;
    return String(num).slice(-len, secondSlice);
}

const test = (number, length) => {
    let result = "";
    for (let i = length ; i > 0; i--) {
        if (total(number, i) - 1 === -1) {
            result += "";
        }else{
            result += NUMBERS[i][total(number, i) - 1 ]
        }
    }
    return result;
}


/** @Adds result to page
 * @param {number} number The input number
 */
let add = document.querySelector("#add_text");
const addReuslt = (number) => {
    add.innerText = "";
    add.append(test(number, number.length));
};

document.querySelector("#input").oninput = () => {
    let input = document.querySelector("#input");
    let regxpr = input.dataset.regexp;
    regxpr = new RegExp(regxpr, "i");
    let alert = document.querySelector(".alert");
    let zero = document.querySelector(".zero");
    if (input.value.replace(/^0+/, "").length > 5) {
        input.value = input.value.slice(0, 0);
        alert.style.cssText = "opacity: 1;";
        add.innerText = "";
        setTimeout(() => {
            alert.style.cssText = "opacity: 0;";
        }, 1000);
    } else {
        if (input.value == 0) {
            zero.style.cssText = "opacity: 1;";
            add.innerText = "";
            if (input.value.length == 0) {
                zero.style.cssText = "opacity: 0;";
                alert.style.cssText = "opacity: 0;";
                add.innerText = "";
            }
        } else if (!input.value.replace(/^0+/, "").trim().match(regxpr)) {
            add.innerText = "";
            alert.style.cssText = "opacity: 1;";
        } else {
            addReuslt(input.value.replace(/^0+/, "").trim());
            zero.style.cssText = "opacity: 0;";
        }
    }
};

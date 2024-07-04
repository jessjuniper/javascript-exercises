const palindromes = function (str) {
    str = str.toLowerCase().replace(/[\W_]/g, ''); //make lowercase and remove all spaces and punctuation, only  numbers and letters remain
    let newStr = str.split('').reverse().join(''); //reverse string
    return str===newStr; //check if same and return true if so or false if not
};

// Do not edit below this line
module.exports = palindromes;

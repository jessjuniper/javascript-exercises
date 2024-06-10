let string = '';
let n = 0;
const repeatString = function(string,n) {
    if (n<0) {
        return 'ERROR';
    }
    let i = 0;
    let bigString = '';
    while (i<n) {
        bigString += string;
        i++;
    }
    return bigString;
};

// Do not edit below this line
module.exports = repeatString;

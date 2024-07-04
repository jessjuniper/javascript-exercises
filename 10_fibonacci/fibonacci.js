const fibonacci = function(n) {
    if (n<0) return 'OOPS';
    let firstNum = 0;
    let secondNum = 1;
    let sum;
    if (n == firstNum) return firstNum;
    else if (n == secondNum) return secondNum;
    else {
        for (let i=2; i<=n; i++) {
            sum=firstNum+secondNum;
            firstNum=secondNum;
            secondNum=sum;
        }
        return secondNum;
    }
    
};

// Do not edit below this line
module.exports = fibonacci;

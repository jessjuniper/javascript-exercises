const sumAll = function(x, y) {
    let finalSum=0;
    if (x<0 || x==null || x==NaN || x==undefined || typeof x == 'string' || typeof x == 'object') {
        return 'ERROR';
    }
    else if (y<0 || y==null || y==NaN || y==undefined || typeof y == 'string' || typeof y == 'object') {
        return 'ERROR';
    }

    let small = x>y ? y : x;
    let big = x>y ? x : y;

    for (i=small; i<=big; i++) {
        finalSum+=i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;

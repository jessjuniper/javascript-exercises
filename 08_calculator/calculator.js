const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	if (arr.length==0) return 0;
  else {
  return arr.reduce((acc,curr) => {
    return acc + curr;
  });
  }
};

const multiply = function(arr) {
  return arr.reduce((acc,curr) => {
    return acc * curr;
  }, 1);
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(n) {
	if (n==0 || n==1) return 1;
  else {
    let result = n;
    while (n > 1) {
      n--;
      result*=n;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

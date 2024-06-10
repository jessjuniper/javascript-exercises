const removeFromArray = function(originalArray, ...args) {
    const newArray = [];
    function testArray(element) {
        if (!args.includes(element)) {
            newArray.push(element);
        }
    }
    originalArray.forEach(testArray);
    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;

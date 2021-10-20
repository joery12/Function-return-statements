const numberChecker = function(number) {
    const check = number;
    if (check > 100) {
        return true;
    } else {
        return false;
    }
};

const result = numberChecker(101);
console.log(result);
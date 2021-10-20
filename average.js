const average = function(numbers) {
    const length = numbers.length;
    const sum = numbers.reduce((current, next) => current + next);
    const calculation = sum / length;
    return calculation;
};

const result = average([5, 6, 7, 8, 8]);
console.log(Math.round(result));
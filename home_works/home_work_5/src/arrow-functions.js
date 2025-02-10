const sum_array_elements = (arr) => arr.reduce((sum, current) => sum + current);


const numberArray   = [1, 2, 3, 4, 5];
const stringArray  = ['apple', 'banana', 'cherry'];

console.log("Sum of numberArray:", sum_array_elements(numberArray));
console.log("Sum of stringArray:", sum_array_elements(stringArray));


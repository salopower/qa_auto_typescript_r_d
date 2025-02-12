function sum_array_elements(arr) {
    return arr.reduce((sum, current) => sum + current);
}

const arr_numbers = [1, 2, 3, 4, 5];
const arr_strings = ['apple', 'banana', 'cherry'];

console.log("Sum of numberArray:", sum_array_elements(arr_numbers));
console.log("Sum of stringArray:", sum_array_elements(arr_strings));


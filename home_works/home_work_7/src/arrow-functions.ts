const sumNumbersArray = (arr: number[]): number => arr.reduce((acc, curr) => acc + curr, 0);
const sumStringsArray = (arr: string[]): string => arr.reduce((acc, curr) => acc + curr, '');


const numberArray   = [1, 2, 3, 4, 5];
const stringArray  = ['apple', 'banana', 'cherry'];


console.log('Sum of numberArray:', sumNumbersArray(numberArray)); // Output: 15
console.log('Sum of stringArray:', sumStringsArray(stringArray)); // Output: applebananacherry

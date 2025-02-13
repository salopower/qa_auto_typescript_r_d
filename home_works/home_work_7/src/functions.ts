function sumArray(arr: number[] | string []): number | string {
    if (typeof arr[0] === 'number') {
        return (arr as number[]).reduce((sum, current) => sum + current);
    } else {
        return (arr as string[]).reduce((sum, current) => sum + current);
    }
}

const arr_numbers = [1, 2, 3, 4, 5];
const arr_strings = ['apple', 'banana', 'cherry'];

console.log('Sum of numberArray:', sumArray(arr_numbers)); // Output: 15\\
console.log('Sum of stringArray:', sumArray(arr_strings)); // Output: applebananacherry

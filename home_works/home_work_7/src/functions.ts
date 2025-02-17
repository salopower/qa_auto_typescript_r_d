function sumArray(arr: (number | string)[]): number | string {
    if (arr.length === 0) return 0;

    const areAllNumbers: boolean = arr.every((item): item is number => typeof item === 'number');
    const areAllStrings: boolean = arr.every((item): item is string => typeof item === 'string');

    if (areAllNumbers) {
        return (arr as number[]).reduce((sum, current) => sum + current, 0);
    } else if (areAllStrings) {
        return (arr as string[]).reduce((sum, current) => sum + current, '');
    } else {
        throw new Error('The array can contain only numbers or only strings.');
    }
}

const arr_numbers: number[] = [1, 2, 3, 4, 5];
const arr_strings: string[] = ['apple', 'banana', 'cherry'];
const arr_mixed: (number | string)[] = [1, 'apple', 3];
const arr_empty: number[] = [];

console.log('Sum of numberArray:', sumArray(arr_numbers)); // Output: 15
console.log('Sum of stringArray:', sumArray(arr_strings)); // Output: applebananacherry
console.log('Sum of emptyArray:', sumArray(arr_empty)); // Output: 0

try {
    console.log('Sum of mixedArray:', sumArray(arr_mixed));
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message); // Output: The array can contain only numbers or only strings.
    }
}

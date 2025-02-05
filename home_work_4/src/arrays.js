// Arrays for different base types
const stringArray = ["apple", "banana", "cherry"];
const numberArray = [1, 2, 3, 4, 5];
const booleanArray = [true, false, true, false];
const anyArray = ["text", 42, true, { key: "value" }];

// forEach() example
console.log("forEach examples:");
stringArray.forEach((item) => console.log(item));
numberArray.forEach((num) => console.log(num));
booleanArray.forEach((bool) => console.log(bool));
anyArray.forEach((elem) => console.log(elem));

// map() example
console.log("map examples:");
console.log(stringArray.map((item) => item.toUpperCase()));
console.log(numberArray.map((num) => num ** 2));
console.log(booleanArray.map((bool) => !bool));
console.log(anyArray.map((elem) => typeof elem));

// filter() example
console.log("filter examples:");
console.log(stringArray.filter((item) => item.startsWith("b")));
console.log(numberArray.filter((num) => num > 2));
console.log(booleanArray.filter((bool) => bool));
console.log(anyArray.filter((elem) => typeof elem === "number"));

// reduce() example
console.log("reduce examples:");
console.log(numberArray.reduce((sum, num) => sum + num, 0));
console.log(stringArray.reduce((concat, item) => concat + ", " + item, ""));
console.log(booleanArray.reduce((acc, bool) => acc && bool, true));

// find() example
console.log("find examples:");
console.log(stringArray.find((item) => item.length > 5));
console.log(numberArray.find((num) => num > 3));
console.log(booleanArray.find((bool) => !bool));

// some() and every() example
console.log("some & every examples:");
console.log(stringArray.some((item) => item.includes("a")));
console.log(numberArray.every((num) => num > 0));
console.log(booleanArray.some((bool) => bool));
console.log(booleanArray.every((bool) => bool));

// sort() example
console.log("sort examples:");
console.log([...stringArray].sort());
console.log([...numberArray].sort((a, b) => a - b));
console.log([...booleanArray].sort((a, b) => b - a));

// reverse() example
console.log("reverse examples:");
console.log([...stringArray].reverse());
console.log([...numberArray].reverse());
console.log([...booleanArray].reverse());

// concat() example
console.log("concat examples:");
console.log(stringArray.concat(["grape", "mango"]));
console.log(numberArray.concat([6, 7, 8]));
console.log(booleanArray.concat([true, false]));

// slice() example
console.log("slice examples:");
console.log(stringArray.slice(1, 3));
console.log(numberArray.slice(0, 2));
console.log(booleanArray.slice(2));

// splice() example
console.log("splice examples:");
const splicedArray = [...stringArray];
splicedArray.splice(1, 1, "orange");
console.log(splicedArray);

// indexOf() and includes() example
console.log("indexOf & includes examples:");
console.log(stringArray.indexOf("banana"));
console.log(numberArray.includes(3));
console.log(booleanArray.includes(false));

// push(), pop(), shift(), unshift() example
const tempArray = [...numberArray];
console.log("push, pop, shift, unshift examples:");
tempArray.push(10);
console.log(tempArray);
tempArray.pop();
console.log(tempArray);
tempArray.shift();
console.log(tempArray);
tempArray.unshift(0);
console.log(tempArray);

Math.max(1, 3, 5); // 5

console.log(Math.max([1, 3, 5])); // NaN

console.log(Math.max(...[1, 3, 5])); // 5

const arr1 = ["one", "two"];
const arr2 = [...arr1, "three", "four", "five"];

console.log(arr2);
//  Output:
//  ["one", "two", "three", "four", "five"]


const values = [3, 11, 7, 2, 9, 10];
let sum = 0
let Max = 0
values.forEach(value => {
  sum += value;
});

console.log(`Sum of the given array is: ${sum}`);

const num1 = [3, 11, 7, 2, 9, 10];

let max = num1[0];

for (let i = 1; i < num1.length; i++) {
  if (num1[i] > max) {
    max = num1[i];
  }
}

console.log(`Max of the given array is: ${max}`);

const num2 = [3, 11, 7, 2, 9, 10];
let min = num2[0];
for (let i = 1; i < num2.length; i++) {
  if(num2[i] < min){
    min = num2[i];
  }
}
console.log(`Min of the given array is: ${min}`);

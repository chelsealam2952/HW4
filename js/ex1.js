let num1 = parseInt(prompt("Please enter 1st number: "));
let num2 = parseInt(prompt("Please enter 2nd number: "));
let mathops = prompt("Enter Mathematical Operation (+, -, *, /: ");
if(mathops === "+") {
  console.log(`${num1} + ${num2} = ${num1+num2}`);
}
else if (mathops === "-"){
  console.log(`${num1} - ${num2} = ${num1-num2}`);
}
else if (mathops === "*"){
  console.log(`${num1} * ${num2} = ${num1*num2}`);
}
else if(mathops === "/"){
  console.log(`${num1} / ${num2} = ${num1/num2}`);
}
else{
  console.log("You have enter invalid Mathematical Operation! Please try again")
}
let randomNum = Math.floor(Math.random()*100+1);
console.log(randomNum);
let totalguess = 1;
let userenternumber = parseInt(prompt("Please enter a number: "));
if(userenternumber === randomNum){
  alert(`Correct! I took you ${totalguess} attempts to guess the correct number`);
}
else if( userenternumber > randomNum){
  totalguess++;
  alert("Too high, guess again");
}
else if(userenternumber <= 0){
  alert("Enter the number between 1 and 10");
}
else{
  totalguess++;
  alert("Too low, guess again");
}

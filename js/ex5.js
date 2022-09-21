const words = [];

let word = "";
while (word !== "stop") {
  word = prompt("Enter a word or stop to quit:");
  if (word !== "stop") {
    words.push(word.toLowerCase());
  }
}

console.log("You have entered the following words:");
words.forEach(word => {
  console.log(word);
});
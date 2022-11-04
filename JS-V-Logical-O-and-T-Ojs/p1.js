// Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties


let y = 1987;
let curr = 2022
if ((curr-y) >= 13 && (curr-y) <= 19) {
  console.log("Teenage")
}
else if ((curr-y) >= 20 && (curr-y) <= 29) {
  console.log("Twenties")
}
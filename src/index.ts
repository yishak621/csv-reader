import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";
//Split a string into substrings using the specified separator and return them as an array.

const reader = new MatchReader("football.csv");
reader.read(); //call the method
const dateOfFirstMatch = reader.data[0][0];
console.log(dateOfFirstMatch);
//enum =  define a collection of related values
//when compiled they are converted to object

let manUnitedWins = 0;

for (let match of reader.data) {
  //calculating the number of game man united wins
  if (match[1] === "Man United" && match[5] === MatchResult.homeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.awayWin) {
    manUnitedWins++;
  }
}
console.log(manUnitedWins);

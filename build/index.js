"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFIleReader_1 = require("./CsvFIleReader");
const MatchReader_1 = require("./MatchReader");
const MatchResult_1 = require("./MatchResult");
//Split a string into substrings using the specified separator and return them as an array.
const csvFileReader = new CsvFIleReader_1.CsvFileReader("football.csv");
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
// const dateOfFirstMatch = reader.data[0][0];
// console.log(dateOfFirstMatch);
//enum =  define a collection of related values
//when compiled they are converted to object
let manUnitedWins = 0;
for (let match of matchReader.matches) {
    //calculating the number of game man united wins
    if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.homeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult_1.MatchResult.awayWin) {
        manUnitedWins++;
    }
}
console.log(manUnitedWins);

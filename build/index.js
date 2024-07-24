"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFIleReader_1 = require("./CsvFIleReader");
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
//Split a string into substrings using the specified separator and return them as an array.
const csvFileReader = new CsvFIleReader_1.CsvFileReader("football.csv");
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();
// const dateOfFirstMatch = reader.data[0][0];
// console.log(dateOfFirstMatch);
//enum =  define a collection of related values
//when compiled they are converted to object
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
const summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis("Man United"), new HtmlReport_1.HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
// let manUnitedWins = 0;
// for (let match of matchReader.matches) {
//   //calculating the number of game man united wins
//   if (match[1] === "Man United" && match[5] === MatchResult.homeWin) {
//     manUnitedWins++;
//   } else if (match[2] === "Man United" && match[5] === MatchResult.awayWin) {
//     manUnitedWins++;
//   }
// }
// console.log(manUnitedWins);

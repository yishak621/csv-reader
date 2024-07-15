import fs from "fs";
import { dateStringTODate } from "./utils";
import { MatchResult } from "./MatchResult";
//declaring a TUPLE []
type MatchData = [Date, string, string, number, number, MatchResult, string];
//TYPE ASSERTION
export class CsvFileReader {
  data: MatchData[] = []; //this means that we are expecting an array of arrays[2D array ,each rows inside] that have the data type as same as MAtchdata
  constructor(public fileName: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map((row: string[]): MatchData => {
        return [
          dateStringTODate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
          row[6],
        ];
      });
  }
}

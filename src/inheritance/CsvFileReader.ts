import fs from "fs";
// import { dateStringTODate } from "./utils";
// import { MatchResult } from "./MatchResult";

//TYPE ASSERTION
//T means type of data
export abstract class CsvFileReader<T> {
  data: T[] = []; //this means that we are expecting an array of arrays[2D array ,each rows inside] that have the data type as same as T
  constructor(public fileName: string) {}
  //promise
  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map(this.mapRow);
  }
}

import fs from "fs";

//TYPE ASSERTION
export class CsvFileReader {
  data: string[][] = []; //this means that we are expecting an array of arrays[2D array ,each rows inside] that have the data type as same as MAtchdata
  constructor(public fileName: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      });
  }
}

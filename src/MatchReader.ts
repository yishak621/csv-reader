import { dateStringTODate } from "./utils";
import { MatchResult } from "./MatchResult";

//declaring a TUPLE []
type MatchData = [Date, string, string, number, number, MatchResult, string];
interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  constructor(public reader: DataReader) {}
}

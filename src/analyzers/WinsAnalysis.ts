import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";
import { Analyzer } from "../Summary";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      //calculating the number of game man united wins
      if (match[1] === "Man United" && match[5] === MatchResult.homeWin) {
        wins++;
      } else if (
        match[2] === "Man United" &&
        match[5] === MatchResult.awayWin
      ) {
        wins++;
      }
    }

    return ` this ${this.team} won ${wins}`;
  }
}

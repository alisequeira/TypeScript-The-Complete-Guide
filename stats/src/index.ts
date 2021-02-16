import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResults';


const reader = new MatchReader('football.csv');
reader.read();
//Enum -> enumeration    

let manUnitedWin = 0;

for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWin++;
    } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
        manUnitedWin++;
    }
}
console.log(`Manchester United has won ${manUnitedWin} games`)
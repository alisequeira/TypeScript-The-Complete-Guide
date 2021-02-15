import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');
reader.read();
//Enum -> enumeration    
enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
}

let manUnitedWin = 0;

for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === "H") {
        manUnitedWin++;
    } else if (match[2] === "Man United" && match[5] === "A") {
        manUnitedWin++;
    }
}
console.log(`Manchester United has won ${manUnitedWin} games`)
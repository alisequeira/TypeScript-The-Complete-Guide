import fs from 'fs';

const matches = fs.readFileSync('football.csv', {
    encoding: 'utf-8'
})
    .split('\n')
    .map((row: string): string[] => {
        return row.split(',');
    });

//Enum -> enumeration    
enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
}

let manUnitedWin = 0;

for (let match of matches) {
    if (match[1] === 'Man United' && match[5] === "H") {
        manUnitedWin++;
    } else if (match[2] === "Man United" && match[5] === "A") {
        manUnitedWin++;
    }
}
console.log(`Manchester United has won ${manUnitedWin} games`)
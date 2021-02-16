import fs from 'fs';

//Generic class
export abstract class CsvFileReader<typeOfData> {
    data: typeOfData[] = [];

    constructor(public filename: string) { }

    abstract mapRow(row: string[]): typeOfData;

    read(): void {
        this.data = fs
            .readFileSync(this.filename, {
                encoding: 'utf-8'
            })
            .split('\n')
            .map((row: string): string[] => {
                return row.split(',');
            })
            .map(this.mapRow)
    }
}
export class CharactersCollection {
    constructor(public data: string) { }

    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rightIdex: number): boolean {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIdex].toLowerCase());
    }

    swap(leftIndex: number, rightIdex: number): void {
        const characters = this.data.split('');

        const leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIdex];
        characters[rightIdex] = leftHand;

        this.data = characters.join('');
    }
}
export class NumberCollection {
    constructor(public data: number[]) { }

    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rightIdex: number): boolean {
        return this.data[leftIndex] > this.data[rightIdex];
    }
    swap(leftIndex: number, rightIdex: number): void {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIdex];
        this.data[rightIdex] = leftHand;
    }
}
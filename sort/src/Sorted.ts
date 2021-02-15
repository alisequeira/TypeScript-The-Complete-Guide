import { NumberCollection } from './NumberCollection';

interface Sortable {
    length: number;
    compare(leftIndex: number, rightIdex: number): boolean;
    swap(leftIndex: number, rightIdex: number): void;
}
export abstract class Sorter {
    /**
     * When we are using abstract class we can provide a set
     * of method that will be available some time in the future.
     * todo do that we need to user the key word abstract.
     */
    abstract compare(leftIndex: number, rightIdex: number): boolean;
    abstract swap(leftIndex: number, rightIdex: number): void;
    abstract length: number;

    sort(): void {
        const { length } = this;

        for (let i = 0; i < length; i++) {
            for (let j = 0; i < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}


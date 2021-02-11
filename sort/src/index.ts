import { Sorter } from './Sorted';
import { NumberCollection } from './NumberCollection';

const numberCollection = new NumberCollection([10, 3, -5, 0]);
const sorter = new Sorter(numberCollection);
sorter.sort()
console.log(numberCollection.data)

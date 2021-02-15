import { Sorter } from './Sorted';
import { NumberCollection } from './NumberCollection';
import { CharactersCollection } from './CharacteCollection';

const numberCollection = new NumberCollection([10, 3, -5, 0]);
const sorter = new Sorter(numberCollection);
sorter.sort()
console.log(numberCollection.data)

const characterCollection = new CharactersCollection('Xaayb');
const stringSorter = new Sorter(characterCollection);
stringSorter.sort();
console.log(characterCollection.data);
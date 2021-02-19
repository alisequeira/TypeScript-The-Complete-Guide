import { User } from './models/User';

const user = new User({ name: 'Ali', age: 22 });
console.log(user.get('name'));
console.log(user.get('age'));
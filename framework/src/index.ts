import { User } from './models/User';

const user = new User({ name: 'Ali', age: 22 });

user.set({ name: 'Jorgell' });

console.log(user.get('name'));
console.log(user.get('age'));
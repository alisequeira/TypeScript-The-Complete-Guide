import { User } from './models/User';

const user = new User({ name: 'Ali', age: 22 });

user.on('change', () => {

});

console.log(user)
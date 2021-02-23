import { User, userProps } from './models/User';
import { Collection } from './models/Collection';

const collection = new Collection<User, userProps>('http://localhost:3000/users', (json: userProps) => User.buildUser(json));

collection.on('change', () => console.log(collection));
collection.fetch();
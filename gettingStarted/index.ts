/*Make a network request to fetch some JSON and print the result */
import axios from 'axios';
const URL = 'http://jsonplaceholder.typicode.com/todos/1';

//Interfaces are used to define the structure of an object
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(URL).then(response => {
    const todo = response.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
    The Todo with the ID ${id}
    Has a title of: ${title}
    Is it Finished? ${completed}
`);
};
import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionsTypes } from './types';

const url = 'https://jsonplaceholder.typicode.com/todos';

interface Todo {
    id: number,
    title: string,
    complete: boolean
}

interface fetchTodosActions {
    type: ActionsTypes.fetchTodos;
    payload: Todo[];
}


export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<Todo[]>(url);


        //This generic type right here does is make sure 
        //that you are always passing an object with
        //The correct types in properties 
        dispatch<fetchTodosActions>({
            type: ActionsTypes.fetchTodos,
            payload: response.data
        });
    };
};
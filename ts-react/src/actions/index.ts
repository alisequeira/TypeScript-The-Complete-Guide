import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionsTypes } from './types';

const url = 'https://jsonplaceholder.typicode.com/todos';

interface Todo {
    id: number,
    title: string,
    complete: boolean
}



export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<Todo[]>(url);

        dispatch({
            type: ActionsTypes.fetchTodos,
            payload: response.data
        });
    };
};
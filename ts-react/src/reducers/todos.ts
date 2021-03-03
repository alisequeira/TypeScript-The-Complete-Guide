import { Todo, fetchTodosActions } from '../actions/';
import { ActionsTypes } from '../actions/types';

export const todosReducer = (state: Todo[] = [], action: fetchTodosActions) => {
    switch (action.type) {
        case ActionsTypes.fetchTodos:
            return action.payload;

        default:
            return state;
    }
}
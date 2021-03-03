import { Todo, fetchTodosActions, ActionsTypes } from '../actions/';


export const todosReducer = (state: Todo[] = [], action: fetchTodosActions) => {
    switch (action.type) {
        case ActionsTypes.fetchTodos:
            return action.payload;

        default:
            return state;
    }
}
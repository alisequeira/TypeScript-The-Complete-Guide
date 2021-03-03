import { fetchTodosActions, deleteTodoAction } from './todos';

export enum ActionsTypes {
    fetchTodos,
    deleteTodo
}

export type Action = fetchTodosActions | deleteTodoAction;
import { ADD_TODO, DELETE_TODO } from './types';

export const addTodo = (todo) => (
    {
        type: ADD_TODO,
        data: todo
    }
);

export const deleteTodo = (id) => (
    {
        type: DELETE_TODO,
        data: id
    }
);

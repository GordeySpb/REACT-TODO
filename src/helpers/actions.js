import axios from 'axios';

export const ADD_TODOS = 'ADD_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const DELETE = 'DELETE';
export const TOGGLE = 'TOGGLE';


export const addTodosAction = payload => ({ type: ADD_TODOS, payload });
export const addTodoAction = payload => ({ type: ADD_TODO, payload });
export const deleteAction = payload => ({ type: DELETE, payload });
export const toggleAction = payload => ({ type: TOGGLE, payload });

export function addTodo(title) {
  return axios.post('/api/addTodo', { title })
    .then(res => res.data)
    .then(addTodoAction);
}

export function deleteTodo(id) {
  return axios.delete(`api/delTodo/${id}`)
    .then(res => res.data)
    .then(deleteAction);
}

export function updateTodo(id, title) {
  return axios.put(`api/updateTodo/${id}`, { title })
    .then(res => res.data)
    .then(toggleAction);
}

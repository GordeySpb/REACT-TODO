import {
  getTodosRequest,
  addTodoRequest,
  delTodoRequest,
  updateTodoRequest,
  toggleCompleteRequest,
} from './API';

export const ADD_TODOS = 'ADD_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const DELETE = 'DELETE';
export const UPDATE = 'UPDATE';
export const TOGGLE = 'TOGGLE';


export const addTodosAction = payload => ({ type: ADD_TODOS, payload });
export const addTodoAction = payload => ({ type: ADD_TODO, payload });
export const deleteAction = payload => ({ type: DELETE, payload });
export const toggleAction = payload => ({ type: TOGGLE, payload });

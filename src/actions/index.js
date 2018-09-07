import axios from 'axios';

export const ADD_TODOS = 'ADD_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const DELETE = 'DELETE';
export const TOGGLE = 'TOGGLE';
export const SET_PRELOADER_STATE = 'SET_PRELOADER_STATE';


export const addTodosAction = payload => ({ type: ADD_TODOS, payload });
export const addTodoAction = payload => ({ type: ADD_TODO, payload });
export const deleteAction = payload => ({ type: DELETE, payload });
export const toggleAction = payload => ({ type: TOGGLE, payload });
export const togglePreloaderAction = payload => ({ type: SET_PRELOADER_STATE, payload });

export const addTodo = payload => (dispatch) => {
  dispatch(togglePreloaderAction(true));
  return axios.post('/api/addTodo', { payload })
    .then(res => res.data)
    .then(todo => dispatch(addTodoAction(todo)))
    .then(() => dispatch(togglePreloaderAction(false)));
};

export const deleteTodo = payload => (dispatch) => {
  dispatch(togglePreloaderAction(true));
  return axios.delete(`api/delTodo/${payload}`)
    .then(res => res.data)
    .then(id => dispatch(deleteAction(id)))
    .then(() => dispatch(togglePreloaderAction(false)));
};

export function updateTodo(id, title) {
  return axios.put(`api/updateTodo/${id}`, { title })
    .then(res => res.data)
    .then(toggleAction);
}

export function toggleTodo(id) {
  return axios.patch(`api/toggleTodo/${id}`)
    .then(res => res.data)
    .then(toggleAction);
}

export function addTodos() {
  return axios.get('/api/getTodos')
    .then(res => res.data)
    .then(addTodosAction);
}

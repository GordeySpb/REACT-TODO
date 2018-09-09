import axios from 'axios';

export const ADD_TODOS = 'ADD_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const DELETE = 'DELETE';
export const TOGGLE = 'TOGGLE';
export const SET_PRELOADER_STATE = 'SET_PRELOADER_STATE';
export const SET_ERROR_STATE = 'SET_ERROR_STATE';


export const addTodosAction = payload => ({ type: ADD_TODOS, payload });
export const addTodoAction = payload => ({ type: ADD_TODO, payload });
export const deleteAction = payload => ({ type: DELETE, payload });
export const toggleAction = payload => ({ type: TOGGLE, payload });
export const togglePreloaderAction = payload => ({ type: SET_PRELOADER_STATE, payload });
export const toggleErrorAction = payload => ({ type: SET_ERROR_STATE, payload });

export const addTodo = payload => (dispatch) => {
  dispatch(togglePreloaderAction(true));

  return axios.post('/api/addTod', { payload })
    .then(res => res.data)
    .then((todo) => {
      if (todo) {
        dispatch(addTodoAction(todo));
      } else {
        dispatch(toggleErrorAction(true));
      }
    })
    .then(() => dispatch(togglePreloaderAction(false)))
    .catch((er) => {
      dispatch(toggleErrorAction(true));
      dispatch(togglePreloaderAction(false));
      return Promise.reject(er);
    });
};

export const deleteTodo = payload => (dispatch) => {
  dispatch(togglePreloaderAction(true));

  return axios.delete(`api/delTodo/${payload}`)
    .then(res => res.data)
    .then((id) => {
      if (id) {
        dispatch(deleteAction(id));
      } else {
        dispatch(toggleErrorAction(true));
      }
    })
    .then(() => dispatch(togglePreloaderAction(false)))
    .catch(() => {
      dispatch(toggleErrorAction(true));
      dispatch(togglePreloaderAction(false));
    });
};

export const updateTodo = payload => (dispatch) => {
  dispatch(togglePreloaderAction(true));

  return axios.put('api/updateTodo', { payload })
    .then(res => res.data)
    .then((todo) => {
      if (todo) {
        dispatch(toggleAction(todo));
      } else {
        dispatch(toggleErrorAction(true));
      }
    })
    .then(() => dispatch(togglePreloaderAction(false)))
    .catch(() => {
      dispatch(toggleErrorAction(true));
      dispatch(togglePreloaderAction(false));
    });
};

export const toggleTodo = payload => (dispatch) => {
  dispatch(togglePreloaderAction(true));

  return axios.patch(`api/toggleTodo/${payload}`)
    .then(res => res.data)
    .then((todo) => {
      if (todo) {
        dispatch(toggleAction(todo));
      } else {
        dispatch(toggleErrorAction(true));
      }
    })
    .then(() => dispatch(togglePreloaderAction(false)))
    .catch(() => {
      dispatch(toggleErrorAction(true));
      dispatch(togglePreloaderAction(false));
    });
};

export const addTodos = () => (dispatch) => {
  dispatch(togglePreloaderAction(true));
  return axios.get('/api/getTodos')
    .then(res => res.data)
    .then((todos) => {
      if (todos) {
        dispatch(addTodosAction(todos));
      } else {
        dispatch(toggleErrorAction(true));
      }
    })
    .then(() => dispatch(togglePreloaderAction(false)))
    .catch(() => {
      dispatch(toggleErrorAction(true));
      dispatch(togglePreloaderAction(false));
    });
};

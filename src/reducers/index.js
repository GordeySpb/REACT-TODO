import { combineReducers } from 'redux';

import todos from './todos';
import condition from './condition';

export default combineReducers({
  todos,
  condition,
});

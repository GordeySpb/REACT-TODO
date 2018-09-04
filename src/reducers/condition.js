import { SET_STATE } from '../actions/index';

const initialState = false;

export default function condition(state = initialState, { type, payload }) {
  switch (type) {
    case SET_STATE:
      return payload;
    default:
      return state;
  }
}

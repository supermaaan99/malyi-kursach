import { reducer } from 'redux-chill';
import { init, navigate } from './actions';
import { Location } from 'history';

/**
 * Defaults
 */
const defaultState = {
  location: null as Location,
  previous: null as Location
};

/**
 * Current localization settings
 */
const router = reducer(defaultState)
  .on(init, (state, payload) => (state.location = payload))
  .on(navigate.emitted, (state, location) => {
    state.previous = state.location;
    state.location = location;
  });

export { router };

import { reducer } from 'redux-chill';
import { startup } from './actions';

/**
 * General app state
 */
const general = reducer({
  isReady: false
}).on(startup.success, state => {
  state.isReady = true;
});

export { general };

import { make } from 'redux-chill';
import { Location } from 'history';

/**
 * Init location
 */
const init = make('[router] init').stage((location: Location) => location);

/**
 * Transition
 */
const navigate = make('[router] transition')
  .stage((location: string) => location)
  .stage('emitted', (location: Location) => location);

export { init, navigate };

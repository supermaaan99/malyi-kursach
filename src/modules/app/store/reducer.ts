import { general } from '@general/store';
import { router } from '@router/store';
import { combineReducers } from 'redux';
import { ui } from '@ui';
import { objectRecognition } from '../../object-recognition/store/reducer';

/**
 * App rd
 */
const app = combineReducers({
  router,
  general,
  ui,
  objectRecognition
});

export { app };

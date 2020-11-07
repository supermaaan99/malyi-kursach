import { combineReducers } from 'redux';
import { preloader } from './preloader';
import { toast } from './toast';
import { modal } from './modal';

/**
 * UI state
 */
const ui = combineReducers({
  toast,
  preloader,
  modal
});

export { ui };

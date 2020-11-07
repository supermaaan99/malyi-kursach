import { ToastState } from './state';
import { reducer } from 'redux-chill';
import { toggleToast } from './actions';

/**
 * toast state
 */
const toast = reducer(new ToastState())
  .on(toggleToast, (state, payload) => {
    state.isToastVisible = true;
    state.toastData = payload;
  })
  .on(toggleToast.hide, state => {
    state.isToastVisible = false;
  });

export { toast };

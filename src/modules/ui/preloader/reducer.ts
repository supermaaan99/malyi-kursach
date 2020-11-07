import { PreloaderState } from './state';
import { reducer } from 'redux-chill';
import { preloaderStart, preloaderStop } from './actions';

/**
 * preloader state
 */
const preloader = reducer(new PreloaderState())
  .on(preloaderStart, (state, { id }) => {
    id.forEach(item => {
      if (state.active.some(one => one == item)) return;

      state.active.push(item);
    });
  })
  .on(preloaderStop, (state, { id }) => {
    state.active = state.active.filter(item => id.every(one => one != item));
  });

export { preloader };

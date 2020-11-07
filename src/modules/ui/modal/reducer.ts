import { ModalState } from './state';
import { reducer } from 'redux-chill';
import { showModal, closeModal } from './actions';

/**
 * modal state
 */
const modal = reducer(new ModalState())
  .on(showModal, (state, { id }) => {
    id.forEach(item => {
      if (state.active.some(one => one == item)) return;

      state.active.push(item);
    });
  })
  .on(closeModal, (state, { id }) => {
    state.active = state.active.filter(item => id.every(one => one != item));
  });

export { modal };

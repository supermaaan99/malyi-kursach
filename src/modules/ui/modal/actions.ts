import { make } from 'redux-chill';
import { ensureIsList } from '@core/shared';

/**
 * Show Modal
 */
const showModal = make('[ui] show modal').stage((id: any | any[]) => ({
  id: ensureIsList(id)
}));

/**
 * Close Modal
 */
const closeModal = make('[ui] close modal').stage((id: any | any[]) => ({
  id: ensureIsList(id)
}));

export { showModal, closeModal };

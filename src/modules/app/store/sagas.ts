import { RouterSaga } from '@router/store';
import { GeneralSaga } from '@general/store';
import { ToastSaga } from '@ui/toast';

/**
 * App sagas
 */
const sagas = [
  new RouterSaga(),
  new GeneralSaga(),
  new ToastSaga()
];

export { sagas };

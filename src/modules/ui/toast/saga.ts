import { Saga } from 'redux-chill';
import { toggleToast } from './actions';
import { delay, put } from 'redux-saga/effects';

/**
 * toast saga
 */
class ToastSaga {
  @Saga(toggleToast)
  public *toggleToast() {
    yield delay(5000);
    yield put(toggleToast.hide());
  }
}

export { ToastSaga };

import { Payload, Saga } from 'redux-chill';
import { put, takeEvery, select } from 'redux-saga/effects';
import { navigate } from './actions';
import { Context } from '@app/store/context';
import { State } from '@app/store/state';

class RouterSaga {
  /**
   * Navigate to location if history exsists
   */
  @Saga(takeEvery, navigate)
  public *navigate(location: Payload<typeof navigate>, { history }: Context) {
    if (!history) return;

    history.push(location);

    yield put(navigate.emitted(history.location));
  }
}

export { RouterSaga };

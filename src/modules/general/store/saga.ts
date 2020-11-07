import { Saga } from 'redux-chill';
import { put, take } from 'redux-saga/effects';
import { startup } from './actions';

/**
 * General app methods
 */
class GeneralSaga {
  /**
   * Init all pre-start actions
   */
  @Saga(startup)
  public *startup() {
    yield put(startup.success());
  }
}

export { GeneralSaga };

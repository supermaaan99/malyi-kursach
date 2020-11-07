import { Uikit } from '@uikit';
import * as React from 'react';
import { Route } from 'react-router-dom';
import { Home } from 'src/modules/home';
import * as styles from './routes.scss';
import { useSelector } from 'react-redux';
import { State } from '@app/store/state';
import { Toast } from '@core/components';
import { ObjectRecognition } from 'src/modules/object-recognition';

/**
 * Renders Routes
 */
const Routes: React.FC = () => {
  const { isToastVisible } = useSelector((state: State) => state.ui.toast);

  return (
    <div className={styles.routes}>
      {isToastVisible && <Toast />}
      {/* <Route path='/uikit' component={Uikit} /> */}
      <Route exact path='/' component={Home} />
      <Route path='/object-recognition' component={ObjectRecognition} />
    </div>
  );
};
export { Routes };

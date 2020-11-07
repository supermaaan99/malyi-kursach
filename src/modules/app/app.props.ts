import { History } from 'history';
import { Store } from 'redux';

/**
 * Global
 */
declare global {
  interface Window {
    stream: any;
  }
}

/**
 * Props
 */
type AppProps = {
  store: Store;
  history: History;
};

export { AppProps };

import { make } from 'redux-chill';
import { ensureIsList } from '@core/shared';

/**
 * Start loader
 */
const preloaderStart = make('[preloader] start').stage((id: any | any[]) => ({
  id: ensureIsList(id)
}));

/**
 * Stop loader
 */
const preloaderStop = make('[preloader] stop').stage((id: any | any[]) => ({
  id: ensureIsList(id)
}));

export { preloaderStart, preloaderStop };

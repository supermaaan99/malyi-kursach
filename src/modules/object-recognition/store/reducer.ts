import { reducer } from 'redux-chill';
import { ObjectRecognitionState } from './state';

/**
 * object-recognition state
 */
const objectRecognition = reducer(new ObjectRecognitionState());

export { objectRecognition };

import { make } from 'redux-chill';
import { Prediction } from '../models';

/**
 * Select suggestion
 */
const selectPrediction = make('[object recognition] select').stage(
  (payload: { prediction: Prediction; predictions: Prediction[] }) => payload
);


export { selectPrediction };

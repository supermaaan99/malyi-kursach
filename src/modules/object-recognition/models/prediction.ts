import { string } from 'yup';

/**
 * TensorFlow prediction model
 */
type Prediction = {
  bbox?: number[];
  class: string;
  score?: number;
  code: string;
  name: string;
  tfClass?: string;
  removeAt?: Date;
};

export { Prediction };

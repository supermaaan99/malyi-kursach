import { make } from 'redux-chill';
import { FormikProps, FormikHelpers } from 'formik';
import { SubmitPayload } from './types';

/**
 * Universal handler to standartize onSubmit props of Formik
 */
const makeSubmitStage = <V, M = null>() => (
  [values, helpers]: [V, FormikHelpers<V>],
  meta: M = null
): SubmitPayload<V, M> => ({
  values,
  ...helpers,
  meta
});

export { makeSubmitStage };

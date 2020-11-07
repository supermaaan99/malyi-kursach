import { FormikErrors } from 'formik';

/**
 * Formik status
 */
type FormikStatus<T = any> = {
  /**
   * Form disabled status
   */
  disabled: boolean;
  /*
   * Form outer errors
   */
  errors: FormikErrors<T>;
};

export { FormikStatus };

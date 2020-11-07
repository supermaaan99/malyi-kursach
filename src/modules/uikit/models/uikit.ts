import * as yup from 'yup';

/**
 * Uikit form values
 */
type UikitFormValues = {
  email: string;
  password: string;
  accept: boolean;
};

/**
 * Uikit form validation schema
 */
const uikitValidationSchema = yup.object<UikitFormValues>().shape({
  email: yup
    .string()
    .label('Email')
    .email()
    .required(),
  password: yup
    .string()
    .label('Password')
    .min(6)
    .required()
});

export { UikitFormValues, uikitValidationSchema };

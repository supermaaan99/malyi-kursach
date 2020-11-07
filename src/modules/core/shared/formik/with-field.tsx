import { useFormikContext } from 'formik';
import * as React from 'react';
import { get } from 'object-path';
import { useCallback } from 'react';
import { FormikStatus } from './status';
import { ComponentType } from 'enzyme';

type Props = {
  value?: any;
  error?: any;
  isError?: any;
  onTouch?: any;
  onChange?: any;
  touched?: any;
  disabled?: any;
};

/**
 * Wrap component with field data provided
 */
function withField<P extends Props>(source: ComponentType<P>) {
  const Result: any = source;
  const result: React.FC<{ name: string }> = props => {
    const { name } = props;
    const {
      values,
      errors,
      setFieldValue,
      setFieldTouched,
      isSubmitting,
      touched,
      ...formik
    } = useFormikContext<any>();
    const status: FormikStatus = formik.status;
    const error = get(status, 'errors' + '.' + name) || get(errors, name);
    const isError = error != undefined && error != null;
    const value = get(values, name);
    const onChange = useCallback(
      value => {
        setFieldValue(name, value);
      },
      [setFieldValue, name, value]
    );
    const onTouch = useCallback(
      (touched = true) => {
        setFieldTouched(name, touched);
      },
      [name, setFieldTouched]
    );
    return (
      <Result
        value={value}
        error={error}
        isError={isError}
        onTouch={onTouch}
        onChange={onChange}
        touched={get(touched, name)}
        disabled={isSubmitting || get(status, 'disabled')}
        {...props}
      />
    );
  };

  return (result as any) as ComponentType<
    { name: string } & Omit<P, keyof Props> & Partial<Pick<P, keyof Props>>
  >;
}

export { withField };

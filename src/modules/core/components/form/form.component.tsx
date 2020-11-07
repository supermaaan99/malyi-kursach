import * as React from 'react';
import { FormProps } from './form.props';
import * as styles from './form.scss';
import classNames from 'classnames';

/**
 * Renders Form
 */
const Form: React.FC<FormProps> = ({ className, children, handleSubmit }) => (
  <div
    className={classNames(className, styles.form)}
    onKeyPress={event => {
      if ((event.keyCode || event.which) == 13) {
        event.preventDefault();
        handleSubmit();
      }
    }}
  >
    {children}
  </div>
);

export { Form };

import * as React from 'react';
import { ButtonProps } from './button.props';
import * as styles from './button.scss';
import classNames from 'classnames';
import { capitalize } from '@core/shared';

/**
 * Renders Button
 */
const Button: React.FC<ButtonProps> = ({
  className,
  disabled,
  children,
  theme,
  size,
  ...props
}) => (
  <button
    className={classNames(
      className,
      styles.button,
      styles['button' + capitalize(theme)],
      styles['button' + capitalize(size)],
      {
        [styles.buttonDisabled]: disabled
      }
    )}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
);

/**
 * Defaults
 */
Button.defaultProps = {
  type: 'button',
  theme: 'primary',
  size: 'md',
  className: '',
  disabled: false
};

export { Button };

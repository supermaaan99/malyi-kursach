import * as React from 'react';
import { CheckboxProps } from './checkbox.props';
import * as styles from './checkbox.scss';
import { Icon } from '../icon';
import classNames from 'classnames';
import { Label } from '../label';

/**
 * Renders Checkbox
 */
const Checkbox: React.FC<CheckboxProps> = ({
  label,
  value,
  onChange,
  className,
  isError,
  error,
  onTouch,
  disabled,
  ...props
}) => (
  <div
    className={classNames(styles.checkbox, className, {
      [styles.checkboxDisabled]: disabled
    })}
    onClick={() => {
      if (disabled) return;
      onTouch();
      onChange(!value);
    }}
    {...props}
  >
    <div
      className={classNames(styles.flag, {
        [styles.flagChecked]: value,
        [styles.flagError]: isError
      })}
    >
      {value && <Icon className={styles.checkIcon} name='check-sm' />}
    </div>
    {label && <Label className={styles.label}>{label}</Label>}
    {isError && <div className={styles.error}>{error}</div>}
  </div>
);

/**
 * Default props
 */
Checkbox.defaultProps = {
  label: '',
  value: false,
  onChange: () => {},
  className: '',
  onTouch: () => {},
  disabled: false
};

export { Checkbox };

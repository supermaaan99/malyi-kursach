import classNames from 'classnames';
import * as React from 'react';
import { SwitchProps } from './switch.props';
import * as styles from './switch.scss';
import { Label } from '../label';

/**
 * Renders Switch
 */
const Switch: React.FC<SwitchProps> = ({ label, value, onChange }) => (
  <div className={styles.switch}>
    <Label className={styles.label}>{label}</Label>
    <div
      className={classNames(styles.track, {
        [styles.trackActive]: value
      })}
      onClick={() => onChange(!value)}
    >
      <div
        className={classNames(styles.indicator, {
          [styles.indicatorActive]: value
        })}
      />
    </div>
  </div>
);

export { Switch };

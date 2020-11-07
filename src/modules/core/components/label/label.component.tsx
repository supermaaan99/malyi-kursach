import * as React from 'react';
import { LabelProps } from './label.props';
import * as styles from './label.scss';
import classNames from 'classnames';

/**
 * Renders Label
 */
const Label: React.FC<LabelProps> = ({ className, children }) => (
  <label className={classNames(className, styles.label)}>{children}</label>
);

export { Label };

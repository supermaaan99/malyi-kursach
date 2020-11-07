import * as React from 'react';
import * as styles from './typography.scss';
import classNames from 'classnames';
import { HeadingProps } from './typography.props';

/**
 * Renders h1
 */
const H1: React.FC<HeadingProps> = ({ className, children }) => (
  <h1 className={classNames(className, styles.h1)}>{children}</h1>
);

/**
 * Renders h2
 */
const H2: React.FC<HeadingProps> = ({ className, children }) => (
  <h2 className={classNames(className, styles.h2)}>{children}</h2>
);

/**
 * Renders h3
 */
const H3: React.FC<HeadingProps> = ({ className, children }) => (
  <h3 className={classNames(className, styles.h3)}>{children}</h3>
);

/**
 * Renders h1
 */
const H4: React.FC<HeadingProps> = ({ className, children }) => (
  <h4 className={classNames(className, styles.h4)}>{children}</h4>
);

/**
 * Renders h5
 */
const H5: React.FC<HeadingProps> = ({ className, children }) => (
  <h5 className={classNames(className, styles.h5)}>{children}</h5>
);

/**
 * Renders h6
 */
const H6: React.FC<HeadingProps> = ({ className, children }) => (
  <h6 className={classNames(className, styles.h6)}>{children}</h6>
);

export { H1, H2, H3, H4, H5, H6 };

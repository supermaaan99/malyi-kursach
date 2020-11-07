import classNames from 'classnames';
import * as React from 'react';
import { IconProps } from './icon.props';
import { ReactSVG } from 'react-svg';
import * as styles from './icon.scss';

/**
 * Font icon
 */
const Icon = React.memo<IconProps>(({ className, fill, name, onClick }) => (
  <ReactSVG
    beforeInjection={svg => {
      fill && svg.setAttribute('style', `fill: ${fill}`);
    }}
    className={classNames(styles.icon, className)}
    src={require(`img/${name}.svg`)}
    onClick={onClick}
  />
));

export { Icon };

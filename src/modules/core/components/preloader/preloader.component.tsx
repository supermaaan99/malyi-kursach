import * as React from 'react';
import { PreloaderProps } from './preloader.props';
import * as styles from './preloader.scss';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { State } from '@app/store/state';
import { exclude } from '@core/shared/utils';
import { Preloaders } from '@ui/models';

/**
 * Renders Preloader
 */
const Preloader: React.FC<PreloaderProps> = ({ id, children, ...props }) => {
  const { active } = useSelector((state: State) => state.ui.preloader);
  const isActive =
    'isActive' in props ? props.isActive : active.some(one => one == id);

  if (isActive) {
    return (
      <React.Fragment>
        <div
          className={classNames(styles.overlay)}
          {...exclude(props, 'isActive')}
        >
          <div className={styles.preloader} />
        </div>

        {children && typeof children == 'function' ? children(isActive) : null}
      </React.Fragment>
    );
  }
  return children || null;
};

Preloader.defaultProps = {
  id: null,
  children: null
};

export { Preloader };

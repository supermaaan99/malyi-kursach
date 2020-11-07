import * as React from 'react';
import * as styles from './toast.scss';
import { useToastData } from './toast.hook';
import classNames from 'classnames';
import { Icon } from '../icon';
import { capitalize } from '@core/shared';

/**
 * Renders Toast
 */
const Toast: React.FC = () => {
  const { status, title, description } = useToastData();

  return (
    <div className={styles.toast}>
      <div className={styles.container}>
        {title && <div className={styles.title}>{title}</div>}
        {description && <div className={styles.description}>{description}</div>}
        {/* {controls && <div className={styles.controls}>controls</div>} */}
      </div>
      <div
        className={classNames(
          styles.status,
          styles['status' + capitalize(status)]
        )}
      >
        <Icon name={status} />
      </div>
    </div>
  );
};

export { Toast };

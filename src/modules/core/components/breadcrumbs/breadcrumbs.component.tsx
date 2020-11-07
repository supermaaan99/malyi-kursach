import * as React from 'react';
import { BreadcrumbsProps } from './breadcrumbs.props';
import * as styles from './breadcrumbs.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Breadcrumbs = React.memo<BreadcrumbsProps>(
  ({ className, links, children }) => (
    <div className={classNames(styles.breadcrumbs, className)}>
      <div className={styles.links}>
        {links.map((link, index) => {
          const { label, to } = link;

          return (
            <Link className={styles.link} key={index} to={to}>
              {label}
              <span className={styles.divider}> &gt; </span>
            </Link>
          );
        })}
      </div>
      <span className={styles.current}>{children}</span>
    </div>
  )
);

export { Breadcrumbs };

import * as React from 'react';
import * as styles from './home.scss';
import { useHomeData } from './home.hook';
import { NavLink } from 'react-router-dom';

/**
 * Renders Home
 */
const Home: React.FC = () => {
  const { navigation } = useHomeData();
  return (
    <div className={styles.home}>
      <nav className={styles.nav}>
        {navigation.map(({ caption, to }, index) => (
          <NavLink
            className={styles.link}
            activeClassName={styles.linkActive}
            to={to}
            key={index}
          >
            {caption}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export { Home };

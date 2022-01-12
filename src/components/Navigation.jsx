import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from '../redux/auth/auth-selectors';

const styles = {
  link: {
    fontSize: '20px',
    display: 'inline-block',
    textDecoration: 'none',
    marginLeft: 25,
    padding: 12,
    fontWeight: 700,
    color: 'white',
  },
  activeLink: {
    color: '#5d8aa8',
  },
};

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
        Главная
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Контакты
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;

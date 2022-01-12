import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    marginRight: 20,
    fontSize: 20,
    fontWeight: 700,
    color: 'white',
  },
  activeLink: {
    color: '#5d8aa8',
  },
};

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Регистрация
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Войти
      </NavLink>
    </div>
  );
}

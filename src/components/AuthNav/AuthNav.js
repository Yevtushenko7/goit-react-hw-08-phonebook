import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => (
  <ul className={styles.AuthNavList}>
    <li className={styles.listItem}>
      <NavLink to="/register"  className={styles.listItemLink}>Registration</NavLink>
    </li>
    <li className={styles.listItem}>
      <NavLink to="/login"  className={styles.listItemLink}>Login</NavLink>
    </li>
  </ul>
);

export default AuthNav;
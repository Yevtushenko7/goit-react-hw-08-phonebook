import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import styles from './Navigation.module.css';



const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink
      className={styles.navLink}
      activeClassName={styles.navLinkActive}
      to= '/'
      exact
      
    >
      Home
    </NavLink>

    {isAuthenticated && (
      <NavLink
        to="/contacts"
        exact
        className={styles.navLink}
        activeClassName={styles.navLinkActive}
       
      >
        Contacts
      </NavLink>
    )}
  </nav>
);


const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
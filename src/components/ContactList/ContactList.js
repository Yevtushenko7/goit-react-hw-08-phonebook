import React from "react";
import Contact from "./Contact/Contact";
import styles from '../ContactList/ContactList.module.css';

const ContactsList = () => (
  <ul  className={styles.ContactList}>
    <Contact />
  </ul>
);

export default ContactsList;

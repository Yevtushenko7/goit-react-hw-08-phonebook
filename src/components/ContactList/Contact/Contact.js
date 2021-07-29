import React from "react";
import { connect } from "react-redux";
import styles from "../Contact/Contact.module.css";
import { operations,  selectors } from '../../../redux';


const Contact = ({ onDeleteClick, contacts }) => {
 
  return contacts.map(({ id, name, number }) => {
    return (
      <li key={id} className={styles.Contact}>
        {name}: {number}
        <button className={styles.button} onClick={() => onDeleteClick(id)} type="button">
          Delete
        </button>
      </li>
    )
  })
};


const mapStateToProps = (state) => ({
  contacts: selectors.getFilteredContacts(state),
  filter: selectors.getFilter(state)
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteClick: (id) => dispatch(operations.Delete(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
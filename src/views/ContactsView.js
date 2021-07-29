import React, { Component } from 'react';
import { connect } from 'react-redux';
import Filter from "../components/Filter";
import ContactForm from "../components/ContactForm";
import ContactsList from "../components/ContactList";
import { operations } from '../redux';
import styles from './HomeView.module.css';



class ContactsView extends Component {
    componentDidMount() {
    this.props.Fetch();
    }
    
    render() {

        return (
            <div className={styles.Hero}>
                <h1  className={styles.HeroText}>Phonebook</h1>
                <ContactForm />
                <h2>Contacts</h2>
                <Filter />
                <ContactsList />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
  Fetch: () => dispatch(operations.Fetch()),
});

export default connect(null,mapDispatchToProps)(ContactsView);
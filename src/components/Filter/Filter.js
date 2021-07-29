import React from "react";
import { connect } from "react-redux";
import styles from '../Filter/Filter.module.css';
import { actions, selectors } from '../../redux';


const Filter = ({ value, onFilter }) => {
  return <input type="text" className={styles.input} value={value} placeholder="Filter" onChange={onFilter} />
}

const mapStateToProps = (state) => ({
  value: selectors.getFilter(state),
})

const mapDispatchToProps = (dispatch) => ({
  onFilter: (e) => dispatch(actions.Filter(e.target.value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
import axios from "axios";
import actions from './actions';

const {
    fetchRequest,
    fetchSuccess,
    fetchError,
    addRequest,
    addSuccess,
    addError,
    deleteRequest,
    deleteSuccess,
    deleteError,
} = actions;


const Fetch = () => async dispatch => {
    dispatch(fetchRequest());

    try {
        const { data } = await axios.get('/contacts');
        dispatch(fetchSuccess(data));
    } catch (error) {
        dispatch(fetchError(error.message));
    }
   
};

const Add =
    ({ name, number }) =>
        async dispatch => {
            const contact = { name, number };
            dispatch(addRequest());
           
            try {
                const { data } = await axios.post('/contacts', contact);
                dispatch(addSuccess(data));
            } catch (error) {
                dispatch(addError(error.message));
            }

        };
  

const Delete = id => async dispatch => {
    dispatch(deleteRequest());

    try {
        axios.delete(`/contacts/${id}`);
        dispatch(deleteSuccess(id));
    } catch (error) {
        dispatch(deleteError(error.message));
    }

};

export default {
    Fetch,
    Add,
    Delete,
};
import axios from 'axios';
import * as actions from './phonebook-actions';

axios.defaults.baseURL = 'https://61dd3f98f60e8f001766869e.mockapi.io';

export const addContact = (name, number) => dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(actions.addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch(error => dispatch(actions.addContactError(error)));
};

export const deleteContact = contactId => dispatch => {
  dispatch(actions.deleteContactRequest());

  axios
    .delete(`./contacts/${contactId}`)
    .then(() => dispatch(actions.deleteContactSuccess(contactId)))
    .catch(error => dispatch(actions.deleteContactError(error)));
};

export const fetchContacts = () => dispatch => {
  dispatch(actions.fetchContactRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(actions.fetchContactSuccess(data)))
    .catch(error => dispatch(actions.fetchContactError(error)));
};

import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './ContactForm.scss';
import { v4 as uuidv4 } from 'uuid';
import * as actions from '../../redux/contacts/contacts-actions';

const ContactForm = ({ items, onContactAdd }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onFormSubmit = event => {
    event.preventDefault();
    const names = items.map(contact => contact.name);
    if (names.includes(name)) {
      alert(`${name} is already in contacts.`);
    } else {
      const contact = { id: uuidv4(), name, number };
      onContactAdd(contact);
    }
    formReset();
  };

  const changeName = event => setName(event.target.value);

  const changeNumber = event => setNumber(event.target.value);

  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className="Phonebook__form" onSubmit={onFormSubmit}>
      <label htmlFor="Phonebook-form__name">Name</label>
      <input
        type="text"
        id="Phonebook-form__name"
        name="name"
        value={name}
        onChange={changeName}
        required
        autoComplete="off"
      ></input>
      <label htmlFor="Phonebook-form__number">Number</label>
      <input
        type="tel"
        id="Phonebook-form__number"
        name="number"
        value={number}
        onChange={changeNumber}
        required
        autoComplete="off"
        pattern="^[ 0-9]+$"
      ></input>
      <button className="btn" type="submit">
        Add contact
      </button>
    </form>
  );
};

const mapStateToProps = state => ({
  items: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onContactAdd: contact => dispatch(actions.addContact(contact)),
});

ContactForm.defaultProps = {
  items: [],
};

ContactForm.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
  onContactAdd: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

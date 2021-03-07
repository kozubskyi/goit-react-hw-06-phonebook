import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// export const addContact = createAction('phonebook/addContact');
export const addContact = createAction('phonebook/addContact', (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));
export const deleteContact = createAction('phonebook/deleteContact');
export const changeFilter = createAction('phonebook/changeFilter');

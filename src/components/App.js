import React, {Component} from "react";
// import styled from 'styled-components';
// import { nanoid } from 'nanoid';
import ContactForm from "./Form/Form";
import ContactList from "./ContactList/ContactList";


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  // addContact = (name, number) => {
  //   const person = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };
  // }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
  <ContactForm />

  <h2>Contacts</h2>
  {/* <Filter/> */}
  <ContactList contacts={this.state.contacts}/>
      </div>
    )
  }
}


export default App;

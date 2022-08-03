import React from 'react';
// import PropTypes from 'prop-types';

const ContactList = ({contacts}) => {
    return (
        <ul>
        {contacts.map(({ id, name, number }) => 
            (<li key={id}>
                <p>{name}</p>
                <p>{number}</p>
                <button type='submit'>Delete</button>
            </li>)
            
        )
        }
        </ul>
    )
}
export default ContactList;
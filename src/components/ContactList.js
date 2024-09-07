import React from 'react';
import ContactItem from './ContactItem';

function ContactList({ contacts, onDelete, onEdit, onToggleSelect, selectedContacts }) {
  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <ContactItem 
            key={contact.id} 
            contact={contact} 
            onDelete={onDelete} 
            onEdit={onEdit} 
            onToggleSelect={onToggleSelect}
            isSelected={selectedContacts.includes(contact.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default ContactList;

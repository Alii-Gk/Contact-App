import React from 'react';

function ContactItem({ contact, onDelete, onEdit, onToggleSelect, isSelected }) {
  return (
    <li className="contact-item">
      <input 
        type="checkbox" 
        checked={isSelected} 
        onChange={() => onToggleSelect(contact.id)} 
      />
      <span>{contact.name}</span>
      <span>{contact.email}</span>
      <button onClick={() => onEdit(contact)}>ویرایش</button>
      <button onClick={() => onDelete(contact.id)}>حذف</button>
    </li>
  );
}

export default ContactItem;

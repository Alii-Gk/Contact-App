import React, { useState } from 'react';

function EditContactForm({ contact, onSave }) {
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: contact.id, name, email });
  };

  return (
    <form onSubmit={handleSubmit} className="edit-contact-form">
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
        placeholder="نام"
      />
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
        placeholder="ایمیل"
      />
      <button type="submit">ذخیره</button>
    </form>
  );
}

export default EditContactForm;

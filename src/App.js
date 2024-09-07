import React, { useState } from 'react';
import ContactList from './components/ContactList';
import EditContactForm from './components/EditContactForm';
import DeleteConfirmationModal from './components/DeleteConfirmationModal';
import SearchBar from './components/SearchBar';
import GroupActions from './components/GroupActions';
import './App.css';
import { initialContacts } from './data';

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);
  const [deletingContact, setDeletingContact] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  

  const handleDelete = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
    setDeletingContact(null);
  };

  const handleEdit = (updatedContact) => {
    setContacts(
      contacts.map(contact => 
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
    setEditingContact(null);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleToggleSelect = (id) => {
    if (selectedContacts.includes(id)) {
      setSelectedContacts(selectedContacts.filter(contactId => contactId !== id));
    } else {
      setSelectedContacts([...selectedContacts, id]);
    }
  };

  const handleDeleteSelected = () => {
    setContacts(contacts.filter(contact => !selectedContacts.includes(contact.id)));
    setSelectedContacts([]);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase())
  );



  

  return (
    <div className="App">
      <h1>Contact Management</h1>
      <SearchBar onSearch={handleSearch} />
      <GroupActions onDeleteSelected={handleDeleteSelected} />
      <ContactList 
        contacts={filteredContacts} 
        onDelete={(id) => setDeletingContact(id)}
        onEdit={(contact) => setEditingContact(contact)}
        onToggleSelect={handleToggleSelect}
        selectedContacts={selectedContacts}
      />
      {editingContact && (
        <EditContactForm 
          contact={editingContact} 
          onSave={handleEdit} 
        />
      )}
      {deletingContact && (
        <DeleteConfirmationModal 
          onConfirm={() => handleDelete(deletingContact)}
          onCancel={() => setDeletingContact(null)}
        />
      )}
    </div>
  );
}


export default App;

import React from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input 
      type="text" 
      value={searchTerm} 
      onChange={handleSearch} 
      placeholder="جستجو در مخاطبین..." 
    />
  );
}

export default SearchBar;

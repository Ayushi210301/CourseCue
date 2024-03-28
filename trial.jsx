// AppShell.js

import React, { useState } from 'react';
import { AppShell, Navbar, Input, Button } from '@mantine/core';
import { useNavigate } from 'react-router';

function AppShell2({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const history = useNavigate();

  const handleSearch = () => {
    onSearch(searchTerm);
    history('/coursed');
  };

  return (
    <AppShell header={<Navbar />}>
      <Input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a course..."
      />
      <Button onClick={handleSearch}>Search</Button>
    </AppShell>
  );
}

export default AppShell2;

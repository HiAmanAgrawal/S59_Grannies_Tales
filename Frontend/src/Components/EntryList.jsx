import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EntityList() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const handleUserChange = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:8080/entities/${userId}`);
      setEntities(response.data);
    } catch (error) {
      console.error('Error fetching entities:', error);
    }
  };

  return (
    <div>
      <h2>Select User:</h2>
      <select value={selectedUser} onChange={(e) => {
        setSelectedUser(e.target.value);
        handleUserChange(e.target.value);
      }}>
        <option value="">Select User</option>
        {users.map(user => (
          <option key={user._id} value={user._id}>{user.name}</option>
        ))}
      </select>
      <h2>Entities created by selected user:</h2>
      <ul>
        {entities.map(entity => (
          <li key={entity._id}>{entity.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default EntityList;

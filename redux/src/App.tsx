import React from 'react';
import './App.css';
import UserAdd from './features/user/userAdd';
import Users from './features/user/users';

function App() {
  return (
    <div className="App">
      <UserAdd />
      <Users />
    </div>
  );
}

export default App;

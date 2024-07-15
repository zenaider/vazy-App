import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import UploadItem from './components/UploadItem';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuth = (status) => {
    setIsAuthenticated(status);
  };

  return (
    <div className="App">
      <h1>Fashion App</h1>
      {!isAuthenticated ? (
        <>
          <Register />
          <Login onAuth={handleAuth} />
        </>
      ) : (
        <UploadItem />
      )}
    </div>
  );
}

export default App;


import { useState } from 'react';
import NavBar from "../NavBar"

const Settings = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSave = (e : any) => {
    e.preventDefault();
    // Handle account info update logic here
    console.log('Account info updated:', { username, email, password });
  };
  
  const handleLogout = () => {
    // Handle logout logic here
    console.log('Logged out');
  };

  return (
    <>
        <NavBar></NavBar>
        <div className="settings-container">
        <h2>Account Settings</h2>
        <form className="settings-form" onSubmit={handleSave}>
            <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
            />
            </div>
            <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
            />
            </div>
            <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
            />
            </div>
            <button type="submit" className="settings-button">Save Changes</button>
        </form>
        <button onClick={handleLogout} className="logout-button">Log Out</button>
        </div>
    </>
  );
};

export default Settings;

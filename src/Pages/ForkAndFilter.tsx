import React, { useState } from 'react';
import NavBar from "../NavBar";

const ForkAndFilter = () => {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement login or account creation logic here
    if (username) {
      setIsLoggedIn(true);
    }
  };

  return (
    <>
        <NavBar></NavBar>
        <div className="fork-and-filter-container">
        <div className="welcome-message">
            <img src="https://live.staticflickr.com/65535/54390486677_2e11a6eb62_h.jpg" alt="Fork and Filter Logo" className="logo" id="home-logo" />
            <h2>Welcome to Fork and Filter!</h2>
            <p>
            Fork and Filter is your ultimate guide to discovering and organizing the best restaurants around you. Whether you're
            looking to try a new place for lunch, or build a list of your favorite spots for future outings, we help you find
            what suits your taste and mood.<br></br><br></br> Create a personalized experience by curating your very own restaurant lists. No more
            endless scrolling or forgetting where you wanted to eat!
            </p>
        </div>
        
        {!isLoggedIn ? (
            <form className="login-form" onSubmit={handleLogin}>
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
            <button type="submit" className="login-button">Log In or Create Account</button>
            </form>
        ) : (
            <div className="logged-in-message">
            <h3>You're logged in as {username}!</h3>
            <p>Now, you can create personalized lists of your favorite restaurants and start organizing your next culinary adventure.</p>
            </div>
        )}
        </div>
    </>
  );
};

export default ForkAndFilter;

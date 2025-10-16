import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Login = ({ isOpen, onClose }) => {
  const { login } = useAuth();
  
  const [isLoginView, setIsLoginView] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); 

    try {
     const url = isLoginView
      ? `${process.env.REACT_APP_API_URL}/login`
      : `${process.env.REACT_APP_API_URL}/signup`;

      const bodyData = isLoginView
        ? { email, password }
        : { name, email, password };

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyData)
      });

      const data = await response.json();

      if (response.ok) {
        if (isLoginView) {
          login(data.user, data.token); 
          onClose();
        } else {
          setMessage(data.message);
          setIsLoginView(true);
        }
      } else {
        setMessage(data.message || "Something went wrong");
      }

    } catch (error) {
      setMessage("Failed to connect to the server.");
      console.error(error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content animated">
        <div className="modal-art-side">
          <h2>Welcome to Swaad</h2>
          <p>Where Every Meal Tells a Story of Love and Tradition.</p>
        </div>
        <div className="modal-form-side">
          <button onClick={onClose} className="close-btn">&times;</button>
          <h2>{isLoginView ? 'Login' : 'Create Account'}</h2>
          
          {message && <p className="message">{message}</p>}

          <form onSubmit={handleSubmit}>
            {!isLoginView && (
              <div className="form-group">
                <label>Name</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} required />
              </div>
            )}
            <div className="form-group">
              <label>Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="submit-btn">
              {isLoginView ? 'Login' : 'Sign Up'}
            </button>
          </form>
          <p onClick={() => setIsLoginView(!isLoginView)} className="toggle-view">
            {isLoginView ? "Be part of the swaad family! - Sign Up" : "Already part of the Swaad family? Login"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
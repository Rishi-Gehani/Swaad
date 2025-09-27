import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Login = ({ isOpen, onClose }) => {
  const { login, signup } = useAuth();
  const [isLoginView, setIsLoginView] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    let success = false;
    if (isLoginView) {
      success = login(email, password);
    } else {
      success = signup(name, email, password);
    }
    if (success) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content animated">
        <div className="modal-art-side">
          <h2>Welcome to Swaad</h2>
          <p>Your culinary journey begins here. Log in to manage your events.</p>
        </div>
        <div className="modal-form-side">
          <button onClick={onClose} className="close-btn">&times;</button>
          <h2>{isLoginView ? 'Login' : 'Create Account'}</h2>
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
            {isLoginView ? "Don't have an account? Sign Up" : "Already have an account? Login"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
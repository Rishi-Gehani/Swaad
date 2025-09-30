// import React, { useState } from 'react';

// const Login = ({ isOpen, onClose }) => {
//   const [isLoginView, setIsLoginView] = useState(true);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [message, setMessage] = useState('');


//   if (!isOpen) return null;

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const url = isLoginView
//         ? 'http://localhost:5000/login'
//         : 'http://localhost:5000/signup';

//       const bodyData = isLoginView
//         ? { email, password }
//         : { name, email, password };

//       const response = await fetch(url, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(bodyData)
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setMessage(data.message);
//         console.log(isLoginView ? "User logged in:" : "User signed up:", data.user);

//         // Optional: after signup, switch to login view
//         if (!isLoginView) setIsLoginView(true);

//         // Optional: clear fields after success
//         setEmail('');
//         setPassword('');
//         if (!isLoginView) setName('');

//         // Optional: close modal or redirect after login
//         if (isLoginView) {
//           onClose(); // uncomment if you want to close modal on successful login
//           // localStorage.setItem("user", JSON.stringify(data.user)); // save user
//         }
        

//       } else {
//         setMessage(data.message || "Something went wrong");
//       }

//     } catch (error) {
//       setMessage("Something went wrong");
//       console.error(error);
//     }
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content animated">
//         <div className="modal-art-side">
//           <h2>Welcome to Swaad</h2>
//           <p>Your culinary journey begins here. Log in to manage your events.</p>
//         </div>
//         <div className="modal-form-side">
//           <button onClick={onClose} className="close-btn">&times;</button>
//           <h2>{isLoginView ? 'Login' : 'Create Account'}</h2>
//           {message && <p className="message">{message}</p>}
//           <form onSubmit={handleSubmit}>
//             {!isLoginView && (
//               <div className="form-group">
//                 <label>Name</label>
//                 <input
//                   type="text"
//                   value={name}
//                   onChange={e => setName(e.target.value)}
//                   required
//                 />
//               </div>
//             )}
//             <div className="form-group">
//               <label>Email</label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={e => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Password</label>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={e => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <button type="submit" className="submit-btn">
//               {isLoginView ? 'Login' : 'Sign Up'}
//             </button>
//           </form>
//           <p
//             onClick={() => setIsLoginView(!isLoginView)}
//             className="toggle-view"
//             style={{ cursor: 'pointer' }}
//           >
//             {isLoginView ? "Don't have an account? Sign Up" : "Already have an account? Login"}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
// 1. Import useAuth to connect to the context
import { useAuth } from '../context/AuthContext';

const Login = ({ isOpen, onClose }) => {
  // 2. Get the login function from our context
  const { login } = useAuth();
  
  const [isLoginView, setIsLoginView] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages

    try {
      const url = isLoginView
        ? 'http://localhost:5000/login'
        : 'http://localhost:5000/signup';

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
          // 3. THIS IS THE FIX:
          // After successful database login, update the global app state
          login(data.user, data.token); // Pass user and token from backend
          // And close the modal
          onClose();
        } else {
          // For signup, just show a success message and switch to login view
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
          <p>Your culinary journey begins here. Log in to manage your events.</p>
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
          <p onClick={() => { setIsLoginView(!isLoginView); setMessage(''); }} className="toggle-view">
            {isLoginView ? "Don't have an account? Sign Up" : "Already have an account? Login"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
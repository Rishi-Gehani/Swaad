import React, { createContext, useState, useContext } from 'react';

// Create the context
const AuthContext = createContext();

// Create a custom hook for easy access
export const useAuth = () => useContext(AuthContext);

// Create the provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]); // To store order history for the session

  // Mock Login (always succeeds)
  const login = (email, password) => {
    console.log('Logging in...');
    const fakeUser = { name: 'Test User', email: email };
    setUser(fakeUser);
    return true; // Indicate success
  };

  // Mock Signup (always succeeds)
  const signup = (name, email, password) => {
    console.log('Signing up...');
    const fakeUser = { name: name, email: email };
    setUser(fakeUser);
    return true; // Indicate success
  };

  // Logout
  const logout = () => {
    setUser(null);
    setOrders([]); // Clear orders on logout
  };
  
  // Function to add a completed order to history
  const addOrder = (order) => {
    const newOrder = {
      id: new Date().getTime(), // Unique ID for the order
      date: new Date().toLocaleDateString(),
      items: order.items,
      total: order.total,
    };
    setOrders(prevOrders => [newOrder, ...prevOrders]);
  };

  const value = {
    user,
    isAuthenticated: !!user,
    orders,
    login,
    signup,
    logout,
    addOrder,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]); 

  const login = (email, password) => {
    console.log('Logging in...');
    const fakeUser = { name: 'Test User', email: email };
    setUser(fakeUser);
    return true; 
  };

  const signup = (name, email, password) => {
    console.log('Signing up...');
    const fakeUser = { name: name, email: email };
    setUser(fakeUser);
    return true; 
  };

  
  const logout = () => {
    setUser(null);
    setOrders([]); 
  };
  
  
  const addOrder = (order) => {
    const newOrder = {
      id: new Date().getTime(), 
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
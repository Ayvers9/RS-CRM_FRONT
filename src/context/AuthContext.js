// src/contexts/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

// Создаем контекст
const AuthContext = createContext();

// Компонент провайдера для контекста
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Здесь можно инициализировать пользователя из локального хранилища или API

  const login = (userData) => {
    setUser(userData);
    // Здесь можно сохранить пользователя в локальное хранилище
  };

  const logout = () => {
    setUser(null);
    // Здесь можно удалить пользователя из локального хранилища
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Хук для использования контекста
export const useAuth = () => useContext(AuthContext);

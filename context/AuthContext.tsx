
import React, { createContext, useState, useCallback, useMemo } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    // In a real app, this would involve tokens, APIs, etc.
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  const value = useMemo(() => ({
    isLoggedIn,
    login,
    logout
  }), [isLoggedIn, login, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

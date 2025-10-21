
import React, { createContext, useState, useCallback, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Toast {
  id: string;
  message: string;
}

interface ToastContextType {
  toasts: Toast[];
  addToast: (message: string) => void;
  removeToast: (id: string) => void;
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined);

interface ToastProviderProps {
  children: React.ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((message: string) => {
    const id = uuidv4();
    setToasts((prevToasts) => [...prevToasts, { id, message }]);
    setTimeout(() => {
      removeToast(id);
    }, 3000); // Auto-remove after 3 seconds
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  const value = useMemo(() => ({
    toasts,
    addToast,
    removeToast
  }), [toasts, addToast, removeToast]);

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
};

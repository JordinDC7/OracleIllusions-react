// ToastContext.js
import React, { createContext, useContext, useState } from "react";

const ToastContext = createContext();
const useToast = () => useContext(ToastContext);

const ToastProvider = ({ children }) => {
  const [message, setMessage] = useState();

  return (
    <ToastContext.Provider value={{ message, setMessage }}>
      {children}
    </ToastContext.Provider>
  );
};

export { ToastProvider, useToast };

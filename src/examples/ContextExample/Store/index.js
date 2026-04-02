import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState('');
  const [title, setTitle] = useState('');

  const value = {
    count,
    user,
    title,
    increment: () => setCount(c => c + 1),
    login: () => setUser('John'),
    logout: () => setUser(''),
    setTitle,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useAppContext = () => useContext(AppContext);
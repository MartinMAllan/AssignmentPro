import { createContext, useState } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({ name: 'User Account', role: 'client' }); // Initial role: 'client'
  const [notifications] = useState(0); // 0 for new account

  const setRole = (newRole) => {
    if (['writer', 'client', 'admin'].includes(newRole)) {
      setUser((prevUser) => ({ ...prevUser, role: newRole }));
    } else {
      console.error('Invalid role specified.');
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, notifications, setRole }}>
      {children}
    </UserContext.Provider>
  );
}
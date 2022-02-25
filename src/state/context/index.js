import React, { createContext, useContext, useState } from 'react';

// Parent Context
// ID: string, NAME: string, EMAIL: string, PIN: string, CHILDREN: Array<String>

export const ParentContext = createContext();

export const ParentContextProvider = ({ comps }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pin, setPin] = useState('');
  const [children, setChildren] = useState([]);

  return (
    <ParentContext.Provider
      value={{
        id,
        setId,
        name,
        setName,
        email,
        setEmail,
        pin,
        setPin,
        children,
        setChildren,
      }}
    >
      {comps}
    </ParentContext.Provider>
  );
};

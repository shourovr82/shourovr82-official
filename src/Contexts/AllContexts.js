import React, { createContext, useState } from 'react';

export const EveryContexts = createContext();

const AllContexts = ({ children }) => {
  // const [loading, setLoading] = useState(true);
  const [navOpen, setNavOpen] = useState(false);

  const srv = 'shafin'

  const totalInfo = {
    setNavOpen,
    navOpen,
    srv
  }
  return (
    <EveryContexts.Provider value={totalInfo}>
      {children}
    </EveryContexts.Provider>
  );
};

export default AllContexts;
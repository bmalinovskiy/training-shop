import React, { createContext, useState, useMemo, useCallback } from 'react';

export const MenuContext = createContext({
  isMenuOpen: true,
  toggleMenu: () => {},
});

const NavState = ({ children }) => {
  const [isMenuOpen, toggleMenu] = useState(false);

  const toggleMenuMode = useCallback(() => toggleMenu(!isMenuOpen), [isMenuOpen]);

  const value = useMemo(() => ({ isMenuOpen, toggleMenuMode }), [isMenuOpen, toggleMenuMode]);

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

export default NavState;

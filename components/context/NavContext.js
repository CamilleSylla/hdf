import React, { useState, createContext, useEffect } from "react";

export const NavContext = createContext();




export function NavProvider(props) {
    const [nav, setNav] = useState([])
  return (
    <NavContext.Provider value={[nav, setNav]}>
      {props.children}
    </NavContext.Provider>
  );
}
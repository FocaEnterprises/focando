import React, { createContext, ReactNode, useState } from 'react';

interface FocandoProviderProps {
  children: ReactNode;
}

interface FocandoContextData {
  focandoLogo: string;
  userName: string;
  userImage: string;
}

export const FocandoContext = createContext({} as FocandoContextData);

export function FocandoProvider({ children }: FocandoProviderProps) {
  
  const [focandoLogo, setFocandoLogo] = useState("https://cdn.discordapp.com/attachments/795475841345388554/795479258725089320/AfAxsyJmx5G0AAAAAElFTkSuQmCC.png");
  const [userName, setUserName] = useState("GiverPlay007");
  const [userImage, setUserImage] = useState("https://github.com/GiverPlay007.png");

  const value: FocandoContextData = { 
    focandoLogo, userImage, userName
  };

  return (
    <FocandoContext.Provider value={ value }>
      { children }
    </FocandoContext.Provider>
  );
}
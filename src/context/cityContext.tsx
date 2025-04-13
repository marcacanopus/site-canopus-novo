// src/context/CityContext.tsx
'use client'

import { createContext, useContext, useState, ReactNode } from 'react';

type City = 'São Paulo' | 'Belo Horizonte' | 'Rio de Janeiro' | 'geral';

interface CityContextProps {
  activeCity: City;
  setActiveCity: (city: City) => void;
}

const CityContext = createContext<CityContextProps | undefined>(undefined);

export const CityProvider = ({ children }: { children: ReactNode }) => {
  const [activeCity, setActiveCity] = useState<City>('geral');

  return (
    <CityContext.Provider value={{ activeCity, setActiveCity }}>
      {children}
    </CityContext.Provider>
  );
};

export const useCity = (): CityContextProps => {
  const context = useContext(CityContext);
  if (!context) {
    throw new Error('useCity deve ser usado dentro de um CityProvider');
  }
  return context;
};

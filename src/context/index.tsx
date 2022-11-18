import React, { ReactNode, useContext } from 'react';
import { data, DataInterface } from '@/assets/data';

const { createContext } = React;

interface AppDataContextProviderInterface {
  children: ReactNode;
}

export const AppDataContext = createContext<DataInterface>();

export const AppDataContextProvider = ({
  children,
}: AppDataContextProviderInterface) => (
  <AppDataContext.Provider value={data}>{children}</AppDataContext.Provider>
);

export const useAppDataContext = () => useContext(AppDataContext);

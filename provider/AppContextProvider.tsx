"use client";
import { createContext, useContext, useState } from "react";

type AppValueType = string | boolean | number | Date;
interface AppContextInterface<T extends AppValueType> {
  appValueList: Record<string, T>;
  handleAppRecord: (id: string, value: T) => void;
}

const AppContext = createContext<AppContextInterface<AppValueType>>({
  appValueList: {},
  handleAppRecord: (id, value) => {},
});

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [appValueList, setAppValueList] = useState<
    Record<string, AppValueType>
  >({});

  const handleAppRecord = <T extends AppValueType>(
    id: string,
    value: T
  ): void => {
    setAppValueList((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <AppContext.Provider value={{ appValueList, handleAppRecord }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

import { createContext, ReactNode, useState } from 'react';

type UserContextType = {
  user: string | null;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
  search: boolean;
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
};

type UserContextProps = {
  children: ReactNode;
};

const initialValue = {
  user: '',
  setUser: () => {},
  search: false,
  setSearch: () => {},
};

export const UserContext = createContext<UserContextType>(initialValue);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [user, setUser] = useState<string | null>(null);
  const [search, setSearch] = useState<boolean>(false);

  return (
    <UserContext.Provider value={{ user, setUser, search, setSearch }}>
      {children}
    </UserContext.Provider>
  );
};

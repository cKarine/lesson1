import { useState, useContext, createContext } from "react";

const usersContext = createContext();
const setUsersContext = createContext();

export const useUserContext = () => {
  return useContext(usersContext);
};

export const useSetUsersContext = () => {
  return useContext(setUsersContext);
};

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  return (
    <usersContext.Provider value={users}>
      <setUsersContext.Provider value={setUsers}>
        {children}
      </setUsersContext.Provider>
    </usersContext.Provider>
  );
};

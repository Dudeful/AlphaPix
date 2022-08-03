import { createContext, PropsWithChildren, useState } from "react";


const UserContext = createContext({});

const UserContextProvider:React.FC  =({ children }:PropsWithChildren) => {
    const [userState, setUserState] = useState({});
  return (
    <UserContext.Provider value={[ userState, setUserState ]}>
      {children}
    </UserContext.Provider>
  );    
};

export { UserContextProvider };
export default UserContext
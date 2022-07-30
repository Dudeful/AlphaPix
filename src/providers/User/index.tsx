import React, {createContext, PropsWithChildren} from "react"

export const UserContext = createContext({})

export const UserProvider:React.FC<PropsWithChildren> = ({children}) => {
    const user = {
        account: "account-test",
        agency: "agency-test"
    }
    
    return(
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}
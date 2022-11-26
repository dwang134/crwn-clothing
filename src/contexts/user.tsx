import React, {createContext, useState} from 'react'

//as the actual value you want to access
export const UserContext = createContext<any>({
    currentUser: null,
    setCurrentUser: ()=> null,
})

interface Props{
    children: React.ReactNode
}

//the actual functional component
export const UserProvider:React.FC<Props> = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};
    
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
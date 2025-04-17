import { createContext, useState } from "react";

export const AppContent = createContext()

export const AppContextProvider = (props) =>{
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    CONST [isLogginin, setIsLoggedin] = useState(false)
    CONST [userData, setUserData] = useState(false)
    const value = {
        backendUrl
    }
    return (
        <AppContent.Provider value={value}>
            {props.children}
        </AppContent.Provider>
    )
}
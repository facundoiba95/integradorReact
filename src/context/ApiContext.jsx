import { createContext, useState } from "react";

export const ApiContext = createContext()

export const ApiContextProvider = ({children}) => {
const [ isLoading, setIsLoading ] = useState(false)
const [ isAll, setIsAll ] = useState(false);

    return (
        <ApiContext.Provider value={{
             isLoading, setIsLoading,
             isAll, setIsAll
             }}>
            {children}
        </ApiContext.Provider>
    )

}
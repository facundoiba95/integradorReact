import { createContext, useState } from "react";

export const ApiContext = createContext()

export const ApiContextProvider = ({children}) => {
const [ isLoading, setIsLoading ] = useState(false)

    return (
        <ApiContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </ApiContext.Provider>
    )

}
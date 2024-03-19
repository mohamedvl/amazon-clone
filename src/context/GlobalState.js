import { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { initailState } from "./AppReducer";

const GlobalContext=createContext()

const GlobalProvider = ({children}) => {
    const [state,dispatch]=useReducer(AppReducer,initailState)

  return (
    <GlobalContext.Provider value={{basket:state.basket,user:state.user,dispatch}}>
    {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider
export const useAuth=()=>{
    return useContext(GlobalContext)
}

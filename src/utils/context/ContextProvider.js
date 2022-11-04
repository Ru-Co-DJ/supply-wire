import React,{useState, createContext, useContext} from 'react'
const StateContext = createContext();

export const ContextProvider = ({children}) => {
  const [account, setAccount] = useState({})

  return (
    <StateContext.Provider
      value={{account, setAccount}}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = ()=> useContext(StateContext)
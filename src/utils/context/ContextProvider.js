import React,{useState, createContext, useContext} from 'react'
const StateContext = createContext();

export const ContextProvider = ({children}) => {
  const [account, setAccount] = useState(localStorage.getItem("account") ? JSON.parse(localStorage.getItem("account")) : {})
  const [cart, setCart] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [])
  return (
    <StateContext.Provider
      value={{account, setAccount, cart, setCart}}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = ()=> useContext(StateContext)
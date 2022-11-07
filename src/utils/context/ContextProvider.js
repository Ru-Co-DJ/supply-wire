import React,{useState, createContext, useContext} from 'react'
const StateContext = createContext();

export const ContextProvider = ({children}) => {
  const [account, setAccount] = useState({})
  const [selectedProduct, setSelectedProduct] = useState({})
  return (
    <StateContext.Provider
      value={{account, setAccount,selectedProduct, setSelectedProduct}}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = ()=> useContext(StateContext)
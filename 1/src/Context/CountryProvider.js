import React, { createContext, useState } from 'react'
export const CountryContext= createContext({})
export default function CountryProvider({children}) {
    const [country,setCountry]=useState()
    const[data,setData]=useState()
    const [suggest,setSuggest]= useState([])
  return (
    <CountryContext.Provider value={{country,setCountry,data,setData,suggest,setSuggest}}>
        {children}
    </CountryContext.Provider>
  )
}

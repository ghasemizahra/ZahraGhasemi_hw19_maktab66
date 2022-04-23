import React, { createContext, useState } from 'react'
export const valueContext=createContext({});

export default function Mycontext({children}) {
   const [countrycontext,setcountrycontext]=useState([])
  return (
    <div>
        
<valueContext.Provider value={{countrycontext,setcountrycontext}}>
{children}

</valueContext.Provider>
    </div>
  )
}

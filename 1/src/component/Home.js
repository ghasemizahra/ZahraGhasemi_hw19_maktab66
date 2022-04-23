import React, { useEffect, useState,useContext } from 'react'
import axios from 'axios';
import {Link,Outlet,userSearchParams} from 'react-router-dom'
import { valueContext} from './mycontext'
export default function Home() {
    const [country,setcountry]=useState([]);
  const  [countrycontext,setcountrycontext]=useContext(valueContext)

    useEffect (()=>{
axios.get("https://restcountries.com/v2/all").then((res)=>{
    console.log(res);
    setcountry(res.data)
    setcountrycontext(res.data)
})
// .catch((err)=>{
//     alert(err.response.statuseText)
// })
    },[]);
  return (
<>
    

 {country
    .map((countrys) => (
        <ul className='Card '>
          <Link to ="/Home" className=''> Back</Link>
      <Link to ={`${countrys.popuLation}`}><li className='cards'><img src={countrys.flags.svg} /></li></Link>
      <li className='cards'key={countrys.name}>{countrys.name}</li>
      <li className='cards'key={countrys.population}>Population:{countrys.population}</li>
      <li className='cards'key={countrys.region}>Region:{countrys.region}</li>
      <li className='cards'key={countrys.capital}>Capital:{countrys.capital}</li>

      </ul>


    ))}

    



   
</>
)}




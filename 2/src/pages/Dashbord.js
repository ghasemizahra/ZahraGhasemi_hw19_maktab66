import React, { useContext, useState } from 'react'
import {CheckLogin} from "../context/checkLogin";
import { useLocation, Navigate } from "react-router-dom";
import { Button } from '@mui/material';


export default function Dashbord() {
  const { nameUser, setNameuser } = useContext(CheckLogin);
  const { userLogin, setUserLogin } = useContext(CheckLogin);
  const [logOut,setLogout] = useState(false)
  const location = useLocation();


  
}

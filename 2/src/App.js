import "./App.css";
import Header from "./components/Header";
import Context from "./context/checkLogin";
import { useState } from "react";
import Login from './pages/Login'
import Dashbord from './pages/Dashbord'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import AbilitySection from './components/AbilitySection'
import { Grid} from '@mui/material';

 
function App() {

  return (
    <>

      <Context>
     
 <Grid item xs={6}>  
 <Routes>     
         <Route path="/" element={<Header />}>
            
          <Route path="/" element={<Home/>} />
            <Route path='/login' element={<Login />} />
              <Route path="/Dashbord" element={<Dashbord/>}/>
              </Route>
        </Routes>
          </Grid>
      <Grid container justifyContent={'space-around'} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt: 2}}>
          <Grid item xs={6}>
          <AbilitySection title="Web Design" />
              <AbilitySection title="Front-End" />
              <AbilitySection title="Back-End" />
          
          </Grid>
         
      </Grid>
       

         
      </Context>
      
    </>
  );
}

export default App;

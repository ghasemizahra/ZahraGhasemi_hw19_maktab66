import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import AbilitySection from './components/AbilitySection'
import EditForm from './components/EditForm'
import {useState} from 'react'
import {Container, Grid, Box} from '@mui/material';

function App() {
  const [webDesign, setWebDesign] = useState([])
  const [fronEnd, setFronEnd] = useState([])
  const [backEnd, setBackEnd] = useState([])
  const [edit, setEdit] = useState(false)

  const handleClick = () => setEdit(true)

  return (
    <div className="App">
      <Header />
        <Grid container justifyContent={'space-around'} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt: 2}}>
          <Grid item xs={6}>
              <AbilitySection title="Web Design" handleClick={handleClick}/>
              <AbilitySection title="Front-End" handleClick={handleClick}/>
              <AbilitySection title="Back-End" handleClick={handleClick}/>
          </Grid>
          <Grid item xs={6}>
              <EditForm edit={edit}/>
          </Grid>
      </Grid>
      
      
    </div>
  );
}

export default App;

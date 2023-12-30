// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Alert } from '@mui/material';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import WeatherApp from './WeatherApp';


function App() {
  // let handelClick=()=>{
  //   console.log("Button was Clicked");
  // }
  return(
    <>
    {/* <h1>Material UI Demo</h1>
    <Button variant="contained" onClick={handelClick}
    color="error">Click Me!</Button>
    <Button variant="outlined" size='large' onClick={handelClick} >
      Click Me!</Button>
    <Button variant="outlined" startIcon={<DeleteIcon />} size='large' onClick={handelClick} >
     Delete</Button>
    <Alert severity='error'>Delete Option is given ! </Alert> */}
    {/* <SearchBox/>
    <InfoBox/> */}
    <WeatherApp/>
    </>
  )
  
}

export default App

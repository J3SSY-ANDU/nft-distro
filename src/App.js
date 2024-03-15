import './App.css';
import React, {useState, useEffect} from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, About, Explore, FAQ, BecomeArtist } from './pages';
// import Layout from './Layout';
import Loader from './components/loader/Loader';
import { Fade } from '@mui/material';

function App() {
  const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 2100)
    }, [])

  return (
          loader ? 
          <Loader /> : 
          <Fade in={!loader} timeout={{ enter: 2000 }}>
            <div>
              <Home />
            </div> 
          </Fade>
      );
}

export default App;

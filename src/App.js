import './App.css';
import React, {useState, useEffect} from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, About, Explore, FAQ, BecomeArtist } from './pages';
// import Layout from './Layout';
import Loader from './components/loader/Loader';

function App() {
  const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 3000)
    }, [])

  return (
      loader ? <Loader /> : <Home />
  );
}

export default App;

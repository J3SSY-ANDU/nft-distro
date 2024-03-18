import './App.css';
import React, {useState, useEffect} from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages';
// import Layout from './Layout';
import headerImage from './assets/header-image.webp';
import ballImage from './assets/ball.png';
import Loader from './components/loader/Loader';
import { Fade } from '@mui/material';

function App() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const headerImg = new Image();
    const ballImg = new Image();

    let headerLoaded = false;
    let ballLoaded = false;

    headerImg.onload = () => {
      headerLoaded = true;
      if (ballLoaded) {
        setImagesLoaded(true);
      }
    };

    ballImg.onload = () => {
      ballLoaded = true;
      if (headerLoaded) {
        setImagesLoaded(true);
      }
    };

    headerImg.src = headerImage;
    ballImg.src = ballImage;

    return () => {
      headerImg.onload = null;
      ballImg.onload = null;
    };
  }, []);

  return (
          !imagesLoaded ? 
          <Loader /> : 
          <Fade in={imagesLoaded} timeout={{ enter: 2000 }}>
            <div>
              <Home headerImage={headerImage} ballImage={ballImage}/>
            </div> 
          </Fade>
      );
}

export default App;

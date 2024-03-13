import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, About, Explore, FAQ, BecomeArtist } from './pages';
import Layout from './Layout';

function App() {
  return (
    <Home />
  );
}

export default App;

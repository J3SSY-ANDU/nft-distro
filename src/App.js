import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, About, Explore, FAQ, BecomeArtist } from './pages';
import Layout from './Layout';

function App() {
  return (
    <Router>
      <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/explore' element={<Explore />}/>
        <Route path='/FAQ' element={<FAQ />}/>
        <Route path='/become-artist' element={<BecomeArtist />}/>
      </Route>
      </Routes>
    </Router>
  );
}

export default App;

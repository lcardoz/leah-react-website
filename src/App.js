import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Resumes from './components/Resumes';
import Contact from './components/Contact';
import NoPage from './components/NoPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path = '/portfolio' element={ <Portfolio />} />
        <Route path = '/resumes' element={ <Resumes />} />
        <Route path = '/contact' element={ <Contact />} />
        <Route path = '*' element={ <NoPage />} />
        <Route path = '/' element={ <Home />} />
      </Routes>
    </>
  );
}

export default App;

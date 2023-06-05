import NavBar from './components/NavBar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Resumes from './components/Resumes';
import Contact from './components/Contact';
import ContactLinks from './components/ContactLinks';
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
        <Route path = '/' element={ <div style={{height: "calc(100vh - 111px)", overflowY: "scroll", overflowX: "hidden"}}> <Home /> </div>} />
      </Routes>
      <ContactLinks/>
    </>
  );
}

export default App;

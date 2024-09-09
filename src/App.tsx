import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Logs from './pages/Logs.tsx';
import Projects from './pages/Projects.tsx';
import Contact from './pages/Contact.tsx';
import { NavBar } from './components/Navbar';

function App() {
  return (
    <Router>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Logs" element={<Logs/>} />
            <Route path="/Projects" element={<Projects/>} />
            <Route path="/Contact" element={<Contact/>} />
        </Routes>
    </Router>
  )
}

export default App
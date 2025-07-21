import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx';
import MoneyOverflow from './pages/MoneyOverflow.jsx';
import NurtureNest from './pages/NurtureNest.jsx';
import ContactVault from './pages/ContactVault.jsx';
import Resume from './pages/Resume.jsx';
import ContactMe from './pages/ContactMe.jsx';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projects/moneyoverflow' element={<MoneyOverflow/>}/>
      <Route path='/projects/nurturenest' element={<NurtureNest/>}/>
      <Route path='/projects/contactvault' element={<ContactVault/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/contactme' element={<ContactMe/>}/>
    </Routes>
  );
}

export default App;

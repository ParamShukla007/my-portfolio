import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx';
import MoneyOverflow from './pages/MoneyOverflow.jsx';
import NurtureNest from './pages/NurtureNest.jsx';
import ContactVault from './pages/ContactVault.jsx';
import Resume from './pages/Resume.jsx';
import Start from './components/Start.jsx';
import ContactMe from './pages/ContactMe.jsx';
import MonilCard from './components/MonilCard.jsx';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projects/moneyoverflow' element={<MoneyOverflow/>}/>
      <Route path='/projects/nurturenest' element={<NurtureNest/>}/>
      <Route path='/projects/contactvault' element={<ContactVault/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/start' element={<Start/>}/>
      {/* Add a route for the contact me page */}
      <Route path='/contactme' element={<ContactMe/>}/>
      <Route path='/minimal' element={<MonilCard/>}/>
    </Routes>
  );
}

export default App;

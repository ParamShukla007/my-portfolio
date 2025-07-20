import logo from './logo.svg';
import './App.css';
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from './pages/Home.jsx';
import MoneyOverflow from './pages/MoneyOverflow.jsx';
import NurtureNest from './pages/NurtureNest.jsx';
import ContactVault from './pages/ContactVault.jsx';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projects/moneyoverflow' element={<MoneyOverflow/>}/>
      <Route path='/projects/nurturenest' element={<NurtureNest/>}/>
      <Route path='/projects/contactvault' element={<ContactVault/>}/>
      {/* Add more routes as needed */}
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

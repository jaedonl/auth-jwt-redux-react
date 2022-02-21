import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Header from './components/header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.auth)      
  
  return (
    <Router>
      <Header user={user} />
      
      <Routes>
          <Route path="/" element={<Home user={user}/>} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}/>
          
      </Routes>
    </Router>
  );
}

export default App;

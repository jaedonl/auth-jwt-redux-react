import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Header from './components/header/Header';
import { BrowserRouter as Router, Routes, Route, useHistory, Redirect } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}/>

          {/* <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>

          <Route path="/register">{user ? <Redirect to="/" /> : <Register />}</Route> */}
      </Routes>
    </Router>
  );
}

export default App;

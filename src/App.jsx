import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
const App = () => {
  return (
    <>
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="about/*" component={<About/>} />
        </Routes>
        <About/>
      </div>
      
    </Router>
    </>
  );
};

export default App;

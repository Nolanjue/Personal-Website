import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Pages from "./pages/Pages";
function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/Pages' element = {<Pages/>}/>
      </Routes>
    </Router>
  );
}

export default App;

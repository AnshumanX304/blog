import React from "react";
import Navbar from './navbar.js'
import Home from './home'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          {/* <Home/> */}
          <Routes>
              <Route exact path="/" element={<Home/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

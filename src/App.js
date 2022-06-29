
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './component/home';
import Person from './component/Person';
import Contact from './component/Contact';
import './App.css';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
            <ul className="nav-bar">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/person">Student list</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/person' element={< Person />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
 
export default App;
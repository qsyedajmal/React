import React from 'react';
import { BrowserRouter , Route , Routes ,Link } from 'react-router-dom';
import Home from '../About';
import About from '../Home';

function App() {
  return (
    // <BrowserRouter>
    //  <Routes>
    //  <Route path="/" exact component={Home} />
    //  <Route path="/about" component={About} />
    //  </Routes>
    // </BrowserRouter>
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
    
              <Link to="/" className="nav-link " aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <li><Link to="/about" className="nav-link">About</Link></li>
            </li>
          </ul>

        </div>
        </div>
       </nav>
    
    </div>
  );
}

export default App;
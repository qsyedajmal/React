import './App.css';
// import Form from './components/Form/Form';

// import Image from './components/Image/Image.jsx';
// import GridComponent from './components/GridComponent/GridComponent.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
// import SideBar from './components/SideBar/SideBar.jsx';
import { BrowserRouter , Route , Routes ,Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
function App() {
  return (
     <div className="App">
         
      <header className="App-header">

        

        <BrowserRouter>
        <NavBar/> 
          <Routes>
           <Route path="/" exact element={<Home/>}  />
           <Route path="/about" element={<About/>}  />
          </Routes>
        </BrowserRouter>
      {/* <BrowserRouter>  
			  	<nav>
            		<ul>
              			<li>
                			<Link to="/">Home</Link>
              			</li>
              			<li>
                			<Link to="/about">About</Link>
              			</li>	
            		</ul>
          		</nav>
	
          		<Routes>
            		<Route path="/" element={<Home />} />
            		<Route path="/about" element={<About />} />
          		</Routes>
        	</BrowserRouter>  */}
        
      </header>    
      
     </div>
      

   
  );
}

export default App;


 
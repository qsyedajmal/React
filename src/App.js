import './App.css';
// import Form from './components/Form/Form';

import Image from './components/Image/Image.jsx';
import GridComponent from './components/GridComponent/GridComponent.jsx';
import HNavBar from './components/HorizontalNavBar/HNavBar.jsx';
import SideBar from './components/SideBar/SideBar.jsx';
function App() {
  return (
     <div className="App">
        
      <header className="App-header">
        {/* <Form/> */}

        <HNavBar/> 

        <GridComponent/> 
        
        <SideBar/>

        <div className='container'>
          <div className='image-container'>
          <Image/>
          <Image/>
          <Image/>
          <Image/>
          <Image/>
          <Image/>
          <Image/>
          <Image/>
          <Image/>
          <Image/>
          <Image/>
          <Image/> 
          </div>
        </div>
 
        
      </header>    
      
     </div>
      

   
  );
}

export default App;


 
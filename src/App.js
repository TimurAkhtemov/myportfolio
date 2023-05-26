import React from 'react';
import './App.css';

import Header from './components/Header'; 
import About from './components/About';  
import Experience from './components/Experience'; 
import Projects from './components/Projects'; 
import Contact from './components/Contact'; 



function App() {
  return (
    <div className="App">
      
      <Header />
      <div className="main-content">
        
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}




export default App;

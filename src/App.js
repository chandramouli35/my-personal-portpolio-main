import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';
import Home from './components/home/Home';
import Portpolio from './components/portpolio/Portpolio';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';

function App() {
  return (
   <>
   <Sidebar/>
   <main className='main'>
    <Home/>
    <About/>
    <Resume/>
    <Portpolio/>
    <Contact/>
   </main>
   </>
  );
}

export default App;

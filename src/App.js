import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './routes/Home/Home';
import Books from './routes/Books/Books';
import { Route, Routes } from 'react-router-dom';
import React, {useState} from 'react';

function App() {
  const spinner= document.getElementById('spinner');
  if(spinner){
    setTimeout(()=>{
      spinner.style.display='none';
    },2000);
  }

  return (
    (
      <>
        <Navbar />
        <div>
          <Routes basename={process.env.PUBLIC_URL}>
            <Route path='/' element={<Home/>}/>
            
            <Route path='/Books' element={<Books/>}/>
          </Routes>
        </div>
      </>
    )
  );
}

export default App;

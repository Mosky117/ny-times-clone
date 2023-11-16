import './App.css';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import Books from './routes/Books';
import { Route, Routes } from 'react-router-dom';
import React, { useEffect, useState  } from 'react';

function App() {
  const [loading, setLoading]= useState(true);
  const spinner= document.getElementById('spinner');
  if(spinner){
    setTimeout(()=>{
      spinner.style.display='none';
      setLoading(false);
    },2000);
  }

  return (
    !loading &&(
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

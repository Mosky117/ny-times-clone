import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Books from './pages/Books';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          
          <Route path='/Books' element={<Books/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import Books from './routes/Books';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes basename={process.env.PUBLIC_URL}>
          <Route path='/' element={<Home/>}/>
          
          <Route path='/Books' element={<Books/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;

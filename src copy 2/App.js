
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import CustomerAdd from './CustomerAdd';
import CustomerView from './CustomerView';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './Create';
import Update from './Update';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/create' element={<Create/>}/>
    <Route path='/update/:id' element={<Update/>}/>
  </Routes>
  </BrowserRouter>
    
  );
}

export default App; 

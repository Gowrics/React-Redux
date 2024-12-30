
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CustomerAdd from './CustomerAdd';
import CustomerView from './CustomerView';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './Create';
import Update from './Update';
import IndexPage from './IndexPage';
import Navbar from './NavBar';

function App() {
  return (
  <BrowserRouter>
  <Navbar/>
  <Routes>
  <Route path='/' element={<IndexPage/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/create' element={<Create/>}/>
    <Route path='/update/:id' element={<Update/>}/>
  </Routes>
  </BrowserRouter>
    
  );
}

export default App; 

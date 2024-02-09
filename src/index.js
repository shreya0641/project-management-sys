import React from 'react'; 
import ReactDOM from 'react-dom'; 
import './index.css'; 
import Login from './pages/Login/Login'; 
import Home from './home' 
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
 
function Website(){ 
  return( 
    <BrowserRouter> 
      <Routes> 
        <Route path="/auth/login" element={<Login/>}></Route> 
        <Route path='/home' element={<Home/>} /> 
      </Routes> 
    </BrowserRouter> 
  ); 
} 
 
ReactDOM.render(<Website/>, document.getElementById('root'));
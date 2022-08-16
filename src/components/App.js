import React from 'react'
import { Provider } from 'react-redux';
import {  BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';
import Header from './Header';
import Home from './Home';

const App = () => {
  return (
    
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={( <Home /> )} />
                <Route path="/greeting" element={( <Greeting /> )} />
            </Routes>
        </BrowserRouter>
    
  )
}

export default App

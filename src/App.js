
import './Styles/Styles.css'

import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';

import Home from './Pages/Home';
import Cards from './Pages/Cards';
import AddCard from './Pages/AddCard';

import {getUser} from './Redux/SliceUser';
import  { useDispatch } from 'react-redux';


function App() {

  const dispatch = useDispatch() 
  useEffect(() => {
    dispatch(getUser());
    
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cards" element={<Cards />} />
        <Route path="/AddCard" element={<AddCard />} />
      </Routes>
    </div>
  );
}

export default App;

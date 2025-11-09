import './App.css'
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './Component/Home'
import Header from './Component/Header';
import Footer from './Component/Footer';

function App() {


  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element = {<Home/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App

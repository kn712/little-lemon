import './App.css';
import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer'
import BookingForm from './BookingForm'
import {useState} from 'react';
import  { useEffect } from 'react';
import {useReducer, useRef} from 'react';
import { UserProvider, useUser } from './UserContext';

function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <Footer/>
    </>
  )
};

export default App;
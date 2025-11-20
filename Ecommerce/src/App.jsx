import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import NavBar from './components/navBar';
import SearchBar from './components/SearchBar';
import Home from './pages/Home';
import UserMenu from './components/UserMenu'
import MenuBar from './components/MenuBar';

function App() {
  

  return (
    <>
    <div>
      <div className='flex flex-row items-center p-6 bg-orange-400 rounded-lg'>
        <NavBar />
        <SearchBar />
        <UserMenu />
      </div>
      <MenuBar />
    </div>
    

        <Routes>
            <Route path='/' element={<Navigate to="/Home"/>}/>
            <Route path='/home' element={<Home />} />
        </Routes>
    </>
  )
}

export default App

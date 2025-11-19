import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="p-10 bg-red-500 text-white rounded-xl">
  Hello
</div>

    </>
  )
}

export default App

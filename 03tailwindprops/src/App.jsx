import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text bg-green-500 rounded-lg'>Tailwind CSS</h1>
    <Card />
    </>
  )
}

export default App
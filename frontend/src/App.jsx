import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Filter</h1>
      <h2>Filter</h2>
      {count}
    </div>
  )
}

export default App

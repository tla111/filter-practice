import { useState } from 'react'
import './App.css'
import FilterNames from './components/filterNames'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Filter</h1>
      <FilterNames />
      {count}
    </div>
  )
}

export default App

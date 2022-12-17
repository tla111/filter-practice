import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(1)

  return (
    <div>
      {count}
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import FilterNames from './components/filterNames'
import DropdownMenu from './components/DropdownMenu'
import TodoList from './components/Todo'

function App() {

  return (
    <div className="App">
      {/* <FilterNames /> */}
      {/* <DropdownMenu /> */}
      <TodoList />
    </div>
  )
}

export default App

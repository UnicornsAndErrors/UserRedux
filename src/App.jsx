import React from 'react'
import UserList from './components/UserList'
import AddUser from './components/AddUser'
import "./App.css"
import {Routes,Route} from "react-router-dom"
import EditUser from './components/EditUser'

const App = () => {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<AddUser/>} />
        <Route path="/edit-user/:id" element={<EditUser/>} />
      </Routes>
    </div>
  )
}

export default App
import React from 'react'
import Home from './Home/Home'
import {Route,Routes} from 'react-router-dom'
import Genres from './genre/Genres'
import Signup from './Components/Signup'


function App() {
  return (
    <>
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genre" element={<Genres/>} />
          <Route path="/signup" element={<Signup/>} />

     </Routes>
    </>
  )
}

export default App
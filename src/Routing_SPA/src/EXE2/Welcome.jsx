import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Names from './Names'

export default function Welcome() {



  return (
    <>
    <h2>Welcome!</h2>
    <button > <Link to={'names'}></Link>Start</button>
    <Routes>
        <Route path='' element={<Welcome/>} ></Route>
        <Route path='/names' element={<Names/>} ></Route>

    </Routes>
    </>
  )
}

import React, { useEffect, useState } from 'react'
import {getAllUsers} from '../Utilis'
import { Route, Routes, Link } from 'react-router-dom'
import Users from './Users'
import User from './User'
import Posts from './Posts'
import Todos from './todos'


export default function HomePage() {

  return (
<>
      <div className='navbar'>
                <Link to={""}>Users</Link>
            </div>



            <Routes>
                <Route path='' element={<Users/>} />


                <Route path='/user/:id' element={<User/>} >

                    <Route path="posts" element={<Posts />} />
                    <Route path="todos" element={<Todos />} />
                    
                </Route>

            </Routes>
</>


    
   
  )
}

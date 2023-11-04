import React from 'react'
import { useState, useEffect } from 'react'
import {Link, Outlet, useParams} from 'react-router-dom'
import {getOneUser} from '../Utilis'


export default function User() {

  const params = useParams()
  const [user , setUser]=useState({});

  const getUser = async ()=>{
    const response = await getOneUser (params.id);
    setUser(response);
  }


    useEffect(()=>{
    getUser();
},[])

    
  return (
    <>
    <div>User number {user.id}</div>
    <div>Name: {user.name}</div>
    <div>email: {user.email}</div>
    <div>address: {user.address?.city}</div>
    <br /><br />
    <Link to={"posts"}>Posts</Link> &nbsp; <Link to={"todos"}>Todos</Link>
    <br />
    <Outlet />
    </>
  )
}

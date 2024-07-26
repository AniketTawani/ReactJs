import './App.css'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import React, { useState, useEffect } from 'react'
import {login, logout} from "./store/authSlice"
import { Header, Footer } from './components'
import {Outlet} from 'react-router-dom'
function App() {

  const[loading, setLoading] = useState(true);
  const dispatch = useDispatch()
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>{
      setLoading(false)
    })
  }, [])


  return !loading ? (
    <div>
      <div>
        <Header></Header>
        <main>
            Todo : <Outlet/>
        </main>
        <Footer></Footer>
      </div>
    </div>
  ) : null
}

export default App

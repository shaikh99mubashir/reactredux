import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { edit } from '../../ReduxTool/LoginReducer'

const Login = () => {
  const [data , setData] =  useState({
    email:'',
    userName:'',
    password:"",
  })
  
  const dispatct = useDispatch()
  const navigate = useNavigate()
  const sendData =() =>{
    dispatct(edit(data))
    navigate('/')
  }

  return (
    <div>
    Login
    <input type="text" label='email'     onChange={(e)=>setData({...data, email:e.target.value})} />
    <input type="text" label='User Name' onChange={(e)=>setData({...data, userName:e.target.value})}  />
    <input type="text" label='pasword'   onChange={(e)=>setData({...data, password:e.target.value})}  />

    <button onClick={sendData}>Login</button>

    </div>
  )
}

export default Login
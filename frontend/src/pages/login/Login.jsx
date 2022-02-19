import React, { useEffect, useState } from 'react'
import './Login.scss'
import { login, resetError } from '../../redux/apiCalls'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const { isLoading, isError, user } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  

  const { email, password } = formData

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()    
    login(dispatch, { email, password})        
  }
   
  return (
    <div className="login">
      <form className="contactForm">
        <h1>Login</h1>

        <div className='form-group'>
            <label>Email</label>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              placeholder='Enter your email'
              onChange={onChange}
            />
        </div>
        <div className='form-group'>
            <label>Password</label>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
            />
        </div>

        <button className="contactSubmit" onClick={handleSubmit}>SUBMIT</button>          
        { isError && <h3>login failed.</h3>}
                      
      </form>   
    </div>
  )
}

export default Login
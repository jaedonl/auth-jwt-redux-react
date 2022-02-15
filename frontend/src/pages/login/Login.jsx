import React, { useEffect, useState } from 'react'
import './Login.scss'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
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

                      
      </form>   
    </div>
  )
}

export default Login
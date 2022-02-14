import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
// import loginSlice from '../../redux/login/loginSlice'
import './LoginForm.scss'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <div className="login_form">
      <form className="contactForm">
        <div>
          <label>Name</label>
          <input type="text" placeholder="Name" name="user_name" />
        </div>

        <div>
          <label>Email</label>
          <input type="email" placeholder="Subject" name="user_email" />
        </div>        

        <div>
          <label>Password</label>
          <input type="password" placeholder="Email" name="user_password" />
        </div>        

        <div>
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm Password" name="user_confirm_password" />
        </div>        

        <button className="contactSubmit" onClick={handleSubmit}>SUBMIT</button>          

                      
      </form>     
    </div>
  )
}

export default LoginForm
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Register.scss'

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  })
  const [isSuccess, setIsSuccess] = useState(null)
  const navigate = useNavigate()

  const { username, email, password, password2 } = formData

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  

  const onSubmit = async (e) => {
    e.preventDefault()
  
    if (password !== password2) {
      alert('Password not matching.')      
    } 
    else {
      try {
        const res = await axios.post('http://localhost:8000/api/auth/register', {username, email, password});
        console.log(res.data);
        setIsSuccess(true)
        navigate('/')

      } catch (error) {
        console.log(error);
        setIsSuccess(false)
      }    
    }

    
  }

  return (
    <div className='register'>

      <section className='form'>
        <h1>Register</h1>
        <form>
          <div className='form-group'>
            <label>Name</label> 
            <input
              type='text'
              className='form-control'
              id='name'
              name='username'
              value={username}
              placeholder='Enter your name'
              onChange={onChange}
            />
          </div>
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
          <div className='form-group'>
            <label>Confirm Password</label>
            <input
              type='password'
              className='form-control'
              id='password2'
              name='password2'
              value={password2}
              placeholder='Confirm password'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block' onClick={onSubmit}>
              Submit
            </button>
          </div>
        </form>
        
        { isSuccess === false ? <h1>Register Failed</h1>          
                              : "" }
      </section>
    </div>
  )
}

export default Register
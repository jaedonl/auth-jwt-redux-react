import { useState, useEffect } from 'react'
import axios from 'axios'
import { login } from '../../redux/apiCalls'
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import './Register.scss'

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  })
  const { user } = useSelector((state) => state.auth)
  const [isSuccess, setIsSuccess] = useState(null)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  
  useEffect(() => {
    if (user) navigate('/')
  },[location])

  const { username, email, password, password2 } = formData

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
  
    if (password !== password2) {
      alert('Password not matching.')      
    } 
    else {
      try {
        const res = await axios.post('http://localhost:8000/api/auth/register', {username, email, password});
        console.log(res.data);
        setIsSuccess(true)
        login(dispatch, { email, password})

        navigate('/')

      } catch (error) {
        console.log(error);
        setIsSuccess(false)
      }    
    }
  }

  return (
    <div className='register'>
      <form className="contactForm">
        <h1>Register</h1>
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
        
        <button className='contactSubmit' onClick={handleSubmit}>Submit</button>
        { isSuccess === false ? <h1>Register Failed</h1> : "" }
      </form>              
    </div>
  )
}

export default Register
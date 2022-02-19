import React from 'react'
import './Home.scss'
import { useSelector } from 'react-redux'


const Home = () => {
  // const user = useSelector((state) => state.user)
  // console.log(user);

  return (
    <div className="home">
      <div>
        <h2>Please Log in.</h2>
      </div>

      <div>
        <h2>Hi, Jaedon!</h2>        
        <h4>You are logged in.</h4>
      </div>      
    </div>
  )
}

export default Home
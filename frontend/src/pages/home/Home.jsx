import React from 'react'
import './Home.scss'

const Home = ({ user }) => {
  const currentUser = user.user
  
  return (
    <div className="home">
      
      { currentUser ? <h1>Welcome, <br/>{currentUser.username}</h1> : <h1>Please Log in.</h1>}
      
    </div>
  )
}

export default Home
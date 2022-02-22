import React from 'react'
import './Home.scss'
import Board from '../../components/board/Board'

const Home = ({ user }) => {
  const currentUser = user.user
  
  return (
    <div className="home">
      { currentUser ? <h1>Welcome, <br/>{currentUser.username}</h1> : <h1>Please Log in.</h1>}
      
      <hr />

      <Board />

    </div>
  )
}

export default Home
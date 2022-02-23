import React, {useState, useEffect} from 'react'
import { userRequest } from "../../requestMethods";
import './Home.scss'
import Board from '../../components/board/Board'
import { useSelector } from 'react-redux';
import axios from 'axios'


const Home = () => {
  const user = useSelector((state) => state.auth).user
  const [string, setString] = useState('')
  
  const changePermission = (e) => {
    setString(e.target.value)
  }

  useEffect(() => {
    if (!document.querySelector('.permissionBtn')) return
    if (string === 'permission') document.querySelector('.permissionBtn').disabled = false
    else document.querySelector('.permissionBtn').disabled = true    
  }, [string])

  const updatePermission = async () => {
    try {
      const res = await userRequest.put(`/users/${user.username}`, {
          isAdmin: false
      })
      console.log(res.data)
      
    } catch (error) {
        console.log(error)
    }      
  }
  
  return (
    <div className="home">
      { user ? <h1>Welcome, <br/>{user.username}</h1> : <h1>Please Log in.</h1>}
      

      { 
        (!user || (user && !user.isAdmin)) ? 
          <div>
            <h2>only for admin</h2> 

            { (user && !user.isAdmin) ? 
            <>
              <h3>Please write "<i>permission</i>"</h3>
              <input type="text" placeholder="permission" name="permission" value={string} onChange={changePermission} />
              
              <button className="permissionBtn" onClick={updatePermission}>Submit</button>
            </> : ''
            }
          </div>

        : <Board/>
      }

      
        

    </div>
  )
}

export default Home
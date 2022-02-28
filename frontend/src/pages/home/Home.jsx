import React, {useState, useEffect} from 'react'
import './Home.scss'
import Board from '../../components/board/Board'
import { useSelector, useDispatch } from 'react-redux';
import {changeUserPermission} from '../../redux/apiCalls'


const Home = () => {
  const user = useSelector((state) => state.auth).user
  const [string, setString] = useState('')
  const dispatch = useDispatch()

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
      await changeUserPermission(dispatch, user.username)
            
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

            { (user && !user.isAdmin) ? 
            <>
              <h2>Only Admin can see the board.</h2>
              <h3>Please write "<i>permission</i>" and submit to be an admin.</h3>
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
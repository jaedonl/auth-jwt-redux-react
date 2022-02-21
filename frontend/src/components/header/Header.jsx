import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import { logout } from '../../redux/apiCalls'
import { useDispatch } from 'react-redux'

const Header = ({ user }) => { 
    const dispatch = useDispatch()
    const currentUser = user.user
    
    const handleLogout = () => {        
        logout(dispatch)
    }

    return (
        <nav className="header">
            <ul>
                <li><Link to='/'>Home</Link></li>
                { currentUser 
                    ? <li onClick={handleLogout}>logout</li>
                    : <>
                        <li><Link to='/login'>login</Link></li>
                        <li><Link to='/register'>register</Link></li>
                      </>
                }
            </ul>
        </nav>
    )
}

export default Header
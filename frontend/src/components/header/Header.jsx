import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import { logout } from '../../redux/apiCalls'
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {
    const dispatch = useDispatch()
    
    // const handleLogout = (e) => {
    //     logout(dispatch)
    // }

    return (
        <nav className="header">
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/login'>login</Link>
                </li>
                <li>
                    <Link to='/register'>register</Link>
                </li>
                {/* <li onClick={handleLogout}>
                    logout
                </li> */}
            </ul>
        </nav>
    )
}

export default Header